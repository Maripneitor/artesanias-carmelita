// frontend/src/data/products.js

/**
 * Catálogo exclusivo de 3 piezas refinadas para la vista de detalle.
 */

const rawProducts = [
    {
        id: 1,
        slug: 'traje-chiapaneca-blanco',
        name: 'Traje Chiapaneca Blanco',
        shortDescription: 'Traje regional de gala bordado a mano sobre tul blanco de alta calidad.',
        story: 'El traje de chiapaneca es la joya de la corona del folklore chiapaneco. Representa la elegancia y la historia de nuestra tierra. Esta versión en blanco es especialmente buscada por su distinción, permitiendo que cada flor bordada a mano con artisela resalte con una vibrante explosión de colores tradicionales.',
        technique: 'Bordado en tul con artisela multicolor',
        category: 'Vestimenta',
        price: 4500.00,
        isPremium: true,
        luzVerde: true,
        images: [
            { type: 'model', url: '/products/traje-chiapaneca-blanco-Modelo - Editado.webp', label: 'Ver en Modelo' },
            { type: 'studio', url: '/products/traje-chiapaneca-blanco-Fondo blanco.webp', label: 'Ver Detalle' }
        ],
        dimensions: {
            alto: 'A medida',
            ancho: 'A medida'
        },
        materials: ['Tul de algodón', 'Hilo de artisela'],
        careInstructions: 'Profesional: Solo lavado en seco. Tintorería especializada.',
        stock: 2,
        tags: ['traje chiapaneca', 'gala', 'blanco', 'tradicional']
    },
    {
        id: 2,
        slug: 'falda-gala-extendida',
        name: 'Falda de Gala Extendida',
        shortDescription: 'Falda amplia de gala con bordados florales en técnica de vuelo.',
        story: 'Diseñada para el movimiento y la gala. La amplitud extendida de esta falda permite apreciar el trabajo de semanas de bordado manual. Utilizada en los festivales más importantes del estado, es una pieza que simboliza el orgullo y la alegría de nuestras celebraciones.',
        technique: 'Bordado manual de alto relieve',
        category: 'Vestimenta',
        price: 3200.00,
        isPremium: true,
        luzVerde: true,
        images: [
            { type: 'model', url: '/products/falda-gala-extendida-Modelo - Editado.webp', label: 'Ver en Modelo' },
            { type: 'studio', url: '/products/falda-gala-extendida-Fondo blanco.webp', label: 'Ver Detalle' }
        ],

        dimensions: {

            alto: '105 cm',
            ancho: 'Cintura ajustable'
        },
        materials: ['Satín fino', 'Tul bordado'],
        careInstructions: 'Limpieza profesional únicamente. No planchar directamente el bordado.',
        stock: 1,
        tags: ['falda', 'chiapas', 'gala', 'vuelo']
    },
    {
        id: 3,
        slug: 'blusa-chiapaneca-bordada',
        name: 'Blusa Chiapaneca Bordada',
        shortDescription: 'Blusa tradicional de tul bordada con patrones florales clásicos.',
        story: 'La pieza que completa la belleza de la mujer chiapaneca. Esta blusa combina la delicadeza del tul con la fuerza del bordado tradicional. Es una prenda ligera, fresca y profundamente artesanal que puede usarse tanto en traje completo como pieza de acento en vestimenta contemporánea.',
        technique: 'Bordado a mano en tul',
        category: 'Vestimenta',
        price: 1350.00,
        isPremium: false,
        luzVerde: true,
        images: [
            { type: 'model', url: '/products/blusa-chiapaneca-bordada-Modelo.webp', label: 'Ver en Modelo' },
            { type: 'studio', url: '/products/blusa-chiapaneca-bordada-Fondo blanco.webp', label: 'Ver Detalle' }
        ],

        dimensions: {

            alto: '65 cm',
            ancho: '55 cm'
        },
        materials: ['Tul refinado', 'Artisela soplada'],
        careInstructions: 'Lavado a mano delicado con jabón suave. Secar a la sombra.',
        stock: 4,
        tags: ['blusa', 'artesanal', 'bordado', 'chiapas']
    }
];

// Strict .webp validation: Only show products with both model and studio version in .webp
export const products = rawProducts.filter(p => {
    const hasModelWebp = p.images?.some(img => img.type === 'model' && img.url.endsWith('.webp'));
    const hasStudioWebp = p.images?.some(img => img.type === 'studio' && img.url.endsWith('.webp'));
    return hasModelWebp && hasStudioWebp;
});


export const getProductBySlug = (slug) => {

    return products.find(product => product.slug === slug);
};

export const getProductById = (id) => {
    return products.find(product => product.id === id);
};

export const getRelatedProducts = (currentProduct, limit = 3) => {
    return products
        .filter(p => p.id !== currentProduct.id)
        .slice(0, limit);
};

