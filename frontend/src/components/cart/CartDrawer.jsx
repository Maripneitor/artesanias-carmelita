// frontend/src/components/cart/CartDrawer.jsx
import React, { useEffect, useRef } from 'react';
import { useCart } from '../../context/CartContext.jsx';
import { useNavigate } from 'react-router-dom';

/**
 * Componente de carrito desplegable (Drawer/Offcanvas)
 * Muestra los productos agregados, permite editar cantidades y eliminar.
 */
const CartDrawer = () => {
    const {
        cartItems,
        isCartOpen,
        closeCart,
        removeFromCart,
        updateQuantity,
        cartTotal
    } = useCart();

    const drawerRef = useRef(null);
    const navigate = useNavigate();

    // Cerrar al hacer click fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target) && isCartOpen) {
                closeCart();
            }
        };

        if (isCartOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            // Bloquear scroll del body cuando el carrito está abierto
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [isCartOpen, closeCart]);

    const handleCheckout = () => {
        closeCart();
        // TODO: Navegar a página de checkout real
        navigate('/contacto'); // Por ahora redirige a contacto para "pedir"
    };

    return (
        <>
            {/* Overlay oscuro */}
            <div
                className={`cart-overlay ${isCartOpen ? 'is-visible' : ''}`}
                aria-hidden="true"
            />

            {/* Panel lateral */}
            <div
                className={`cart-drawer ${isCartOpen ? 'is-open' : ''}`}
                ref={drawerRef}
                role="dialog"
                aria-label="Carrito de compras"
            >
                <div className="cart-drawer-header">
                    <h2>Tu Carrito ({cartItems.length})</h2>
                    <button
                        className="cart-close-btn"
                        onClick={closeCart}
                        aria-label="Cerrar carrito"
                    >
                        ✕
                    </button>
                </div>

                <div className="cart-drawer-body">
                    {cartItems.length === 0 ? (
                        <div className="cart-empty-state">
                            <span style={{ fontSize: '3rem' }}>🛍️</span>
                            <p>Tu carrito está vacío</p>
                            <button
                                className="btn-primary"
                                onClick={() => {
                                    closeCart();
                                    navigate('/productos');
                                }}
                            >
                                Ver productos
                            </button>
                        </div>
                    ) : (
                        <ul className="cart-items-list">
                            {cartItems.map((item) => (
                                <li key={item.cartItemId} className="cart-item">
                                    <div className="cart-item-image">
                                        {/* Placeholder si no hay imagen */}
                                        {item.images && item.images[0] ? (
                                            <img src={item.images[0]} alt={item.name} />
                                        ) : (
                                            <div className="cart-item-placeholder">📷</div>
                                        )}
                                    </div>
                                    <div className="cart-item-details">
                                        <h3>{item.name}</h3>
                                        {item.selectedVariant && (
                                            <span className="cart-item-variant">
                                                Variante: {item.selectedVariant}
                                            </span>
                                        )}
                                        <div className="cart-item-price">
                                            ${item.price.toFixed(2)}
                                        </div>
                                        <div className="cart-item-controls">
                                            <div className="quantity-controls">
                                                <button
                                                    onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                                                    aria-label="Disminuir cantidad"
                                                >
                                                    -
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                                                    aria-label="Aumentar cantidad"
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <button
                                                className="cart-remove-btn"
                                                onClick={() => removeFromCart(item.cartItemId)}
                                                aria-label="Eliminar producto"
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {cartItems.length > 0 && (
                    <div className="cart-drawer-footer">
                        <div className="cart-summary-row">
                            <span>Subtotal</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="cart-summary-row">
                            <span>Envío</span>
                            <span>Calculado al final</span>
                        </div>
                        <div className="cart-total-row">
                            <span>Total</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <button
                            className="btn-checkout"
                            onClick={handleCheckout}
                        >
                            Finalizar Compra
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartDrawer;
