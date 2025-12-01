// frontend/src/pages/Gallery.jsx
import React from 'react';

// Galería con mosaico tipo patchwork
const Gallery = () => {
    const items = [
        { label: 'Vestidos chiapanecos', size: 'large' },
        { label: 'Muñecas artesanales', size: 'medium' },
        { label: 'Textiles para el hogar', size: 'medium' },
        { label: 'Detalles de bordado', size: 'small' },
        { label: 'El taller', size: 'large' },
        { label: 'La tienda', size: 'small' },
        { label: 'Proceso artesanal', size: 'medium' },
        { label: 'Colores tradicionales', size: 'small' },
    ];

    return (
        <div className="page page-gallery">
            <section className="section">
                <h1>Galería de colores y texturas</h1>
                <p>
                    Un vistazo al taller, los bordados y las piezas que dan vida a esta
                    artesanía chiapaneca.
                </p>

                <div className="gallery-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '1.25rem',
                    marginTop: '1.5rem',
                    gridAutoFlow: 'dense'
                }}>
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="gallery-item"
                            style={{
                                gridColumn: item.size === 'large' ? 'span 2' : 'span 1',
                                gridRow: item.size === 'large' ? 'span 2' : 'span 1'
                            }}
                        >
                            {/* TODO: reemplazar por imagen real */}
                            <div
                                className="gallery-placeholder"
                                style={{
                                    minHeight: item.size === 'large' ? '320px' :
                                        item.size === 'medium' ? '200px' : '150px'
                                }}
                            >
                                <span className="gallery-label">{item.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Gallery;
