"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import PlatformVisual from "./PlatformVisual";
import styles from "./HeroCarousel.module.css";

const AUTOPLAY_MS = 3000;

export default function HeroCarousel({ slides }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (i) => setIndex(((i % slides.length) + slides.length) % slides.length),
    [slides.length]
  );

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, slides.length]);

  const slide = slides[index];

  return (
    <section className={`${styles.hero} ${paused ? styles.paused : ""}`}>
      <div className={styles.heroGlowA} />
      <div className={styles.heroGlowB} />
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroCopy} key={`copy-${slide.id}`}>
          <span className={styles.badge}>
            <span className={styles.badgeDot} />
            {slide.eyebrow}
          </span>
          <h1 className={styles.heroTitle}>
            {slide.titleBefore}
            <span className="text-grad">{slide.titleHighlight}</span>
            {slide.titleAfter}
          </h1>
          <p className={styles.heroText}>{slide.text}</p>
          <div className={styles.heroActions}>
            <Link href={slide.primaryCta.href} className="btn btn--primary">
              {slide.primaryCta.label}
            </Link>
            <Link href={slide.secondaryCta.href} className="btn btn--ghost">
              {slide.secondaryCta.label}
            </Link>
          </div>
          <div className={styles.heroStat}>
            <strong>{slide.stat.value}</strong>
            <span>{slide.stat.label}</span>
          </div>
        </div>
        <div className={styles.heroVisual} key={`visual-${slide.id}`}>
          <PlatformVisual type={slide.visual} />
        </div>
      </div>

      <div
        className={`container ${styles.controls}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className={styles.dots} role="tablist" aria-label="Hero slides">
          {slides.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={i === index}
              aria-label={`${s.eyebrow} slide`}
              className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
              onClick={() => goTo(i)}
            >
              {i === index && (
                <span key={`fill-${index}`} className={styles.dotFill} />
              )}
            </button>
          ))}
        </div>
        <div className={styles.arrows}>
          <button className={styles.arrow} aria-label="Previous slide" onClick={() => goTo(index - 1)}>
            ‹
          </button>
          <button className={styles.arrow} aria-label="Next slide" onClick={() => goTo(index + 1)}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
