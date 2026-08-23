import Link from "next/link";
import Logo from "./Logo";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <span className={styles.logoChip}>
              <Logo />
            </span>
            <p className={styles.tagline}>
              IT consulting for banking and aviation — core systems, digital
              channels, cloud, data, and managed operations.
            </p>
            <div className={styles.social}>
              <a href="https://www.esika.in" aria-label="Website" className={styles.socialLink}>in</a>
              <a href="mailto:info@esika.in" aria-label="Email" className={styles.socialLink}>@</a>
              <a href="tel:+918068970818" aria-label="Phone" className={styles.socialLink}>☎</a>
            </div>
          </div>

          <div className={styles.col}>
            <h4>Company</h4>
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Case Studies</Link>
            <Link href="/careers">Careers</Link>
          </div>

          <div className={styles.col}>
            <h4>Industries</h4>
            <Link href="/services">Banking &amp; Financial Services</Link>
            <Link href="/services">Airlines &amp; Aviation</Link>
            <Link href="/services">Core Banking Systems</Link>
            <Link href="/services">Managed Services</Link>
          </div>

          <div className={styles.col}>
            <h4>Reach Us</h4>
            <p className={styles.addr}>
              3rd Floor, Esares Building,<br />
              80 Feet Road, Koramangala,<br />
              Bengaluru – 560034, India
            </p>
            <a href="mailto:info@esika.in">info@esika.in</a>
            <a href="tel:+918068970818">080 6897 0818</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {year} ESIKA INFOTECH PVT LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
