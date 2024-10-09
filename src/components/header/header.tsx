'use client';
import Link from 'next/link';
import styles from './header.module.css';
import { useEffect, useState } from 'react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <header className={scrolled ? `${styles.header} ${styles.scrolled}` : styles.header}>
            <div className={styles.logo}>
                LOGO
            </div>
            <div className={styles.links}>
                <Link href='/pros'>Преимущества</Link>
                <Link href='/work'>Как работаем</Link>
            </div>
        </header>
    );
}