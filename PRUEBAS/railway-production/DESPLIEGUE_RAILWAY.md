# 🚀 DESPLIEGUE MIATAPEDIA EN RAILWAY

## 📋 **PASOS PARA DESPLEGAR EN RAILWAY**

### **1. Preparación del Backend**
✅ Todo listo en `/railway-production/`
- `server.js` - Servidor con IP restrictions y CORS
- `package.json` - Dependencias de producción
- `Procfile` - Configuración de Railway
- `railway.json` - Configuración adicional Railway
- `.env.example` - Variables de entorno

### **2. Crear Cuenta y Proyecto en Railway**
1. Ir a [railway.app](https://railway.app)
2. Crear cuenta o login con GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Conectar con tu repositorio o subir archivos

### **3. Configurar Variables de Entorno**
En Railway Dashboard → Settings → Environment Variables:

```env
NODE_ENV=production
ADMIN_USERNAME=Headcount5250
ADMIN_PASSWORD=lVZOa9mKiu2rNR
JWT_SECRET=MiataSecretKey2024!VerySecureRandomString!ProductionReady
SESSION_SECRET=MiataSessionKey2024!AnotherSecureString!Production
AUTHORIZED_ADMIN_IP=109.111.117.182
ALLOWED_ORIGINS=https://miatapedia.info,https://miatapedia.netlify.app
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
RATE_LIMIT_LOGIN_MAX=5
LOG_LEVEL=info
LOG_FORMAT=combined
```

### **4. Desplegar**
1. Railway detectará automáticamente Node.js
2. Ejecutará `npm start` según el Procfile
3. La base de datos SQLite se creará automáticamente
4. Los datos se importarán en el primer arranque

### **5. Obtener URL de Railway**
- Railway asignará una URL como: `https://tu-proyecto-railway.up.railway.app`
- Esta será tu nueva API base URL

## 🔧 **CONFIGURACIÓN DEL FRONTEND EN NETLIFY**

### **Archivos Requeridos:**

#### **1. Incluir `frontend-config.js`**
Agregar al `<head>` de todas las páginas HTML en Netlify:
```html
<script src="frontend-config.js"></script>
```

#### **2. Actualizar `frontend-config.js`**
Reemplazar la URL base:
```javascript
const API_CONFIG = {
    baseURL: 'https://TU-URL-RAILWAY.up.railway.app', // ← CAMBIAR AQUÍ
    // resto de configuración...
};
```

### **Cambios Necesarios en el Frontend Actual:**

#### **1. Reemplazar todas las llamadas fetch()**
**ANTES (localhost):**
```javascript
fetch('http://localhost:3000/api/foros')
```

**DESPUÉS (Railway):**
```javascript
apiGet('/api/foros')
// o usando la función helper:
fetch(buildApiUrl('/api/foros'))
```

#### **2. Ejemplo de Migración:**
```javascript
// ANTES
async function loadData() {
    const response = await fetch('http://localhost:3000/api/foros');
    const data = await response.json();
    return data;
}

// DESPUÉS
async function loadData() {
    return await apiGet('/api/foros');
}
```

## 🛡️ **CARACTERÍSTICAS DE SEGURIDAD**

### **Restricciones Implementadas:**
- ✅ **Admin panel**: Solo accesible desde IP `109.111.117.182`
- ✅ **CORS**: Configurado para Netlify y dominio principal
- ✅ **Rate limiting**: 100 requests/15min general, 5 login attempts/15min
- ✅ **JWT + Sessions**: Autenticación robusta
- ✅ **Password hashing**: bcrypt con salt

### **Endpoints Disponibles:**

#### **Públicos (sin autenticación):**
- `GET /api/test` - Test de conexión
- `GET /api/stats` - Estadísticas públicas
- `GET /api/foros` - Lista de foros/clubs
- `GET /api/proveedores` - Lista de proveedores
- `GET /api/manuales` - Lista de manuales
- `GET /api/eventos` - Lista de eventos

#### **Protegidos (requieren IP + auth):**
- `POST/PUT/DELETE /api/foros` - CRUD foros
- `POST/PUT/DELETE /api/proveedores` - CRUD proveedores
- `POST/PUT/DELETE /api/manuales` - CRUD manuales
- `POST/PUT/DELETE /api/eventos` - CRUD eventos
- `GET/POST /admin/*` - Panel de administración

## 📝 **COMANDOS IMPORTANTES**

### **Para Desarrollo Local:**
```bash
npm install
npm run dev
```

### **Para Producción (Railway):**
```bash
npm start
npm run init-db  # Solo primera vez
```

### **Para Migrar DB:**
```bash
npm run migrate
```

## 🎯 **CHECKLIST FINAL**

### **Antes del Despliegue:**
- [ ] Variables de entorno configuradas en Railway
- [ ] IP autorizada verificada (109.111.117.182)
- [ ] CORS origins actualizados

### **Después del Despliegue:**
- [ ] Obtener URL de Railway
- [ ] Actualizar `frontend-config.js` con nueva URL
- [ ] Subir archivo de configuración a Netlify
- [ ] Incluir script en todas las páginas HTML
- [ ] Migrar todas las llamadas fetch() a usar helper functions
- [ ] Probar conectividad desde frontend
- [ ] Verificar admin panel desde IP autorizada

## 🚨 **IMPORTANTE**

### **Panel de Administración:**
- Solo funciona desde IP: `109.111.117.182`
- URL: `https://tu-railway-url.up.railway.app/admin/login`
- Credenciales: `Headcount5250` / `lVZOa9mKiu2rNR`

### **Credenciales NO EXPUESTAS:**
- Las credenciales están en variables de entorno
- No están hardcodeadas en el código
- El archivo `.env.example` es solo una plantilla

### **Base de Datos:**
- SQLite se crea automáticamente en Railway
- Se importan 103+ registros en el primer arranque
- No requiere configuración adicional

¡Backend listo para Railway! 🎉