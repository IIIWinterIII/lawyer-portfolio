import React, { useState, useEffect } from "react";

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

import fetchDataFromSheet from "../GoogleSheetsAPI.js";

const iconMap = [faComments, faFileSignature, faGavel, faShieldAlt];

function Services() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchDataFromSheet("Лист2!C2:C14").then((values) => {
      if (values) {
        const mainHeader = values[0]; // Заголовок главной страницы
        const heroSubheader = values[1]; // Подзаголовок героевого блока
        const contactDescription = values[2]; // Описание в блоке контактов
        const contactButtonText = values[3]; // Текст кнопки в блоке контактов
        const serviceHeadings = values[4]; // Подзаголовки списка услуг
        const serviceDescriptions = values.slice(5, 9); // Описания услуг
        

        setData({
          mainHeader,
          heroSubheader,
          contactDescription,
          contactButtonText,
          serviceHeadings,
          serviceDescriptions,
        });
      }
    });
  }, []);

  // console.log(data.serviceIcons.map(item => item));

  if (!data) {
    return <div>Загрузка данных...</div>;
  }
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
            <h1>{data.mainHeader}</h1>
            <p>{data.heroSubheader}</p>
          </div>
          <div className="contact-block">
            <p className="text-contact">{data.contactDescription}</p>
            <button className="btn-contact">
              <span>{data.contactButtonText}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Services list */}
      <div className="service-list">
        <ul>
          {data.serviceHeadings[0].split("\n").map((item, index) => (
            <li key={index}>
              <h2>
                <FontAwesomeIcon className="icon" icon={iconMap[index]} />
                {item}
              </h2>
              <p>{data.serviceDescriptions[index]}</p>
            </li>
          ))}
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
