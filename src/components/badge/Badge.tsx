import React from 'react';
import clsx from 'clsx';
import styles from './Badge.module.css';

interface Props {
    text: string;
    variant?: 'success' | 'info' | 'warning' | 'danger';
}

export const Badge: React.FC<Props> = ({ text, variant = 'info' }) => (
    <span className={clsx(styles.badge, styles[variant])}>
    {text}
  </span>
);
