// frontend/src/components/common/WhatsAppButton.jsx
import React from 'react';

// Botón flotante de WhatsApp con microinteracción tipo "latido" y marco artesanal
const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/[DATO_POR_DEFINIR]"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-floating"
            aria-label="Abrir chat de WhatsApp de Artesanías Carmelita"
            title="Contáctanos por WhatsApp"
        >
            {/* Ícono de WhatsApp - podrías reemplazar con SVG real */}
            <span className="whatsapp-icon" aria-hidden="true">
                💬
            </span>
        </a>
    );
};

export default WhatsAppButton;
