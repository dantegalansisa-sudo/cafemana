import { motion } from 'framer-motion';
import './ClientesSection.css';

export default function ClientesSection() {
  const clientes = [
    { img: '/images/cliente-01.jpeg', alt: 'Cliente satisfecho con Café Maná' },
    { img: '/images/cliente-02.jpeg', alt: 'Cliente disfrutando Café Maná' },
    { img: '/images/cliente-03.jpeg', alt: 'Cliente feliz con su café' },
    { img: '/images/cliente-04.jpeg', alt: 'Cliente recomendando Café Maná' },
  ];

  return (
    <section className="clientes">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-eyebrow">Nuestros Clientes</div>
          <h2 className="section-title">Quienes Confían en Nosotros</h2>
          <p className="section-subtitle">
            Cada cliente es parte de la familia Café Maná. Aquí algunos de ellos
            disfrutando del mejor café de las montañas de Ocoa.
          </p>
        </div>

        {/* Grid de fotos de clientes */}
        <div className="clientes__grid">
          {clientes.map((cliente, index) => (
            <motion.div
              key={index}
              className="cliente-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="cliente-card__img-wrap">
                <img
                  src={cliente.img}
                  alt={cliente.alt}
                  className="cliente-card__img"
                />
                <div className="cliente-card__overlay">
                  <span className="cliente-card__icon">☕</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
