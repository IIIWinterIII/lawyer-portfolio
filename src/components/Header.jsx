import React from "react";
import "../styles/components/Header.scss";
import { Link } from "react-router-dom";
import routes from "../reutes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faWhatsapp,
  faVk,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header>
      {/* top */}
      <div className="header-top">
        <h1 className="header-logo">Logo</h1>

        <div className="section-btn">
          {/* text-box */}
          <section className="header-contact-box">
            <a href="tel:+71234567890" className="header-contact-mail">
              <FontAwesomeIcon className="tel-icon" icon={faPhone} />
              <span className="email-text">+71234567890</span>
            </a>
            <a href="mailto:123mail.gmail.com" className="header-contact-mail">
              <FontAwesomeIcon className="mail-icon" icon={faEnvelope} />
              <span className="email-text">123mail.gmail.com</span>
            </a>
            <a href="-" className="header-contact-t">
              <FontAwesomeIcon icon={faTelegram} className="icon" />
            </a>
            <a href="-" className="header-contact-w">
              <FontAwesomeIcon icon={faWhatsapp} className="icon" />
            </a>
            <a href="-" className="header-contact-vk">
              <FontAwesomeIcon icon={faVk} className="icon" />
            </a>
          </section>
          {/* btn */}
          <button className="btn-consultation">
            <span>Записаться на консультацию</span>
          </button>
        </div>
      </div>
      {/* bottom */}
      <div className="header-bottom">
        <nav className="navigation">
          <ul>
            {routes.map(({ path, name }, index) => (
              <li key={index}>
                <Link to={path} className="link">
                  <span>{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
