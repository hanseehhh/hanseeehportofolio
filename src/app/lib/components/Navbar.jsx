// src/app/components/Navbar.jsx

import Link from 'next/link';
import styles from '@/app/lib/styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
        </li>
        <li>
          <Link href="/projects" className={styles.navLink}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/blogs" className={styles.navLink}>
            Blogs
          </Link>
        </li>
        <li>
          <Link href="/blogs" className={styles.navLink}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}