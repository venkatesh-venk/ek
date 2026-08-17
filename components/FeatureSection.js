import Link from "next/link";
import Reveal from "./Reveal";
import PlatformVisual from "./PlatformVisual";
import styles from "./FeatureSection.module.css";

export default function FeatureSection({
  eyebrow,
  title,
  description,
  bullets = [],
  cta,
  visual = "dashboard",
  reverse = false,
  alt = false,
}) {
  return (
    <section className={`${styles.section} ${alt ? styles.alt : ""}`}>
      <div className="container">
        <Reveal>
          <div className={`${styles.grid} ${reverse ? styles.reverse : ""}`}>
            <div className={styles.copy}>
              <span className="eyebrow">{eyebrow}</span>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.desc}>{description}</p>
              {bullets.length > 0 && (
                <ul className={styles.bullets}>
                  {bullets.map((b) => (
                    <li key={b}>
                      <span className={styles.check}>✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {cta && (
                <Link href={cta.href} className={styles.link}>
                  {cta.label}
                </Link>
              )}
            </div>
            <div className={styles.visual}>
              <PlatformVisual type={visual} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
