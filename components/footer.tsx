import React from "react";
import Link from "next/link";

import styles from "../styles/css/Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footerCol}>
            <h4>Portfolio SR</h4>
            <p style={{ color: "#bbbbbb" }}>
              เว็บไซต์นี้จัดทำขึ้นเพื่อ
              รวบรวมประสบการณ์ทำงานและผลงานที่ได้สร้างสรรค์และออกแบบไว้
            </p>
          </div>
          <div className={styles.footerCol}>
            <h4>Get Help</h4>
            <ul>
              <li>
                <Link href="/questions-and-answers">Q&A</Link>
              </li>
              <li>
                <Link href="/policy">Policy</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>About Me</h4>
            <ul>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <Link href="/resume">Resume</Link>
              </li>
              <li>
                <Link href="/about">About Me</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Follow Us</h4>
            <div className={styles.socialLinks}>
              <Link
                className={`${styles.socialLink} ${styles.facebook}`}
                href="https://www.facebook.com/saharat.suwannapapond.7/"
              >
                <i className="fab fa-facebook-f" />
              </Link>
              <Link
                className={`${styles.socialLink} ${styles.twitter}`}
                href="https://x.com/suwannapapond"
              >
                <i className="fab fa-twitter" />
              </Link>
              <Link
                className={`${styles.socialLink} ${styles.instagram}`}
                href="https://www.instagram.com/sr_sarus/"
              >
                <i className="fab fa-instagram" />
              </Link>
              <Link
                className={`${styles.socialLink} ${styles.linkedin}`}
                href="https://www.linkedin.com/in/saharat-sarus/"
              >
                <i className="fab fa-linkedin-in" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
