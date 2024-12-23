import React from "react";
import "../styles/components/ContactForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function ContactForm() {
  return (
    <div className="contact-form">
      <h1>Заполните форму и получите консультацию</h1>
      <div className="mane">
        <h2 className="title">Получите консультацию</h2>
        <p>Оставьте свои данные, и мы свяжемся с вами в течение 15 минут</p>
        <form>
          <input
            className="form-in"
            type="text"
            placeholder="Ваше имя"
            required
          />
          <input
            className="form-in"
            type="tel"
            placeholder="Ваш телефон"
            required
          />
          <select className="form-in" name="problem-type" required>
            <option className="option" value="physical-legal">
              Физическое / юридическое лицо
            </option>
            <option className="option" value="physical">
              Физическое лицо
            </option>
            <option className="option" value="legal">
              Юридическое лицо
            </option>
          </select>
          <button type="submit">Связаться</button>
        </form>
        <div className="contact-alternative">
          <div className="all">
            <a href="-">
              <FontAwesomeIcon className="icon" icon={faWhatsapp} />
            </a>
            <a href="-">
              <FontAwesomeIcon className="icon" icon={faPaperPlane} />
            </a>
          </div>
          <div className="call">
            <p className="text-call">Бесплатный звонок юристу</p>
            <button>
              Позвонить
              <FontAwesomeIcon className="icon-p" icon={faPhoneFlip} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
