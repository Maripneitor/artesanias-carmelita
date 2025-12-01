// frontend/src/pages/About.jsx
import React from 'react';

// Página "Sobre mí" con héroe, timeline artesanal y valores
const About = () => {
    return (
        <div className="page page-about">
            <section className="about-hero" aria-labelledby="about-title">
                <div
                    className="about-image-placeholder"
                    role="img"
                    aria-label="Artesana trabajando en su taller"
                >
                    {/* TODO: Reemplazar por foto real de la artesana en el taller */}
                    <span style={{ fontSize: '3rem' }}>👩‍🎨</span>
                </div>
                <div className="about-text">
                    <h1 id="about-title">Mi historia entre hilos y tradición</h1>
                    <p>
                        Desde niña, crecí rodeada de los colores vibrantes de Chiapas.
                        Aprendí el arte del bordado de mi abuela, quien me enseñó que cada
                        puntada lleva consigo una historia, un pedazo de nuestra cultura.
                    </p>
                    <p>
                        Hoy, Artesanías Carmelita es el resultado de años de dedicación,
                        amor por las tradiciones y el deseo de compartir la belleza de
                        nuestras artesanías con el mundo.
                    </p>
                    {/* TODO: completar con texto real */}
                </div>
            </section>

            <section className="section" aria-labelledby="timeline-title">
                <h2 id="timeline-title">Mi camino artesanal</h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <span className="timeline-icon" aria-hidden="true">
                            🌱
                        </span>
                        <h3>Inicio del oficio</h3>
                        <p>
                            Primeros pasos en el bordado tradicional, aprendiendo
                            las técnicas ancestrales de mi familia.
                        </p>
                    </div>
                    <div className="timeline-item">
                        <span className="timeline-icon" aria-hidden="true">
                            👪
                        </span>
                        <h3>Aprendizaje familiar</h3>
                        <p>
                            Años de práctica junto a mi abuela y mi madre,
                            perfeccionando cada puntada y patrón.
                        </p>
                    </div>
                    <div className="timeline-item">
                        <span className="timeline-icon" aria-hidden="true">
                            🏬
                        </span>
                        <h3>Fundación de la tienda</h3>
                        <p>
                            Apertura de Artesanías Carmelita, llevando nuestras
                            creaciones a más personas.
                        </p>
                    </div>
                    <div className="timeline-item">
                        <span className="timeline-icon" aria-hidden="true">
                            ✨
                        </span>
                        <h3>Actualidad</h3>
                        <p>
                            Continuamos bordando con amor, preservando tradiciones
                            y creando piezas únicas.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section" aria-labelledby="workshop-title">
                <h2 id="workshop-title">Mi taller</h2>
                <p>
                    Cada pieza es elaborada a mano en mi taller familiar. Utilizamos
                    técnicas tradicionales de bordado chiapaneco, con hilos de colores
                    vibrantes y telas de alta calidad. El proceso puede tomar desde días
                    hasta semanas, dependiendo de la complejidad del diseño.
                </p>
                {/* TODO: galería de fotos del taller */}
                <div style={{
                    marginTop: '1.5rem',
                    padding: '2rem',
                    background: 'rgba(31, 183, 165, 0.05)',
                    borderRadius: '18px',
                    border: '3px solid transparent',
                    backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(135deg, var(--color-secondary), var(--color-accent))',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                    textAlign: 'center'
                }}>
                    <p style={{ fontSize: '2.5rem', margin: '0 0 0.5rem' }}>📸</p>
                    <p style={{ margin: 0, color: 'rgba(0,0,0,0.6)' }}>
                        Galería de fotos del taller (próximamente)
                    </p>
                </div>
            </section>

            <section
                className="section section-values"
                aria-labelledby="values-title"
            >
                <h2 id="values-title">Misión y valores</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <span className="value-icon" aria-hidden="true">
                            🌺
                        </span>
                        <h3>Autenticidad</h3>
                        <p>
                            Cada bordado refleja flores y figuras tradicionales que respetan
                            los diseños originales de Chiapas.
                        </p>
                    </div>
                    <div className="value-card">
                        <span className="value-icon" aria-hidden="true">
                            🧶
                        </span>
                        <h3>Tradición</h3>
                        <p>
                            El oficio se ha transmitido de generación en generación,
                            manteniendo técnicas artesanales vivas.
                        </p>
                    </div>
                    <div className="value-card">
                        <span className="value-icon" aria-hidden="true">
                            🪡
                        </span>
                        <h3>Calidad</h3>
                        <p>
                            Piezas cuidadas puntada a puntada, con materiales seleccionados y
                            terminados detallados.
                        </p>
                    </div>
                    <div className="value-card">
                        <span className="value-icon" aria-hidden="true">
                            🌀
                        </span>
                        <h3>Cultura</h3>
                        <p>
                            Cada prenda y muñeca cuenta una historia y acerca la cultura
                            chiapaneca a nuevas personas.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
