"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
          <div
            className={styles.left}
            data-aos="fade-right" // AOS animation
          >
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
          <div
            className={styles.right}
            data-aos="fade-left" // AOS animation
          >
            <img
              alt="About Me"
              className={styles.img}
              src="/img/about-me.svg"
            />
            <LineDivider color={"success"} />
            <AnimatedText />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
