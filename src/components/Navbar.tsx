'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            isScrolled ? 'py-3' : 'py-5'
        }`}>
            {/* ガラス背景 */}
            <div className={`absolute inset-0 transition-all duration-500 ${
                isScrolled ? 'glass-strong' : 'glass-subtle'
            }`} />
            
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between max-w-7xl relative z-10">
                <Link href="/" className="relative z-50 group">
                    <img 
                        src="/logo-horizontal.png" 
                        alt="WaiWai AI" 
                        className="h-10 sm:h-12 md:h-14 w-auto object-contain group-hover:opacity-80 transition-opacity drop-shadow-sm" 
                    />
                </Link>

                {/* Desktop Menu */}
                <nav aria-label="メインナビゲーション" className="hidden md:flex items-center">
                    <div className="flex items-center gap-1 px-2 py-1.5 rounded-full glass border border-white/50">
                        <Link 
                            href="/services" 
                            className={`px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                                pathname === '/services' 
                                    ? 'bg-white/70 text-blue-600 shadow-sm' 
                                    : 'text-slate-700 hover:text-blue-600 hover:bg-white/50'
                            }`}
                        >
                            ソリューション
                        </Link>
                        <Link 
                            href="/cases" 
                            className={`px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                                pathname === '/cases' 
                                    ? 'bg-white/70 text-blue-600 shadow-sm' 
                                    : 'text-slate-700 hover:text-blue-600 hover:bg-white/50'
                            }`}
                        >
                            実績と課題解決
                        </Link>
                        <Link 
                            href="/company" 
                            className={`px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                                pathname === '/company' 
                                    ? 'bg-white/70 text-blue-600 shadow-sm' 
                                    : 'text-slate-700 hover:text-blue-600 hover:bg-white/50'
                            }`}
                        >
                            会社概要
                        </Link>
                    </div>
                </nav>

                <div className="hidden md:flex">
                    <Link 
                        href="/#contact" 
                        className="px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 bg-blue-600 text-white shadow-[0_4px_16px_0_rgba(37,99,235,0.4)] hover:bg-blue-700 hover:shadow-[0_6px_20px_rgba(37,99,235,0.5)] hover:-translate-y-0.5"
                    >
                        無料で相談する
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    aria-label={isMobileMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
                    aria-expanded={isMobileMenuOpen}
                    className="md:hidden p-2.5 relative z-50 glass rounded-xl text-slate-900 hover:scale-105 transition-transform"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.nav
                        aria-label="モバイルナビゲーション"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden absolute top-0 left-0 w-full min-h-screen glass-strong z-40 flex flex-col pt-24 px-6"
                    >
                        <div className="flex flex-col space-y-4">
                            <Link 
                                href="/services" 
                                onClick={() => setIsMobileMenuOpen(false)} 
                                className="text-2xl font-bold text-slate-800 tracking-tight hover:text-blue-600 transition-colors p-4 rounded-2xl hover:bg-white/30"
                            >
                                ソリューション
                            </Link>
                            <Link 
                                href="/cases" 
                                onClick={() => setIsMobileMenuOpen(false)} 
                                className="text-2xl font-bold text-slate-800 tracking-tight hover:text-blue-600 transition-colors p-4 rounded-2xl hover:bg-white/30"
                            >
                                実績と課題解決
                            </Link>
                            <Link 
                                href="/company" 
                                onClick={() => setIsMobileMenuOpen(false)} 
                                className="text-2xl font-bold text-slate-800 tracking-tight hover:text-blue-600 transition-colors p-4 rounded-2xl hover:bg-white/30"
                            >
                                会社概要
                            </Link>
                            <div className="pt-6 border-t border-white/30 mt-4">
                                <Link 
                                    href="/#contact" 
                                    onClick={() => setIsMobileMenuOpen(false)} 
                                    className="block w-full py-5 rounded-2xl bg-blue-600 text-white font-bold text-xl text-center shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-colors"
                                >
                                    無料で相談する
                                </Link>
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}