import Card from "@/app/lib/components/Card";
import styles from "@/app/styles/Portofolio.module.css";

export default function Projects() {
  const projects = [
    {
      image: "/images/untarx.png",
      title: "UntarX Website",
      description:
        "FinFlow needed an expense tracking platform for startup teams...",
      tags: ["SaaS", "UX", "UI", "AI"],
    },
    {
      image: "/images/untarx.png",
      title: "LaunchPad",
      description:
        "LaunchPad wanted a website builder for founders without coding skills...",
      tags: ["UI", "UX"],
    },
    {
      image: "/images/untarx.png",
      title: "LaunchPad",
      description:
        "LaunchPad wanted a website builder for founders without coding skills...",
      tags: ["UI", "UX"],
    },
        {
      image: "/images/untarx.png",
      title: "LaunchPad",
      description:
        "LaunchPad wanted a website builder for founders without coding skills...",
      tags: ["UI", "UX"],
    },
  ];

  return (
    <section className={styles.projects}>
      <h2 className={styles.sectionTitle}>
        Design That Works
      </h2>
      <p className={styles.subtitle}>
        From Idea to Sustainable Product, Design Partnerships for Innovators. (Made By Me)
      </p>

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <Card key={i} {...p} />
        ))}
      </div>

      <div className={`${styles.buttonRow} ${styles.fadeIn}`}>
        <button className={styles.cta}>Lets See More</button>
      </div>
    </section>
  );
}
