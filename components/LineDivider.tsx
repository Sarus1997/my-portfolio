"use client";

import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import styles from "../styles/css/LineDivider.module.css";

interface LineDividerProps {
  color: "success" | "warning" | "danger";
}

const LineDivider: React.FC<LineDividerProps> = ({ color }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <hr
      className={`${styles.line} ${styles[`line-${color}`]}`}
      data-aos="fade-right"
      data-aos-duration="1000"
    />
  );
};

export default LineDivider;
