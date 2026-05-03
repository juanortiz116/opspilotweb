import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Logo } from './Logo';
import { useMagnetic } from '../../hooks/useMagnetic';
import styles from './Navbar.module.css';

const NAV_ITEMS: { to: string; label: string }[] = [
    { to: '/', label: 'Inicio' },
    { to: '/soluciones', label: 'Soluciones' },
    { to: '/servicios', label: 'Servicios' },
    { to: '/productos', label: 'Productos' },
    { to: '/casos', label: 'Casos' },
    { to: '/precios', label: 'Precios' },
];

export const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const ctaRef = useMagnetic<HTMLDivElement>({ strength: 14 });

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    const toggleMenu = () => setIsMenuOpen((v) => !v);

    return (
        <>
            <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
                <div className={styles.container}>
                    <Link to="/" className={styles.logo} aria-label="OpsPilot — Inicio">
                        <Logo size={42} />
                        <span className={styles.logoWordmark}>OpsPilot</span>
                    </Link>

                    <div className={styles.desktopMenu}>
                        {NAV_ITEMS.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.to === '/'}
                                className={({ isActive }) =>
                                    `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                        <div ref={ctaRef} className={styles.ctaWrap}>
                            <Link to="/contacto">
                                <Button variant="primary" size="sm">Diagnóstico gratuito</Button>
                            </Link>
                        </div>
                    </div>

                    <button
                        className={`${styles.mobileToggle} ${isMenuOpen ? styles.active : ''}`}
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={isMenuOpen}
                    >
                        <span className={styles.hamburger}></span>
                    </button>
                </div>
            </nav>

            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                {NAV_ITEMS.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        end={item.to === '/'}
                        className={({ isActive }) =>
                            `${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`
                        }
                        onClick={toggleMenu}
                    >
                        {item.label}
                    </NavLink>
                ))}
                <NavLink to="/contacto" className={styles.mobileNavLink} onClick={toggleMenu}>Contacto</NavLink>
                <div className={styles.mobileCta}>
                    <Link to="/contacto" onClick={toggleMenu} style={{ width: '100%' }}>
                        <Button variant="primary" fullWidth>Diagnóstico gratuito</Button>
                    </Link>
                </div>
            </div>
        </>
    );
};
