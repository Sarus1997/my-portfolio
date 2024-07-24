"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { FaFileAlt, FaGithub } from "react-icons/fa";

import styles from "../../styles/css/Hero.module.css";

import LineDivider from "@/components/LineDivider";
import AnimatedText from "@/components/content/AnimatedText";

function Hero() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 100,
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.left} data-aos="fade-right">
            <h1 className={styles.title}>
              <span className={styles["title-part1"]}>Welcome To My </span>
              <br />
              <span className={styles["title-part2"]}>Personal Website!</span>
            </h1>
            <p className={styles.description}>
              I enjoy building software that makes people lives easier by
              writing elegant, performant, and maintainable frontend code. I
              also enjoy petting every cat I see.
            </p>
          </div>
          <div data-aos="fade-left">
            <div className={styles.right}>
              <img
                alt="About Me"
                className={styles.img}
                src="/img/about-me.svg"
              />
              <LineDivider color={"success"} />
              <AnimatedText />
            </div>
            <div className={styles.buttonContainer}>
              <Link
                className={`${buttonStyles({
                  variant: "bordered",
                  color: "primary",
                })} ${styles.button} ${styles.resumeButton}`}
                href="/about"
              >
                <FaFileAlt className={styles.icon} />
                Resume
              </Link>
              <Link
                className={`${buttonStyles({
                  variant: "bordered",
                  color: "secondary",
                })} ${styles.button} ${styles.githubButton}`}
                href="/projects"
              >
                <FaGithub className={styles.icon} />
                Github
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
