import React from 'react';
import { Button } from '../components/ui/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Demo.module.css';

export const Demo: React.FC = () => {
    const contentRef = useScrollReveal<HTMLDivElement>({ stagger: true });

    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`${styles.heroGlow} anim-pulse-glow`}></div>
                <div className={styles.heroContent}>
                    <span className={styles.tag}>Prueba gratuita</span>
                    <h1 className={styles.heroTitle}>
                        Experimenta el{' '}
                        <span className="text-gradient">futuro</span> de tu negocio.
                    </h1>
                    <p className={styles.heroSub}>
                        Solicita una demo personalizada o activa tu prueba gratuita de 14 días. Sin tarjeta, sin compromiso.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className={styles.section}>
                <div className={styles.container} ref={contentRef}>
                    <div className={styles.demoGrid}>
                        {/* Form */}
                        <div className={`${styles.formCard} reveal`}>
                            <h2 className={styles.formTitle}>Agenda tu demostración</h2>
                            <p className={styles.formSub}>Completa el formulario y te contactaremos en menos de 24h.</p>
                            <form className={styles.form}>
                                <div className={styles.row}>
                                    <div className={styles.field}>
                                        <label htmlFor="demoName">Nombre</label>
                                        <input id="demoName" type="text" placeholder="Tu nombre" required />
                                    </div>
                                    <div className={styles.field}>
                                        <label htmlFor="demoEmail">Email</label>
                                        <input id="demoEmail" type="email" placeholder="tu@email.com" required />
                                    </div>
                                </div>
                                <div className={styles.field}>
                                    <label htmlFor="demoCompany">Empresa</label>
                                    <input id="demoCompany" type="text" placeholder="Nombre de tu empresa" />
                                </div>
                                <div className={styles.field}>
                                    <label htmlFor="demoInterest">¿Qué te interesa?</label>
                                    <select id="demoInterest" required>
                                        <option value="">Selecciona una opción</option>
                                        <option value="reformapilot">ReformaPilot</option>
                                        <option value="hotelpilot">HotelPilot</option>
                                        <option value="gympilot">GymPilot</option>
                                        <option value="clinicpilot">ClinicPilot</option>
                                        <option value="custom">Servicio a medida</option>
                                        <option value="other">Otro / No estoy seguro</option>
                                    </select>
                                </div>
                                <div className={styles.field}>
                                    <label htmlFor="demoNotes">Notas (opcional)</label>
                                    <textarea id="demoNotes" rows={4} placeholder="Cuéntanos qué problema quieres resolver..."></textarea>
                                </div>
                                <Button variant="primary" fullWidth size="lg" type="submit">
                                    Solicitar demo
                                </Button>
                            </form>
                        </div>

                        {/* Benefits */}
                        <div className={styles.benefits}>
                            <div className={`${styles.benefitCard} reveal`}>
                                <span className={styles.benefitIcon}>🎯</span>
                                <h4>Demo personalizada</h4>
                                <p>Te mostramos cómo se aplica OpsPilot a tu sector y caso concreto.</p>
                            </div>
                            <div className={`${styles.benefitCard} reveal`}>
                                <span className={styles.benefitIcon}>⚡</span>
                                <h4>14 días gratis</h4>
                                <p>Prueba el producto completo sin coste ni tarjeta.</p>
                            </div>
                            <div className={`${styles.benefitCard} reveal`}>
                                <span className={styles.benefitIcon}>🤝</span>
                                <h4>Onboarding guiado</h4>
                                <p>Te acompañamos en la configuración inicial paso a paso.</p>
                            </div>
                            <div className={`${styles.benefitBig} reveal anim-border-glow`}>
                                <div className={styles.bigNumber}>+50</div>
                                <p>Empresas ya confían en OpsPilot para gestionar su día a día.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
