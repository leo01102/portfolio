/* src/layouts/Footer/Footer.tsx */

import "./Footer.scss";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__branding">
            <p className="footer__name">Rearte Leonardo</p>
          </div>

          <div className="footer__links">
            <a
              href="mailto:leonardorearte0@gmail.com"
              className="footer__contact-link"
            >
              <span className="footer__contact-icon"><Mail /></span>
              <span className="footer__contact-text">
                leonardorearte0@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
