// frontend/src/pages/ProductDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getProductBySlug, getRelatedProducts } from '../data/products.js';
import { useCart } from '../context/CartContext.jsx';
import ProductCard from '../components/products/ProductCard.jsx';

const ProductDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState('');
    const [selectedVariant, setSelectedVariant] = useState('');
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        // Simular carga de datos
        setLoading(true);
        const foundProduct = getProductBySlug(slug);

        if (foundProduct) {
            setProduct(foundProduct);
            setSelectedImage(foundProduct.images[0]);
            // Si hay variantes (por ahora simuladas o si el modelo tuviera), seleccionar la primera
            // En este modelo simple no hay array de variantes explícito, pero lo preparamos
            setLoading(false);
            window.scrollTo(0, 0);
        } else {
            // Producto no encontrado
            setLoading(false);
        }
    }, [slug]);

    if (loading) return <div className="loading-spinner">Cargando...</div>;

    if (!product) {
        return (
            <div className="product-not-found">
                <h2>Producto no encontrado</h2>
                <button onClick={() => navigate('/productos')} className="btn-primary">
                    Volver al catálogo
                </button>
            </div>
        );
    }

    const relatedProducts = getRelatedProducts(product);

    const handleAddToCart = () => {
        addToCart(product, quantity, selectedVariant || null);
    };

    return (
        <div className="page page-product-detail">
            {/* Breadcrumb simple */}
            <div className="breadcrumb">
                <Link to="/">Inicio</Link> /
                <Link to="/productos">Productos</Link> /
                <span>{product.name}</span>
            </div>

            <div className="product-detail-container">
                {/* Galería de imágenes */}
                <div className="product-gallery">
                    <div className="main-image-container">
                        <img
                            src={selectedImage}
                            alt={product.name}
                            className="main-image"
                        />
                        {product.isPremium && (
                            <span className="badge-premium">Premium</span>
                        )}
                        {product.isOnSale && (
                            <span className="badge-sale">-{product.discount}%</span>
                        )}
                    </div>
                    <div className="thumbnail-list">
                        {product.images.map((img, idx) => (
                            <button
                                key={idx}
                                className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
                                onClick={() => setSelectedImage(img)}
                            >
                                <img src={img} alt={`Vista ${idx + 1}`} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Información del producto */}
                <div className="product-info">
                    <h1 className="product-title">{product.name}</h1>

                    <div className="product-meta">
                        <span className="product-artisan">Por: {product.artisan}</span>
                        <span className="product-category"> | {product.category}</span>
                    </div>

                    <div className="product-price-container">
                        <span className="product-price">${product.price.toFixed(2)}</span>
                        {product.isOnSale && (
                            <span className="product-original-price">
                                ${(product.price / (1 - product.discount / 100)).toFixed(2)}
                            </span>
                        )}
                    </div>

                    <div className="product-story">
                        <h3>Historia de la pieza</h3>
                        <p>{product.story}</p>
                    </div>

                    <div className="product-specs">
                        <h3>Detalles</h3>
                        <ul>
                            <li><strong>Técnica:</strong> {product.technique}</li>
                            <li><strong>Materiales:</strong> {product.materials.join(', ')}</li>
                            <li><strong>Dimensiones:</strong> {product.dimensions.alto} x {product.dimensions.ancho}</li>
                        </ul>
                    </div>

                    {/* Selector de cantidad y botón de compra */}
                    <div className="product-actions">
                        <div className="quantity-selector">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                disabled={quantity <= 1}
                            >-</button>
                            <span>{quantity}</span>
                            <button
                                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                                disabled={quantity >= product.stock}
                            >+</button>
                        </div>

                        <button
                            className="btn-add-to-cart"
                            onClick={handleAddToCart}
                            disabled={product.stock === 0}
                        >
                            {product.stock > 0 ? 'Añadir al carrito' : 'Agotado'}
                        </button>
                    </div>

                    <div className="product-shipping-info">
                        <p>🚚 Envíos a todo México (3-5 días hábiles)</p>
                        <p>↩️ Devoluciones gratuitas si la pieza no es lo que esperabas</p>
                    </div>
                </div>
            </div>

            {/* Pestañas de detalles adicionales (opcional, aquí simplificado) */}
            <div className="product-extra-details section">
                <div className="details-grid">
                    <div className="detail-card">
                        <h3>Cuidados</h3>
                        <p>{product.careInstructions}</p>
                    </div>
                    <div className="detail-card">
                        <h3>Opiniones</h3>
                        <div className="reviews-placeholder">
                            <p>⭐⭐⭐⭐⭐ "Una pieza hermosa, se nota el amor en cada puntada." - Ana G.</p>
                            <p>⭐⭐⭐⭐⭐ "Llegó muy rápido y el empaque es precioso." - Carlos M.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Productos relacionados */}
            <section className="related-products section">
                <h2>También te podría gustar</h2>
                <div className="products-grid">
                    {relatedProducts.map(p => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ProductDetail;
