import { motion } from 'framer-motion';
import './BlogSection.css';

export default function BlogSection() {
  const articles = [
    {
      id: 1,
      title: 'El Arte del Tostado Artesanal',
      excerpt:
        'Descubre cómo el proceso de tostado transforma los granos verdes en el café aromático que amas. Cada segundo cuenta.',
      image: '/images/tostado.jpg',
      category: 'Proceso',
      date: '15 Mar 2024',
      readTime: '5 min',
    },
    {
      id: 2,
      title: 'De la Montaña a Tu Taza',
      excerpt:
        'Un viaje por las alturas de Ocoa, donde cada grano de café es cosechado con dedicación y respeto por la tierra.',
      image: '/images/la cosecha.jpg',
      category: 'Origen',
      date: '10 Mar 2024',
      readTime: '7 min',
    },
    {
      id: 3,
      title: 'Cómo Preparar el Café Perfecto',
      excerpt:
        'Consejos de expertos para extraer el máximo sabor de tu Café Maná. Temperatura, tiempo y técnica hacen la diferencia.',
      image: '/images/en tus manos.jpeg',
      category: 'Preparación',
      date: '5 Mar 2024',
      readTime: '4 min',
    },
    {
      id: 4,
      title: 'El Terroir de San José de Ocoa',
      excerpt:
        'La altura, el clima y el suelo de Ocoa crean condiciones únicas para cultivar café de clase mundial. Conoce nuestro terruño.',
      image: '/images/hero-campo.jpg',
      category: 'Origen',
      date: '28 Feb 2024',
      readTime: '6 min',
    },
  ];

  return (
    <section id="blog" className="blog">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-eyebrow">Blog de Café</div>
          <h2 className="section-title">Historias, Consejos y Cultura del Café</h2>
          <p className="section-subtitle">
            Explora el fascinante mundo del café artesanal. Desde nuestras montañas
            hasta tu taza, te compartimos conocimiento y pasión por el café.
          </p>
        </div>

        {/* Grid de artículos */}
        <div className="blog__grid">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              className="blog-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="blog-card__image">
                <img src={article.image} alt={article.title} />
                <div className="blog-card__category">{article.category}</div>
              </div>

              <div className="blog-card__content">
                <div className="blog-card__meta">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime} lectura</span>
                </div>

                <h3 className="blog-card__title">{article.title}</h3>
                <p className="blog-card__excerpt">{article.excerpt}</p>

                <motion.button
                  className="blog-card__btn"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  Leer más
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA Newsletter */}
        <motion.div
          className="blog__newsletter"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="newsletter-content">
            <h3>Suscríbete a Nuestro Newsletter</h3>
            <p>
              Recibe artículos exclusivos, recetas, ofertas especiales y novedades
              directamente en tu correo.
            </p>

            <form className="newsletter-form">
              <input
                type="email"
                placeholder="tu@correo.com"
                className="newsletter-input"
                required
              />
              <motion.button
                type="submit"
                className="newsletter-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Suscribirme
              </motion.button>
            </form>

            <p className="newsletter-privacy">
              🔒 No spam. Puedes cancelar tu suscripción en cualquier momento.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
