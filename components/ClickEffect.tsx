"use client";

import { useEffect } from "react";

import styles from "../styles/css/ClickEffect.module.css";

const ClickEffect = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const d = document.createElement("div");

      d.className = styles.clickEffect;
      d.style.top = `${e.clientY}px`;
      d.style.left = `${e.clientX}px`;
      document.body.appendChild(d);
      d.addEventListener("animationend", () => {
        d.parentElement?.removeChild(d);
      });
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
};

export default ClickEffect;
