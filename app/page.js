import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import {
  services,
  stats,
  values,
  process,
  techStack,
  portfolio,
  testimonials,
} from "@/lib/content";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGlowA} />
        <div className={styles.heroGlowB} />
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <span className={styles.badge}>
              <span className={styles.badgeDot} /> Bengaluru • Software Engineering Studio
            </span>
            <h1 className={styles.heroTitle}>
              We build software that moves your{" "}
              <span className="text-grad">business forward</span>.
            </h1>
            <p className={styles.heroText}>
              ESIKA INFOTECH is a product engineering company crafting web, mobile,
              cloud and data solutions — reliable, scalable and beautifully designed.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn btn--primary">
                Start a Project
              </Link>
              <Link href="/portfolio" className="btn btn--ghost">
                View Our Work
              </Link>
            </div>
            <div className={styles.heroTrust}>
              <div>
                <strong>10+</strong>
                <span>Years building</span>
              </div>
              <div className={styles.divider} />
              <div>
                <strong>120+</strong>
                <span>Projects shipped</span>
              </div>
              <div className={styles.divider} />
              <div>
                <strong>45+</strong>
                <span>Global clients</span>
              </div>
            </div>
          </div>

          <div className={styles.heroArt} aria-hidden="true">
            <div className={styles.orbCard}>
              <div className={styles.codeDots}>
                <span /> <span /> <span />
              </div>
              <pre className={styles.code}>
{`export function deploy() {
  const app = build(ideas);
  return ship(app, {
    scale: "cloud",
    quality: "high",
  });
}`}
              </pre>
            </div>
            <div className={`${styles.floatChip} ${styles.chip1}`}>☁ Cloud-native</div>
            <div className={`${styles.floatChip} ${styles.chip2}`}>✦ AI-ready</div>
            <div className={`${styles.floatChip} ${styles.chip3}`}>◆ 99.9% uptime</div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.stats}>
        <div className={`container ${styles.statsGrid}`}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">What we do</span>
            <h2>End-to-end software services</h2>
            <p>
              From the first line of code to production scale, we cover the full
              lifecycle of building great digital products.
            </p>
          </div>
          <div className="grid grid-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <article className={`card ${styles.serviceCard}`}>
                  <div className={styles.serviceIcon}>{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                  <Link href="/services" className={styles.cardLink}>
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section section--alt">
        <div className="container">
          <div className={styles.whyGrid}>
            <div>
              <span className="eyebrow">Why ESIKA</span>
              <h2 className={styles.whyTitle}>
                A partner that owns outcomes, not just tasks
              </h2>
              <p className={styles.whyText}>
                We combine senior engineering, thoughtful design and a bias for
                shipping. You get a dedicated team that understands your domain and
                sweats the details that make products succeed.
              </p>
              <Link href="/about" className="btn btn--blue">
                More about us
              </Link>
            </div>
            <div className="grid grid-2">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 60}>
                  <div className={`card ${styles.valueCard}`}>
                    <div className={styles.valueBar} />
                    <h3>{v.title}</h3>
                    <p>{v.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">How we work</span>
            <h2>A proven delivery process</h2>
            <p>Transparent, iterative and built to reduce risk at every step.</p>
          </div>
          <div className="grid grid-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 70}>
                <div className={styles.stepCard}>
                  <span className={styles.stepNum}>{p.step}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="section section--navy">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Our toolbox</span>
            <h2>Technologies we love</h2>
            <p style={{ color: "#a9c0da" }}>
              We choose the right tool for the job — modern, proven and production-ready.
            </p>
          </div>
          <div className={styles.stackWrap}>
            {techStack.map((t) => (
              <span key={t} className={styles.stackChip}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="section">
        <div className="container">
          <div className={styles.portfolioHead}>
            <div>
              <span className="eyebrow">Selected work</span>
              <h2>Products we're proud of</h2>
            </div>
            <Link href="/portfolio" className="btn btn--ghost">
              View all projects
            </Link>
          </div>
          <div className="grid grid-3">
            {portfolio.slice(0, 3).map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <article className={`card ${styles.workCard}`}>
                  <div className={styles.workCover}>
                    <span className={styles.workTag}>{p.tag}</span>
                  </div>
                  <div className={styles.workBody}>
                    <span className={styles.workCat}>{p.category}</span>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Client love</span>
            <h2>What partners say</h2>
          </div>
          <div className="grid grid-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 70}>
                <figure className={`card ${styles.quoteCard}`}>
                  <div className={styles.quoteMark}>“</div>
                  <blockquote>{t.quote}</blockquote>
                  <figcaption>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
