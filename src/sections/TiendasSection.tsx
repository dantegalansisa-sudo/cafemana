import { motion } from 'framer-motion';
import './TiendasSection.css';

export default function TiendasSection() {
  const locations = [
    {
      id: 1,
      name: 'Tienda Principal - Ocoa',
      address: 'Calle Principal, San José de Ocoa',
      city: 'San José de Ocoa, República Dominicana',
      phone: '+1 (849) 856-9800',
      hours: 'Lun - Sáb: 8:00 AM - 6:00 PM',
      type: 'Tienda y Tostador',
    },
    {
      id: 2,
      name: 'Punto de Venta - Santo Domingo',
      address: 'Av. Abraham Lincoln #952',
      city: 'Santo Domingo, República Dominicana',
      phone: '+1 (849) 856-9800',
      hours: 'Lun - Dom: 9:00 AM - 8:00 PM',
      type: 'Punto de Venta',
    },
    {
      id: 3,
      name: 'Café Maná - Santiago',
      address: 'Calle del Sol #45',
      city: 'Santiago de los Caballeros',
      phone: '+1 (849) 856-9800',
      hours: 'Lun - Sáb: 7:00 AM - 7:00 PM',
      type: 'Cafetería y Venta',
    },
  ];

  return (
    <section id="tiendas" className="tiendas">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-eyebrow">Nuestras Tiendas</div>
          <h2 className="section-title">Visítanos en Todo el País</h2>
          <p className="section-subtitle">
            Encuentra Café Maná en nuestras tiendas físicas. Experimenta nuestro café
            fresco, conoce a nuestro equipo y lleva a casa el mejor café de montaña.
          </p>
        </div>

        {/* Grid de tiendas */}
        <div className="tiendas__grid">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              className="tienda-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="tienda-card__badge">{location.type}</div>

              <h3 className="tienda-card__name">{location.name}</h3>

              <div className="tienda-card__info">
                <div className="tienda-info-item">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div>
                    <p className="tienda-info-label">Dirección</p>
                    <p className="tienda-info-value">
                      {location.address}
                      <br />
                      {location.city}
                    </p>
                  </div>
                </div>

                <div className="tienda-info-item">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div>
                    <p className="tienda-info-label">Teléfono</p>
                    <p className="tienda-info-value">{location.phone}</p>
                  </div>
                </div>

                <div className="tienda-info-item">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <div>
                    <p className="tienda-info-label">Horario</p>
                    <p className="tienda-info-value">{location.hours}</p>
                  </div>
                </div>
              </div>

              <motion.button
                className="tienda-card__btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  window.open(
                    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      location.address + ', ' + location.city
                    )}`,
                    '_blank'
                  )
                }
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Cómo Llegar
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Mapa de Google Maps */}
        <motion.div
          className="tiendas__map"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="map-title">Nuestra Ubicación Principal en Ocoa</h3>

          <div className="map-container">
            <iframe
              title="Mapa de San José de Ocoa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60738.89876936371!2d-70.54463647832031!3d18.546527900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89d5f3e3a3d9%3A0x8b8f8f8f8f8f8f8f!2sSan%20Jos%C3%A9%20de%20Ocoa%2C%20Dominican%20Republic!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="500"
              style={{ border: 0, borderRadius: '20px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="map-info">
            <p className="map-info__text">
              📍 Nuestro tostador artesanal está ubicado en el corazón de San José
              de Ocoa, donde cultivamos y procesamos cada grano con dedicación.
            </p>
            <p className="map-info__hours">
              <strong>Visitas al Tostador:</strong> Agenda tu visita guiada llamando
              al +1 (849) 856-9800
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
