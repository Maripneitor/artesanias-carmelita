// frontend/src/pages/Products.jsx
import React from 'react';
import ProductCard from '../components/products/ProductCard.jsx';

// Mock de productos como catálogo inicial
const mockProducts = [
    {
        id: 1,
        nombre: 'Vestido chiapaneco negro',
        categoria: 'Vestimenta',
        descripcion: 'Vestido negro con flores bordadas multicolor.',
    },
    {
        id: 2,
        nombre: 'Vestido chiapaneco blanco',
        categoria: 'Vestimenta',
        descripcion: 'Vestido blanco con bordado fucsia y turquesa.',
    },
    {
        id: 3,
        nombre: 'Muñeca chiapaneca grande',
        categoria: 'Muñecas',
        descripcion: 'Muñeca de tela con listones y vestido tradicional.',
    },
    {
        id: 4,
        nombre: 'Camino de mesa rojo lacandón',
        categoria: 'Textiles',
        descripcion: 'Camino de mesa con figuras geométricas indígenas.',
    },
];

const Products = () => {
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
                            {mockProducts.map((p) => (
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
