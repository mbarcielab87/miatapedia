const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { db, initDatabase } = require('./database');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Inicializar base de datos
initDatabase().catch(console.error);

// ENDPOINTS PARA FOROS
// GET todos los foros
app.get('/api/foros', (req, res) => {
    const { pais } = req.query;
    let query = 'SELECT * FROM foros';
    let params = [];

    if (pais) {
        query += ' WHERE pais = ?';
        params.push(pais);
    }

    db.all(query, params, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Alias para clubs (mismo que foros)
app.get('/api/clubs', (req, res) => {
    const { pais } = req.query;
    let query = 'SELECT * FROM foros';
    let params = [];

    if (pais) {
        query += ' WHERE pais = ?';
        params.push(pais);
    }

    db.all(query, params, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// POST nuevo club (mismo que foros)
app.post('/api/clubs', (req, res) => {
    const { nombre, url, pais, descripcion } = req.body;

    if (!nombre || !url || !pais) {
        res.status(400).json({ error: 'Nombre, URL y país son requeridos' });
        return;
    }

    const query = 'INSERT INTO foros (nombre, url, pais, descripcion) VALUES (?, ?, ?, ?)';
    db.run(query, [nombre, url, pais, descripcion], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ id: this.lastID, message: 'Club creado exitosamente' });
    });
});

// PUT actualizar club (mismo que foros)
app.put('/api/clubs/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, url, pais, descripcion } = req.body;

    if (!nombre || !url || !pais) {
        res.status(400).json({ error: 'Nombre, URL y país son requeridos' });
        return;
    }

    const query = 'UPDATE foros SET nombre = ?, url = ?, pais = ?, descripcion = ? WHERE id = ?';
    db.run(query, [nombre, url, pais, descripcion, id], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (this.changes === 0) {
            res.status(404).json({ error: 'Club no encontrado' });
            return;
        }
        res.json({ message: 'Club actualizado exitosamente' });
    });
});

// DELETE eliminar club (mismo que foros)
app.delete('/api/clubs/:id', (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM foros WHERE id = ?';
    db.run(query, [id], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (this.changes === 0) {
            res.status(404).json({ error: 'Club no encontrado' });
            return;
        }
        res.json({ message: 'Club eliminado exitosamente' });
    });
});

// POST nuevo foro
app.post('/api/foros', (req, res) => {
    const { nombre, url, pais, descripcion } = req.body;

    if (!nombre || !url || !pais) {
        res.status(400).json({ error: 'Nombre, URL y país son requeridos' });
        return;
    }

    const query = 'INSERT INTO foros (nombre, url, pais, descripcion) VALUES (?, ?, ?, ?)';
    db.run(query, [nombre, url, pais, descripcion], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ id: this.lastID, message: 'Foro creado exitosamente' });
    });
});

// PUT actualizar foro
app.put('/api/foros/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, url, pais, descripcion } = req.body;

    if (!nombre || !url || !pais) {
        res.status(400).json({ error: 'Nombre, URL y país son requeridos' });
        return;
    }

    const query = 'UPDATE foros SET nombre = ?, url = ?, pais = ?, descripcion = ? WHERE id = ?';
    db.run(query, [nombre, url, pais, descripcion, id], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (this.changes === 0) {
            res.status(404).json({ error: 'Foro no encontrado' });
            return;
        }
        res.json({ message: 'Foro actualizado exitosamente' });
    });
});

// DELETE eliminar foro
app.delete('/api/foros/:id', (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM foros WHERE id = ?';
    db.run(query, [id], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (this.changes === 0) {
            res.status(404).json({ error: 'Foro no encontrado' });
            return;
        }
        res.json({ message: 'Foro eliminado exitosamente' });
    });
});

// ENDPOINTS PARA PROVEEDORES
// GET todos los proveedores
app.get('/api/proveedores', (req, res) => {
    const { pais, generacion, tipo } = req.query;
    let query = 'SELECT * FROM proveedores WHERE 1=1';
    let params = [];

    if (pais) {
        query += ' AND pais = ?';
        params.push(pais);
    }
    if (generacion) {
        query += ' AND generacion LIKE ?';
        params.push(`%${generacion}%`);
    }
    if (tipo) {
        query += ' AND tipo = ?';
        params.push(tipo);
    }

    db.all(query, params, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// POST nuevo proveedor
app.post('/api/proveedores', (req, res) => {
    const { nombre, url, pais, generacion, tipo, descripcion } = req.body;

    if (!nombre || !url || !pais || !generacion || !tipo) {
        res.status(400).json({ error: 'Nombre, URL, país, generación y tipo son requeridos' });
        return;
    }

    const query = 'INSERT INTO proveedores (nombre, url, pais, generacion, tipo, descripcion) VALUES (?, ?, ?, ?, ?, ?)';
    db.run(query, [nombre, url, pais, generacion, tipo, descripcion], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ id: this.lastID, message: 'Proveedor creado exitosamente' });
    });
});

// PUT actualizar proveedor
app.put('/api/proveedores/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, url, pais, generacion, tipo, descripcion } = req.body;

    if (!nombre || !url || !pais || !generacion || !tipo) {
        res.status(400).json({ error: 'Nombre, URL, país, generación y tipo son requeridos' });
        return;
    }

    const query = 'UPDATE proveedores SET nombre = ?, url = ?, pais = ?, generacion = ?, tipo = ?, descripcion = ? WHERE id = ?';
    db.run(query, [nombre, url, pais, generacion, tipo, descripcion, id], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (this.changes === 0) {
            res.status(404).json({ error: 'Proveedor no encontrado' });
            return;
        }
        res.json({ message: 'Proveedor actualizado exitosamente' });
    });
});

// DELETE eliminar proveedor
app.delete('/api/proveedores/:id', (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM proveedores WHERE id = ?';
    db.run(query, [id], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (this.changes === 0) {
            res.status(404).json({ error: 'Proveedor no encontrado' });
            return;
        }
        res.json({ message: 'Proveedor eliminado exitosamente' });
    });
});

// ENDPOINTS PARA MANUALES
// GET todos los manuales
app.get('/api/manuales', (req, res) => {
    const { generacion, idioma } = req.query;
    let query = 'SELECT * FROM manuales WHERE 1=1';
    let params = [];

    if (generacion) {
        query += ' AND generacion = ?';
        params.push(generacion);
    }
    if (idioma) {
        query += ' AND idioma = ?';
        params.push(idioma);
    }

    db.all(query, params, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// POST nuevo manual
app.post('/api/manuales', (req, res) => {
    const { nombre, url, generacion, idioma, descripcion } = req.body;

    if (!nombre || !url || !generacion || !idioma) {
        res.status(400).json({ error: 'Nombre, URL, generación e idioma son requeridos' });
        return;
    }

    const query = 'INSERT INTO manuales (nombre, url, generacion, idioma, descripcion) VALUES (?, ?, ?, ?, ?)';
    db.run(query, [nombre, url, generacion, idioma, descripcion], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ id: this.lastID, message: 'Manual creado exitosamente' });
    });
});

// PUT actualizar manual
app.put('/api/manuales/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, url, generacion, idioma, descripcion } = req.body;

    if (!nombre || !url || !generacion || !idioma) {
        res.status(400).json({ error: 'Nombre, URL, generación e idioma son requeridos' });
        return;
    }

    const query = 'UPDATE manuales SET nombre = ?, url = ?, generacion = ?, idioma = ?, descripcion = ? WHERE id = ?';
    db.run(query, [nombre, url, generacion, idioma, descripcion, id], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (this.changes === 0) {
            res.status(404).json({ error: 'Manual no encontrado' });
            return;
        }
        res.json({ message: 'Manual actualizado exitosamente' });
    });
});

// DELETE eliminar manual
app.delete('/api/manuales/:id', (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM manuales WHERE id = ?';
    db.run(query, [id], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (this.changes === 0) {
            res.status(404).json({ error: 'Manual no encontrado' });
            return;
        }
        res.json({ message: 'Manual eliminado exitosamente' });
    });
});

// ENDPOINTS PARA EVENTOS
// GET todos los eventos
app.get('/api/eventos', (req, res) => {
    const { pais_region } = req.query;
    let query = 'SELECT * FROM eventos';
    let params = [];

    if (pais_region) {
        query += ' WHERE pais_region = ?';
        params.push(pais_region);
    }

    db.all(query, params, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// POST nuevo evento
app.post('/api/eventos', (req, res) => {
    const { nombre, url, pais_region, fecha, descripcion } = req.body;

    if (!nombre || !url || !pais_region) {
        res.status(400).json({ error: 'Nombre, URL y país/región son requeridos' });
        return;
    }

    const query = 'INSERT INTO eventos (nombre, url, pais_region, fecha, descripcion) VALUES (?, ?, ?, ?, ?)';
    db.run(query, [nombre, url, pais_region, fecha, descripcion], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ id: this.lastID, message: 'Evento creado exitosamente' });
    });
});

// PUT actualizar evento
app.put('/api/eventos/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, url, pais_region, fecha, descripcion } = req.body;

    if (!nombre || !url || !pais_region) {
        res.status(400).json({ error: 'Nombre, URL y país/región son requeridos' });
        return;
    }

    const query = 'UPDATE eventos SET nombre = ?, url = ?, pais_region = ?, fecha = ?, descripcion = ? WHERE id = ?';
    db.run(query, [nombre, url, pais_region, fecha, descripcion, id], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (this.changes === 0) {
            res.status(404).json({ error: 'Evento no encontrado' });
            return;
        }
        res.json({ message: 'Evento actualizado exitosamente' });
    });
});

// DELETE eliminar evento
app.delete('/api/eventos/:id', (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM eventos WHERE id = ?';
    db.run(query, [id], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (this.changes === 0) {
            res.status(404).json({ error: 'Evento no encontrado' });
            return;
        }
        res.json({ message: 'Evento eliminado exitosamente' });
    });
});

// Endpoint para obtener países únicos (útil para filtros)
app.get('/api/paises', (req, res) => {
    const query = `
        SELECT DISTINCT pais FROM foros
        UNION
        SELECT DISTINCT pais FROM proveedores
        UNION
        SELECT DISTINCT pais_region as pais FROM eventos
        ORDER BY pais
    `;

    db.all(query, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows.map(row => row.pais));
    });
});

// Endpoint para estadísticas generales
app.get('/api/stats', (req, res) => {
    const queries = {
        foros: 'SELECT COUNT(*) as count FROM foros',
        proveedores: 'SELECT COUNT(*) as count FROM proveedores',
        manuales: 'SELECT COUNT(*) as count FROM manuales',
        eventos: 'SELECT COUNT(*) as count FROM eventos'
    };

    const stats = {};
    let completed = 0;

    Object.keys(queries).forEach(key => {
        db.get(queries[key], [], (err, row) => {
            if (err) {
                stats[key] = 0;
            } else {
                stats[key] = row.count;
            }
            completed++;

            if (completed === Object.keys(queries).length) {
                res.json(stats);
            }
        });
    });
});

// Ruta de prueba
app.get('/api/test', (req, res) => {
    res.json({ message: 'API funcionando correctamente', timestamp: new Date() });
});

// Ruta del panel de administración
app.get('/admin', (req, res) => {
    const path = require('path');
    res.sendFile(path.join(__dirname, 'admin.html'));
});

// Iniciar servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor backend ejecutándose en:`);
    console.log(`- Local: http://localhost:${PORT}`);
    console.log(`- Red: http://172.22.133.26:${PORT}`);
    console.log('Endpoints disponibles:');
    console.log('- GET /api/foros (filtro: ?pais=España)');
    console.log('- POST /api/foros');
    console.log('- GET /api/proveedores (filtros: ?pais=España&generacion=NA&tipo=OEM)');
    console.log('- POST /api/proveedores');
    console.log('- GET /api/manuales (filtros: ?generacion=NA&idioma=español)');
    console.log('- POST /api/manuales');
    console.log('- GET /api/eventos (filtro: ?pais_region=España)');
    console.log('- POST /api/eventos');
    console.log('- GET /api/paises');
    console.log('- GET /api/stats');
    console.log('- GET /api/test');
    console.log('');
    console.log('🔧 Panel de administración:');
    console.log('- http://172.22.133.26:3000/admin');
});