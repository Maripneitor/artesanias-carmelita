// frontend/src/components/cart/CartSummary.jsx
import React, { useState } from 'react';

/**
 * Widget de carrito/resumen de compra
 * Basado en diseño de Uiverse (zanina-yassine)
 * Adaptado para productos artesanales de Artesanías Carmelita
 * 
 * @param {array} items - Productos en el carrito
 * @param {number} subtotal - Subtotal de la compra
 * @param {number} discount - Descuento aplicado
 * @param {number} shipping - Costo de envío
 */
const CartSummary = ({
    items = [],
    subtotal = 0,
    discount = 0,
    shipping = 0
}) => {
    const [couponCode, setCouponCode] = useState('');
    const [quantities, setQuantities] = useState(
        items.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity || 1 }), {})
    );

    const handleQuantityChange = (itemId, delta) => {
        setQuantities(prev => ({
            ...prev,
            [itemId]: Math.max(1, (prev[itemId] || 1) + delta)
        }));
    };

    const handleApplyCoupon = (e) => {
        e.preventDefault();
        // TODO: Implementar lógica de cupones
        console.log('Aplicar cupón:', couponCode);
    };

    const handleCheckout = () => {
        // TODO: Implementar lógica de checkout
        console.log('Proceder al checkout');
    };

    const total = subtotal - discount + shipping;

    // Datos de ejemplo si no hay items
    const displayItems = items.length > 0 ? items : [
        {
            id: 1,
            name: 'Vestido Chiapaneco',
            details: ['Talla M', 'Bordado floral'],
            price: 899.00,
            quantity: 1
        }
    ];

    return (
        <div className="cart-summary-master-container">
            <div className="cart-summary-card cart-summary-cart">
                <label className="cart-summary-title">Tu carrito</label>
                <div className="cart-summary-products">
                    {displayItems.map((item) => (
                        <div key={item.id} className="cart-summary-product">
                            <svg
                                fill="none"
                                viewBox="0 0 60 60"
                                height="60"
                                width="60"
                                xmlns="http://www.w3.org/2000/svg"
                                className="cart-summary-product-icon"
                            >
                                <rect fill="#FFF6EE" rx="8.25" height="60" width="60"></rect>
                                <path
                                    stroke="#d90f72"
                                    strokeWidth="2.25"
                                    fill="#FFB672"
                                    d="M30 15 L25 20 L20 25 L20 40 L40 40 L40 25 L35 20 Z"
                                ></path>
                            </svg>
                            <div>
                                <span>{item.name}</span>
                                {item.details && item.details.map((detail, idx) => (
                                    <p key={idx}>{detail}</p>
                                ))}
                            </div>
                            <div className="cart-summary-quantity">
                                <button onClick={() => handleQuantityChange(item.id, -1)}>
                                    <svg
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        height="14"
                                        width="14"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2.5"
                                            stroke="#47484b"
                                            d="M20 12L4 12"
                                        ></path>
                                    </svg>
                                </button>
                                <label>{quantities[item.id] || item.quantity || 1}</label>
                                <button onClick={() => handleQuantityChange(item.id, 1)}>
                                    <svg
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        height="14"
                                        width="14"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2.5"
                                            stroke="#47484b"
                                            d="M12 4V20M20 12H4"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <label className="cart-summary-price cart-summary-small">
                                ${item.price.toFixed(2)}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            <div className="cart-summary-card cart-summary-coupons">
                <label className="cart-summary-title">Aplicar cupones</label>
                <form className="cart-summary-form" onSubmit={handleApplyCoupon}>
                    <input
                        type="text"
                        placeholder="Ingresa tu cupón aquí"
                        className="cart-summary-input-field"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <button type="submit">Aplicar</button>
                </form>
            </div>

            <div className="cart-summary-card cart-summary-checkout">
                <label className="cart-summary-title">Resumen</label>
                <div className="cart-summary-details">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                    <span>Descuento con cupones:</span>
                    <span>${discount.toFixed(2)}</span>
                    <span>Envío:</span>
                    <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="cart-summary-checkout--footer">
                    <label className="cart-summary-price">
                        <sup>$</sup>{total.toFixed(2)}
                    </label>
                    <button
                        className="cart-summary-checkout-btn"
                        onClick={handleCheckout}
                    >
                        Finalizar compra
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartSummary;
