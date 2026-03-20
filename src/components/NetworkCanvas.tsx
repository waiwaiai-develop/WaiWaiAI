'use client';

import React, { useEffect, useRef } from 'react';

const NetworkCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        let mouse = { x: -1000, y: -1000 };

        // Colors corresponding to Light Theme
        const particleColor = 'rgba(148, 163, 184, 0.4)'; // slate-400

        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                const dpr = window.devicePixelRatio || 1;
                const rect = parent.getBoundingClientRect();

                canvas.width = rect.width * dpr;
                canvas.height = rect.height * dpr;
                ctx.scale(dpr, dpr);

                canvas.style.width = `${rect.width}px`;
                canvas.style.height = `${rect.height}px`;

                initParticles(rect.width, rect.height);
            }
        };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
            canvasWidth: number;
            canvasHeight: number;

            constructor(w: number, h: number) {
                this.canvasWidth = w;
                this.canvasHeight = h;
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                // Very slow, elegant movement
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = (Math.random() - 0.5) * 0.4;
                // Small dots
                this.radius = Math.random() * 1.5 + 0.5;
            }

            update() {
                if (this.x < 0 || this.x > this.canvasWidth) this.vx *= -1;
                if (this.y < 0 || this.y > this.canvasHeight) this.vy *= -1;

                this.x += this.vx;
                this.y += this.vy;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = particleColor;
                ctx.fill();
            }
        }

        const initParticles = (width: number, height: number) => {
            particles = [];
            // Calculate responsive density
            // A bit denser than standard for a strong network feel, but capped for performance
            const density = typeof window !== 'undefined' && window.innerWidth < 768 ? 15000 : 10000;
            const numParticles = Math.min(Math.floor((width * height) / density), 150);

            for (let i = 0; i < numParticles; i++) {
                particles.push(new Particle(width, height));
            }
        };

        const drawLines = () => {
            const maxDistance = 150;
            const mouseMaxDistance = 200;

            for (let i = 0; i < particles.length; i++) {
                // Interactive mouse connections
                const dxMouse = particles[i].x - mouse.x;
                const dyMouse = particles[i].y - mouse.y;
                const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

                if (distMouse < mouseMaxDistance) {
                    ctx.beginPath();
                    const opacity = 1 - (distMouse / mouseMaxDistance);
                    // Blue tint for mouse interactions to make it feel "active"
                    ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.5})`; // blue-500
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.stroke();
                }

                // Node-to-Node connections
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        ctx.beginPath();
                        const opacity = 1 - (distance / maxDistance);
                        ctx.strokeStyle = `rgba(148, 163, 184, ${opacity * 0.25})`; // slate-400
                        ctx.lineWidth = 0.8;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            const parent = canvas.parentElement;
            if (!parent || !ctx) return;
            const rect = parent.getBoundingClientRect();

            ctx.clearRect(0, 0, rect.width, rect.height);

            for (const particle of particles) {
                particle.update();
                particle.draw();
            }

            drawLines();

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!canvas) return;
            const rect = canvas.getBoundingClientRect();
            // Check if mouse is near the canvas area to avoid connecting from off-screen
            if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
                mouse.x = e.clientX - rect.left;
                mouse.y = e.clientY - rect.top;
            } else {
                mouse.x = -1000;
                mouse.y = -1000;
            }
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        // Initialize and start animation loop
        resizeCanvas();
        animate();

        // Event Listeners
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave); // for when mouse leaves window

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ display: 'block' }}
        />
    );
};

export default NetworkCanvas;
