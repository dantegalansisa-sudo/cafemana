import { motion } from 'framer-motion';
import './ProductSection.css';

export default function ProductSection() {
  const features = [
    { icon: '☕', title: 'Tostado Artesanal', desc: 'Proceso cuidadoso que preserva cada nota' },
    { icon: '🌿', title: '100% Natural', desc: 'Sin aditivos, directo del campo' },
    { icon: '🏔️', title: 'Altura de Montaña', desc: 'Cultivado en las alturas de Ocoa' },
    { icon: '🫘', title: 'Grano Selecto', desc: 'Solo los mejores granos cosechados' },
    { icon: '🇩🇴', title: 'Orgullo Dominicano', desc: 'Producido en San José de Ocoa, RD' },
    { icon: '✨', title: 'Aroma Intenso', desc: 'Una experiencia sensorial desde el primer sorbo' },
  ];

  return (
    <section id="producto" className="product">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-eyebrow">Nuestro Café</div>
          <h2 className="section-title">Café Maná · Tamara y Manzur · AGP</h2>
          <p className="section-subtitle">
            Cultivado con pasión en las montañas de San José de Ocoa, cada bolsa
            de Café Maná representa nuestra dedicación a la excelencia cafetalera.
          </p>
        </div>

        {/* Showcase */}
        <div className="product__showcase">
          <motion.div
            className="product__card product__card--bag"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/new.jpeg"
              alt="Café Maná - Bolsa de Café Artesanal"
              className="product__bag-img"
            />
          </motion.div>

          <motion.div
            className="product__card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/images/neww.jpeg"
              alt="Café Maná - Producto Premium"
            />
            <div className="product__card-label">Café de Montaña</div>
          </motion.div>
        </div>

        {/* Features */}
        <div className="product__features">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <span className="feature-icon">{feature.icon}</span>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
