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
            <Logo variant="light" />
            <p className={styles.tagline}>
              Engineering reliable software, cloud and data platforms that help
              ambitious businesses move faster.
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
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/careers">Careers</Link>
          </div>

          <div className={styles.col}>
            <h4>Services</h4>
            <Link href="/services">Web &amp; Mobile Apps</Link>
            <Link href="/services">Cloud &amp; DevOps</Link>
            <Link href="/services">Data &amp; AI</Link>
            <Link href="/services">UI/UX Design</Link>
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
