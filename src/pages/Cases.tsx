import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { usePageSEO } from '../hooks/usePageSEO';
import { ROUTES } from '../lib/routes';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Stat } from '../components/ui/Stat';
import sys from '../styles/page-system.module.css';
import styles from './Cases.module.css';

interface CaseStat {
    value: number | string;
    prefix?: string;
    suffix?: string;
    label: string;
}

interface Case {
    sector: string;
    title: string;
    text: string;
    stats: CaseStat[];
    quote: string;
    author: string;
}

const CASES: Case[] = [
    {
        sector: 'Reformas',
        title: 'De la libreta al sistema que trabaja solo',
        text: 'Empresa familiar de reformas que lo llevaba todo con Excel y llamadas. Diseñamos su marca, construimos un sistema a medida con presupuestos asistidos por IA y automatizamos las citas por WhatsApp. En tres meses triplicaron su capacidad sin incorporar a nadie más.',
        stats: [
            { value: 3, suffix: '×', label: 'Capacidad de atención' },
            { value: 70, prefix: '−', suffix: '%', label: 'Tiempo en gestión' },
            { value: '0 €', label: 'Personal extra' },
        ],
        quote: 'Pasamos de perder presupuestos por falta de seguimiento a tener un sistema que trabaja solo.',
        author: 'J.R. Rodríguez · CEO',
    },
    {
        sector: 'Asesoría fiscal',
        title: 'Una asesoría que cierra cuentas mientras duerme',
        text: 'Despacho con cientos de clientes ahogado en tareas repetitivas. Implementamos lectura inteligente de documentos, conciliación bancaria automática y un asistente IA que prepara los modelos antes de la revisión humana. Cierre mensual al 80% en automático.',
        stats: [
            { value: 80, suffix: '%', label: 'Cierre automático' },
            { value: '−5h/día', label: 'En tareas repetitivas' },
            { value: 45, prefix: '+', suffix: '%', label: 'Más capacidad sin contratar' },
        ],
        quote: 'Antes era imposible escalar sin contratar; ahora podemos crecer sin que el equipo reviente.',
        author: 'Socio director',
    },
    {
        sector: 'Agencia de servicios',
        title: 'Una agencia que recupera 20 horas a la semana',
        text: 'Agencia de marketing con cinco herramientas distintas que no se hablaban entre sí. Construimos un sistema único que sustituyó CRM, gestión, facturación y comunicación interna, con reporting en tiempo real para dirección y un asistente IA para dudas internas.',
        stats: [
            { value: 20, suffix: 'h', label: 'Ahorradas a la semana' },
            { value: '5 → 1', label: 'Apps en un solo sistema' },
            { value: 100, suffix: '%', label: 'Información centralizada' },
        ],
        quote: 'Dejamos de pagar cinco herramientas y ganamos visibilidad real de cada cliente.',
        author: 'Directora de operaciones',
    },
];

export const Cases: React.FC = () => {
    usePageSEO({
        title: 'Casos de éxito · Software a medida — OpsPilot',
        description:
            'Empresas reales que transformaron su operativa con software a medida, asistentes IA y automatización: reformas, asesorías fiscales y agencias de servicios.',
        canonical: 'https://opspilot.es/casos',
    });

    const listRef = useScrollReveal<HTMLDivElement>({ stagger: true });

    return (
        <div className={sys.page}>
            {/* ═══ HERO ═══ */}
            <section className={sys.pageHero}>
                <div className={sys.container}>
                    <div className={sys.pageHeroContent}>
                        <Eyebrow block>Casos de éxito</Eyebrow>
                        <h1 className={sys.pageHeroTitle}>
                            Empresas reales,<br />problemas <em className={sys.pageHeroAccent}>resueltos</em>.
                        </h1>
                        <p className={sys.pageHeroSubtitle}>
                            No hace falta ser una gran empresa para necesitar buenos procesos.
                            Esto es lo que hemos construido para empresas como la tuya.
                        </p>
                    </div>
                </div>
            </section>

            {/* ═══ CASOS ═══ */}
            <section className={styles.casesSection}>
                <div className={sys.container} ref={listRef}>
                    <div className={styles.casesList}>
                        {CASES.map((c, i) => (
                            <article key={i} className={`${styles.caseCard} reveal`}>
                                <div className={styles.caseHead}>
                                    <span className={styles.caseSector}>{c.sector}</span>
                                    <span className={styles.caseIndex}>
                                        {String(i + 1).padStart(2, '0')} / {String(CASES.length).padStart(2, '0')}
                                    </span>
                                </div>
                                <h2 className={styles.caseTitle}>{c.title}</h2>
                                <p className={styles.caseText}>{c.text}</p>
                                <div className={styles.statsRow}>
                                    {c.stats.map((s, j) => (
                                        <Stat
                                            key={j}
                                            value={s.value}
                                            prefix={s.prefix}
                                            suffix={s.suffix}
                                            label={s.label}
                                            size="md"
                                        />
                                    ))}
                                </div>
                                <blockquote className={styles.quote}>
                                    <p>{c.quote}</p>
                                    <span>{c.author}</span>
                                </blockquote>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ CTA ═══ */}
            <section className={sys.endCta}>
                <div className={sys.container}>
                    <div className={sys.endCtaBlock}>
                        <h2 className={sys.endCtaTitle}>¿Tu empresa podría ser la siguiente?</h2>
                        <p className={sys.endCtaSub}>
                            Analizamos tu situación en 30 minutos y te decimos qué podríamos hacer
                            por ti. Sin compromiso.
                        </p>
                        <div className={sys.endCtaButtons}>
                            <Link to={ROUTES.contacto}><Button variant="primary" size="lg">Reservar diagnóstico</Button></Link>
                            <Link to={ROUTES.servicios}><Button variant="outline" size="lg">Ver servicios</Button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
