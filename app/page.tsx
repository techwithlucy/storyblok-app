import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import ProductDetails from '@/components/ProductDetails';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <Navbar />
      <Hero />
      <FeatureGrid />
      <ProductDetails />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
