// frontend/src/components/layout/Footer.jsx
import React from 'react';

// Pie de página con franja textil y bloques de información
const Footer = () => {
    return (
        <footer className="footer" aria-label="Pie de página">
            <div className="footer-textile-band" aria-hidden="true" />

            <div className="footer-inner">
                <div className="footer-section">
                    <h4>Contacto</h4>
                    <p>Tel: [DATO_POR_DEFINIR]</p>
                    <p>WhatsApp: [DATO_POR_DEFINIR]</p>
                    <p>Correo: [DATO_POR_DEFINIR]</p>
                </div>

                <div className="footer-section">
                    <h4>Horario</h4>
                    <p>Lunes a sábado: [DATO_POR_DEFINIR]</p>
                    <p>Domingos: [DATO_POR_DEFINIR]</p>
                </div>

                <div className="footer-section">
                    <h4>Visítanos</h4>
                    <p>[DATO_POR_DEFINIR – Dirección completa]</p>
                    <p>[Referencia de ubicación]</p>
                </div>

                <div className="footer-section">
                    <h4>Redes</h4>
                    <p>
                        <a href="[DATO_POR_DEFINIR_FACEBOOK]" target="_blank" rel="noreferrer">
                            Facebook
                        </a>
                    </p>
                    <p>
                        <a href="[DATO_POR_DEFINIR_INSTAGRAM]" target="_blank" rel="noreferrer">
                            Instagram
                        </a>
                    </p>
                    <p>
                        <a href="[DATO_POR_DEFINIR_TIKTOK]" target="_blank" rel="noreferrer">
                            TikTok
                        </a>
                    </p>
                </div>
            </div>

            <div className="footer-bottom">
                <span>
                    © {new Date().getFullYear()} Artesanías Carmelita. Todos los derechos
                    reservados.
                </span>
                <span>Hecho con tradición chiapaneca 🧵</span>
            </div>
        </footer>
    );
};

export default Footer;
