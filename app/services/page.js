import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { services, process, industries, techStack } from "@/lib/content";
import styles from "./services.module.css";

export const metadata = {
  title: "Services",
  description:
    "ESIKA INFOTECH IT consulting services for banking and aviation — digital transformation, core banking, cloud, data, integration, and managed support.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="IT consulting for banking & aviation enterprises"
        subtitle="From strategy and architecture to delivery and managed operations — comprehensive services for regulated, mission-critical industries."
        crumbs={["Home", "Services"]}
        stats={[
          { value: String(services.length), label: "Service lines" },
          { value: String(techStack.length), label: "Platforms & technologies" },
          { value: "24/7", label: "Managed operations" },
        ]}
      />

      <section className="section--tight">
        <div className="container">
          <div className="grid grid-2">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={i * 60}>
                <div className={`card ${styles.indBanner}`}>
                  <span className={styles.indIcon}>{ind.icon}</span>
                  <div>
                    <h3>{ind.title}</h3>
                    <p>{ind.summary}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.list}>
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 50}>
                <article id={s.slug} className={`card ${styles.item}`}>
                  <div className={styles.itemIcon}>{s.icon}</div>
                  <div className={styles.itemBody}>
                    <h2>{s.title}</h2>
                    <p>{s.summary}</p>
                    <ul className={styles.points}>
                      {s.points.map((p) => (
                        <li key={p}>
                          <span className={styles.check}>✓</span> {p}
                        </li>
                      ))}
                    </ul>
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
            <span className="eyebrow">Engagement models</span>
            <h2>How we partner with you</h2>
            <p>Flexible engagement models designed for enterprise banking and aviation programs.</p>
          </div>
          <div className="grid grid-3">
            <div className={`card ${styles.model}`}>
              <h3>Advisory &amp; Assessment</h3>
              <p>IT strategy, architecture review, and transformation roadmap for banking and aviation CIOs.</p>
              <span className={styles.modelTag}>Best for planning phases</span>
            </div>
            <div className={`card ${styles.model} ${styles.modelFeatured}`}>
              <div className={styles.popular}>Most popular</div>
              <h3>End-to-End Delivery</h3>
              <p>Full program delivery — from design through implementation, testing, and go-live support.</p>
              <span className={styles.modelTag}>Best for modernization programs</span>
            </div>
            <div className={`card ${styles.model}`}>
              <h3>Managed Services</h3>
              <p>24/7 application support, SLA-driven operations, and continuous improvement for live systems.</p>
              <span className={styles.modelTag}>Best for post go-live</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Our process</span>
            <h2>From assessment to operations</h2>
          </div>
          <div className="grid grid-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 70}>
                <div className={styles.proc}>
                  <span className={styles.procNum}>{p.step}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Need a tailored consulting proposal?"
        text="Tell us about your banking or aviation IT challenge and we'll recommend the right approach."
        primary={{ href: "/contact", label: "Book a consultation" }}
        secondary={{ href: "/portfolio", label: "See case studies" }}
      />
    </>
  );
}
