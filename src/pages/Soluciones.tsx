import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageSEO } from '../hooks/usePageSEO';
import sys from '../styles/page-system.module.css';
import styles from './Soluciones.module.css';

import { FileSpreadsheet, Zap, Calculator, Network, Globe, Settings, ArrowRight } from 'lucide-react';

const filtros = [
    {
        icon: <FileSpreadsheet size={22} strokeWidth={1.5} />,
        title: 'Llevo la fiscalidad española en cuatro herramientas distintas',
        who: 'Autónomos, PYMEs y asesorías que llevan IVA, IRPF y modelos AEAT',
        solution: 'Fiscalidad — facturación, contabilidad PGC, modelos AEAT, SII y VeriFactu',
        benefits: ['Modelos 303, 130, 347, 390 automáticos', 'SII y VeriFactu nativos', 'App móvil con OCR'],
        cta: 'Ver producto',
        href: '/productos#fiscalidad',
    },
    {
        icon: <Zap size={22} strokeWidth={1.5} />,
        title: 'Comparo tarifas energéticas en Excel y pierdo trazabilidad',
        who: 'Agentes comerciales y comercializadoras energéticas en España',
        solution: 'EnergyDeal — CRM B2B con comparador reproducible y comisiones',
        benefits: ['Snapshots de tarifa inmutables', 'Gestión por CIF y CUPS', 'Liquidación de comisiones'],
        cta: 'Ver producto',
        href: '/productos#energydeal',
    },
    {
        icon: <Calculator size={22} strokeWidth={1.5} />,
        title: 'Presupuestar obra en Excel es lento y descontrolo costes',
        who: 'Constructoras, estudios de arquitectura, contratistas y reformistas',
        solution: 'Presupuestador — partidas, packs reutilizables, BC3/FIEBDC y certificaciones',
        benefits: ['Importación BC3/FIEBDC', 'Firma digital del cliente', 'Control de rentabilidad real'],
        cta: 'Ver producto',
        href: '/productos#presupuestador',
    },
    {
        icon: <Network size={22} strokeWidth={1.5} />,
        title: 'Mi agencia vive en cinco herramientas que no se hablan',
        who: 'Agencias, consultoras, despachos y PYMEs de servicios profesionales',
        solution: 'ERP OpsPilot — proyectos, CRM, prospección y agente IA',
        benefits: ['Proyectos, CRM y auditorías unificados', 'Capa de IA con autonomía real', 'Multi-tenant'],
        cta: 'Ver producto',
        href: '/productos#erp',
    },
    {
        icon: <Globe size={22} strokeWidth={1.5} />,
        title: 'No tengo web o la que tengo no me genera nada',
        who: 'Autónomos, negocios locales y PYMEs sin presencia digital',
        solution: 'Web corporativa diseñada para convertir visitas en clientes',
        benefits: ['Diseño orientado a conversión', 'Optimización SEO técnica', 'Mantenimiento incluido'],
        cta: 'Ver servicios',
        href: '/servicios',
    },
    {
        icon: <Settings size={22} strokeWidth={1.5} />,
        title: 'Mi caso es específico y ningún producto encaja',
        who: 'Empresas con procesos únicos que el software estándar no resuelve',
        solution: 'Desarrollo a medida — análisis del caso y software construido para tu flujo',
        benefits: ['Análisis y propuesta cerrada', 'Integraciones con tu stack', 'Mantenimiento posterior'],
        cta: 'Cuéntanos el caso',
        href: '/contacto',
    },
];

export const Soluciones: React.FC = () => {
    usePageSEO({
        title: 'Soluciones por problema · Software a medida — OpsPilot',
        description:
            'Encuentra la solución por el problema, no por el producto. Productos verticales para fiscalidad, energía, construcción y agencias, o desarrollo a medida cuando nada encaja.',
        canonical: 'https://opspilot.es/soluciones',
    });

    const gridRef = useScrollReveal<HTMLDivElement>({ stagger: true });

    return (
        <div className={sys.page}>
            {/* ═══ HERO ═══ */}
            <section className={sys.pageHero}>
                <div className={sys.container}>
                    <div className={sys.pageHeroContent}>
                        <span className={sys.pageHeroEyebrow}>
                            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-mint)', boxShadow: '0 0 8px rgba(57, 206, 134, 0.6)' }} />
                            Soluciones por problema
                        </span>
                        <h1 className={sys.pageHeroTitle}>
                            Empieza por el problema,<br />
                            no por el <em className={sys.pageHeroAccent}>producto</em>.
                        </h1>
                        <p className={sys.pageHeroSubtitle}>
                            Elige la situación que mejor describe la tuya y te llevamos al
                            producto que la resuelve, o al desarrollo a medida si nada encaja.
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══ GRID ═══ */}
            <section className={styles.gridSection}>
                <div className={sys.container} ref={gridRef}>
                    <div className={styles.grid}>
                        {filtros.map((f, index) => (
                            <article key={f.title} className={`${styles.filterCard} reveal`}>
                                <div className={styles.filterCardHeader}>
                                    <div className={styles.filterIcon}>{f.icon}</div>
                                    <span className={styles.filterIndex}>
                                        {String(index + 1).padStart(2, '0')} / {String(filtros.length).padStart(2, '0')}
                                    </span>
                                </div>
                                <h2 className={styles.filterTitle}>{f.title}</h2>
                                <p className={styles.filterWho}>
                                    <span className={styles.whoLabel}>Para</span> {f.who}
                                </p>
                                <ul className={styles.filterBenefits}>
                                    {f.benefits.map((b) => (
                                        <li key={b}>{b}</li>
                                    ))}
                                </ul>
                                <div className={styles.filterSolution}>{f.solution}</div>
                                <Link className={styles.cardLink} to={f.href}>
                                    <Button variant="outline" size="sm" fullWidth>
                                        {f.cta} <ArrowRight size={14} strokeWidth={2} style={{ marginLeft: 6 }} />
                                    </Button>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ CTA ═══ */}
            <section className={sys.endCta}>
                <div className={sys.container}>
                    <div className={sys.endCtaBlock}>
                        <h2 className={sys.endCtaTitle}>¿Tu caso no aparece aquí?</h2>
                        <p className={sys.endCtaSub}>
                            Cuéntanoslo en una llamada de 30 minutos. Si encaja con un producto te lo
                            decimos; si no, valoramos un desarrollo a medida con presupuesto cerrado.
                        </p>
                        <div className={sys.endCtaButtons}>
                            <Link to="/contacto">
                                <Button variant="primary" size="lg">Reservar diagnóstico</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
