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
        <section className="hero" aria-labelledby="hero-title">
            <div className="hero-content">
                <span className="hero-kicker">
                    Hecho a mano en Chiapas
                </span>

                <h1 id="hero-title">Artesanías auténticas de Chiapas</h1>

                <p className="hero-lead">
                    Vestidos, muñecas y textiles bordados a mano con los colores
                    tradicionales de Chiapas, listos para darle vida a tu espacio.
                </p>

                <div className="hero-actions">
                    <button className="btn-primary" onClick={handleClick}>
                        Ver productos
                    </button>
                    <button
                        className="btn-ghost"
                        type="button"
                        onClick={() => navigate('/sobre-mi')}
                    >
                        Conocer mi historia
                    </button>
                    <span className="hero-subnote">
                        Piezas únicas, hechas puntada a puntada en un taller familiar.
                    </span>
                </div>
            </div>

            <div className="hero-image">
                {/* TODO: reemplazar por foto real de vestido chiapaneco */}
                <div
                    className="hero-image-placeholder"
                    role="img"
                    aria-label="Fotografía de un vestido chiapaneco bordado a mano"
                >
                    <span aria-hidden="true">
                        Vestido chiapaneco
                        <br />
                        [Imagen de referencia]
                    </span>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
