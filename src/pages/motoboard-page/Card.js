import React from 'react';
import './Card.css';

const Card = ({boardImage, title, subtitle}) => {
    return (
        <>
            <div className="card">
                <img src={boardImage} alt="Moto Snow Board"/>
                <h5 className='card-title'>{title}</h5>
                <p className='card-subtitle'>{subtitle}</p>
                <a className="card-phone" href="tel:+78123307115">Узнать стоимость</a>
            </div>
        </>
    );
};

export default Card;