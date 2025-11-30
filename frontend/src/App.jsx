// frontend/src/App.jsx
import React from 'react';
import AppRouter from './routes/AppRouter.jsx';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import WhatsAppButton from './components/common/WhatsAppButton.jsx';

// Layout general de la app
const App = () => {
  return (
    <div className="app-root">
      <Header />
      <main className="app-main">
        <AppRouter />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
