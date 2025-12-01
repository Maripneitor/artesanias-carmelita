// frontend/src/App.jsx
import React from 'react';
import AppRouter from './routes/AppRouter.jsx';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import WhatsAppButton from './components/common/WhatsAppButton.jsx';
import CartDrawer from './components/cart/CartDrawer.jsx';
import { CartProvider } from './context/CartContext.jsx';

// Layout general de la app
const App = () => {
  return (
    <CartProvider>
      <div className="app-root">
        <Header />
        <CartDrawer />
        <main className="app-main">
          <AppRouter />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </CartProvider>
  );
};

export default App;
