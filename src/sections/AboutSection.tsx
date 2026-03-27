import { motion } from 'framer-motion';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section id="historia" className="about">
      <div className="container">
        <div className="about__grid">
          {/* Imagen */}
          <motion.div
            className="about__img-wrap"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/bolsa-03.png"
              alt="Café Maná - Artesanal de Ocoa"
              className="about__img"
            />
            <div className="about__img-badge">
              <span className="about__img-badge-num">100%</span>
              <span className="about__img-badge-text">Natural</span>
            </div>
          </motion.div>

          {/* Contenido */}
          <motion.div
            className="about__content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="section-eyebrow">Nuestra Historia</div>
            <h2 className="section-title">Nacidos Entre los Cafetales de Ocoa</h2>

            <div className="ornament">
              <span className="ornament-icon">☕</span>
            </div>

            <p className="about__text">
              En las montañas de San José de Ocoa, República Dominicana, nace Café Maná.
              Nuestra historia comienza en las alturas donde el clima perfecto, la tierra
              fértil y la dedicación de nuestros caficultores se unen para crear algo único.
            </p>

            <p className="about__quote">
              "Cada taza es una historia de nuestra tierra, un sorbo de las montañas dominicanas."
            </p>

            <p className="about__text">
              Con más de una generación dedicada al cultivo artesanal del café, hemos perfeccionado
              el arte de seleccionar solo los mejores granos. Café Tamara y Manzur · AGP representa
              nuestro compromiso con la calidad y la tradición cafetalera dominicana.
            </p>

            <p className="about__text">
              Desde la cosecha manual hasta el tostado controlado, cada paso es supervisado con
              pasión para garantizar que en cada bolsa de Café Maná encuentres la esencia pura
              de nuestras montañas.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
