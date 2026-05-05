import React from 'react';
import { Navbar } from '../common/Navbar';
import { Footer } from '../common/Footer';
import { ScrollProgress } from '../common/ScrollProgress';
import { CookieBanner } from '../common/CookieBanner';
import styles from './Layout.module.css';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.layout}>
            <ScrollProgress />
            <Navbar />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
            <CookieBanner />
        </div>
    );
};
