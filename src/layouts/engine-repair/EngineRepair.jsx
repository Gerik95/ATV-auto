import React from 'react';
import {engineRepair} from "../../assets";

const EngineRepair = () => {
    return (
        <div className="engine-repair section-item">
            <div className="section-item-left">
                <p className="section-item-text"> Автосервис ATV-Aвто "Пулково" предоставляет услуги по ремонту силовых агрегатов любой сложности и типа. <br />
                    Так же у нас Вы можете отремонтировать навесное оборудование Вашего автомобиля:</p>
                <ul className="section-list">
                    <li className="list-item">- Туброкомпрессоры</li>
                    <li className="list-item">- Генераторы</li>
                    <li className="list-item">- Стартеры</li>
                    <li className="list-item">- Рулевые рейки</li>
                    <li className="list-item">- Прочее</li>
                </ul>   
            </div>
            <div className="section-item-right">
                <img className="section-item-image" src={engineRepair} alt="Engine Repair" />
            </div>
        </div>
    );
};

export default EngineRepair;