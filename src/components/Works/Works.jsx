import React, { useEffect, useRef } from "react";
import "./Works.css";
import { useTranslation } from "react-i18next";

const Works = () => {
  const sectionRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const items = sectionRef.current.querySelectorAll(".int-item");

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

    return () => observer.disconnect();
  }, []);

  const internshipData = t("works.items", { returnObjects: true });

  return (
    <section
      className="int-section"
      ref={sectionRef}
      data-section-id="internship-timeline"
      id="works"
    >
      <div className="int-container">
        <div className="int-header">
          <h2 className="int-title">{t("works.title")}</h2>
          <p className="int-desc">{t("works.description")}</p>
        </div>

        <div className="int-timeline-wrapper">
          <div className="int-timeline-line"></div>

          <div className="int-timeline">
            {internshipData.map((item, index) => (
              <div
                key={index}
                className="int-item"
                style={{ "--delay": `${index * 0.15}s` }}
              >
                <div className="int-arrow">
                  <div className="int-arrow-line"></div>
                  <div className="int-arrow-head"></div>
                </div>

                <div className="int-content">
                  <div className="int-content-bg"></div>
                  <div className="int-content-border"></div>

                  <span className="int-meta">{item.meta}</span>
                  <h3 className="int-role">{item.role}</h3>
                  <h4 className="int-org">{item.org}</h4>
                  {item.details && (
                    <p className="int-details">{item.details}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;