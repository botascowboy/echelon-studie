# 🏙️ Configuración: 5 Ciudades Objetivo

El proyecto ahora está configurado para mostrar **solo 5 ciudades principales** con datos mock que funcionan perfectamente en localhost.

## 🎯 Ciudades Disponibles

| Ciudad | Icono | Estado | ID |
|--------|-------|--------|-----|
| 🗽 **NYC** | New York | NY | `nyc` |
| 🌴 **Miami** | Miami | FL | `miami` |
| 🚀 **Houston** | Houston | TX | `houston` |
| 🌴 **Los Angeles** | Los Angeles | CA | `losangeles` |
| 🌉 **San Francisco** | San Francisco | CA | `sanfrancisco` |

## 🚀 Servidor Local Activo

**URL**: http://localhost:4323/

## ✅ Cambios Realizados

### 1. Configuración Centralizada
**Archivo**: `src/lib/config.ts`

```typescript
export const TARGET_CITIES = [
  { id: 'nyc', name: 'New York City', state: 'NY', ... },
  { id: 'miami', name: 'Miami', state: 'FL', ... },
  { id: 'houston', name: 'Houston', state: 'TX', ... },
  { id: 'losangeles', name: 'Los Angeles', state: 'CA', ... },
  { id: 'sanfrancisco', name: 'San Francisco', state: 'CA', ... },
];
```

### 2. API Adaptada para 5 Ciudades
**Archivo**: `src/pages/api/trials/index.astro`

- ✅ Ya no intenta conectar a ClinicalTrials.gov (evita problemas de CORS/localhost)
- ✅ Genera datos mock específicos para cada ciudad
- ✅ Cada ensayo tiene un ID único por ciudad: `NCT05645691-NYC`, `NCT05645691-MIA`, etc.
- ✅ Compensación varía por ciudad (SF/NYC pagan más: $600-$1,500)
- ✅ Número de ubicaciones varía aleatoriamente

### 3. Componente de Búsqueda Actualizado
**Archivo**: `src/components/StudiesGrid.astro`

```astro
<!-- Ahora es un select en lugar de input -->
<select id="location-filter">
  <option value="">All Cities</option>
  <option value="New York">🗽 NYC</option>
  <option value="Miami">🌴 Miami</option>
  <option value="Houston">🚀 Houston</option>
  <option value="Los Angeles">🌴 Los Angeles</option>
  <option value="San Francisco">🌉 San Francisco</option>
</select>
```

### 4. Hero Section con Ciudades
**Archivo**: `src/components/Hero.astro`

- ✅ Muestra las 5 ciudades con iconos
- ✅ Clickeables - filtran automáticamente los ensayos
- ✅ Mensaje: "Available in 5 Major Cities"

### 5. Datos Mock por Ciudad
**Archivo**: `src/lib/mockTrials.ts`

6 ensayos base × 5 ciudades = **30 ensayos únicos**

Cada ensayo tiene:
- ID único (ej: `NCT05645691-NYC`)
- Ubicación específica
- Compensación ajustada a la ciudad
- Número de ubicaciones variado
- Puntuación de relevancia ligeramente diferente

## 📊 Estructura de Datos

```
GET /api/trials
Response: {
  trials: [...30 ensayos...],
  source: "local-mock",
  targetCities: ["NYC", "Miami", "Houston", "Los Angeles", "San Francisco"],
  total: 30
}
```

## 🔧 Endpoints Disponibles

| Endpoint | Descripción |
|----------|-------------|
| `GET /api/trials` | Lista de 30 ensayos (6×5 ciudades) |
| `GET /api/trials?page=2` | Paginación |
| `GET /api/trials?location=New+York` | Filtrar por NYC |
| `GET /api/trials?phase=PHASE3` | Filtrar por fase |
| `GET /api/trials?compensation=true` | Solo pagados |
| `GET /api/trials/NCT05645691-NYC` | Detalle específico |

## 🎨 Características por Ciudad

### NYC (New York)
- 🗽 Icono: Statue of Liberty
- 💰 Compensación: $600-$1,500 (alta)
- 🏢 Múltiples ubicaciones por ensayo

### Miami
- 🌴 Icono: Palm Tree
- 💰 Compensación: $400-$1,000
- 🏖️ Ensayos adaptados al clima

### Houston
- 🚀 Icono: Rocket (NASA)
- 💰 Compensación: $400-$1,000
- 🏥 Centro médico grande

### Los Angeles
- 🌴 Icono: Palm Tree
- 💰 Compensación: $500-$1,200
- 🎬 Diversidad de ensayos

### San Francisco
- 🌉 Icono: Golden Gate
- 💰 Compensación: $600-$1,500 (alta)
- 💻 Alta tecnología/innovación

## ✅ Ventajas de Este Enfoque

1. **Funciona Offline**: No depende de API externa
2. **Rápido**: Respuesta inmediata (<100ms)
3. **Consistente**: Datos predecibles para testing
4. **Escalable**: Fácil añadir más ciudades
5. **Realista**: 30 ensayos diferentes con variaciones
6. **Filtrable**: Por ciudad, fase, compensación

## 🚀 Para Verlo en Acción

1. Abre: http://localhost:4323/
2. Verás los botones de 5 ciudades en el Hero
3. Click en "🗽 NYC" filtra automáticamente
4. O usa el select en la sección "Open Studies"
5. Prueba los filtros: fase, compensación, búsqueda

## 📁 Archivos Modificados

- `src/lib/config.ts` - Configuración de ciudades
- `src/lib/mockTrials.ts` - Generador de datos
- `src/pages/api/trials/index.astro` - API de listado
- `src/pages/api/trials/[nctId].astro` - API de detalle
- `src/components/StudiesGrid.astro` - Select de ciudades
- `src/components/Hero.astro` - Botones de ciudades

## 🔮 Próximos Pasos (Opcional)

- [ ] Añadir mapa interactivo con las 5 ciudades
- [ ] Conectar a ClinicalTrials.gov en producción
- [ ] Añadir más variedad de ensayos por ciudad
- [ ] Sistema de "ensayos destacados" por ciudad
- [ ] Distribución geográfica de ubicaciones

---

**Todo funciona en localhost sin problemas de CORS ni API keys.**
