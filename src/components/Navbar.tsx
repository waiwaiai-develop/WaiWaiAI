'use client';

import { useState, useEffect } from 'react';
import { MessageSquareText, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
    { href: '/', label: 'TOP' },
    { href: '/services', label: 'サービス' },
    { href: '/atp', label: 'AI顧問' },
    { href: '/blog', label: 'ブログ' },
    { href: '/company', label: '会社概要' },
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
        <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
            isScrolled ? 'py-3' : 'py-5'
        }`}>
            <div className={`absolute inset-0 transition-all duration-500 ${
                isScrolled
                    ? 'bg-white/90 shadow-[0_12px_36px_-28px_rgba(15,23,42,0.45)] backdrop-blur-xl'
                    : 'bg-white/70 backdrop-blur-md'
            }`} />

            <div className="relative z-10 mx-auto flex max-w-[1120px] items-center justify-between px-5 sm:px-6 lg:px-0">
                <Link href="/" className="relative z-50 group">
                    <img
                        src="/logo-horizontal.png"
                        alt="WaiWai AI"
                        className="h-9 w-auto object-contain transition-opacity group-hover:opacity-80 sm:h-10 md:h-11"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav aria-label="メインナビゲーション" className="hidden md:flex items-center">
                    <div className="flex items-center gap-10">
                        {navLinks.map(({ href, label }) => {
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className="text-sm font-bold tracking-wide text-slate-900 transition-colors duration-200 hover:text-blue-700"
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </div>
                </nav>

                <div className="hidden md:flex">
                    <a
                        href="/contact"
                        className="inline-flex min-h-12 items-center gap-3 rounded-lg bg-blue-700 px-6 text-sm font-bold tracking-wide text-white shadow-[0_14px_30px_-18px_rgba(0,45,150,0.85)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800"
                    >
                        <MessageSquareText className="h-5 w-5" />
                        無料で相談する
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    aria-label={isMobileMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
                    aria-expanded={isMobileMenuOpen}
                    className="relative z-50 rounded-lg border border-slate-200 bg-white p-2.5 text-slate-900 transition-transform hover:scale-105 md:hidden"
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
                        className="absolute left-0 top-0 z-40 flex min-h-screen w-full flex-col overflow-hidden bg-white px-6 pt-24 md:hidden"
                    >
                        <div className="relative z-10 flex flex-col space-y-5">
                            {navLinks.map(({ href, label }) => {
                                return (
                                    <Link
                                        key={href}
                                        href={href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex min-h-[64px] items-center rounded-xl px-4 py-5 text-2xl font-bold tracking-tight text-slate-900 transition-colors hover:bg-blue-50 hover:text-blue-700"
                                    >
                                        {label}
                                    </Link>
                                );
                            })}
                            <div className="pt-6 border-t border-white/30 mt-4">
                                <a
                                    href="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block w-full rounded-xl bg-blue-700 py-5 text-center text-xl font-bold text-white shadow-lg shadow-blue-500/30 transition-colors hover:bg-blue-800"
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
