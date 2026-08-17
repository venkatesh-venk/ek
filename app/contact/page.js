import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { company } from "@/lib/content";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact",
  description:
    "Contact ESIKA INFOTECH for banking and aviation IT consulting. Bengaluru office — info@esika.in, 080 6897 0818.",
};

const cards = [
  {
    icon: "◉",
    title: "Visit us",
    lines: [company.address.line1, company.address.line2, company.address.city],
  },
  {
    icon: "✉",
    title: "Email us",
    lines: [company.email],
    href: `mailto:${company.email}`,
  },
  {
    icon: "☎",
    title: "Call us",
    lines: [company.phone],
    href: `tel:${company.phoneHref}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's discuss your IT transformation"
        subtitle="Whether you're modernizing core banking or integrating airline systems, our consultants are ready to help."
        crumbs={["Home", "Contact"]}
        stats={[
          { value: "< 24h", label: "Typical response time" },
          { value: "Bengaluru", label: "HQ office" },
          { value: "Mon–Fri", label: "9:30 AM – 6:30 PM IST" },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            {/* LEFT: info */}
            <aside className={styles.info}>
              {cards.map((c) => (
                <div key={c.title} className={`card ${styles.infoCard}`}>
                  <div className={styles.infoIcon}>{c.icon}</div>
                  <div>
                    <h3>{c.title}</h3>
                    {c.lines.map((l) =>
                      c.href ? (
                        <a key={l} href={c.href} className={styles.infoLink}>
                          {l}
                        </a>
                      ) : (
                        <p key={l}>{l}</p>
                      )
                    )}
                  </div>
                </div>
              ))}

              <div className={`card ${styles.hours}`}>
                <h3>Business hours</h3>
                <p>Monday – Friday: 9:30 AM – 6:30 PM IST</p>
                <p>Saturday – Sunday: Closed</p>
              </div>
            </aside>

            {/* RIGHT: form */}
            <div className={`card ${styles.formCard}`}>
              <h2>Send us a message</h2>
              <p className={styles.formIntro}>
                Fill in the form and we'll get back to you shortly.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="section--tight" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.mapWrap}>
            <iframe
              title="ESIKA INFOTECH location — Koramangala, Bengaluru"
              src="https://www.google.com/maps?q=Koramangala%2080%20Feet%20Road%20Bengaluru&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.map}
            />
          </div>
        </div>
      </section>
    </>
  );
}
