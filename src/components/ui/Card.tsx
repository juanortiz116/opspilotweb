import React from 'react';
import styles from './Card.module.css';

type CardVariant = 'dense' | 'featured' | 'testimonial' | 'metric' | 'glass';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
    interactive?: boolean;
    as?: 'div' | 'article' | 'section';
}

export const Card: React.FC<CardProps> = ({
    variant = 'featured',
    interactive = false,
    as: Tag = 'div',
    className = '',
    children,
    ...rest
}) => {
    const cls = [
        styles.card,
        styles[variant],
        interactive ? styles.interactive : '',
        className,
    ].filter(Boolean).join(' ');

    return (
        <Tag className={cls} {...rest}>
            {children}
        </Tag>
    );
};
