import React, { useRef, useState } from "react";
import "../styles/components/Accordion.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRef = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const getHeight = (index) => {
    return activeIndex === index
      ? contentRef.current[index]?.scrollHeight + "px"
      : "0px";
  };

  const faqs = [
    {
      question: "Как получить консультацию юриста онлайн?",
      answer:
        "Для получения консультации вы можете оставить заявку на нашем сайте. Заполните форму, и наш юрист перезвонит вам в удобное время для консультации.",
    },
  ];

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <button onClick={() => toggleAccordion(index)}>
            {faq.question}
            <FontAwesomeIcon
              className={`icon ${activeIndex === index ? "rotate" : ""}`}
              icon={faChevronDown}
            />
          </button>
          <div
            ref={(el) => (contentRef.current[index] = el)}
            className="answer"
            style={{
              height: getHeight(index),
            }}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
