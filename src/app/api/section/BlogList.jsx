
import Image from 'next/image';
import styles from '@/app/styles/BlogList.module.css';

export default function WelcomeSection() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.sectionTitle}>
          Short Live Memorable
        </h2>
        <p className={styles.subtitle}>
         The little stories written here are not about big things, 
         but about simple moments that are often overlooked. They are short, personal, 
         and authentic—but that is precisely what makes them worth remembering.
        </p>
      </div>

      <div className={styles.welcomeContainer}>
        {/* Kolom Pertama: Ilustrasi */}
        <div className={styles.imageColumn}>
          <Image
            src="/images/ilustrasihans.png"
            alt="Illustration of me"
            width={400}
            height={400}
            className={styles.illustration}
          />
        </div>
        
        {/* Kolom Kedua: Teks dan Tombol */}
        <div className={styles.contentColumn}>
          <p className={styles.description}>
            In addition to creating designs, I also write blogs and stories about myself.
            <span className={styles.boldText}> My writings</span> are about anything and everything,
            <span className={styles.boldText}> as well as short stories </span> about my daily experiences.
          </p>
          
          <a href="/blog" className={styles.blogButton}>
            Lets See My Blog
          </a>
        </div>
      </div>
    </section>
  );
}