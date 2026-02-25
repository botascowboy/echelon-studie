# ClinicalTrials.gov API Integration

## ✅ Conexión Activa

La plataforma está ahora integrada con la API oficial de **ClinicalTrials.gov** (versión 2).

### API Base URL
```
https://clinicaltrials.gov/api/v2
```

## Endpoints Implementados

### 1. `/api/trials` - Búsqueda de Ensayos
**Fuente:** ClinicalTrials.gov API (con fallback a mock data)

**Parámetros soportados:**
- `q` - Término de búsqueda
- `location` - Ciudad/Estado
- `phase` - Fase del ensayo (PHASE1, PHASE2, PHASE3)
- `compensation` - Con compensación (true/false)
- `page` - Paginación
- `pageSize` - Resultados por página

**Filtros aplicados automáticamente:**
- `status:RECRUITING` - Solo ensayos reclutando
- `condition:obesity|weight|overweight|diabetes` - Condiciones relacionadas con peso

**Respuesta:**
```json
{
  "trials": [...],
  "page": 1,
  "pageSize": 9,
  "total": 247,
  "totalPages": 28,
  "source": "api", // o "mock" si hay error
  "hasMore": true
}
```

### 2. `/api/trials/[nctId]` - Detalle de Ensayo
**Fuente:** ClinicalTrials.gov API

Ejemplo: `/api/trials/NCT05645691`

**Respuesta:**
```json
{
  "trial": { ... },
  "source": "api",
  "url": "https://clinicaltrials.gov/study/NCT05645691"
}
```

## Transformación de Datos

Los datos de ClinicalTrials.gov se transforman a nuestro formato:

| Campo API | Nuestro Campo | Descripción |
|-----------|---------------|-------------|
| `protocolSection.identificationModule.nctId` | `nct_id` | Identificador único |
| `protocolSection.identificationModule.briefTitle` | `title` | Título corto |
| `protocolSection.statusModule.overallStatus` | `overall_status` | Estado (RECRUITING, etc) |
| `protocolSection.designModule.phases` | `phase` | Fase del ensayo |
| `protocolSection.eligibilityModule.eligibilityCriteria` | `eligibility_criteria` | Criterios de elegibilidad |
| `protocolSection.contactsLocationsModule.facilities` | `locations` | Ubicaciones |

## Enriquecimiento con IA

Campos generados por IA a partir de los datos de ClinicalTrials.gov:

- `ai_summary` - Resumen en lenguaje sencillo
- `ai_tags` - Etiquetas relevantes
- `ai_what_to_expect` - Qué esperar como participante
- `ai_estimated_duration` - Duración estimada
- `ai_visit_frequency` - Frecuencia de visitas
- `ai_potential_risks` - Riesgos potenciales
- `ai_potential_benefits` - Beneficios potenciales
- `ai_questions_to_ask` - Preguntas sugeridas
- `weight_loss_relevance_score` - Puntuación de relevancia (0-100)

## Sistema de Fallback

Si la API de ClinicalTrials.gov falla:

1. **Primer intento:** Llamada a API real
2. **Si falla:** Usar datos mock (6 ensayos de ejemplo)
3. **Si no encuentra:** Devolver error 404

Esto garantiza que la página siempre funcione, incluso si la API está caída.

## Caché

Las respuestas se cachean:
- `/api/trials` - 5 minutos (`max-age=300`)
- `/api/trials/[nctId]` - 10 minutos (`max-age=600`)

## Ejemplos de Uso

### Buscar ensayos en Nueva York
```
GET /api/trials?location=New+York&page=1
```

### Buscar ensayos fase 3 con compensación
```
GET /api/trials?phase=PHASE3&compensation=true
```

### Ver detalle de ensayo específico
```
GET /api/trials/NCT05645691
```

## Datos Mock (Fallback)

Cuando la API no está disponible, usamos estos ensayos de ejemplo:

1. **NCT05645691** - Semaglutide vs Placebo (Fase 3)
2. **NCT06123456** - Tirzepatide + Lifestyle (Fase 2)
3. **NCT05987654** - Novel Appetite Suppressant (Fase 2)
4. **NCT05876543** - Metabolic Surgery vs Medical (Observacional)
5. **NCT05765432** - Digital Health Coaching (Fase 2)
6. **NCT05654321** - High-Protein vs Intermittent Fasting (Fase 3)

## Monitoreo

Los logs muestran:
```
[ClinicalTrials.gov] Fetching: https://clinicaltrials.gov/api/v2/studies?...
[API /trials] Fetching with params: { page: 1, pageSize: 9, ... }
[API /trials/NCT05645691] Found in ClinicalTrials.gov
```

## Limitaciones de la API

1. **Rate limiting:** Sin límite estricto documentado, pero se recomienda no abusar
2. **Datos de compensación:** No siempre disponibles explícitamente
3. **Ubicaciones:** A veces requieren geocodificación adicional
4. **Campos opcionales:** Algunos ensayos tienen datos incompletos

## Próximas Mejoras

- [ ] Geocodificación de ubicaciones para mapa
- [ ] Sincronización periódica con base de datos local
- [ ] Más filtros (fecha, tipo de intervención, etc.)
- [ ] Búsqueda por proximidad geográfica
- [ ] Alertas cuando nuevos ensayos coinciden con criterios del usuario

---

**URL Local:** http://localhost:4321/

**Documentación API oficial:** https://clinicaltrials.gov/data-api/api
