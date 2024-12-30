import React from "react";
import "../styles/components/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import {
  faTelegram,
  faVk,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="left-logo-message">
        <div className="header-logo">
          <FontAwesomeIcon icon={faScaleBalanced} className="icon-logo" />
          <p className="name-lawyer-in-logo">Hussein</p>
        </div>
        <div className="box-section">
          <a href="-">
            <FontAwesomeIcon icon={faWhatsapp} className="icon w" />
          </a>
          <a href="-">
            <FontAwesomeIcon icon={faTelegram} className="icon t" />
          </a>
          <a href="-">
            <FontAwesomeIcon icon={faVk} className="icon v" />
          </a>
        </div>
      </div>

      <div className="right-contact-footer">
        <div className="nomber-end-works-day">
          <a href="-" className="left-con">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <strong>+7 123 456-78-90</strong>
          </a>
          <div className="works-day">
            <p>
              <strong>Пн-Пт:</strong> 9:00 – 18:00
            </p>
            <p>
              <strong>Сб-Вс:</strong> 9:00 – 18:00
            </p>
          </div>
        </div>
        <a href="-" className="rigth-con">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <strong>example@email.com</strong>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
