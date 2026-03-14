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

    const navLinks = [
        { href: '/services', label: 'ソリューション' },
        { href: '/cases', label: '導入実績' },
        { href: '/company', label: '会社概要' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
                ? 'bg-[#0f1115]/80 backdrop-blur-xl border-b border-white/[0.06] py-3'
                : 'bg-transparent border-b border-transparent py-5'
        }`}>
            <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
                <Link href="/" className="relative z-50 group">
                    <img
                        src="/logo-horizontal.png"
                        alt="WaiWai AI"
                        className="h-7 sm:h-8 w-auto object-contain group-hover:opacity-80 transition-opacity brightness-0 invert"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                pathname === link.href
                                    ? 'text-white bg-white/[0.06]'
                                    : 'text-[#8b8b9e] hover:text-white hover:bg-white/[0.04]'
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex">
                    <Link
                        href="/#contact"
                        className="px-5 py-2 rounded-lg text-sm font-semibold bg-[#7c5bf5] text-white hover:bg-[#6b4ae4] transition-all"
                    >
                        お問い合わせ
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 relative z-50 rounded-lg transition-all text-white/70 hover:text-white hover:bg-white/[0.06]"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden absolute top-0 left-0 w-full h-screen bg-[#0f1115] z-40 flex flex-col pt-20"
                    >
                        <div className="flex flex-col px-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-bold text-white/80 hover:text-white py-4 border-b border-white/[0.06] transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-6">
                                <Link
                                    href="/#contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block w-full py-4 rounded-xl bg-[#7c5bf5] text-white font-semibold text-lg text-center"
                                >
                                    お問い合わせ
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
