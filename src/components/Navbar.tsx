import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-2xl border-b border-slate-200/50 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)] py-3' : 'bg-transparent border-b border-transparent py-6'}`}>
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between max-w-7xl">
                <Link to="/" className="flex items-center gap-3 relative z-50 group">
                    <div className="bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] p-1.5 rounded-xl border border-slate-100 group-hover:shadow-[0_4px_15px_-4px_rgba(59,130,246,0.2)] transition-all duration-300 transform group-hover:-translate-y-0.5">
                        <img src={logo} alt="WaiWai AI Logo" className="w-7 h-7 object-contain" />
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-slate-900 leading-none group-hover:text-blue-600 transition-colors">
                        WaiWai AI
                    </span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8 bg-white/40 backdrop-blur-md border border-white/60 px-6 py-2 rounded-full shadow-sm">
                    <Link to="/services" className={`text-sm font-bold tracking-wide transition-all hover:text-blue-600 ${location.pathname === '/services' ? 'text-blue-600' : 'text-slate-600'}`}>ソリューション</Link>
                    <Link to="/cases" className={`text-sm font-bold tracking-wide transition-all hover:text-blue-600 ${location.pathname === '/cases' ? 'text-blue-600' : 'text-slate-600'}`}>実績と課題解決</Link>
                    <Link to="/company" className={`text-sm font-bold tracking-wide transition-all hover:text-blue-600 ${location.pathname === '/company' ? 'text-blue-600' : 'text-slate-600'}`}>会社概要</Link>
                </nav>

                <div className="hidden md:flex">
                    <Link to="/#contact" className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-sm tracking-wide hover:bg-blue-600 transition-all duration-300 shadow-[0_4px_14px_0_rgba(15,23,42,0.39)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.23)] hover:-translate-y-0.5 transform">
                        相談する
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-slate-900 p-2 relative z-50 bg-white shadow-sm border border-slate-100 rounded-xl" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X className="w-5 h-5 text-slate-600" /> : <Menu className="w-5 h-5 text-slate-600" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden absolute top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-xl border-b border-slate-200 z-40 flex flex-col pt-24"
                    >
                        <div className="flex flex-col px-8 space-y-8">
                            <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black text-slate-800 tracking-tight hover:text-blue-600 transition-colors">ソリューション</Link>
                            <Link to="/cases" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black text-slate-800 tracking-tight hover:text-blue-600 transition-colors">実績と課題解決</Link>
                            <Link to="/company" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-black text-slate-800 tracking-tight hover:text-blue-600 transition-colors">会社概要</Link>
                            <div className="pt-8 border-t border-slate-100">
                                <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full py-5 rounded-2xl bg-blue-600 text-white font-bold text-xl text-center shadow-lg shadow-blue-500/30">
                                    無料で相談する
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
