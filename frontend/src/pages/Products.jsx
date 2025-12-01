// frontend/src/pages/Products.jsx
import React, { useState } from 'react';
import ProductCard from '../components/products/ProductCard.jsx';
import FancyProductCard from '../components/products/FancyProductCard.jsx';
import { products } from '../data/products.js';
import { useCart } from '../context/CartContext.jsx';

const Products = () => {
    const { openCart, addToCart } = useCart();

    // Filtrar productos premium para la sección destacada
    const premiumProducts = products.filter(p => p.isPremium);

    // El resto de productos para el catálogo general
    const generalProducts = products; // Por ahora mostramos todos en el grid general

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

            {/* Sección de productos destacados con FancyProductCard */}
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
                                    image: product.images[0], // Adaptador para FancyProductCard
                                    variants: ['XS', 'S', 'M', 'L'] // Mock variants si no existen
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
                                <span
                                    className="color-dot color-dot-primary"
                                    title="Fucsia chiapaneco"
                                />
                                <span
                                    className="color-dot color-dot-secondary"
                                    title="Turquesa"
                                />
                                <span
                                    className="color-dot color-dot-accent"
                                    title="Amarillo maíz"
                                />
                                <span
                                    className="color-dot color-dot-decorative"
                                    title="Rojo lacandón"
                                />
                            </div>
                        </div>

                        <div className="filter-group">
                            <h3>Rango de precio</h3>
                            <p className="filter-helper">
                                Próximamente podrás filtrar por rango de precio.
                            </p>
                        </div>
                    </aside>

                    <div className="products-results">
                        <div className="products-results-header">
                            <h2 id="products-list-title">Todos los productos</h2>
                            <p className="products-results-sub">
                                Vista inicial del catálogo. En futuras versiones podrás filtrar,
                                ordenar y ver más detalles de cada pieza.
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
