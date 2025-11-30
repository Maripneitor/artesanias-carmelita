// frontend/src/routes/AppRouter.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Products from '../pages/Products.jsx';
import About from '../pages/About.jsx';
import Gallery from '../pages/Gallery.jsx';
import Location from '../pages/Location.jsx';
import Contact from '../pages/Contact.jsx';

// Definición de rutas principales
const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/sobre-mi" element={<About />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/ubicacion" element={<Location />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="*" element={<Home />} />
        </Routes>
    );
};

export default AppRouter;
