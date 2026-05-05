import React, { useMemo, useState } from 'react';
import { Eyebrow } from '../ui/Eyebrow';
import styles from './ROICalculator.module.css';

const formatEur = (n: number) =>
    new Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'EUR',
        maximumFractionDigits: 0,
    }).format(Math.round(n));

const formatHours = (n: number) =>
    new Intl.NumberFormat('es-ES', { maximumFractionDigits: 0 }).format(Math.round(n));

export const ROICalculator: React.FC = () => {
    const [team, setTeam] = useState(5);
    const [hoursWeek, setHoursWeek] = useState(8);
    const [hourlyCost, setHourlyCost] = useState(25);

    const result = useMemo(() => {
        const weeklyHours = team * hoursWeek;
        const monthlyHours = weeklyHours * 4.33;
        const monthlySavings = monthlyHours * hourlyCost;
        const annualSavings = monthlySavings * 12;
        return { monthlyHours, monthlySavings, annualSavings };
    }, [team, hoursWeek, hourlyCost]);

    return (
        <div className={styles.calc}>
            <div className={styles.head}>
                <Eyebrow>Calculadora · ahorro estimado</Eyebrow>
                <h3 className={styles.title}>¿Cuánto te ahorraría automatizar?</h3>
                <p className={styles.subtitle}>
                    Mueve los sliders. El resultado se actualiza al instante.
                </p>
            </div>

            <div className={styles.body}>
                <div className={styles.sliders}>
                    <div className={styles.field}>
                        <label htmlFor="roi-team" className={styles.label}>
                            <span>Personas en tu equipo</span>
                            <span className={styles.value}>{team}</span>
                        </label>
                        <input
                            id="roi-team"
                            type="range"
                            min={1}
                            max={50}
                            step={1}
                            value={team}
                            onChange={(e) => setTeam(Number(e.target.value))}
                            className={styles.slider}
                            aria-label="Personas en tu equipo"
                        />
                        <div className={styles.scale}>
                            <span>1</span>
                            <span>50</span>
                        </div>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="roi-hours" className={styles.label}>
                            <span>Horas a la semana en tareas repetitivas (por persona)</span>
                            <span className={styles.value}>{hoursWeek}h</span>
                        </label>
                        <input
                            id="roi-hours"
                            type="range"
                            min={1}
                            max={30}
                            step={1}
                            value={hoursWeek}
                            onChange={(e) => setHoursWeek(Number(e.target.value))}
                            className={styles.slider}
                            aria-label="Horas semanales por persona"
                        />
                        <div className={styles.scale}>
                            <span>1h</span>
                            <span>30h</span>
                        </div>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="roi-cost" className={styles.label}>
                            <span>Coste por hora (estimado)</span>
                            <span className={styles.value}>{hourlyCost}&nbsp;€</span>
                        </label>
                        <input
                            id="roi-cost"
                            type="range"
                            min={10}
                            max={120}
                            step={5}
                            value={hourlyCost}
                            onChange={(e) => setHourlyCost(Number(e.target.value))}
                            className={styles.slider}
                            aria-label="Coste por hora estimado"
                        />
                        <div className={styles.scale}>
                            <span>10&nbsp;€</span>
                            <span>120&nbsp;€</span>
                        </div>
                    </div>
                </div>

                <div className={styles.result} aria-live="polite">
                    <div className={styles.resultRow}>
                        <span className={styles.resultLabel}>Horas al mes</span>
                        <span className={styles.resultValue}>{formatHours(result.monthlyHours)}h</span>
                    </div>
                    <div className={`${styles.resultRow} ${styles.resultMain}`}>
                        <span className={styles.resultLabel}>Ahorro mensual estimado</span>
                        <span className={styles.resultValue}>{formatEur(result.monthlySavings)}</span>
                    </div>
                    <div className={styles.resultRow}>
                        <span className={styles.resultLabel}>Equivalente anual</span>
                        <span className={styles.resultValue}>{formatEur(result.annualSavings)}</span>
                    </div>
                    <p className={styles.disclaimer}>
                        Estimación basada en automatización media del 70% de tareas repetitivas
                        identificadas en el diagnóstico. Tu caso real lo cerramos por escrito antes
                        de empezar.
                    </p>
                </div>
            </div>
        </div>
    );
};
