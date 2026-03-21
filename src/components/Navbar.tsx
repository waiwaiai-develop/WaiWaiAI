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
            isScrolled ? 'py-3 bg-stone-950/95 backdrop-blur-md border-b border-stone-800/50' : 'py-5 bg-transparent'
        }`}>
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between max-w-7xl relative z-10">
                <Link href="/" className="relative z-50 group">
                    <img
                        src="/logo-horizontal.png"
                        alt="WaiWai AI"
                        className="h-10 sm:h-12 md:h-14 w-auto object-contain brightness-0 invert group-hover:opacity-80 transition-opacity"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav aria-label="メインナビゲーション" className="hidden md:flex items-center gap-1">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="px-4 py-2 text-sm font-medium tracking-wide text-stone-400 hover:text-white transition-colors duration-200"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex">
                    <a
                        href="/#contact"
                        className="px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-200 bg-amber-500 text-stone-950 hover:bg-amber-400"
                    >
                        無料で相談する
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    aria-label={isMobileMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
                    aria-expanded={isMobileMenuOpen}
                    className="md:hidden p-2.5 relative z-50 text-white hover:opacity-70 transition-opacity"
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
                        className="md:hidden absolute top-0 left-0 w-full min-h-screen bg-stone-950 z-40 flex flex-col pt-24 px-6"
                    >
                        <div className="flex flex-col space-y-2">
                            {navLinks.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-bold text-stone-300 tracking-tight hover:text-amber-500 transition-colors duration-200 p-4"
                                >
                                    {label}
                                </Link>
                            ))}
                            <div className="pt-6 border-t border-stone-800 mt-4">
                                <a
                                    href="/#contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block w-full py-5 rounded-2xl bg-amber-500 text-stone-950 font-bold text-xl text-center hover:bg-amber-400 transition-colors duration-200"
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
