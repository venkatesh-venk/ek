import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { services, process } from "@/lib/content";
import styles from "./services.module.css";

export const metadata = {
  title: "Services",
  description:
    "Explore ESIKA INFOTECH's software services: web & mobile apps, cloud & DevOps, data & AI, product design, enterprise software and managed support.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Software services, end to end"
        subtitle="Whether you're launching a new product or modernizing a legacy platform, we bring the right team and technology to deliver."
        crumbs={["Home", "Services"]}
      />

      {/* SERVICE DETAIL CARDS */}
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

      {/* ENGAGEMENT MODELS */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">How to work with us</span>
            <h2>Flexible engagement models</h2>
            <p>Pick the collaboration style that fits your stage and needs.</p>
          </div>
          <div className="grid grid-3">
            <div className={`card ${styles.model}`}>
              <h3>Dedicated Team</h3>
              <p>A cross-functional squad that works as an extension of your organization for the long haul.</p>
              <span className={styles.modelTag}>Best for scaling products</span>
            </div>
            <div className={`card ${styles.model} ${styles.modelFeatured}`}>
              <div className={styles.popular}>Most popular</div>
              <h3>Fixed-Scope Project</h3>
              <p>Clear scope, timeline and budget for a well-defined build — delivered end to end.</p>
              <span className={styles.modelTag}>Best for MVPs & launches</span>
            </div>
            <div className={`card ${styles.model}`}>
              <h3>Staff Augmentation</h3>
              <p>Plug senior engineers and designers into your existing team exactly where you need them.</p>
              <span className={styles.modelTag}>Best for filling gaps</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Our process</span>
            <h2>From idea to impact</h2>
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
        title="Not sure which service you need?"
        text="Share your challenge and we'll recommend the right approach — honestly."
        primary={{ href: "/contact", label: "Get expert advice" }}
        secondary={{ href: "/portfolio", label: "See results" }}
      />
    </>
  );
}
