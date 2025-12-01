// frontend/src/components/layout/Header.jsx
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';

// Header fijo con navegación principal y menú móvil accesible
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { toggleCart, cartCount } = useCart();
    const [animateCart, setAnimateCart] = useState(false);

    // Animación del contador cuando cambia
    useEffect(() => {
        if (cartCount > 0) {
            setAnimateCart(true);
            const timer = setTimeout(() => setAnimateCart(false), 300);
            return () => clearTimeout(timer);
        }
    }, [cartCount]);

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
                    {/* Botón del carrito */}
                    <button
                        className={`header-cart-btn ${animateCart ? 'bump' : ''}`}
                        onClick={toggleCart}
                        aria-label={`Carrito de compras, ${cartCount} productos`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        {cartCount > 0 && (
                            <span className="cart-count-badge">{cartCount}</span>
                        )}
                    </button>

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
