import React from "react";
import "../styles/pages/Contact.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTelegram,
  faVk,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import ContactForm from "../components/ContactForm.jsx";

function Contact() {
  return (
    <section className="contact-container">
      <div className="breadcrumbs">
        <Link to="/" className="link">
          Главная
        </Link>
        <p className="slash">/</p>
        <Link to="/contact" className="link">
          Контакты
        </Link>
      </div>

      <div className="body-contact">
        <div className="top-contact">
          <h1>Контакты</h1>
          <p className="location">
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            Воронеж
          </p>
          <a href="-" className="top-con">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <strong>+7 123 456-78-90</strong>
          </a>
          <a href="-" className="top-con">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <strong>example@email.com</strong>
          </a>
          <div className="box">
            <p className="box-title">WhatsApp</p>
            <a href="-">
              <FontAwesomeIcon icon={faWhatsapp} className="icon w" />
            </a>
          </div>
          <div className="box">
            <p className="box-title">Telegram</p>
            <a href="-">
              <FontAwesomeIcon icon={faTelegram} className="icon t" />
            </a>
          </div>
          <div className="box">
            <p className="box-title">Vk</p>
            <a href="-">
              <FontAwesomeIcon icon={faVk} className="icon v" />
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
