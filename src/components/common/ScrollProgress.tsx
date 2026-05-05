import React, { useEffect, useRef } from 'react';
import styles from './ScrollProgress.module.css';

export const ScrollProgress: React.FC = () => {
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

        let ticking = false;
        const update = () => {
            const el = barRef.current;
            if (!el) return;
            const doc = document.documentElement;
            const max = (doc.scrollHeight - doc.clientHeight) || 1;
            const pct = Math.min(100, Math.max(0, (window.scrollY / max) * 100));
            el.style.transform = `scaleX(${pct / 100})`;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(update);
                ticking = true;
            }
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', update, { passive: true });

        if (reduce) {
            // Still works, just no smooth scroll feel — same code path.
        }

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', update);
        };
    }, []);

    return (
        <div className={styles.track} aria-hidden="true">
            <div ref={barRef} className={styles.bar} />
        </div>
    );
};
