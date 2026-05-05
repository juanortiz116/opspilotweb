import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import styles from './Footer.module.css';
import { Logo } from './Logo';
import { Button } from '../ui/Button';
import { ROUTES } from '../../lib/routes';

const FORM_NEWSLETTER_URL = 'https://formsubmit.co/ajax/opspilot.contact@gmail.com';

type NLStatus = 'idle' | 'submitting' | 'success' | 'error';

export const Footer: React.FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<NLStatus>('idle');

    const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email) return;
        setStatus('submitting');
        try {
            const res = await fetch(FORM_NEWSLETTER_URL, {
                method: 'POST',
                headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    _subject: 'Nueva suscripción newsletter (footer)',
                    tipo: 'newsletter',
                }),
            });
            if (res.ok) {
                setStatus('success');
                setEmail('');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand */}
                    <div className={styles.brand}>
                        <h2 className={styles.logo}>
                            <Logo size={45} /> OpsPilot
                        </h2>
                        <p className={styles.tagline}>
                            El software que tu negocio necesita, construido a medida para PYMEs
                            españolas. Tecnología que funciona, sin sorpresas.
                        </p>

                        <div className={styles.contactBlock}>
                            <a href="mailto:opspilot.contact@gmail.com" className={styles.contactRow}>
                                <Mail size={14} strokeWidth={1.8} aria-hidden="true" />
                                <span>opspilot.contact@gmail.com</span>
                            </a>
                            <span className={styles.contactRow}>
                                <MapPin size={14} strokeWidth={1.8} aria-hidden="true" />
                                <span>Madrid · España</span>
                            </span>
                        </div>

                        <div className={styles.socials}>
                            <a
                                href="https://wa.me/34640756126"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="WhatsApp"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.445L.15 24l6.849-1.795c1.196.65 2.748 1.026 4.341 1.026h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Producto */}
                    <div className={styles.linksCol}>
                        <h4 className={styles.heading}>Producto</h4>
                        <Link to={ROUTES.productos} className={styles.link}>Productos verticales</Link>
                        <Link to={ROUTES.soluciones} className={styles.link}>Soluciones por sector</Link>
                        <Link to={ROUTES.servicios} className={styles.link}>Servicios a medida</Link>
                        <Link to={ROUTES.precios} className={styles.link}>Precios</Link>
                    </div>

                    {/* Empresa */}
                    <div className={styles.linksCol}>
                        <h4 className={styles.heading}>Empresa</h4>
                        <Link to={ROUTES.casos} className={styles.link}>Casos de éxito</Link>
                        <Link to={ROUTES.recursos} className={styles.link}>Recursos</Link>
                        <Link to={ROUTES.contacto} className={styles.link}>Contacto</Link>
                        <Link to={ROUTES.diagnostico} className={styles.link}>Diagnóstico gratuito</Link>
                    </div>

                    {/* Newsletter */}
                    <div className={styles.newsletter}>
                        <h4 className={styles.heading}>Newsletter</h4>
                        <p className={styles.newsletterText}>
                            Una idea útil cada semana. Sin spam, sin relleno.
                        </p>
                        {status === 'success' ? (
                            <p className={styles.newsletterSuccess}>
                                ¡Suscrito! El próximo email te llega esta semana.
                            </p>
                        ) : (
                            <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
                                <div className={styles.newsletterField}>
                                    <input
                                        type="email"
                                        placeholder="tu@email.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className={styles.newsletterInput}
                                        aria-label="Tu correo electrónico"
                                    />
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className={styles.newsletterSubmit}
                                        aria-label="Suscribirse"
                                    >
                                        <ArrowRight size={16} strokeWidth={2.2} />
                                    </Button>
                                </div>
                                {status === 'error' && (
                                    <p className={styles.newsletterError}>
                                        Error al suscribirse. Inténtalo de nuevo.
                                    </p>
                                )}
                            </form>
                        )}
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} OpsPilot. Todos los derechos reservados.</p>
                    <p className={styles.bottomBadge}>
                        <span className={styles.flag} aria-hidden="true">
                            <span className={`${styles.stripe} ${styles.stripeRed}`} />
                            <span className={`${styles.stripe} ${styles.stripeYellow}`} />
                            <span className={`${styles.stripe} ${styles.stripeRed}`} />
                        </span>
                        Hecho en España
                    </p>
                </div>
            </div>
        </footer>
    );
};
