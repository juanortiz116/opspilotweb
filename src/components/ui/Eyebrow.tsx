import React from 'react';
import styles from './Eyebrow.module.css';

interface EyebrowProps {
    children: React.ReactNode;
    dot?: boolean;
    /** Reserva separación inferior (útil en heros). */
    block?: boolean;
    className?: string;
}

export const Eyebrow: React.FC<EyebrowProps> = ({ children, dot = true, block = false, className = '' }) => (
    <span className={`${styles.eyebrow} ${block ? styles.block : ''} ${className}`}>
        {dot && <span className={styles.dot} aria-hidden="true" />}
        {children}
    </span>
);
