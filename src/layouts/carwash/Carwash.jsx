import React from 'react';


const Carwash = () => {
    return (
        <div className="carwash section-item block_wrap">
            <div className="section-item-right">
                <div className="section-item-left-header">
                    <p className='item-right-h'>Уважаемые клиенты!<br /> <span className='span-item-right'>Наши партнёры</span>, комплекс "Aqua Jet", предлагают весь спектр услуг по уходу за автомобилем:</p>
                    <ul className='item-right-list'>
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
            <div className="section-item-left">
            <iframe className="map-wash" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aac581e65f55c274839924973e27ea358385063e00cfab274ff63b9248c78e7ba&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>            </div>
        </div>
    );
};

export default Carwash;