import React, { useState, useEffect } from "react";
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

import fetchDataFromSheet from "../GoogleSheetsAPI.js";
 
function Home() {
  const [data, setData] = useState(null);

  useScrollObserver();

  useEffect(() => {
    fetchDataFromSheet("Лист1!C2:C17").then((values) => {
      if (values) {
        const headers = values[0]; // Заголовки
        const subheaders = values[1]; // Подзаголовки
        const stats = values.slice(2, 5); // Статистика
        const image = values[5]; // Изображение
        const sectionHeader = values[6]; // Заголовок блока
        const infoText1 = values[7]; // Первый текст
        const infoText2 = values[8]; // Второй текст
        const infoText3 = values[9]; // Третий текст
        const listDescription = values[10]; // Описание списка
        const listOffer = values[11]; // Список предложений
        const infoText4 = values[12]; // Четвёртый текст
        const image2 = values[13]; // Четвёртый текст
        const servicesSectionHeading = values[14]; // Заголовок секции услуг
        const textButtomServices = values[15]; // Заголовок секции услуг
        setData({
          headers,
          subheaders,
          stats,
          image,
          sectionHeader,
          infoText1,
          infoText2,
          infoText3,
          infoText4,
          listDescription,
          listOffer,
          image2,
          servicesSectionHeading,
          textButtomServices,
        });
      }
    });
  }, []);
  if (!data) {
    return <div>Загрузка данных...</div>;
  }

  return (
    <section className="home-container">
      <div className="hero">
        <div className="hero-content">
          <div className="hero-text-seсtion">
            <h1 className="hero-title">{data.headers}</h1>
            <ul>
              {data.subheaders[0].split("\n").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="stats">
            <p className="stats-item">
              <FontAwesomeIcon icon={faCheck} className="stats-icon" />
              {data.stats[0]}
            </p>
            <p className="stats-item">
              <FontAwesomeIcon icon={faLock} className="stats-icon" />
              {data.stats[1]}
            </p>
            <p className="stats-item">
              <FontAwesomeIcon icon={faThumbsUp} className="stats-icon" />
              {data.stats[2]}
            </p>
          </div>
        </div>

        <div className="img-block">
          <img
            src={`${process.env.PUBLIC_URL}${data.image}`}
            alt="lawyer"
            className="hero-img"
          />
        </div>
      </div>

      {/* text recomendation */}
      <div className="info-with-image">
        <div className="text-block">
          <h1 className="hidden scroll-element">{data.sectionHeader}</h1>
          <p className="hidden scroll-element">{data.infoText1}</p>
          <p className="hidden scroll-element">{data.infoText2}</p>
          <p className="hidden scroll-element">{data.infoText3}</p>
          <section className="hidden scroll-element">
            <p>{data.listDescription}</p>
            <ul>
              {data.listOffer[0].split("\n").map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
          <p className="hidden scroll-element">{data.infoText4}</p>
        </div>
        <div className="img-block">
          <img
            src={`${process.env.PUBLIC_URL}${data.image2}`}
            alt="men-in-black"
            className="men-img"
          />
        </div>
      </div>

      {/* servies */}
      <div className="services-block">
        <div className="block-title-sevices">
          <p className="p-icon">
            <FontAwesomeIcon icon={faMinus} className="minus-icon" />{" "}
            {data.servicesSectionHeading[0]}
          </p>
          <Link to="/services" className="a-more-ser">
            <span>
              {data.textButtomServices[0]}{" "}
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
