# Resumen Ejecutivo: Aplicación de Diseño Moderno (2026) a Artesanías Carmelita

Este documento resume las estrategias visuales extraídas de la auditoría de sitios web de primer nivel (Apple, Linear, Stripe, Vercel, Framer) y establece un plan de acción para elevar la interfaz de usuario (UI) y la experiencia de usuario (UX) de **Artesanías Carmelita**.

Nuestra meta es combinar la herencia y tradición de los productos artesanales con una presentación **premium, fluida y digitalmente avanzada**.

---

## 🚀 1. Estrategia de Animaciones y Efectos de Entrada

Las animaciones modernas no deben abrumar al usuario; su objetivo es guiar la mirada y dar sensación de alta calidad ("Performance-first").

- **Efectos "Staggered Fade-in" (Cascada):** Al entrar al catálogo de productos, las tarjetas de artesanías no deben aparecer de golpe, sino cargar con un ligero retraso de unos milisegundos entre cada una, flotando suavemente de abajo hacia arriba. Esto da una sensación de fluidez (estilo Stripe).
- **Animaciones "Scroll-driven":** Usar el desplazamiento de la página (scroll) para desencadenar sutiles efectos de aparición (Fade-in / Scale-up) en elementos de texto clave o imágenes hero de talleres (estilo Apple/Framer).
- **Micro-interacciones:** Los botones de "Consultar con el Taller" o "Ver Detalles" deben tener un cambio sutil pero dinámico al pasar el cursor (hover), como un suave brillo exterior (glow effect) o una leve elevación y expansión de sombra.

## 🧱 2. Estructura y Componentes Visuales

El diseño debe sentirse organizado, respirable y fácil de navegar, especialmente en dispositivos móviles.

- **Bento Grid Layouts:** Aplicar la estructura de cuadrícula irregular (bento box) para agrupaciones de información, como la sección "Sobre Nosotros" o "Destacados". Esto organiza espacios vacíos y fotos con diferentes formas de manera moderna y asimétrica.
- **Tarjetas Flotantes (Cards):** Implementar tarjetas con `border-radius` amplio (suaves en las esquinas), fondos casi imperceptibles o translúcidos ("Glassmorphism"), y finos bordes divisorios de un píxel. Esto separa la información sin cajas opresivas.
- **Sticky Headers/Navigation:** Menús de navegación tipo "píldora" flotante en la parte inferior o superior (estilo Framer), garantizando que las acciones principales, como el botón de contacto, estén siempre a un toque de distancia, sobre todo en móvil.

## 🎨 3. Tipografía, Colores y Contraste

Una artesanía resalta mejor cuando el contenedor no compite visualmente con el producto, pero el texto en sí transmite elegancia y claridad.

- **Paleta de Colores "Nature Distilled":** Para Artesanías Carmelita, evadir los colores web genéricos. Usar fondos limpios (blancos crudos, alabastro o modos muy oscuros y elegantes como carbón o azul media noche) y acentos terrosos modernos (terracota vibrante, ocre sofisticado o esmeralda).
- **Contraste y Espaciado (Whitespace):** Usar abundante espacio en blanco alrededor de las imágenes de las artesanías. Esto les otorga un estado "Premium", similar a cómo Apple exhibe el Mac.
- **Maximalismo Tipográfico vs. Lectura (Sans-Serif modernas):**
  - Usar fuentes expresivas de gran tamaño para los títulos de sección (p.ej., el nombre de la colección).
  - Usar fuentes neutrales, híper legibles (ej: Inter, Roboto) para detalles del producto, dimensiones o descripciones del taller. Alto contraste entre el texto secundario y primario.

---

## 📋 Próximos Pasos (Implementación Técnica)

1. **Revisar `global.css`:** Actualizar variables de CSS para refinamiento de sombras (`box-shadow`), gradientes sutiles y bordes pulidos.
2. **Re-diseñar `Header.jsx`:** Aplicar un diseño estilo píldora/flotante, integrando transiciones CSS suaves al hacer scroll.
3. **Refactorizar Tarjetas de Producto (`Home.jsx` / `App.jsx`):** Pasar del diseño actual a "Bento-cards" o tarjetas expansibles con efecto _Scale-in_. Introducir imágenes _avif/webp_ y optimizar para que el renderizado de la animación sea impecable a 60fps.
