// frontend/src/pages/Home.jsx
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/home/HeroSection.jsx';
import ProductCard from '../components/products/ProductCard.jsx';
import AlertCard from '../components/common/AlertCard.jsx';
import { products } from '../data/products.js';

const textilesItems = [
    'Bordado floral fucsia',
    'Textil en turquesa',
    'Amarillo maíz tradicional',
    'Rojo lacandón intenso',
    'Patrones geométricos',
    'Detalles del taller',
];

const Home = () => {
    const carouselRef = useRef(null);
    const navigate = useNavigate();

    // Obtener productos destacados (premium o los primeros 4)
    const featuredProducts = products.filter(p => p.isPremium).slice(0, 4);
    // Si no hay suficientes premium, rellenar
    if (featuredProducts.length < 4) {
        const others = products.filter(p => !p.isPremium).slice(0, 4 - featuredProducts.length);
        featuredProducts.push(...others);
    }

    const scrollCarousel = (direction) => {
        const node = carouselRef.current;
        if (!node) return;

        const scrollAmount = 280;
        node.scrollBy({
            left: direction === 'next' ? scrollAmount : -scrollAmount,
            behavior: 'smooth',
        });
    };

    const handleAlertRead = () => {
        navigate('/productos');
    };

    return (
        <div className="page page-home">
            <HeroSection />

            {/* Alert Card - Mensaje de bienvenida/promoción */}
            <section className="section" style={{ display: 'flex', justifyContent: 'center' }}>
                <AlertCard
                    title="¡Bienvenido a Artesanías Carmelita!"
                    message="Descubre nuestras nuevas piezas bordadas a mano con los colores tradicionales de Chiapas. Cada artesanía cuenta una historia única."
                    readText="Ver catálogo"
                    markText="Cerrar"
                    onRead={handleAlertRead}
                />
            </section>

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
                className="section section-textiles"
                aria-labelledby="textiles-title"
            >
                <div className="section-textiles-header">
                    <h2 id="textiles-title">Textiles y colores de Chiapas</h2>
                    <p>
                        Bordados, flores y figuras geométricas que mezclan el fucsia
                        chiapaneco, el turquesa y el amarillo maíz en piezas únicas.
                    </p>
                </div>

                <div className="section-textiles-carousel">
                    <button
                        type="button"
                        className="carousel-arrow left"
                        onClick={() => scrollCarousel('prev')}
                        aria-label="Ver textiles anteriores"
                    >
                        ‹
                    </button>

                    <div
                        className="textiles-carousel"
                        ref={carouselRef}
                        aria-label="Galería horizontal de textiles"
                    >
                        {textilesItems.map((label, idx) => (
                            <div key={idx} className="textiles-item">
                                <div
                                    className="textiles-thumb"
                                    role="img"
                                    aria-label={label}
                                >
                                    <span className="textiles-label" aria-hidden="true">
                                        {label}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        type="button"
                        className="carousel-arrow right"
                        onClick={() => scrollCarousel('next')}
                        aria-label="Ver más textiles"
                    >
                        ›
                    </button>
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
