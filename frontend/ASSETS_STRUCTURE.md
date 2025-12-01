# Estructura de Assets - Artesanías Carmelita

## Organización de Imágenes

Este documento describe la estructura de carpetas para organizar todas las imágenes del proyecto de forma clara y escalable.

## Estructura de Directorios

```
frontend/src/assets/
├── logo/
│   ├── carmelita-logo.png          # Logo principal (TODO)
│   ├── carmelita-logo-white.png    # Logo en blanco para fondos oscuros (TODO)
│   └── favicon.ico                 # Favicon del sitio (TODO)
│
├── hero/
│   ├── hero-vestido-chiapaneco.jpg # Imagen principal del hero (TODO)
│   ├── hero-taller.jpg             # Foto del taller para hero alternativo (TODO)
│   └── hero-artesana.jpg           # Foto de la artesana (TODO)
│
├── products/
│   ├── vestidos/
│   │   ├── vestido-negro-flores.jpg           # Vestido negro con flores bordadas (TODO)
│   │   ├── vestido-blanco-bordado.jpg         # Vestido blanco con bordado fucsia (TODO)
│   │   ├── vestido-rojo-tradicional.jpg       # Vestido rojo lacandón (TODO)
│   │   ├── vestido-azul-turquesa.jpg          # Vestido turquesa (TODO)
│   │   └── vestido-amarillo-maiz.jpg          # Vestido amarillo maíz (TODO)
│   │
│   ├── munecas/
│   │   ├── muneca-grande-tradicional.jpg      # Muñeca grande con vestido típico (TODO)
│   │   ├── muneca-pequena-colores.jpg         # Muñeca pequeña multicolor (TODO)
│   │   ├── muneca-pareja.jpg                  # Par de muñecas (TODO)
│   │   └── muneca-bebe.jpg                    # Muñeca bebé artesanal (TODO)
│   │
│   ├── textiles/
│   │   ├── camino-mesa-rojo.jpg               # Camino de mesa rojo con patrones (TODO)
│   │   ├── camino-mesa-multicolor.jpg         # Camino de mesa multicolor (TODO)
│   │   ├── mantel-bordado.jpg                 # Mantel con bordado floral (TODO)
│   │   ├── servilletas-set.jpg                # Set de servilletas bordadas (TODO)
│   │   └── tapete-geometrico.jpg              # Tapete con diseño geométrico (TODO)
│   │
│   └── accesorios/
│       ├── bolsa-bordada-grande.jpg           # Bolsa grande con bordado (TODO)
│       ├── bolsa-pequena-colores.jpg          # Bolsa pequeña multicolor (TODO)
│       ├── monedero-textil.jpg                # Monedero de textil bordado (TODO)
│       ├── diadema-flores.jpg                 # Diadema con flores bordadas (TODO)
│       └── aretes-artesanales.jpg             # Aretes artesanales (TODO)
│
├── gallery/
│   ├── taller-1.jpg                # Vista general del taller (TODO)
│   ├── taller-2.jpg                # Detalle del área de trabajo (TODO)
│   ├── proceso-bordado-1.jpg       # Proceso de bordado paso 1 (TODO)
│   ├── proceso-bordado-2.jpg       # Proceso de bordado paso 2 (TODO)
│   ├── proceso-bordado-3.jpg       # Proceso de bordado paso 3 (TODO)
│   ├── artesana-trabajando.jpg     # Artesana en el proceso (TODO)
│   ├── hilos-colores.jpg           # Hilos de colores organizados (TODO)
│   ├── detalle-bordado-1.jpg       # Close-up de bordado floral (TODO)
│   ├── detalle-bordado-2.jpg       # Close-up de bordado geométrico (TODO)
│   └── tienda-fachada.jpg          # Fachada de la tienda física (TODO)
│
├── icons/
│   ├── vestido-icon.svg            # Ícono de vestido (TODO)
│   ├── muneca-icon.svg             # Ícono de muñeca (TODO)
│   ├── textil-icon.svg             # Ícono de textil (TODO)
│   ├── telar-icon.svg              # Ícono de telar (TODO)
│   ├── aguja-hilo-icon.svg         # Ícono de aguja e hilo (TODO)
│   ├── flor-chiapaneca-icon.svg    # Ícono de flor chiapaneca (TODO)
│   └── corazon-bordado-icon.svg    # Ícono de corazón bordado (TODO)
│
└── patterns/
    ├── textile-pattern-placeholder.jpg  # Patrón textil existente
    ├── pattern-flores.jpg               # Patrón de flores chiapanecas (TODO)
    ├── pattern-geometrico.jpg           # Patrón geométrico tradicional (TODO)
    └── pattern-manta.jpg                # Textura de manta (TODO)
```

## Convenciones de Nombres

### Formato General
```
[categoria]-[descripcion]-[variante].extension
```

**Ejemplos:**
- `vestido-negro-flores.jpg`
- `muneca-grande-tradicional.jpg`
- `camino-mesa-rojo.jpg`

### Reglas
1. **Todo en minúsculas**
2. **Usar guiones** (-) para separar palabras
3. **Sin espacios ni caracteres especiales**
4. **Nombres descriptivos** que indiquen claramente el contenido
5. **Incluir variante** cuando sea relevante (color, tamaño, estilo)

## Tamaños Recomendados

### Imágenes de Productos
- **Principal**: 800x800px (cuadrada)
- **Thumbnail**: 400x400px
- **Galería**: 1200x1200px
- **Formato**: JPG (calidad 85%)

### Hero/Banners
- **Desktop**: 1920x800px
- **Tablet**: 1200x600px
- **Mobile**: 800x600px
- **Formato**: JPG (calidad 90%)

### Logos
- **Principal**: SVG (escalable) o PNG 512x512px
- **Favicon**: 32x32px, 64x64px, 128x128px
- **Formato**: SVG preferido, PNG con transparencia

### Galería
- **Landscape**: 1200x800px
- **Portrait**: 800x1200px
- **Square**: 1000x1000px
- **Formato**: JPG (calidad 85%)

### Íconos
- **Formato**: SVG (preferido)
- **Alternativa**: PNG 128x128px con transparencia

## Optimización

### Antes de Subir
1. **Comprimir** imágenes con herramientas como TinyPNG o ImageOptim
2. **Redimensionar** a los tamaños recomendados
3. **Convertir** a WebP cuando sea posible (mejor compresión)
4. **Eliminar** metadatos EXIF innecesarios

### Lazy Loading
Todas las imágenes deben usar lazy loading excepto las del hero:
```jsx
<img src="..." alt="..." loading="lazy" />
```

## Uso en Componentes

### Importar Imágenes
```jsx
// Forma recomendada (Vite optimiza automáticamente)
import vestidoNegro from '@/assets/products/vestidos/vestido-negro-flores.jpg';

// Uso
<img src={vestidoNegro} alt="Vestido negro con flores bordadas" />
```

### Imágenes Dinámicas
```jsx
// Para imágenes que cambian dinámicamente
const imagePath = `/src/assets/products/${categoria}/${nombreArchivo}.jpg`;
<img src={imagePath} alt={descripcion} />
```

## Próximos Pasos

1. **Crear carpetas físicas** en `frontend/src/assets/` según esta estructura
2. **Recopilar imágenes** de productos reales
3. **Optimizar** todas las imágenes antes de agregarlas
4. **Actualizar imports** en componentes existentes
5. **Reemplazar placeholders** con imágenes reales

## Notas

- Todos los archivos marcados con `(TODO)` son placeholders
- Mantener esta estructura al agregar nuevos productos
- Considerar crear subcarpetas adicionales si una categoría crece mucho
- Documentar cualquier cambio en esta estructura
