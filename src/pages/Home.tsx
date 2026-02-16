import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Home.module.css';

export const Home: React.FC = () => {
    const problemRef = useScrollReveal<HTMLDivElement>({ stagger: true });
    const solutionsRef = useScrollReveal<HTMLDivElement>({ stagger: true });
    const methodRef = useScrollReveal<HTMLDivElement>({ stagger: true });
    const caseRef = useScrollReveal<HTMLDivElement>({ stagger: true });
    const ctaRef = useScrollReveal<HTMLDivElement>();

    return (
        <div className={styles.page}>
            {/* ═══ SECTION 1: HERO ═══ */}
            <section className={styles.hero}>
                <div className={`${styles.heroGlow} anim-pulse-glow`}></div>
                <div className={styles.heroGrid}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>
                            Escala tu negocio con{' '}
                            <span className="text-gradient">claridad.</span>
                            <br />
                            Tecnología que une cercanía y datos.
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Dejamos atrás la gestión manual. Te acompañamos en el camino para
                            digitalizar tu empresa con soluciones a medida o herramientas listas
                            para usar.
                        </p>
                        <div className={styles.ctaGroup}>
                            <Link to="/services">
                                <Button variant="primary" size="lg">Ver el camino</Button>
                            </Link>
                            <Link to="/contact">
                                <Button variant="outline" size="lg">Hablemos de tu proyecto</Button>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.heroVisual}>
                        <div className={styles.dashboardMock}>
                            <div className={styles.mockHeader}>
                                <div className={styles.mockDots}>
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                            <div className={styles.mockBody}>
                                <div className={styles.mockSidebar}>
                                    <div className={styles.mockNav}></div>
                                    <div className={styles.mockNav}></div>
                                    <div className={styles.mockNav}></div>
                                    <div className={styles.mockNav}></div>
                                </div>
                                <div className={styles.mockContent}>
                                    <div className={styles.mockChart}></div>
                                    <div className={styles.mockCards}>
                                        <div className={styles.mockCard}></div>
                                        <div className={styles.mockCard}></div>
                                        <div className={styles.mockCard}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Floating elements */}
                        <div className={`${styles.floatingBadge} ${styles.badge1} anim-float`}>
                            <span className={styles.badgeIcon}>📊</span>
                            <span>+42% Eficiencia</span>
                        </div>
                        <div className={`${styles.floatingBadge} ${styles.badge2} anim-float-slow`}>
                            <span className={styles.badgeIcon}>⚡</span>
                            <span>Automatizado</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 2: EL PROBLEMA ═══ */}
            <section className={styles.problemSection}>
                <div className={styles.container} ref={problemRef}>
                    <div className={`${styles.sectionHeader} reveal`}>
                        <span className={styles.sectionTag}>El problema</span>
                        <h2 className={styles.sectionTitle}>¿Te sientes identificado?</h2>
                    </div>
                    <div className={styles.problemGrid}>
                        <div className={`${styles.problemCard} reveal`}>
                            <div className={styles.problemIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#39ce86" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                    <polyline points="14 2 14 8 20 8" />
                                    <line x1="16" y1="13" x2="8" y2="13" />
                                    <line x1="16" y1="17" x2="8" y2="17" />
                                    <polyline points="10 9 9 9 8 9" />
                                </svg>
                            </div>
                            <h3 className={styles.problemTitle}>Caos Manual</h3>
                            <p className={styles.problemText}>
                                Horas perdidas en gestiones repetitivas y Excel interminables.
                            </p>
                        </div>
                        <div className={`${styles.problemCard} reveal`}>
                            <div className={styles.problemIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#39ce86" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                                    <line x1="4" y1="22" x2="4" y2="15" />
                                </svg>
                            </div>
                            <h3 className={styles.problemTitle}>Herramientas Desconectadas</h3>
                            <p className={styles.problemText}>
                                Software caro, genérico y datos dispersos que no te dicen nada.
                            </p>
                        </div>
                        <div className={`${styles.problemCard} reveal`}>
                            <div className={styles.problemIcon}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#39ce86" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                            </div>
                            <h3 className={styles.problemTitle}>Soledad Digital</h3>
                            <p className={styles.problemText}>
                                Ausencia de acompañamiento técnico real para tomar decisiones.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 3: NUESTRAS SOLUCIONES ═══ */}
            <section className={styles.solutionsSection}>
                <div className={styles.container} ref={solutionsRef}>
                    <div className={`${styles.sectionHeader} reveal`}>
                        <span className={styles.sectionTag}>Nuestras soluciones</span>
                        <h2 className={styles.sectionTitle}>Un camino, dos opciones</h2>
                    </div>
                    <div className={styles.solutionsGrid}>
                        <div className={`${styles.solutionCard} reveal`}>
                            <div className={styles.solutionIcon}>🎨</div>
                            <span className={styles.solutionLabel}>Artesanía Digital</span>
                            <h3 className={styles.solutionTitle}>Servicios a Medida</h3>
                            <p className={styles.solutionText}>
                                Creamos lo que tú necesitas. Desde tu identidad visual hasta
                                automatizaciones complejas.
                            </p>
                            <ul className={styles.solutionFeatures}>
                                <li>Web corporativa</li>
                                <li>Apps desde cero</li>
                                <li>Branding completo</li>
                                <li>Pago único + mantenimiento reducido</li>
                            </ul>
                            <Link to="/services">
                                <Button variant="outline" size="md">Explorar Servicios</Button>
                            </Link>
                        </div>
                        <div className={`${styles.solutionCard} ${styles.solutionCardHighlight} reveal`}>
                            <div className={styles.solutionIcon}>🚀</div>
                            <span className={styles.solutionLabel}>SaaS</span>
                            <h3 className={styles.solutionTitle}>Productos / Catálogo</h3>
                            <p className={styles.solutionText}>
                                Soluciones nicho listas para usar. Suscríbete y soluciona un
                                problema específico hoy mismo.
                            </p>
                            <ul className={styles.solutionFeatures}>
                                <li>Software específico por sector</li>
                                <li>Suscripción mensual/anual</li>
                                <li>Prueba inmediata</li>
                                <li>Soporte incluido</li>
                            </ul>
                            <Link to="/product">
                                <Button variant="primary" size="md">Ver Productos</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 4: EL MÉTODO OPSPILOT ═══ */}
            <section className={styles.methodSection}>
                <div className={styles.container} ref={methodRef}>
                    <div className={`${styles.sectionHeader} reveal`}>
                        <span className={styles.sectionTag}>Nuestro método</span>
                        <h2 className={styles.sectionTitle}>
                            No solo entregamos código,<br />entregamos resultados.
                        </h2>
                    </div>
                    <div className={styles.processGrid}>
                        <div className={`${styles.processStep} reveal`}>
                            <div className={styles.stepNumber}>01</div>
                            <div className={styles.stepConnector}></div>
                            <h3 className={styles.stepTitle}>Análisis</h3>
                            <p className={styles.stepText}>
                                Conocemos tu negocio y tu cliente a fondo.
                            </p>
                        </div>
                        <div className={`${styles.processStep} reveal`}>
                            <div className={styles.stepNumber}>02</div>
                            <div className={styles.stepConnector}></div>
                            <h3 className={styles.stepTitle}>Estandarización</h3>
                            <p className={styles.stepText}>
                                Detectamos fugas de tiempo y procesos mejorables.
                            </p>
                        </div>
                        <div className={`${styles.processStep} reveal`}>
                            <div className={styles.stepNumber}>03</div>
                            <div className={styles.stepConnector}></div>
                            <h3 className={styles.stepTitle}>Decisión</h3>
                            <p className={styles.stepText}>
                                Usamos datos fiables para guiar tu siguiente paso.
                            </p>
                        </div>
                        <div className={`${styles.processStep} reveal`}>
                            <div className={styles.stepNumber}>04</div>
                            <h3 className={styles.stepTitle}>Acompañamiento</h3>
                            <p className={styles.stepText}>
                                No te soltamos tras la entrega.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 5: CASO DE ÉXITO ═══ */}
            <section className={styles.caseSection}>
                <div className={styles.container} ref={caseRef}>
                    <div className={styles.caseGrid}>
                        <div className={`${styles.caseContent} reveal`}>
                            <span className={styles.sectionTag}>Caso de éxito</span>
                            <h2 className={styles.caseTitle}>
                                J.R. Rodríguez: De la gestión tradicional a la automatización total.
                            </h2>
                            <ul className={styles.caseChecklist}>
                                <li>
                                    <span className={styles.checkIcon}>✓</span>
                                    Creación de marca e identidad desde cero.
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>✓</span>
                                    Presupuestador Web con IA: Generación de imágenes realistas de reformas para sus clientes.
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>✓</span>
                                    Automatización WhatsApp: Citas y visitas gestionadas solas.
                                </li>
                                <li>
                                    <span className={styles.checkIcon}>✓</span>
                                    CRM a Medida: Control total de facturación y estado del cliente.
                                </li>
                            </ul>
                            <div className={styles.caseResult}>
                                <p>"Una empresa tradicional convertida en referente tecnológico local."</p>
                            </div>
                        </div>
                        <div className={`${styles.caseVisual} reveal`}>
                            <div className={`${styles.phoneMockup} anim-float-slow`}>
                                <div className={styles.phoneScreen}>
                                    <div className={styles.phoneHeader}>
                                        <div className={styles.phoneNotch}></div>
                                    </div>
                                    <div className={styles.phoneContent}>
                                        <div className={styles.reformCard}>
                                            <div className={styles.reformImage}></div>
                                            <div className={styles.reformInfo}>
                                                <div className={styles.reformTitle}>Reforma Cocina</div>
                                                <div className={styles.reformPrice}>€4.200</div>
                                            </div>
                                        </div>
                                        <div className={styles.reformCard}>
                                            <div className={`${styles.reformImage} ${styles.reform2}`}></div>
                                            <div className={styles.reformInfo}>
                                                <div className={styles.reformTitle}>Reforma Baño</div>
                                                <div className={styles.reformPrice}>€2.800</div>
                                            </div>
                                        </div>
                                        <div className={`${styles.whatsappBadge} anim-border-glow`}>
                                            <span>💬</span> 3 citas hoy
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ SECTION 6: CIERRE / CTA ═══ */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={`${styles.ctaBlock} reveal`} ref={ctaRef}>
                        <div className={`${styles.ctaGlow} anim-pulse-glow`}></div>
                        <h2 className={styles.ctaTitle}>
                            ¿Dudando? Prueba nuestras soluciones<br />o déjanos asesorarte gratis.
                        </h2>
                        <div className={styles.ctaButtons}>
                            <Link to="/demo">
                                <Button variant="primary" size="lg">Empezar prueba gratuita</Button>
                            </Link>
                            <Link to="/contact">
                                <Button variant="outline" size="lg">Agendar consultoría</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
