import React from "react";
import "../styles/pages/FAQ.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardQuestion } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons/faThumbsUp";
import Accordion from "../components/Accordion";
import ContactForm from "../components/ContactForm.jsx";
import { Link } from "react-router-dom";

function FAQ() {
  return (
    <section className="faq-component">
      <div className="breadcrumbs">
        <Link to="/" className="link">
          Главная
        </Link>
        <p className="slash">/</p>
        <Link to="/FAQ" className="link">
          Часто задаваемые вопросы
        </Link>
      </div>
      <div className="top-main">
        <h1 className="title">Часто задаваемые вопросы</h1>
        <p className="subtitle">
          Здесь вы найдёте ответы на популярные вопросы о наших услугах,
          процессах и условиях работы. Если не нашли нужной информации,
          свяжитесь с нами!
        </p>
        <button className="contact-btn">Связаться</button>
      </div>

      <div className="faq-section">
        <div className="instruction">
          <div className="box">
            <div className="top">
              <FontAwesomeIcon className="icon" icon={faClipboardQuestion} />
              <h1>1</h1>
            </div>
            <h2>Заполните форму</h2>
            <p>
              Укажите свои данные и опишите проблему. Я внимательно ознакомлюсь
              с вашим запросом.
            </p>
            <button>Заполнить</button>
          </div>
          <div className="box">
            <div className="top">
              <FontAwesomeIcon className="icon" icon={faComments} />
              <h1>2</h1>
            </div>
            <h2>Получите консультацию</h2>
            <p>
              Я свяжусь с вами и назначу удобное время для консультации, чтобы
              подробно обсудить вашу ситуацию.
            </p>
          </div>
          <div className="box">
            <div className="top">
              <FontAwesomeIcon className="icon" icon={faThumbsUp} />
              <h1>3</h1>
            </div>
            <h2>Проблема решена</h2>
            <p>
              95,4% довольных клиентов. Я сделаю всё, чтобы вы остались довольны
              результатом.
            </p>
          </div>
        </div>
      </div>

      {/* questions */}
      <div className="questions">
        <div className="top-q">
          <h1>Ответы на часто задаваемые вопросы</h1>
        </div>
        <div className="main">
          <Accordion />
        </div>
      </div>

      <div className="contact-bottom">
        <ContactForm />
      </div>
    </section>
  );
}

export default FAQ;
