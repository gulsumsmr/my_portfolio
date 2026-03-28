import React from "react";
import "./Contact.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const contactInfo = [
    { label: t("contact.email"), value: "glsmsumer44@gmail.com", href: "mailto:glsmsumer44@gmail.com" },
    { label: t("contact.phone"), value: "0544 586 5571", href: "tel:+905445865571" }
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/gulsumsumer" },
    { name: "GitHub", url: "https://github.com/gulsumsmr" }
  ];

  return (
    <section className="contact-section" data-section-id="contact-portfolio" id="contact">
      <div className="contact-container">
        <div className="contact-card">
          <h2 className="contact-heading">{t("contact.heading")}</h2>
          <p className="contact-description">{t("contact.description")}</p>

          <div className="contact-info-wrapper">
            {contactInfo.map((item, index) => (
              <div className="contact-item" key={index}>
                <span className="contact-label">{item.label}</span>
                <a href={item.href} className="contact-link">
                  {item.value}
                </a>
              </div>
            ))}
          </div>

          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;