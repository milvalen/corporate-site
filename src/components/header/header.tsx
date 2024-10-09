'use client';
import Menu from '../menu/menu';
import styles from './header.module.css';
import { useState } from 'react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    window.addEventListener('scroll', () => setScrolled(window.scrollY > 50));

    return (
        <header className={scrolled ? `${styles.header} ${styles.scrolled}` : styles.header}>
            <div className={styles.logo}>LOGO</div>
            <div className={styles.menu}>
                <Menu to='#pros'>Преимущества</Menu>
                <Menu to='#work'>Как работаем</Menu>
            </div>
        </header>
    );
}
