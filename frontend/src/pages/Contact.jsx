// frontend/src/pages/Contact.jsx
import React, { useState } from 'react';
import SocialButtons from '../components/common/SocialButtons.jsx';

// Formulario de contacto con campos coloridos al focus
const Contact = () => {
    const [form, setForm] = useState({
        nombre: '',
        contacto: '',
        mensaje: '',
    });

    const [enviado, setEnviado] = useState(false);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: conectar con backend / servicio de correo
        setEnviado(true);
        setTimeout(() => setEnviado(false), 3000);
    };

    return (
        <div className="page page-contact">
            <section
                className="section contact-section"
                aria-labelledby="contact-title"
            >
                <div className="contact-info">
                    <h1 id="contact-title">Contacto</h1>
                    <p>
                        Si tienes dudas sobre tallas, colores o tiempos de elaboración,
                        escríbeme. Será un gusto atenderte.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, marginTop: '1.5rem' }}>
                        <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ fontSize: '1.2rem' }}>💬</span>
                            <div>
                                <strong>WhatsApp:</strong> [DATO_POR_DEFINIR]
                            </div>
                        </li>
                        <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ fontSize: '1.2rem' }}>📞</span>
                            <div>
                                <strong>Teléfono:</strong> [DATO_POR_DEFINIR]
                            </div>
                        </li>
                        <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ fontSize: '1.2rem' }}>✉️</span>
                            <div>
                                <strong>Correo:</strong> [DATO_POR_DEFINIR]
                            </div>
                        </li>
                    </ul>

                    {/* Redes sociales con SocialButtons */}
                    <div style={{ marginTop: '2rem' }}>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Síguenos en redes sociales</h3>
                        <SocialButtons variant="contact" />
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                    <h2>Envíame un mensaje</h2>

                    <label>
                        Nombre
                        <input
                            type="text"
                            name="nombre"
                            placeholder="¿Cómo te llamas?"
                            value={form.nombre}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Correo o teléfono
                        <input
                            type="text"
                            name="contacto"
                            placeholder="Tu correo electrónico o número de WhatsApp"
                            value={form.contacto}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Mensaje
                        <textarea
                            name="mensaje"
                            rows="4"
                            placeholder="Cuéntame qué pieza te interesa o en qué puedo ayudarte"
                            value={form.mensaje}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <button type="submit" className="btn-primary btn-embroidered">
                        Enviar mensaje
                    </button>

                    {enviado && (
                        <p className="contact-success" style={{
                            marginTop: '1rem',
                            padding: '0.75rem',
                            background: 'rgba(31, 183, 165, 0.1)',
                            borderRadius: '8px',
                            color: 'var(--color-secondary)',
                            textAlign: 'center'
                        }}>
                            ✓ ¡Gracias! Tu mensaje se ha registrado (versión demo).
                        </p>
                    )}
                </form>
            </section>
        </div>
    );
};

export default Contact;
