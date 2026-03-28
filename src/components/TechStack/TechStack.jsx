import React, { useEffect, useRef } from "react";
import "./TechStack.css";
import { useTranslation } from "react-i18next";

const TechStack = () => {
  const cardsRef = useRef([]);
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || "0";
          entry.target.style.animation = `fadeUpTech 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards ${delay}ms`;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const techData = [
    {
      title: t("techStack.frontend"),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Material UI", "Bootstrap"]
    },
    {
      title: t("techStack.backendDb"),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      ),
      skills: ["ASP.NET MVC", "C#", "PostgreSQL"]
    },
    {
      title: t("techStack.tools"),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
      skills: ["Git", "GitHub", "Trello", "Visual Studio", "VS Code"]
    }
  ];

  return (
    <section className="tech-stack-section" id="tech-stack">
      <div className="tech-stack-container">
        <div className="tech-stack-header">
          <h2 className="tech-stack-title">{t("techStack.title")}</h2>
          <p className="tech-stack-description">{t("techStack.description")}</p>
        </div>

        <div className="tech-stack-grid">
          {techData.map((item, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="tech-card"
              data-delay={index * 150}
            >
              <div className="tech-card-header">
                <div className="tech-card-icon-wrapper">
                  {item.icon}
                </div>
                <h3 className="tech-card-title">{item.title}</h3>
              </div>
              <ul className="tech-list">
                {item.skills.map((skill, idx) => (
                  <li key={idx} className="tech-list-item">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;