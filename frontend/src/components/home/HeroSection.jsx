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
                <h1>Artesanías auténticas de Chiapas</h1>
                <p>
                    Vestidos, muñecas y textiles hechos a mano, inspirados en los colores
                    de Chiapa de Corzo.
                </p>
                <button className="btn-primary" onClick={handleClick}>
                    Ver productos
                </button>
            </div>

            <div className="hero-image">
                {/* TODO: reemplazar por foto real de vestido chiapaneco */}
                <div className="hero-image-placeholder">
                    Vestido chiapaneco<br />[Imagen de referencia]
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
