// Servidor HTTP simple para servir los frontends
const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Servir archivos estáticos
app.use('/test', express.static(path.join(__dirname, 'frontend-test')));
app.use('/web', express.static(path.join(__dirname, 'frontend-web')));

// Ruta principal con enlaces
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Miatapedia - Servidor Local</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; background: #f5f5f5; }
                .container { max-width: 800px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
                h1 { color: #C41E3A; text-align: center; }
                .links { display: grid; gap: 20px; margin: 30px 0; }
                .link-box { background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #C41E3A; }
                .link-box h3 { margin: 0 0 10px 0; color: #333; }
                .link-box p { margin: 0 0 15px 0; color: #666; }
                .link-box a { background: #C41E3A; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block; }
                .link-box a:hover { background: #a01729; }
                .status { background: #e7f3ff; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🚗 Miatapedia - Sistema Local</h1>

                <div class="status">
                    <strong>🟢 Sistema activo en red local</strong><br>
                    IP: 172.22.133.26 | Backend: Puerto 3000 | Frontend: Puerto 8080
                </div>

                <div class="links">
                    <div class="link-box">
                        <h3>🧪 Frontend de Prueba</h3>
                        <p>Interfaz simple con tablas y filtros para probar todos los endpoints de la API</p>
                        <a href="/test">Abrir Prueba</a>
                    </div>

                    <div class="link-box">
                        <h3>🌐 Frontend Web Principal</h3>
                        <p>Versión adaptada de la web principal que consume datos dinámicos desde la API</p>
                        <a href="/web">Abrir Web</a>
                    </div>

                    <div class="link-box">
                        <h3>🔌 API Backend</h3>
                        <p>Endpoints REST para consultar foros, proveedores, manuales y eventos</p>
                        <a href="http://172.22.133.26:3000/api/test" target="_blank">Probar API</a>
                    </div>
                </div>

                <div style="margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 8px;">
                    <h3>📱 Acceso desde otros dispositivos:</h3>
                    <ul style="list-style: none; padding: 0;">
                        <li>🖥️ <strong>Navegador externo:</strong> http://172.22.133.26:8080</li>
                        <li>📱 <strong>Móvil en misma red:</strong> http://172.22.133.26:8080</li>
                        <li>🔌 <strong>API directa:</strong> http://172.22.133.26:3000/api/stats</li>
                    </ul>
                </div>

                <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666;">
                    <p>Sistema Miatapedia Local - Datos dinámicos desde SQLite</p>
                </div>
            </div>
        </body>
        </html>
    `);
});

// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log(`
🌐 Servidor frontend ejecutándose en:
- Local: http://localhost:${PORT}
- Red: http://172.22.133.26:${PORT}

📁 Rutas disponibles:
- Principal: http://172.22.133.26:${PORT}
- Prueba: http://172.22.133.26:${PORT}/test
- Web: http://172.22.133.26:${PORT}/web

🔌 API Backend: http://172.22.133.26:3000
    `);
});