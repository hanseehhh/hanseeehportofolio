import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from '@/app/lib/styles/Card.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Card({ image, title, description, tags }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    gsap.fromTo(
      el,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",   // mulai animasi saat card masuk viewport
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{description}</p>
      <div className={styles.tags}>
        {tags.map((tag, i) => (
          <span key={i} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
