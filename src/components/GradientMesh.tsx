'use client';

import { useEffect, useState } from 'react';

export default function GradientMesh() {
    const [isReduced, setIsReduced] = useState(false);

    useEffect(() => {
        setIsReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }, []);

    if (isReduced) return null;

    return (
        <div className="gradient-mesh" aria-hidden="true">
            <div className="orb-1" />
            <div className="orb-2" />
            <div className="orb-3" />
        </div>
    );
}
