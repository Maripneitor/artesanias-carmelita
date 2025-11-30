// frontend/src/pages/Location.jsx
import React from 'react';

// Página de ubicación con mapa embebido
const Location = () => {
    return (
        <div className="page page-location">
            <section className="banner banner-location">
                <div className="banner-overlay">
                    <h1>Encuéntranos fácilmente</h1>
                    <p>[DATO_POR_DEFINIR: breve descripción de la ubicación]</p>
                </div>
            </section>

            <section className="section section-location-details">
                <div className="location-info">
                    <h2>Dirección y cómo llegar</h2>
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
                    {/* TODO: reemplazar src por el iframe real de Google Maps */}
                    <div className="map-placeholder">
                        Aquí irá el mapa de Google Maps
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Location;
