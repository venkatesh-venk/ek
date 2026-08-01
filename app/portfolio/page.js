import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { portfolio } from "@/lib/content";
import styles from "./portfolio.module.css";

export const metadata = {
  title: "Portfolio",
  description:
    "Selected projects delivered by ESIKA INFOTECH across retail, healthcare, fintech, logistics, edtech and agritech.",
};

const highlights = [
  { value: "22%", label: "Avg. cost reduction delivered" },
  { value: "3.2M", label: "Daily events processed" },
  { value: "99.9%", label: "Platform uptime maintained" },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Products that deliver real results"
        subtitle="A snapshot of the platforms and applications we've engineered for clients across industries."
        crumbs={["Home", "Portfolio"]}
      />

      {/* HIGHLIGHTS */}
      <section className="section--tight">
        <div className="container">
          <div className={styles.highlights}>
            {highlights.map((h) => (
              <div key={h.label} className={styles.hCard}>
                <div className={styles.hVal}>{h.value}</div>
                <div className={styles.hLbl}>{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="section" style={{ paddingTop: 24 }}>
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

      {/* INDUSTRIES */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Industries</span>
            <h2>Domains we know well</h2>
            <p>Deep experience means we speak your language from day one.</p>
          </div>
          <div className={styles.industries}>
            {["Retail", "Healthcare", "Fintech", "Logistics", "EdTech", "AgriTech", "SaaS", "Manufacturing"].map(
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
        title="Have a project in mind?"
        text="Let's turn your idea into the next success story on this page."
        primary={{ href: "/contact", label: "Start your project" }}
        secondary={{ href: "/services", label: "Our services" }}
      />
    </>
  );
}
