import React from 'react';
import { tuning } from "../../assets";
import { call } from "../../assets";


const Tuning = () => {
    return (
        <div className="tuning section-item block_wrap">
            <div className="section-item-right">
                <div className="section-item-left-header">
                    <p className='item-right-h'>Уважаемые клиенты!<br /><span className='span-item-right'>Наш партнёр</span>, предлагает
                        Вам <span className='span-item-right'>тюнинг</span> для автомобилей премиум сегмента, который позволит превратить
                        обычную модель в более выделяющуюся и индивидуальную
                        с помощью установки аэродинамических обвесов из стеклопластика и карбона.
                        Своим клиентам рады предложить лучший сервис:</p>
                    <ul className='item-right-list'>
                        <li> Ламинация деталей интерьера и экстерьера карбоном</li>
                        <li> Изготовление деталей из карбона и стеклопластика</li>
                        <li> Ремонт деталей из карбона и стеклопластика</li>
                        <li> Обучение ламинации и изготовлению деталей из карбона </li>
                    </ul>
                </div>
                <p className='item-right-h'>
                    <div className="contact_phone">
                        <img src={call} alt="call" />
                        <a href="tel:+79119566857">+7 (911) 956-68-57</a>
                    </div>
                    <br />
                    Все работы выполняются с использованием современного оборудования и качественных расходных материалов.</p>
            </div>
            <div className="section-item-left">
                <img className="section-item-image" src={tuning} alt="Tuning" />
            </div>
        </div>
    );
};

export default Tuning;