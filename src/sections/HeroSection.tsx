import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './HeroSection.css';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  // Parallax effect - zoom in on scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <section id="inicio" className="hero" ref={heroRef}>
      {/* Background with parallax */}
      <div className="hero__bg">
        <motion.img
          src="/images/hero-campo.jpg"
          alt="Cafetales de San José de Ocoa"
          style={{ scale }}
        />
      </div>

      {/* Overlay suave */}
      <div className="hero__overlay" />
      <div className="hero__overlay-bottom" />

      {/* Content */}
      <motion.div
        className="hero__content"
        style={{ opacity }}
      >
        <div className="hero__text">
          <div className="hero__frame">
            {/* Eyebrow */}
            <motion.div
              className="hero__eyebrow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="hero__eyebrow-line" />
              CAFÉ MANÁ
              <span className="hero__eyebrow-line" />
            </motion.div>

            {/* Title */}
            <motion.h1
              className="hero__title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <span className="drop-cap">E</span>l Mejor Café del Mundo
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="hero__subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Desde las montañas de San José de Ocoa, cultivamos con pasión el café más auténtico de República Dominicana.
              Cada grano cuenta la historia de nuestra tierra.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="hero__ctas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a href="#historia" className="btn-primary">
                Conoce Nuestra Historia
              </a>
              <a href="#contacto" className="btn-outline">
                Pide Tu Café
              </a>
            </motion.div>
          </div>
        </div>

        {/* Espacio para balance visual - sin placeholder que tape la imagen */}
        <div className="hero__product" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </motion.div>
    </section>
  );
}
