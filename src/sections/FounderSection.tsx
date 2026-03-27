import { motion } from 'framer-motion';
import './FounderSection.css';

export default function FounderSection() {
  return (
    <section className="founder">
      <div className="container">
        <div className="founder__grid">
          {/* Texto */}
          <motion.div
            className="founder__content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-eyebrow">Nuestro Fundador</div>
            <h2 className="founder__name">Edward Olaverria Casado</h2>
            <p className="founder__role">Fundador & CEO · Café Maná · San José de Ocoa</p>

            <p className="founder__text">
              Nacido y criado en San José de Ocoa, Edward Olaverria Casado creció entre los cafetales
              que rodean las montañas dominicanas. Desde niño, aprendió a valorar el trabajo
              arduo y la dedicación que requiere cultivar café de calidad excepcional.
            </p>

            <p className="founder__quote">
              "Mi sueño siempre fue llevar el sabor auténtico de Ocoa a cada hogar dominicano.
              Café Maná es ese sueño hecho realidad."
            </p>

            <p className="founder__text">
              Con una visión empresarial clara y un profundo respeto por la tradición cafetalera,
              Edward fundó Café Maná para compartir la riqueza de las montañas de Ocoa con el mundo.
              Cada bolsa de café lleva consigo su pasión por la excelencia y su compromiso con los
              caficultores locales.
            </p>

            <p className="founder__text">
              Hoy, Café Maná representa no solo un producto de alta calidad, sino también el legado
              de una familia dedicada al café y el orgullo de una región que ha perfeccionado su
              cultivo durante generaciones.
            </p>
          </motion.div>

          {/* Imagen */}
          <motion.div
            className="founder__img-wrap"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/images/ceo.png"
              alt="Edward Olaverria Casado - Fundador de Café Maná"
              className="founder__img"
            />
            <div className="founder__badge">☕ Fundador · Ocoa, RD</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
