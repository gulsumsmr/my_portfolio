import React, { useEffect, useRef } from "react";
import "./EducationJourney.css";
import { useTranslation } from "react-i18next";

const EducationJourney = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll(".edu-item");

    const positionNodes = () => {
      items.forEach((item) => {
        const node = item.querySelector(".edu-node");
        if (!node) return;

        const timeline = timelineRef.current;
        const timelineRect = timeline.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();

        const lineX = timelineRect.left + timelineRect.width / 2;
        const nodeLeft = lineX - itemRect.left - 12;

        node.style.left = `${nodeLeft}px`;
      });
    };

    positionNodes();
    window.addEventListener("resize", positionNodes);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", positionNodes);
    };
  }, []);

  const educationData = t("education.items", { returnObjects: true });

  return (
    <section
      className="edu-section"
      ref={sectionRef}
      data-section-id="education-journey"
      id="education"
    >
      <div className="edu-container">
        <div className="edu-header">
          <h2 className="edu-title">{t("education.title")}</h2>
          <p className="edu-desc">{t("education.description")}</p>
        </div>

        <div className="edu-timeline" ref={timelineRef}>
          {educationData.map((item, index) => (
            <div
              key={index}
              className="edu-item"
              style={{ "--delay": `${index * 0.15}s` }}
            >
              <div className="edu-node"></div>

              <div className="edu-content">
                <div className="edu-content-bg"></div>
                <div className="edu-content-border"></div>

                <span className="edu-meta">{item.meta}</span>
                <h3 className="edu-role">{item.role}</h3>
                <h4 className="edu-org">{item.org}</h4>
                {item.details && <p className="edu-details">{item.details}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationJourney;