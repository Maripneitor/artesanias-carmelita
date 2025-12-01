// frontend/src/data/products.js

/**
 * Modelo de datos de productos para Artesanías Carmelita
 * 
 * Estructura:
 * - id: Identificador único (number/string)
 * - slug: URL amigable (string)
 * - name: Nombre del producto (string)
 * - shortDescription: Descripción corta para tarjetas (string)
 * - story: Historia emocional del producto (string)
 * - artisan: Nombre del artesano o colectivo (string)
 * - technique: Técnica de fabricación (string)
 * - category: Categoría del producto (string)
 * - price: Precio en MXN (number)
 * - isPremium: Si es un producto destacado/premium (boolean)
 * - isOnSale: Si está en oferta (boolean)
 * - discount: Porcentaje de descuento (number, opcional)
 * - images: Array de rutas de imágenes (array of strings)
 * - contextImages: Imágenes de contexto/uso (array of strings, opcional)
 * - videoUrl: URL de video (string, opcional)
 * - dimensions: Dimensiones del producto (object)
 * - materials: Lista de materiales (array of strings)
 * - careInstructions: Instrucciones de cuidado (string)
 * - stock: Cantidad disponible (number)
 * - tags: Etiquetas para búsqueda (array of strings)
 */

export const products = [
    {
        id: 1,
        slug: 'vestido-chiapaneco-bordado-negro',
        name: 'Vestido Chiapaneco Bordado a Mano - Negro',
        shortDescription: 'Elegante vestido negro con bordado floral multicolor tradicional de Chiapa de Corzo.',
        story: 'Este vestido captura la esencia de la noche chiapaneca iluminada por la alegría de sus flores. Cada puntada ha sido realizada con paciencia y dedicación, siguiendo patrones transmitidos de generación en generación. Al usarlo, llevas contigo no solo una prenda, sino una historia de tradición y orgullo cultural.',
        artisan: 'Familia Hernández',
        technique: 'Bordado a mano con hilo de seda',
        category: 'Vestimenta',
        price: 1299.00,
        isPremium: true,
        isOnSale: false,
        images: [
            // TODO: Reemplazar con rutas reales cuando existan
            '/src/assets/products/vestidos/vestido-negro-flores.jpg',
            '/src/assets/products/vestidos/vestido-negro-detalle.jpg'
        ],
        contextImages: [],
        dimensions: {
            alto: '110 cm',
            ancho: 'Ajustable',
            profundidad: 'N/A'
        },
        materials: ['Tul de algodón', 'Hilo de seda', 'Listón satinado'],
        careInstructions: 'Lavar a mano con agua fría y jabón neutro. No exprimir. Secar a la sombra. Planchar al revés a temperatura baja.',
        stock: 5,
        tags: ['vestido', 'bordado', 'chiapas', 'negro', 'gala', 'tradicional']
    },
    {
        id: 2,
        slug: 'muneca-artesanal-maria',
        name: 'Muñeca Artesanal "María" Grande',
        shortDescription: 'Muñeca de trapo tradicional con vestido colorido y listones.',
        story: 'Las muñecas "María" son un símbolo de la infancia mexicana. Esta pieza en particular, con su vestido lleno de colores vibrantes, representa la alegría y la inocencia. Es perfecta para decorar un rincón especial o para regalar un pedacito de corazón mexicano.',
        artisan: 'Colectivo Mujeres Tejedoras',
        technique: 'Costura y bordado a mano',
        category: 'Muñecas',
        price: 450.00,
        isPremium: false,
        isOnSale: true,
        discount: 10,
        images: [
            '/src/assets/products/munecas/muneca-grande-tradicional.jpg'
        ],
        dimensions: {
            alto: '35 cm',
            ancho: '15 cm',
            profundidad: '8 cm'
        },
        materials: ['Tela de algodón', 'Estambre', 'Listones'],
        careInstructions: 'Limpiar con un paño húmedo. No sumergir en agua.',
        stock: 12,
        tags: ['muñeca', 'juguete', 'tradicional', 'regalo', 'niños']
    },
    {
        id: 3,
        slug: 'camino-mesa-rojo-lacandon',
        name: 'Camino de Mesa Rojo Lacandón',
        shortDescription: 'Textil para mesa con patrones geométricos en rojo intenso.',
        story: 'Inspirado en los atardeceres de la selva lacandona, este camino de mesa aporta calidez y carácter a cualquier hogar. Los patrones geométricos representan la conexión con la tierra y la naturaleza, tejidos en telar de cintura con técnicas ancestrales.',
        artisan: 'Juana López',
        technique: 'Telar de cintura',
        category: 'Textiles',
        price: 850.00,
        isPremium: true,
        isOnSale: false,
        images: [
            '/src/assets/products/textiles/camino-mesa-rojo.jpg'
        ],
        dimensions: {
            alto: '200 cm',
            ancho: '40 cm',
            profundidad: 'N/A'
        },
        materials: ['Algodón 100%', 'Tintes naturales'],
        careInstructions: 'Lavar a mano o en ciclo delicado. No usar blanqueador.',
        stock: 3,
        tags: ['textil', 'decoración', 'mesa', 'rojo', 'telar']
    },
    {
        id: 4,
        slug: 'blusa-bordada-turquesa',
        name: 'Blusa Bordada Turquesa',
        shortDescription: 'Blusa fresca de manta con bordado floral en cuello y mangas.',
        story: 'La frescura de la manta se une a la elegancia del bordado en esta blusa ideal para el día a día. El color turquesa evoca las aguas de las cascadas de Agua Azul, trayendo frescura y vitalidad a quien la porta.',
        artisan: 'Taller Carmelita',
        technique: 'Bordado a mano',
        category: 'Vestimenta',
        price: 550.00,
        isPremium: false,
        isOnSale: false,
        images: [
            '/src/assets/products/vestidos/vestido-azul-turquesa.jpg' // Usando placeholder existente
        ],
        dimensions: {
            alto: '65 cm',
            ancho: '50 cm (Talla M)',
            profundidad: 'N/A'
        },
        materials: ['Manta de algodón', 'Hilo de algodón'],
        careInstructions: 'Lavar a máquina en ciclo suave con colores similares.',
        stock: 8,
        tags: ['blusa', 'ropa', 'mujer', 'turquesa', 'casual']
    },
    {
        id: 5,
        slug: 'bolsa-bordada-flores',
        name: 'Bolsa Tote Bordada',
        shortDescription: 'Bolsa amplia y resistente con diseño floral completo.',
        story: 'Lleva la primavera contigo todo el año. Esta bolsa no solo es práctica y espaciosa, sino que es una obra de arte portátil. Perfecta para el mercado, la playa o un día de paseo, mostrando siempre el orgullo por lo hecho a mano.',
        artisan: 'Artesanos de San Juan',
        technique: 'Bordado a máquina artesanal',
        category: 'Accesorios',
        price: 380.00,
        isPremium: false,
        isOnSale: false,
        images: [
            '/src/assets/products/accesorios/bolsa-bordada-grande.jpg'
        ],
        dimensions: {
            alto: '40 cm',
            ancho: '45 cm',
            profundidad: '10 cm'
        },
        materials: ['Lona de algodón', 'Hilo sintético'],
        careInstructions: 'Limpiar manchas con paño húmedo.',
        stock: 15,
        tags: ['bolsa', 'accesorio', 'moda', 'viaje']
    }
];

export const getProductBySlug = (slug) => {
    return products.find(product => product.slug === slug);
};

export const getProductById = (id) => {
    return products.find(product => product.id === id);
};

export const getRelatedProducts = (currentProduct, limit = 3) => {
    return products
        .filter(p => p.id !== currentProduct.id && p.category === currentProduct.category)
        .slice(0, limit);
};
