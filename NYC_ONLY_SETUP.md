# 🗽 Configuración: Solo New York City

El proyecto ha sido simplificado para centrarse exclusivamente en la ciudad de **New York City**. Se han eliminado las otras 4 ciudades para ofrecer una experiencia local más directa.

## ✅ Cambios Realizados

### 1. Configuración Centralizada
**Archivo**: `src/lib/config.ts`
- Se ha reducido `TARGET_CITIES` a un único elemento: NYC.
- Se ha actualizado `CITY_SEARCH_TERMS`.

### 2. UI Simplificada
**Archivo**: `src/components/Hero.astro`
- Se han eliminado las "city pills" (botones de selección de ciudad).
- Se ha actualizado el texto del Hero para mencionar específicamente NYC.
- Estadísticas micro-actualizadas para reflejar el mercado local.

**Archivo**: `src/components/StudiesGrid.astro`
- Se ha eliminado el desplegable de filtro por ubicación.
- Se utiliza un `input type="hidden"` con valor "New York" para mantener la lógica de filtrado interna.
- Se ha actualizado el encabezado de la cuadrícula de estudios.

### 3. Contenido Localizado
**Archivos**: `src/pages/en/index.astro` y `src/pages/es/index.astro`
- Se ha actualizado la sección "How it works" / "Cómo funciona" para eliminar referencias a "across the US" y centrarse en NYC.

### 4. Datos Mock Optimizados
**Archivo**: `src/lib/mockTrials.ts`
- Simplificada la generación de datos para centrarse solo en NYC.
- Compensación ajustada al estándar premium de NYC ($600 - $1,500).

## 🚀 Impacto
- **Claridad**: El usuario sabe inmediatamente que el servicio es para NYC.
- **Simplicidad**: Menos clics para ver los estudios relevantes.
- **Rendimiento**: Menos datos generados en el lado del cliente/servidor.

---
*Nota: El sistema sigue preparado tecnicamente para añadir más ciudades en el futuro si fuera necesario.*
