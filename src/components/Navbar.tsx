import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CartButton from './CartButton';
import './Navbar.css';

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
    { href: '#tienda', label: 'Tienda' },
  ];

  const rightLinks = [
    { href: '#blog', label: 'Blog' },
    { href: '#tiendas', label: 'Tiendas' },
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
          <img src="/images/logo real.png" alt="Café Maná" className="navbar__logo-img" />
        </a>

        {/* Right links */}
        <ul className="navbar__links navbar__links--right">
          {rightLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Cart button */}
        <div className="navbar__cart">
          <CartButton />
        </div>

        {/* Hamburger mobile */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
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
