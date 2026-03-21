'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
    { href: '/#services', label: 'サービス' },
    { href: '/atp', label: 'AI顧問' },
    { href: '/blog', label: 'ブログ' },
    { href: '/products', label: '商品' },
    { href: '/#company', label: '会社概要' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                isScrolled
                    ? 'glass-strong shadow-[0_2px_24px_0_rgba(0,0,0,0.10),0_1px_0_0_rgba(255,255,255,0.3)_inset]'
                    : 'glass-subtle'
            }`} />

            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between max-w-7xl relative z-10">
                <Link href="/" className="relative z-50 group">
                    <img
                        src="/logo-horizontal.png"
                        alt="WaiWai AI"
                        className="h-10 sm:h-12 md:h-14 w-auto object-contain group-hover:opacity-80 transition-opacity drop-shadow-sm"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav aria-label="メインナビゲーション" className="hidden md:flex items-center">
                    <div className="relative flex items-center gap-1 px-2 py-1.5 rounded-full glass border border-white/50 overflow-hidden">
                        {/* light sweep shimmer */}
                        <div className="glass-shimmer pointer-events-none" />
                        {navLinks.map(({ href, label }) => {
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className="relative z-10 px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 text-slate-700 hover:text-blue-600 hover:bg-white/50"
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </div>
                </nav>

                <div className="hidden md:flex">
                    <a
                        href="/#contact"
                        className="px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 bg-blue-600 text-white
                            shadow-[0_4px_16px_0_rgba(37,99,235,0.4)]
                            hover:bg-blue-700 hover:shadow-[0_6px_20px_rgba(37,99,235,0.5)] hover:-translate-y-0.5
                            animate-[cta-pulse_3s_ease-in-out_infinite]"
                    >
                        無料で相談する
                    </a>
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
                        className="md:hidden absolute top-0 left-0 w-full min-h-screen glass-strong z-40 flex flex-col pt-24 px-6 overflow-hidden"
                    >
                        {/* noise texture overlay */}
                        <div
                            className="noise-overlay pointer-events-none"
                            aria-hidden="true"
                        />
                        <div className="relative z-10 flex flex-col space-y-5">
                            {navLinks.map(({ href, label }) => {
                                return (
                                    <Link
                                        key={href}
                                        href={href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-2xl font-bold text-slate-800 tracking-tight hover:text-blue-600 transition-colors py-5 px-4 rounded-2xl hover:bg-white/30 min-h-[64px] flex items-center"
                                    >
                                        {label}
                                    </Link>
                                );
                            })}
                            <div className="pt-6 border-t border-white/30 mt-4">
                                <a
                                    href="/#contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block w-full py-5 rounded-2xl bg-blue-600 text-white font-bold text-xl text-center shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-colors"
                                >
                                    無料で相談する
                                </a>
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>

        </header>
    );
}
