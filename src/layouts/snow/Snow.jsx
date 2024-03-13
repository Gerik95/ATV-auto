import React from 'react';

import CustomCarousel from '../../components/custom-carousel/CustomCarousel';
import {toningCarouselData} from '../../data/toning-carousel.data';
import {call} from '../../assets';


const Snow = () => {
    return (
        <div className="carwash section-item block_wrap">
            <div className="section-item-right">
                <div className="section-item-left-header">
                    <p className="item-right-h">Уважаемые клиенты!<br/> <span className="span-item-right">ATV-Авто "Пулково"</span>,
                        предлагают вам услуги по нанесению защитных/тонировочных плёнок на Ваш автомобиль:</p>
                    <p>
                        Сколы и мелкие царапины от прилетающего с дорожного полотна гравия, весенняя пыль, песок после зимы, постоянная грязь от грунта с газонов. Эти постоянные атрибуты наших дорог способны очень сильно испортить внешний вид вашего автомобиля.
                        Обезопасить кузов вашего автомобиля от этого поможет наиболее эффективная технология антигравийной защиты – оклейка автомобиля защитной пленкой!
                        При мелких ДТП вы также не тратите времени на обновление лакокрасочного покрытия поврежденных элементов.
                        Антигравийное пленочное покрытие сохранит исходную глубину цвета краски.
                    </p>
                    <div className="contact_phone">
                        <img src={call} alt="call" />
                        <a href="tel:3307115">Нажмите чтобы позвонить нам</a>
                    </div>
                </div>

            </div>
            <div className="section-item-left">
                <CustomCarousel items={toningCarouselData}/>
            </div>
        </div>
    );
};

export default Snow;