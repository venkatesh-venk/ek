import styles from "./Logo.module.css";

export default function Logo({ variant = "dark", showText = true }) {
  const wordClass =
    variant === "light" ? `${styles.word} ${styles.wordLight}` : styles.word;

  return (
    <span className={styles.logo} aria-label="ESIKA INFOTECH">
      <svg
        className={styles.mark}
        viewBox="0 0 120 84"
        role="img"
        aria-hidden="true"
      >
        {/* Oval brand ring */}
        <ellipse
          cx="60"
          cy="42"
          rx="55"
          ry="37"
          fill="none"
          stroke="url(#esikaRing)"
          strokeWidth="5"
        />
        {/* E */}
        <text
          x="34"
          y="58"
          className={styles.markE}
          fontSize="52"
          fontWeight="800"
          fill="#e11b22"
        >
          E
        </text>
        {/* S */}
        <text
          x="60"
          y="58"
          className={styles.markS}
          fontSize="52"
          fontWeight="800"
          fill="#1c5ca8"
        >
          S
        </text>
        <defs>
          <linearGradient id="esikaRing" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3a86d6" />
            <stop offset="55%" stopColor="#1c5ca8" />
            <stop offset="100%" stopColor="#e11b22" />
          </linearGradient>
        </defs>
      </svg>

      {showText && (
        <span className={wordClass}>
          <span className={styles.word1}>ESIKA</span>
          <span className={styles.word2}>INFOTECH</span>
        </span>
      )}
    </span>
  );
}
