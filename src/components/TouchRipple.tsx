'use client';

import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TouchRipple() {
  const createRipple = useCallback((e: TouchEvent | MouseEvent) => {
    const target = e.target as HTMLElement;
    
    // ボタンやリンクのみに適用
    if (!target.closest('button, a, [role="button"]')) return;
    
    const rect = target.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const y = 'touches' in e ? e.touches[0].clientY : e.clientY;
    
    const ripple = document.createElement('span');
    ripple.className = 'touch-ripple';
    ripple.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: 20px;
      height: 20px;
      margin: -10px 0 0 -10px;
      background: radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      animation: ripple-expand 0.6s ease-out forwards;
    `;
    
    document.body.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  }, []);

  useEffect(() => {
    // タッチデバイスのみ有効
    const isTouch = 'ontouchstart' in window;
    if (!isTouch) return;

    document.addEventListener('touchstart', createRipple, { passive: true });
    
    // CSSアニメーションを追加
    const style = document.createElement('style');
    style.textContent = `
      @keyframes ripple-expand {
        0% {
          transform: scale(1);
          opacity: 1;
        }
        100% {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.removeEventListener('touchstart', createRipple);
      style.remove();
    };
  }, [createRipple]);

  return null;
}
