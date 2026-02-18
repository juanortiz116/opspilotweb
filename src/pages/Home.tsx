import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Home.module.css';

export const Home: React.FC = () => {
    // SEO Implementation
    useEffect(() => {
        // Update Title
        document.title = "Opspilot | Software de Gestión para Reformas y Energía en Córdoba";

        // Update Meta Tags
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', "Deja de perder dinero en gestión manual. Opspilot digitaliza tu empresa de reformas o energía. Presupuestos automáticos, CRM y control de obra. Auditoría gratuita.");
        } else {
            const meta = document.createElement('meta');
            meta.name = "description";
            meta.content = "Deja de perder dinero en gestión manual. Opspilot digitaliza tu empresa de reformas o energía. Presupuestos automáticos, CRM y control de obra. Auditoría gratuita.";
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
                        <div className={styles.sectionTag}>SISTEMA OPERATIVO EMPRESARIAL v2.0</div>

                        <h1 className={styles.heroTitle}>
                            Tu empresa factura.<br />
                            <span style={{ color: 'var(--color-primary)' }}>Tu operativa sangra.</span>
                        </h1>

                        <p className={styles.heroSubtitle}>
                            La mayoría de PYMES de construcción y energía pierden el 30% de su margen en "papeles" y caos.
                            En <strong>Opspilot</strong> no te vendemos una web bonita; te instalamos un sistema para que tu negocio funcione sin que tú estés encima.
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
                                    <span>🚀</span> Auditar mi Negocio Gratis
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
                                <span className={styles.badgeIcon}>💸</span>
                                <div>
                                    <div style={{ fontSize: '10px', opacity: 0.7, textTransform: 'uppercase' }}>Margen Recuperado</div>
                                    <div style={{ fontWeight: 'bold', color: '#fff' }}>+4.200€/mes</div>
                                </div>
                            </div>

                            <div className={`${styles.floatingBadge} ${styles.badge2}`}>
                                <span className={styles.badgeIcon}>⏳</span>
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
                            <div className={styles.problemIcon}>📉</div>
                            <h3 className={styles.problemTitle}>"No sé dónde gano dinero"</h3>
                            <p className={styles.problemText}>
                                Facturas mucho, pero la cuenta no sube. Materiales perdidos, horas extra sin cobrar y márgenes que se comen los imprevistos porque no tienes control real de costes.
                            </p>
                        </div>

                        <div className={`${styles.problemCard} reveal`}>
                            <div className={styles.problemIcon}>🌙</div>
                            <h3 className={styles.problemTitle}>"Echo presupuestos de noche"</h3>
                            <p className={styles.problemText}>
                                Después de 10 horas en la obra o visitando clientes, te toca sentarte con el Excel. Tardas días en responder y el cliente se va con otro que fue más rápido.
                            </p>
                        </div>

                        <div className={`${styles.problemCard} reveal`}>
                            <div className={styles.problemIcon}>🤯</div>
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
                        <h2 className={styles.sectionTitle}>No vendemos "Software".<br />Vendemos soluciones de nicho.</h2>
                    </div>

                    <div className={styles.solutionsGrid}>

                        <div className={`${styles.solutionCard} ${styles.solutionCardHighlight} reveal`}>
                            <div className={styles.solutionIcon}>🏗️</div>
                            <span className={styles.solutionLabel}>Opspilot Construction OS</span>
                            <h3 className={styles.solutionTitle}>Software para Reformas y Tiendas</h3>
                            <p className={styles.solutionText}>
                                Olvídate del AutoCAD y el Presto complicado. Un sistema todo-en-uno diseñado para que el reformista venda más y gestione mejor.
                            </p>
                            <ul className={styles.solutionFeatures}>
                                <li><strong>Presupuestador Visual IA:</strong> De medir a presupuestar en el acto.</li>
                                <li><strong>Control de Obra:</strong> Gestiona materiales y desviaciones.</li>
                                <li><strong>WhatsApp Auto:</strong> Citas y seguimiento automático.</li>
                            </ul>
                            <div style={{ marginTop: '20px' }}>
                                <Link to="/demo" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>
                                    Ver Demo Reformas →
                                </Link>
                            </div>
                        </div>

                        <div className={`${styles.solutionCard} reveal`}>
                            <div className={styles.solutionIcon}>⚡</div>
                            <span className={styles.solutionLabel}>Opspilot Energy OS</span>
                            <h3 className={styles.solutionTitle}>CRM para Sector Energético</h3>
                            <p className={styles.solutionText}>
                                Para asesorías y equipos comerciales agresivos. Elimina el papeleo y cierra contratos en la primera visita.
                            </p>
                            <ul className={styles.solutionFeatures}>
                                <li><strong>Escáner OCR:</strong> Lee facturas de luz con una foto.</li>
                                <li><strong>Comparador Tarifas:</strong> Calcula el ahorro al instante.</li>
                                <li><strong>Firma Digital:</strong> Cierre de contrato en el móvil.</li>
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
                            <strong>Cliente:</strong> Reformas J.R. Rodríguez (Córdoba).<br />
                            Implementamos Opspilot Construction OS y automatizamos la captación de clientes.
                        </p>

                        <ul className={styles.caseChecklist}>
                            <li><span className={styles.checkIcon}>✓</span> <strong>Marca Profesional:</strong> Web y Branding desde cero.</li>
                            <li><span className={styles.checkIcon}>✓</span> <strong>Captación:</strong> Los clientes piden presupuesto solos por la web.</li>
                            <li><span className={styles.checkIcon}>✓</span> <strong>Cierre:</strong> Las citas se agendan solas por WhatsApp.</li>
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
                                        <div className={`${styles.reformImage} ${styles.reform2}`}></div>
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
                            <a href="https://wa.me/34600000000?text=Hola,%20quiero%20la%20auditoría%20gratuita" style={{ textDecoration: 'none' }}>
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
                                    <span>💬</span> Hablar por WhatsApp
                                </Button>
                            </a>
                            <a href="mailto:hola@opspilot.com" style={{ textDecoration: 'none' }}>
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
