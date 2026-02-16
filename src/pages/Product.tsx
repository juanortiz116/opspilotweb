import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Product.module.css';

export const Product: React.FC = () => {
    const productsRef = useScrollReveal<HTMLDivElement>({ stagger: true });
    const advantagesRef = useScrollReveal<HTMLDivElement>({ stagger: true });
    const ctaRef = useScrollReveal<HTMLDivElement>();

    return (
        <div className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={`${styles.heroGlow} anim-pulse-glow`}></div>
                <div className={styles.heroContent}>
                    <span className={styles.tag}>Productos</span>
                    <h1 className={styles.heroTitle}>
                        Catálogo SaaS:{' '}
                        <span className="text-gradient">soluciones que ya funcionan.</span>
                    </h1>
                    <p className={styles.heroSub}>
                        Software por sector, listo para usar. Suscríbete, configura y empieza a gestionar tu negocio hoy mismo.
                    </p>
                </div>
            </section>

            {/* Products Grid */}
            <section className={styles.section}>
                <div className={styles.container} ref={productsRef}>
                    <div className={`${styles.sectionHeader} reveal`}>
                        <h2 className={styles.sectionTitle}>Elige tu sector</h2>
                        <p className={styles.sectionSub}>Cada producto está diseñado para resolver los problemas específicos de tu industria.</p>
                    </div>
                    <div className={styles.grid}>
                        {[
                            { emoji: '🔧', name: 'ReformaPilot', desc: 'Gestión de obras, presupuestos con IA y citas automáticas para empresas de reformas.', price: '69€/mes', sector: 'Reformas' },
                            { emoji: '🏨', name: 'HotelPilot', desc: 'Check-in/out automatizado, gestión de reservas y comunicación con huéspedes.', price: '89€/mes', sector: 'Hostelería' },
                            { emoji: '🏋️', name: 'GymPilot', desc: 'Reserva de clases, pagos recurrentes y comunicación automática con socios.', price: '59€/mes', sector: 'Gimnasios' },
                            { emoji: '🦷', name: 'ClinicPilot', desc: 'Agenda inteligente, recordatorios y facturación simplificada para clínicas.', price: '79€/mes', sector: 'Clínicas' },
                            { emoji: '📦', name: 'LogiPilot', desc: 'Gestión de pedidos, inventario en tiempo real y logística automatizada.', price: '99€/mes', sector: 'Logística' },
                            { emoji: '🍽️', name: 'RestoPilot', desc: 'Reservas, comandas digitales y control de stock para restaurantes.', price: '69€/mes', sector: 'Restauración' },
                        ].map((p) => (
                            <div key={p.name} className={`${styles.productCard} reveal`}>
                                <span className={styles.productIcon}>{p.emoji}</span>
                                <span className={styles.productSector}>{p.sector}</span>
                                <h3 className={styles.productName}>{p.name}</h3>
                                <p className={styles.productDesc}>{p.desc}</p>
                                <div className={styles.productPrice}>{p.price}</div>
                                <Link to="/demo"><Button variant="outline" size="sm" fullWidth>Probar gratis</Button></Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advantages */}
            <section className={styles.section}>
                <div className={styles.container} ref={advantagesRef}>
                    <div className={`${styles.sectionHeader} reveal`}>
                        <h2 className={styles.sectionTitle}>Ventajas del modelo SaaS</h2>
                    </div>
                    <div className={styles.whyGrid}>
                        {[
                            { icon: '🚀', title: 'Implementación rápida', desc: 'Activo en 48 horas. Sin esperas de desarrollo.' },
                            { icon: '💰', title: 'Coste predecible', desc: 'Suscripción mensual sin sorpresas. Cancela cuando quieras.' },
                            { icon: '🔄', title: 'Actualizaciones continuas', desc: 'Mejoras constantes sin coste adicional.' },
                            { icon: '🛡️', title: 'Soporte incluido', desc: 'Equipo técnico disponible para resolver cualquier duda.' },
                        ].map((a) => (
                            <div key={a.title} className={`${styles.whyCard} reveal`}>
                                <span className={styles.whyEmoji}>{a.icon}</span>
                                <h4>{a.title}</h4>
                                <p>{a.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={`${styles.ctaBlock} reveal`} ref={ctaRef}>
                        <h2 className={styles.ctaTitle}>¿Necesitas algo más personalizado?</h2>
                        <p className={styles.ctaSub}>Exploramos juntos la mejor solución para tu caso.</p>
                        <div className={styles.ctaRow}>
                            <Link to="/services"><Button variant="primary" size="lg">Ver servicios a medida</Button></Link>
                            <Link to="/contact"><Button variant="outline" size="lg">Hablar con un experto</Button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
