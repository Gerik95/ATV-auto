import React from 'react';
import { electricCar } from '../../assets';

const ElectricCar = () => {
    return (
        <div className="electric-car section-item">
            <div className="section-item-left">
                <img className="section-item-image" src={electricCar} alt="Electric Car" />
            </div>
            <div className="section-item-right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, sequi.
            </div>
        </div>
    );
};

export default ElectricCar;