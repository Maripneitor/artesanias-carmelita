// frontend/src/pages/Home.jsx
import React, { useRef } from 'react';
import HeroSection from '../components/home/HeroSection.jsx';
import ProductCard from '../components/products/ProductCard.jsx';

// Productos destacados mock (para prototipo)
const featuredProducts = [
    {
        id: 1,
        nombre: 'Vestido chiapaneco tradicional',
        categoria: 'Vestimenta',
        descripcion: 'Bordado a mano con flores inspiradas en Chiapa de Corzo.',
    },
    {
        id: 2,
        nombre: 'Muñeca artesanal chiapaneca',
        categoria: 'Muñecas',
        descripcion: 'Muñeca de tela con vestido típico lleno de color.',
    },
    {
        id: 3,
        nombre: 'Camino de mesa bordado',
        categoria: 'Textiles',
        descripcion: 'Textil para mesa con patrones geométricos chiapanecos.',
    },
    {
        id: 4,
        nombre: 'Blusa bordada',
        categoria: 'Vestimenta',
        descripcion: 'Blusa ligera con bordado floral tradicional.',
    },
];

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

    const scrollCarousel = (direction) => {
        const node = carouselRef.current;
        if (!node) return;

        const scrollAmount = 280;
        node.scrollBy({
            left: direction === 'next' ? scrollAmount : -scrollAmount,
            behavior: 'smooth',
        });
    };

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
                        <span aria-hidden="true">Foto de la artesana</span>
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
                    </ul>
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
                        Abrir en Maps
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
                            Vista rápida de la ubicación
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
