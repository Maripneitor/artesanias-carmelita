// frontend/src/components/common/WhatsAppButton.jsx
import React from 'react';

// Botón flotante de WhatsApp
const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/[DATO_POR_DEFINIR]"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-floating"
        >
            <span className="whatsapp-icon">🧵</span>
        </a>
    );
};

export default WhatsAppButton;
