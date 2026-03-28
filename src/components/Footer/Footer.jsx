import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const navLinks = [
    { name: t("footer.home"), href: "#anasayfa" },
    { name: t("footer.about"), href: "#about" },
    { name: t("footer.expertise"), href: "#tech-stack" },
    { name: t("footer.studies"), href: "#studies" },
    { name: t("footer.educationCommunity"), href: "#education" },
    { name: t("footer.works"), href: "#works" },
    { name: t("footer.contact"), href: "#contact" }
  ];

  const connectLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/gulsumsumer", external: true },
    { name: "GitHub", url: "https://github.com/gulsumsmr", external: true },
    { name: "glsmsumer44@gmail.com", url: "mailto:glsmsumer44@gmail.com", external: false },
    { name: "0544 586 5571", url: "tel:05445865571", external: false }
  ];

  return (
    <footer className="portfolio-footer" data-section-id="footer" id="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>Gulsum Sumer</h2>
            <p>{t("footer.tagline")}</p>
          </div>

          <div className="footer-links-wrapper">
            <div className="footer-nav-group">
              <h3 className="footer-nav-title">{t("footer.navigation")}</h3>
              <div className="footer-nav-links">
                {navLinks.map((link, index) => (
                  <a key={index} href={link.href}>{link.name}</a>
                ))}
              </div>
            </div>

            <div className="footer-nav-group">
              <h3 className="footer-nav-title">Connect</h3>
              <div className="footer-nav-links">
                {connectLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            {t("footer.backToTop")} &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;