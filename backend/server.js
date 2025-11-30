// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();

// Configuración básica
app.use(cors());
app.use(express.json());

// TODO: mover a /src/routes y /src/controllers cuando crezca el proyecto

// Endpoint de salud
app.get('/api/health', (req, res) => {
    res.json({ ok: true, message: 'API Artesanías de Chiapas funcionando.' });
});

// Mock de productos (para futura integración)
app.get('/api/products', (req, res) => {
    const products = [
        {
            id: 1,
            nombre: 'Vestido chiapaneco tradicional',
            categoria: 'Vestimenta',
            descripcion: 'Bordado a mano con flores inspiradas en Chiapa de Corzo.'
        },
        {
            id: 2,
            nombre: 'Muñeca artesanal chiapaneca',
            categoria: 'Muñecas',
            descripcion: 'Muñeca de tela con vestido típico lleno de color.'
        }
    ];

    res.json(products);
});

// Endpoint de contacto (mock, sin enviar correos aún)
app.post('/api/contact', (req, res) => {
    const { nombre, contacto, mensaje } = req.body || {};
    console.log('Mensaje de contacto recibido:', { nombre, contacto, mensaje });

    // TODO: integrar con correo real o servicio externo
    res.json({ ok: true, message: 'Mensaje recibido (demo backend).' });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
