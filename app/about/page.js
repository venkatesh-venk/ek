import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { stats, values, company } from "@/lib/content";
import styles from "./about.module.css";

export const metadata = {
  title: "About Us",
  description:
    "Learn about ESIKA INFOTECH — a Bengaluru-based software engineering company delivering web, cloud and data solutions with senior talent and a partnership mindset.",
};

const timeline = [
  { year: "2014", title: "Founded in Bengaluru", text: "Started as a small team of engineers with a passion for building quality software." },
  { year: "2017", title: "Cloud practice launched", text: "Expanded into cloud migration and DevOps as clients scaled their platforms." },
  { year: "2020", title: "Data & AI division", text: "Added data engineering and applied ML to help clients make smarter decisions." },
  { year: "2024", title: "45+ clients worldwide", text: "Grew into a trusted product engineering partner across industries and geographies." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ESIKA"
        title="A software company built on craft and trust"
        subtitle="We're a team of engineers, designers and problem-solvers helping businesses turn ideas into dependable digital products."
        crumbs={["Home", "About"]}
      />

      {/* INTRO SPLIT */}
      <section className="section">
        <div className="container">
          <div className={styles.split}>
            <div>
              <span className="eyebrow">Who we are</span>
              <h2 className={styles.h2}>
                Engineering partners for the products that matter to you
              </h2>
              <p className={styles.lead}>
                {company.short} is a product engineering company headquartered in
                Koramangala, Bengaluru. For over a decade we've partnered with
                startups and enterprises to design, build and scale software that
                people rely on every day.
              </p>
              <p className={styles.body}>
                We believe great software comes from small, senior teams who care
                deeply about the outcome. No hand-offs to junior benches, no
                black-box process — just focused engineers working transparently
                alongside you.
              </p>
              <div className={styles.introActions}>
                <Link href="/contact" className="btn btn--primary">Work with us</Link>
                <Link href="/careers" className="btn btn--ghost">Join the team</Link>
              </div>
            </div>
            <div className={styles.introArt}>
              <div className={styles.missionCard}>
                <h3>Our Mission</h3>
                <p>
                  To engineer software that is reliable, scalable and genuinely
                  useful — empowering our clients to grow with confidence.
                </p>
              </div>
              <div className={styles.visionCard}>
                <h3>Our Vision</h3>
                <p>
                  To be the most trusted engineering partner for ambitious teams
                  building the future of their industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
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

      {/* VALUES */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">What drives us</span>
            <h2>Our core values</h2>
            <p>The principles that shape how we build and how we partner.</p>
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

      {/* TIMELINE */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Our journey</span>
            <h2>A decade of building</h2>
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
        title="Want to know if we're a good fit?"
        text="Let's have a quick chat about your goals — no obligation, just a useful conversation."
        primary={{ href: "/contact", label: "Talk to us" }}
        secondary={{ href: "/portfolio", label: "See our work" }}
      />
    </>
  );
}
