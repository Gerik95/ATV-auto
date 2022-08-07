import React from 'react';
import mastercard from '../../assets/images/footer-img/mastercard.svg';
import visa from '../../assets/images/footer-img/visa.svg';
import mir from '../../assets/images/footer-img/mir.svg';
import halva from '../../assets/images/footer-img/halva.svg';
import './Footer.css';
import { isMobile } from 'react-device-detect';
import cn from "classnames";

const Footer = () => {
    return (
        <footer className={cn("footer", {
            mobile: isMobile
        })}>

            <div className="wrapper">
                <div className="footer_grid">
                    <div className="contacts_wrap">
                        <div className="contacts_item contacts">
                            <h3>Контакты СТО</h3>
                            <p className='contacts_item_text'>
                                Санкт-Петербург, <br /> ул. Пилотов, д.18 к.5
                                <br /><a href="tel:+78123307115">+7 (812) 330-71-15</a>
                                <br /><a href="tel:+79119247115">+7 (911) 924-71-15</a>
                                <br /><a href="tel:+78129007115">+7 (812) 900-71-15</a>
                                <br />10:00-21:00
                            </p>
                        </div>
                        <div className="contacts_item tires">
                            <h3>Контакты Шиномонтаж</h3>
                            <p className='contacts_item_text'>
                                Санкт-Петербург, <br />ул. Пилотов, д.31
                                <br /><a href="tel:+79219003178">+7 (921) 900-31-78</a>
                                <br /> 09:00-22:00
                            </p>
                        </div>
                        <div className="contacts_item carwash">
                            <h3>Контакты Автомойка</h3>
                            <p className='contacts_item_text'>
                                Санкт-Петербург, <br />ул. Пилотов, д.31
                                <br /><a href="tel:+79219003178">+7 (921) 900-31-78</a>
                                <br /> Круглосуточно
                            </p>
                        </div>
                        <div className="prices">
                            Все цены, указанные на сайте, приведены как справочная информация, требуют уточнения и не являются публичной офертой, определяемой положениями
                            ст. 437 Гражданского кодекса Российской Федерации, и могут быть изменены в любое время без предупреждения. <br />
                            2016—2022 © ООО «Лидер»
                        </div>
                    </div>


                    <div className="payment">
                        У нас возможна оплата по картам:
                        <div className="payment_images">
                            <img className='payment_image' src={mastercard} alt="mastercard" />
                            <img className='payment_image' src={visa} alt="visa" />
                            <img className='payment_image' src={mir} alt="mir" />
                            <img className='payment_image' src={halva} alt="halva" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;