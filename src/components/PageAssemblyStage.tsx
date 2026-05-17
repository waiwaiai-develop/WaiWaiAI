'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

type PageAssemblyStageProps = {
  children: ReactNode;
};

const assemblyEase = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function PageAssemblyStage({ children }: PageAssemblyStageProps) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <main className="flex-grow">{children}</main>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={pathname}
        className="flex-grow"
        initial={{ opacity: 0.92, scale: 0.992, filter: 'blur(8px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, scale: 0.99, filter: 'blur(10px)' }}
        transition={{ duration: 0.28, ease: assemblyEase }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
