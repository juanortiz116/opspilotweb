import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Soluciones.module.css';
import Aurora from '../components/common/Aurora';

import { ClipboardList, Zap, Building2, Target, Globe, Settings } from 'lucide-react';

const filtros = [
    {
        icon: <ClipboardList size={28} />,
        title: 'Crear presupuestos me lleva demasiado tiempo',
        who: 'Reformistas, fontaneros, electricistas, instaladores y cualquier oficio',
        solution: 'Presupuestador Pro — partidas, precios unitarios y packs reutilizables',
        benefits: ['Presupuestos en 2 min', 'Márgenes sin errores', '+20% cierre de ventas'],
        cta: 'Ver solución',
        href: '/product#presupuestador',
    },
    {
        icon: <Zap size={28} />,
        title: 'Analizo tarifas eléctricas a mano cliente por cliente',
        who: 'Comerciales de energía eléctrica y gas',
        solution: 'TarifaOCR — sube la factura, obtén la mejor propuesta en segundos',
        benefits: ['Análisis automático', 'Propuesta instantánea', 'Cartera centralizada'],
        cta: 'Ver solución',
        href: '/product#tarifaocr',
    },
    {
        icon: <Building2 size={28} />,
        title: 'Gestiono mi empresa con Excel y se me escapa todo',
        who: 'PYMEs y autónomos de cualquier sector',
        solution: 'ERP OpsPilot — empleados, inventario, proveedores, facturación y analítica',
        benefits: ['Control total', 'Horas ahorradas cada mes', 'Datos en tiempo real'],
        cta: 'Ver solución',
        href: '/product#erp',
    },
    {
        icon: <Target size={28} />,
        title: 'Pierdo clientes porque no les hago seguimiento',
        who: 'Cualquier negocio que vende servicios o productos',
        solution: 'CRM OpsPilot — pipeline, seguimientos y comunicaciones centralizadas',
        benefits: ['Seguimiento automático', 'Pipeline visual', 'Cero leads perdidos'],
        cta: 'Ver solución',
        href: '/product#crm',
    },
    {
        icon: <Globe size={28} />,
        title: 'No tengo web o la que tengo no me genera nada',
        who: 'Autónomos, negocios locales y PYMEs sin presencia digital',
        solution: 'Web corporativa desde 200€, diseñada para convertir visitas en clientes',
        benefits: ['Diseño premium', 'Optimización SEO', 'Alta conversión'],
        cta: 'Ver solución',
        href: '/services#web',
    },
    {
        icon: <Settings size={28} />,
        title: 'Lo mío es específico y no encuentro nada que encaje',
        who: 'Cualquiera con un proceso único que el software estándar no resuelve',
        solution: 'Desarrollo a medida — analizamos tu caso y construimos lo que necesitas',
        benefits: ['100% Adaptado a ti', 'Escalable sin límites', 'Integración total'],
        cta: 'Cuéntanoslo',
        href: '/contact',
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
                        ¿Cuál es el problema{' '}
                        <span className="text-gradient">que más te frena?</span>
                    </h1>
                    <p className={styles.heroSub}>
                        Elige el que mejor describe tu situación.
                        Te llevamos directo a la solución.
                    </p>
                </div>
            </section>

            {/* Filtros grid */}
            <section className={styles.section}>
                <div className={styles.container} ref={gridRef}>
                    <div className={styles.grid}>
                        {filtros.map((f, index) => (
                            <div key={f.title} className={`${styles.mobileCard} reveal`} style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className={styles.mobileScreen}>
                                    <div className={styles.screenHeader}>
                                        <div className={styles.screenNotch}></div>
                                    </div>
                                    <div className={styles.screenContent}>
                                        <div className={styles.screenIcon}>{f.icon}</div>
                                        <div className={styles.screenTitle}>{f.solution.split('—')[0].trim()}</div>
                                        <ul className={styles.benefitsList}>
                                            {f.benefits.map(b => (
                                                <li key={b}>
                                                    <span className={styles.check}>✓</span> {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className={styles.mobileBody}>
                                    <h2 className={styles.cardTitle}>{f.title}</h2>
                                    <p className={styles.cardWho}>
                                        <span className={styles.whoLabel}>Para:</span> {f.who}
                                    </p>
                                    <div className={styles.cardSolution}>
                                        <p>{f.solution}</p>
                                    </div>
                                    <Link className={styles.cardLink} to={f.href}>
                                        <Button variant="outline" size="sm" fullWidth>{f.cta} →</Button>
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
                        <h2 className={styles.ctaTitle}>¿No encuentras tu caso aquí?</h2>
                        <p className={styles.ctaSub}>
                            Cuéntanoslo y te orientamos en 30 minutos. Sin compromiso, sin presión.
                        </p>
                        <Link to="/contact">
                            <Button variant="primary" size="lg">Reservar diagnóstico gratuito</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
