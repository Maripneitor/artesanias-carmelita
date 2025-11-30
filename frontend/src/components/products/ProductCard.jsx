// frontend/src/components/products/ProductCard.jsx
import React from 'react';

// Tarjeta de producto genérica
const ProductCard = ({ product }) => {
    return (
        <article className="product-card">
            <span className="product-heart" aria-hidden="true">
                ♥
            </span>

            <div className="product-image">
                {/* TODO: conectar con imagen real */}
                <div className="product-image-placeholder">
                    {product.nombre.charAt(0)}
                </div>
            </div>

            <div className="product-info">
                <h3>{product.nombre}</h3>
                <p className="product-category">{product.categoria}</p>
                <p className="product-description">{product.descripcion}</p>
                {/* Marcador para precio futuro */}
                <p className="product-price">Precio: [Definir con clienta]</p>
                <button className="btn-outline">Ver más</button>
            </div>
        </article>
    );
};

export default ProductCard;
