import ScrollProgress from './components/ScrollProgress';
import WhatsAppButton from './components/WhatsAppButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import StatsSection from './sections/StatsSection';
import ProductSection from './sections/ProductSection';
import ProcesoSection from './sections/ProcesoSection';
import ClientesSection from './sections/ClientesSection';
import TestimoniosSection from './sections/TestimoniosSection';
import FounderSection from './sections/FounderSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <WhatsAppButton />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ProductSection />
        <ProcesoSection />
        <ClientesSection />
        <TestimoniosSection />
        <FounderSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
