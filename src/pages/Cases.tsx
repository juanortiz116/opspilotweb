import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Cases.module.css';

export const Cases: React.FC = () => {
    const featuredRef = useScrollReveal<HTMLDivElement>({ stagger: true });
    const gridRef = useScrollReveal<HTMLDivElement>({ stagger: true });
    const ctaRef = useScrollReveal<HTMLDivElement>();

    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`${styles.heroGlow} anim-pulse-glow`}></div>
                <div className={styles.heroContent}>
                    <span className={styles.tag}>Casos de Éxito</span>
                    <h1 className={styles.heroTitle}>
                        Historias reales,{' '}
                        <span className="text-gradient">resultados medibles.</span>
                    </h1>
                    <p className={styles.heroSub}>
                        Cada proyecto que entregamos tiene un impacto directo en el negocio de nuestros clientes. Aquí te mostramos cómo.
                    </p>
                </div>
            </section>

            {/* Featured: J.R. Rodríguez */}
            <section className={styles.section}>
                <div className={styles.container} ref={featuredRef}>
                    <div className={styles.featured}>
                        <div className={`${styles.featuredContent} reveal`}>
                            <span className={styles.tag}>Caso destacado</span>
                            <span className={styles.sector}>Reformas</span>
                            <h2 className={styles.featuredTitle}>J.R. Rodríguez: De la libreta al sistema inteligente</h2>
                            <p className={styles.featuredText}>
                                Empresa familiar de reformas en Madrid. Gestionaban todo con Excel, llamadas y libretas.
                                Con OpsPilot implementamos un CRM a medida, presupuestador con IA y sistema de citas
                                automatizado vía WhatsApp. En 3 meses triplicaron su capacidad de atención sin contratar personal.
                            </p>
                            <div className={styles.statsRow}>
                                <div className={styles.stat}>
                                    <span className={styles.statNum}>-70%</span>
                                    <span className={styles.statLabel}>Tiempo en gestión</span>
                                </div>
                                <div className={styles.stat}>
                                    <span className={styles.statNum}>+3x</span>
                                    <span className={styles.statLabel}>Clientes atendidos</span>
                                </div>
                                <div className={styles.stat}>
                                    <span className={styles.statNum}>0€</span>
                                    <span className={styles.statLabel}>Inversión en personal</span>
                                </div>
                            </div>
                            <div className={styles.quote}>
                                <p>"Pasamos de perder presupuestos por falta de seguimiento a tener un sistema que trabaja solo."</p>
                                <span>— J.R. Rodríguez, CEO</span>
                            </div>
                        </div>
                        <div className={`${styles.featuredVisual} reveal`}>
                            <div className={`${styles.mockupPhone} anim-float-slow`}>
                                <div className={styles.mockupScreen}>
                                    <div className={styles.mockupBar}>
                                        <span></span><span></span><span></span>
                                    </div>
                                    <div className={styles.mockupContent}>
                                        <div className={styles.mockupRow}><span>📋</span> Reforma cocina integral</div>
                                        <div className={styles.mockupRow}><span>🔧</span> Baño completo 12m²</div>
                                        <div className={styles.mockupRow}><span>🏠</span> Reforma integral piso</div>
                                    </div>
                                    <div className={`${styles.mockupBadge} anim-border-glow`}>💬 WhatsApp integrado</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* More cases */}
            <section className={styles.section}>
                <div className={styles.container} ref={gridRef}>
                    <div className={`${styles.sectionHeader} reveal`}>
                        <h2 className={styles.sectionTitle}>Más historias</h2>
                        <p className={styles.sectionSub}>Diferentes sectores, misma metodología.</p>
                    </div>
                    <div className={styles.grid}>
                        {[
                            { sector: 'Hostelería', title: 'Hotel Boutique Levante', desc: 'Automatizaron check-in/out y comunicación con huéspedes. Redujeron recepción a 1 persona por turno.', s1: '-50%', l1: 'Costes de personal', s2: '4.9★', l2: 'Google Reviews' },
                            { sector: 'Gimnasios', title: 'FitZone Studio', desc: 'Sistema de reserva de clases, pagos recurrentes y comunicación automática por email y WhatsApp.', s1: '+120%', l1: 'Retención socios', s2: '€0', l2: 'Impagos mes' },
                            { sector: 'Clínica dental', title: 'Clínica Dra. López', desc: 'Agenda inteligente con recordatorios automáticos. Reducción de ausencias y facturación simplificada.', s1: '-80%', l1: 'No-shows', s2: '+40%', l2: 'Productividad' },
                            { sector: 'E-commerce', title: 'NaturalBox', desc: 'Integración de tienda online, CRM y logística automatizada. Pedidos procesados sin intervención manual.', s1: '3x', l1: 'Pedidos/día', s2: '-90%', l2: 'Errores envío' },
                        ].map((c) => (
                            <div key={c.title} className={`${styles.caseCard} reveal`}>
                                <span className={styles.caseSector}>{c.sector}</span>
                                <h3 className={styles.caseTitle}>{c.title}</h3>
                                <p className={styles.caseDesc}>{c.desc}</p>
                                <div className={styles.caseStats}>
                                    <div><strong>{c.s1}</strong><span>{c.l1}</span></div>
                                    <div><strong>{c.s2}</strong><span>{c.l2}</span></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={`${styles.ctaBlock} reveal`} ref={ctaRef}>
                        <h2 className={styles.ctaTitle}>¿Quieres ser el próximo caso de éxito?</h2>
                        <p className={styles.ctaSub}>Analizamos tu negocio gratis y te proponemos un plan de acción claro.</p>
                        <div className={styles.ctaRow}>
                            <Link to="/contact"><Button variant="primary" size="lg">Empezar ahora</Button></Link>
                            <Link to="/services"><Button variant="outline" size="lg">Ver servicios</Button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
