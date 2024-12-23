import React, { useEffect } from "react";
import "../styles/components/ServicesBox.scss";
import legalServices from "./legalServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ServicesBox() {
  const servicesForCitizens = legalServices["Услуги для граждан"];
  const servicesForBusiness = legalServices["Услуги для бизнеса"];

  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-element");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.classList.remove("hidden");
            observer.unobserve(entry.target);
          } else {
            entry.target.classList.add("hidden");
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="container-box">
      <div className="text-top-cont-box hidden scroll-element">
        <h2 className="hidden scroll-element">Услуги для граждан</h2>
        <div className="box-body hidden scroll-element">
          {Object.entries(servicesForCitizens).map((item, index) => (
            <div key={index} className="box hidden scroll-element">
              <h3 className="hidden scroll-element">
                <FontAwesomeIcon icon={item[1].icon} className="icon" />
                {item[0]}
              </h3>
              <ul>
                {item[1].services.map((services, subindex) => (
                  <li className="hidden scroll-element" key={subindex}>{services}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="text-top-cont-box hidden scroll-element">
        <h2 className="hidden scroll-element">Услуги для бизнеса</h2>
        <div className="box-body hidden scroll-element">
          {Object.entries(servicesForBusiness).map((item, index) => (
            <div key={index} className="box hidden scroll-element">
              <h3 className="hidden scroll-element">
                <FontAwesomeIcon icon={item[1].icon} className="icon" />
                {item[0]}
              </h3>
              <ul>
                {item[1].services.map((services, subindex) => (
                  <li className="hidden scroll-element" key={subindex}>{services}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesBox;
