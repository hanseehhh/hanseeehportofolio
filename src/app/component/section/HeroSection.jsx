
"use client"; 

import React from 'react';
import Image from 'next/image'; 
import styles from '@/app/styles/HeroSection.module.css';
export default function HeroSection() {
  return (
    <section className={styles.heroContainer}>

      <div className={styles.heroImage}>

        <Image
          src="/images/waving-man.png" 
          alt="Kevin Anggara Waving"
          width={400} 
          height={400} 
          priority 
        />
      </div>

      {/* Kolom Kanan: Teks dan Tombol */}
      <div className={styles.heroContent}>
        <p className={styles.heroText}>
          Selamat datang di blog Kevin Anggara! Blog ini berisi
          informasi tentang Kevin, <span className={styles.highlight}>tulisan-tulisannya</span> tentang
          apapun, serta <span className={styles.highlight}>kode cheat</span> di game Stardew Valley.
        </p>
        <button className={styles.blogButton}>
          MASUK KE BLOG
        </button>
      </div>
    </section>
  );
}