import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
    return (
        <div style={{
            background: 'var(--color-bg-deep)',
            minHeight: '100dvh',
            color: 'var(--color-text)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            padding: 'var(--spacing-8)',
        }}>
            {/* Subtle grid background, no Aurora */}
            <div
                aria-hidden
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                    maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '560px' }}>
                <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-3)',
                    fontFamily: 'var(--font-family-mono)',
                    fontSize: 'var(--font-size-xs)',
                    color: 'var(--color-mint)',
                    letterSpacing: 'var(--tracking-wide)',
                    marginBottom: 'var(--spacing-6)',
                }}>
                    <span style={{ width: 28, height: 1, background: 'currentColor' }} />
                    Error 404
                </span>

                <h1 style={{
                    fontFamily: 'var(--font-family-display)',
                    fontSize: 'clamp(5rem, 18vw, 9rem)',
                    fontWeight: 700,
                    lineHeight: 1,
                    margin: '0 0 var(--spacing-6)',
                    color: 'var(--color-text-strong)',
                    letterSpacing: '-0.04em',
                    fontVariantNumeric: 'tabular-nums',
                }}>
                    404
                </h1>

                <h2 style={{
                    fontFamily: 'var(--font-family-display)',
                    fontSize: 'var(--font-size-2xl)',
                    fontWeight: 600,
                    color: 'var(--color-text-strong)',
                    marginBottom: 'var(--spacing-5)',
                    letterSpacing: 'var(--tracking-tight)',
                }}>
                    Página no encontrada
                </h2>

                <p style={{
                    color: 'var(--color-text-muted)',
                    fontSize: 'var(--font-size-base)',
                    lineHeight: 1.65,
                    marginBottom: 'var(--spacing-10)',
                    maxWidth: 480,
                    margin: '0 auto var(--spacing-10)',
                }}>
                    La página que buscas no existe o ha sido movida.
                    Vuelve al inicio y encuentra lo que necesitas.
                </p>

                <div style={{ display: 'flex', gap: 'var(--spacing-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/">
                        <Button variant="primary">
                            <Home size={18} style={{ marginRight: '8px' }} />
                            Volver al inicio
                        </Button>
                    </Link>
                    <Button variant="outline" onClick={() => window.history.back()}>
                        <ArrowLeft size={18} style={{ marginRight: '8px' }} />
                        Página anterior
                    </Button>
                </div>
            </div>
        </div>
    );
};
