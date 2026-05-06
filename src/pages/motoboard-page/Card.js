import React, { useState } from 'react'
import './Card.css'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation'

const Card = ({ boardImage, title, subtitle, technicalData }) => {
    const [technical, setTechnical] = useState(false)

    const colorOptions = [
        { label: 'Красный', className: 'color-red' },
        { label: 'Оранжевый', className: 'color-orange' },
        { label: 'Синий', className: 'color-blue' },
        { label: 'Зелёный', className: 'color-green' },
        { label: 'Белый', className: 'color-white' },
        { label: 'Чёрный', className: 'color-black' },
    ]

    const handleOpenTechnical = () => setTechnical(true)

    const handleCloseTechnical = () => setTechnical(false)

    return (
        <article className="motoboard-card">
            <TechnicalCard technical={technical} onClose={handleCloseTechnical} technicalData={technicalData} />

            <div className="motoboard-card-media">
                <img src={boardImage} alt={title} className="motoboard-card-image" />
            </div>

            <div className="motoboard-card-copy">
                <p className="motoboard-card-eyebrow">Модель Sibmaster</p>
                <h3 className="motoboard-card-title">{title}</h3>
                <p className="motoboard-card-subtitle">{subtitle}</p>
            </div>

            <div className="motoboard-card-footer">
                <div className="motoboard-card-color-block">
                    <p className="motoboard-card-color-title">Доступные цвета</p>
                    <div className="motoboard-card-colors" aria-label="Доступные цвета мотоборда">
                        {colorOptions.map((color) => (
                            <span
                                key={color.label}
                                className={`motoboard-card-color-item ${color.className}`}
                                title={color.label}
                                aria-label={color.label}
                            />
                        ))}
                    </div>
                </div>

                <button
                    type="button"
                    onClick={handleOpenTechnical}
                    className="motoboard-card-button"
                    aria-label={`Открыть характеристики модели ${title}`}
                >
                    Характеристики
                </button>
            </div>
        </article>
    )
}

export default Card

const TechnicalCard = ({ technical, onClose, technicalData }) => {
    return (
        <div className={`technical-card ${technical ? 'technical-card-open' : ''}`} aria-hidden={!technical}>
            <div className="technical-card-header">
                <h4 className="technical-card-title">Характеристики</h4>
                <button
                    type="button"
                    onClick={onClose}
                    className="technical-card-close"
                    aria-label="Закрыть характеристики"
                >
                    <CancelPresentationIcon className="technical-card-close-icon" />
                </button>
            </div>
            <ul className="technical-card-list">
                {technicalData?.map((el, index) => (
                    <li key={`${el.label}-${index}`} className="technical-card-item">
                        <h5 className="technical-name">{el.label}:</h5>
                        <span>{el.info}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}