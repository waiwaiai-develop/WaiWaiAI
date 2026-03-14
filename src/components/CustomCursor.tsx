'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);
    const trailRefs = useRef<HTMLDivElement[]>([]);
    const rippleContainerRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(true);
    const mousePos = useRef({ x: 0, y: 0 });
    const cursorPos = useRef({ x: 0, y: 0 });
    const trailPositions = useRef<{ x: number; y: number }[]>([]);

    const TRAIL_COUNT = 6;

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const createRipple = useCallback((x: number, y: number) => {
        if (!rippleContainerRef.current) return;
        const ripple = document.createElement('div');
        ripple.className = 'cursor-ripple';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        rippleContainerRef.current.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    }, []);

    useEffect(() => {
        if (isMobile) return;

        // Respect reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        // Initialize trail positions
        trailPositions.current = Array(TRAIL_COUNT).fill({ x: 0, y: 0 });

        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a, button, [role="button"], input, textarea, select, [data-cursor-hover]')) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a, button, [role="button"], input, textarea, select, [data-cursor-hover]')) {
                setIsHovering(false);
            }
        };

        const handleClick = (e: MouseEvent) => {
            createRipple(e.clientX, e.clientY);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);
        document.addEventListener('click', handleClick);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);
        document.documentElement.addEventListener('mouseenter', handleMouseEnter);

        let animationId: number;
        const animate = () => {
            // Smooth cursor follow
            const ease = 0.15;
            cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * ease;
            cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * ease;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px)`;
            }

            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px)`;
            }

            // Trail animation - each follows the previous with delay
            for (let i = 0; i < TRAIL_COUNT; i++) {
                const prev = i === 0 ? cursorPos.current : trailPositions.current[i - 1];
                const trailEase = 0.1 - i * 0.01;
                trailPositions.current[i] = {
                    x: trailPositions.current[i].x + (prev.x - trailPositions.current[i].x) * trailEase,
                    y: trailPositions.current[i].y + (prev.y - trailPositions.current[i].y) * trailEase,
                };

                if (trailRefs.current[i]) {
                    trailRefs.current[i].style.transform = `translate(${trailPositions.current[i].x}px, ${trailPositions.current[i].y}px)`;
                }
            }

            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
            document.removeEventListener('click', handleClick);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
            document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
            cancelAnimationFrame(animationId);
        };
    }, [isMobile, isVisible, createRipple]);

    if (isMobile) return null;

    return (
        <>
            <style jsx global>{`
                * { cursor: none !important; }

                .cursor-ripple {
                    position: fixed;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent);
                    pointer-events: none;
                    z-index: 9999;
                    transform: translate(-50%, -50%);
                    animation: ripple-expand 0.6s ease-out forwards;
                }

                @keyframes ripple-expand {
                    0% { width: 20px; height: 20px; opacity: 1; }
                    100% { width: 80px; height: 80px; opacity: 0; }
                }

                @media (prefers-reduced-motion: reduce) {
                    * { cursor: auto !important; }
                }
            `}</style>

            {/* Main cursor ring */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
                style={{
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                }}
            >
                <div
                    className="rounded-full border-2 transition-all duration-300 ease-out"
                    style={{
                        width: isHovering ? 48 : 32,
                        height: isHovering ? 48 : 32,
                        borderColor: isHovering ? 'rgba(14, 165, 233, 0.8)' : 'rgba(59, 130, 246, 0.6)',
                        backgroundColor: isHovering ? 'rgba(59, 130, 246, 0.08)' : 'transparent',
                        boxShadow: isHovering
                            ? '0 0 20px rgba(59, 130, 246, 0.3), inset 0 0 10px rgba(59, 130, 246, 0.1)'
                            : '0 0 10px rgba(59, 130, 246, 0.15)',
                        transform: `translate(-50%, -50%)`,
                    }}
                />
            </div>

            {/* Center dot */}
            <div
                ref={dotRef}
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                }}
            >
                <div
                    className="rounded-full transition-all duration-200"
                    style={{
                        width: isHovering ? 6 : 4,
                        height: isHovering ? 6 : 4,
                        backgroundColor: isHovering ? '#0ea5e9' : '#3b82f6',
                        boxShadow: '0 0 8px rgba(59, 130, 246, 0.6)',
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            </div>

            {/* Trail dots */}
            {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
                <div
                    key={i}
                    ref={(el) => {
                        if (el) trailRefs.current[i] = el;
                    }}
                    className="fixed top-0 left-0 pointer-events-none z-[9998]"
                    style={{
                        opacity: isVisible ? (1 - (i / TRAIL_COUNT)) * 0.4 : 0,
                    }}
                >
                    <div
                        className="rounded-full"
                        style={{
                            width: 3 - (i * 0.3),
                            height: 3 - (i * 0.3),
                            background: `linear-gradient(135deg, rgba(59, 130, 246, ${0.6 - i * 0.08}), rgba(255, 255, 255, ${0.3 - i * 0.04}))`,
                            boxShadow: `0 0 ${4 - i * 0.5}px rgba(59, 130, 246, ${0.3 - i * 0.04})`,
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                </div>
            ))}

            {/* Ripple container */}
            <div ref={rippleContainerRef} className="fixed inset-0 pointer-events-none z-[9997]" />
        </>
    );
}
