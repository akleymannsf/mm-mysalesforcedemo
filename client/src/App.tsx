import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Demo from './components/Demo';
import Approach from './components/Approach';
import Testimonials from './components/Testimonials';
import ROI from './components/ROI';
import Features from './components/Features';
import Security from './components/Security';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-fg">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Demo />
        <Approach />
        <Testimonials />
        <ROI />
        <Features />
        <Security />
      </main>
      <Footer />
    </div>
  );
}
