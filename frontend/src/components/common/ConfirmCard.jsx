// frontend/src/components/common/ConfirmCard.jsx
import React from 'react';

/**
 * Card para confirmaciones importantes
 * Basado en diseño de Uiverse (Yaya12085)
 * Adaptado a colores de Artesanías Carmelita
 * 
 * @param {string} title - Título de la confirmación
 * @param {string} message - Mensaje de advertencia
 * @param {function} onConfirm - Handler para confirmar acción
 * @param {function} onCancel - Handler para cancelar
 * @param {string} confirmText - Texto del botón de confirmar (default: 'Confirmar')
 * @param {string} cancelText - Texto del botón de cancelar (default: 'Cancelar')
 */
const ConfirmCard = ({
    title = 'Confirmar acción',
    message = '¿Estás seguro de que deseas realizar esta acción?',
    onConfirm,
    onCancel,
    confirmText = 'Confirmar',
    cancelText = 'Cancelar'
}) => {
    return (
        <div className="confirm-card">
            <div className="confirm-card-header">
                <div className="confirm-card-image">
                    <svg
                        aria-hidden="true"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        ></path>
                    </svg>
                </div>
                <div className="confirm-card-content">
                    <span className="confirm-card-title">{title}</span>
                    <p className="confirm-card-message">{message}</p>
                </div>
                <div className="confirm-card-actions">
                    <button
                        className="confirm-card-confirm"
                        type="button"
                        onClick={onConfirm}
                    >
                        {confirmText}
                    </button>
                    <button
                        className="confirm-card-cancel"
                        type="button"
                        onClick={onCancel}
                    >
                        {cancelText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmCard;
