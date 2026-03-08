// frontend/src/pages/Products.jsx
import React, { useState, useMemo } from 'react';
import ProductCard from '../components/products/ProductCard.jsx';
import { products } from '../data/products.js';

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('Todos');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['Todos', 'Vestimenta', 'Muñecas', 'Textiles', 'Accesorios'];

    // Lógica de filtrado funcional
    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            const matchesCategory = activeCategory === 'Todos' || product.category === activeCategory;
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch && product.luzVerde;
        });

    }, [activeCategory, searchQuery]);

    const handleCategoryChange = (cat) => {
        setActiveCategory(cat);
    };

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

            <section className="section section-products-list">
                <div className="products-layout">
                    {/* Filtros laterales funcionales */}
                    <aside className="products-sidebar">
                        <div className="sidebar-search">
                            <input 
                                type="text" 
                                placeholder="Buscar artesanía..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="filter-search-input"
                            />
                        </div>

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
                    </aside>

                    {/* Resultados del catálogo */}
                    <main className="products-results">
                        <header className="results-header">
                            <div className="results-info">
                                <h2>{activeCategory === 'Todos' ? 'Nuestra Colección' : activeCategory}</h2>
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

