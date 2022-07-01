import React from 'react';
import { suspentionCorner } from '../../assets';

const SuspentionCorner = () => {
    return (
        <div className="suspention-corner section-item">
            <div className="section-item-right">
                Наш сервис оборудован одним из самых качественных стендов для проверки развала-схождения
                колес легковых и грузовых автомобилей.
            </div>
            <div className="section-item-left">
                <img className="section-item-image" src={suspentionCorner} alt="Suspention Corner" />
            </div>
        </div>
    );
};

export default SuspentionCorner;