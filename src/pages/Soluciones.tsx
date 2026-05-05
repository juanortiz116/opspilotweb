import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ROUTES } from '../lib/routes';
import styles from './Soluciones.module.css';
import Aurora from '../components/common/Aurora';

import { ClipboardList, Zap, Building2, Target, Globe, Settings } from 'lucide-react';

const sectores = [
    {
        icon: <ClipboardList size={28} />,
        title: 'Asesorías y despachos profesionales',
        who: 'Gestorías, asesorías fiscales, laborales y legales',
        solution: 'Automatización documental — flujos de firma, comunicación y archivo digital sin fricciones',
        benefits: ['Documentos sin papel', 'Seguimiento en tiempo real', 'Clientes siempre informados'],
        cta: 'Cuéntanos tu caso',
        href: ROUTES.contacto,
    },
    {
        icon: <Zap size={28} />,
        title: 'Empresas de energía y comercializadoras',
        who: 'Comerciales y back-office de energía eléctrica y gas',
        solution: 'Análisis de tarifas y onboarding digital — propuesta instantánea, cartera centralizada y gestión automatizada',
        benefits: ['Análisis en segundos', 'Propuestas sin errores', 'Pipeline de clientes claro'],
        cta: 'Cuéntanos tu caso',
        href: ROUTES.contacto,
    },
    {
        icon: <Building2 size={28} />,
        title: 'Reformas, instalaciones y oficios',
        who: 'Empresas de construcción, fontanería, electricidad y climatización',
        solution: 'Presupuestación y seguimiento de obra — de la visita al cobro sin llamadas innecesarias',
        benefits: ['Presupuestos en 2 minutos', 'Clientes sin llamadas extras', 'Cobros sin perseguir'],
        cta: 'Cuéntanos tu caso',
        href: ROUTES.contacto,
    },
    {
        icon: <Target size={28} />,
        title: 'Agencias y negocios de servicios',
        who: 'Agencias de marketing, consultoras y equipos de servicios recurrentes',
        solution: 'CRM y gestión de proyectos — pipeline visual, seguimientos automáticos y cero leads perdidos',
        benefits: ['Nada se pierde', 'Pipeline siempre actualizado', 'Menos tiempo administrativo'],
        cta: 'Cuéntanos tu caso',
        href: ROUTES.contacto,
    },
    {
        icon: <Globe size={28} />,
        title: 'PYMEs con operativa dispersa',
        who: 'Empresas que gestionan con Excel, llamadas y WhatsApp',
        solution: 'Centralización operativa — una sola herramienta para empleados, tareas, proveedores y analítica',
        benefits: ['Control total en un sitio', 'Decisiones con datos reales', 'Menos caos operativo'],
        cta: 'Cuéntanos tu caso',
        href: ROUTES.contacto,
    },
    {
        icon: <Settings size={28} />,
        title: 'Procesos únicos sin solución estándar',
        who: 'Cualquier empresa con un flujo específico que el software del mercado no resuelve',
        solution: 'Desarrollo a medida — analizamos tu caso, lo construimos para ti y lo mantenemos vivo',
        benefits: ['100% adaptado a ti', 'Integrado con lo que ya tienes', 'Escalable sin límites'],
        cta: 'Cuéntanos tu caso',
        href: ROUTES.contacto,
    },
];

export const Soluciones: React.FC = () => {
    const gridRef = useScrollReveal<HTMLDivElement>({ stagger: true });
    const ctaRef = useScrollReveal<HTMLDivElement>();

    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.auroraBackground}>
                    <Aurora colorStops={['#0d1b2a', '#1b998b', '#39ce86']} blend={0.6} amplitude={1.0} speed={0.8} />
                </div>
                <div className={styles.heroContent}>
                    <span className={styles.tag}>Soluciones</span>
                    <h1 className={styles.heroTitle}>
                        ¿En qué sector{' '}
                        <span className="text-gradient">opera tu negocio?</span>
                    </h1>
                    <p className={styles.heroSub}>
                        Conocemos de cerca la operativa de estos sectores.<br />
                        Cuéntanos dónde estás y te decimos exactamente qué podemos hacer.
                    </p>
                </div>
            </section>

            {/* Sectores grid */}
            <section className={styles.section}>
                <div className={styles.container} ref={gridRef}>
                    <div className={styles.grid}>
                        {sectores.map((s, index) => (
                            <div key={s.title} className={`${styles.mobileCard} reveal`} style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className={styles.mobileScreen}>
                                    <div className={styles.screenHeader}>
                                        <div className={styles.screenNotch}></div>
                                    </div>
                                    <div className={styles.screenContent}>
                                        <div className={styles.screenIcon}>{s.icon}</div>
                                        <div className={styles.screenTitle}>{s.solution.split('—')[0].trim()}</div>
                                        <ul className={styles.benefitsList}>
                                            {s.benefits.map(b => (
                                                <li key={b}>
                                                    <span className={styles.check}>✓</span> {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className={styles.mobileBody}>
                                    <h2 className={styles.cardTitle}>{s.title}</h2>
                                    <p className={styles.cardWho}>
                                        <span className={styles.whoLabel}>Para:</span> {s.who}
                                    </p>
                                    <div className={styles.cardSolution}>
                                        <p>{s.solution}</p>
                                    </div>
                                    <Link className={styles.cardLink} to={s.href}>
                                        <Button variant="outline" size="sm" fullWidth>{s.cta} →</Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bloque de cierre */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={`${styles.ctaBlock} reveal`} ref={ctaRef}>
                        <h2 className={styles.ctaTitle}>¿No encuentras tu sector aquí?</h2>
                        <p className={styles.ctaSub}>
                            Cuéntanoslo y te orientamos en 30 minutos. Sin compromiso, sin presión.
                        </p>
                        <Link to={ROUTES.contacto}>
                            <Button variant="primary" size="lg">Reservar diagnóstico gratuito</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
