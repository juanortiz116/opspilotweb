import { lazy, Suspense, useEffect, useState } from 'react';
import './Aurora.css';

// The actual WebGL/OGL implementation lives in AuroraCanvas. We import it
// lazily so the OGL bundle (~30 kB gzipped) doesn't block initial LCP — the
// hero shows the static gradient fallback while the chunk loads.
const AuroraCanvas = lazy(() => import('./AuroraCanvas'));

export interface AuroraProps {
    colorStops?: string[];
    amplitude?: number;
    blend?: number;
    time?: number;
    speed?: number;
}

/**
 * Static gradient fallback used while the WebGL canvas chunk is loading and
 * for users with `prefers-reduced-motion: reduce` (or no WebGL support).
 * The colors mirror the brand defaults of the animated shader so the visual
 * transition is seamless.
 */
function AuroraFallback({ colorStops }: { colorStops: string[] }) {
    const [c0, c1, c2] = colorStops;
    return (
        <div
            className="aurora-container"
            aria-hidden="true"
            style={{
                background: `linear-gradient(135deg, ${c0} 0%, ${c1} 55%, ${c2} 100%)`,
                opacity: 0.6,
            }}
        />
    );
}

export default function Aurora(props: AuroraProps) {
    const colorStops = props.colorStops ?? ['#111a23', '#39ce86', '#2bb874'];

    // SSR-safe + respects user preference for reduced motion. We avoid the
    // shader entirely (no RAF loop, no GL context) when the user opted out.
    const [shouldAnimate, setShouldAnimate] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window === 'undefined' || !window.matchMedia) return;
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        const update = () => setShouldAnimate(!mq.matches);
        update();
        mq.addEventListener?.('change', update);
        return () => mq.removeEventListener?.('change', update);
    }, []);

    if (!shouldAnimate) {
        return <AuroraFallback colorStops={colorStops} />;
    }

    return (
        <Suspense fallback={<AuroraFallback colorStops={colorStops} />}>
            <AuroraCanvas {...props} />
        </Suspense>
    );
}
