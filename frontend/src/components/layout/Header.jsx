// frontend/src/components/layout/Header.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Header fijo con navegación principal y menú móvil
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    const navLinkClass = ({ isActive }) =>
        isActive ? 'nav-link active' : 'nav-link';

    return (
        <header className="header">
            <div className="header-inner">
                <div className="header-logo">
                    {/* TODO: reemplazar por logo real */}
                    <span className="logo-mark">AC</span>
                    <span className="logo-text">Artesanías Carmelita</span>
                </div>

                <nav className={`header-nav ${isOpen ? 'is-open' : ''}`}>
                    <NavLink
                        to="/"
                        end
                        className={navLinkClass}
                        onClick={handleLinkClick}
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        to="/productos"
                        className={navLinkClass}
                        onClick={handleLinkClick}
                    >
                        Productos
                    </NavLink>
                    <NavLink
                        to="/sobre-mi"
                        className={navLinkClass}
                        onClick={handleLinkClick}
                    >
                        Sobre mí
                    </NavLink>
                    <NavLink
                        to="/galeria"
                        className={navLinkClass}
                        onClick={handleLinkClick}
                    >
                        Galería
                    </NavLink>
                    <NavLink
                        to="/ubicacion"
                        className={navLinkClass}
                        onClick={handleLinkClick}
                    >
                        Ubicación
                    </NavLink>
                    <NavLink
                        to="/contacto"
                        className={navLinkClass}
                        onClick={handleLinkClick}
                    >
                        Contacto
                    </NavLink>
                </nav>

                <button
                    type="button"
                    className={`header-menu-toggle ${isOpen ? 'is-open' : ''}`}
                    onClick={handleToggleMenu}
                    aria-label={isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
                >
                    <span />
                    <span />
                    <span />
                </button>

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
