import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CountUpOptions {
    end: number;
    duration?: number;
    format?: (n: number) => string;
}

export function useCountUp<T extends HTMLElement>({
    end,
    duration = 1.4,
    format = (n) => Math.round(n).toString(),
}: CountUpOptions) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
        if (reduce) {
            el.textContent = format(end);
            return;
        }

        const obj = { value: 0 };
        const tween = gsap.to(obj, {
            value: end,
            duration,
            ease: 'power2.out',
            onUpdate: () => {
                el.textContent = format(obj.value);
            },
            paused: true,
        });

        const st = ScrollTrigger.create({
            trigger: el,
            start: 'top 90%',
            once: true,
            onEnter: () => tween.play(),
        });

        return () => {
            st.kill();
            tween.kill();
        };
    }, [end, duration, format]);

    return ref;
}
