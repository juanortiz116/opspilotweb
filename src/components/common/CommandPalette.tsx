import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Search, ArrowRight, Home, Package, Briefcase, Building2,
    DollarSign, BookOpen, MessageSquare, Sparkles, X,
} from 'lucide-react';
import { ROUTES } from '../../lib/routes';
import styles from './CommandPalette.module.css';

interface Command {
    id: string;
    label: string;
    description?: string;
    keywords: string[];
    icon: React.ReactNode;
    action: () => void;
    section: 'Navegación' | 'Acciones' | 'Externos';
}

interface CommandPaletteContextValue {
    open: () => void;
}

const Ctx = React.createContext<CommandPaletteContextValue | null>(null);
export const useCommandPalette = () => {
    const c = React.useContext(Ctx);
    if (!c) throw new Error('useCommandPalette must be used inside <CommandPaletteProvider>');
    return c;
};

export const CommandPaletteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [activeIdx, setActiveIdx] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => {
        setIsOpen(false);
        setQuery('');
        setActiveIdx(0);
    }, []);

    const commands = useMemo<Command[]>(() => [
        { id: 'home', label: 'Inicio', keywords: ['home', 'inicio', 'principal'], icon: <Home size={16} />, section: 'Navegación', action: () => navigate(ROUTES.home) },
        { id: 'productos', label: 'Productos verticales', description: 'Fiscalidad · EnergyDeal · Presupuestador · ERP', keywords: ['productos', 'fiscalidad', 'aeat', 'energydeal', 'erp', 'presupuestador', 'bc3'], icon: <Package size={16} />, section: 'Navegación', action: () => navigate(ROUTES.productos) },
        { id: 'soluciones', label: 'Soluciones por sector', keywords: ['soluciones', 'sector', 'asesoria', 'reformas', 'agencia'], icon: <Building2 size={16} />, section: 'Navegación', action: () => navigate(ROUTES.soluciones) },
        { id: 'servicios', label: 'Servicios a medida', keywords: ['servicios', 'custom', 'a medida', 'desarrollo'], icon: <Briefcase size={16} />, section: 'Navegación', action: () => navigate(ROUTES.servicios) },
        { id: 'casos', label: 'Casos de éxito', keywords: ['casos', 'success', 'clientes', 'éxito'], icon: <Sparkles size={16} />, section: 'Navegación', action: () => navigate(ROUTES.casos) },
        { id: 'precios', label: 'Precios y planes', description: 'Suscripciones y desarrollo a medida', keywords: ['precios', 'pricing', 'coste', 'tarifa'], icon: <DollarSign size={16} />, section: 'Navegación', action: () => navigate(ROUTES.precios) },
        { id: 'recursos', label: 'Recursos · Guías y blog', keywords: ['recursos', 'blog', 'guías', 'newsletter'], icon: <BookOpen size={16} />, section: 'Navegación', action: () => navigate(ROUTES.recursos) },
        { id: 'contacto', label: 'Contacto', keywords: ['contacto', 'contact', 'email'], icon: <MessageSquare size={16} />, section: 'Navegación', action: () => navigate(ROUTES.contacto) },

        { id: 'diagnostico', label: 'Empezar diagnóstico gratuito', description: '4 preguntas · 60 segundos · sin compromiso', keywords: ['diagnostico', 'diagnóstico', 'demo', 'empezar', 'reservar'], icon: <Sparkles size={16} />, section: 'Acciones', action: () => navigate(ROUTES.diagnostico) },
        { id: 'whatsapp', label: 'Abrir WhatsApp directo', description: '+34 640 75 61 26', keywords: ['whatsapp', 'wa', 'telefono', 'chat'], icon: <MessageSquare size={16} />, section: 'Acciones', action: () => window.open('https://wa.me/34640756126', '_blank', 'noopener,noreferrer') },
        { id: 'email', label: 'Escribir un email', description: 'opspilot.contact@gmail.com', keywords: ['email', 'mail', 'correo'], icon: <MessageSquare size={16} />, section: 'Acciones', action: () => { window.location.href = 'mailto:opspilot.contact@gmail.com'; } },

        { id: 'fiscalidad-ext', label: 'Fiscalidad — web del producto', description: 'fiscalidad.mcpopspilot.org', keywords: ['fiscalidad', 'aeat', 'sii', 'verifactu'], icon: <ArrowRight size={16} />, section: 'Externos', action: () => window.open('https://fiscalidad.mcpopspilot.org', '_blank', 'noopener,noreferrer') },
        { id: 'energydeal-ext', label: 'EnergyDeal — web del producto', description: 'energydeal.es', keywords: ['energydeal', 'energía', 'energetico'], icon: <ArrowRight size={16} />, section: 'Externos', action: () => window.open('https://energydeal.es', '_blank', 'noopener,noreferrer') },
    ], [navigate]);

    const filtered = useMemo(() => {
        if (!query.trim()) return commands;
        const q = query.toLowerCase();
        return commands.filter((c) =>
            c.label.toLowerCase().includes(q) ||
            c.description?.toLowerCase().includes(q) ||
            c.keywords.some((k) => k.toLowerCase().includes(q))
        );
    }, [commands, query]);

    const grouped = useMemo(() => {
        const groups: Record<Command['section'], Command[]> = {
            Navegación: [], Acciones: [], Externos: [],
        };
        filtered.forEach((c) => groups[c.section].push(c));
        return groups;
    }, [filtered]);

    // Keyboard shortcut Cmd/Ctrl+K
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                setIsOpen((o) => !o);
            } else if (e.key === 'Escape' && isOpen) {
                e.preventDefault();
                close();
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen, close]);

    // Focus input al abrir
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 50);
        }
    }, [isOpen]);

    // Reset active idx when filtered changes
    useEffect(() => { setActiveIdx(0); }, [query]);

    // Lock body scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            return () => { document.body.style.overflow = ''; };
        }
    }, [isOpen]);

    const onKeyboard = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveIdx((i) => Math.min(filtered.length - 1, i + 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveIdx((i) => Math.max(0, i - 1));
        } else if (e.key === 'Enter' && filtered[activeIdx]) {
            e.preventDefault();
            filtered[activeIdx].action();
            close();
        }
    };

    return (
        <Ctx.Provider value={{ open }}>
            {children}

            {isOpen && (
                <div className={styles.overlay} onClick={close} role="presentation">
                    <div
                        className={styles.dialog}
                        role="dialog"
                        aria-label="Buscar páginas y acciones"
                        aria-modal="true"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={styles.searchRow}>
                            <Search size={18} className={styles.searchIcon} aria-hidden="true" />
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={onKeyboard}
                                placeholder="Buscar páginas, productos, acciones…"
                                className={styles.searchInput}
                                aria-label="Buscar"
                            />
                            <kbd className={styles.kbd}>esc</kbd>
                            <button className={styles.closeBtn} onClick={close} aria-label="Cerrar">
                                <X size={16} />
                            </button>
                        </div>

                        <div className={styles.results}>
                            {filtered.length === 0 ? (
                                <p className={styles.empty}>
                                    Nada coincide con "{query}". Prueba: <em>productos</em>, <em>diagnóstico</em>, <em>WhatsApp</em>.
                                </p>
                            ) : (
                                (Object.keys(grouped) as Command['section'][]).map((section) => {
                                    const items = grouped[section];
                                    if (items.length === 0) return null;
                                    return (
                                        <div key={section} className={styles.group}>
                                            <p className={styles.groupTitle}>{section}</p>
                                            {items.map((cmd) => {
                                                const idx = filtered.indexOf(cmd);
                                                const isActive = idx === activeIdx;
                                                return (
                                                    <button
                                                        key={cmd.id}
                                                        type="button"
                                                        className={`${styles.item} ${isActive ? styles.itemActive : ''}`}
                                                        onClick={() => { cmd.action(); close(); }}
                                                        onMouseEnter={() => setActiveIdx(idx)}
                                                    >
                                                        <span className={styles.itemIcon}>{cmd.icon}</span>
                                                        <span className={styles.itemBody}>
                                                            <span className={styles.itemLabel}>{cmd.label}</span>
                                                            {cmd.description && <span className={styles.itemDesc}>{cmd.description}</span>}
                                                        </span>
                                                        <ArrowRight size={14} className={styles.itemArrow} aria-hidden="true" />
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    );
                                })
                            )}
                        </div>

                        <div className={styles.footer}>
                            <span><kbd className={styles.kbd}>↑</kbd><kbd className={styles.kbd}>↓</kbd> navegar</span>
                            <span><kbd className={styles.kbd}>↵</kbd> seleccionar</span>
                            <span className={styles.footerRight}>
                                <kbd className={styles.kbd}>⌘</kbd>+<kbd className={styles.kbd}>K</kbd> abrir
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </Ctx.Provider>
    );
};
