// frontend/src/pages/Location.jsx
import React from 'react';

// Página de ubicación con mapa y datos
const Location = () => {
    return (
        <div className="page page-location">
            <section
                className="banner banner-location"
                aria-labelledby="location-banner-title"
            >
                <div className="banner-overlay">
                    <h1 id="location-banner-title">Encuéntranos fácilmente</h1>
                    <p>[DATO_POR_DEFINIR: breve descripción de la ubicación]</p>
                </div>
            </section>

            <section
                className="section section-location-details"
                aria-labelledby="location-details-title"
            >
                <div className="location-info">
                    <h2 id="location-details-title">Dirección y cómo llegar</h2>
                    <p>
                        Dirección: <strong>[DATO_POR_DEFINIR]</strong>
                    </p>
                    <p>Referencias: [DATO_POR_DEFINIR]</p>
                    <p>Horarios: [DATO_POR_DEFINIR]</p>

                    <div className="location-references">
                        {/* TODO: reemplazar por fotos reales de puntos cercanos */}
                        <div className="location-ref-card">Punto de referencia 1</div>
                        <div className="location-ref-card">Punto de referencia 2</div>
                    </div>

                    <a
                        className="btn-primary btn-maps"
                        href="[DATO_POR_DEFINIR_URL_GOOGLE_MAPS]"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Abrir en Google Maps
                    </a>
                </div>

                <div className="map-wrapper">
                    {/* TODO: reemplazar por el iframe real de Google Maps */}
                    <div
                        className="map-placeholder"
                        role="img"
                        aria-label="Mapa con la ubicación de Artesanías Carmelita"
                    >
                        Aquí irá el mapa de Google Maps
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Location;
