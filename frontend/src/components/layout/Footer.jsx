// frontend/src/components/layout/Footer.jsx
import React from 'react';

// Pie de página con datos básicos
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-section">
                    <h4>Contacto</h4>
                    <p>Tel: [DATO_POR_DEFINIR]</p>
                    <p>WhatsApp: [DATO_POR_DEFINIR]</p>
                    <p>Correo: [DATO_POR_DEFINIR]</p>
                </div>

                <div className="footer-section">
                    <h4>Horarios</h4>
                    <p>[DATO_POR_DEFINIR]</p>
                </div>

                <div className="footer-section">
                    <h4>Redes sociales</h4>
                    <p>Facebook · Instagram · TikTok</p>
                    {/* TODO: reemplazar por enlaces reales */}
                </div>
            </div>
            <div className="footer-bottom">
                <span>© {new Date().getFullYear()} Artesanías de Chiapas</span>
                <span>Hecho con tradición chiapaneca</span>
            </div>
        </footer>
    );
};

export default Footer;
