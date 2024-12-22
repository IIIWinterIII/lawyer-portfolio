import React from 'react';
import "../styles/pages/FAQ.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
// import Accordion from '../components/Accordion';

function FAQ() {
    return (
        <section className='faq-component'>
            <div className='top-main'>
                <h1 className='title'>Часто задаваемые вопросы</h1>
                <p className='subtitle'>
                Здесь вы найдёте ответы на популярные вопросы о наших услугах, процессах и условиях работы. Если не нашли нужной информации, свяжитесь с нами!
                </p>
                <button className='contact-btn'>Связаться</button>
            </div>

            <div className='faq-section'>
                <div className='instruction'>
                    <div className='box'>
                        <div className='top'>
                            <FontAwesomeIcon icon={faQuestion} />
                            <h1>1</h1>
                        </div>
                        <h2>Заполните форму</h2>
                        <p>
                        Укажите свои данные и опишите проблему. Я внимательно ознакомлюсь с вашим запросом.
                        </p>
                        <button>Заполнить</button>
                    </div>
                    <div className='box'>
                        <div className='top'>
                            <FontAwesomeIcon icon={faQuestion} />
                            <h1>2</h1>
                        </div>
                        <h2>Получите консультацию</h2>
                        <p>
                        Я свяжусь с вами и назначу удобное время для консультации, чтобы подробно обсудить вашу ситуацию.
                        </p>
                        
                    </div>
                    <div className='box'>
                        <div className='top'>
                            <FontAwesomeIcon icon={faQuestion} />
                            <h1>3</h1>
                        </div>
                        <h2>Проблема решена</h2>
                        <p>
                        95,4% довольных клиентов. Я сделаю всё, чтобы вы остались довольны результатом.
                        </p>
                        
                    </div>
                </div>
            </div>




        </section>
    );
}

export default FAQ