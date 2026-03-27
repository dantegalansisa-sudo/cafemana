# CLAUDE.md — CAFÉ MANÁ
## NEXIX Tech Studio · Proyecto Web Completo

---

## INSTRUCCIÓN INICIAL OBLIGATORIA

```
Use this skill https://github.com/Leonxlnx/taste-skill

Lee este CLAUDE.md completo y construye el proyecto sección por sección.
Detente después del Hero y muestra el resultado para aprobación.
```

---

## 1. DATOS DEL CLIENTE

```
Empresa:     Café Maná
Sub-marca:   Café Tamara y Manzur · AGP
CEO:         Edward Santana (empresario, San José de Ocoa, RD)
Origen:      San José de Ocoa, República Dominicana
Concepto:    Café artesanal de montaña — campo, frescura, naturaleza
WhatsApp:    [PENDIENTE — usar placeholder #]
Instagram:   [PENDIENTE]
Estado:      Marca nueva — web de presentación y posicionamiento
```

---

## 2. CONCEPTO VISUAL — "RAÍCES DE OCOA"

Café Maná nace entre las montañas de San José de Ocoa.
Esta web vende un sentimiento: la frescura del campo dominicano,
el aroma del café recién cosechado, la vida del caficultor que madruga
para que la taza del cliente sea perfecta.

**Mood:** Cálido, orgánico, auténtico, artesanal. Como entrar a una finca cafetalera.

**NO es una web oscura.** El alma de esta marca es la luz del amanecer
entre los cafetales — cremas, tierras cálidas, verdes naturales, dorados.

**Referencia de estilo:** Royal Coffee website — elegante, con foto de campo
de fondo en el hero, sobre de café en primer plano, navbar centrado con logo.

---

## 3. PALETA DE COLORES — CÁLIDA Y NATURAL

```css
:root {
  /* Fondos — NUNCA fondos muy oscuros */
  --color-bg:            #FAF6F0;   /* crema cálida — fondo principal */
  --color-bg-2:          #F3EBE0;   /* crema más oscura — secciones alternas */
  --color-bg-dark:       #3D2314;   /* marrón café profundo — solo para footer y overlays */
  --color-surface:       #FFFFFF;   /* blanco puro para cards */

  /* Principales */
  --color-primary:       #6B3A1F;   /* café tostado oscuro */
  --color-primary-rgb:   107, 58, 31;
  --color-primary-light: #9B6240;   /* café medio */
  --color-secondary:     #3A6B2A;   /* verde cafetal */
  --color-secondary-rgb: 58, 107, 42;
  --color-accent:        #C8960C;   /* dorado cosecha */
  --color-accent-rgb:    200, 150, 12;

  /* Texto */
  --color-text:          #2C1810;   /* marrón muy oscuro (no negro puro) */
  --color-text-mid:      #5C3D2E;   /* marrón medio */
  --color-text-muted:    #8B6B55;   /* marrón suave */
  --color-text-light:    #FAF6F0;   /* crema para texto sobre fondos oscuros */

  /* Bordes y detalles */
  --color-border:        rgba(107, 58, 31, 0.15);
  --color-border-warm:   rgba(200, 150, 12, 0.25);
  --color-overlay-hero:  rgba(44, 24, 10, 0.45); /* overlay SUAVE sobre hero */

  /* WhatsApp */
  --whatsapp-green:      #25D366;

  /* Sombras cálidas */
  --shadow-card:     0 8px 32px rgba(107, 58, 31, 0.10);
  --shadow-hover:    0 16px 48px rgba(107, 58, 31, 0.20);
  --shadow-gold:     0 8px 24px rgba(200, 150, 12, 0.30);

  /* Spacing */
  --section-padding: 120px 0;
  --container-max:   1320px;
  --container-pad:   0 64px;
  --radius-card:     20px;
  --radius-btn:      50px;

  /* Transiciones */
  --transition-fast: 0.2s ease;
  --transition-base: 0.35s ease;
  --transition-slow: 0.6s cubic-bezier(0.76, 0, 0.24, 1);
}
```

---

## 4. TIPOGRAFÍA

```html
<!-- En index.html <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
```

```css
--font-display: 'Playfair Display', Georgia, serif;  /* titulares elegantes */
--font-body:    'Lato', sans-serif;                  /* cuerpo legible */

/* Tamaños */
--text-hero:  clamp(3rem, 6.5vw, 6rem);
--text-h1:    clamp(2.2rem, 4.5vw, 4rem);
--text-h2:    clamp(1.7rem, 3vw, 2.8rem);
--text-h3:    clamp(1.1rem, 2vw, 1.4rem);
--text-body:  1rem;
--text-sm:    0.875rem;
```

---

## 5. ESTRUCTURA DE ARCHIVOS

```
cafe-mana/
├── public/
│   └── images/
│       ├── logo-mana.png           ← logo oficial (ya existe en la bolsa)
│       ├── bolsa-cafe.png          ← foto del producto (ya tienes)
│       ├── hero-campo.jpg          ← FOTO GEMINI #1
│       ├── campo-cosecha.jpg       ← FOTO GEMINI #2
│       ├── taza-cafe-01.jpg        ← FOTO GEMINI #3
│       ├── taza-cafe-02.jpg        ← FOTO GEMINI #4
│       ├── proceso-01.jpg          ← FOTO GEMINI #5
│       ├── proceso-02.jpg          ← FOTO GEMINI #6
│       ├── proceso-03.jpg          ← FOTO GEMINI #7
│       ├── edward-santana.jpg      ← FOTO CEO (ya tienes)
│       ├── cliente-01.jpg          ← FOTO cliente con bolsa
│       ├── cliente-02.jpg          ← FOTO cliente con bolsa
│       ├── cliente-03.jpg          ← FOTO cliente con bolsa
│       └── video-testimonio.mp4    ← VIDEO testimonios clientes
├── src/
│   ├── components/
│   │   ├── CustomCursor.tsx
│   │   ├── RevealText.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── ScrollProgress.tsx
│   │   ├── WhatsAppButton.tsx
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   └── useParallax.ts
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProductSection.tsx
│   │   ├── ProcesoSection.tsx
│   │   ├── TestimoniosSection.tsx
│   │   ├── FounderSection.tsx
│   │   └── ContactSection.tsx
│   ├── utils/
│   │   └── easings.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
```

---

## 6. LISTA EXACTA DE FOTOS PARA GEMINI

Estas son las **13 fotos** que necesitas generar. Úsalas como prompts literales en Gemini:

```
FOTO GEMINI #1 — hero-campo.jpg
Prompt: "Aerial view of lush green coffee plantation on mountain slopes
in the Dominican Republic, golden morning light, misty mountains in
background, San José de Ocoa, cinematic photography, warm sunrise tones,
8k resolution, no people"

FOTO GEMINI #2 — campo-cosecha.jpg
Prompt: "Close-up of ripe red coffee cherries on branch, Dominican
mountain coffee farm, warm morning light filtering through leaves,
bokeh background of green coffee plants, artisan coffee photography"

FOTO GEMINI #3 — taza-cafe-01.jpg
Prompt: "Elegant white ceramic cup of black coffee with perfect crema
on rustic wooden table, steam rising, coffee beans scattered around,
warm natural light, top-down photography, lifestyle coffee photography"

FOTO GEMINI #4 — taza-cafe-02.jpg
Prompt: "Barista hands holding white coffee mug, latte art heart on
top, outdoor wooden table on mountain farm terrace, Caribbean morning
light, lifestyle photography, warm tones"

FOTO GEMINI #5 — proceso-01.jpg
Prompt: "Coffee farmer's hands carefully picking red coffee cherries
on a lush green Dominican coffee plantation, warm golden hour light,
close-up macro photography, authentic farming lifestyle"

FOTO GEMINI #6 — proceso-02.jpg
Prompt: "Freshly harvested coffee cherries in a rustic woven basket
on wooden table, bright natural light, Dominican mountain coffee farm
setting, warm earthy tones, food photography"

FOTO GEMINI #7 — proceso-03.jpg
Prompt: "Artisan roasted coffee beans on wooden tray in natural light,
rich brown tones, steam or smoke wisps, close-up macro photography,
warm orange and brown color palette, premium coffee branding"

CLIENTE #1, #2, #3 — fotos que ya tienes con la bolsa de Café Maná
CEO — foto de Edward Santana que ya tienes
VIDEO — video de testimonios que ya tienes
```

**Total: 7 fotos de Gemini + 3 fotos clientes existentes + 1 CEO + 1 video = 12 assets**

---

## 7. INDEX.CSS — ESTILOS GLOBALES

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=Lato:wght@300;400;700&display=swap');

/* ── Variables (ver sección 3) ── */

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
* { cursor: none !important; }

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-body);
  background: var(--color-bg);
  color: var(--color-text);
  overflow-x: hidden;
  line-height: 1.7;
}

.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: var(--container-pad);
}

/* ── Section headers ── */
.section-header { text-align: center; margin-bottom: 72px; }

.section-eyebrow {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-accent);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 14px;
  position: relative;
}
.section-eyebrow::before,
.section-eyebrow::after {
  content: '—';
  margin: 0 8px;
  opacity: 0.5;
}

.section-title {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 700;
  color: var(--color-text);
  line-height: 1.2;
  margin-bottom: 18px;
}

.section-subtitle {
  font-family: var(--font-body);
  font-size: 1.05rem;
  color: var(--color-text-muted);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
}

/* ── Buttons ── */
.btn-primary {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--color-text-light);
  background: var(--color-primary);
  padding: 16px 36px;
  border-radius: var(--radius-btn);
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all var(--transition-base);
  display: inline-flex;
  align-items: center;
  gap: 10px;
  letter-spacing: 0.03em;
}
.btn-primary:hover {
  background: var(--color-primary-light);
  transform: translateY(-3px);
  box-shadow: var(--shadow-hover);
}

.btn-outline {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--color-primary);
  background: transparent;
  padding: 14px 34px;
  border-radius: var(--radius-btn);
  text-decoration: none;
  border: 2px solid var(--color-primary);
  cursor: pointer;
  transition: all var(--transition-base);
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.btn-outline:hover {
  background: var(--color-primary);
  color: var(--color-text-light);
  transform: translateY(-3px);
}

.btn-gold {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--color-text);
  background: var(--color-accent);
  padding: 16px 36px;
  border-radius: var(--radius-btn);
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: all var(--transition-base);
  display: inline-flex;
  align-items: center;
  gap: 10px;
}
.btn-gold:hover {
  background: #D4A50E;
  transform: translateY(-3px);
  box-shadow: var(--shadow-gold);
}

/* ── Ornamento decorativo (línea dorada) ── */
.ornament {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  margin: 16px 0;
}
.ornament::before,
.ornament::after {
  content: '';
  flex: 1;
  max-width: 80px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--color-accent));
}
.ornament::after {
  background: linear-gradient(90deg, var(--color-accent), transparent);
}
.ornament-icon { color: var(--color-accent); font-size: 1rem; }

/* ── Mobile ── */
@media (max-width: 768px) {
  * { cursor: auto !important; }
  :root {
    --container-pad: 0 24px;
    --section-padding: 80px 0;
  }
}

/* ── Scrollbar ── */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--color-bg-2); }
::-webkit-scrollbar-thumb { background: var(--color-primary-light); border-radius: 3px; }
```

---

## 8. NAVBAR — Logo centrado, menú dividido

```tsx
// ESTRUCTURA CLAVE: menú split con logo en el centro
// [Inicio · Nuestra Historia · El Café]  [LOGO]  [Proceso · Testimonios · Contacto]

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const leftLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#historia', label: 'Nuestra Historia' },
    { href: '#producto', label: 'El Café' },
  ];
  const rightLinks = [
    { href: '#proceso', label: 'Del Campo a Tu Taza' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="navbar__inner">
        {/* Left links */}
        <ul className="navbar__links navbar__links--left">
          {leftLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">{link.label}</a>
            </li>
          ))}
        </ul>

        {/* CENTER LOGO */}
        <a href="#inicio" className="navbar__logo">
          {/* Si tiene logo PNG: */}
          <img src="/images/logo-mana.png" alt="Café Maná" className="navbar__logo-img" />
          {/* Fallback texto si no hay imagen: */}
          {/* <span className="navbar__logo-text">CAFÉ MANÁ</span> */}
        </a>

        {/* Right links */}
        <ul className="navbar__links navbar__links--right">
          {rightLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger mobile */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {[...leftLinks, ...rightLinks].map(link => (
              <a
                key={link.href}
                href={link.href}
                className="navbar__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
```

```css
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  padding: 24px 0;
  transition: all 0.5s ease;
}
.navbar--scrolled {
  background: rgba(250, 246, 240, 0.96);
  backdrop-filter: blur(20px);
  padding: 16px 0;
  border-bottom: 1px solid var(--color-border);
  box-shadow: 0 2px 20px rgba(107, 58, 31, 0.08);
}
.navbar__inner {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: var(--container-pad);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 24px;
}
.navbar__links {
  display: flex;
  list-style: none;
  gap: 4px;
  margin: 0; padding: 0;
}
.navbar__links--right { justify-content: flex-end; }
.navbar__link {
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  color: var(--color-text-mid);
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 8px;
  transition: all var(--transition-fast);
  white-space: nowrap;
}
/* En el hero (antes de scrollear) los links se ven claros */
.navbar:not(.navbar--scrolled) .navbar__link {
  color: rgba(255, 255, 255, 0.85);
}
.navbar:not(.navbar--scrolled) .navbar__link:hover {
  color: var(--color-accent);
  background: rgba(255,255,255,0.08);
}
.navbar__link:hover {
  color: var(--color-primary);
  background: rgba(107, 58, 31, 0.06);
}
.navbar__logo {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
.navbar__logo-img {
  height: 64px;
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 2px 8px rgba(0,0,0,0.15));
  transition: transform var(--transition-base);
}
.navbar:not(.navbar--scrolled) .navbar__logo-img {
  /* En hero oscuro, el logo puede necesitar brillo */
  filter: brightness(1.1) drop-shadow(0 2px 12px rgba(0,0,0,0.3));
}
.navbar__logo-img:hover { transform: scale(1.05); }

.navbar__logo-text {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.4rem;
  color: var(--color-primary);
  letter-spacing: 0.1em;
}

.navbar__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  grid-column: 3;
  justify-self: end;
}
.navbar__hamburger span {
  display: block;
  width: 24px; height: 2px;
  background: var(--color-primary);
  border-radius: 2px;
  transition: all 0.3s;
}
.navbar__mobile {
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.navbar__mobile-link {
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--color-text);
  text-decoration: none;
  padding: 14px 24px;
  border-bottom: 1px solid var(--color-border);
  transition: all var(--transition-fast);
}
.navbar__mobile-link:hover {
  background: var(--color-bg-2);
  color: var(--color-primary);
  padding-left: 32px;
}
@media (max-width: 900px) {
  .navbar__links { display: none; }
  .navbar__hamburger { display: flex; }
  .navbar__inner { grid-template-columns: 1fr auto; }
}
```

---

## 9. HERO SECTION — `src/sections/HeroSection.tsx`

```tsx
// Hero de pantalla completa con:
// - Fondo: foto de campo cafetalero con parallax zoom al scroll
// - Overlay gradiente SUAVE: rgba(44, 24, 10, 0.45) — no muy oscuro
// - Centro: contenido flotante
// - COMPOSICIÓN: texto a la izquierda, bolsa de café a la derecha
//   (igual que la referencia de Royal Coffee)

// Estructura visual:
// ┌─────────────────────────────────────────────────────┐
// │              [NAVBAR con logo centrado]              │
// │                                                      │
// │  "CAFÉ MANÁ"          ┌─────────────────────────┐  │
// │  eyebrow              │                         │  │
// │  ─────────────────    │   [BOLSA DE CAFÉ PNG]   │  │
// │  THE                  │     con sombra y        │  │
// │  "Quest to Offer      │     efecto float        │  │
// │   the Best            │                         │  │
// │   Coffee in           └─────────────────────────┘  │
// │   the World"                                        │
// │                                                     │
// │  [CTA: Conoce Nuestra Historia]                     │
// │                                                     │
// │  ↓ scroll                                           │
// └─────────────────────────────────────────────────────┘

const HERO_BG = '/images/hero-campo.jpg';
// Fallback Pexels si no está lista:
// const HERO_BG = 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1920';
```

```css
.hero {
  position: relative;
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  overflow: hidden;
  color: var(--color-text-light);
}

/* FONDO con parallax */
.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.hero__bg img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center 30%;
  transform-origin: center;
}

/* Overlay suave — NO muy oscuro */
.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    rgba(44, 24, 10, 0.65) 0%,
    rgba(44, 24, 10, 0.40) 50%,
    rgba(44, 24, 10, 0.20) 100%
  );
  z-index: 1;
}

/* Gradiente bottom para transición suave al blanco */
.hero__overlay-bottom {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 200px;
  background: linear-gradient(to bottom, transparent, var(--color-bg));
  z-index: 2;
}

.hero__content {
  position: relative;
  z-index: 3;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: var(--container-pad);
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
  padding-top: 100px;
}

/* LEFT: texto */
.hero__text { }

.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 20px;
}
.hero__eyebrow-line {
  width: 32px; height: 1px;
  background: var(--color-accent);
  display: inline-block;
}

.hero__title {
  font-family: var(--font-display);
  font-size: var(--text-hero);
  font-weight: 800;
  line-height: 1.05;
  color: var(--color-text-light);
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 0.3em;
}

/* La letra inicial grande decorativa (tipo la referencia) */
.hero__title .drop-cap {
  font-size: 1.3em;
  line-height: 0.8;
  margin-right: -0.05em;
  color: var(--color-accent);
}

.hero__subtitle {
  font-family: var(--font-body);
  font-size: 1.1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.80);
  line-height: 1.8;
  margin-bottom: 48px;
  max-width: 460px;
}

.hero__ctas {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

/* Decorative gold frame around the text block */
.hero__frame {
  position: relative;
  padding: 32px;
  background: rgba(44, 24, 10, 0.3);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(200, 150, 12, 0.25);
  border-radius: 4px;
}
.hero__frame::before {
  content: '';
  position: absolute;
  top: 8px; left: 8px;
  right: 8px; bottom: 8px;
  border: 1px solid rgba(200, 150, 12, 0.12);
  border-radius: 2px;
  pointer-events: none;
}

/* RIGHT: imagen de la bolsa flotante */
.hero__product {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero__bag {
  width: 340px;
  max-width: 100%;
  filter: drop-shadow(0 30px 60px rgba(0,0,0,0.4));
  /* Float animation */
  animation: floatBag 4s ease-in-out infinite;
}

@keyframes floatBag {
  0%, 100% { transform: translateY(0px) rotate(-2deg); }
  50%       { transform: translateY(-18px) rotate(2deg); }
}

/* Scroll indicator */
.hero__scroll {
  position: absolute;
  bottom: 48px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: rgba(255,255,255,0.6);
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-family: var(--font-body);
}
.hero__scroll-line {
  width: 1px;
  height: 50px;
  background: linear-gradient(to bottom, rgba(200,150,12,0.8), transparent);
  animation: scrollDown 2s ease-in-out infinite;
}
@keyframes scrollDown {
  0%, 100% { opacity: 0.4; transform: scaleY(0.6); transform-origin: top; }
  50% { opacity: 1; transform: scaleY(1); }
}

@media (max-width: 900px) {
  .hero__content { grid-template-columns: 1fr; text-align: center; padding-top: 120px; }
  .hero__bag { width: 220px; }
  .hero__subtitle { margin: 0 auto 40px; }
  .hero__ctas { justify-content: center; }
}
```

---

## 10. ABOUT SECTION — `src/sections/AboutSection.tsx`

```tsx
// Fondo: var(--color-bg) — crema cálida
// 2 columnas: imagen izquierda (clip-path reveal) + texto derecha
// Imagen: /images/campo-cosecha.jpg
// Título: "Nacidos Entre los Cafetales de Ocoa"
// Texto: historia del origen, San José de Ocoa, familia, tradición
// Detalle dorado decorativo: ornament con ☕
// Quote destacado en cursiva Playfair: "Cada taza es una historia de nuestra tierra."
```

```css
.about { padding: var(--section-padding); background: var(--color-bg); }
.about__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
.about__img-wrap {
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.about__img {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  display: block;
}
/* Ornamento dorado sobre la imagen */
.about__img-badge {
  position: absolute;
  bottom: 32px;
  right: -24px;
  background: var(--color-surface);
  border: 1px solid var(--color-border-warm);
  border-radius: 12px;
  padding: 20px 24px;
  box-shadow: var(--shadow-card);
  text-align: center;
}
.about__img-badge-num {
  font-family: var(--font-display);
  font-size: 2.4rem;
  font-weight: 800;
  color: var(--color-accent);
  line-height: 1;
  display: block;
}
.about__img-badge-text {
  font-family: var(--font-body);
  font-size: 0.75rem;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  display: block;
  margin-top: 4px;
}

.about__content { }
.about__quote {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.3rem;
  color: var(--color-primary);
  line-height: 1.6;
  margin: 28px 0;
  padding-left: 24px;
  border-left: 3px solid var(--color-accent);
}
.about__text {
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--color-text-mid);
  line-height: 1.85;
  margin-bottom: 16px;
}

@media (max-width: 900px) {
  .about__grid { grid-template-columns: 1fr; gap: 40px; }
  .about__img-badge { right: 16px; }
}
```

---

## 11. PRODUCT SECTION — `src/sections/ProductSection.tsx`

```tsx
// Fondo: var(--color-bg-2) — crema más oscura
// Gran sección de presentación del producto
// Layout: texto arriba centrado + grid de 2 cards debajo
//   Card 1: foto grande de la bolsa oficial
//   Card 2: foto de taza servida (taza-cafe-01.jpg)
// Badges: AGP · San José de Ocoa · Artesanal
// Características en grid 3 columnas (íconos + texto):
//   ☕ Tostado Artesanal | 🌿 100% Natural | 🏔️ Altura de Montaña
//   🫘 Grano Selecto    | 🇩🇴 Hecho en RD  | ✨ Aroma Intenso

const features = [
  { icon: '☕', title: 'Tostado Artesanal', desc: 'Proceso cuidadoso que preserva cada nota' },
  { icon: '🌿', title: '100% Natural', desc: 'Sin aditivos, directo del campo' },
  { icon: '🏔️', title: 'Altura de Montaña', desc: 'Cultivado en las alturas de Ocoa' },
  { icon: '🫘', title: 'Grano Selecto', desc: 'Solo los mejores granos cosechados' },
  { icon: '🇩🇴', title: 'Orgullo Dominicano', desc: 'Producido en San José de Ocoa, RD' },
  { icon: '✨', title: 'Aroma Intenso', desc: 'Una experiencia sensorial desde el primer sorbo' },
];
```

```css
.product { padding: var(--section-padding); background: var(--color-bg-2); }

.product__showcase {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 80px;
}

.product__card {
  border-radius: var(--radius-card);
  overflow: hidden;
  position: relative;
  background: var(--color-surface);
  box-shadow: var(--shadow-card);
  transition: all var(--transition-base);
}
.product__card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-hover);
}
.product__card img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  display: block;
}
.product__card--bag {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-bg-2), var(--color-bg));
  padding: 48px;
}
.product__card--bag img {
  width: 240px;
  height: auto;
  object-fit: contain;
  aspect-ratio: auto;
  filter: drop-shadow(0 20px 40px rgba(107,58,31,0.2));
  animation: floatBag 4s ease-in-out infinite;
}

.product__card-label {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  background: linear-gradient(to top, rgba(44,24,10,0.8), transparent);
  color: var(--color-text-light);
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 600;
  padding: 24px 24px 20px;
}

/* Features grid */
.product__features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.feature-item {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  padding: 28px 24px;
  text-align: center;
  transition: all var(--transition-base);
}
.feature-item:hover {
  border-color: var(--color-accent);
  transform: translateY(-4px);
  box-shadow: var(--shadow-card);
}
.feature-icon { font-size: 2rem; margin-bottom: 12px; display: block; }
.feature-title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1rem;
  color: var(--color-text);
  margin-bottom: 6px;
}
.feature-desc {
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--color-text-muted);
  line-height: 1.6;
}

@media (max-width: 900px) {
  .product__showcase { grid-template-columns: 1fr; max-width: 500px; margin-left: auto; margin-right: auto; }
  .product__features { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .product__features { grid-template-columns: 1fr; }
}
```

---

## 12. PROCESO SECTION — `src/sections/ProcesoSection.tsx`

```tsx
// Fondo: var(--color-bg) — crema cálida
// Título: "Del Campo a Tu Taza"
// Timeline visual horizontal (3 pasos) en desktop, vertical en mobile
// Fotos alternas con clip-path reveal
// Pasos:
//   1. 🌱 La Cosecha — proceso-01.jpg
//      "Con manos expertas, seleccionamos solo los granos maduros..."
//   2. ☕ El Tostado — proceso-02.jpg
//      "Un proceso artesanal que transforma cada grano..."
//   3. 📦 En Tus Manos — proceso-03.jpg
//      "Sellado en fresco para preservar el aroma..."

// Layout alterno: foto | texto · texto | foto · foto | texto
// Usar ClipRevealImage para las fotos (se descubren de izquierda a derecha)
```

```css
.proceso { padding: var(--section-padding); background: var(--color-bg); }
.proceso__steps { display: flex; flex-direction: column; gap: 100px; margin-top: 80px; }
.proceso__step {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
.proceso__step--reverse { direction: rtl; }
.proceso__step--reverse > * { direction: ltr; }

.proceso__step-num {
  font-family: var(--font-display);
  font-size: 6rem;
  font-weight: 800;
  color: var(--color-accent);
  opacity: 0.25;
  line-height: 1;
  margin-bottom: -20px;
  display: block;
}
.proceso__step-icon { font-size: 2rem; margin-bottom: 12px; display: block; }
.proceso__step-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 16px;
}
.proceso__step-text {
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--color-text-mid);
  line-height: 1.85;
}
.proceso__step-img {
  border-radius: var(--radius-card);
  overflow: hidden;
}
.proceso__step-img img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}
.proceso__step-img:hover img { transform: scale(1.04); }

@media (max-width: 900px) {
  .proceso__step { grid-template-columns: 1fr; gap: 32px; }
  .proceso__step--reverse { direction: ltr; }
}
```

---

## 13. TESTIMONIOS SECTION — `src/sections/TestimoniosSection.tsx`

```tsx
// Fondo: var(--color-bg-2)
// Título: "Lo Que Dicen Nuestros Clientes"
// 2 partes:
//
// PARTE A — Video de testimonio (si existe el archivo)
//   - Video embed grande, redondeado, con play button custom
//   - Usar <video> tag con src="/images/video-testimonio.mp4"
//   - Si no hay video: mostrar grid de fotos de clientes
//
// PARTE B — Cards de clientes con fotos (cliente-01/02/03.jpg)
//   - 3 cards: foto del cliente con bolsa, nombre (placeholder), rating ⭐⭐⭐⭐⭐
//   - Quote del cliente (placeholder hasta tener el real)
//   - Stagger animation

const testimonials = [
  {
    photo: '/images/cliente-01.jpg',
    name: 'Cliente Satisfecho',
    rating: 5,
    quote: 'El mejor café que he probado en mi vida. Se nota la diferencia de la montaña en cada sorbo.',
  },
  {
    photo: '/images/cliente-02.jpg',
    name: 'Amante del Café',
    rating: 5,
    quote: 'Aroma increíble desde que abres la bolsa. Café Maná se convirtió en parte de mi mañana.',
  },
  {
    photo: '/images/cliente-03.jpg',
    name: 'Fan de Ocoa',
    rating: 5,
    quote: 'Orgulloso de apoyar un producto dominicano de esta calidad. Café Maná es el mejor.',
  },
];
```

```css
.testimonios { padding: var(--section-padding); background: var(--color-bg-2); }

/* Video embed */
.testimonios__video-wrap {
  position: relative;
  border-radius: var(--radius-card);
  overflow: hidden;
  max-width: 800px;
  margin: 0 auto 80px;
  box-shadow: var(--shadow-hover);
  aspect-ratio: 16/9;
  background: var(--color-bg);
}
.testimonios__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.testimonios__play-btn {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 72px; height: 72px;
  background: rgba(250, 246, 240, 0.95);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all var(--transition-base);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  border: none;
}
.testimonios__play-btn:hover {
  background: var(--color-accent);
  transform: translate(-50%, -50%) scale(1.1);
}

/* Cards de clientes */
.testimonios__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.testimonial-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  padding: 32px 28px;
  transition: all var(--transition-base);
}
.testimonial-card:hover {
  border-color: var(--color-accent);
  box-shadow: var(--shadow-card);
  transform: translateY(-6px);
}
.testimonial-card__header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
}
.testimonial-card__photo {
  width: 56px; height: 56px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--color-border-warm);
}
.testimonial-card__name {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--color-text);
  margin-bottom: 2px;
}
.testimonial-card__stars { color: var(--color-accent); font-size: 0.85rem; }
.testimonial-card__quote {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 0.95rem;
  color: var(--color-text-mid);
  line-height: 1.7;
}
.testimonial-card__quote::before { content: '"'; }
.testimonial-card__quote::after { content: '"'; }

@media (max-width: 900px) {
  .testimonios__grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
}
```

---

## 14. FOUNDER SECTION — `src/sections/FounderSection.tsx`

```tsx
// Fondo: var(--color-bg) con patrón sutil
// Título: "Conoce al Fundador"
// 2 columnas: foto derecha, texto izquierda (clip-path reveal)
// Foto: /images/edward-santana.jpg
// Nombre: Edward Santana
// Cargo: Fundador & CEO, Café Maná · San José de Ocoa
// Texto: visión del empresario, raíces en Ocoa, pasión por el café
// Quote en Playfair italic destacado
// Badge superpuesto en foto: "☕ Fundador · Ocoa, RD"
```

```css
.founder { padding: var(--section-padding); background: var(--color-bg); }
.founder__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
.founder__img-wrap {
  position: relative;
  border-radius: 4px;
  overflow: visible;
}
.founder__img {
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
  object-position: top;
  border-radius: 4px;
  display: block;
  box-shadow: var(--shadow-hover);
}
.founder__badge {
  position: absolute;
  bottom: -24px;
  left: 32px;
  background: var(--color-primary);
  color: var(--color-text-light);
  padding: 14px 20px;
  border-radius: 12px;
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 700;
  box-shadow: 0 8px 24px rgba(107,58,31,0.3);
}
.founder__name {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: 6px;
}
.founder__role {
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--color-accent);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 24px;
}
.founder__text {
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--color-text-mid);
  line-height: 1.85;
  margin-bottom: 16px;
}
.founder__quote {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.2rem;
  color: var(--color-primary);
  line-height: 1.6;
  margin: 28px 0;
  padding: 20px 24px;
  background: var(--color-bg-2);
  border-left: 3px solid var(--color-accent);
  border-radius: 0 8px 8px 0;
}

@media (max-width: 900px) {
  .founder__grid { grid-template-columns: 1fr; gap: 60px; }
}
```

---

## 15. CONTACT SECTION — `src/sections/ContactSection.tsx`

```tsx
// Fondo: var(--color-bg-dark) — el único fondo oscuro de la web (solo en footer/contacto)
// Texto claro
// Título: "Prueba el Café de las Montañas de Ocoa"
// Subtítulo con WhatsApp, ubicación
// 2 CTA grandes: [Pedir por WhatsApp] [Seguirnos en Instagram]
// Info: San José de Ocoa, República Dominicana
// Decoración: beans/granos de café como partículas (solo CSS, no JS)
```

```css
.contact {
  padding: var(--section-padding);
  background: var(--color-bg-dark);
  color: var(--color-text-light);
  text-align: center;
  position: relative;
  overflow: hidden;
}
/* Textura sutil de fondo */
.contact::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    circle at 20% 50%,
    rgba(200, 150, 12, 0.06) 0%,
    transparent 60%
  ), radial-gradient(
    circle at 80% 50%,
    rgba(107, 58, 31, 0.15) 0%,
    transparent 60%
  );
  pointer-events: none;
}
.contact .section-title { color: var(--color-text-light); }
.contact .section-subtitle { color: rgba(255,255,255,0.65); }
.contact__ctas {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 48px;
}
.contact__info {
  margin-top: 48px;
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: rgba(255,255,255,0.50);
  letter-spacing: 0.05em;
}
```

---

## 16. FOOTER — `src/components/Footer.tsx`

```tsx
// Fondo: var(--color-bg-dark)
// Logo centrado arriba
// Navegación rápida (links internos)
// Línea divisora dorada
// Bottom: "© 2025 Café Maná · San José de Ocoa, RD · Desarrollado por NEXIX Tech Studio"
```

---

## 17. SCROLL PROGRESS — Color café

```tsx
// En ScrollProgress.tsx:
// background: 'linear-gradient(90deg, var(--color-accent), var(--color-primary))'
// Es la barra de progreso de scroll — 3px en el top
```

---

## 18. STATS SECTION (pequeña, entre About y Product)

```tsx
// Fondo: var(--color-primary) — marrón café (única sección de color intenso)
// Texto: var(--color-text-light) — crema
// 4 contadores con AnimatedCounter:
const stats = [
  { value: 100, suffix: '%', label: 'Café Natural' },
  { value: 2000, suffix: 'm+', label: 'Altura de Cultivo' },
  { value: 1, suffix: '', label: 'San José de Ocoa' },  // texto, no número
  { value: 100, suffix: '%', label: 'Satisfacción' },
];
// Fondo con textura: background-image: radial-gradient de granos
```

---

## 19. APP.TSX

```tsx
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import WhatsAppButton from './components/WhatsAppButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import StatsSection from './sections/StatsSection';
import ProductSection from './sections/ProductSection';
import ProcesoSection from './sections/ProcesoSection';
import TestimoniosSection from './sections/TestimoniosSection';
import FounderSection from './sections/FounderSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <WhatsAppButton />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ProductSection />
        <ProcesoSection />
        <TestimoniosSection />
        <FounderSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
```

---

## 20. WHATSAPP BUTTON

```tsx
// FAB verde fijo en bottom-right
// href: "https://wa.me/18498864256" (actualizar cuando tengan el número)
// Placeholder: href="#contacto"
```

---

## 21. IMÁGENES FALLBACK (hasta que lleguen las de Gemini)

```
Hero:     https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?w=1920
About:    https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?w=800
Taza 1:   https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?w=800
Taza 2:   https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?w=800
Proceso1: https://images.pexels.com/photos/4565828/pexels-photo-4565828.jpeg?w=800
Proceso2: https://images.pexels.com/photos/6205466/pexels-photo-6205466.jpeg?w=800
Proceso3: https://images.pexels.com/photos/1440727/pexels-photo-1440727.jpeg?w=800
```

---

## 22. DEPENDENCIAS

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^11.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.2.0",
    "typescript": "^5.2.0",
    "vite": "^5.0.0"
  }
}
```

*(No necesita react-router-dom — es una sola página con scroll)*

---

## 23. INSTRUCCIÓN FINAL PARA CLAUDE CODE

```
Use this skill https://github.com/Leonxlnx/taste-skill

Lee este CLAUDE.md completo.

Construye el proyecto Café Maná:
- Stack: React + TypeScript + Vite + Framer Motion + Vanilla CSS (SIN Tailwind)
- Concepto: "RAÍCES DE OCOA" — crema #FAF6F0 + café #6B3A1F + verde #3A6B2A + dorado #C8960C
- IMPORTANTE: NO usar fondos muy oscuros/negros. El único fondo oscuro es el
  footer y la sección Contact (--color-bg-dark: #3D2314). Todas las demás
  secciones alternan entre --color-bg (#FAF6F0) y --color-bg-2 (#F3EBE0)
- Navbar con logo centrado (grid-template-columns: 1fr auto 1fr)
- Usar imágenes fallback de Pexels hasta que lleguen las de Gemini
- Para la bolsa de café usar /images/bolsa-cafe.png con animación float
- Aplicar todos los niveles del NEXIX Taste Skill

ORDEN DE CONSTRUCCIÓN:
1. Setup + index.css con todas las variables
2. Componentes globales (CustomCursor, RevealText, MagneticButton,
   ScrollProgress, WhatsAppButton)
3. Navbar (logo centrado)
4. HeroSection completa (texto izquierda + bolsa flotante derecha)
5. App.tsx con todas las secciones importadas

DETENTE después del Hero y muestra resultado para aprobación.
```

---

*NEXIX Tech Studio · Café Maná · "RAÍCES DE OCOA"*
*Web de presentación y posicionamiento de marca*
*San José de Ocoa, República Dominicana*