import React, { useState, useEffect } from 'react';
import ProductCard from '../components/products/ProductCard.jsx';
import FancyProductCard from '../components/products/FancyProductCard.jsx';
import { useCart } from '../context/CartContext.jsx';

const Products = () => {
    const { openCart, addToCart } = useCart();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // IMPORTANTE: Cambia esta URL por la que te de ngrok para el puerto 3000
    const API_URL = "https://soren-nonpresentational-incongrously.ngrok-free.dev/api/products";

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error("Error al cargar productos desde la API:", error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="page" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                <h2>Cargando artesanías hermosas...</h2>
            </div>
        );
    }

    // Filtrar productos premium para la sección destacada
    const premiumProducts = products.filter(p => p.isPremium);
    const generalProducts = products;

    return (
        <div className="page page-products">
            <section
                className="banner banner-products"
                aria-labelledby="products-banner-title"
            >
                <div className="banner-overlay">
                    <h1 id="products-banner-title">Catálogo de artesanías</h1>
                    <p>
                        Explora los colores, texturas y bordados que hacen única a cada
                        pieza de Artesanías Carmelita.
                    </p>
                </div>
            </section>

            {/* Sección de productos destacados */}
            {premiumProducts.length > 0 && (
                <section className="section" aria-labelledby="fancy-products-title">
                    <h2 id="fancy-products-title">Productos Premium</h2>
                    <p style={{ marginBottom: '1.5rem', color: 'rgba(0,0,0,0.7)' }}>
                        Nuestras piezas más exclusivas con opciones de talla
                    </p>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '1.5rem',
                        justifyItems: 'center'
                    }}>
                        {premiumProducts.map((product) => (
                            <FancyProductCard
                                key={product.id}
                                product={{
                                    ...product,
                                    image: product.images && product.images[0],
                                    variants: product.variants || ['S', 'M', 'L']
                                }}
                                onAddToCart={(item) => {
                                    addToCart(product, 1, item.selectedVariant);
                                    openCart();
                                }}
                            />
                        ))}
                    </div>
                </section>
            )}

            <section
                className="section section-products-list"
                aria-labelledby="products-list-title"
            >
                <div className="products-layout">
                    <aside
                        className="products-filters"
                        aria-label="Filtros visuales del catálogo"
                    >
                        <h2>Filtros</h2>
                        <div className="filter-group">
                            <h3>Categorías</h3>
                            <ul>
                                <li>Vestidos</li>
                                <li>Muñecas</li>
                                <li>Textiles</li>
                                <li>Accesorios</li>
                            </ul>
                        </div>

                        <div className="filter-group">
                            <h3>Colores</h3>
                            <div className="filter-colors" aria-hidden="true">
                                <span className="color-dot color-dot-primary" title="Fucsia chiapaneco" />
                                <span className="color-dot color-dot-secondary" title="Turquesa" />
                                <span className="color-dot color-dot-accent" title="Amarillo maíz" />
                                <span className="color-dot color-dot-decorative" title="Rojo lacandón" />
                            </div>
                        </div>

                        <div className="filter-group">
                            <h3>Rango de precio</h3>
                            <p className="filter-helper">Próximamente podrás filtrar por precio.</p>
                        </div>
                    </aside>

                    <div className="products-results">
                        <div className="products-results-header">
                            <h2 id="products-list-title">Todos los productos</h2>
                            <p className="products-results-sub">
                                Mostrando productos reales desde el servidor de Artesanías Carmelita.
                            </p>
                        </div>

                        <div className="products-grid">
                            {generalProducts.map((p) => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;