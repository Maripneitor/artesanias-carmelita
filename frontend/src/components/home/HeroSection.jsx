import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getProductBySlug } from '../../data/products.js';

const TypewriterText = ({ text, delay = 30, onComplete }) => {
    const [displayedText, setDisplayedText] = useState('');
    
    useEffect(() => {
        let currentText = '';
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                currentText += text.charAt(i);
                setDisplayedText(currentText);
                i++;
            } else {
                clearInterval(timer);
                if (onComplete) onComplete();
            }
        }, delay);
        return () => {
            clearInterval(timer);
            setDisplayedText('');
        };
    }, [text, delay, onComplete]);

    return <span className="typewriter-cursor">{displayedText}</span>;
};


const HeroSection = () => {
    const navigate = useNavigate();
    const huipil = getProductBySlug('huipil-gala-seda');
    
    // States to control sequence
    const [showTitle, setShowTitle] = useState(false);
    const [showLead, setShowLead] = useState(false);
    const [showActions, setShowActions] = useState(false);

    // Memoized handlers to prevent typewriter reset loop
    const handleTitleComplete = React.useCallback(() => setShowTitle(true), []);
    const handleLeadComplete = React.useCallback(() => setShowLead(true), []);
    const handleActionsComplete = React.useCallback(() => setShowActions(true), []);

    const handleClick = () => {
        navigate('/productos');
    };



    return (
        <section className="hero" aria-labelledby="hero-title">
            <div className="hero-content">
                <span className="hero-kicker">
                    <TypewriterText 
                        text="Hecho a mano en Chiapas" 
                        onComplete={handleTitleComplete} 
                    />
                </span>

                <h1 id="hero-title">
                    {showTitle && (
                        <TypewriterText 
                            text="Artesanías auténticas de Chiapas" 
                            onComplete={handleLeadComplete}
                        />
                    )}
                </h1>

                <p className="hero-lead">
                    {showLead && (
                        <TypewriterText 
                            text="Vestidos, muñecas y textiles bordados a mano con los colores tradicionales de Chiapas, listos para darle vida a tu espacio." 
                            onComplete={handleActionsComplete}
                            delay={15}
                        />
                    )}
                </p>


                <div className={`hero-actions fade-in-up ${showActions ? 'visible' : 'hidden'}`}>
                    <button className="btn-primary" onClick={handleClick}>
                        Ver catálogo maestro
                    </button>
                    <button
                        className="btn-ghost"
                        type="button"
                        onClick={() => navigate('/sobre-mi')}
                    >
                        Conocer mi historia
                    </button>
                    <span className="hero-subnote">
                        Piezas únicas, hechas puntada a puntada en un taller familiar.
                    </span>
                </div>
            </div>

            <div className={`hero-image fade-in-right ${showActions ? 'visible' : 'hidden'}`}>
                <div className="hero-featured-piece">
                    <img 
                        src="/products/huipil-gala-modelo.webp" 
                        alt="Vestido Chiapaneco Gala" 
                        className="hero-main-visual"
                    />
                    <div className="piece-tag-home">
                        <div className="tag-info">
                            <span className="tag-category">Vestido Chiapaneco Gala</span>
                            <span className="tag-line">Pieza Maestra: {huipil?.name}</span>
                        </div>
                        <Link to={`/producto/${huipil?.slug}`} className="tag-link">
                            Ver detalle exclusivo →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default HeroSection;

