// frontend/src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/home/HeroSection.jsx';
import ProductCard from '../components/products/ProductCard.jsx';

// Productos destacados mock (para prototipo)
const featuredProducts = [
    {
        id: 1,
        nombre: 'Vestido chiapaneco tradicional',
        categoria: 'Vestimenta',
        descripcion: 'Bordado a mano con flores inspiradas en Chiapa de Corzo.'
    },
    {
        id: 2,
        nombre: 'Muñeca artesanal chiapaneca',
        categoria: 'Muñecas',
        descripcion: 'Muñeca de tela con vestido típico lleno de color.'
    },
    {
        id: 3,
        nombre: 'Camino de mesa bordado',
        categoria: 'Textiles',
        descripcion: 'Textil para mesa con patrones geométricos chiapanecos.'
    },
    {
        id: 4,
        nombre: 'Blusa bordada',
        categoria: 'Vestimenta',
        descripcion: 'Blusa ligera con bordado floral tradicional.'
    }
];

const Home = () => {
    return (
        <div className="page page-home">
            <HeroSection />

            <section className="section section-featured">
                <h2>Productos destacados</h2>
                <div className="products-grid">
                    {featuredProducts.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </section>

            <section className="section section-essence">
                <div className="essence-image">
                    {/* TODO: foto real de la artesana */}
                    <div className="essence-image-placeholder">Foto de la artesana</div>
                </div>
                <div className="essence-text">
                    <h2>Nuestra esencia</h2>
                    <p>
                        Cada puntada cuenta una historia. Este proyecto nace del amor por
                        las raíces chiapanecas y el deseo de compartirlas con el mundo.
                    </p>
                    <ul className="essence-values">
                        <li>✨ Tradición</li>
                        <li>🧵 Hecho a mano</li>
                        <li>🌺 Colores auténticos</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Home;
