import React from 'react';

interface LogoProps {
    className?: string;
    size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className, size = 60 }) => {
    return (
        <img
            src="/images/logo.png"
            alt="OpsPilot"
            width={size}
            height={size}
            className={className}
            style={{ objectFit: 'contain' }}
            loading="lazy"
        />
    );
};
