// frontend/src/pages/About.jsx
import React from 'react';

// Página "Sobre mí" con héroe, timeline y valores
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
                    Foto en el taller
                </div>
                <div className="about-text">
                    <h1 id="about-title">Mi historia entre hilos y tradición</h1>
                    <p>
                        [Aquí irá la biografía real de la artesana, su familia, sus inicios
                        y su amor por las artesanías.] {/* TODO: completar con texto real */}
                    </p>
                </div>
            </section>

            <section className="section" aria-labelledby="timeline-title">
                <h2 id="timeline-title">Mi camino</h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <span className="timeline-icon" aria-hidden="true">
                            🌱
                        </span>
                        <h3>Inicio del oficio</h3>
                        <p>[DATO_POR_DEFINIR]</p>
                    </div>
                    <div className="timeline-item">
                        <span className="timeline-icon" aria-hidden="true">
                            👪
                        </span>
                        <h3>Aprendizaje familiar</h3>
                        <p>[DATO_POR_DEFINIR]</p>
                    </div>
                    <div className="timeline-item">
                        <span className="timeline-icon" aria-hidden="true">
                            🏬
                        </span>
                        <h3>Fundación de la tienda</h3>
                        <p>[DATO_POR_DEFINIR]</p>
                    </div>
                    <div className="timeline-item">
                        <span className="timeline-icon" aria-hidden="true">
                            ✨
                        </span>
                        <h3>Actualidad</h3>
                        <p>[DATO_POR_DEFINIR]</p>
                    </div>
                </div>
            </section>

            <section className="section" aria-labelledby="workshop-title">
                <h2 id="workshop-title">Mi taller</h2>
                <p>
                    [Texto sobre la técnica, proceso y tiempo de elaboración de las
                    piezas.] {/* TODO: completar con información real */}
                </p>
                {/* TODO: galería de fotos del taller */}
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
