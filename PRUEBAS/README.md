# Miatapedia - Sistema Local con API

Este directorio contiene una versión completa de Miatapedia con backend API, frontend de prueba y frontend web conectado a la API.

## Estructura del proyecto

```
PRUEBAS/
├── backend/                 # API REST con Node.js + Express + SQLite
│   ├── server.js           # Servidor principal
│   ├── database.js         # Configuración de SQLite
│   ├── init.js             # Script de inicialización con datos
│   ├── package.json        # Dependencias Node.js
│   └── miatapedia.db       # Base de datos SQLite (se crea automáticamente)
├── frontend-test/          # Frontend simple de prueba
│   ├── index.html          # Página de prueba con tablas
│   └── app.js              # JavaScript para consumir API
├── frontend-web/           # Web principal conectada a API
│   ├── index.html          # Página web principal
│   └── api.js              # Cliente API para la web
└── README.md               # Este archivo
```

## Base de datos

La API utiliza SQLite con las siguientes tablas:

- **foros**: id, nombre, url, país, descripción
- **proveedores**: id, nombre, url, país, generación, tipo, descripción
- **manuales**: id, nombre, url, generación, idioma, descripción
- **eventos**: id, nombre, url, país_región, fecha, descripción

## Instalación y uso

### 1. Instalar dependencias del backend

```bash
cd PRUEBAS/backend
npm install
```

### 2. Inicializar base de datos con datos de ejemplo

```bash
npm run init
```

### 3. Iniciar el servidor backend

```bash
npm start
# o alternativamente
node server.js
```

El servidor se ejecutará en http://localhost:3000

### 4. Abrir los frontends

**Frontend de prueba:**
- Abrir `PRUEBAS/frontend-test/index.html` en el navegador
- Página simple con tablas y filtros para probar la API

**Frontend web principal:**
- Abrir `PRUEBAS/frontend-web/index.html` en el navegador
- Versión adaptada de la web principal que consume datos de la API

## Endpoints de la API

### Foros
- `GET /api/foros` - Listar todos los foros
- `GET /api/foros?pais=España` - Filtrar foros por país
- `POST /api/foros` - Crear nuevo foro

### Proveedores
- `GET /api/proveedores` - Listar todos los proveedores
- `GET /api/proveedores?tipo=OEM&generacion=NA` - Filtrar proveedores
- `POST /api/proveedores` - Crear nuevo proveedor

### Manuales
- `GET /api/manuales` - Listar todos los manuales
- `GET /api/manuales?generacion=NA&idioma=español` - Filtrar manuales
- `POST /api/manuales` - Crear nuevo manual

### Eventos
- `GET /api/eventos` - Listar todos los eventos
- `GET /api/eventos?pais_region=España` - Filtrar eventos por región
- `POST /api/eventos` - Crear nuevo evento

### Utilidades
- `GET /api/paises` - Listar países únicos
- `GET /api/stats` - Estadísticas generales
- `GET /api/test` - Test de conexión

## Características

### Backend (Node.js + Express)
- ✅ API REST completa con endpoints GET y POST
- ✅ Base de datos SQLite integrada
- ✅ CORS habilitado para desarrollo
- ✅ Filtros por país, generación, tipo, idioma
- ✅ Manejo de errores y validaciones
- ✅ Datos de ejemplo incluidos

### Frontend de prueba
- ✅ Interfaz simple para probar todos los endpoints
- ✅ Tablas con datos dinámicos desde la API
- ✅ Filtros funcionales (país, tipo, generación, etc.)
- ✅ Indicadores de estado de conexión
- ✅ Estadísticas en tiempo real

### Frontend web principal
- ✅ Versión adaptada de la web principal de Miatapedia
- ✅ Misma estructura visual básica
- ✅ Datos dinámicos desde la API local
- ✅ Indicadores de carga por sección
- ✅ Manejo de errores de conexión
- ✅ Estadísticas en el hero section

## Datos de ejemplo incluidos

- **6 foros** de diferentes países (Reino Unido, Estados Unidos, España, etc.)
- **6 proveedores** con diferentes tipos (OEM, nuevo, segunda mano)
- **5 manuales** para diferentes generaciones e idiomas
- **5 eventos** de diferentes regiones

## Solución de problemas

**Error "Cannot find module":**
```bash
cd PRUEBAS/backend
npm install
```

**Error de conexión en frontend:**
- Verificar que el servidor backend esté ejecutándose en localhost:3000
- Comprobar que no haya otros servicios usando el puerto 3000

**Base de datos vacía:**
```bash
cd PRUEBAS/backend
npm run init
```

**Puerto 3000 ocupado:**
- Cambiar el puerto en `server.js` línea 5
- Actualizar la URL en `frontend-test/app.js` y `frontend-web/api.js`

## Funcionalidades implementadas

✅ Sistema backend completo con SQLite
✅ API REST con endpoints funcionales
✅ Frontend de prueba básico
✅ Frontend web adaptado de la versión principal
✅ Datos dinámicos desde base de datos
✅ Filtros y búsquedas funcionales
✅ Manejo de estados de carga y errores
✅ Todo funciona en local sin dependencias externas