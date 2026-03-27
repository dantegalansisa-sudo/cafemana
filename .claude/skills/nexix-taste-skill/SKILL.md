---
name: nexix-taste-skill
description: >
  Motor de excelencia visual para webs de alto impacto — NEXIX Tech Studio.
  Aplica SIEMPRE que se construya o modifique cualquier web con React + TypeScript
  + Vite + Framer Motion para NEXIX. Activa automáticamente los 5 niveles de
  interactividad avanzada: cursor magnético, scroll storytelling, text reveal masks,
  parallax real con distorsión y micro-interacciones magnéticas en botones. Este skill
  NO es opcional — se aplica en CADA proyecto web de NEXIX sin excepción, incluyendo
  clínicas dentales, estéticas, y cualquier sitio del portafolio. Si ves un CLAUDE.md
  de NEXIX Tech Studio, este skill DEBE activarse.
---

# NEXIX Taste Skill — Motor de Excelencia Visual

Este skill eleva cada web de NEXIX al nivel de Awwwards / Dribbble Top Shot.
Se aplica ENCIMA del diseño base especificado en el CLAUDE.md del proyecto —
no lo reemplaza, lo potencia.

**Stack objetivo:** React + TypeScript + Vite + Framer Motion + Vanilla CSS

---

## REGLA MAESTRA

Antes de escribir cualquier componente, instala las dependencias adicionales:

```bash
npm install framer-motion
# framer-motion ya debe estar — verificar que es v10+
```

Importaciones base que todo componente avanzado necesita:

```tsx
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  AnimatePresence,
  useMotionValue,
} from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
```

---

## NIVEL 1 — CURSOR MAGNÉTICO PERSONALIZADO

**Impacto:** Lo primero que percibe el usuario. Señal instantánea de que esto es diferente.

Crear `src/components/CustomCursor.tsx`:

```tsx
import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const isHovering = useRef(false);

  // Spring con lag para sensación premium
  const springConfig = { damping: 25, stiffness: 250 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
    };

    const handleHoverIn = () => {
      isHovering.current = true;
      dot.classList.add('cursor--hover');
    };
    const handleHoverOut = () => {
      isHovering.current = false;
      dot.classList.remove('cursor--hover');
    };

    window.addEventListener('mousemove', moveCursor);

    // Aplicar efecto hover a todos los elementos interactivos
    const interactives = document.querySelectorAll('a, button, .service-card, .team-card');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleHoverIn);
      el.addEventListener('mouseleave', handleHoverOut);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      {/* Dot interior — sigue al instante */}
      <motion.div
        className="cursor-dot"
        style={{ x: cursorX, y: cursorY }}
      />
      {/* Círculo exterior — sigue con lag */}
      <motion.div
        id="cursor-ring"
        className="cursor-ring"
        style={{ x: springX, y: springY }}
      />
    </>
  );
}
```

```css
/* En index.css — cursor global */
* { cursor: none !important; }

.cursor-dot {
  position: fixed;
  top: 0; left: 0;
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--color-primary, #1565C0);
  pointer-events: none;
  z-index: 99999;
  mix-blend-mode: difference;
}

.cursor-ring {
  position: fixed;
  top: 0; left: 0;
  width: 36px; height: 36px;
  border-radius: 50%;
  border: 1.5px solid var(--color-primary, #1565C0);
  pointer-events: none;
  z-index: 99998;
  opacity: 0.6;
  transition: width 0.3s ease, height 0.3s ease, opacity 0.3s ease;
}

.cursor-ring.cursor--hover {
  width: 56px; height: 56px;
  opacity: 1;
  background: rgba(var(--color-primary-rgb, 21,101,192), 0.08);
}

@media (max-width: 768px) {
  /* Deshabilitar cursor custom en mobile */
  * { cursor: auto !important; }
  .cursor-dot, .cursor-ring { display: none; }
}
```

**Agregar en `App.tsx`:**
```tsx
import CustomCursor from './components/CustomCursor';
// Primero en el árbol, antes de todo:
<CustomCursor />
```

---

## NIVEL 2 — TEXT REVEAL MASKS (Titulares Cinematográficos)

**Impacto:** Los H1 y H2 principales aparecen como saliendo del piso — editorial, cinematic.

Crear `src/components/RevealText.tsx`:

```tsx
import { motion } from 'framer-motion';

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

// Ease curve premium — usada por Vercel, Linear, etc.
const PREMIUM_EASE = [0.76, 0, 0.24, 1];

export default function RevealText({
  children,
  className = '',
  delay = 0,
  tag: Tag = 'h1',
}: RevealTextProps) {
  const words = children.split(' ');

  return (
    <Tag className={className} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3em' }}>
      {words.map((word, i) => (
        <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
          <motion.span
            style={{ display: 'inline-block' }}
            initial={{ y: '110%', rotate: 2 }}
            whileInView={{ y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{
              duration: 0.85,
              delay: delay + i * 0.07,
              ease: PREMIUM_EASE,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
```

**Uso en cualquier sección:**
```tsx
// En lugar de: <h2 className="section-title">Cuida Tu Sonrisa</h2>
// Usar:
<RevealText tag="h2" className="section-title" delay={0.1}>
  Cuida Tu Sonrisa Con Los Mejores
</RevealText>
```

---

## NIVEL 3 — SCROLL STORYTELLING (Parallax Real)

**Impacto:** La web respira — elementos se mueven a velocidades diferentes mientras scrolleas.

Crear `src/hooks/useParallax.ts`:

```tsx
import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

export function useParallax(distance: number = 80): {
  ref: React.RefObject<HTMLDivElement>;
  y: MotionValue<number>;
} {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
  return { ref, y };
}
```

**Patrones de uso:**

```tsx
// 1. Imagen con parallax suave
function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const { ref, y } = useParallax(60);
  return (
    <div ref={ref} style={{ overflow: 'hidden', borderRadius: '24px' }}>
      <motion.img
        src={src} alt={alt}
        style={{ y, scale: 1.15 }} // scale compensa el movimiento
        className="parallax-img"
      />
    </div>
  );
}

// 2. Hero con imagen que hace zoom al scrollear
function HeroWithScrollZoom() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 1.12]);
  const opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.4], [0, 80]);

  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div style={{ scale, y }}>
        <img src="/images/paciente.jpg" alt="Hero" className="hero__image" />
      </motion.div>
      <motion.div className="hero__content" style={{ opacity, y: y }}>
        {/* título y CTA */}
      </motion.div>
    </section>
  );
}

// 3. Sección con reveal de clip-path (imagen se descubre de izquierda a derecha)
function ClipRevealImage({ src }: { src: string }) {
  return (
    <motion.div
      style={{ borderRadius: '24px', overflow: 'hidden' }}
      initial={{ clipPath: 'inset(0 100% 0 0)' }}
      whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
    >
      <img src={src} alt="" style={{ width: '100%', display: 'block' }} />
    </motion.div>
  );
}
```

---

## NIVEL 4 — MAGNETIC BUTTONS (Botones que Siguen al Cursor)

**Impacto:** Los CTAs principales siguen al cursor cuando está cerca. Interacción táctil sin tocar.

Crear `src/components/MagneticButton.tsx`:

```tsx
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  magnetRadius?: number;
  magnetStrength?: number;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  className = '',
  magnetRadius = 80,
  magnetStrength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < magnetRadius) {
      setPos({ x: dx * magnetStrength, y: dy * magnetStrength });
    }
  };

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  const Component = href ? 'a' : 'button';

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block' }}
    >
      <motion.div
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <Component
          href={href}
          onClick={onClick}
          className={className}
        >
          {children}
        </Component>
      </motion.div>
    </div>
  );
}
```

**Uso:**
```tsx
// Reemplazar todos los .btn-primary por MagneticButton
<MagneticButton href="https://wa.link/..." className="btn-primary">
  Agendar Cita
</MagneticButton>
```

---

## NIVEL 5 — STAGGERED GRID REVEAL (Cards con Entrada Perfecta)

**Impacto:** Los grids de servicios y equipo entran de forma coordinada — no todos a la vez.

```tsx
// Variants reutilizables para cualquier grid
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

// Uso en cualquier sección de cards:
<motion.div
  className="services__grid"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.15 }}
>
  {items.map((item) => (
    <motion.div
      key={item.title}
      className="service-card"
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
    >
      {/* contenido */}
    </motion.div>
  ))}
</motion.div>
```

---

## BONUS — NÚMERO COUNTER ANIMADO (Stats Section)

```tsx
// src/components/AnimatedCounter.tsx
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  target,
  suffix = '',
  duration = 2000,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}
```

---

## REGLAS DE APLICACIÓN POR PROYECTO

| Elemento             | Clínica nueva | Modificación | Prioridad |
|----------------------|:---:|:---:|-----------|
| CustomCursor         | ✅  | ✅  | SIEMPRE   |
| RevealText en H1/H2  | ✅  | ✅  | SIEMPRE   |
| Parallax en imágenes | ✅  | ✅  | SIEMPRE   |
| MagneticButton CTAs  | ✅  | ✅  | SIEMPRE   |
| Stagger grid cards   | ✅  | ✅  | SIEMPRE   |
| AnimatedCounter      | ✅  | ✅  | Stats     |
| Scroll zoom hero     | ✅  | ⚡  | Opcional  |
| ClipPath image reveal| ✅  | ⚡  | Opcional  |

---

## CHECKLIST ANTES DE ENTREGAR CUALQUIER WEB NEXIX

Antes del `npm run build` final, verificar:

- [ ] CustomCursor importado en App.tsx y funcionando en desktop
- [ ] H1 del Hero usa `<RevealText>` con stagger por palabra
- [ ] H2 de cada sección usa `<RevealText>` o equivalente con `whileInView`
- [ ] Imagen del Hero tiene parallax (scroll zoom o parallax clásico)
- [ ] Botón principal CTA usa `<MagneticButton>`
- [ ] Grid de servicios usa `containerVariants` + `cardVariants`
- [ ] Grid del equipo usa `containerVariants` + `cardVariants`
- [ ] Stats usan `<AnimatedCounter>` con `useInView`
- [ ] Cursor deshabilitado en mobile (media query)
- [ ] `npm run build` sin errores TypeScript

---

## EASE CURVES DE REFERENCIA

```tsx
// Guardar en src/utils/easings.ts
export const EASINGS = {
  premium:   [0.76, 0, 0.24, 1],      // Entradas principales
  smooth:    [0.25, 0.8, 0.25, 1],    // Transiciones suaves
  bounce:    [0.34, 1.56, 0.64, 1],   // Elementos de énfasis
  snappy:    [0.4, 0, 0.2, 1],        // Micro-interacciones
  cinematic: [0.86, 0, 0.07, 1],      // Hero title reveal
} as const;
```

---

*NEXIX Tech Studio — Motor Visual v1.0*
*Aplicar en todos los proyectos web del portafolio*
