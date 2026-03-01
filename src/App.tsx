import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import TopPage from './pages/TopPage';
import ServicesPage from './pages/services/index';
import CasesPage from './pages/cases/index';
import CompanyPage from './pages/CompanyPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-slate-900 selection:bg-sky-500/20 font-sans flex flex-col relative overflow-hidden">
        {/* Global Ambient Intense Backgrounds - Light Clean Theme */}
        <div className="fixed inset-0 pointer-events-none z-[-1]">
          {/* Base white */}
          <div className="absolute inset-0 bg-white"></div>

          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-sky-100/50 rounded-full filter blur-[150px] animate-blob"></div>
          <div className="absolute top-[30%] right-[-20%] w-[40%] h-[40%] bg-indigo-50/50 rounded-full filter blur-[150px] animate-blob" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] bg-blue-50/50 rounded-full filter blur-[150px] animate-blob" style={{ animationDelay: "4s" }}></div>
          <div className="absolute inset-0 bg-grid-light opacity-50"></div>
        </div>

        <Navbar />
        <main className="flex-grow z-10">
          <Routes>
            <Route path="/" element={<TopPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/company" element={<CompanyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
