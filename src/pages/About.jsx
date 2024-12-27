import React from "react";
import useScrollObserver from "../hooks/useScrollObserver.js";

import "../styles/pages/About.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faTelegramPlane,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import miniLegalServices from "../components/miniLegalServices.js";

const About = () => {
  useScrollObserver();

  return (
    <section className="about-section">
      <div className="breadcrumbs">
        <Link to="/" className="link">
          Главная
        </Link>
        <p className="slash">/</p>
        <Link to="/about" className="link">
          Обо мне
        </Link>
      </div>
      <div className="left-and-right">
        <div className="left">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/lawyer.png`}
            alt="lawyer"
            className="img-lawyer"
          />
          <h1>Имя Фамилия Отчество</h1>
          <div className="left-contact">
            <p className="title">
              <strong>Контакты</strong>
            </p>
            <a href="-">
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <strong>+7 123 456-78-90</strong>
            </a>
            <a href="-">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <strong>example@email.com</strong>
            </a>
            <p className="location">
              <FontAwesomeIcon icon={faLocationDot} className="icon" />
              Воронеж
            </p>
            <div className="time-works">
              <FontAwesomeIcon icon={faClock} className="icon" />
              <div className="week">
                <p>
                  <strong>Пн</strong> — c 08:00 до 21:00
                </p>
                <p>
                  <strong>Вт</strong> — c 08:00 до 21:00
                </p>
                <p>
                  <strong>Ср</strong> — c 08:00 до 21:00
                </p>
                <p>
                  <strong>Чт</strong> — c 08:00 до 21:00
                </p>
                <p>
                  <strong>Пт</strong> — c 08:00 до 21:00
                </p>
                <p>
                  <strong>Сб</strong> — c 08:00 до 21:00
                </p>
                <p>
                  <strong>Вс</strong> — c 08:00 до 21:00
                </p>
              </div>
            </div>
          </div>
          <div className="messengers">
            <a href="-">
              <FontAwesomeIcon icon={faWhatsapp} className="icon" />
            </a>
            <a href="-">
              <FontAwesomeIcon icon={faTelegramPlane} className="icon" />
            </a>
          </div>
        </div>
        <div className="right">
          <p className="consultation-info">
            " Готов оперативно и эффективно помочь в решении вашей проблемы. Для
            записи на консультацию свяжитесь со мной по электронной почте,
            указанной в профиле.
          </p>
          <div className="specializations">
            <h2>Основные специализации</h2>
            <div className="box-contsienr">
              {miniLegalServices.map(({ icon, item }) => (
                <div className="box hidden scroll-element">
                  <FontAwesomeIcon icon={icon} className="icon" />
                  <p className="text-box">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
