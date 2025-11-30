// frontend/src/components/layout/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

// Header fijo con navegación principal
const Header = () => {
    return (
        <header className="header">
            <div className="header-inner">
                <div className="header-logo">
                    {/* TODO: reemplazar por logo real */}
                    <span className="logo-mark">AC</span>
                    <span className="logo-text">Artesanías de Chiapas</span>
                </div>

                <nav className="header-nav">
                    <NavLink to="/" end>
                        Inicio
                    </NavLink>
                    <NavLink to="/productos">Productos</NavLink>
                    <NavLink to="/sobre-mi">Sobre mí</NavLink>
                    <NavLink to="/galeria">Galería</NavLink>
                    <NavLink to="/ubicacion">Ubicación</NavLink>
                    <NavLink to="/contacto">Contacto</NavLink>
                </nav>

                <a
                    className="header-cta"
                    href="https://wa.me/[DATO_POR_DEFINIR]"
                    target="_blank"
                    rel="noreferrer"
                >
                    WhatsApp
                </a>
            </div>
        </header>
    );
};

export default Header;
