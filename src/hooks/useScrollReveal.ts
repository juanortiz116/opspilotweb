import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
    rootMargin?: string;
    threshold?: number;
    stagger?: boolean;
}

const easeOut = 'cubic-bezier(0.16, 1, 0.3, 1)';

export function useScrollReveal<T extends HTMLElement>(
    options: ScrollRevealOptions = {}
) {
    const ref = useRef<T>(null);
    const { stagger = false } = options;

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

        const targets: HTMLElement[] = stagger
            ? Array.from(el.querySelectorAll<HTMLElement>('.reveal, .reveal-left, .reveal-right, .reveal-scale'))
            : (() => {
                if (
                    !el.classList.contains('reveal') &&
                    !el.classList.contains('reveal-left') &&
                    !el.classList.contains('reveal-right') &&
                    !el.classList.contains('reveal-scale')
                ) {
                    el.classList.add('reveal');
                }
                return [el];
            })();

        if (reduce) {
            targets.forEach((t) => t.classList.add('revealed'));
            return;
        }

        targets.forEach((t) => {
            const fromVars: gsap.TweenVars = { opacity: 0 };
            if (t.classList.contains('reveal-left')) fromVars.x = -32;
            else if (t.classList.contains('reveal-right')) fromVars.x = 32;
            else if (t.classList.contains('reveal-scale')) fromVars.scale = 0.96;
            else fromVars.y = 28;
            gsap.set(t, fromVars);
        });

        const triggers: ScrollTrigger[] = [];

        targets.forEach((t, i) => {
            const tween = gsap.to(t, {
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.85,
                ease: 'power3.out',
                delay: stagger ? i * 0.08 : 0,
                paused: true,
                onStart: () => t.classList.add('revealed'),
            });

            const st = ScrollTrigger.create({
                trigger: t,
                start: 'top 88%',
                once: true,
                onEnter: () => tween.play(),
            });
            triggers.push(st);
        });

        // Honor smooth-scroll easings provided by index.css transition (kept for non-JS fallback)
        void easeOut;

        return () => {
            triggers.forEach((t) => t.kill());
        };
    }, [stagger]);

    return ref;
}
