import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    AlertTriangle,
    Layers,
    TrendingUp,
    Settings,
    Briefcase,
    Building2,
    HardHat,
    Zap,
    Globe,
    Users,
    UserCog,
    Building,
    Package,
    Wrench,
    ArrowRight,
    ArrowLeft,
    Check,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Eyebrow } from '../components/ui/Eyebrow';
import { usePageSEO } from '../hooks/usePageSEO';
import { ROUTES } from '../lib/routes';
import sys from '../styles/page-system.module.css';
import styles from './Diagnostico.module.css';

const FORM_URL = 'https://formsubmit.co/ajax/opspilot.contact@gmail.com';

type Problem = 'time' | 'data' | 'scale' | 'unique';
type Sector = 'asesoria' | 'energia' | 'obra' | 'agencia' | 'pyme' | 'otro';
type TeamSize = 'solo' | 'small' | 'medium' | 'large';
type Approach = 'product' | 'custom' | 'unsure';

interface Quiz {
    problem?: Problem;
    sector?: Sector;
    team?: TeamSize;
    approach?: Approach;
}

interface Recommendation {
    title: string;
    summary: string;
    primaryCta: { label: string; href: string; external?: boolean };
    secondaryCta?: { label: string; href: string; external?: boolean };
    bullets: string[];
}

const STEPS = [
    { key: 'problem', label: '¿Qué te ha traído hoy?' },
    { key: 'sector', label: '¿En qué sector operas?' },
    { key: 'team', label: '¿Tamaño del equipo?' },
    { key: 'approach', label: '¿Comprar o construir?' },
] as const;

const PROBLEMS: { id: Problem; icon: React.ReactNode; label: string; help: string }[] = [
    { id: 'time', icon: <AlertTriangle size={22} />, label: 'Tiempo perdido en tareas repetitivas',
      help: 'El equipo gasta horas en cosas que un sistema podría hacer solo.' },
    { id: 'data', icon: <Layers size={22} />, label: 'Datos dispersos en muchas herramientas',
      help: 'Excel, email, WhatsApp, una app por aquí, otra por allá. Nadie sabe la versión buena.' },
    { id: 'scale', icon: <TrendingUp size={22} />, label: 'Crecer sin tener que contratar',
      help: 'Más facturación sin más equipo. Necesitamos automatizar para escalar.' },
    { id: 'unique', icon: <Settings size={22} />, label: 'Tengo un proceso único que el SaaS no resuelve',
      help: 'Lo estándar no encaja con cómo trabajamos. Necesito algo a medida.' },
];

const SECTORS: { id: Sector; icon: React.ReactNode; label: string }[] = [
    { id: 'asesoria', icon: <Briefcase size={20} />, label: 'Asesoría / Despacho profesional' },
    { id: 'energia', icon: <Zap size={20} />, label: 'Energía / Comercializadora' },
    { id: 'obra', icon: <HardHat size={20} />, label: 'Construcción / Reformas' },
    { id: 'agencia', icon: <Building2 size={20} />, label: 'Agencia / Consultora' },
    { id: 'pyme', icon: <Globe size={20} />, label: 'PYME genérica con operativa dispersa' },
    { id: 'otro', icon: <Settings size={20} />, label: 'Otro / Caso muy específico' },
];

const TEAMS: { id: TeamSize; icon: React.ReactNode; label: string; help: string }[] = [
    { id: 'solo',   icon: <UserCog size={20} />,    label: 'Yo solo / 2-3 personas',  help: 'Autónomo o equipo muy pequeño.' },
    { id: 'small',  icon: <Users size={20} />,      label: '4-15 personas',            help: 'PYME pequeña en crecimiento.' },
    { id: 'medium', icon: <Building size={20} />,   label: '16-50 personas',           help: 'PYME mediana, varios departamentos.' },
    { id: 'large',  icon: <Building2 size={20} />,  label: 'Más de 50 personas',       help: 'Estructura ya consolidada.' },
];

const APPROACHES: { id: Approach; icon: React.ReactNode; label: string; help: string }[] = [
    { id: 'product', icon: <Package size={22} />, label: 'Quiero algo listo para usar',
      help: 'Un producto que ya existe y está pensado para mi sector. Suscripción mensual.' },
    { id: 'custom', icon: <Wrench size={22} />, label: 'Necesito algo a medida',
      help: 'Mi caso es único. Necesito que se construya pensando en mi flujo concreto.' },
    { id: 'unsure', icon: <Settings size={22} />, label: 'No estoy seguro',
      help: 'Quiero que me orientes en el diagnóstico. Ahí decidimos juntos.' },
];

function recommend(q: Required<Quiz>): Recommendation {
    const isProduct = q.approach === 'product' || (q.approach === 'unsure' && q.problem !== 'unique');
    const isCustom = q.approach === 'custom' || q.problem === 'unique';

    // Producto vertical concreto si aplica
    if (isProduct) {
        const SECTOR_TO_PRODUCT: Partial<Record<Sector, { name: string; pitch: string }>> = {
            asesoria: { name: 'Fiscalidad',
                pitch: 'Plataforma fiscal y contable española completa. AEAT, SII, VeriFactu, modelos automatizados, asistente IA fiscal y app móvil — pensada para asesorías que llevan muchos clientes.' },
            energia: { name: 'EnergyDeal',
                pitch: 'CRM B2B vertical para comercializadoras y agentes de energía. Comparador con snapshots reproducibles, gestión por CIF/CUPS, comisiones y campañas WhatsApp/Email.' },
            obra: { name: 'Presupuestador',
                pitch: 'Presupuestos y certificaciones de obra con BC3/FIEBDC nativo. Partidas con descomposición real en recursos, firma digital del cliente y OCR de albaranes.' },
            agencia: { name: 'ERP OpsPilot',
                pitch: 'ERP/PSA para agencias y servicios profesionales. Project Hub, CRM, outreach, auditor — más una capa MCP de agentes IA con 31+ herramientas nativas.' },
        };
        const match = SECTOR_TO_PRODUCT[q.sector];
        if (match) {
            return {
                title: `Te encaja ${match.name}.`,
                summary: match.pitch,
                primaryCta: { label: 'Ver el producto', href: ROUTES.productos },
                secondaryCta: { label: 'Hablar con nosotros', href: ROUTES.contacto },
                bullets: [
                    'Suscripción mensual fija, sin permanencia',
                    'Onboarding incluido y soporte humano',
                    'Si no encaja al 100%, lo extendemos a medida sobre la misma base',
                ],
            };
        }
    }

    // Custom dev recomendado
    if (isCustom || q.problem === 'unique') {
        return {
            title: 'Tu caso pide desarrollo a medida.',
            summary: 'Por sector o porque tu operativa no entra en lo estándar, lo construimos para ti. ' +
                'Trabajamos con presupuesto cerrado antes de empezar y sesiones semanales con tu equipo — ' +
                'el código es tuyo desde el día 1.',
            primaryCta: { label: 'Ver cómo trabajamos', href: ROUTES.servicios },
            secondaryCta: { label: 'Reservar diagnóstico', href: ROUTES.contacto },
            bullets: [
                'Diagnóstico gratuito de 30 min para acotar el caso',
                'Propuesta con alcance, plazo y precio cerrado',
                'Sesiones semanales y entregas continuas — sin desaparecer',
            ],
        };
    }

    // Mixto / default — orientación general
    return {
        title: 'Empecemos por el diagnóstico gratuito.',
        summary: 'Por lo que cuentas, una llamada de 30 minutos nos basta para decirte si tu caso ' +
            'lo resuelve algo estándar, hace falta a medida, o una combinación de ambos.',
        primaryCta: { label: 'Reservar diagnóstico', href: ROUTES.contacto },
        secondaryCta: { label: 'Ver productos', href: ROUTES.productos },
        bullets: [
            'Sin compromiso, sin venderte nada',
            'Te decimos si tenemos solución (y si no, qué alternativas hay)',
            'Respuesta en menos de 24 h laborables',
        ],
    };
}

export const Diagnostico: React.FC = () => {
    usePageSEO({
        title: 'Diagnóstico gratuito — ¿Producto o desarrollo a medida? · OpsPilot',
        description:
            'Cuestionario de 4 pasos para descubrir si tu caso encaja en uno de nuestros productos verticales o necesita desarrollo a medida. 30 minutos, sin compromiso.',
        canonical: 'https://opspilot.es/diagnostico',
    });

    const [step, setStep] = useState(0);
    const [quiz, setQuiz] = useState<Quiz>({});
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');

    const isComplete = quiz.problem && quiz.sector && quiz.team && quiz.approach;
    const recommendation = useMemo<Recommendation | null>(
        () => (isComplete ? recommend(quiz as Required<Quiz>) : null),
        [isComplete, quiz]
    );

    const stepsTotal = STEPS.length;
    const progress = isComplete ? 100 : (step / stepsTotal) * 100;
    const stepLabel = isComplete ? 'Resultado' : STEPS[step].label;

    const handleSelect = <K extends keyof Quiz>(key: K, value: NonNullable<Quiz[K]>) => {
        setQuiz((q) => ({ ...q, [key]: value }));
        // Auto-advance al elegir
        if (step < stepsTotal - 1) {
            setTimeout(() => setStep((s) => s + 1), 220);
        }
    };

    const back = () => setStep((s) => Math.max(0, s - 1));
    const restart = () => {
        setStep(0);
        setQuiz({});
        setSubmitted(false);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!contactEmail || !contactName) return;
        setSubmitting(true);
        try {
            await fetch(FORM_URL, {
                method: 'POST',
                headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    _subject: 'Diagnóstico OpsPilot — quiz completo',
                    nombre: contactName,
                    email: contactEmail,
                    problema: quiz.problem,
                    sector: quiz.sector,
                    equipo: quiz.team,
                    enfoque: quiz.approach,
                    recomendacion: recommendation?.title,
                }),
            });
            setSubmitted(true);
        } catch {
            setSubmitted(true);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className={sys.page}>
            <section className={sys.pageHero}>
                <div className={sys.container}>
                    <div className={sys.pageHeroContent}>
                        <Eyebrow block>Diagnóstico · 4 preguntas · 60 segundos</Eyebrow>
                        <h1 className={sys.pageHeroTitle}>
                            ¿Producto o <em className={sys.pageHeroAccent}>desarrollo a medida</em>?
                        </h1>
                        <p className={sys.pageHeroSubtitle}>
                            Cuatro preguntas y te decimos si tu caso encaja en uno de nuestros
                            productos verticales o necesita algo construido desde cero. Sin
                            compromiso, sin email obligatorio para ver el resultado.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <div className={sys.container}>
                    <div className={styles.wizard}>
                        {/* Progress */}
                        <div className={styles.progressBar} aria-hidden="true">
                            <div className={styles.progressFill} style={{ width: `${progress}%` }} />
                        </div>
                        <div className={styles.progressMeta}>
                            <span className={styles.stepCount}>
                                {isComplete ? `${stepsTotal} / ${stepsTotal}` : `${step + 1} / ${stepsTotal}`}
                            </span>
                            <span className={styles.stepLabel}>{stepLabel}</span>
                        </div>

                        {!isComplete && step === 0 && (
                            <div className={styles.stepBlock}>
                                <h2 className={styles.stepTitle}>¿Qué te ha traído hoy?</h2>
                                <div className={styles.optionsGrid}>
                                    {PROBLEMS.map((p) => (
                                        <button
                                            key={p.id}
                                            type="button"
                                            onClick={() => handleSelect('problem', p.id)}
                                            className={`${styles.option} ${quiz.problem === p.id ? styles.selected : ''}`}
                                        >
                                            <span className={styles.optionIcon}>{p.icon}</span>
                                            <span className={styles.optionBody}>
                                                <span className={styles.optionLabel}>{p.label}</span>
                                                <span className={styles.optionHelp}>{p.help}</span>
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {!isComplete && step === 1 && (
                            <div className={styles.stepBlock}>
                                <h2 className={styles.stepTitle}>¿En qué sector operas?</h2>
                                <div className={styles.optionsGrid}>
                                    {SECTORS.map((s) => (
                                        <button
                                            key={s.id}
                                            type="button"
                                            onClick={() => handleSelect('sector', s.id)}
                                            className={`${styles.option} ${styles.optionCompact} ${quiz.sector === s.id ? styles.selected : ''}`}
                                        >
                                            <span className={styles.optionIcon}>{s.icon}</span>
                                            <span className={styles.optionLabel}>{s.label}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {!isComplete && step === 2 && (
                            <div className={styles.stepBlock}>
                                <h2 className={styles.stepTitle}>¿Tamaño del equipo?</h2>
                                <div className={styles.optionsGrid}>
                                    {TEAMS.map((t) => (
                                        <button
                                            key={t.id}
                                            type="button"
                                            onClick={() => handleSelect('team', t.id)}
                                            className={`${styles.option} ${quiz.team === t.id ? styles.selected : ''}`}
                                        >
                                            <span className={styles.optionIcon}>{t.icon}</span>
                                            <span className={styles.optionBody}>
                                                <span className={styles.optionLabel}>{t.label}</span>
                                                <span className={styles.optionHelp}>{t.help}</span>
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {!isComplete && step === 3 && (
                            <div className={styles.stepBlock}>
                                <h2 className={styles.stepTitle}>¿Comprar algo listo o construir a medida?</h2>
                                <div className={styles.optionsGrid}>
                                    {APPROACHES.map((a) => (
                                        <button
                                            key={a.id}
                                            type="button"
                                            onClick={() => handleSelect('approach', a.id)}
                                            className={`${styles.option} ${quiz.approach === a.id ? styles.selected : ''}`}
                                        >
                                            <span className={styles.optionIcon}>{a.icon}</span>
                                            <span className={styles.optionBody}>
                                                <span className={styles.optionLabel}>{a.label}</span>
                                                <span className={styles.optionHelp}>{a.help}</span>
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {step > 0 && !isComplete && (
                            <div className={styles.nav}>
                                <button type="button" onClick={back} className={styles.backBtn}>
                                    <ArrowLeft size={16} strokeWidth={2} /> Atrás
                                </button>
                            </div>
                        )}

                        {/* Recomendación */}
                        {isComplete && recommendation && (
                            <div className={styles.result}>
                                <Eyebrow>Tu recomendación</Eyebrow>
                                <h2 className={styles.resultTitle}>{recommendation.title}</h2>
                                <p className={styles.resultSummary}>{recommendation.summary}</p>

                                <ul className={styles.resultBullets}>
                                    {recommendation.bullets.map((b, i) => (
                                        <li key={i}>
                                            <span className={styles.resultCheck}>
                                                <Check size={14} strokeWidth={2.4} />
                                            </span>
                                            {b}
                                        </li>
                                    ))}
                                </ul>

                                <div className={styles.resultCtas}>
                                    {recommendation.primaryCta.external ? (
                                        <a href={recommendation.primaryCta.href} target="_blank" rel="noopener noreferrer">
                                            <Button variant="primary" size="lg">
                                                {recommendation.primaryCta.label} <ArrowRight size={16} strokeWidth={2} style={{ marginLeft: 8 }} />
                                            </Button>
                                        </a>
                                    ) : (
                                        <Link to={recommendation.primaryCta.href}>
                                            <Button variant="primary" size="lg">
                                                {recommendation.primaryCta.label} <ArrowRight size={16} strokeWidth={2} style={{ marginLeft: 8 }} />
                                            </Button>
                                        </Link>
                                    )}
                                    {recommendation.secondaryCta && (
                                        <Link to={recommendation.secondaryCta.href}>
                                            <Button variant="outline" size="lg">{recommendation.secondaryCta.label}</Button>
                                        </Link>
                                    )}
                                </div>

                                {/* Captura de email opcional */}
                                <div className={styles.shareBlock}>
                                    {submitted ? (
                                        <p className={styles.shareSuccess}>
                                            Recibido. Te llegamos en menos de 24 h laborables con un siguiente paso concreto.
                                        </p>
                                    ) : (
                                        <>
                                            <p className={styles.shareIntro}>
                                                ¿Quieres que te lo comentemos por escrito con detalle?
                                                Déjanos email y nombre — te respondemos con propuesta concreta.
                                            </p>
                                            <form onSubmit={handleSubmit} className={styles.shareForm}>
                                                <input
                                                    type="text"
                                                    placeholder="Tu nombre"
                                                    value={contactName}
                                                    onChange={(e) => setContactName(e.target.value)}
                                                    required
                                                    className={styles.shareInput}
                                                    aria-label="Tu nombre"
                                                />
                                                <input
                                                    type="email"
                                                    placeholder="tu@email.com"
                                                    value={contactEmail}
                                                    onChange={(e) => setContactEmail(e.target.value)}
                                                    required
                                                    className={styles.shareInput}
                                                    aria-label="Tu correo"
                                                />
                                                <Button variant="primary" size="md" type="submit" disabled={submitting}>
                                                    {submitting ? 'Enviando…' : 'Enviar resultado'}
                                                </Button>
                                            </form>
                                        </>
                                    )}
                                </div>

                                <button type="button" onClick={restart} className={styles.restartBtn}>
                                    <ArrowLeft size={14} strokeWidth={2} /> Volver a empezar
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};
