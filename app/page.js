import Link from "next/link";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import FeatureSection from "@/components/FeatureSection";
import HeroCarousel from "@/components/HeroCarousel";
import {
  stats,
  heroSlides,
  industries,
  platformFeatures,
  useCases,
  compliance,
  techStack,
  portfolio,
  testimonials,
  clientLogos,
} from "@/lib/content";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <HeroCarousel slides={heroSlides} />

      {/* ── STATS ── */}
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

      {/* ── CLIENT STRIP ── */}
      <section className={styles.clientStrip}>
        <div className="container">
          <p className={styles.clientLabel}>Trusted by leading organizations</p>
          <div className={styles.clientLogos}>
            {clientLogos.map((name) => (
              <span key={name} className={styles.clientLogo}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Industries we serve</span>
            <h2>Deep expertise in regulated, mission-critical sectors</h2>
            <p>
              We don&apos;t do generic IT consulting. Our teams specialize in the
              systems, regulations, and operational demands of banking and aviation.
            </p>
          </div>
          <div className="grid grid-2">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 80}>
                <article className={`card ${styles.industryCard}`}>
                  <div className={styles.industryIcon}>{ind.icon}</div>
                  <h3>{ind.title}</h3>
                  <p>{ind.summary}</p>
                  <ul className={styles.industryList}>
                    {ind.highlights.map((h) => (
                      <li key={h}><span>✓</span> {h}</li>
                    ))}
                  </ul>
                  <Link href="/services" className={styles.cardLink}>
                    Explore services →
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM FEATURES (Navori-style alternating sections) ── */}
      {platformFeatures.map((f, i) => (
        <FeatureSection
          key={f.id}
          eyebrow={f.eyebrow}
          title={f.title}
          description={f.description}
          bullets={f.bullets}
          cta={f.cta}
          visual={f.visual}
          reverse={f.reverse}
          alt={i % 2 === 1}
        />
      ))}

      {/* ── USE CASES GRID ── */}
      <section className="section section--navy">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Solutions</span>
            <h2>What we help banks and airlines achieve</h2>
            <p style={{ color: "#a9c0da" }}>
              From core system modernization to 24/7 managed operations — comprehensive IT consulting across the enterprise lifecycle.
            </p>
          </div>
          <div className={styles.useCaseGrid}>
            {useCases.map((uc, i) => (
              <Reveal key={uc.title} delay={i * 40}>
                <div className={styles.useCase}>
                  <span className={styles.useCaseTag}>{uc.industry}</span>
                  <h3>{uc.title}</h3>
                  <p>{uc.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className={styles.useCaseCta}>
            <Link href="/services" className="btn btn--light">
              Explore all services
            </Link>
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE / ENTERPRISE TRUST ── */}
      <section className="section">
        <div className="container">
          <div className={styles.complianceGrid}>
            <div>
              <span className="eyebrow">Enterprise-ready</span>
              <h2 className={styles.complianceTitle}>
                Built for compliance, security, and scale
              </h2>
              <p className={styles.complianceDesc}>
                Banking and aviation demand the highest standards. Our practices align
                with international frameworks so your systems are audit-ready from day one.
              </p>
              <Link href="/contact" className="btn btn--blue">
                Discuss your requirements
              </Link>
            </div>
            <div className={styles.complianceCards}>
              {compliance.map((c, i) => (
                <Reveal key={c.label} delay={i * 50}>
                  <div className={`card ${styles.compCard}`}>
                    <strong>{c.label}</strong>
                    <span>{c.desc}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Technology</span>
            <h2>Enterprise-grade technology stack</h2>
            <p>Proven platforms and tools used across our banking and aviation engagements.</p>
          </div>
          <div className={styles.stackWrap}>
            {techStack.map((t) => (
              <span key={t} className={styles.stackChip}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES PREVIEW ── */}
      <section className="section">
        <div className="container">
          <div className={styles.portfolioHead}>
            <div>
              <span className="eyebrow">Case studies</span>
              <h2>Proven results for banks and airlines</h2>
            </div>
            <Link href="/portfolio" className="btn btn--ghost">
              View all case studies
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

      {/* ── TESTIMONIALS ── */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Client voices</span>
            <h2>What our partners say</h2>
          </div>
          <div className="grid grid-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 70}>
                <figure className={`card ${styles.quoteCard}`}>
                  <div className={styles.quoteMark}>&ldquo;</div>
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

      <CtaBand
        title="Ready to modernize your banking or aviation IT?"
        text="Book a free consultation with our domain experts. We'll assess your current landscape and recommend a practical path forward."
        primary={{ href: "/contact", label: "Book a Consultation" }}
        secondary={{ href: "/services", label: "Explore Services" }}
      />
    </>
  );
}
