import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import { useTranslation } from "react-i18next";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    const { current } = domRef;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section className="about-section" data-section-id="about-me" id="about">
      <div
        ref={domRef}
        className={`about-container ${isVisible ? "is-visible" : ""}`}
      >
        <h2 className="about-heading">{t("about.heading")}</h2>
        <hr className="about-divider" />
        <p className="about-description">{t("about.description")}</p>
        <ul className="about-traits">
          <li className="about-trait-item">
            <span className="dot-icon"></span>
            <span>{t("about.trait1")}</span>
          </li>
          <li className="about-trait-item">
            <span className="dot-icon"></span>
            <span>{t("about.trait2")}</span>
          </li>
          <li className="about-trait-item">
            <span className="dot-icon"></span>
            <span>{t("about.trait3")}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;