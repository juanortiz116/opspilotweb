import React, { useEffect, useState } from 'react';
import { Cookie, X } from 'lucide-react';
import { Button } from '../ui/Button';
import styles from './CookieBanner.module.css';

const STORAGE_KEY = 'opspilot:cookies-consent';
type Consent = 'accepted' | 'declined';

const isStored = (): Consent | null => {
    try {
        const v = window.localStorage.getItem(STORAGE_KEY);
        if (v === 'accepted' || v === 'declined') return v;
        return null;
    } catch {
        return null;
    }
};

export const CookieBanner: React.FC = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Defer to next tick so it doesn't compete with hero LCP.
        const id = window.setTimeout(() => {
            if (isStored() === null) setVisible(true);
        }, 800);
        return () => window.clearTimeout(id);
    }, []);

    const persist = (value: Consent) => {
        try { window.localStorage.setItem(STORAGE_KEY, value); } catch { /* ignore */ }
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className={styles.banner} role="dialog" aria-label="Aviso de cookies">
            <div className={styles.icon} aria-hidden="true">
                <Cookie size={18} strokeWidth={1.8} />
            </div>
            <div className={styles.body}>
                <p className={styles.title}>Cookies estrictamente necesarias</p>
                <p className={styles.text}>
                    Solo usamos cookies y almacenamiento técnico imprescindible para que el sitio
                    funcione. Sin tracking, sin publicidad. Plausible Analytics es 100% anónimo
                    (no usa cookies, no rastrea entre sitios).
                </p>
            </div>
            <div className={styles.actions}>
                <Button variant="ghost" size="sm" onClick={() => persist('declined')}>
                    Solo lo esencial
                </Button>
                <Button variant="primary" size="sm" onClick={() => persist('accepted')}>
                    Entendido
                </Button>
            </div>
            <button
                type="button"
                onClick={() => persist('declined')}
                className={styles.close}
                aria-label="Cerrar aviso"
            >
                <X size={14} strokeWidth={2} />
            </button>
        </div>
    );
};
