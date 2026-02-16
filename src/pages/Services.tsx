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
                    <p className={styles.heroSub}>
                        Desde identidad visual hasta automatizaciones complejas, todo con cercanía y datos.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className={styles.section}>
                <div className={styles.container} ref={servicesRef}>
                    <div className={`${styles.sectionHeader} reveal`}>
                        <h2 className={styles.sectionTitle}>¿Qué podemos hacer por ti?</h2>
                        <p className={styles.sectionSub}>Dos líneas de servicio, un solo objetivo: que crezcas.</p>
                    </div>
                    <div className={styles.servicesGrid}>
                        <div className={`${styles.serviceCard} reveal`}>
                            <div className={styles.serviceHeader}>
                                <span className={styles.serviceEmoji}>🎨</span>
                                <h3>Branding &amp; Web</h3>
                            </div>
                            <p className={styles.serviceDesc}>Identidad visual, web corporativa, landing pages y diseño UI/UX que convierte.</p>
                            <ul className={styles.serviceList}>
                                <li>Logo + manual de marca</li>
                                <li>Web responsive + SEO base</li>
                                <li>Diseño de UI/UX a medida</li>
                                <li>Copywriting persuasivo</li>
                            </ul>
                            <div className={styles.servicePrice}>
                                <span className={styles.priceAmount}>Desde 200€</span>
                                <span className={styles.priceNote}>Proyecto cerrado o mensual</span>
                            </div>
                        </div>
                        <div className={`${styles.serviceCard} ${styles.serviceCardHighlight} reveal`}>
                            <div className={styles.serviceHeader}>
                                <span className={styles.serviceEmoji}>⚡</span>
                                <h3>Apps &amp; Automatización</h3>
                            </div>
                            <p className={styles.serviceDesc}>Desarrollo de aplicaciones, CRMs, integraciones y flujos automáticos.</p>
                            <ul className={styles.serviceList}>
                                <li>Apps web / móvil</li>
                                <li>CRM personalizado</li>
                                <li>Integración WhatsApp Business</li>
                                <li>Automatización de procesos</li>
                            </ul>
                            <div className={styles.servicePrice}>
                                <span className={styles.priceAmount}>Desde 500€</span>
                                <span className={styles.priceNote}>+ mantenimiento opcional</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className={styles.section}>
                <div className={styles.container} ref={valueRef}>
                    <div className={`${styles.sectionHeader} reveal`}>
                        <h2 className={styles.sectionTitle}>¿Por qué OpsPilot?</h2>
                    </div>
                    <div className={styles.valueGrid}>
                        <div className={`${styles.valueCard} reveal`}>
                            <span className={styles.valueIcon}>📊</span>
                            <h4>Datos reales</h4>
                            <p>Cada decisión se basa en métricas y análisis de tu negocio.</p>
                        </div>
                        <div className={`${styles.valueCard} reveal`}>
                            <span className={styles.valueIcon}>🤝</span>
                            <h4>Cercanía</h4>
                            <p>No somos una consultora lejana. Somos tu equipo técnico.</p>
                        </div>
                        <div className={`${styles.valueCard} reveal`}>
                            <span className={styles.valueIcon}>📈</span>
                            <h4>Escalabilidad</h4>
                            <p>Empezamos pequeños, crecemos contigo sin sobre-ingeniería.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Study Proof */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={`${styles.caseProof} reveal`} ref={caseRef}>
                        <div className={styles.caseContent}>
                            <span className={styles.tag}>Caso real</span>
                            <h3>J.R. Rodríguez — Reformas</h3>
                            <p>CRM a medida, presupuestador con IA y citas automatizadas vía WhatsApp. En 3 meses triplicaron su capacidad.</p>
                            <Link to="/cases"><Button variant="outline" size="md">Ver caso completo →</Button></Link>
                        </div>
                        <div className={styles.caseStats}>
                            <div><strong>-70%</strong><span>Tiempo gestión</span></div>
                            <div><strong>+3x</strong><span>Clientes</span></div>
                            <div><strong>0€</strong><span>Personal extra</span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={`${styles.ctaBlock} reveal`} ref={ctaRef}>
                        <h2 className={styles.ctaTitle}>¿Empezamos?</h2>
                        <p className={styles.ctaSub}>Cuéntanos tu caso y te proponemos un plan claro en 24h.</p>
                        <div className={styles.ctaRow}>
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
