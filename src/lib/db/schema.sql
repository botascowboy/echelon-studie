-- Clinical Trials Database Schema for D1/SQLite
-- Optimized for weight loss trials with AI enrichment

-- Tabla principal de ensayos clínicos enriquecidos
CREATE TABLE IF NOT EXISTS trials (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nct_id TEXT UNIQUE NOT NULL,
    
    -- Datos básicos de ClinicalTrials.gov
    title TEXT NOT NULL,
    official_title TEXT,
    brief_summary TEXT,
    detailed_description TEXT,
    
    -- Estado y fase
    overall_status TEXT NOT NULL,
    status_label TEXT,
    phase TEXT,
    phase_label TEXT,
    phase_description TEXT,
    phase_color TEXT,
    
    -- Tipo de estudio
    study_type TEXT,
    
    -- Elegibilidad
    eligibility_criteria TEXT,
    eligibility_summary_must TEXT, -- JSON array
    eligibility_summary_cannot TEXT, -- JSON array
    eligibility_age_range TEXT,
    eligibility_bmi_requirements TEXT,
    
    -- Participantes
    enrollment_count INTEGER,
    sex TEXT,
    minimum_age TEXT,
    maximum_age TEXT,
    
    -- Ubicación principal (para búsquedas rápidas)
    primary_location_city TEXT,
    primary_location_state TEXT,
    primary_location_zip TEXT,
    primary_location_country TEXT DEFAULT 'United States',
    locations_count INTEGER DEFAULT 0,
    
    -- Coordenadas para búsqueda por distancia
    latitude REAL,
    longitude REAL,
    
    -- Patrocinador
    lead_sponsor TEXT,
    sponsor_class TEXT,
    
    -- Compensación
    has_compensation BOOLEAN DEFAULT FALSE,
    compensation_amount TEXT,
    compensation_details TEXT,
    
    -- Datos enriquecidos por IA
    ai_summary TEXT,
    ai_what_to_expect TEXT, -- JSON array
    ai_estimated_duration TEXT,
    ai_visit_frequency TEXT,
    ai_potential_risks TEXT, -- JSON array
    ai_potential_benefits TEXT, -- JSON array
    ai_questions_to_ask TEXT, -- JSON array
    ai_tags TEXT, -- JSON array
    weight_loss_relevance_score INTEGER DEFAULT 0,
    
    -- Fechas
    start_date TEXT,
    completion_date TEXT,
    last_update_post_date TEXT,
    
    -- Metadatos
    conditions TEXT, -- JSON array
    keywords TEXT, -- JSON array
    meshes TEXT, -- JSON array
    
    -- Campos de sistema
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    last_synced_at DATETIME,
    is_active BOOLEAN DEFAULT TRUE,
    
    -- Índices
    INDEX idx_nct_id (nct_id),
    INDEX idx_status (overall_status),
    INDEX idx_phase (phase),
    INDEX idx_location_state (primary_location_state),
    INDEX idx_compensation (has_compensation),
    INDEX idx_relevance (weight_loss_relevance_score),
    INDEX idx_updated (last_update_post_date),
    INDEX idx_location_geo (latitude, longitude)
);

-- Tabla de ubicaciones detalladas (relación 1:N con trials)
CREATE TABLE IF NOT EXISTS trial_locations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    trial_id INTEGER NOT NULL,
    facility TEXT,
    city TEXT,
    state TEXT,
    zip TEXT,
    country TEXT,
    status TEXT,
    latitude REAL,
    longitude REAL,
    contact_name TEXT,
    contact_phone TEXT,
    contact_email TEXT,
    FOREIGN KEY (trial_id) REFERENCES trials(id) ON DELETE CASCADE,
    INDEX idx_trial_id (trial_id),
    INDEX idx_state (state),
    INDEX idx_city (city)
);

-- Tabla de contactos centrales
CREATE TABLE IF NOT EXISTS trial_contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    trial_id INTEGER NOT NULL,
    name TEXT,
    role TEXT,
    phone TEXT,
    email TEXT,
    FOREIGN KEY (trial_id) REFERENCES trials(id) ON DELETE CASCADE,
    INDEX idx_trial_id (trial_id)
);

-- Tabla de búsquedas de usuarios (para analytics y mejora)
CREATE TABLE IF NOT EXISTS user_searches (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    session_id TEXT,
    search_query TEXT,
    filters_used TEXT, -- JSON
    location_searched TEXT,
    results_count INTEGER,
    clicked_trials TEXT, -- JSON array de NCT IDs
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_session (session_id),
    INDEX idx_created (created_at)
);

-- Tabla de leads/intereses de pacientes
CREATE TABLE IF NOT EXISTS patient_interests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    trial_id INTEGER NOT NULL,
    session_id TEXT,
    
    -- Datos del paciente (anonimizables)
    email TEXT,
    phone TEXT,
    age INTEGER,
    gender TEXT,
    location_zip TEXT,
    
    -- Pre-cribado
    pre_screen_answers TEXT, -- JSON
    pre_screen_result TEXT, -- 'likely_eligible', 'likely_ineligible', 'uncertain'
    pre_screen_confidence TEXT, -- 'high', 'medium', 'low'
    
    -- Estado del lead
    status TEXT DEFAULT 'new', -- 'new', 'contacted', 'qualified', 'enrolled', 'not_interested'
    notes TEXT,
    
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (trial_id) REFERENCES trials(id) ON DELETE CASCADE,
    INDEX idx_trial_id (trial_id),
    INDEX idx_status (status),
    INDEX idx_created (created_at)
);

-- Tabla de alertas/notificaciones
CREATE TABLE IF NOT EXISTS user_alerts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    session_id TEXT NOT NULL,
    email TEXT NOT NULL,
    
    -- Criterios de alerta
    location_zip TEXT,
    max_distance_miles INTEGER DEFAULT 50,
    phases TEXT, -- JSON array
    requires_compensation BOOLEAN,
    min_relevance_score INTEGER DEFAULT 70,
    
    -- Filtros adicionales
    conditions TEXT, -- JSON array
    excluded_conditions TEXT, -- JSON array
    
    -- Estado
    is_active BOOLEAN DEFAULT TRUE,
    last_notified_at DATETIME,
    notification_count INTEGER DEFAULT 0,
    
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_session (session_id),
    INDEX idx_email (email),
    INDEX idx_active (is_active)
);

-- Tabla de logs de sincronización
CREATE TABLE IF NOT EXISTS sync_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sync_type TEXT, -- 'full', 'incremental'
    started_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    completed_at DATETIME,
    trials_processed INTEGER DEFAULT 0,
    trials_added INTEGER DEFAULT 0,
    trials_updated INTEGER DEFAULT 0,
    trials_failed INTEGER DEFAULT 0,
    error_message TEXT,
    status TEXT DEFAULT 'running' -- 'running', 'completed', 'failed'
);

-- Vista para trials activos ordenados por relevancia
CREATE VIEW IF NOT EXISTS v_active_trials AS
SELECT 
    t.*,
    CASE 
        WHEN t.has_compensation THEN 10 
        ELSE 0 
    END + 
    CASE 
        WHEN t.phase LIKE '%PHASE3%' THEN 20
        WHEN t.phase LIKE '%PHASE2%' THEN 15
        ELSE 10
    END +
    t.weight_loss_relevance_score / 10 as priority_score
FROM trials t
WHERE t.overall_status = 'RECRUITING'
    AND t.is_active = TRUE
ORDER BY priority_score DESC, weight_loss_relevance_score DESC;

-- Trigger para actualizar updated_at
CREATE TRIGGER IF NOT EXISTS update_trials_timestamp 
AFTER UPDATE ON trials
BEGIN
    UPDATE trials SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
END;
