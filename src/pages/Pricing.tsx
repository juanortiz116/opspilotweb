import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Pricing.module.css';

export const Pricing: React.FC = () => {
    const pricingRef = useScrollReveal<HTMLDivElement>({ stagger: true });
    const customRef = useScrollReveal<HTMLDivElement>();
    const faqRef = useScrollReveal<HTMLDivElement>({ stagger: true });

    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`${styles.heroGlow} anim-pulse-glow`}></div>
                <div className={styles.heroContent}>
                    <span className={styles.tag}>Precios</span>
                    <h1 className={styles.heroTitle}>
                        Transparencia total,{' '}
                        <span className="text-gradient">sin letra pequeña.</span>
                    </h1>
                    <p className={styles.heroSub}>
                        Precios claros para productos SaaS. Para servicios a medida,
                        hablemos de tu caso específico.
                    </p>
                </div>
            </section>

            {/* Pricing Grid */}
            <section className={styles.section}>
                <div className={styles.container} ref={pricingRef}>
                    <div className={styles.grid}>
                        {/* Starter */}
                        <div className={`${styles.card} reveal`}>
                            <span className={styles.planName}>Starter</span>
                            <p className={styles.planDesc}>Para autónomos y negocios que empiezan.</p>
                            <div className={styles.priceRow}>
                                <span className={styles.price}>29€</span>
                                <span className={styles.period}>/mes</span>
                            </div>
                            <ul className={styles.features}>
                                <li><span className={styles.check}>✓</span>1 usuario</li>
                                <li><span className={styles.check}>✓</span>CRM básico</li>
                                <li><span className={styles.check}>✓</span>App sector</li>
                                <li><span className={styles.check}>✓</span>Soporte email</li>
                                <li><span className={styles.check}>✓</span>Actualizaciones incluidas</li>
                            </ul>
                            <Link to="/demo"><Button variant="outline" fullWidth>Probar gratis</Button></Link>
                        </div>

                        {/* Pro */}
                        <div className={`${styles.card} ${styles.cardPro} reveal`}>
                            <div className={styles.badge}>Más Popular</div>
                            <span className={styles.planName}>Pro</span>
                            <p className={styles.planDesc}>Para PYMEs que necesitan escalar.</p>
                            <div className={styles.priceRow}>
                                <span className={styles.price}>69€</span>
                                <span className={styles.period}>/mes</span>
                            </div>
                            <ul className={styles.features}>
                                <li><span className={styles.check}>✓</span>Hasta 5 usuarios</li>
                                <li><span className={styles.check}>✓</span>CRM avanzado + automatizaciones</li>
                                <li><span className={styles.check}>✓</span>WhatsApp integrado</li>
                                <li><span className={styles.check}>✓</span>Dashboard + analítica</li>
                                <li><span className={styles.check}>✓</span>Soporte prioritario</li>
                                <li><span className={styles.check}>✓</span>Onboarding guiado</li>
                            </ul>
                            <Link to="/demo"><Button variant="primary" fullWidth>Empezar ahora</Button></Link>
                        </div>

                        {/* Business */}
                        <div className={`${styles.card} reveal`}>
                            <span className={styles.planName}>Business</span>
                            <p className={styles.planDesc}>Para empresas con necesidades específicas.</p>
                            <div className={styles.priceRow}>
                                <span className={styles.price}>149€</span>
                                <span className={styles.period}>/mes</span>
                            </div>
                            <ul className={styles.features}>
                                <li><span className={styles.check}>✓</span>Usuarios ilimitados</li>
                                <li><span className={styles.check}>✓</span>Todo lo de Pro</li>
                                <li><span className={styles.check}>✓</span>API acceso completo</li>
                                <li><span className={styles.check}>✓</span>Integraciones personalizadas</li>
                                <li><span className={styles.check}>✓</span>Account manager dedicado</li>
                                <li><span className={styles.check}>✓</span>SLA garantizado</li>
                            </ul>
                            <Link to="/contact"><Button variant="outline" fullWidth>Hablar con ventas</Button></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={`${styles.customBlock} reveal`} ref={customRef}>
                        <div className={styles.customContent}>
                            <span className={styles.tag}>Servicios a medida</span>
                            <h2 className={styles.customTitle}>¿Necesitas algo más específico?</h2>
                            <p className={styles.customText}>
                                Si nuestros productos SaaS no encajan al 100%, diseñamos tu solución desde cero.
                                Branding, web, apps, automatización — todo como servicio, con precio cerrado o mantenimiento mensual.
                            </p>
                            <div className={styles.customPrices}>
                                <div><strong>Branding & Web</strong><span>Desde 200€</span></div>
                                <div><strong>Apps & Automatización</strong><span>Desde 500€</span></div>
                            </div>
                            <Link to="/services"><Button variant="primary">Ver servicios</Button></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className={styles.section}>
                <div className={styles.container} ref={faqRef}>
                    <div className={`${styles.sectionHeader} reveal`}>
                        <h2 className={styles.sectionTitle}>Preguntas frecuentes</h2>
                    </div>
                    <div className={styles.faqGrid}>
                        {[
                            { q: '¿Puedo cambiar de plan?', a: 'Sí, puedes subir o bajar de plan en cualquier momento. Los cambios se aplican en el siguiente ciclo de facturación.' },
                            { q: '¿Hay compromiso de permanencia?', a: 'No. Todos los planes son mensuales y puedes cancelar cuando quieras.' },
                            { q: '¿Qué métodos de pago aceptáis?', a: 'Tarjeta de crédito/débito, transferencia bancaria y Bizum para clientes en España.' },
                            { q: '¿Incluye migración de datos?', a: 'Sí, el onboarding incluye importación de tus datos existentes. Te ayudamos en el proceso.' },
                        ].map((f) => (
                            <div key={f.q} className={`${styles.faqCard} reveal`}>
                                <h4>{f.q}</h4>
                                <p>{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
