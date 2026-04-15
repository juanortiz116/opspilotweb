import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Resources.module.css';
import Aurora from '../components/common/Aurora';

const FORM_NEWSLETTER_URL = 'https://formsubmit.co/ajax/opspilot.contact@gmail.com';

type NLStatus = 'idle' | 'submitting' | 'success' | 'error';

export const Resources: React.FC = () => {
    const gridRef = useScrollReveal<HTMLDivElement>({ stagger: true });
    const nlRef = useScrollReveal<HTMLDivElement>();
    const [nlStatus, setNlStatus] = useState<NLStatus>('idle');
    const [nlEmail, setNlEmail] = useState('');
    const ctaRef = useScrollReveal<HTMLDivElement>();

    const handleNewsletter = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setNlStatus('submitting');
        try {
            const res = await fetch(FORM_NEWSLETTER_URL, {
                method: 'POST',
                headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: nlEmail, _subject: 'Nueva suscripción newsletter OpsPilot', tipo: 'newsletter' }),
            });
            if (res.ok) {
                setNlStatus('success');
                setNlEmail('');
            } else {
                setNlStatus('error');
            }
        } catch {
            setNlStatus('error');
        }
    };

    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.auroraBackground}>
                    <Aurora colorStops={['#0d1b2a', '#1b998b', '#39ce86']} blend={0.6} amplitude={1.0} speed={0.8} />
                </div>
                <div className={styles.heroContent}>
                    <span className={styles.tag}>Recursos</span>
                    <h1 className={styles.heroTitle}>
                        Aprende a hacer más{' '}
                        <span className="text-gradient">con menos.</span>
                    </h1>
                    <p className={styles.heroSub}>
                        Guías prácticas, artículos y herramientas gratuitas sobre automatización y digitalización.
                        Escritas para personas de negocio, no para técnicos.
                    </p>
                </div>
            </section>

            {/* Resources Grid */}
            <section className={styles.section}>
                <div className={styles.container} ref={gridRef}>
                    <div className={styles.grid}>
                        {[
                            {
                                cat: 'Guía',
                                title: 'Cómo automatizar tu negocio sin saber de tecnología',
                                desc: 'Paso a paso para identificar qué procesos te roban tiempo y convertirlos en flujos automáticos. Sin código, sin complicaciones.',
                                time: '8 min lectura'
                            },
                            {
                                cat: 'Artículo',
                                title: '5 señales de que tu PYME necesita un CRM ya',
                                desc: 'Si pierdes clientes por falta de seguimiento o tus datos viven en hojas de Excel, sigue leyendo.',
                                time: '5 min lectura'
                            },
                            {
                                cat: 'Caso práctico',
                                title: 'De Excel a sistema: cómo J.R. Rodríguez triplicó su capacidad',
                                desc: 'El caso real de una empresa de reformas que pasó de libretas a un sistema que trabaja solo.',
                                time: '6 min lectura'
                            },
                            {
                                cat: 'Checklist',
                                title: '¿Tu web trabaja para ti o contra ti? 10 puntos para saberlo',
                                desc: 'Una auditoría rápida y gratuita para saber si tu web está generando clientes o espantándolos.',
                                time: '3 min lectura'
                            },
                            {
                                cat: 'Artículo',
                                title: 'WhatsApp Business API: lo que nadie te cuenta antes de contratarla',
                                desc: 'Ventajas reales, limitaciones y cuándo tiene sentido invertir en la API oficial para tu negocio.',
                                time: '7 min lectura'
                            },
                            {
                                cat: 'Guía',
                                title: 'Cómo pedir un presupuesto de software sin que te timen',
                                desc: 'Todo lo que debes preguntar antes de contratar a alguien para hacer tu app, CRM o web.',
                                time: '10 min lectura'
                            },
                        ].map((r) => (
                            <article key={r.title} className={`${styles.card} reveal`}>
                                <span className={styles.cardCat}>{r.cat}</span>
                                <h3 className={styles.cardTitle}>{r.title}</h3>
                                <p className={styles.cardDesc}>{r.desc}</p>
                                <span className={styles.cardTime}>{r.time}</span>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={`${styles.newsletter} reveal`} ref={nlRef}>
                        <div className={styles.nlContent}>
                            <h2 className={styles.nlTitle}>Una idea útil cada semana</h2>
                            <p className={styles.nlText}>
                                Un email semanal con automatizaciones prácticas, herramientas y casos reales.
                                Sin relleno, sin spam. Solo cosas que puedes aplicar en tu negocio.
                            </p>
                        </div>
                        {nlStatus === 'success' ? (
                            <p style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: 'var(--font-size-lg)' }}>
                                ¡Suscrito! Te llegará el próximo email esta semana.
                            </p>
                        ) : (
                            <form className={styles.nlForm} onSubmit={handleNewsletter}>
                                <input
                                    type="email"
                                    placeholder="tu@email.com"
                                    className={styles.nlInput}
                                    required
                                    value={nlEmail}
                                    onChange={(e) => setNlEmail(e.target.value)}
                                />
                                <Button variant="primary" type="submit" disabled={nlStatus === 'submitting'}>
                                    {nlStatus === 'submitting' ? 'Enviando...' : 'Suscribirme gratis'}
                                </Button>
                                {nlStatus === 'error' && (
                                    <p style={{ color: '#e53e3e', fontSize: 'var(--font-size-sm)', marginTop: 'var(--spacing-2)' }}>
                                        Error al suscribirse. Inténtalo de nuevo.
                                    </p>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={`${styles.ctaBlock} reveal`} ref={ctaRef}>
                        <h2 className={styles.ctaTitle}>¿Quieres ayuda personalizada?</h2>
                        <p className={styles.ctaSub}>Diagnóstico gratuito de 30 minutos. Sin compromiso.</p>
                        <Link to="/contact"><Button variant="primary" size="lg">Reservar diagnóstico gratuito</Button></Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
