import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { portfolio } from "@/lib/content";
import styles from "./portfolio.module.css";

export const metadata = {
  title: "Case Studies",
  description:
    "ESIKA INFOTECH case studies — core banking modernization, airline PSS integration, payment hubs, and cloud migration for banking and aviation clients.",
};

const highlights = [
  { value: "40M", label: "Accounts migrated (banking)" },
  { value: "2M+", label: "Daily payment transactions" },
  { value: "35%", label: "Cloud cost reduction delivered" },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Proven results for banks and airlines"
        subtitle="Real engagements across core banking, aviation systems, payments, cloud, and managed operations."
        crumbs={["Home", "Case Studies"]}
        stats={highlights}
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {portfolio.map((p, i) => (
              <Reveal key={p.title} delay={i * 50}>
                <article className={`card ${styles.card}`}>
                  <div className={styles.cover}>
                    <span className={styles.tag}>{p.tag}</span>
                    <span className={styles.initials}>
                      {p.title.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                    </span>
                  </div>
                  <div className={styles.body}>
                    <span className={styles.cat}>{p.category}</span>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Industries</span>
            <h2>Sectors we specialize in</h2>
            <p>Every case study reflects deep domain knowledge in regulated, mission-critical environments.</p>
          </div>
          <div className={styles.industries}>
            {["Retail Banking", "Corporate Banking", "Payments", "Full-Service Airlines", "Regional Carriers", "Airport IT", "Wealth Management", "Aviation Ops"].map(
              (ind) => (
                <span key={ind} className={styles.industry}>
                  {ind}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      <CtaBand
        title="Want results like these for your organization?"
        text="Let's discuss your banking or aviation IT goals and build a roadmap together."
        primary={{ href: "/contact", label: "Book a consultation" }}
        secondary={{ href: "/services", label: "Our services" }}
      />
    </>
  );
}
