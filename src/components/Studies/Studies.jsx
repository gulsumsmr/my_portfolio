import React, { useEffect, useRef } from "react";
import "./Studies.css";
import { useTranslation } from "react-i18next";

const Studies = () => {
  const cardsRef = useRef([]);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || "0s";
          entry.target.style.animation = `fadeUp 0.6s ease forwards ${delay}`;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const tags = [
    ["Next.js", "C#", "PostgreSQL"],
    ["Next.js", "PostgreSQL", "Python"],
    ["React.jsx", "Material UI", "C#", "Oracle Database"],
    ["Python", "HOG", "Co-HOG"],
    ["Tailwind CSS", "Firebase Authentication", "JavaScript (ES6+)"]
  ];

  const studiesData = t("studies.items", { returnObjects: true }).map((item, i) => ({
    ...item,
    type: t("studies.project"),
    tags: tags[i]
  }));

  return (
    <section className="studies-section" id="studies">
      <div className="studies-container">
        <div className="studies-header">
          <h2 className="studies-title">{t("studies.title")}</h2>
          <div className="studies-divider"></div>
          <p className="studies-description">{t("studies.description")}</p>
        </div>

        <div className="studies-grid">
          {studiesData.map((item, index) => (
            <div
              key={index}
              className="studies-card"
              ref={el => cardsRef.current[index] = el}
              data-delay={`${index * 0.15}s`}
            >
              <div className="card-content">
                <div className="card-header">
                  <span className="card-type">{item.type}</span>
                  <h3 className="card-title">{item.title}</h3>
                </div>
                <p className="card-desc">{item.desc}</p>
                <div className="card-tags">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      <span className="tag-bg"></span>{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="studies-cta">
          <a href="https://github.com/gulsumsmr" target="_blank" rel="noopener noreferrer" className="btn-primary">
            <span className="btn-text">{t("studies.visitGithub")}</span>
            <svg className="btn-icon" viewBox="0 0 24 24">
              <path d="M14 3h7v7h-2V6.41l-9.29 9.29-1.42-1.42L17.59 5H14V3zM5 5h5v2H5v12h12v-5h2v7H3V5h2z" fill="white"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Studies;