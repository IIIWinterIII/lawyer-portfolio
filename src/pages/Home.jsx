import React from "react";
import useScrollObserver from "../hooks/useScrollObserver.js";
import { Link } from "react-router-dom";
import "../styles/pages/Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faCheck,
  faLock,
  faMinus,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../components/ContactForm";
import ServicesBox from "../components/ServicesBox";

function Home() {
  useScrollObserver();

  return (
    <section className="home-container">
      <div className="hero">
        <div className="hero-content">
          <div className="hero-text-seсtion">
            <h1 className="hero-title">
              Юридическая помощь для граждан и бизнеса
            </h1>
            <ul>
              <li>Сэкономим ваше время и средства.</li>
              <li>Обеспечим получение всего, что вам положено по закону.</li>
              <li>Защитим ваши интересы в любых обстоятельствах.</li>
            </ul>
          </div>

          <div className="stats">
            <p className="stats-item">
              <FontAwesomeIcon icon={faCheck} className="stats-icon" />
              100% качества
            </p>
            <p className="stats-item">
              <FontAwesomeIcon icon={faLock} className="stats-icon" />
              Защита клиентов
            </p>
            <p className="stats-item">
              <FontAwesomeIcon icon={faThumbsUp} className="stats-icon" />
              97% довольных клиентов
            </p>
          </div>
        </div>

        <div className="img-block">
          <img
            src="./assets/images/lawyer.png"
            alt="lawyer"
            className="hero-img"
          />
        </div>
      </div>

      {/* text recomendation */}
      <div className="info-with-image">
        <div className="text-block">
          <h1 className="hidden scroll-element">
            Юридическая поддержка – залог успешного решения ваших вопросов и
            избежания неприятностей.
          </h1>
          <p className="hidden scroll-element">
            Правовые нормы постоянно обновляются, а судебная практика нередко
            бывает противоречивой. Без специального образования разобраться в
            этих нюансах сложно, поэтому помощь квалифицированного юриста
            становится необходимой при возникновении правовых вопросов.
          </p>
          <p className="hidden scroll-element">
            Наша компания – это команда опытных специалистов, готовых оказать
            вам поддержку в таких областях права, как гражданское, семейное,
            трудовое, наследственное и жилищное. Мы понимаем, что каждая
            ситуация уникальна, поэтому разрабатываем индивидуальный план
            действий, четко определяя, какие услуги вам понадобятся.
          </p>
          <p className="hidden scroll-element">
            Мы тщательно анализируем вашу ситуацию, предлагаем оптимальные
            решения и защищаем ваши права и интересы.
          </p>
          <section className="hidden scroll-element">
            <p>Обратившись к нам, вы получите:</p>
            <ul>
              <li>Компетентную юридическую консультацию.</li>
              <li>Подготовку и оформление правовых документов.</li>
              <li>Представление ваших интересов в суде и других органах.</li>
              <li>Контроль за выполнением судебных решений.</li>
            </ul>
          </section>
          <p className="hidden scroll-element">
            Не оставляйте свои вопросы без решения. Доверьтесь нам, и мы поможем
            вам эффективно справиться с любой правовой задачей.
          </p>
        </div>
        <div className="img-block">
          <img
            src="./assets/images/bearded-man-suit-posing-with-crossed-arms.jpg"
            alt="men-in-black"
            className="men-img"
          />
        </div>
      </div>

      {/* servies */}
      <div className="services-block">
        <div className="block-title-sevices">
          <p className="p-icon">
            <FontAwesomeIcon icon={faMinus} className="minus-icon" /> Наши
            услуги
          </p>
          <Link to="/services" className="a-more-ser">
            <span>
              Все услуги{" "}
              <FontAwesomeIcon
                icon={faAngleDoubleRight}
                className="arrows-icon"
              />
            </span>
          </Link>
        </div>
        <ServicesBox />
      </div>

      {/* contact-form */}
      <ContactForm />
    </section>
  );
}

export default Home;
