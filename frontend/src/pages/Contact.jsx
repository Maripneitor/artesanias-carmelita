// frontend/src/pages/Contact.jsx
import React, { useState } from 'react';

// Formulario de contacto (por ahora solo frontend)
const Contact = () => {
    const [form, setForm] = useState({
        nombre: '',
        contacto: '',
        mensaje: ''
    });

    const [enviado, setEnviado] = useState(false);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: conectar con backend / servicio de correo en el futuro
        setEnviado(true);
    };

    return (
        <div className="page page-contact">
            <section className="section contact-section">
                <div className="contact-info">
                    <h1>Contacto</h1>
                    <p>
                        Si tienes dudas sobre tallas, colores o tiempos de elaboración,
                        escríbeme. Será un gusto atenderte.
                    </p>
                    <ul>
                        <li>WhatsApp: [DATO_POR_DEFINIR]</li>
                        <li>Teléfono: [DATO_POR_DEFINIR]</li>
                        <li>Correo: [DATO_POR_DEFINIR]</li>
                    </ul>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>
                        Nombre
                        <input
                            type="text"
                            name="nombre"
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
                            value={form.mensaje}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <button type="submit" className="btn-primary">
                        Enviar mensaje
                    </button>

                    {enviado && (
                        <p className="contact-success">
                            ¡Gracias! Tu mensaje se ha registrado (versión demo).
                        </p>
                    )}
                </form>
            </section>
        </div>
    );
};

export default Contact;
