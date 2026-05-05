import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ArrowLeft, Search, Command } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Eyebrow } from '../components/ui/Eyebrow';
import { ROUTES } from '../lib/routes';
import { useCommandPalette } from '../components/common/CommandPalette';
import styles from './NotFound.module.css';

interface Suggestion {
    label: string;
    href: string;
    keywords: string[];
}

const SUGGESTIONS: Suggestion[] = [
    { label: 'Inicio', href: ROUTES.home, keywords: ['home', 'inicio'] },
    { label: 'Productos verticales', href: ROUTES.productos, keywords: ['producto', 'fiscalidad', 'aeat', 'energydeal', 'erp', 'presupuestador', 'bc3', 'sii', 'verifactu'] },
    { label: 'Soluciones por sector', href: ROUTES.soluciones, keywords: ['solucion', 'sector', 'asesoria', 'reformas', 'agencia'] },
    { label: 'Servicios a medida', href: ROUTES.servicios, keywords: ['servicio', 'desarrollo', 'custom', 'a medida'] },
    { label: 'Casos de éxito', href: ROUTES.casos, keywords: ['caso', 'cliente', 'éxito', 'success'] },
    { label: 'Precios', href: ROUTES.precios, keywords: ['precio', 'pricing', 'tarifa', 'plan'] },
    { label: 'Recursos · Newsletter', href: ROUTES.recursos, keywords: ['recurso', 'blog', 'newsletter', 'guia', 'articulo'] },
    { label: 'Diagnóstico gratuito', href: ROUTES.diagnostico, keywords: ['diagnostico', 'demo', 'reservar', 'empezar'] },
    { label: 'Contacto', href: ROUTES.contacto, keywords: ['contacto', 'email', 'mensaje'] },
];

export const NotFound: React.FC = () => {
    const { pathname } = useLocation();
    const { open: openCommandPalette } = useCommandPalette();

    const initialGuess = useMemo(() => {
        const lower = pathname.replace(/^\//, '').toLowerCase();
        if (!lower) return '';
        // Replace dashes/slashes with spaces for the input
        return lower.replace(/[-_/]+/g, ' ');
    }, [pathname]);

    const [query, setQuery] = useState(initialGuess);

    useEffect(() => {
        setQuery(initialGuess);
    }, [initialGuess]);

    const matches = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return SUGGESTIONS.slice(0, 4);
        const scored = SUGGESTIONS.map((s) => {
            let score = 0;
            if (s.label.toLowerCase().includes(q)) score += 10;
            s.keywords.forEach((k) => {
                if (k.includes(q) || q.includes(k)) score += 5;
            });
            return { suggestion: s, score };
        }).filter((x) => x.score > 0).sort((a, b) => b.score - a.score);
        return scored.slice(0, 4).map((x) => x.suggestion);
    }, [query]);

    return (
        <div className={styles.page}>
            <div className={styles.gridBg} aria-hidden="true" />

            <div className={styles.content}>
                <Eyebrow block>Error 404</Eyebrow>

                <h1 className={styles.bigCode} aria-label="Cuatro cero cuatro">
                    <span className={styles.digit}>4</span>
                    <span className={`${styles.digit} ${styles.digitMid}`}>0</span>
                    <span className={styles.digit}>4</span>
                </h1>

                <h2 className={styles.title}>
                    Esto no está donde lo dejamos.
                </h2>
                <p className={styles.subtitle}>
                    La URL <code className={styles.urlCode}>{pathname}</code> no existe.
                    Quizás estás buscando esto:
                </p>

                {/* Smart search */}
                <div className={styles.searchBox}>
                    <Search size={18} className={styles.searchIcon} aria-hidden="true" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="¿Qué estabas buscando?"
                        className={styles.searchInput}
                        aria-label="Buscar página"
                    />
                </div>

                {matches.length > 0 ? (
                    <ul className={styles.suggestions}>
                        {matches.map((m) => (
                            <li key={m.href}>
                                <Link to={m.href} className={styles.suggestion}>
                                    <span className={styles.suggestionLabel}>{m.label}</span>
                                    <span className={styles.suggestionPath}>{m.href}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className={styles.empty}>
                        Nada coincide. Mejor empezamos desde el principio.
                    </p>
                )}

                <div className={styles.actions}>
                    <Link to={ROUTES.home}>
                        <Button variant="primary">
                            <Home size={16} style={{ marginRight: 8 }} />
                            Volver al inicio
                        </Button>
                    </Link>
                    <Button variant="outline" onClick={() => window.history.back()}>
                        <ArrowLeft size={16} style={{ marginRight: 8 }} />
                        Página anterior
                    </Button>
                    <button type="button" className={styles.cmdHint} onClick={openCommandPalette}>
                        <Command size={14} strokeWidth={2} />
                        <span>Buscar todo</span>
                        <kbd className={styles.kbd}>⌘K</kbd>
                    </button>
                </div>
            </div>
        </div>
    );
};
