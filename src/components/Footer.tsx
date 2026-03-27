import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Logo */}
          <div className="footer__logo">
            <span className="footer__logo-text">CAFÉ MANÁ</span>
            <p className="footer__tagline">San José de Ocoa, República Dominicana</p>
          </div>

          {/* Navegación */}
          <nav className="footer__nav">
            <a href="#inicio">Inicio</a>
            <a href="#historia">Nuestra Historia</a>
            <a href="#producto">El Café</a>
            <a href="#proceso">Proceso</a>
            <a href="#testimonios">Testimonios</a>
            <a href="#contacto">Contacto</a>
          </nav>

          {/* Decorative divider */}
          <div className="footer__divider" />

          {/* Copyright */}
          <div className="footer__bottom">
            <p>© {currentYear} Café Maná · San José de Ocoa, RD</p>
            <p className="footer__credit">
              Desarrollado por{' '}
              <a
                href="https://nexix.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__credit-link"
              >
                NEXIX Tech Studio
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
