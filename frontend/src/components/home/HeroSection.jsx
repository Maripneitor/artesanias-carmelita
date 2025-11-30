// frontend/src/components/home/HeroSection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Sección héroe principal de la Home
const HeroSection = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/productos');
    };

    return (
        <section className="hero">
            <div className="hero-content">
                <span className="hero-kicker">Hecho a mano en Chiapas</span>
                <h1>Artesanías auténticas de Chiapas</h1>
                <p>
                    Vestidos, muñecas y textiles hechos a mano, inspirados en los colores
                    y tradiciones de Chiapas.
                </p>
                <div className="hero-actions">
                    <button className="btn-primary" onClick={handleClick}>
                        Ver productos
                    </button>
                    <span className="hero-subnote">
                        Piezas únicas con bordados tradicionales.
                    </span>
                </div>
            </div>

            <div className="hero-image">
                {/* TODO: reemplazar por foto real de vestido chiapaneco */}
                <div className="hero-image-placeholder">
                    Vestido chiapaneco
                    <br />
                    [Imagen de referencia]
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
