"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/app/styles/HeroSection.module.css'


export default function Homepage() {
  return (
    <section className={styles.hero}>
      <p className={`${styles.subtitle} ${styles.fadeIn}`}>Welcome! To Site Of</p>
      <h1 className={`${styles.title} ${styles.fadeIn}`}>
        HANS THOBIE <br /> SACHIO
      </h1>
      <div className={`${styles.buttonRow} ${styles.fadeIn}`}>
        <button className={styles.cta}>Let's See My Project</button>
        <button className={styles.cta}>Wanna See My Blog?</button>
      </div>
    </section>
  );
}
