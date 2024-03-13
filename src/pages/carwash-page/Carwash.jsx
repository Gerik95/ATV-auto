import React from "react";
import FirstScreen from "../../components/first-screen/FirstScreen";
import firstScreen from "../../assets/images/carwash.jpg";
import './Carwash.css';
import { telegram, instagram, whatsapp, vk, call } from "../../assets";
import logo from "../../logo.png";
import { isMobile } from 'react-device-detect';
import cn from "classnames";
import {Helmet} from "react-helmet";

const Carwash = () => {
    return (
        <div className={cn("", {
            mobile: isMobile
        })}>
            <Helmet>
                <title>ATV-Auto - Автомойка</title>
                <meta name="description"
                      content="Автомойка Санкт-Петербург Пулково Экспресс-мойка Полировка кузова и фар Тонировка"/>
            </Helmet>
            <FirstScreen itemScrollToggle={false} image={firstScreen} title='АВТОМОЙКА' logo={logo}/>
            <div className="contact_us">
                <div className="wrapper">
                    <div className="contact_grid_tires">
                        <div className="contact_grid_text">
                            <h2 className="tires-h2">Автомойка</h2>
                            <div className="section-item-left-header">
                                <p className='item-right-h'>Уважаемые клиенты!<br /> <span className='span-item-right'>Наши партнёры</span>, комплекс "Aqua Jet", предлагают весь спектр услуг по уходу за автомобилем:</p>
                                <ul className='item-right-list-tires'>
                                    <li>Экспресс-мойка </li>
                                    <li>Премиальные виды мойки </li>
                                    <li>Полировка кузова и фар </li>
                                    <li>Комплексная химчистка салона </li>
                                    <li>Защитные покрытия для ЛКП </li>
                                    <li>Нанопокрытия для салона автомобиля </li>
                                    <li>Оклейка кузова, стёкол и фар защитными пленками</li>
                                    <li>Тонировка</li>
                                </ul>
                            </div>
                            <p className='item-right-h'>
                                Время работы комплекса - <span className='span-item-right'>КРУГЛОСУТОЧНО</span> <br />
                                Стоимость экспресс-мойки <span className='span-item-right'>от 200 рублей</span> <br />
                                Все работы выполняются с использованием современного оборудования и качественных расходных материалов.</p>
                        </div>
                        <div className="contact_grid_right">
                            {/* <div className="contact_grid_icon">
                                <a target="_blank" href="https://t.me/wZnxUo3yftNhNTNi"><img src={telegram} alt="telegram" /></a>
                                <a target="_blank" href="https://instagram.com/atv.auto.service?igshid=NmZiMzY2Mjc="><img src={instagram} alt="instagram" /></a>
                                <a target="_blank" href="https://api.whatsapp.com/send/?phone=79219007115&text&type=phone_number&app_absent=0"><img src={whatsapp} alt="whatsapp" /></a>
                                <a target="_blank" href="https://vk.com/atv.avto"><img src={vk} alt="vk" /></a>
                            </div> */}
                            <div className="contact_phone">
                                <img src={call} alt="call" />
                                <a href="tel:+79219003178">+7 (921) 900-31-78</a>
                            </div>
                            {/* <div className="contact_phone">
                                <img src={call} alt="call" />
                                <a href="tel:+79119247115">+7 (911) 924-71-15</a>
                            </div>
                            <div className="contact_phone">
                                <img src={call} alt="call" />
                                <a href="tel:+78129007115">+7 (812) 900-71-15</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <section className="contacts_grid">
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A68159483c204cfa4c34259d9f0f9d12361fc1ede347377879cef9f3c332119f6&amp;source=constructor" width="100%" height="500" frameborder="1"></iframe>
            </section>
        </div>
    )
}
export default Carwash;

