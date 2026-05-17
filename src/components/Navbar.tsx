'use client';

import { useState, useEffect, type MouseEvent } from 'react';
import { MessageSquareText, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NaluView = 'home' | 'company';

const navLinks = [
    { href: '/services', label: 'サービス' },
    { href: '/cases', label: '導入事例' },
    { href: '/atp', label: 'AI活用メソッド' },
    { href: '/company', label: '会社概要' },
    { href: '/blog', label: 'お知らせ' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeView, setActiveView] = useState<NaluView>('home');

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleViewChange = (event: Event) => {
            const nextView = (event as CustomEvent<{ view?: NaluView }>).detail?.view;
            if (nextView === 'home' || nextView === 'company') {
                setActiveView(nextView);
            }
        };

        window.addEventListener('waiwai:nalu-view-change', handleViewChange);
        return () => window.removeEventListener('waiwai:nalu-view-change', handleViewChange);
    }, []);

    useEffect(() => {
        if (pathname !== '/') {
            setActiveView(pathname === '/company' ? 'company' : 'home');
        }
    }, [pathname]);

    const dispatchNaluView = (view: NaluView) => {
        setActiveView(view);
        window.dispatchEvent(new CustomEvent('waiwai:nalu-view-change', { detail: { view } }));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const isTopPageNow = () => {
        if (typeof window === 'undefined') return pathname === '/';
        return window.location.pathname === '/';
    };

    const isModifiedClick = (event: MouseEvent<HTMLAnchorElement>) =>
        event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;

    const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
        if (isModifiedClick(event)) return;

        if (isTopPageNow()) {
            event.preventDefault();
            setIsMobileMenuOpen(false);
            dispatchNaluView('home');
            return;
        }
    };

    const handleNavClick = (href: string, event: MouseEvent<HTMLAnchorElement>) => {
        if (isModifiedClick(event)) return;

        if (href === '/company' && isTopPageNow()) {
            event.preventDefault();
            setIsMobileMenuOpen(false);
            dispatchNaluView('company');
            return;
        }

        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
            isScrolled ? 'py-2' : 'py-2'
        }`}>
            <div className={`absolute inset-0 transition-all duration-500 ${
                isScrolled
                    ? 'bg-white/90 shadow-[0_12px_36px_-28px_rgba(15,23,42,0.45)] backdrop-blur-xl'
                    : 'bg-white/84 backdrop-blur-md'
            }`} />

            <div className="relative z-10 mx-auto flex w-full items-center justify-between gap-3 px-6 xl:px-7">
                <Link href="/" onClick={handleLogoClick} className="group relative z-50 flex min-w-0 shrink-0 items-center">
                    <img
                        src="/logo-horizontal.png"
                        alt="WaiWai AI"
                        className="h-9 w-auto object-contain transition-opacity group-hover:opacity-80 sm:h-10 md:h-11"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav aria-label="メインナビゲーション" className="hidden shrink-0 items-center lg:flex">
                    <div className="flex items-center gap-7 2xl:gap-9">
                        {navLinks.map(({ href, label }) => {
                            const isActive = href === '/company' && ((pathname === '/' && activeView === 'company') || pathname === '/company');

                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={(event) => handleNavClick(href, event)}
                                    className={`relative whitespace-nowrap text-[13px] font-bold tracking-wide transition-colors duration-200 hover:text-[#0f7fa7] 2xl:text-sm ${
                                        isActive ? 'text-[#0f7fa7]' : 'text-[#172033]'
                                    }`}
                                >
                                    {label}
                                    {isActive && (
                                        <motion.span
                                            layoutId="nalu-nav-active"
                                            className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full bg-[#0f7fa7]"
                                            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </nav>

                <div className="hidden shrink-0 items-center lg:flex">
                    <a
                        href="/contact"
                        className="inline-flex min-h-[48px] items-center gap-2 rounded-2xl bg-[#0f7fa7] px-4 text-xs font-bold tracking-wide text-white shadow-[0_14px_30px_-18px_rgba(15,127,167,0.85)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0d6d90] 2xl:gap-3 2xl:px-6 2xl:text-sm"
                    >
                        <MessageSquareText className="h-5 w-5 shrink-0" />
                        無料で相談してみる
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    aria-label={isMobileMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
                    aria-expanded={isMobileMenuOpen}
                    className="relative z-50 rounded-lg border border-slate-200 bg-white p-2.5 text-slate-900 transition-transform hover:scale-105 lg:hidden"
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
                        className="absolute left-0 top-0 z-40 flex min-h-screen w-full flex-col overflow-hidden bg-white px-6 pt-24 lg:hidden"
                    >
                        <div className="relative z-10 flex flex-col space-y-5">
                            <p className="px-4 text-sm font-bold text-slate-500">AIで、ワイワイ働ける未来へ</p>
                            {navLinks.map(({ href, label }) => {
                                const isActive = href === '/company' && ((pathname === '/' && activeView === 'company') || pathname === '/company');

                                return (
                                    <Link
                                        key={href}
                                        href={href}
                                        onClick={(event) => handleNavClick(href, event)}
                                        className={`flex min-h-[64px] items-center rounded-xl px-4 py-5 text-2xl font-bold tracking-tight transition-colors hover:bg-blue-50 hover:text-blue-700 ${
                                            isActive ? 'bg-blue-50 text-[#0f7fa7]' : 'text-slate-900'
                                        }`}
                                    >
                                        {label}
                                    </Link>
                                );
                            })}
                            <div className="pt-6 border-t border-white/30 mt-4">
                                <a
                                    href="/contact"
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                    }}
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
