import React from 'react';
import {call, suspentionCorner} from '../../assets';

const SuspentionCorner = () => {
    return (
        <div className="suspention-corner section-item block_wrap">
            <div className="section-item-right">
                <div className="section-item-left-header">
                    <p className="item-right-h">Уважаемые клиенты!<br/> <span className="span-item-right">ATV-Авто "Пулково"</span> предлагает
                        услуги квалифицированного мастера
                        стенда регулировки углов развала-схождения колёс. В целях безопасной эксплуатации Вашего
                        автомобиля,
                        мы рекомендуем Вам пройти диагностику регулировки углов развала-схождения колёс Вашего
                        автомобиля на
                        нашем современном 3-D стенде в следующих случаях: </p>
                    <ul className="item-right-list">
                        <li>Произведена сезонная замена резины</li>
                        <li>Покупка нового комплекта резины</li>
                        <li>После ДТП или сильных ударных нагрузок при эксплуатации автомобиля</li>
                        <li>В случае некомфортного управления (тянет в стороны, спица руля не центрована и т.д.)</li>
                        <li>В случае неравномерного износа резины</li>
                    </ul>
                </div>
                <p className="item-right-h">
                    Стоимость диагностики развал-схождение: <span className="span-item-right">750 рублей</span> <br/>
                    Развал-схождение легкового автомобиля(1 ось): <span
                    className="span-item-right">1800 рублей</span><br/>
                    Развал-схождение легкового автомобиля(2 оси): <span
                    className="span-item-right">2400 рублей</span><br/>
                    Все работы выполняются с использованием современного
                    оборудования.
                </p>
                <div className="contact_phone">
                    <img src={call} alt="call"/>
                    <a href="tel:3307115">Нажмите чтобы позвонить нам</a>
                </div>
            </div>
            <div className="section-item-left">
                <img className="section-item-image" src={suspentionCorner} alt="Suspention Corner"/>
            </div>
        </div>
    );
};

export default SuspentionCorner;