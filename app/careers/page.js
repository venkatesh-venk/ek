import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { jobs, perks, company } from "@/lib/content";
import styles from "./careers.module.css";

export const metadata = {
  title: "Careers",
  description:
    "Join ESIKA INFOTECH. Explore open engineering, design and data roles in Bengaluru and build meaningful software with a senior team.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build your best work with us"
        subtitle="We're a team that cares about craft, growth and each other. Come solve interesting problems with modern technology."
        crumbs={["Home", "Careers"]}
      />

      {/* PERKS */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Life at ESIKA</span>
            <h2>Why you'll love it here</h2>
            <p>We invest in our people because great software comes from great teams.</p>
          </div>
          <div className="grid grid-3">
            {perks.map((p, i) => (
              <Reveal key={p} delay={i * 50}>
                <div className={`card ${styles.perk}`}>
                  <span className={styles.perkIcon}>★</span>
                  <span>{p}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Open roles</span>
            <h2>We're hiring</h2>
            <p>Don't see the perfect fit? Write to us anyway — we love meeting talented people.</p>
          </div>
          <div className={styles.jobs}>
            {jobs.map((j, i) => (
              <Reveal key={j.title} delay={i * 40}>
                <div className={`card ${styles.job}`}>
                  <div className={styles.jobMain}>
                    <span className={styles.jobDept}>{j.dept}</span>
                    <h3>{j.title}</h3>
                    <div className={styles.jobMeta}>
                      <span>◷ {j.type}</span>
                      <span>◉ {j.location}</span>
                    </div>
                  </div>
                  <a
                    href={`mailto:${company.email}?subject=Application: ${encodeURIComponent(
                      j.title
                    )}`}
                    className="btn btn--ghost"
                  >
                    Apply
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Don't see your role?"
        text="Send your resume to info@esika.in and tell us how you'd like to contribute."
        primary={{ href: "mailto:info@esika.in", label: "Send your resume" }}
        secondary={{ href: "/about", label: "Learn about us" }}
      />
    </>
  );
}
