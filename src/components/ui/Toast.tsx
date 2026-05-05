import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import styles from './Toast.module.css';

type ToastTone = 'success' | 'error' | 'info';

interface Toast {
    id: number;
    tone: ToastTone;
    title: string;
    description?: string;
    duration?: number;
}

interface ToastContextValue {
    push: (t: Omit<Toast, 'id'>) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export const useToast = () => {
    const ctx = useContext(ToastContext);
    if (!ctx) throw new Error('useToast must be used inside <ToastProvider>');
    return ctx;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const remove = useCallback((id: number) => {
        setToasts((curr) => curr.filter((t) => t.id !== id));
    }, []);

    const push = useCallback<ToastContextValue['push']>((t) => {
        const id = Date.now() + Math.random();
        setToasts((curr) => [...curr, { ...t, id }]);
    }, []);

    return (
        <ToastContext.Provider value={{ push }}>
            {children}
            <div className={styles.viewport} role="region" aria-label="Notificaciones">
                {toasts.map((t) => (
                    <ToastItem key={t.id} toast={t} onClose={() => remove(t.id)} />
                ))}
            </div>
        </ToastContext.Provider>
    );
};

const TONE_ICON: Record<ToastTone, React.ReactNode> = {
    success: <CheckCircle2 size={18} strokeWidth={2.2} />,
    error: <AlertCircle size={18} strokeWidth={2.2} />,
    info: <Info size={18} strokeWidth={2.2} />,
};

const ToastItem: React.FC<{ toast: Toast; onClose: () => void }> = ({ toast, onClose }) => {
    useEffect(() => {
        const id = window.setTimeout(onClose, toast.duration ?? 4500);
        return () => window.clearTimeout(id);
    }, [toast.duration, onClose]);

    return (
        <div className={`${styles.toast} ${styles[toast.tone]}`} role="status">
            <span className={styles.icon}>{TONE_ICON[toast.tone]}</span>
            <div className={styles.body}>
                <p className={styles.title}>{toast.title}</p>
                {toast.description && <p className={styles.description}>{toast.description}</p>}
            </div>
            <button
                className={styles.close}
                onClick={onClose}
                aria-label="Cerrar notificación"
                type="button"
            >
                <X size={14} strokeWidth={2} />
            </button>
        </div>
    );
};
