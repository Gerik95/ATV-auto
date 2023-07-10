import React from 'react';
import {call, engineRepair} from '../../assets';


const EngineRepair = () => {
    return (
        <div className="engine-repair section-item block_wrap">
            <div className="section-item-left">
                <div className="section-item-left-header">
                    <p className="item-right-h"> Уважаемые клиенты!<br/> <span className="span-item-right">ATV-Авто "Пулково"</span> предлагает
                        услуги квалифицированных
                        механиков с опытом работы в области диагностики и ремонта авто и мото техники по следующим видам
                        работ:</p>
                    <ul className="item-right-list">
                        <li>Регламентное ТО</li>
                        <li>Классическая замена масла и фильтров ДВС</li>
                        <li>Экспресс замена масла ДВС</li>
                        <li>Ремонт, замена и обслуживание ДВС</li>
                        <li>Ремонт, замена и обслуживание МКПП, АКПП, РКПП, вариаторов и редукторов</li>
                        <li>Ремонт, замена и обслуживание турбонагнетателей</li>
                        <li>Ремонт, замена и обслуживание рулевых реек</li>
                        <li>Комплексное обслуживание, ремонт и замена тормозной системы</li>
                        <li>Проточка тормозных дисков без снятия</li>
                    </ul>
                </div>
                <p className="item-right-h">Все работы выполняются с учётом рекомендаций и регламентов,
                    установленных заводом изготовителем, на современном оборудовании с использованием качественных
                    расходных материалов.
                </p>
                <div className="contact_phone">
                    <img src={call} alt="call"/>
                    <a href="tel:3307115">Нажмите чтобы позвонить нам</a>
                </div>
            </div>
            <div className="section-item-right">
                <img className="section-item-image" src={engineRepair} alt="Engine Repair"/>
            </div>
        </div>
    );
};

export default EngineRepair;