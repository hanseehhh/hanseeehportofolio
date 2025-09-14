"use client";

import { motion } from "framer-motion";
import styles from "@/app/lib/styles/Footer.module.css";

import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaBehance,
  FaDribbble,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Container utama untuk seluruh footer */}
      <div className={styles.container}>
        {/* Kolom Kanan Atas: Nama & Tagline */}
        <div className={styles.brand}>
          <h3 className={styles.brandName}>Hans Thobie Sachio</h3>
          <p className={styles.brandTagline}>Web & UI/UX Design</p>
        </div>

        {/* Kolom Kiri Bawah: Navigasi */}
        <div className={styles.columnNav}>
          <ul className={styles.navList}>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/projects">Blog</a></li>
          </ul>
        </div>

        {/* Kolom Tengah: Kontak & Sosial Media */}
        <div className={styles.contactGrid}>

            {/* Email */}
            <a href="mailto:mrhanseeeh@gmail.com" className={styles.itemLink}>
                <div className={styles.item}>
                <FaEnvelope className={styles.icon} />
                <span className={styles.text}>mrhanseeeh@gmail.com</span>
                </div>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/hansthobiesachio" target="_blank" rel="noopener noreferrer" className={styles.itemLink}>
                <div className={styles.item}>
                <FaLinkedin className={styles.icon} />
                <span className={styles.text}>Hans Thobie Sachio</span>
                </div>
            </a>
                        
            {/* Behance */}
            <a href="https://www.behance.net/hansthobie" target="_blank" rel="noopener noreferrer" className={styles.itemLink}>
                <div className={styles.item}>
                <FaBehance className={styles.icon} />
                <span className={styles.text}>asdadadasda</span>
                </div>
            </a>

            {/* Telepon */}
            <a href="tel:+62 87742317432" className={styles.itemLink}>
                <div className={styles.item}>
                <FaPhone className={styles.icon} />
                <span className={styles.text}>+62 87742317432</span>
                </div>
            </a>

            {/* GitHub */}
            <a href="https://github.com/hanseehhh" target="_blank" rel="noopener noreferrer" className={styles.itemLink}>
                <div className={styles.item}>
                <FaGithub className={styles.icon} />
                <span className={styles.text}>hanseehhh</span>
                </div>
            </a>

            {/* Dribbble */}
            <a href="https://dribbble.com/hanseeeh" target="_blank" rel="noopener noreferrer" className={styles.itemLink}>
                <div className={styles.item}>
                <FaDribbble className={styles.icon} />
                <span className={styles.text}>hanseeeh</span>
                </div>
            </a>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <span className={styles.copy}>© 2025, Hans Thobie Sachio. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}