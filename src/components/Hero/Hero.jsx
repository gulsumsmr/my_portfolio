import React from "react";
import "./Hero.css";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section data-section-id="hero-portfolio" className="hero-section" id="anasayfa">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title animate-fade-up delay-1">Gülsüm Sümer</h1>
          <p className="hero-description animate-fade-up delay-2">
            {t("hero.description")}
          </p>
          <div className="hero-actions animate-fade-up delay-3">
            <a
              href="/Gulsum_Sumer_CV.pdf"
              download="Gulsum_Sumer_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ozgecmis"
            >
              {t("hero.downloadCV")}
            </a>
            <a
              href="https://www.linkedin.com/in/gulsumsumer"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              {t("hero.linkedinProfile")}
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper animate-fade-up delay-4">
          <div className="hero-image-decoration"></div>
          <img
            src="profil.jpg"
            alt="Gulsum Sumer - Web Gelistirici Profili"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;