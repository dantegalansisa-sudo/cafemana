import { motion } from 'framer-motion';
import './ProcesoSection.css';

export default function ProcesoSection() {
  const steps = [
    {
      num: '01',
      icon: '🌱',
      title: 'La Cosecha',
      text: 'Con manos expertas, seleccionamos solo los granos maduros en el punto perfecto. Cada cereza de café es cuidadosamente escogida para garantizar la máxima calidad desde el inicio.',
      img: '/images/la cosecha.jpg',
      reverse: false,
    },
    {
      num: '02',
      icon: '☕',
      title: 'El Tostado',
      text: 'Un proceso artesanal que transforma cada grano en una obra maestra. Controlamos cuidadosamente la temperatura y el tiempo para desarrollar los sabores y aromas característicos de Café Maná.',
      img: '/images/tostado.jpg',
      reverse: true,
    },
    {
      num: '03',
      icon: '📦',
      title: 'En Tus Manos',
      text: 'Sellado en fresco para preservar el aroma y la frescura. Cada bolsa de Café Maná llega a ti con todo el sabor de las montañas de Ocoa, listo para convertirse en tu taza perfecta.',
      img: '/images/en tus manos.jpeg',
      reverse: false,
    },
  ];

  return (
    <section id="proceso" className="proceso">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-eyebrow">Nuestro Proceso</div>
          <h2 className="section-title">Del Campo a Tu Taza</h2>
          <p className="section-subtitle">
            Cada paso de nuestro proceso está diseñado para preservar la calidad
            excepcional que distingue a Café Maná.
          </p>
        </div>

        {/* Steps */}
        <div className="proceso__steps">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`proceso__step ${step.reverse ? 'proceso__step--reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="proceso__step-content">
                <span className="proceso__step-num">{step.num}</span>
                <span className="proceso__step-icon">{step.icon}</span>
                <h3 className="proceso__step-title">{step.title}</h3>
                <p className="proceso__step-text">{step.text}</p>
              </div>

              <div className="proceso__step-img">
                <img src={step.img} alt={step.title} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
