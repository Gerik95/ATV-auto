import React from 'react'
import './Motoboard.css'
import firstScreen from '../../assets/images/motoboard-first-screen.webp'
import sibmaster3 from '../../assets/images/sibmaster3.webp'
import sibmasterPro from '../../assets/images/sibmasterPro.webp'
import sibmasterDrive from '../../assets/images/sibmasterDrive.webp'
import Card from './Card'
import infoSibmaster3 from './json/infoSibmaster3.json'
import infoSibmasterPro from './json/infoSibmasterPro.json'
import infoSibmasterDrive from './json/infoSibmasterDrive.json'
import atvBoardLogo from '../../assets/images/atv-snowboards-logo.webp'
import Seo from '../../components/seo/Seo'

const heroStats = [
    {
        title: 'Официальный дилер',
        text: 'Поставляем профессиональные мотоборды Sibmaster и сопровождаем покупку консультацией.',
    },
    {
        title: 'Полный цикл сборки',
        text: 'Техника выпускается на производстве с промышленной линией сборки и контролем качества.',
    },
    {
        title: 'Для активного отдыха',
        text: 'Подходит для тех, кто выбирает эмоции, манёвренность и свободу передвижения по снегу.',
    },
    {
        title: 'Без сложной бюрократии',
        text: 'Компактность и простота эксплуатации делают мотоборд доступным для широкого круга райдеров.',
    },
]

const featureCards = [
    {
        title: 'Ведущее производство',
        text: 'Мы работаем с одним из ведущих производителей профессиональных мотосноубордов в России.',
    },
    {
        title: 'Преданные фанаты',
        text: 'Развиваем это направление для тех, кто ценит технику, драйв и настоящее спортивное ощущение.',
    },
    {
        title: 'Профессиональный формат',
        text: 'Sibmaster объединяет независимость снегохода и азарт сноуборда в одном компактном решении.',
    },
    {
        title: 'Понятные преимущества',
        text: 'Лёгкое управление, мобильность и яркие впечатления делают мотоборд заметной альтернативой привычной технике.',
    },
]

const ridingReasons = [
    {
        title: 'Манёвренный и лёгкий',
        text: 'Компактная посадка и уверенная геометрия помогают быстрее привыкнуть к управлению и получать удовольствие с первых выездов.',
    },
    {
        title: 'Собран для снега',
        text: 'Конструкция ориентирована на реальную зимнюю эксплуатацию и активное использование в сезон.',
    },
    {
        title: 'Подходит для яркого досуга',
        text: 'Это техника для тех, кто хочет не просто ехать, а чувствовать динамику, азарт и свободу на маршруте.',
    },
]

const catalogBoards = [
    {
        title: 'SIBMASTER 3 (2024)',
        subtitle: 'Двигатель: 9 л.с.',
        boardImage: sibmaster3,
        technicalData: infoSibmaster3,
    },
    {
        title: 'SIBMASTER PRO',
        subtitle: 'Двигатель: 8 л.с.',
        boardImage: sibmasterPro,
        technicalData: infoSibmasterPro,
    },
    {
        title: 'SIBMASTER DRIVE',
        subtitle: 'Двигатель: 9 л.с.',
        boardImage: sibmasterDrive,
        technicalData: infoSibmasterDrive,
    },
]

const Motoboard = () => {
    const videoSectionRef = React.useRef(null)
    const catalogSectionRef = React.useRef(null)

    const handleScrollToVideo = () => {
        videoSectionRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    const handleScrollToCatalog = () => {
        catalogSectionRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    return (
        <main className="motoboard-page">
            <Seo
                title="Мотосноуборды Sibmaster | ATV-Auto Пулково"
                description="ATV-Auto Пулково: мотосноуборды Sibmaster, консультация по выбору, официальный дилер и сопровождение покупки техники."
                path="/motoboard"
            />

            <section className="motoboard-hero" style={{ backgroundImage: `url(${firstScreen})` }}>
                <div className="motoboard-hero-overlay" />
                <div className="motoboard-container">
                    <div className="motoboard-hero-inner">
                        <div className="motoboard-hero-content">
                            <div className="motoboard-hero-logo-wrap">
                                <img src={atvBoardLogo} alt="ATV Motoboards" className="motoboard-hero-logo"  loading="lazy" />
                            </div>

                            <p className="motoboard-kicker">Мотоборды</p>
                            <h1>Профессиональные мотосноуборды для активного зимнего драйва</h1>
                            <p className="motoboard-hero-text">
                                Мы продаём новые средства передвижения для активных людей, чтобы впечатления измерялись
                                эмоциями, а не расстоянием. В линейке Sibmaster собраны модели для тех, кто ценит
                                манёвренность, контроль и яркие ощущения на зимнем маршруте.
                            </p>

                            <div className="motoboard-hero-actions">
                                <button
                                    type="button"
                                    className="motoboard-primary-btn"
                                    onClick={handleScrollToCatalog}
                                    aria-label="Прокрутить к каталогу мотобордов"
                                >
                                    Смотреть каталог
                                </button>
                                <button
                                    type="button"
                                    className="motoboard-secondary-btn"
                                    onClick={handleScrollToVideo}
                                    aria-label="Прокрутить к видеообзору мотобордов"
                                >
                                    Видеообзор
                                </button>
                            </div>
                        </div>

                        <div className="motoboard-hero-stats">
                            {heroStats.map((item) => (
                                <article key={item.title} className="motoboard-stat-card">
                                    <h2>{item.title}</h2>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="motoboard-section motoboard-section-light">
                <div className="motoboard-container">
                    <p className="motoboard-kicker">Почему именно они</p>
                    <h2 className="motoboard-section-title">Техника, которая собирает эмоции в одном формате</h2>

                    <div className="motoboard-intro-layout">
                        <div className="motoboard-features-grid">
                            {featureCards.map((item) => (
                                <article key={item.title} className="motoboard-feature-card">
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>

                        <aside className="motoboard-showcase-card">
                            <div className="motoboard-showcase-copy">
                                <p className="motoboard-showcase-kicker">Sibmaster</p>
                                <h3>Техника для уверенного и яркого катания</h3>
                                <p>
                                    Мотоборды Sibmaster сочетают компактный формат, спортивный характер и удобство в
                                    управлении, чтобы каждая поездка приносила больше драйва и свободы.
                                </p>
                            </div>

                            <div className="motoboard-showcase-image-wrap">
                                <img src={sibmaster3} alt="Мотоборд Sibmaster" className="motoboard-showcase-image"  loading="lazy" />
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <section ref={videoSectionRef} className="motoboard-section motoboard-section-dark">
                <div className="motoboard-container">
                    <p className="motoboard-kicker motoboard-kicker-dark">Опыт использования</p>
                    <h2 className="motoboard-section-title motoboard-section-title-dark">
                        Посмотрите на мотоборд в движении
                    </h2>

                    <div className="motoboard-media-layout">
                        <div className="motoboard-video-shell">
                            <video
                                className="motoboard-video"
                                autoPlay
                                loop
                                muted
                                playsInline
                                aria-label="Промо видео мотобордов"
                            >
                                <source src="https://motosnoubord.ru/wp-content/themes/sibmaster/video/promo-video.mp4" />
                            </video>
                        </div>

                        <div className="motoboard-reasons-grid">
                            {ridingReasons.map((item) => (
                                <article key={item.title} className="motoboard-reason-card">
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section ref={catalogSectionRef} className="motoboard-section motoboard-section-light">
                <div className="motoboard-container">
                    <p className="motoboard-kicker">Каталог</p>
                    <h2 className="motoboard-section-title">Выберите подходящую модель</h2>
                    <p className="motoboard-section-description">
                        Сравните модели Sibmaster, изучите основные параметры и подберите мотоборд под свой стиль
                        катания и желаемую динамику.
                    </p>

                    <div className="motoboard-catalog-grid">
                        {catalogBoards.map((board) => (
                            <Card
                                key={board.title}
                                title={board.title}
                                subtitle={board.subtitle}
                                boardImage={board.boardImage}
                                technicalData={board.technicalData}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Motoboard