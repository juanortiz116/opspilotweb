import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Home.module.css';

export const Home: React.FC = () => {
    // SEO Implementation
    useEffect(() => {
        // Update Title
        document.title = "Opspilot | Sistema Operativo para Reformas y Energía";

        // Update Meta Tags
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', "Digitaliza tu empresa de reformas o energía con Opspilot. Software integral para presupuestos, CRM y control de obra. Ahorra tiempo y maximiza tu margen.");
        } else {
            const meta = document.createElement('meta');
            meta.name = "description";
            meta.content = "Digitaliza tu empresa de reformas o energía con Opspilot. Software integral para presupuestos, CRM y control de obra. Ahorra tiempo y maximiza tu margen.";
            document.head.appendChild(meta);
        }

        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', "software reformas, programa presupuestos obra, crm comercial energia, digitalizacion pymes cordoba, automatizacion facturas");
        } else {
            const meta = document.createElement('meta');
            meta.name = "keywords";
            meta.content = "software reformas, programa presupuestos obra, crm comercial energia, digitalizacion pymes cordoba, automatizacion facturas";
            document.head.appendChild(meta);
        }

        // Add JSON-LD
        const script = document.createElement('script');
        script.type = "application/ld+json";
        script.text = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Opspilot",
            "description": "Consultora de operaciones y software para empresas de reformas y energía.",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Córdoba",
                "addressRegion": "Andalucía",
                "addressCountry": "ES"
            },
            "priceRange": "$$",
            "openingHours": "Mo-Fr 09:00-18:00"
        });
        document.head.appendChild(script);

        return () => {
            // Cleanup
            document.head.removeChild(script);
        };
    }, []);

    // Scroll Reveal Refs
    const problemRef = useScrollReveal<HTMLDivElement>({ stagger: true });
    const solutionsRef = useScrollReveal<HTMLDivElement>({ stagger: true });
    const caseRef = useScrollReveal<HTMLDivElement>({ stagger: true });
    const ctaRef = useScrollReveal<HTMLDivElement>();

    return (
        <div className={styles.page}>
            {/* ═══ SECTION 1: HERO - COPYWRITING DE VENTAS ═══ */}
            <section className={styles.hero}>
                <div className={`${styles.heroGlow} anim-pulse-glow`}></div>
                <div className={`${styles.container} ${styles.heroGrid}`}>

                    <div className={styles.heroContent}>
                        <div className={styles.sectionTag}>SISTEMA OPERATIVO INTEGRAL</div>

                        <h1 className={styles.heroTitle}>
                            Digitaliza tu empresa de<br />
                            <span style={{ color: 'var(--color-primary)' }}>Reformas y Energía.</span>
                        </h1>

                        <p className={styles.heroSubtitle}>
                            Control total de tus obras, clientes y contratos.
                            <strong>Opspilot</strong> centraliza presupuestos, CRM y facturación para que dejes de perder tiempo y dinero en gestión manual.
                        </p>

                        <div className={styles.ctaGroup}>
                            <a href="#contacto" style={{ textDecoration: 'none' }}>
                                <Button
                                    variant="primary"
                                    size="lg"
                                    style={{
                                        borderRadius: '99px',
                                        fontWeight: 700,
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg> Auditar mi Negocio
                                </Button>
                            </a>
                            <a href="#soluciones" style={{ textDecoration: 'none' }}>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    style={{
                                        borderRadius: '99px',
                                        fontWeight: 500,
                                        color: 'white',
                                        borderColor: 'rgba(255,255,255,0.2)'
                                    }}
                                >
                                    Ver cómo funciona
                                </Button>
                            </a>
                        </div>

                        <p style={{ marginTop: '20px', fontSize: '0.85rem', color: 'var(--color-dark-text-muted)', opacity: 0.7 }}>
                            📍 Tecnología desarrollada en Córdoba. Implementación en toda España.
                        </p>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.dashboardMock}>
                            <div className={`${styles.floatingBadge} ${styles.badge1}`}>
                                <span className={styles.badgeIcon}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#39ce86' }}><path d="M12 1v22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                </span>
                                <div>
                                    <div style={{ fontSize: '10px', opacity: 0.7, textTransform: 'uppercase' }}>Margen Recuperado</div>
                                    <div style={{ fontWeight: 'bold', color: '#fff' }}>+4.200€/mes</div>
                                </div>
                            </div>

                            <div className={`${styles.floatingBadge} ${styles.badge2}`}>
                                <span className={styles.badgeIcon}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#f59e0b' }}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                </span>
                                <div>
                                    <div style={{ fontSize: '10px', opacity: 0.7, textTransform: 'uppercase' }}>Presupuesto Obra</div>
                                    <div style={{ fontWeight: 'bold', color: '#fff' }}>3 minutos</div>
                                </div>
                            </div>

                            <div className={styles.mockHeader}><div className={styles.mockDots}><span></span><span></span><span></span></div></div>
                            <div className={styles.mockBody}>
                                <div className={styles.mockSidebar}><div className={styles.mockNav}></div><div className={styles.mockNav}></div></div>
                                <div className={styles.mockContent}>
                                    <div className={styles.mockCards}><div className={styles.mockCard}></div><div className={styles.mockCard}></div></div>
                                    <div className={styles.mockChart}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 2: EL DIAGNÓSTICO ═══ */}
            <section className={styles.problemSection}>
                <div className={styles.container} ref={problemRef}>
                    <div className={`${styles.sectionHeader} reveal`}>
                        <span className={styles.sectionTag}>EL DIAGNÓSTICO</span>
                        <h2 className={styles.sectionTitle}>¿Te suena alguna de estas frases?</h2>
                    </div>

                    <div className={styles.problemGrid}>
                        <div className={`${styles.problemCard} reveal`}>
                            <div className={styles.problemIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-primary)' }}><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                            </div>
                            <h3 className={styles.problemTitle}>"No sé dónde gano dinero"</h3>
                            <p className={styles.problemText}>
                                Facturas mucho, pero la cuenta no sube. Materiales perdidos, horas extra sin cobrar y márgenes que se comen los imprevistos porque no tienes control real de costes.
                            </p>
                        </div>

                        <div className={`${styles.problemCard} reveal`}>
                            <div className={styles.problemIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-primary)' }}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            </div>
                            <h3 className={styles.problemTitle}>"Echo presupuestos de noche"</h3>
                            <p className={styles.problemText}>
                                Después de 10 horas en la obra o visitando clientes, te toca sentarte con el Excel. Tardas días en responder y el cliente se va con otro que fue más rápido.
                            </p>
                        </div>

                        <div className={`${styles.problemCard} reveal`}>
                            <div className={styles.problemIcon}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-primary)' }}><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                            </div>
                            <h3 className={styles.problemTitle}>"Tengo 5 programas distintos"</h3>
                            <p className={styles.problemText}>
                                El WhatsApp para hablar, el Excel para sumar, el Word para facturas... Nada está conectado. Tu información es un puzzle y pierdes datos por el camino.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 3: VERTICALES OPSPILOT ═══ */}
            <section className={styles.solutionsSection} id="soluciones">
                <div className={styles.container} ref={solutionsRef}>
                    <div className={`${styles.sectionHeader} reveal`}>
                        <span className={styles.sectionTag}>VERTICALES OPSPILOT</span>
                        <h2 className={styles.sectionTitle}>Software especializado.<br />Adaptado a tu sector.</h2>
                    </div>

                    <div className={styles.solutionsGrid}>

                        <div className={`${styles.solutionCard} ${styles.solutionCardHighlight} reveal`}>
                            <div className={styles.solutionIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-primary)' }}><path d="M3 21h18" /><path d="M5 21V7l8-4 8 4v14" /><path d="M17 21v-8H7v8" /><line x1="9" y1="10" x2="9" y2="10" /><line x1="12" y1="8" x2="12" y2="8" /><line x1="15" y1="10" x2="15" y2="10" /></svg>
                            </div>
                            <span className={styles.solutionLabel}>Para Empresas de Reformas</span>
                            <h3 className={styles.solutionTitle}>Gestión Integral de Obras</h3>
                            <p className={styles.solutionText}>
                                Olvídate del Excel y el caos. Un sistema todo-en-uno diseñado para controlar costes, gestionar equipos y presentar presupuestos ganadores.
                            </p>
                            <ul className={styles.solutionFeatures}>
                                <li><strong>Presupuestador Ágil:</strong> Crea valoraciones precisas en minutos.</li>
                                <li><strong>Control de Costes:</strong> Monitoriza materiales y mano de obra en tiempo real.</li>
                                <li><strong>Gestión de Clientes:</strong> Centraliza toda la comunicación y documentos.</li>
                            </ul>
                            <div style={{ marginTop: '20px' }}>
                                <Link to="/demo" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>
                                    Ver Demo Reformas →
                                </Link>
                            </div>
                        </div>

                        <div className={`${styles.solutionCard} reveal`}>
                            <div className={styles.solutionIcon}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-primary)' }}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                            </div>
                            <span className={styles.solutionLabel}>Para Sector Energético</span>
                            <h3 className={styles.solutionTitle}>Gestión Comercial Energética</h3>
                            <p className={styles.solutionText}>
                                Maximiza la productividad de tu equipo comercial. Agiliza la captación, el seguimiento y el cierre de contratos de luz y gas.
                            </p>
                            <ul className={styles.solutionFeatures}>
                                <li><strong>Digitalización de Facturas:</strong> Lectura automática de datos.</li>
                                <li><strong>Comparador Tarifas:</strong> Genera estudios de ahorro personalizados.</li>
                                <li><strong>Firma Digital:</strong> Cierra contratos en el momento desde cualquier dispositivo.</li>
                            </ul>
                            <div style={{ marginTop: '20px' }}>
                                <Link to="/demo" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>
                                    Ver Demo Energía →
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ═══ SECTION 4: CASO DE ÉXITO ═══ */}
            <section className={styles.caseSection}>
                <div className={`${styles.container} ${styles.caseGrid}`} ref={caseRef}>

                    <div className={`${styles.caseContent} reveal`}>
                        <div className={styles.sectionTag}>CASO DE ÉXITO</div>
                        <h2 className={styles.caseTitle}>"Antes perdía 2 mañanas a la semana con papeles. Ahora tardo 15 minutos."</h2>

                        <p style={{ color: 'var(--color-dark-text-muted)', marginBottom: '20px' }}>
                            <strong>Cliente:</strong> Empresa de Reformas en Córdoba.<br />
                            Digitalizamos su proceso comercial y de gestión de obras con Opspilot.
                        </p>

                        <ul className={styles.caseChecklist}>
                            <li>
                                <span className={styles.checkIcon}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </span>
                                <strong>Imagen Profesional:</strong> Propuestas claras y modernas que generan confianza.
                            </li>
                            <li>
                                <span className={styles.checkIcon}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </span>
                                <strong>Automatización:</strong> Los clientes reciben sus presupuestos al instante.
                            </li>
                            <li>
                                <span className={styles.checkIcon}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </span>
                                <strong>Eficiencia:</strong> Agenda organizada y seguimiento automático de clientes.
                            </li>
                        </ul>

                        <div className={styles.caseResult}>
                            <p>"Opspilot no es un gasto, es la mejor herramienta que he comprado. Mejor que la furgoneta nueva."</p>
                        </div>
                    </div>

                    <div className={`${styles.caseVisual} reveal`}>
                        <div className={styles.phoneMockup}>
                            <div className={styles.phoneNotch}></div>
                            <div className={styles.phoneScreen}>
                                <div className={styles.phoneHeader} style={{ background: '#075e54', color: 'white', fontSize: '12px', padding: '10px' }}>
                                    WhatsApp Business API
                                </div>
                                <div className={styles.phoneContent}>
                                    <div style={{ background: '#1f2c34', padding: '10px', borderRadius: '0 10px 10px 10px', color: '#fff', fontSize: '12px', marginBottom: '10px' }}>
                                        Hola Juan 👋. Tu presupuesto para la reforma del baño está listo. ¿Quieres verlo?
                                    </div>

                                    <div className={styles.reformCard}>
                                        <div className={`${styles.reformImage} ${styles.reform2}`}>
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7, color: 'white' }}><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-1C2 2.5 2 5 2 5s1.5 2 2 4.5V11" /><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-1C2 2.5 2 5 2 5s1.5 2 2 4.5V11" /><line x1="8" y1="6" x2="8" y2="6" /><path d="M7 19v2" /><path d="M2 19v2" /><path d="M14 19v2" /><path d="M19 19v2" /><path d="M3 15h18" /><path d="M21 15v-2a4 4 0 0 0-3-3.87V9a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v.13A4 4 0 0 0 3 13v2" /></svg>
                                        </div>
                                        <div className={styles.reformInfo}>
                                            <div>
                                                <div className={styles.reformTitle}>Reforma Baño Principal</div>
                                                <div style={{ fontSize: '10px', opacity: 0.7 }}>Ref: #2024-890</div>
                                            </div>
                                            <div className={styles.reformPrice}>3.450€</div>
                                        </div>
                                    </div>

                                    <div style={{ background: '#005c4b', padding: '10px', borderRadius: '10px 0 10px 10px', color: '#fff', fontSize: '12px', alignSelf: 'flexEnd', marginTop: '10px' }}>
                                        ¡Lo veo perfecto! ¿Cuándo podéis empezar?
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ═══ SECTION 5: CTA FINAL ═══ */}
            <section className={styles.ctaSection} id="contacto">
                <div className={styles.container}>
                    <div className={`${styles.ctaBlock} reveal`} ref={ctaRef}>
                        <div className={`${styles.ctaGlow} anim-pulse-glow`}></div>

                        <h2 className={styles.ctaTitle}>
                            Deja de ser el "hombre orquesta".<br />
                            Empieza a ser empresario.
                        </h2>

                        <p style={{ maxWidth: '600px', margin: '0 auto 40px auto', color: 'var(--color-dark-text-muted)' }}>
                            Te ofrecemos una auditoría gratuita de 20 minutos. Sin compromiso de compra.
                            Solo analizamos dónde pierdes tiempo y te decimos cómo arreglarlo.
                        </p>

                        <div className={styles.ctaButtons}>
                            <a href="https://wa.me/34640756126?text=Hola,%20quiero%20más%20información%20sobre%20Opspilot" style={{ textDecoration: 'none' }}>
                                <Button
                                    variant="primary"
                                    style={{
                                        background: '#25D366',
                                        color: '#fff',
                                        padding: '16px 32px',
                                        borderRadius: '99px',
                                        fontWeight: 'bold',
                                        fontSize: '1.1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
                                        border: 'none'
                                    }}
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ fill: 'white' }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg> Hablar por WhatsApp
                                </Button>
                            </a>
                            <a href="mailto:opspilot.contact@gmail.com" style={{ textDecoration: 'none' }}>
                                <Button
                                    variant="outline"
                                    style={{
                                        background: 'transparent',
                                        borderColor: 'var(--color-primary)',
                                        color: 'var(--color-primary)',
                                        padding: '16px 32px',
                                        borderRadius: '99px',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Enviar un Correo
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
