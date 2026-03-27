import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useCart, Product } from '../context/CartContext';
import './TiendaSection.css';

export default function TiendaSection() {
  const { addToCart } = useCart();
  const [addedProduct, setAddedProduct] = useState<string | null>(null);

  const products: Product[] = [
    {
      id: 'bolsa-250g',
      name: 'Café Maná Clásico',
      price: 450,
      weight: '250g',
      description: 'Tostado medio, perfecto para tu día a día',
      image: '/images/carrito.png',
    },
    {
      id: 'bolsa-500g',
      name: 'Café Maná Premium',
      price: 850,
      weight: '500g',
      description: 'Tostado artesanal, notas de chocolate y caramelo',
      image: '/images/carrito.png',
    },
    {
      id: 'bolsa-1kg',
      name: 'Café Maná Familiar',
      price: 1600,
      weight: '1kg',
      description: 'El mejor valor para toda la familia',
      image: '/images/carrito.png',
    },
    {
      id: 'bolsa-especial',
      name: 'Edición Especial Ocoa',
      price: 950,
      weight: '500g',
      description: 'Cosecha limitada de alta montaña',
      image: '/images/carrito.png',
    },
    {
      id: 'bolsa-organico',
      name: 'Café Orgánico Certificado',
      price: 1100,
      weight: '500g',
      description: '100% orgánico, certificación internacional',
      image: '/images/carrito.png',
    },
    {
      id: 'bolsa-regalo',
      name: 'Pack Regalo Gourmet',
      price: 2400,
      weight: '3x250g',
      description: 'Tres variedades en presentación especial',
      image: '/images/carrito.png',
    },
  ];

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setAddedProduct(product.id);
    setTimeout(() => setAddedProduct(null), 2000);
  };

  return (
    <section id="tienda" className="tienda">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-eyebrow">Nuestra Tienda</div>
          <h2 className="section-title">Compra Café Maná Online</h2>
          <p className="section-subtitle">
            Selecciona tu presentación favorita y recibe café fresco directamente
            del tostador a tu hogar. Envíos a todo el país.
          </p>
        </div>

        {/* Productos Grid */}
        <div className="tienda__grid">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="product-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="product-card__image">
                <img src={product.image} alt={product.name} />
                <div className="product-card__badge">{product.weight}</div>
              </div>

              <div className="product-card__content">
                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__description">{product.description}</p>

                <div className="product-card__footer">
                  <div className="product-card__price">
                    RD${product.price.toLocaleString()}
                  </div>

                  <motion.button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <AnimatePresence mode="wait">
                      {addedProduct === product.id ? (
                        <motion.span
                          key="added"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="add-to-cart-btn__success"
                        >
                          ✓ Agregado
                        </motion.span>
                      ) : (
                        <motion.span
                          key="add"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="add-to-cart-btn__text"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <circle cx="9" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                          </svg>
                          Agregar
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </div>

              {/* Partículas de animación cuando se agrega */}
              <AnimatePresence>
                {addedProduct === product.id && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="particle"
                        initial={{
                          opacity: 1,
                          x: 0,
                          y: 0,
                          scale: 1,
                        }}
                        animate={{
                          opacity: 0,
                          x: Math.cos((i * Math.PI) / 3) * 100,
                          y: Math.sin((i * Math.PI) / 3) * 100,
                          scale: 0,
                        }}
                        transition={{ duration: 0.8 }}
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA de envío */}
        <motion.div
          className="shipping-banner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="shipping-banner__content">
            <span className="shipping-banner__icon">🚚</span>
            <div>
              <h3>Envío Gratis</h3>
              <p>En compras mayores a RD$2,000 • Entrega en 3-5 días hábiles</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
