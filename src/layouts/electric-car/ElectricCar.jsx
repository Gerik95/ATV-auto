import React from 'react';
// import { electricCar } from '../../assets';


const ElectricCar = () => {
    return (
        <div className="electric-car section-item">
            <div className="section-item-left">
                {/* <img className="section-item-image" src={electricCar} alt="Electric Car" /> */}
                <h2>Автоэлектрика</h2>
            </div>
            <div className="section-item-right">
                <div className="section-item-left-header">
                    <p className='item-right-h'>
                        Уважаемые клиенты!<br /> <span className='span-item-right'>ATV-Авто "Пулково"</span> предлагает услуги квалифицированного
                        электрика-диагноста по следующим видам работ:</p>
                    <ul className='item-right-list'>
                        <li> Установка и замена сигнализаций, видеорегистраторов, головных устройств и других дополнительных опций</li>
                        <li> Диагностика и промывка форсунок</li>
                        <li> Диагностика аккумуляторных батарей, а так же их замена</li>
                        <li> Компьютерная диагностика электрооборудования и всех систем автомобиля</li>
                        <li> Удаление ошибок ЭБУ</li>
                        <li> Различные прошивки, кодировки, настройки компьютерных систем транспортных средств</li>
                        <li> Восстановление работоспособности датчиков, узлов и агрегатов, а так же их замена</li>
                        <li> Заправка, диагностика и ремонт системы кондиционирования</li>
                        <li> Настройка аудио, видео и других систем автомобиля</li>
                    </ul>
                </div>
                <p className='item-right-h'>Стоимость диагностики ЭБУ: <span className='span-item-right'>1250 рублей</span> <br /> Все работы выполняются с использованием современного диагностического
                    дилерского оборудования, а так же мульти-брендовых сканеров.</p>
            </div>
        </div>
    );
};

export default ElectricCar;