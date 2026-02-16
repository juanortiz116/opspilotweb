import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Services.module.css';

export const Services: React.FC = () => {
    const servicesRef = useScrollReveal<HTMLDivElement>({ stagger: true });
    const valueRef = useScrollReveal<HTMLDivElement>({ stagger: true });
    const caseRef = useScrollReveal<HTMLDivElement>();
    const ctaRef = useScrollReveal<HTMLDivElement>();

    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`${styles.heroGlow} anim-pulse-glow`}></div>
                <div className={styles.heroContent}>
                    <span className={styles.tag}>Servicios</span>
                    <h1 className={styles.heroTitle}>
                        Construimos lo que tu negocio necesita.{' '}
                        <span className="text-gradient">Sin más.</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Desde identidad visual hasta automatizaciones complejas, todo con cercanía y datos.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className={styles.servicesSection}>
                <div className={styles.container} ref={servicesRef}>
                    <div className={`${styles.sectionHeader} reveal`}>
                        <h2 className={styles.sectionTitle}>¿Qué podemos hacer por ti?</h2>
                        <p className={styles.sectionSubtitle}>Dos líneas de servicio, un solo objetivo: que crezcas.</p>
                    </div>
                    <div className={styles.servicesGrid}>
                        <div className={`${styles.serviceCard} reveal`}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardIcon}>
                                    <span style={{ fontSize: '1.5rem' }}>🎨</span>
                                </div>
                                <h3 className={styles.cardTitle}>Branding &amp; Web</h3>
                            </div>
                            <p className={styles.cardText}>Identidad visual, web corporativa, landing pages y diseño UI/UX que convierte.</p>
                            <ul className={styles.cardFeatures}>
                                <li>
                                    <span className={styles.featureCheck}>✓</span> Logo + manual de marca
                                </li>
                                <li>
                                    <span className={styles.featureCheck}>✓</span> Web responsive + SEO base
                                </li>
                                <li>
                                    <span className={styles.featureCheck}>✓</span> Diseño de UI/UX a medida
                                </li>
                                <li>
                                    <span className={styles.featureCheck}>✓</span> Copywriting persuasivo
                                </li>
                            </ul>
                            <div className={styles.cardFooter}>
                                <div className={styles.cardPrice}>
                                    <span className={styles.priceFrom}>Desde</span>
                                    <span className={styles.priceAmount}>200€</span>
                                </div>
                                <span className={styles.priceFrom}>Proyecto cerrado o mensual</span>
                            </div>
                        </div>
                        <div className={`${styles.serviceCard} ${styles.serviceCardHighlight} reveal`}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardIcon}>
                                    <span style={{ fontSize: '1.5rem' }}>⚡</span>
                                </div>
                                <h3 className={styles.cardTitle}>Apps &amp; Automatización</h3>
                            </div>
                            <p className={styles.cardText}>Desarrollo de aplicaciones, CRMs, integraciones y flujos automáticos.</p>
                            <ul className={styles.cardFeatures}>
                                <li>
                                    <span className={styles.featureCheck}>✓</span> Apps web / móvil
                                </li>
                                <li>
                                    <span className={styles.featureCheck}>✓</span> CRM personalizado
                                </li>
                                <li>
                                    <span className={styles.featureCheck}>✓</span> Integración WhatsApp Business
                                </li>
                                <li>
                                    <span className={styles.featureCheck}>✓</span> Automatización de procesos
                                </li>
                            </ul>
                            <div className={styles.cardFooter}>
                                <div className={styles.cardPrice}>
                                    <span className={styles.priceFrom}>Desde</span>
                                    <span className={styles.priceAmount}>500€</span>
                                </div>
                                <span className={styles.priceFrom}>+ mantenimiento opcional</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className={styles.valueSection}>
                <div className={styles.container} ref={valueRef}>
                    <div className={`${styles.sectionHeader} reveal`}>
                        <h2 className={styles.sectionTitle}>¿Por qué OpsPilot?</h2>
                    </div>
                    <div className={styles.valueGrid}>
                        <div className={`${styles.valueCard} reveal`}>
                            <div className={styles.valueIcon}>
                                <span style={{ fontSize: '1.5rem' }}>📊</span>
                            </div>
                            <h4 className={styles.valueTitle}>Datos reales</h4>
                            <p className={styles.valueText}>Cada decisión se basa en métricas y análisis de tu negocio.</p>
                        </div>
                        <div className={`${styles.valueCard} reveal`}>
                            <div className={styles.valueIcon}>
                                <span style={{ fontSize: '1.5rem' }}>🤝</span>
                            </div>
                            <h4 className={styles.valueTitle}>Cercanía</h4>
                            <p className={styles.valueText}>No somos una consultora lejana. Somos tu equipo técnico.</p>
                        </div>
                        <div className={`${styles.valueCard} reveal`}>
                            <div className={styles.valueIcon}>
                                <span style={{ fontSize: '1.5rem' }}>📈</span>
                            </div>
                            <h4 className={styles.valueTitle}>Escalabilidad</h4>
                            <p className={styles.valueText}>Empezamos pequeños, crecemos contigo sin sobre-ingeniería.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study Proof */}
            <section className={styles.proofSection}>
                <div className={styles.container}>
                    <div className={`${styles.proofCard} reveal`} ref={caseRef}>
                        <div className={styles.proofContent}>
                            <span className={styles.tag}>Caso real</span>
                            <h3 className={styles.proofTitle}>J.R. Rodríguez — Reformas</h3>
                            <p className={styles.proofText}>CRM a medida, presupuestador con IA y citas automáticas vía WhatsApp. En 3 meses triplicaron su capacidad.</p>
                            <Link to="/cases"><Button variant="outline" size="md">Ver caso completo →</Button></Link>
                        </div>
                        <div className={styles.proofStats}>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>-70%</span>
                                <span className={styles.statLabel}>Tiempo gestión</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>+3x</span>
                                <span className={styles.statLabel}>Clientes</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>0€</span>
                                <span className={styles.statLabel}>Personal extra</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={`${styles.ctaBlock} reveal`} ref={ctaRef}>
                        <h2 className={styles.ctaTitle}>¿Empezamos?</h2>
                        <p className={styles.ctaSubtitle}>Cuéntanos tu caso y te proponemos un plan claro en 24h.</p>
                        <div className={styles.ctaButtons}>
                            <Link to="/contact"><Button variant="primary" size="lg">Agendar consultoría</Button></Link>
                            <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="lg">💬 WhatsApp directo</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
