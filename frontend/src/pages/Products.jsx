// frontend/src/pages/Products.jsx
import React from 'react';
import ProductCard from '../components/products/ProductCard.jsx';

// Mock de producto como catálogo inicial
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
            <section className="banner">
                <div className="banner-overlay">
                    <h1>Catálogo de artesanías</h1>
                    <p>Explora los colores y texturas de Chiapas.</p>
                </div>
            </section>

            <section className="section section-products-list">
                <div className="products-layout">
                    <aside className="products-filters">
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
                            <div className="filter-colors">
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
                            <p className="filter-helper">Próximamente podrás filtrar por precio.</p>
                        </div>
                    </aside>

                    <div className="products-results">
                        <div className="products-results-header">
                            <h2>Todos los productos</h2>
                            <p className="products-results-sub">
                                Vista inicial del catálogo. Filtros y conexión con backend se
                                agregarán en siguientes versiones.
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
