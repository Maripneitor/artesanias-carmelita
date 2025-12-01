// frontend/src/components/products/ProductCard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';

// Tarjeta de producto con microinteracciones suaves y corazón interactivo
const ProductCard = ({ product }) => {
    // Adaptador para soportar estructura antigua y nueva durante la migración
    const name = product.name || product.nombre;
    const category = product.category || product.categoria;
    const description = product.shortDescription || product.descripcion;
    const price = product.price || 0;
    const slug = product.slug || '#';
    const image = product.images && product.images.length > 0 ? product.images[0] : null;
    const isPremium = product.isPremium || false;

    const [isFavorite, setIsFavorite] = useState(false);
    const { addToCart } = useCart();

    const handleFavoriteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsFavorite(!isFavorite);
    };

    const handleQuickAdd = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);
    };

    return (
        <Link to={`/producto/${slug}`} className="product-card-link">
            <article className={`product-card ${isPremium ? 'is-premium' : ''}`}>
                {isPremium && <span className="card-badge-premium">Premium</span>}

                <button
                    className="product-heart"
                    onClick={handleFavoriteClick}
                    aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
                    style={{
                        background: isFavorite ? 'var(--color-primary)' : 'rgba(249, 244, 238, 0.95)',
                        color: isFavorite ? '#fff' : 'var(--color-primary)'
                    }}
                >
                    {isFavorite ? '♥' : '♡'}
                </button>

                <div
                    className="product-image"
                    role="img"
                    aria-label={`Imagen de: ${name}`}
                >
                    {image ? (
                        <img src={image} alt={name} className="product-image-real" />
                    ) : (
                        <div className="product-image-placeholder" aria-hidden="true">
                            {name.charAt(0)}
                        </div>
                    )}
                </div>

                <div className="product-info">
                    <h3>{name}</h3>
                    {category && (
                        <p className="product-category">
                            {category}
                        </p>
                    )}
                    {description && (
                        <p className="product-description">
                            {description}
                        </p>
                    )}
                    <div className="product-footer">
                        <p className="product-price">
                            ${price.toFixed(2)}
                        </p>
                        <button
                            className="btn-outline btn-sm"
                            type="button"
                            onClick={handleQuickAdd}
                        >
                            + Agregar
                        </button>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default ProductCard;
