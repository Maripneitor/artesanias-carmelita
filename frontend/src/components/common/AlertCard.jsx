// frontend/src/components/common/AlertCard.jsx
import React, { useState } from 'react';

/**
 * Card para mensajes/avisos importantes
 * Basado en diseño de Uiverse (Yaya12085)
 * Adaptado a colores de Artesanías Carmelita
 * 
 * @param {string} title - Título del mensaje
 * @param {string} message - Contenido del mensaje
 * @param {function} onRead - Handler para "Leer más"
 * @param {function} onMarkAsRead - Handler para "Marcar como leído"
 * @param {string} readText - Texto del botón principal (default: 'Leer más')
 * @param {string} markText - Texto del botón secundario (default: 'Marcar como leído')
 */
const AlertCard = ({
    title = '¡Nuevo aviso!',
    message = 'Tenemos novedades para ti.',
    onRead,
    onMarkAsRead,
    readText = 'Leer más',
    markText = 'Marcar como leído'
}) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleMarkAsRead = (e) => {
        e.preventDefault();
        setIsVisible(false);
        if (onMarkAsRead) onMarkAsRead();
    };

    const handleRead = (e) => {
        e.preventDefault();
        if (onRead) onRead();
    };

    if (!isVisible) return null;

    return (
        <div className="alert-card">
            <div className="alert-card-header">
                <span className="alert-card-icon">
                    <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            clipRule="evenodd"
                            d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                            fillRule="evenodd"
                        ></path>
                    </svg>
                </span>
                <p className="alert-card-title">{title}</p>
            </div>

            <p className="alert-card-message">{message}</p>

            <div className="alert-card-actions">
                <a className="alert-card-read" href="#" onClick={handleRead}>
                    {readText}
                </a>

                <a className="alert-card-mark-as-read" href="#" onClick={handleMarkAsRead}>
                    {markText}
                </a>
            </div>
        </div>
    );
};

export default AlertCard;
