import React from 'react';
import styles from './Input.module.css';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    fullWidth?: boolean;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, error, fullWidth, className = '', ...props }) => {
    return (
        <div className={`${styles.wrapper} ${fullWidth ? styles.fullWidth : ''}`}>
            {label && <label className={styles.label}>{label}</label>}
            <textarea
                className={`${styles.input} ${styles.textarea} ${error ? styles.errorInput : ''} ${className}`}
                {...props}
            />
            {error && <span className={styles.errorMessage}>{error}</span>}
        </div>
    );
};
