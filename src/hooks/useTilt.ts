import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface TiltOptions {
    max?: number;
    perspective?: number;
}

export function useTilt<T extends HTMLElement>({ max = 6, perspective = 900 }: TiltOptions = {}) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
        if (window.matchMedia?.('(hover: none)').matches) return;

        gsap.set(el, { transformPerspective: perspective, transformStyle: 'preserve-3d' });

        const rxTo = gsap.quickTo(el, 'rotationX', { duration: 0.5, ease: 'power3.out' });
        const ryTo = gsap.quickTo(el, 'rotationY', { duration: 0.5, ease: 'power3.out' });

        const onMove = (e: MouseEvent) => {
            const r = el.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5;
            const py = (e.clientY - r.top) / r.height - 0.5;
            rxTo(-py * max);
            ryTo(px * max);
        };
        const onLeave = () => {
            rxTo(0);
            ryTo(0);
        };

        el.addEventListener('mousemove', onMove);
        el.addEventListener('mouseleave', onLeave);
        return () => {
            el.removeEventListener('mousemove', onMove);
            el.removeEventListener('mouseleave', onLeave);
        };
    }, [max, perspective]);

    return ref;
}
