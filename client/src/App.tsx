import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Demo from './components/Demo';
import Pillars from './components/Pillars';
import Testimonials from './components/Testimonials';
import ROI from './components/ROI';
import Features from './components/Features';
import Security from './components/Security';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-brand-ink">
      <Navbar />
      <main>
        <Hero />
        <Demo />
        <Pillars />
        <Testimonials />
        <ROI />
        <Features />
        <Security />
      </main>
      <Footer />
    </div>
  );
}
