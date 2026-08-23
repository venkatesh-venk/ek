import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { jobs, perks, company } from "@/lib/content";
import styles from "./careers.module.css";

export const metadata = {
  title: "Careers",
  description:
    "Join ESIKA INFOTECH. Open roles in banking systems consulting, aviation IT, cloud architecture, integration, and managed services.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build mission-critical systems with us"
        subtitle="Join a team that consults for banks and airlines — working on core banking, aviation systems, and enterprise platforms that matter."
        crumbs={["Home", "Careers"]}
        stats={[
          { value: String(jobs.length), label: "Open roles" },
          { value: String(perks.length), label: "Employee perks" },
          { value: "Bengaluru", label: "HQ, hybrid-friendly" },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Life at ESIKA</span>
            <h2>Why join our team</h2>
            <p>Work on enterprise systems that power millions of transactions and thousands of flights.</p>
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

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Open roles</span>
            <h2>We&apos;re hiring</h2>
            <p>Don&apos;t see the perfect fit? Write to us — we&apos;re always looking for banking and aviation IT talent.</p>
          </div>
          <div className={styles.jobs}>
            {jobs.map((j, i) => (
              <Reveal key={j.title} delay={i * 40}>
                <div className={`card ${styles.job}`}>
                  <Link href={`/careers/${j.slug}`} className={styles.jobMain}>
                    <span className={styles.jobDept}>{j.dept}</span>
                    <h3>{j.title}</h3>
                    <div className={styles.jobMeta}>
                      <span>◷ {j.type}</span>
                      <span>◉ {j.location}</span>
                    </div>
                  </Link>
                  <Link href={`/careers/${j.slug}`} className="btn btn--ghost">
                    View role
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to make an impact?"
        text={`Send your resume to ${company.email} and tell us about your banking or aviation IT experience.`}
        primary={{ href: `mailto:${company.email}`, label: "Send your resume" }}
        secondary={{ href: "/about", label: "Learn about us" }}
      />
    </>
  );
}
