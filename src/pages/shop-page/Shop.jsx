import React from "react";
import FirstScreen from "../../components/first-screen/FirstScreen";
import firstScreen from "../../assets/images/shop.JPG";
import './Shop.css';
import marketlLogo from "../../assets/images/atv-market-logo.png";
import {call} from "../../assets";
import {isMobile} from 'react-device-detect';
import cn from "classnames";
import {Helmet} from "react-helmet";
import Form from "../../components/Form/Form";


const Shop = () => {
    return (
        <div className={cn("", {
            mobile: isMobile
        })}>
            <Helmet>
                <title>ATV-Auto - Магазин </title>
                <meta name="description"
                      content="Магазин автозапчастей Санкт-Петербург Пулково Магазин автозапчастей для легковых автомобилей по минимальным ценам с возможностью адресной доставки"/>
            </Helmet>
            <FirstScreen itemScrollToggle={false} image={firstScreen} title='МАГАЗИН' logo={marketlLogo}/>
            <div className="shop">
                <div className="wrapper">
                    <div className="shop_company block_wrap">
                        <h2>АВТОЗАПЧАСТИ</h2>
                        <p className="cooperation_info_text">Дорогие друзья, мы рады приветствовать Вас в магазине
                            автозапчастей <span className='span-item-right'>«ATV-Aвто "Пулково"»</span> <br/>
                            Наша компания занимается ремонтом автомобилей и утилитарной техники с 2015 года. В связи с
                            большим колличеством запросов от клиентов на покупку запасных частей
                            для последующего ремонта своих автомобилей самостоятельно, <br/>в <span
                                className='span-item-right'>«ATV-Aвто "Пулково"»</span> было принято решение открыть
                            ОТДЕЛ ПРОДАЖИ ЗАПАСНЫХ ЧАСТЕЙ
                            <br/>
                        </p>
                        <p className="cooperation_info_text">
                            Наш опыт работы позволяет с уверенностью заявлять, что мы сможем удовлетворить практически
                            любые запросы клиентов,
                            начиная от действительно профессионального подбора деталей, которые нужны именно Вам, до
                            установки деталей на Ваш автомобиль.
                            <br/><br/>Мы ценим людей которые не хотят переплачивать и постоянно следят за ценами и
                            качеством своих покупок. Дешево купить запчасти не сложно, но есть вероятность нарваться на
                            подделку,
                            а вот найти действительно лучшую цену на качественный товар с полным пакетом документов
                            порой оказывается задачей не из легких, в решении которой мы Вам обязательно поможем!
                        </p>


                        <p className="cooperation_info_text"> <span className='span-item-right'>Заполните форму ниже</span> и получите предложения по
                            интересующим Вас деталям ⠀
                            <div className="contact_phone">
                                <img src={call} alt="call"/>
                                <a href="tel:+78123307115">+7 (812) 330-71-15</a>
                            </div></p>
                    </div>
                    <div className="shop_best block_wrap">
                        <div className="shop_best_text">
                            <h4><span className='span-item-right'>Наши основные направления:</span></h4>
                            <p>
                                - Магазин автозапчастей для легковых автомобилей по минимальным ценам, с возможностью
                                адресной доставки.<br/><br/>
                                - Магазин автозапчастей для легкого коммерческого транспорта по минимальным ценам, с
                                возможностью адресной доставки.<br/><br/>
                                - Комплексное снабжение запчастями корпоративных клиентов с легковым и легким
                                коммерческим транспортом.<br/><br/>
                                - Возможность заключения контрактов с Государственными Бюджетными
                                Учреждениями.<br/><br/>

                            </p>
                            <h4><span className='span-item-right'>Наши преимущества:</span></h4>
                            <p>
                                - Мы продаем настоящие автозапчасти по минимальным ценам.<br/><br/>
                                - Возможность оплаты любым способом<br/><br/>
                                - Возврат или обмен автозапчастей без проблем в течении семи дней по любой причине (в
                                товарном виде и без следов установки)<br/><br/>
                                - Прямая гарантия от производителя через наш Магазин<br/><br/>
                                - Мы работаем под одним юридическим лицом, потому что у нас все честно и мы ничего не
                                скрываем<br/><br/>
                                - Онлайн заявка для подбора деталей<br/><br/>
                                - Мы не продаем контрафакт и прочие подделки - нам Важна наша репутация на
                                рынке.<br/><br/>
                                - Только сертифицированные и оригинальные товары<br/><br/>
                                - Профессиональный подбор запчастей

                            </p>
                        </div>
                        <div className="form-wrapper">
                            <h4 className='color-orange mb-10'>Запрос подбора запчастей по VIN</h4>
                            <Form/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Shop;