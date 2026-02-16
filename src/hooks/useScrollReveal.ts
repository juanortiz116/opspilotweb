import { useEffect, useRef } from 'react';

/**
 * Hook that applies a CSS class when elements scroll into view.
 * Uses IntersectionObserver for performant scroll-triggered animations.
 *
 * Usage:
 *   const ref = useScrollReveal<HTMLDivElement>();
 *   <div ref={ref} className="reveal"> ... </div>
 *
 * Or for a container whose children animate individually:
 *   const ref = useScrollReveal<HTMLElement>({ stagger: true });
 *   <section ref={ref}> <div className="reveal">A</div> <div className="reveal">B</div> </section>
 */

interface ScrollRevealOptions {
    /** Root margin for triggering earlier/later (default: '0px 0px -40px 0px') */
    rootMargin?: string;
    /** Visibility threshold 0-1 (default: 0.05) */
    threshold?: number;
    /** If true, observe children with .reveal class instead of the ref element itself */
    stagger?: boolean;
}

export function useScrollReveal<T extends HTMLElement>(
    options: ScrollRevealOptions = {}
) {
    const ref = useRef<T>(null);
    const { rootMargin = '0px 0px -40px 0px', threshold = 0.05, stagger = false } = options;

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { rootMargin, threshold }
        );

        if (stagger) {
            const children = el.querySelectorAll('.reveal');
            children.forEach((child, i) => {
                (child as HTMLElement).style.transitionDelay = `${i * 120}ms`;
                observer.observe(child);
            });
        } else {
            // For non-stagger, add 'reveal' class if not already present
            if (!el.classList.contains('reveal') &&
                !el.classList.contains('reveal-left') &&
                !el.classList.contains('reveal-right') &&
                !el.classList.contains('reveal-scale')) {
                el.classList.add('reveal');
            }
            observer.observe(el);
        }

        return () => observer.disconnect();
    }, [rootMargin, threshold, stagger]);

    return ref;
}
