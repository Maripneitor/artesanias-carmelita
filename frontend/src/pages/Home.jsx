// frontend/src/pages/Home.jsx
import React, { useRef } from 'react';

import HeroSection from '../components/home/HeroSection.jsx';
import ProductCard from '../components/products/ProductCard.jsx';
import { products } from '../data/products.js';



const Home = () => {
    const carouselRef = useRef(null);

    const scrollCarousel = (direction) => {
        const node = carouselRef.current;
        if (!node) return;

        const scrollAmount = 280;
        node.scrollBy({
            left: direction === 'next' ? scrollAmount : -scrollAmount,
            behavior: 'smooth',
        });
    };

    // Scroll Animation Logic
    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        const targets = document.querySelectorAll('.fade-in-up');
        targets.forEach(t => observer.observe(t));

        // Auto-scroll carousel
        const interval = setInterval(() => {
            if (carouselRef.current) scrollCarousel('next');
        }, 5000);

        return () => {
            observer.disconnect();
            clearInterval(interval);
        };
    }, []);


    const featuredProducts = products
        .filter(p => p.luzVerde)
        .slice(0, 4);




    return (

        <div className="page page-home">
            <HeroSection />



            <section
                className="section section-featured"
                aria-labelledby="featured-title"
            >
                <div className="section-header">
                    <h2 id="featured-title">Productos destacados</h2>
                    <p className="section-subtitle">
                        Una selección de piezas que representan los colores y bordados
                        más queridos de la tienda.
                    </p>
                </div>

                <div className="products-grid">
                    {featuredProducts.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </section>

            <section
                className="section section-essence"
                aria-labelledby="essence-title"
            >
                <div className="essence-image">
                    {/* TODO: foto real de la artesana */}
                    <div
                        className="essence-image-placeholder"
                        role="img"
                        aria-label="Fotografía de la artesana en su taller"
                    >
                        <span aria-hidden="true">👩‍🎨</span>
                    </div>
                </div>
                <div className="essence-text">
                    <h2 id="essence-title">Nuestra esencia</h2>
                    <p>
                        Cada puntada cuenta una historia. Artesanías Carmelita nace del amor
                        por las raíces chiapanecas y el deseo de compartirlas con el mundo.
                    </p>
                    <ul className="essence-values">
                        <li>✨ Tradición</li>
                        <li>🧵 Hecho a mano</li>
                        <li>🌺 Colores auténticos</li>
                        <li>💖 Con amor</li>
                    </ul>
                    {/* TODO: Placeholder para video del taller */}
                    <div style={{
                        marginTop: '1.5rem',
                        padding: '1rem',
                        background: 'rgba(217, 15, 114, 0.05)',
                        borderRadius: '12px',
                        border: '2px dashed rgba(217, 15, 114, 0.2)',
                        textAlign: 'center',
                        fontSize: '0.9rem',
                        color: 'rgba(0,0,0,0.6)'
                    }}>
                        📹 Espacio para video del taller (próximamente)
                    </div>
                </div>
            </section>

            <section
                className="section section-references"
                aria-labelledby="references-title"
            >
                <div className="section-references-header">
                    <h2 id="references-title">Imágenes de Referencia</h2>
                    <p>
                        Ejemplos de la riqueza textil y el detalle que define nuestra curaduría.
                    </p>
                </div>

                <div className="references-carousel-container">
                    <div className="references-track" ref={carouselRef}>
                        {[1, 2, 3, 1].map((num, idx) => (
                            <div key={idx} className="reference-slide fade-in-up">
                                <img 
                                    src={num === 1 ? '/products/huipil-gala-modelo.webp' : `/references/ref${num}.webp`} 
                                    alt={`Referencia ${idx + 1}`} 
                                    className="ref-img"
                                />
                            </div>
                        ))}
                    </div>
                    
                    <div className="carousel-nav-overlay">
                        <button className="nav-circle prev" onClick={() => scrollCarousel('prev')}>‹</button>
                        <button className="nav-circle next" onClick={() => scrollCarousel('next')}>›</button>
                    </div>
                </div>
            </section>


            <section
                className="section section-how-to-arrive"
                aria-labelledby="how-to-arrive-title"
            >
                <div className="how-text">
                    <h2 id="how-to-arrive-title">Cómo llegar</h2>
                    <p>
                        Visítanos en nuestra tienda física y descubre los bordados en vivo,
                        los colores originales y el proceso artesanal de cada pieza.
                    </p>
                    <p className="how-text-sub">
                        Estamos a unos pasos de [DATO_POR_DEFINIR: referencia local].
                    </p>
                    <a
                        className="btn-outline btn-maps-inline"
                        href="[DATO_POR_DEFINIR_URL_GOOGLE_MAPS]"
                        target="_blank"
                        rel="noreferrer"
                    >
                        📍 Abrir en Maps
                    </a>
                </div>

                <div className="how-map">
                    <div className="how-map-card">
                        {/* TODO: mini mapa o foto real de la fachada */}
                        <div
                            className="map-mini-placeholder"
                            role="img"
                            aria-label="Vista rápida de la ubicación de la tienda"
                        >
                            🗺️ Vista rápida de la ubicación
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
