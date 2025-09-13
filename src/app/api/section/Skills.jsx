import styles from '@/app/styles/Skill.module.css'

export default function Skills() {
  const skills = [
    "Web Design",
    "User Experience Design",
    "User Interface Design",
    "Digital Poster Design",
    "Front End Developer",
    "Figma & Adobe",
    "iOS App Design",
    "Android App Design",
    "User Research",
  ];

  return (
    <section className={styles.skills}>
      <div className={styles.centerContent}>
        <h2 className={styles.title}>What I Bring to The Table</h2>

        <p className={styles.subtitle}>
          Creating a Digital Footprint that Makes an Impact. From Idea to
          Unforgettable Experience.
        </p>
      </div>

      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <span key={index} className={`${styles.skill} ${styles[`float${index % 3}`]}`}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
