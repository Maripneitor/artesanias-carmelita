// frontend/src/pages/About.jsx
import React from 'react';

// Página "Sobre mí" con línea de tiempo
const About = () => {
    return (
        <div className="page page-about">
            <section className="about-hero">
                {/* TODO: foto real de la artesana en el taller */}
                <div className="about-image-placeholder">Foto en el taller</div>
                <div className="about-text">
                    <h1>Mi historia entre hilos y tradición</h1>
                    <p>
                        [Aquí irá la biografía real de la artesana, su familia, sus inicios
                        y su amor por las artesanías.] // TODO: completar con texto real
                    </p>
                </div>
            </section>

            <section className="section">
                <h2>Mi camino</h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <span className="timeline-icon">🌱</span>
                        <h3>Inicio del oficio</h3>
                        <p>[DATO_POR_DEFINIR]</p>
                    </div>
                    <div className="timeline-item">
                        <span className="timeline-icon">👪</span>
                        <h3>Aprendizaje familiar</h3>
                        <p>[DATO_POR_DEFINIR]</p>
                    </div>
                    <div className="timeline-item">
                        <span className="timeline-icon">🏬</span>
                        <h3>Fundación de la tienda</h3>
                        <p>[DATO_POR_DEFINIR]</p>
                    </div>
                    <div className="timeline-item">
                        <span className="timeline-icon">✨</span>
                        <h3>Actualidad</h3>
                        <p>[DATO_POR_DEFINIR]</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2>Mi taller</h2>
                <p>
                    [Texto sobre la técnica, proceso y tiempo de elaboración de las
                    piezas.] // TODO: completar con información real
                </p>
                {/* TODO: galería de fotos del taller */}
            </section>
        </div>
    );
};

export default About;
