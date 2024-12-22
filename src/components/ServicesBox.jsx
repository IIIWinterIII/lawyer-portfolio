import React from "react";
import "../styles/components/ServicesBox.scss";
import legalServices from "./legalServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ServicesBox() {
  const servicesForCitizens = legalServices["Услуги для граждан"];
  const servicesForBusiness = legalServices["Услуги для бизнеса"];

  return (
    <div className="container-box">
      <div className="text-top-cont-box">
        <h2>Услуги для граждан</h2>
        <div className="box-body">
          {Object.entries(servicesForCitizens).map((item, index) => (
            <div key={index} className="box">
              <h3>
                <FontAwesomeIcon icon={item[1].icon} className="icon" />
                {item[0]}
              </h3>
              <ul>
                {item[1].services.map((services, subindex) => (
                  <li key={subindex}>{services}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="text-top-cont-box">
        <h2>Услуги для бизнеса</h2>
        <div className="box-body">
          {Object.entries(servicesForBusiness).map((item, index) => (
            <div key={index} className="box">
              <h3>
                <FontAwesomeIcon icon={item[1].icon} className="icon" />
                {item[0]}
              </h3>
              <ul>
                {item[1].services.map((services, subindex) => (
                  <li key={subindex}>{services}</li>
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
