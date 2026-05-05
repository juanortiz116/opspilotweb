import React from 'react';
import styles from './Skeleton.module.css';

interface SkeletonProps {
    width?: string | number;
    height?: string | number;
    radius?: string | number;
    className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
    width = '100%',
    height = '1em',
    radius,
    className = '',
}) => (
    <span
        className={`${styles.skeleton} ${className}`}
        style={{
            width,
            height,
            borderRadius: radius,
        }}
        aria-hidden="true"
    />
);

interface PageSkeletonProps {
    rows?: number;
}

export const PageSkeleton: React.FC<PageSkeletonProps> = ({ rows = 4 }) => (
    <div className={styles.page} aria-busy="true" aria-live="polite">
        <Skeleton width="40%" height="3.5rem" className={styles.heroTitle} />
        <Skeleton width="65%" height="1.25rem" className={styles.heroSub} />
        <Skeleton width="35%" height="1.25rem" className={styles.heroSub} />
        <div className={styles.grid}>
            {Array.from({ length: rows }).map((_, i) => (
                <div key={i} className={styles.card}>
                    <Skeleton width="2.5rem" height="2.5rem" radius="0.75rem" />
                    <Skeleton width="80%" height="1.5rem" />
                    <Skeleton width="100%" height="1rem" />
                    <Skeleton width="90%" height="1rem" />
                </div>
            ))}
        </div>
    </div>
);
