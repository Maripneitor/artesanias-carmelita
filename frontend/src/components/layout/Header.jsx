// frontend/src/components/layout/Header.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Header fijo con navegación principal y menú móvil accesible
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const handleCloseMenu = () => {
        setIsOpen(false);
    };

    const navLinkClass = ({ isActive }) =>
        isActive ? 'nav-link nav-link-active' : 'nav-link';

    return (
        <header className="header">
            <div className="header-inner">
                <div className="header-logo" aria-label="Artesanías Carmelita">
                    {/* TODO: reemplazar por logo real (imagen o SVG) */}
                    <span className="logo-mark" aria-hidden="true">
                        AC
                    </span>
                    <span className="logo-text">Artesanías Carmelita</span>
                </div>

                <nav
                    className={`header-nav ${isOpen ? 'is-open' : ''}`}
                    aria-label="Navegación principal"
                >
                    <NavLink
                        to="/"
                        end
                        className={navLinkClass}
                        onClick={handleCloseMenu}
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        to="/productos"
                        className={navLinkClass}
                        onClick={handleCloseMenu}
                    >
                        Productos
                    </NavLink>
                    <NavLink
                        to="/sobre-mi"
                        className={navLinkClass}
                        onClick={handleCloseMenu}
                    >
                        Sobre mí
                    </NavLink>
                    <NavLink
                        to="/galeria"
                        className={navLinkClass}
                        onClick={handleCloseMenu}
                    >
                        Galería
                    </NavLink>
                    <NavLink
                        to="/ubicacion"
                        className={navLinkClass}
                        onClick={handleCloseMenu}
                    >
                        Ubicación
                    </NavLink>
                    <NavLink
                        to="/contacto"
                        className={navLinkClass}
                        onClick={handleCloseMenu}
                    >
                        Contacto
                    </NavLink>
                </nav>

                <div className="header-actions">
                    <a
                        className="header-cta"
                        href="https://wa.me/[DATO_POR_DEFINIR]"
                        target="_blank"
                        rel="noreferrer"
                    >
                        WhatsApp
                    </a>

                    <button
                        type="button"
                        className={`header-menu-toggle ${isOpen ? 'is-open' : ''}`}
                        onClick={handleToggleMenu}
                        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={isOpen}
                        aria-controls="main-navigation"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
