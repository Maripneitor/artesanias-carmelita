// frontend/src/pages/Products.jsx
import React from 'react';
import ProductCard from '../components/products/ProductCard.jsx';

// Mock de producto como catálogo inicial
const mockProducts = [
    {
        id: 1,
        nombre: 'Vestido chiapaneco negro',
        categoria: 'Vestimenta',
        descripcion: 'Vestido negro con flores bordadas multicolor.'
    },
    {
        id: 2,
        nombre: 'Vestido chiapaneco blanco',
        categoria: 'Vestimenta',
        descripcion: 'Vestido blanco con bordado fucsia y turquesa.'
    },
    {
        id: 3,
        nombre: 'Muñeca chiapaneca grande',
        categoria: 'Muñecas',
        descripcion: 'Muñeca de tela con listones y vestido tradicional.'
    },
    {
        id: 4,
        nombre: 'Camino de mesa rojo lacandón',
        categoria: 'Textiles',
        descripcion: 'Camino de mesa con figuras geométricas indígenas.'
    }
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

            <section className="section">
                <h2>Todos los productos</h2>
                {/* TODO: filtros por categoría / color en futuras versiones */}
                <div className="products-grid">
                    {mockProducts.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Products;
