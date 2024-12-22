import React, { useRef, useState } from 'react';
import "../styles/components/Accordion.scss"


const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRef = useRef([]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const getHeight = (index) => {
    return activeIndex === index
      ? contentRef.current[index]?.scrollHeight + 'px'
      : '0px';
  };

  const faqs = [
    { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
    { question: 'How does useState work?', answer: 'useState is a hook that allows you to add state to functional components.' },
    { question: 'What is an accordion?', answer: 'An accordion is a UI element that allows expanding and collapsing sections.' },
  ];

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <button onClick={() => toggleAccordion(index)}>
            {faq.question}
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
