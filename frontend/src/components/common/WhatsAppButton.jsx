// frontend/src/components/common/WhatsAppButton.jsx
import React from 'react';

// Botón flotante de WhatsApp con microinteracción tipo "latido"
const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/[DATO_POR_DEFINIR]"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-floating"
            aria-label="Abrir chat de WhatsApp de Artesanías Carmelita"
        >
            {/* Podrías cambiar este emoji por un ícono SVG de WhatsApp */}
            <span className="whatsapp-icon" aria-hidden="true">
                🧵
            </span>
        </a>
    );
};

export default WhatsAppButton;
