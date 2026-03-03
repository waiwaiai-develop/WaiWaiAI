import Hero from '../components/Hero';
import PainPointsSection from '../components/PainPointsSection';
import ProcessSection from '../components/ProcessSection';
import Services from '../components/Services';
import CompanySection from '../components/CompanySection';
import NewsSection from '../components/NewsSection';
import ContactCTA from '../components/ContactCTA';
import ContactForm from '../components/ContactForm';

export default function TopPage() {
    return (
        <>
            <Hero />
            <PainPointsSection />
            <Services />
            <ProcessSection />
            <CompanySection />
            <NewsSection />
            <ContactCTA />
            <ContactForm />
        </>
    );
}
