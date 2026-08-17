import styles from "./PageHero.module.css";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs = [],
  stats = [],
}) {
  return (
    <section className={styles.hero}>
      <div className={styles.glowA} />
      <div className={styles.glowB} />
      <div className="container">
        {crumbs.length > 0 && (
          <nav className={styles.crumbs} aria-label="Breadcrumb">
            {crumbs.map((c, i) => (
              <span key={i}>
                {c}
                {i < crumbs.length - 1 && <span className={styles.sep}>/</span>}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {stats.length > 0 && (
          <div className={styles.statRow}>
            {stats.map((s, i) => (
              <div key={s.label} className={styles.statItem}>
                {i > 0 && <span className={styles.statDivider} />}
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
