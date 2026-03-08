// frontend/src/pages/ProductDetail.jsx
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getProductBySlug, getRelatedProducts } from '../data/products.js';
import ProductCard from '../components/products/ProductCard.jsx';

// --- Sub-componentes Reutilizados de Home (Adaptados) ---

const ReferenceCarousel = () => {
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
        <section className="section section-references" aria-labelledby="references-title-detail">
            <div className="section-references-header">
                <h2 id="references-title-detail">Imágenes de Referencia</h2>
                <p>Nuestra riqueza textil y el detalle que define cada pieza.</p>
            </div>
            <div className="references-carousel-container">
                <div className="references-track" ref={carouselRef}>
                    {[1, 2, 3, 1].map((num, idx) => (
                        <div key={idx} className="reference-slide fade-in-up visible">
                            <img 
                                src={num === 1 ? '/products/huipil-gala-modelo.webp' : `/references/ref${num}.webp`} 
                                alt={`Referencia ${idx + 1}`} 
                                className="ref-img"
                                loading="lazy"
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
    );
};

const LocationMap = () => (
    <section className="section section-how-to-arrive" aria-labelledby="map-title-detail">
        <div className="how-text">
            <h2 id="map-title-detail">Visítanos en Chiapas</h2>
            <p>Descubre los bordados en vivo y el proceso artesanal de cada pieza.</p>
            <a
                className="btn-outline btn-maps-inline"
                href="#"
                target="_blank"
                rel="noreferrer"
            >
                📍 Ver ubicación en Maps
            </a>
        </div>
        <div className="how-map">
            <div className="how-map-card">
                <div className="map-mini-placeholder" role="img" aria-label="Mapa">
                    🗺️ Mapa del Taller Familiar
                </div>
            </div>
        </div>
    </section>
);

const ImageZoom = ({ src, alt }) => {
    const [zoomStyle, setZoomStyle] = useState({ display: 'none' });
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (window.innerWidth <= 600) return; // Desactivar en móvil
        if (!containerRef.current) return;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = ((e.pageX - left - window.scrollX) / width) * 100;
        const y = ((e.pageY - top - window.scrollY) / height) * 100;

        setZoomStyle({
            display: 'block',
            backgroundPosition: `${x}% ${y}%`,
            backgroundImage: `url(${src})`
        });
    };

    const handleMouseLeave = () => {
        setZoomStyle({ display: 'none' });
    };

    return (
        <div 
            className="zoom-container" 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <img 
                src={src} 
                alt={alt} 
                className="main-image-zoom" 
                loading="lazy"
            />
            <div className="zoom-lens" style={zoomStyle}></div>
        </div>
    );
};

const ProductDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [showSticky, setShowSticky] = useState(false);
    const [prevSlug, setPrevSlug] = useState(slug);
    const trackRef = useRef(null);
    const actionPointRef = useRef(null);

    const product = useMemo(() => getProductBySlug(slug), [slug]);

    if (slug !== prevSlug) {
        setPrevSlug(slug);
        setActiveImageIndex(0);
        setIsLoading(true);
    }

    // Scroll to top upon product change
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant' // Reset instantáneo (saltar animaciones de scroll) antes que cargue la imagen
        });
    }, [slug]);


    useEffect(() => {
        if (product && product.images) {
            const promises = product.images.map(img => {
                return new Promise((resolve) => {
                    const imgObj = new Image();
                    imgObj.src = img.url;
                    imgObj.onload = resolve;
                    imgObj.onerror = resolve;
                });
            });

            Promise.all(promises).then(() => {
                setTimeout(() => setIsLoading(false), 400);
            });
        } else {
            setTimeout(() => setIsLoading(false), 0);
        }
    }, [product]);

    useEffect(() => {
        const handleScroll = () => {
            if (actionPointRef.current) {
                const rect = actionPointRef.current.getBoundingClientRect();
                setShowSticky(rect.top < 0);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleGalleryScroll = useCallback((e) => {
        const node = e.target;
        const index = Math.round(node.scrollLeft / node.offsetWidth);
        if (index !== activeImageIndex) setActiveImageIndex(index);
    }, [activeImageIndex]);

    if (isLoading) {
        return <div className="loading-curtain"><div className="spinner-artisanal"></div></div>;
    }

    if (!product) {
        return (
            <div className="product-not-found">
                <h2>Cargando pieza exclusiva...</h2>
                <button onClick={() => navigate('/productos')} className="btn-primary">Ir al catálogo</button>
            </div>
        );
    }

    // Solo mostrar relacionados .webp (máximo 2)
    const relatedProducts = getRelatedProducts(product || {}, 2).filter(p => 
        p.images?.every(img => img.url.endsWith('.webp'))
    );

    const whatsappLink = `https://wa.me/DATO_POR_DEFINIR?text=Deseo consultar la pieza maestra: ${product.name}`;

    return (
        <div className="page page-product-detail premium-detail premium-slide-in" key={slug}>
            <nav className="breadcrumb-refined">
                <Link to="/productos">← Catálogo</Link> / <span>{product.name}</span>
            </nav>

            <div className="product-layout-refined">
                {/* Título y Precio - Mobile First */}
                <header className="product-header-refined mobile-title-first">
                    <h1 className="premium-title">{product.name}</h1>
                    <div className="price-tag-premium hide-on-mobile">
                        <span className="currency">$</span>
                        <span className="amount">{product.price.toLocaleString()}</span>
                    </div>
                </header>

                {/* Área Visual */}
                <div className="product-visual-section">
                    <div className="main-stage-container">
                        <div 
                            className="main-stage mobile-swipe-track" 
                            ref={trackRef}
                            onScroll={handleGalleryScroll}
                        >
                            {product.images.map((img, idx) => (
                                <div key={idx} className="stage-slide">
                                    <ImageZoom src={img.url} alt={`${product.name} - ${img.label}`} />
                                </div>
                            ))}
                        </div>
                        <div className="mobile-gallery-dots only-mobile">
                            {product.images.map((_, idx) => (
                                <div key={idx} className={`dot ${activeImageIndex === idx ? 'active' : ''}`}></div>
                            ))}
                        </div>
                    </div>

                    <div className="price-tag-premium price-mobile-under-image">
                        <span className="currency">$</span>
                        <span className="amount">{product.price.toLocaleString()}</span>
                    </div>

                    {/* Selector interactivo */}
                    <div className="image-switcher-refined hide-on-mobile">
                        {product.images.map((img, idx) => (
                            <button
                                key={idx}
                                className={`switcher-tab ${activeImageIndex === idx ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveImageIndex(idx);
                                    trackRef.current?.scrollTo({ left: trackRef.current.offsetWidth * idx, behavior: 'smooth' });
                                }}
                            >
                                <span className="tab-label">{img.label}</span>
                                <div className="tab-thumb-wrapper">
                                    <img src={img.url} alt={img.label} />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Ficha Técnica y Storytelling */}
                <div className="product-content-section" ref={actionPointRef}>
                    <div className="product-essential-info">
                        <div className="info-block">
                            <h3>Sobre esta obra</h3>
                            <p className="story-text">{product.story}</p>
                            <span className="story-badge">Esta pieza es única y fue creada puntada a puntada.</span>
                        </div>

                        <div className="specs-grid-refined">
                            <div className="spec-item">
                                <span className="spec-icon">🧵</span>
                                <span className="spec-label">Técnica</span>
                                <span className="spec-value">{product.technique}</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-icon">🌿</span>
                                <span className="spec-label">Materiales</span>
                                <span className="spec-value">{product.materials.join(', ')}</span>
                            </div>
                            <div className="spec-item">
                                <span className="spec-icon">📏</span>
                                <span className="spec-label">Medidas</span>
                                <span className="spec-value">{product.dimensions.alto} x {product.dimensions.ancho}</span>
                            </div>
                        </div>
                    </div>

                    <div className="action-hub-refined">
                        <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-primary btn-embroidered btn-lg">
                            <span>Consultar con el Taller</span> ✨
                        </a>
                        <p className="availability-note">Disponibilidad limitada: {product.stock} piezas</p>
                    </div>

                    <div className="care-instructions-card">
                        <div>
                            <h4>🌿 Instrucciones de Cuidado Especial</h4>
                            <div className="care-grid">
                                <div className="care-item"><span>🧼</span> Lavado a mano</div>
                                <div className="care-item"><span>🫧</span> Jabón neutro</div>
                                <div className="care-item"><span>🚫💨</span> No exprimir</div>
                                <div className="care-item"><span>☂️</span> Secar a la sombra</div>
                            </div>
                            <p style={{marginTop: '1rem', fontSize: '0.8rem'}}>{product.careInstructions}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Extras al final: Recomendados -> Referencias -> Mapa */}
            {relatedProducts.length > 0 && (
                <section className="related-section-refined">
                    <h2 className="related-title-refined">Otras Piezas Maestras</h2>
                    <div className="products-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', justifyContent: 'center'}}>
                        {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
                    </div>
                </section>
            )}

            <ReferenceCarousel />
            <LocationMap />

            {/* Sticky Action Bar (Mobile) */}
            <div className={`sticky-action-bar only-mobile ${showSticky ? 'visible' : ''}`}>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-primary btn-embroidered" style={{width: '90%'}}>
                    Consultar Pieza ✨
                </a>
            </div>
        </div>
    );
};

export default ProductDetail;
