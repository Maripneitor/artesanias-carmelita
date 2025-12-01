// frontend/src/pages/Location.jsx
import React from 'react';

// Página de ubicación con mapa decorativo y referencias visuales
const Location = () => {
    return (
        <div className="page page-location">
            <section
                className="banner banner-location"
                aria-labelledby="location-banner-title"
            >
                <div className="banner-overlay">
                    <h1 id="location-banner-title">Encuéntranos fácilmente</h1>
                    <p>
                        Visita nuestra tienda en el corazón de Chiapas y descubre
                        nuestras artesanías en persona.
                    </p>
                </div>
            </section>

            <section
                className="section section-location-details"
                aria-labelledby="location-details-title"
            >
                <div className="location-info">
                    <h2 id="location-details-title">Dirección y cómo llegar</h2>
                    <p style={{ marginBottom: '0.5rem' }}>
                        <strong>📍 Dirección:</strong> [DATO_POR_DEFINIR]
                    </p>
                    <p style={{ marginBottom: '0.5rem' }}>
                        <strong>🕐 Horarios:</strong> [DATO_POR_DEFINIR]
                    </p>
                    <p style={{ marginBottom: '1.5rem', color: 'rgba(0,0,0,0.7)' }}>
                        <strong>Referencias:</strong> [DATO_POR_DEFINIR - puntos cercanos conocidos]
                    </p>

                    <div className="location-references">
                        {/* TODO: reemplazar por fotos reales de puntos cercanos */}
                        <div className="location-ref-card">
                            <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.25rem' }}>🏛️</span>
                            Punto de referencia 1
                        </div>
                        <div className="location-ref-card">
                            <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.25rem' }}>⛪</span>
                            Punto de referencia 2
                        </div>
                    </div>

                    <a
                        className="btn-primary btn-maps"
                        href="[DATO_POR_DEFINIR_URL_GOOGLE_MAPS]"
                        target="_blank"
                        rel="noreferrer"
                        style={{ display: 'inline-block', marginTop: '0.5rem' }}
                    >
                        🗺️ Abrir en Google Maps
                    </a>
                </div>

                <div className="map-wrapper">
                    {/* TODO: reemplazar por el iframe real de Google Maps */}
                    <div
                        className="map-placeholder"
                        role="img"
                        aria-label="Mapa con la ubicación de Artesanías Carmelita"
                    >
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ fontSize: '3rem', margin: '0 0 0.5rem' }}>🗺️</p>
                            <p style={{ margin: 0, fontSize: '0.9rem', color: 'rgba(0,0,0,0.6)' }}>
                                Aquí irá el mapa de Google Maps
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Location;
