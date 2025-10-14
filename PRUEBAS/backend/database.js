const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'miatapedia.db');

// Crear conexión a la base de datos
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database');
    }
});

// Crear tablas si no existen
const initDatabase = () => {
    return new Promise((resolve, reject) => {
        db.serialize(() => {
            // Tabla Foros
            db.run(`CREATE TABLE IF NOT EXISTS foros (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT NOT NULL,
                url TEXT NOT NULL,
                pais TEXT NOT NULL,
                descripcion TEXT
            )`);

            // Tabla Proveedores
            db.run(`CREATE TABLE IF NOT EXISTS proveedores (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT NOT NULL,
                url TEXT NOT NULL,
                pais TEXT NOT NULL,
                generacion TEXT NOT NULL,
                tipo TEXT NOT NULL,
                descripcion TEXT
            )`);

            // Tabla Manuales
            db.run(`CREATE TABLE IF NOT EXISTS manuales (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT NOT NULL,
                url TEXT NOT NULL,
                generacion TEXT NOT NULL,
                idioma TEXT NOT NULL,
                descripcion TEXT
            )`);

            // Tabla Eventos
            db.run(`CREATE TABLE IF NOT EXISTS eventos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT NOT NULL,
                url TEXT NOT NULL,
                pais_region TEXT NOT NULL,
                fecha TEXT,
                descripcion TEXT
            )`, (err) => {
                if (err) {
                    reject(err);
                } else {
                    console.log('Database tables created successfully');
                    resolve();
                }
            });
        });
    });
};

module.exports = { db, initDatabase };