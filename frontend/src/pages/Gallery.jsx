// frontend/src/pages/Gallery.jsx
import React from 'react';

// Galería básica (se conectará a fotos reales después)
const Gallery = () => {
    const items = [
        'Vestidos chiapanecos',
        'Muñecas artesanales',
        'Textiles para el hogar',
        'Detalles de bordado',
        'El taller',
        'La tienda',
    ];

    return (
        <div className="page page-gallery">
            <section className="section">
                <h1>Galería de colores y texturas</h1>
                <p>
                    Un vistazo al taller, los bordados y las piezas que dan vida a esta
                    artesanía chiapaneca.
                </p>

                <div className="gallery-grid">
                    {items.map((label, idx) => (
                        <div key={idx} className="gallery-item">
                            {/* TODO: reemplazar por imagen real */}
                            <div className="gallery-placeholder">
                                <span className="gallery-label">{label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Gallery;
