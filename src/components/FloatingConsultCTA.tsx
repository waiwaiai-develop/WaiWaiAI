'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MessageSquareText } from 'lucide-react';

export default function FloatingConsultCTA() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [120, 260], [0, 1]);
  const y = useTransform(scrollY, [120, 260], [18, 0]);

  if (pathname === '/' || pathname === '/booking' || pathname === '/contact') {
    return null;
  }

  return (
    <motion.div
      style={{ opacity, y }}
      className="fixed bottom-3 left-3 right-3 z-50 sm:left-auto sm:right-6 sm:bottom-6"
      aria-label="無料相談の追尾CTA"
    >
      <Link
        href="/contact"
        className="mx-auto flex min-h-12 max-w-[320px] items-center justify-center gap-2 rounded-full bg-blue-700 px-4 text-sm font-bold text-white shadow-[0_20px_54px_-22px_rgba(0,45,150,0.95)] ring-1 ring-white/30 transition hover:-translate-y-0.5 hover:bg-blue-800 sm:mx-0 sm:min-h-14 sm:min-w-[248px] sm:gap-3 sm:px-5"
      >
        <MessageSquareText className="h-5 w-5" />
        <span>相談・問い合わせ</span>
        <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.div>
  );
}
