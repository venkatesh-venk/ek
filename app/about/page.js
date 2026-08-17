import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { stats, values, industries, company } from "@/lib/content";
import styles from "./about.module.css";

export const metadata = {
  title: "About Us",
  description:
    "ESIKA INFOTECH is a Bengaluru-based IT consulting firm specializing in banking and aviation — core systems, digital transformation, and managed operations.",
};

const timeline = [
  { year: "2010", title: "Founded in Bengaluru", text: "Started as a specialist IT consulting team focused on banking systems integration." },
  { year: "2014", title: "Aviation practice launched", text: "Expanded into airline reservation systems, airport IT, and crew management platforms." },
  { year: "2018", title: "Cloud & data practice", text: "Added cloud migration, data platforms, and analytics for regulated industries." },
  { year: "2024", title: "40+ banking & airline clients", text: "Grew into a trusted enterprise partner across India and international markets." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ESIKA"
        title="IT consulting built for banking and aviation"
        subtitle="For over 15 years we've partnered with banks and airlines to modernize technology, reduce risk, and deliver mission-critical systems that perform."
        crumbs={["Home", "About"]}
        stats={[
          { value: "15+", label: "Years in business" },
          { value: "40+", label: "Banking & airline clients" },
          { value: "200+", label: "Engagements delivered" },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className={styles.split}>
            <div>
              <span className="eyebrow">Who we are</span>
              <h2 className={styles.h2}>
                Domain experts, not generalists
              </h2>
              <p className={styles.lead}>
                {company.short} is an enterprise IT consulting firm headquartered in
                Koramangala, Bengaluru. We specialize exclusively in banking and
                aviation — the regulated, mission-critical industries where downtime
                is not an option.
              </p>
              <p className={styles.body}>
                Our consultants bring deep domain knowledge of core banking platforms,
                payment systems, PSS integration, and enterprise architecture. We
                embed with your team to deliver outcomes, not just slide decks.
              </p>
              <div className={styles.introActions}>
                <Link href="/contact" className="btn btn--primary">Book a consultation</Link>
                <Link href="/careers" className="btn btn--ghost">Join the team</Link>
              </div>
            </div>
            <div className={styles.introArt}>
              <div className={styles.missionCard}>
                <h3>Our Mission</h3>
                <p>
                  To be the most trusted IT consulting partner for banks and airlines
                  — delivering secure, scalable technology that powers growth.
                </p>
              </div>
              <div className={styles.visionCard}>
                <h3>Our Vision</h3>
                <p>
                  To set the standard for domain-driven IT consulting in regulated
                  industries across India and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section--tight section--alt">
        <div className="container">
          <div className={styles.statStrip}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statBox}>
                <div className={styles.statVal}>{s.value}</div>
                <div className={styles.statLbl}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Industries</span>
            <h2>Where we focus</h2>
          </div>
          <div className="grid grid-2">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 60}>
                <div className={`card ${styles.indCard}`}>
                  <span className={styles.indIcon}>{ind.icon}</span>
                  <h3>{ind.title}</h3>
                  <p>{ind.summary}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">What drives us</span>
            <h2>Our core values</h2>
          </div>
          <div className="grid grid-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div className={`card ${styles.valueCard}`}>
                  <span className={styles.valueNum}>0{i + 1}</span>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Our journey</span>
            <h2>15 years of enterprise consulting</h2>
          </div>
          <div className={styles.timeline}>
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 70}>
                <div className={styles.tItem}>
                  <div className={styles.tYear}>{t.year}</div>
                  <div className={styles.tDot} />
                  <div className={`card ${styles.tCard}`}>
                    <h3>{t.title}</h3>
                    <p>{t.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's discuss your IT transformation goals"
        text="Whether you're modernizing core banking or integrating airline systems, our domain experts are ready to help."
        primary={{ href: "/contact", label: "Book a consultation" }}
        secondary={{ href: "/portfolio", label: "See case studies" }}
      />
    </>
  );
}
