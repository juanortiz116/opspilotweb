import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    <span className={styles.logoIcon}>◆</span>
                    OpsPilot
                </Link>

                {/* Desktop Menu */}
                <div className={styles.desktopMenu}>
                    <Link to="/" className={styles.navLink}>Inicio</Link>
                    <Link to="/services" className={styles.navLink}>Servicios</Link>
                    <Link to="/product" className={styles.navLink}>Productos</Link>
                    <Link to="/cases" className={styles.navLink}>Casos de Éxito</Link>
                    <Link to="/contact">
                        <Button variant="primary" size="sm">Hablemos</Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={`${styles.mobileToggle} ${isMenuOpen ? styles.active : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={styles.hamburger}></span>
                </button>

                {/* Mobile Menu */}
                <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                    <Link to="/" className={styles.mobileNavLink} onClick={toggleMenu}>Inicio</Link>
                    <Link to="/services" className={styles.mobileNavLink} onClick={toggleMenu}>Servicios</Link>
                    <Link to="/product" className={styles.mobileNavLink} onClick={toggleMenu}>Productos</Link>
                    <Link to="/cases" className={styles.mobileNavLink} onClick={toggleMenu}>Casos de Éxito</Link>
                    <Link to="/contact" className={styles.mobileNavLink} onClick={toggleMenu}>Contacto</Link>
                    <div className={styles.mobileCta}>
                        <Link to="/contact" onClick={toggleMenu} style={{ width: '100%' }}>
                            <Button variant="primary" fullWidth>Hablemos</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};
