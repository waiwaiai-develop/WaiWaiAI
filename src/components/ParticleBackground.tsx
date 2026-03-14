'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 200, mouse }: { count?: number; mouse: React.RefObject<{ x: number; y: number }> }) {
    const meshRef = useRef<THREE.Points>(null);
    const { viewport } = useThree();

    const [positions, velocities, colors] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const vel = new Float32Array(count * 3);
        const col = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            // Spread particles across viewport with depth
            pos[i3] = (Math.random() - 0.5) * 20;
            pos[i3 + 1] = (Math.random() - 0.5) * 20;
            pos[i3 + 2] = (Math.random() - 0.5) * 10;

            // Slow random velocities
            vel[i3] = (Math.random() - 0.5) * 0.005;
            vel[i3 + 1] = (Math.random() - 0.5) * 0.005;
            vel[i3 + 2] = (Math.random() - 0.5) * 0.002;

            // Blue-white color spectrum
            const t = Math.random();
            col[i3] = 0.2 + t * 0.6;       // R
            col[i3 + 1] = 0.4 + t * 0.5;   // G
            col[i3 + 2] = 0.8 + t * 0.2;   // B
        }
        return [pos, vel, col];
    }, [count]);

    const geometry = useMemo(() => {
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        return geo;
    }, [positions, colors]);

    useFrame((state) => {
        if (!meshRef.current) return;
        const posAttr = meshRef.current.geometry.attributes.position;
        const posArray = posAttr.array as Float32Array;

        const mouseInfluence = mouse.current || { x: 0, y: 0 };
        const time = state.clock.elapsedTime;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            // Apply velocity + gentle sine wave drift
            posArray[i3] += velocities[i3] + Math.sin(time * 0.3 + i) * 0.001;
            posArray[i3 + 1] += velocities[i3 + 1] + Math.cos(time * 0.2 + i) * 0.001;
            posArray[i3 + 2] += velocities[i3 + 2];

            // Mouse parallax influence
            posArray[i3] += mouseInfluence.x * 0.0003 * (posArray[i3 + 2] + 5) * 0.1;
            posArray[i3 + 1] += mouseInfluence.y * 0.0003 * (posArray[i3 + 2] + 5) * 0.1;

            // Boundary wrap
            if (posArray[i3] > 10) posArray[i3] = -10;
            if (posArray[i3] < -10) posArray[i3] = 10;
            if (posArray[i3 + 1] > 10) posArray[i3 + 1] = -10;
            if (posArray[i3 + 1] < -10) posArray[i3 + 1] = 10;
            if (posArray[i3 + 2] > 5) posArray[i3 + 2] = -5;
            if (posArray[i3 + 2] < -5) posArray[i3 + 2] = 5;
        }

        posAttr.needsUpdate = true;

        // Gentle overall rotation
        meshRef.current.rotation.y = time * 0.02;
        meshRef.current.rotation.x = Math.sin(time * 0.01) * 0.05;
    });

    return (
        <points ref={meshRef} geometry={geometry}>
            <pointsMaterial
                vertexColors
                size={0.04}
                sizeAttenuation
                transparent
                opacity={0.6}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}

function FloatingOrbs({ mouse }: { mouse: React.RefObject<{ x: number; y: number }> }) {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current) return;
        const time = state.clock.elapsedTime;
        const mouseInfluence = mouse.current || { x: 0, y: 0 };

        groupRef.current.children.forEach((child, i) => {
            child.position.y += Math.sin(time * 0.5 + i * 2) * 0.002;
            child.position.x += Math.cos(time * 0.3 + i * 1.5) * 0.001;
            child.position.x += mouseInfluence.x * 0.00005 * (i + 1);
            child.position.y += mouseInfluence.y * 0.00005 * (i + 1);
        });
    });

    return (
        <group ref={groupRef}>
            {[
                { pos: [-3, 2, -4] as [number, number, number], scale: 1.5, color: '#1d4ed8' },
                { pos: [4, -1, -6] as [number, number, number], scale: 2, color: '#0ea5e9' },
                { pos: [-1, -3, -8] as [number, number, number], scale: 1, color: '#3b82f6' },
            ].map((orb, i) => (
                <mesh key={i} position={orb.pos} scale={orb.scale}>
                    <sphereGeometry args={[1, 16, 16]} />
                    <meshBasicMaterial
                        color={orb.color}
                        transparent
                        opacity={0.03}
                    />
                </mesh>
            ))}
        </group>
    );
}

export default function ParticleBackground() {
    const mouseRef = useRef({ x: 0, y: 0 });
    const [isReduced, setIsReduced] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        setIsReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = {
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1,
            };
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    if (!isMounted || isReduced) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 60 }}
                dpr={[1, 1.5]}
                gl={{ antialias: false, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <Particles count={150} mouse={mouseRef} />
                <FloatingOrbs mouse={mouseRef} />
            </Canvas>
        </div>
    );
}
