import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import Aurora from '../components/common/Aurora';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
    return (
        <div style={{
            background: 'var(--color-dark-bg)',
            minHeight: '100vh',
            color: 'var(--color-dark-text-main)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            padding: 'var(--spacing-8)',
        }}>
            {/* Aurora background */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <Aurora colorStops={['#0d1b2a', '#1b998b', '#39ce86']} blend={0.4} amplitude={0.8} speed={0.5} />
            </div>

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 1, maxWidth: '560px' }}>
                <span style={{
                    display: 'inline-block',
                    color: 'var(--color-primary)',
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: 'var(--font-weight-semibold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    padding: 'var(--spacing-2) var(--spacing-4)',
                    background: 'rgba(57, 206, 134, 0.08)',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid rgba(57, 206, 134, 0.15)',
                    marginBottom: 'var(--spacing-6)',
                }}>
                    Error 404
                </span>

                <h1 style={{
                    fontSize: 'clamp(5rem, 20vw, 10rem)',
                    fontWeight: 800,
                    lineHeight: 1,
                    margin: '0 0 var(--spacing-4)',
                    background: 'linear-gradient(135deg, #39ce86, #1b998b)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}>
                    404
                </h1>

                <h2 style={{
                    fontSize: 'var(--font-size-2xl)',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    marginBottom: 'var(--spacing-4)',
                }}>
                    Página no encontrada
                </h2>

                <p style={{
                    color: 'var(--color-dark-text-muted)',
                    fontSize: 'var(--font-size-base)',
                    lineHeight: 1.7,
                    marginBottom: 'var(--spacing-10)',
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
