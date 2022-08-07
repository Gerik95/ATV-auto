import React from 'react';

const Tires = () => {
    return (
        <div className="tires section-item">
            <div className="section-item-left">
            <iframe className="map-tire" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aac581e65f55c274839924973e27ea358385063e00cfab274ff63b9248c78e7ba&amp;source=constructor" width="100%" height="100% " frameborder="0"></iframe>            </div>
            <div className="section-item-right">
                <div className="section-item-left-header">
                    <p className='item-right-h'>Уважаемые клиенты!<br /> <span className='span-item-right'>Наши партнёры</span>, комплекс "Aqua Jet", предлагают весь спектр услуг по шиномонтажу и ремонту колёсных дисков:</p>
                    <ul className='item-right-list'>
                        <li> Сезонная смена колёс</li>
                        <li> Хранение колёс</li>
                        <li> Продажа шин</li>
                        <li> Снятие секреток</li>
                        <li> Ремонт покрышек</li>
                        <li> Ремонт дисков</li>
                        <li> Восстановление геометрии диска</li>
                        <li> Порошковая и акриловая покраска дисков</li>
                    </ul>
                </div>
                <p className='item-right-h'>
                    Цены на сезонную смену резины <span className='span-item-right'>от 1400 рублей</span> <br />
                    Все работы выполняются с использованием современного оборудования.</p>
            </div>
        </div>
    );
};

export default Tires;