import React, { useCallback } from 'react';
import { useCountUp } from '../../hooks/useCountUp';
import styles from './Stat.module.css';

interface StatProps {
    value: number | string;
    label: string;
    prefix?: string;
    suffix?: string;
    decimals?: number;
    align?: 'left' | 'center';
    size?: 'md' | 'lg' | 'xl';
}

export const Stat: React.FC<StatProps> = ({
    value,
    label,
    prefix = '',
    suffix = '',
    decimals = 0,
    align = 'left',
    size = 'lg',
}) => {
    const isNumeric = typeof value === 'number';
    const format = useCallback(
        (n: number) => n.toFixed(decimals),
        [decimals]
    );
    const numRef = useCountUp<HTMLSpanElement>({
        end: isNumeric ? (value as number) : 0,
        format,
    });

    return (
        <div className={`${styles.stat} ${styles[align]} ${styles[`size_${size}`]}`}>
            <span className={styles.value}>
                {prefix}
                {isNumeric ? <span ref={numRef}>0</span> : value}
                {suffix}
            </span>
            <span className={styles.label}>{label}</span>
        </div>
    );
};
