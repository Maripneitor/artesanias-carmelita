// frontend/src/components/products/ProductCard.jsx
import React from 'react';

// Tarjeta de producto con microinteracciones suaves
const ProductCard = ({ product }) => {
    const { nombre, categoria, descripcion } = product;

    return (
        <article className="product-card">
            <span className="product-heart" aria-hidden="true">
                ♥
            </span>

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
