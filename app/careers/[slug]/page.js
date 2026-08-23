import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { jobs, company } from "@/lib/content";
import styles from "./job.module.css";

export function generateStaticParams() {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return {};
  return {
    title: job.title,
    description: job.summary,
  };
}

export default async function JobPage({ params }) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) notFound();

  const mailHref = `mailto:${company.email}?subject=${encodeURIComponent(
    `Application: ${job.title}`
  )}&body=${encodeURIComponent(
    `Hi ESIKA INFOTECH team,\n\nI'd like to apply for the ${job.title} role. Please find my resume attached.\n\nThanks,\n`
  )}`;

  return (
    <>
      <PageHero
        eyebrow={job.dept}
        title={job.title}
        subtitle={job.summary}
        crumbs={["Home", "Careers", job.title]}
        stats={[
          { value: job.type, label: "Employment type" },
          { value: job.location, label: "Location" },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            <div className={styles.content}>
              <div className={styles.block}>
                <h2>Responsibilities</h2>
                <ul className={styles.list}>
                  {job.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.block}>
                <h2>What we&apos;re looking for</h2>
                <ul className={styles.list}>
                  {job.requirements.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
              {job.niceToHave?.length > 0 && (
                <div className={styles.block}>
                  <h2>Nice to have</h2>
                  <ul className={styles.list}>
                    {job.niceToHave.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <aside className={`card ${styles.applyCard}`}>
              <h3>Apply for this role</h3>
              <p>
                Send your resume to{" "}
                <a href={`mailto:${company.email}`}>{company.email}</a> and
                we&apos;ll get back to you.
              </p>
              <a href={mailHref} className="btn btn--primary">
                Send your resume
              </a>
              <Link href="/careers" className={styles.backLink}>
                ← Back to all roles
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <CtaBand
        title="Don't see the right fit?"
        text={`Write to us at ${company.email} — we're always looking for banking and aviation IT talent.`}
        primary={{ href: `mailto:${company.email}`, label: "Email us" }}
        secondary={{ href: "/careers", label: "See all roles" }}
      />
    </>
  );
}
