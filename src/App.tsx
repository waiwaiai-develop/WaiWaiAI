import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import TopPage from './pages/TopPage';
import ServicesPage from './pages/services/index';
import CasesPage from './pages/cases/index';
import CompanyPage from './pages/CompanyPage';
import ScrollToTop from './components/ScrollToTop';

// Legal Pages
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import CommercialAct from './pages/legal/CommercialAct';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-slate-900 selection:bg-sky-500/20 font-sans flex flex-col relative overflow-hidden">
        {/* Clean Global Background */}
        <div className="fixed inset-0 pointer-events-none z-[-1] bg-white"></div>

        <Navbar />
        <main className="flex-grow z-10">
          <Routes>
            <Route path="/" element={<TopPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/company" element={<CompanyPage />} />

            {/* Legal Routes */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/commercial-act" element={<CommercialAct />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
