import Link from "next/link";
import styles from "./CtaBand.module.css";

export default function CtaBand({
  title = "Let's build something great together.",
  text = "Tell us about your product goals and we'll craft a roadmap to get you there.",
  primary = { href: "/contact", label: "Start a Project" },
  secondary = { href: "/services", label: "Explore Services" },
}) {
  return (
    <section className={styles.wrap}>
      <div className="container">
        <div className={styles.band}>
          <div className={styles.pattern} />
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.text}>{text}</p>
          </div>
          <div className={styles.actions}>
            <Link href={primary.href} className="btn btn--light">
              {primary.label}
            </Link>
            {secondary && (
              <Link href={secondary.href} className={`btn ${styles.outline}`}>
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
