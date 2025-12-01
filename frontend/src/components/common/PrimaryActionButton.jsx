// frontend/src/components/common/PrimaryActionButton.jsx
import React from 'react';

/**
 * Botón animado reutilizable para CTAs principales
 * Basado en diseño de Uiverse (andrew-demchenk0)
 * Adaptado a colores de Artesanías Carmelita
 * 
 * @param {string} text - Texto del botón
 * @param {function} onClick - Handler de click
 * @param {ReactNode} icon - Ícono personalizado (opcional)
 * @param {string} type - Tipo de botón HTML (default: 'button')
 */
const PrimaryActionButton = ({
    text = 'Ver más',
    onClick,
    icon,
    type = 'button'
}) => {
    const defaultIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="currentColor"
            height="24"
            fill="none"
            className="primary-action-svg"
        >
            <line y2="19" y1="5" x2="12" x1="12"></line>
            <line y2="12" y1="12" x2="19" x1="5"></line>
        </svg>
    );

    return (
        <button
            type={type}
            className="primary-action-button"
            onClick={onClick}
        >
            <span className="primary-action-button__text">{text}</span>
            <span className="primary-action-button__icon">
                {icon || defaultIcon}
            </span>
        </button>
    );
};

export default PrimaryActionButton;
