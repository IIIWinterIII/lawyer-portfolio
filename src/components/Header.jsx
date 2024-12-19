import React from "react";
import "../styles/components/Header.css";
import { Link } from "react-router-dom";
import routes from "../reutes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faWhatsapp,
  faVk,
} from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <header>
      {/* top */}
      <div className="header-top">
        <h1 className="header-logo">Logo</h1>

        <div className="section-btn">
          <section className="header-contact-box">
            <a href="-" className="header-contact-mail">
              123mail.gmail.com
            </a>
            <a href="-" className="header-contact-t">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a href="-" className="header-contact-w">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="-" className="header-contact-vk">
              <FontAwesomeIcon icon={faVk} />
            </a>
          </section>

          <button className="btn-consultation">
            Записаться на консультацию{" "}
          </button>
        </div>
      </div>
      {/* bottom */}
      <div className="header-bottom">
        <nav className="navigation">
          <ul>
            {routes.map(({ path, component: Component, name }, index) => (
              <li key={index}>
                <Link to={path} component={<Component />} className="link">
                  {name}
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
