import Hero from './components/Hero';
import Pillars from './components/Pillars';
import Testimonials from './components/Testimonials';
import BeforeAfter from './components/BeforeAfter';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import DeadlineFunnel from './components/DeadlineFunnel';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A1628]">
      <Hero />
      <Pillars />
      <Testimonials />
      <BeforeAfter />
      <Pricing />
      <FAQ />
      <DeadlineFunnel />
      <Footer />
    </div>
  );
}
