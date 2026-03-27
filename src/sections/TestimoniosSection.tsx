import { motion } from 'framer-motion';
import './TestimoniosSection.css';

export default function TestimoniosSection() {
  const videos = [
    { src: '/images/testimonio-01.mp4', poster: '', name: 'Testimonio 1' },
    { src: '/images/testimonio-02.mp4', poster: '', name: 'Testimonio 2' },
    { src: '/images/testimonio-03.mp4', poster: '', name: 'Testimonio 3' },
    { src: '/images/testimonio-04.mp4', poster: '', name: 'Testimonio 4' },
  ];

  return (
    <section id="testimonios" className="testimonios">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-eyebrow">Testimonios</div>
          <h2 className="section-title">Lo Que Dicen Nuestros Clientes</h2>
          <p className="section-subtitle">
            Escucha directamente de quienes han probado Café Maná.
            Cada video cuenta una historia única de sabor y calidad.
          </p>
        </div>

        {/* Grid de videos */}
        <div className="testimonios__grid">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="testimonio-video"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="testimonio-video__wrap">
                <video
                  className="testimonio-video__player"
                  controls
                  preload="metadata"
                  poster={video.poster}
                >
                  <source src={video.src} type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
