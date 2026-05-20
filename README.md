# La Dulce Mermeladas — Landing Page

Sitio one-page para una marca argentina de mermeladas artesanales.
Cinematográfico, editorial, mobile-first. Sin build step: HTML estático + Tailwind por CDN + JS vanilla.

## Estructura

```
LaDulceMermeladas/
├── index.html          # Toda la página (8 secciones)
├── styles.css          # Estilos custom sobre Tailwind
├── script.js           # Reveal-on-scroll, nav sticky, parallax suave
├── assets/
│   ├── images/         # ⚠ Colocar aquí hero.jpg y process.jpg
│   └── videos/         # Opcional: videos para reemplazar el hero
└── README.md
```

## Imágenes requeridas

Dejá estos archivos dentro de `assets/images/`:

| Archivo       | Qué va        |
|---------------|---------------|
| `hero.jpg`    | Foto 1 que pasaste — cuchara con mermelada de frutilla |
| `process.jpg` | Foto 2 que pasaste — olla de cobre con mermelada de berries |

Si querés usar otras, simplemente sobreescribilas (mismo nombre) o cambiá las rutas en `index.html`.

## Correr localmente

No necesita compilar. Cualquier servidor estático funciona:

```bash
# Opción A — Python
python -m http.server 5173

# Opción B — Node (npx, sin instalar nada)
npx --yes serve .

# Opción C — VS Code
# Instalá "Live Server" y abrí index.html con click derecho → Open with Live Server
```

Después abrí <http://localhost:5173> en el navegador.

## Secciones

1. **Hero** — Foto de fondo + headline editorial + métricas (12 sabores, 0 conservantes, etc.)
2. **Marquee** — Tira animada con los nombres de sabores
3. **Manifiesto** — Storytelling sobre lo artesanal y la familia fundadora
4. **Sabores** — Grid de 6 frascos (cards con gradientes que evocan el color de cada mermelada)
5. **Proceso** — Split a pantalla completa con la foto de la olla de cobre + 4 pasos
6. **Testimonios** — 3 voces (sommelier, cliente, suscriptora)
7. **Galería** — Mosaico mezclando fotos reales con tiles tipográficos
8. **CTA / Suscripción** — Formulario de newsletter en bloque rojo "jam"
9. **Footer** — Links, contacto, redes

## Tech / decisiones

- **Tailwind por CDN** con `tailwind.config` extendido (paleta `cream / parchment / clay / copper / jam / berry / ink` + fuentes `Fraunces` para serif editorial y `Inter` para UI).
- **Sin frameworks de animación pesados.** `IntersectionObserver` para los reveals + un parallax sutil en vanilla. Cumple `prefers-reduced-motion`.
- **Marquee CSS** puro (animation infinite).
- **A11y**: `selection:` custom, `focus:` visible en inputs, `prefers-reduced-motion` respetado, contraste alto en bloque `jam`.

## Personalizar

- **Colores de la marca** → `tailwind.config` dentro del `<script>` en `index.html`.
- **Copy** → texto inline en `index.html`. Está todo en español rioplatense.
- **Precios y sabores** → buscá `class="product-card"` en `index.html`.
- **Datos de contacto** → footer al final del HTML.

## Posibles next steps

- Reemplazar las cards de sabores por fotos reales de cada frasco.
- Sumar un video MP4 silencioso autoplay como fondo del hero (`<video>` en lugar del `<img>`).
- Conectar el form de newsletter a Mailchimp / ConvertKit.
- Sumar un carrito real (Snipcart / Tienda Nube embebido).
