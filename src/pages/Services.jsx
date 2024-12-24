import React from "react";
import "../styles/pages/Services.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-regular-svg-icons";
import {
  faFileSignature,
  faGavel,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import ServicesBox from "../components/ServicesBox.jsx";
import ContactForm from "../components/ContactForm";

function Services() {
  return (
    <section className="services-container">
      <div className="breadcrumbs">
        <Link to="/" className="link">
          Главная
        </Link>
        <p className="slash">/</p>
        <Link to="/services" className="link">
          Услуги
        </Link>
      </div>
      <div className="hero-serv">
        <div className="body-hero">
          <div className="text-hero">
            <h1>Услуги юриста</h1>
            <p>
              Предоставляю профессиональные юридические услуги для решения ваших
              правовых вопросов.
            </p>
          </div>
          <div className="contact-block">
            <p className="text-contact">
              Помогу решить любые правовые вопросы. Оставьте заявку для
              консультации.
            </p>
            <button className="btn-contact">
              <span>Оставить заявку</span>
            </button>
          </div>
        </div>
      </div>

      {/* Services list */}
      <div className="service-list">
        <ul>
          <li>
            <h2>
              <FontAwesomeIcon className="icon" icon={faComments} />
              Юридические консультации
            </h2>
            <p>
              Консультации по различным правовым вопросам. Помогу вам
              разобраться в юридических тонкостях и подскажу оптимальные пути
              решения.
            </p>
          </li>
          <li>
            <h2>
              <FontAwesomeIcon className="icon" icon={faFileSignature} />
              Составление договоров и документов
            </h2>
            <p>
              Готовлю и проверяю юридические документы, такие как договоры,
              заявления, и другие официальные бумаги.
            </p>
          </li>
          <li>
            <h2>
              <FontAwesomeIcon className="icon" icon={faGavel} />
              Представительство в суде
            </h2>
            <p>
              Представляю интересы клиентов в судах различной инстанции.
              Обеспечиваю высококачественную защиту.
            </p>
          </li>
          <li>
            <h2>
              <FontAwesomeIcon className="icon" icon={faShieldAlt} />
              Защита прав потребителей
            </h2>
            <p>
              Помогу вам отстоять свои права в случае нарушения условий
              договора, некачественного товара или услуги.
            </p>
          </li>
        </ul>
      </div>

      {/* more services */}

      <ServicesBox />

      <div className="contact-me-form">
        <ContactForm />
      </div>
    </section>
  );
}

export default Services;
