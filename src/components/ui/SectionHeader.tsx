import React from 'react';
import { Eyebrow } from './Eyebrow';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
    eyebrow?: React.ReactNode;
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    align?: 'left' | 'center';
    className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
    eyebrow,
    title,
    subtitle,
    align = 'left',
    className = '',
}) => (
    <header className={`${styles.header} ${align === 'center' ? styles.center : ''} ${className}`}>
        {eyebrow && (
            <div className={styles.eyebrowWrap}>
                <Eyebrow>{eyebrow}</Eyebrow>
            </div>
        )}
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </header>
);
