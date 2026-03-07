import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import Services from '@/components/Services';
import CaseHighlights from '@/components/CaseHighlights';
import ProductsSection from '@/components/ProductsSection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Services />
      <CaseHighlights />
      <ProductsSection />
      <ContactSection />
    </>
  );
}
