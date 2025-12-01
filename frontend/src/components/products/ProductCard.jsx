// frontend/src/components/products/ProductCard.jsx
import React, { useState } from 'react';

// Tarjeta de producto con microinteracciones suaves y corazón interactivo
const ProductCard = ({ product }) => {
    const { nombre, categoria, descripcion } = product;
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = (e) => {
        e.stopPropagation();
        setIsFavorite(!isFavorite);
    };

    return (
        <article className="product-card">
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
                aria-label={`Imagen representativa del producto: ${nombre}`}
            >
                {/* TODO: conectar con imagen real */}
                <div className="product-image-placeholder" aria-hidden="true">
                    {nombre.charAt(0)}
                </div>
            </div>

            <div className="product-info">
                <h3>{nombre}</h3>
                {categoria && (
                    <p className="product-category">
                        {categoria}
                    </p>
                )}
                {descripcion && (
                    <p className="product-description">
                        {descripcion}
                    </p>
                )}
                <p className="product-price">
                    {/* TODO: integrar precio real desde backend */}
                    Precio: [Por definir]
                </p>
                <button className="btn-outline" type="button">
                    Ver más
                </button>
            </div>
        </article>
    );
};

export default ProductCard;
