import { CartProvider } from './context/CartContext';
import ScrollProgress from './components/ScrollProgress';
import WhatsAppButton from './components/WhatsAppButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import StatsSection from './sections/StatsSection';
import ProductSection from './sections/ProductSection';
import TiendaSection from './sections/TiendaSection';
import ProcesoSection from './sections/ProcesoSection';
import ClientesSection from './sections/ClientesSection';
import TestimoniosSection from './sections/TestimoniosSection';
import BlogSection from './sections/BlogSection';
import TiendasSection from './sections/TiendasSection';
import FounderSection from './sections/FounderSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <CartProvider>
      <ScrollProgress />
      <WhatsAppButton />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ProductSection />
        <TiendaSection />
        <ProcesoSection />
        <ClientesSection />
        <TestimoniosSection />
        <BlogSection />
        <TiendasSection />
        <FounderSection />
        <ContactSection />
      </main>
      <Footer />
    </CartProvider>
  );
}
