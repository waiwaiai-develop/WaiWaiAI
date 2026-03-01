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
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-white/80 backdrop-blur-xl border-slate-200 shadow-sm py-3' : 'bg-transparent border-transparent py-6'}`}>
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3 relative z-50 group">
                    <div className="bg-slate-50 p-1.5 rounded-xl border border-slate-200 group-hover:bg-slate-100 transition-colors backdrop-blur-md">
                        <img src={logo} alt="WaiWai AI Logo" className="w-8 h-8 object-contain" />
                    </div>
                    <span className="text-2xl font-black tracking-tighter text-slate-900 leading-none">
                        WaiWai <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">AI</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link to="/services" className={`text-sm font-bold tracking-wide transition-all ${location.pathname === '/services' ? 'text-sky-600' : 'text-slate-600 hover:text-slate-900'}`}>ソリューション</Link>
                    <Link to="/cases" className={`text-sm font-bold tracking-wide transition-all ${location.pathname === '/cases' ? 'text-sky-600' : 'text-slate-600 hover:text-slate-900'}`}>実績と課題解決</Link>
                    <Link to="/company" className={`text-sm font-bold tracking-wide transition-all ${location.pathname === '/company' ? 'text-sky-600' : 'text-slate-600 hover:text-slate-900'}`}>会社概要</Link>
                    <Link to="/#contact" className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-sm hover:bg-sky-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 transform">
                        相談する
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button className="md:hidden text-slate-900 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                        className="md:hidden bg-white/95 backdrop-blur-3xl border-b border-slate-200 shadow-2xl absolute w-full left-0 top-full h-screen"
                    >
                        <div className="flex flex-col px-6 py-6 space-y-5">
                            <div className="container mx-auto px-4 pt-12 pb-8 flex flex-col gap-8">
                                <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-slate-900 tracking-tight">ソリューション</Link>
                                <Link to="/cases" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-slate-900 tracking-tight">実績と課題解決</Link>
                                <Link to="/company" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-bold text-slate-900 tracking-tight">会社概要</Link>
                                <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-8 px-6 py-4 rounded-xl bg-slate-900 text-white font-bold text-xl text-center shadow-lg">
                                    相談する
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
