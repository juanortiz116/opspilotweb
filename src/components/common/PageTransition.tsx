import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './PageTransition.module.css';

interface PageTransitionProps {
    children: React.ReactNode;
}

/**
 * Re-mount-keyed CSS animation. Each route change rebuilds the wrapping
 * <div>, which restarts the keyframe — no GSAP, no JS, no extra bundle.
 */
export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
    const { pathname } = useLocation();
    return (
        <div key={pathname} className={styles.wrap}>
            {children}
        </div>
    );
};
