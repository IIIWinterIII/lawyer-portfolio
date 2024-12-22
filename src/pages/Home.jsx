import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages/Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faBook,
  faCheck,
  faChevronRight,
  faHome,
  faLock,
  faMinus,
  faThumbsUp,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../components/ContactForm";

function Home() {
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
          <h1>
            Юридическая поддержка – залог успешного решения ваших вопросов и
            избежания неприятностей.
          </h1>
          <p>
            Правовые нормы постоянно обновляются, а судебная практика нередко
            бывает противоречивой. Без специального образования разобраться в
            этих нюансах сложно, поэтому помощь квалифицированного юриста
            становится необходимой при возникновении правовых вопросов.
          </p>
          <p>
            Наша компания – это команда опытных специалистов, готовых оказать
            вам поддержку в таких областях права, как гражданское, семейное,
            трудовое, наследственное и жилищное. Мы понимаем, что каждая
            ситуация уникальна, поэтому разрабатываем индивидуальный план
            действий, четко определяя, какие услуги вам понадобятся.
          </p>
          <p>
            Мы тщательно анализируем вашу ситуацию, предлагаем оптимальные
            решения и защищаем ваши права и интересы.
          </p>
          <section>
            <p>Обратившись к нам, вы получите:</p>
            <ul>
              <li>Компетентную юридическую консультацию.</li>
              <li>Подготовку и оформление правовых документов.</li>
              <li>Представление ваших интересов в суде и других органах.</li>
              <li>Контроль за выполнением судебных решений.</li>
            </ul>
          </section>
          <p>
            Не оставляйте свои вопросы без решения. Доверьтесь нам, и мы поможем
            вам эффективно справиться с любой правовой задачей.
          </p>
        </div>
        <div className="img-block">
          <img
            src="/assets/images/bearded-man-suit-posing-with-crossed-arms.jpg"
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
          <h1>Услуги для граждан</h1>
          <a href="-" className="a-more-ser">
            Все услуги для физ. лиц{" "}
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className="arrows-icon"
            />
          </a>
        </div>

        <div className="data-service-box">
          <div className="box">
            <div className="top-box">
              <h3>Семейные дела</h3>
              <FontAwesomeIcon icon={faUserFriends} />
            </div>
            <ul className="list">
              <li>
                <Link to="/services" className="link">
                  <p>Взыскание флиментов</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Изменение размера алиментов</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Расторжение брака</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Раздел имущества и долгов</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Лишение и ограничение родительских прав</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Определение места жительства ребенка</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Определение порядка общения</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Установка отцовства</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="box">
            <div className="top-box">
              <h3>Вопросы недвижимости</h3>
              <FontAwesomeIcon icon={faHome} />
            </div>
            <ul className="list">
              <li>
                <Link to="/services" className="link">
                  <p>Полное сопровождение сделок недвижимым имуществом</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Проверка юридической чистоты объекта</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Приватизация квартир</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Согласование перепланировок</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Получение разрешений на строительство</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="box">
            <div className="top-box">
              <h3>Автомобильный юрист</h3>
              <FontAwesomeIcon icon={faBook} />
            </div>
            <ul className="list">
              <li>
                <Link to="/services" className="link">
                  <p>Споры со страховыми компаниями (ОСАГО, КАСКО)</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Адвокат по ДТП</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Возврат водительского удостоверения</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="box">
            <div className="top-box">
              <h3>Трудовые споры</h3>
              <FontAwesomeIcon icon={faBook} />
            </div>
            <ul className="list">
              <li>
                <Link to="/services" className="link">
                  <p>Защита в трудовой инспекции</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Взыскание зарплаты и компенсаций</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Обжалование дисциплинарных взысканий</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Подготовка работодателя к проверкам</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Помощь в оформлении кадровой документации</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Взыскание заработной платы</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Восстановление на работе</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="box">
            <div className="top-box">
              <h3>Взыскание заработной платы</h3>
              <FontAwesomeIcon icon={faBook} />
            </div>
            <ul className="list">
              <li>
                <Link to="/services" className="link">
                  <p>Оспаривание права собственности на недвижимость</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Раздел жилья </p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Выселение арендаторов</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Защита прав арендаторов</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Узаконивание перепланировки в жилых помещениях</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="box">
            <div className="top-box">
              <h3>Наследственные вопросы</h3>
              <FontAwesomeIcon icon={faBook} />
            </div>
            <ul className="list">
              <li>
                <Link to="/services" className="link">
                  <p>Оформление наследства через нотариуса </p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Оформление наследства через суд</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Консультирование по вопросам наследства</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="block-title-sevices">
          <p className="p-icon">
            <FontAwesomeIcon icon={faMinus} className="minus-icon" /> Наши
            услуги
          </p>
          <h1>Услуги для бизнеса</h1>
          <a href="-" className="a-more-ser">
            Все услуги для бизнеса{" "}
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className="arrows-icon"
            />
          </a>
        </div>
        <div className="data-service-box">
          <div className="box">
            <div className="top-box">
              <h3>Регистрация, внесение изменений, ликвидация компаний и ИП</h3>
              <FontAwesomeIcon icon={faBook} />
            </div>
            <ul className="list">
              <li>
                <Link to="/services" className="link">
                  <p>Регистрация ООО, АО, ИП, НКО</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Ликвидация ООО и ИП</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Смена директора</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Смена юридического адреса</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Помощь в подборе не массового юридического адреса</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="box">
            <div className="top-box">
              <h3>Регистрация, внесение изменений, ликвидация компаний и ИП</h3>
              <FontAwesomeIcon icon={faBook} />
            </div>
            <ul className="list">
              <li>
                <Link to="/services" className="link">
                  <p>Регистрация ООО, АО, ИП, НКО</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Ликвидация ООО и ИП</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Смена директора</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Смена юридического адреса</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Помощь в подборе не массового юридического адреса</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="box">
            <div className="top-box">
              <h3>Регистрация, внесение изменений, ликвидация компаний и ИП</h3>
              <FontAwesomeIcon icon={faBook} />
            </div>
            <ul className="list">
              <li>
                <Link to="/services" className="link">
                  <p>Регистрация ООО, АО, ИП, НКО</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Ликвидация ООО и ИП</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Смена директора</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Смена юридического адреса</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Помощь в подборе не массового юридического адреса</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
            </ul>
          </div>
          <div className="box">
            <div className="top-box">
              <h3>Регистрация, внесение изменений, ликвидация компаний и ИП</h3>
              <FontAwesomeIcon icon={faBook} />
            </div>
            <ul className="list">
              <li>
                <Link to="/services" className="link">
                  <p>Регистрация ООО, АО, ИП, НКО</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Ликвидация ООО и ИП</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Смена директора</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Смена юридического адреса</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  <p>Помощь в подборе не массового юридического адреса</p>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="icon-right"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* contact-form */}
      <ContactForm />
    </section>
  );
}

export default Home;
