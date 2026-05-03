import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageSEO } from '../hooks/usePageSEO';
import {
    Code2,
    Sparkles,
    Plug,
    Workflow,
    Database,
    Rocket,
    BarChart3,
    Handshake,
    TrendingUp,
    MessageSquare,
    ArrowRight,
} from 'lucide-react';
import sys from '../styles/page-system.module.css';
import styles from './Services.module.css';

export const Services: React.FC = () => {
    usePageSEO({
        title: 'Servicios de desarrollo de software a medida — OpsPilot',
        description:
            'Empresa de desarrollo de software en España: aplicaciones a medida, agentes IA productivos, integraciones, automatización y modernización digital. Precio cerrado, sin sorpresas.',
        canonical: 'https://opspilot.es/servicios',
    });

    const servicesRef = useScrollReveal<HTMLDivElement>({ stagger: true });
    const valueRef = useScrollReveal<HTMLDivElement>({ stagger: true });

    return (
        <div className={sys.page}>
            {/* ═══ HERO ═══ */}
            <section className={sys.pageHero}>
                <div className={sys.container}>
                    <div className={sys.pageHeroContent}>
                        <span className={sys.pageHeroEyebrow}>
                            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-mint)', boxShadow: '0 0 8px rgba(57, 206, 134, 0.6)' }} />
                            Servicios
                        </span>
                        <h1 className={sys.pageHeroTitle}>
                            Construimos lo que tu negocio necesita.<br />
                            Tú nos dices <em className={sys.pageHeroAccent}>qué</em>.
                        </h1>
                        <p className={sys.pageHeroSubtitle}>
                            Desde una aplicación que tu equipo usa cada día hasta el asistente
                            inteligente que cierra agendas mientras duermes. Software hecho
                            a tu medida con precio cerrado y trato directo.
                        </p>
                        <div className={sys.pageHeroCta}>
                            <Link to="/contacto">
                                <Button variant="primary" size="lg">Reservar diagnóstico</Button>
                            </Link>
                            <a href="https://wa.me/34640756126" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="lg">
                                    <MessageSquare size={18} strokeWidth={1.75} style={{ marginRight: 8 }} />
                                    WhatsApp directo
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ SERVICIOS ═══ */}
            <section className={styles.servicesSection}>
                <div className={sys.container} ref={servicesRef}>
                    <header className={`${sys.sectionHeader} reveal`}>
                        <span className={sys.eyebrow}>
                            <span className={sys.eyebrowDot} />
                            Qué hacemos
                        </span>
                        <h2 className={sys.sectionTitle}>
                            Seis disciplinas, un solo equipo.
                        </h2>
                    </header>
                    <div className={styles.servicesGrid}>
                        <article className={`${styles.serviceCard} reveal`}>
                            <div className={styles.serviceIcon}><Code2 size={22} strokeWidth={1.5} /></div>
                            <h3 className={styles.serviceTitle}>Aplicaciones a medida</h3>
                            <p className={styles.serviceText}>
                                Aplicaciones web y móvil donde tu equipo trabaja todos los días.
                                Stack moderno, mantenibles y testeadas.
                            </p>
                            <ul className={styles.serviceFeatures}>
                                <li>SPAs y dashboards</li>
                                <li>Apps móvil multiplataforma</li>
                                <li>APIs y backoffices</li>
                            </ul>
                        </article>
                        <article className={`${styles.serviceCard} reveal`}>
                            <div className={styles.serviceIcon}><Sparkles size={22} strokeWidth={1.5} /></div>
                            <h3 className={styles.serviceTitle}>Asistentes inteligentes</h3>
                            <p className={styles.serviceText}>
                                IA que opera tu negocio — lee, escribe y cierra tareas reales.
                                Siempre con humano en el loop.
                            </p>
                            <ul className={styles.serviceFeatures}>
                                <li>Capas MCP propias</li>
                                <li>Agentes con autonomía real</li>
                                <li>Coordinación de procesos</li>
                            </ul>
                        </article>
                        <article className={`${styles.serviceCard} reveal`}>
                            <div className={styles.serviceIcon}><Plug size={22} strokeWidth={1.5} /></div>
                            <h3 className={styles.serviceTitle}>Integraciones</h3>
                            <p className={styles.serviceText}>
                                Conectamos tu banco, tu correo, las apps que ya usas y las APIs
                                internas. Que los datos no se pierdan ni se dupliquen.
                            </p>
                            <ul className={styles.serviceFeatures}>
                                <li>APIs REST y GraphQL</li>
                                <li>Webhooks y eventos</li>
                                <li>Migraciones de datos</li>
                            </ul>
                        </article>
                        <article className={`${styles.serviceCard} reveal`}>
                            <div className={styles.serviceIcon}><Workflow size={22} strokeWidth={1.5} /></div>
                            <h3 className={styles.serviceTitle}>Automatización de procesos</h3>
                            <p className={styles.serviceText}>
                                Las tareas repetitivas que nadie quiere hacer — gestionadas solas,
                                sin errores ni horas perdidas.
                            </p>
                            <ul className={styles.serviceFeatures}>
                                <li>Lectura inteligente de documentos</li>
                                <li>Conciliación automática</li>
                                <li>Comunicación por WhatsApp y email</li>
                            </ul>
                        </article>
                        <article className={`${styles.serviceCard} reveal`}>
                            <div className={styles.serviceIcon}><Database size={22} strokeWidth={1.5} /></div>
                            <h3 className={styles.serviceTitle}>ERP y CRM a medida</h3>
                            <p className={styles.serviceText}>
                                Cuando lo estándar es excesivo o demasiado genérico, construimos
                                el sistema que encaja con cómo funciona tu empresa.
                            </p>
                            <ul className={styles.serviceFeatures}>
                                <li>Modelado del proceso real</li>
                                <li>Integración con tu equipo</li>
                                <li>Iteración por sprints</li>
                            </ul>
                        </article>
                        <article className={`${styles.serviceCard} reveal`}>
                            <div className={styles.serviceIcon}><Rocket size={22} strokeWidth={1.5} /></div>
                            <h3 className={styles.serviceTitle}>Modernización digital</h3>
                            <p className={styles.serviceText}>
                                Sacar tu negocio de hojas de cálculo y suscripciones sueltas
                                sin perder un dato y sin parar la operativa.
                            </p>
                            <ul className={styles.serviceFeatures}>
                                <li>Auditoría técnica</li>
                                <li>Plan de migración</li>
                                <li>Rollback seguro</li>
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            {/* ═══ COMPROMISOS ═══ */}
            <section className={`${sys.sectionLoose} ${sys.sectionAlt}`}>
                <div className={sys.container} ref={valueRef}>
                    <header className={`${sys.sectionHeader} reveal`}>
                        <span className={sys.eyebrow}>
                            <span className={sys.eyebrowDot} />
                            Cómo trabajamos
                        </span>
                        <h2 className={sys.sectionTitle}>
                            Tres compromisos que mantenemos siempre.
                        </h2>
                    </header>
                    <div className={styles.valueGrid}>
                        <div className={`${styles.valueCard} reveal`}>
                            <div className={styles.valueIcon}><BarChart3 size={28} strokeWidth={1.5} /></div>
                            <h3 className={styles.valueTitle}>Precio cerrado siempre</h3>
                            <p className={styles.valueText}>
                                Te decimos cuánto cuesta antes de empezar. Sin sorpresas al final,
                                sin horas extra que no pediste.
                            </p>
                        </div>
                        <div className={`${styles.valueCard} reveal`}>
                            <div className={styles.valueIcon}><Handshake size={28} strokeWidth={1.5} /></div>
                            <h3 className={styles.valueTitle}>Tu equipo, no un proveedor</h3>
                            <p className={styles.valueText}>
                                No desaparecemos cuando entregamos. Nos quedamos contigo mientras
                                nos necesites.
                            </p>
                        </div>
                        <div className={`${styles.valueCard} reveal`}>
                            <div className={styles.valueIcon}><TrendingUp size={28} strokeWidth={1.5} /></div>
                            <h3 className={styles.valueTitle}>Empezamos donde estás tú</h3>
                            <p className={styles.valueText}>
                                No hace falta un presupuesto enorme para empezar. Empezamos
                                pequeño y crecemos juntos.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ CTA ═══ */}
            <section className={sys.endCta}>
                <div className={sys.container}>
                    <div className={sys.endCtaBlock}>
                        <h2 className={sys.endCtaTitle}>¿Por dónde empezamos?</h2>
                        <p className={sys.endCtaSub}>
                            Cuéntanos tu caso. En 30 minutos te decimos si tenemos solución,
                            cómo sería y cuánto costaría.
                        </p>
                        <div className={sys.endCtaButtons}>
                            <Link to="/contacto">
                                <Button variant="primary" size="lg">Reservar diagnóstico</Button>
                            </Link>
                            <Link to="/casos">
                                <Button variant="outline" size="lg">
                                    Ver casos <ArrowRight size={16} strokeWidth={2} style={{ marginLeft: 8 }} />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
