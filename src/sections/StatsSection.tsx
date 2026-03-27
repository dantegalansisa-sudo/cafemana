import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './StatsSection.css';

function AnimatedCounter({ value, suffix = '', label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="stat-item"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="stat-item__value"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {value}{suffix}
      </motion.div>
      <div className="stat-item__label">{label}</div>
    </motion.div>
  );
}

export default function StatsSection() {
  const stats = [
    { value: 100, suffix: '%', label: 'Café Natural' },
    { value: 2000, suffix: 'm+', label: 'Altura de Cultivo' },
    { value: 1, suffix: '', label: 'San José de Ocoa' },
    { value: 100, suffix: '%', label: 'Satisfacción' },
  ];

  return (
    <section className="stats">
      <div className="container">
        <div className="stats__grid">
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
