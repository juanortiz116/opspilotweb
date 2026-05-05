import React from 'react';
import styles from './Badge.module.css';

type BadgeTone = 'mint' | 'warm' | 'neutral' | 'success' | 'warning' | 'info';
type BadgeVariant = 'soft' | 'solid' | 'outline';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    tone?: BadgeTone;
    variant?: BadgeVariant;
    dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
    tone = 'mint',
    variant = 'soft',
    dot = false,
    className = '',
    children,
    ...rest
}) => (
    <span
        className={`${styles.badge} ${styles[tone]} ${styles[variant]} ${className}`}
        {...rest}
    >
        {dot && <span className={styles.dot} aria-hidden="true" />}
        {children}
    </span>
);
