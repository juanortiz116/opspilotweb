import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Services.module.css';
import Aurora from '../components/common/Aurora';
import { Zap, Handshake, TrendingUp, MessageSquare, Settings, BarChart3 } from 'lucide-react';

export const Services: React.FC = () => {
    const servicesRef = useScrollReveal<HTMLDivElement>({ stagger: true });
    const valueRef = useScrollReveal<HTMLDivElement>({ stagger: true });
    const ctaRef = useScrollReveal<HTMLDivElement>();

    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.auroraBackground}>
                    <Aurora colorStops={['#0d1b2a', '#1b998b', '#39ce86']} blend={0.6} amplitude={1.0} speed={0.8} />
                </div>
                <div className={styles.heroContent}>
                    <span className={styles.tag}>Servicios</span>
                    <h1 className={styles.heroTitle}>
                        Resolvemos problemas operativos{' '}
                        <span className="text-gradient">con software que funciona.</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Analizamos cómo opera tu negocio y construimos las herramientas exactas que necesitas.<br />
                        Trato directo, entrega real y sin desaparecer cuando terminamos.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className={styles.servicesSection}>
                <div className={styles.container} ref={servicesRef}>
                    <div className={`${styles.sectionHeader} reveal`}>
                        <h2 className={styles.sectionTitle}>¿Qué podemos hacer por ti?</h2>
                        <p className={styles.sectionSubtitle}>No vendemos tecnología. Resolvemos problemas con ella.</p>
                    </div>
                    <div className={styles.servicesGrid}>
                        <div className={`${styles.serviceCard} reveal`}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardIcon}>
                                    <Zap size={24} />
                                </div>
                                <h3 className={styles.cardTitle}>Automatización de procesos</h3>
                            </div>
                            <p className={styles.cardText}>
                                Convertimos tareas manuales y repetitivas en flujos automáticos. Si tu equipo gasta tiempo en copiar datos, enviar emails o rellenar formularios, lo resolvemos.
                            </p>
                            <ul className={styles.cardFeatures}>
                                <li>
                                    <span className={styles.featureCheck}>✓</span> Mapeo de procesos actuales
                                </li>
                                <li>
                                    <span className={styles.featureCheck}>✓</span> Automatizaciones que trabajan mientras tú no
                                </li>
                                <li>
                                    <span className={styles.featureCheck}>✓</span> Integraciones entre herramientas existentes
                                </li>
                                <li>
                                    <span className={styles.featureCheck}>✓</span> Seguimiento y mantenimiento continuos
                                </li>
                            </ul>
                        </div>
                        <div className={`${styles.serviceCard} ${styles.serviceCardHighlight} reveal`}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardIcon}>
                                    <Settings size={24} />
                                </div>
                                <h3 className={styles.cardTitle}>Software de gestión a medida</h3>
                            </div>
                            <p className={styles.cardText}>
                                Cuando el software del mercado no encaja con tu forma de operar, lo construimos nosotros. Desde un CRM configurado a tu flujo hasta herramientas específicas de tu sector.
                            </p>
                            <ul className={styles.cardFeatures}>
                                <li>
                                    <span className={styles.featureCheck}>✓</span> CRM adaptado a tu ciclo de venta
                                </li>
                                <li>
                                    <span className={styles.featureCheck}>✓</span> Paneles de control con tus indicadores reales
                                </li>
                                <li>
                                    <span className={styles.featureCheck}>✓</span> Comunicación con clientes centralizada
                                </li>
                                <li>
                                    <span className={styles.featureCheck}>✓</span> Escalable conforme crece tu negocio
                                </li>
                            </ul>
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
                                <BarChart3 className="icon-md" />
                            </div>
                            <h4 className={styles.valueTitle}>Sin sorpresas al final</h4>
                            <p className={styles.valueText}>
                                Te decimos exactamente qué vamos a construir antes de empezar.<br />
                                Sin horas extra que no pediste, sin cambios de alcance inesperados.
                            </p>
                        </div>
                        <div className={`${styles.valueCard} reveal`}>
                            <div className={styles.valueIcon}>
                                <Handshake className="icon-md" />
                            </div>
                            <h4 className={styles.valueTitle}>Somos tu equipo, no un proveedor</h4>
                            <p className={styles.valueText}>
                                No desaparecemos cuando entregamos.<br />
                                Nos quedamos contigo mientras nos necesites.
                            </p>
                        </div>
                        <div className={`${styles.valueCard} reveal`}>
                            <div className={styles.valueIcon}>
                                <TrendingUp className="icon-md" />
                            </div>
                            <h4 className={styles.valueTitle}>Empezamos donde estás tú</h4>
                            <p className={styles.valueText}>
                                No hace falta un presupuesto enorme para empezar.<br />
                                Empezamos pequeño y crecemos juntos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={`${styles.ctaBlock} reveal`} ref={ctaRef}>
                        <h2 className={styles.ctaTitle}>¿Por dónde empezamos?</h2>
                        <p className={styles.ctaSubtitle}>
                            Cuéntanos tu caso. En 30 minutos te decimos si tenemos solución, cómo sería y cuánto tiempo llevaría.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link to="/contact">
                                <Button variant="primary" size="lg">Reservar diagnóstico gratuito</Button>
                            </Link>
                            <a href="https://wa.me/34640756126" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="lg">
                                    <MessageSquare size={20} style={{ marginRight: '8px' }} /> WhatsApp directo
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
