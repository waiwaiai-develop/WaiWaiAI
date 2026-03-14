'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function FullScreenSections({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) return <>{children}</>;

  return (
    <div className="mobile-snap-container">
      {children}
      
      {/* セクションインジケーター */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSection === i 
                ? 'bg-blue-500 w-2 h-6' 
                : 'bg-slate-300'
            }`}
            animate={{ 
              scale: currentSection === i ? 1.2 : 1,
              backgroundColor: currentSection === i ? '#3b82f6' : '#cbd5e1'
            }}
          />
        ))}
      </div>

      <style jsx global>{`
        @media (max-width: 767px) {
          .mobile-snap-container {
            scroll-snap-type: y mandatory;
            overflow-y: scroll;
            height: 100vh;
            scroll-behavior: smooth;
          }
          
          .mobile-snap-container > section {
            scroll-snap-align: start;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
