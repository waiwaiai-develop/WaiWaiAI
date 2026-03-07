import Hero from '@/components/Hero';
import ProductsSection from '@/components/ProductsSection';
import Services from '@/components/Services';
import NewsSection from '@/components/NewsSection';
import ContactCTA from '@/components/ContactCTA';
import ContactForm from '@/components/ContactForm';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductsSection />
      <Services />
      <NewsSection />
      <ContactCTA />
      <ContactForm />
    </>
  );
}
