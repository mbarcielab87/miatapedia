# 🔐 MIATAPEDIA - CREDENCIALES Y SEGURIDAD

## 🔑 **CREDENCIALES DE ADMINISTRADOR**

- **Usuario**: `Headcount5250`
- **Contraseña**: `lVZOa9mKiu2rNR`

## 🌐 **URLS DEL SISTEMA**

### **📖 Acceso Público (Sin autenticación)**
- **API Test**: http://172.22.133.26:3000/api/test
- **Estadísticas**: http://172.22.133.26:3000/api/stats
- **Datos de solo lectura**:
  - Foros/Clubs: http://172.22.133.26:3000/api/foros
  - Proveedores: http://172.22.133.26:3000/api/proveedores
  - Manuales: http://172.22.133.26:3000/api/manuales
  - Eventos: http://172.22.133.26:3000/api/eventos

### **🔐 Acceso Protegido (Requiere autenticación)**
- **Login**: http://172.22.133.26:3000/admin/login
- **Panel Admin**: http://172.22.133.26:3000/admin

### **🖥️ Interfaces Frontend**
- **Web Principal**: http://172.22.133.26:8080/web/
- **Test Simple**: http://172.22.133.26:8080/test/simple.html
- **Test Avanzado**: http://172.22.133.26:8080/test/

## 🛡️ **CARACTERÍSTICAS DE SEGURIDAD**

### **1. Cierre Automático de Sesión**
- ✅ **Al cerrar la pestaña/ventana**: Logout automático inmediato
- ✅ **Por inactividad**: 30 minutos sin actividad → logout automático
- ✅ **Al cambiar de pestaña**: 10 minutos fuera → logout automático
- ✅ **Botón manual**: Botón "Cerrar Sesión" en el panel admin

### **2. Protección de Endpoints**
- ✅ **Lectura pública**: GET sin autenticación
- ✅ **Modificación protegida**: POST/PUT/DELETE requieren JWT
- ✅ **Rate limiting**: Máximo 100 requests/15min
- ✅ **Login limitado**: Máximo 5 intentos/15min por IP

### **3. Autenticación Robusta**
- ✅ **Contraseñas hasheadas**: bcrypt con salt
- ✅ **Tokens JWT**: Expiración 24 horas
- ✅ **Sesiones seguras**: HttpOnly cookies
- ✅ **Headers de seguridad**: Helmet.js

### **4. Monitoreo y Logs**
- ✅ **Logs de autenticación**: Intentos exitosos y fallidos
- ✅ **Logs de actividad**: Acceso a rutas protegidas
- ✅ **Registro de IPs**: Seguimiento de direcciones IP

## 📊 **ESTADO DE LA BASE DE DATOS**

- **Foros/Clubs**: 55 entradas globales
- **Proveedores**: 23 tiendas especializadas
- **Manuales**: 17 recursos técnicos
- **Eventos**: 8 eventos internacionales

## 🔧 **FUNCIONAMIENTO DEL SISTEMA**

### **Para Usuarios Normales**:
1. Acceso libre a datos de solo lectura
2. Sin necesidad de registro ni login
3. Todas las interfaces frontend disponibles

### **Para Administradores**:
1. Login en: http://172.22.133.26:3000/admin/login
2. Acceso completo al panel de administración
3. Capacidad de crear, editar y eliminar datos
4. Cierre automático por seguridad

## ⚠️ **IMPORTANTES MEDIDAS DE SEGURIDAD**

### **Automatizaciones de Cierre**:
- La sesión se cierra **automáticamente** al salir de la web
- No es necesario recordar cerrar sesión manualmente
- Múltiples capas de detección de inactividad

### **Protección de Datos**:
- Imposible modificar datos sin autenticación
- Credenciales seguras con hash criptográfico
- Rate limiting contra ataques de fuerza bruta

### **Monitoreo Continuo**:
- Todos los accesos están registrados
- Detección automática de actividad sospechosa
- Logs de seguridad en tiempo real

## 🎯 **RESUMEN EJECUTIVO**

**El sistema Miatapedia está ahora completamente seguro con:**
- ✅ Base de datos completa con 103 entradas reales
- ✅ Autenticación robusta con múltiples capas
- ✅ Cierre automático de sesión por seguridad
- ✅ Protección completa contra accesos no autorizados
- ✅ Monitoreo y logging de todas las actividades

**Credenciales únicas y seguras personalizadas para el administrador.**