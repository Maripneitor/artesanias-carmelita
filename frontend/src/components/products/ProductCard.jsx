// frontend/src/components/products/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Tarjeta de producto refinada con enfoque visual y premium
const ProductCard = ({ product }) => {
    // Adaptador para soportar estructura antigua y nueva
    const name = product.name || product.nombre;
    const category = product.category || product.categoria;
    const description = product.shortDescription || product.descripcion;
    const price = product.price || 0;
    const slug = product.slug || '#';
    const modelImage = product.images?.find(img => img.type === 'model');
    const studioImage = product.images?.find(img => img.type === 'studio');
    const displayImage = modelImage || studioImage || (product.images && product.images[0]);
    const imageUrl = displayImage?.url;
    const isPremium = product.isPremium || false;

    return (
        <Link to={`/producto/${slug}`} className="product-card-link">
            <article className={`product-card ${isPremium ? 'is-premium' : ''}`}>
                <div
                    className="product-image"
                    role="img"
                    aria-label={`Imagen de: ${name}`}
                >
                    {imageUrl ? (
                        <img 
                            src={imageUrl} 
                            alt={name} 
                            className="product-image-real" 
                            loading="lazy"
                        />
                    ) : (
                        <div className="product-image-placeholder" aria-hidden="true">
                            {name.charAt(0)}
                        </div>
                    )}
                </div>



                <div className="product-info">
                    <div className="product-header">
                        <span className="product-category">{category}</span>
                        <h3>{name}</h3>
                    </div>
                    
                    {description && (
                        <p className="product-description">
                            {description}
                        </p>
                    )}
                    
                    <div className="product-footer">
                        <p className="product-price">
                            <span className="price-currency">$</span>
                            <span className="price-value">{price.toLocaleString()}</span>
                        </p>
                        <div className="view-details-indicator">
                            Ver detalle →
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default ProductCard;

