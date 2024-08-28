import React, { useState } from 'react'
import './Card.css'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation'

const Card = ({ boardImage, title, subtitle, technicalData }) => {

    const [technical, setTechnical] = useState(false)

    const onClick = () => setTechnical(true)

    const onClose = () => setTechnical(false)

    return (
        <>
            <div className="card">
                <TechnicalCard technical={technical} onClose={onClose} technicalData={technicalData}/>
                <div className="card-color">
                    <div className="card-color-item color-red"/>
                    <div className="card-color-item color-orange"/>
                    <div className="card-color-item color-blue"/>
                    <div className="card-color-item color-green"/>
                    <div className="card-color-item color-white"/>
                    <div className="card-color-item color-black"/>
                </div>
                <img src={boardImage} alt="Moto Snow Board"/>
                <h5 className="card-title">{title}</h5>
                <p className="card-subtitle">{subtitle}</p>
                <button onClick={onClick} className="card-phone">Характеристики</button>
            </div>
        </>
    )
}

export default Card

const TechnicalCard = ({ technical, onClose, technicalData }) => {
    return (
        <div style={{ top: technical ? 0 : '-100%' }} className="technical-card">
            <div className="technical-card-header">
                <CancelPresentationIcon onClick={onClose} className="cancel-icon"/>
                <h5 className="card-title pt-2">Характеристики</h5>
            </div>
            <ul className="technical-card-list">
                {technicalData?.map(el => (
                    <li className="technical-card-item">
                        <h6 className="technical-name">{el.label}:</h6>
                        <span>{el.info}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}