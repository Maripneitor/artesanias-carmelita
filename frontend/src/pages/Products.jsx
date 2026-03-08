import React, { useState, useEffect, useMemo } from 'react';
import ProductCard from '../components/products/ProductCard.jsx';
import FancyProductCard from '../components/products/FancyProductCard.jsx';
import { useCart } from '../context/CartContext.jsx';
import { products as localProducts } from '../data/products.js';

const Products = () => {
    const { openCart, addToCart } = useCart();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('Todos');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['Todos', 'Vestimenta', 'Muñecas', 'Textiles', 'Accesorios'];

    // IMPORTANTE: Cambia esta URL por la que te de ngrok para el puerto 3000
    const API_URL = "https://soren-nonpresentational-incongrously.ngrok-free.dev/api/products";

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) throw new Error("Network response was not ok");
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error("Error al cargar productos desde la API, usando locales:", error);
                setProducts(localProducts);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // Lógica de filtrado funcional
    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchesCategory = activeCategory === 'Todos' || product.category === activeCategory;
            const matchesSearch = (product.name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
                                  (product.shortDescription?.toLowerCase() || '').includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch && product.luzVerde !== false;
        });
    }, [products, activeCategory, searchQuery]);

    const premiumProducts = products.filter(p => p.isPremium);

    const handleCategoryChange = (cat) => {
        setActiveCategory(cat);
    };

    if (loading) {
        return (
            <div className="page" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                <h2>Cargando artesanías hermosas...</h2>
            </div>
        );
    }

    return (
        <div className="page page-products">
            <header className="banner banner-products">
                <div className="banner-overlay">
                    <h1>Catálogo de Artesanías</h1>
                    <p>
                        Explora la autenticidad de Chiapas a través de nuestras piezas únicas, 
                        seleccionadas por su calidad y riqueza cultural.
                    </p>
                </div>
            </header>

            {/* Sección de productos destacados */}
            {premiumProducts.length > 0 && searchQuery === '' && activeCategory === 'Todos' && (
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

            <section className="section section-products-list" aria-labelledby="products-list-title">
                <div className="products-layout">
                    <aside className="products-sidebar products-filters" aria-label="Filtros visuales del catálogo">
                        <div className="sidebar-search">
                            <input 
                                type="text" 
                                placeholder="Buscar artesanía..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="filter-search-input"
                            />
                        </div>

                        <h2>Filtros</h2>
                        <div className="filter-group">
                            <h3>Categorías</h3>
                            <nav className="filter-nav">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => handleCategoryChange(cat)}
                                        className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                                    >
                                        {cat}
                                        {activeCategory === cat && <span className="active-dot"></span>}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        <div className="filter-group premium-filter-box">
                            <h3>Filtrado Especial</h3>
                            <div className="premium-toggle">
                                <span className="premium-text">Piezas Premium</span>
                                <div className="premium-indicator-dot"></div>
                            </div>
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
                    </aside>

                    <main className="products-results">
                        <header className="results-header products-results-header">
                            <div className="results-info">
                                <h2 id="products-list-title">{activeCategory === 'Todos' ? 'Nuestra Colección' : activeCategory}</h2>
                                <p className="results-count">
                                    Mostrando <strong>{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'artesanía' : 'artesanías'}
                                </p>
                            </div>
                        </header>

                        {filteredProducts.length > 0 ? (
                            <div className="products-grid">
                                {filteredProducts.map((p) => (
                                    <ProductCard key={p.id} product={p} />
                                ))}
                            </div>
                        ) : (
                            <div className="no-results">
                                <div className="no-results-icon">📂</div>
                                <h3>No encontramos resultados</h3>
                                <p>Prueba ajustando tus filtros o de búsqueda.</p>
                                <button 
                                    className="btn-link" 
                                    onClick={() => { setActiveCategory('Todos'); setSearchQuery(''); }}
                                >
                                    Restablecer filtros
                                </button>
                            </div>
                        )}
                    </main>
                </div>
            </section>
        </div>
    );
};

export default Products;
