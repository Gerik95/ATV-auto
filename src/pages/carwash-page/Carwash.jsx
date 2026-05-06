import React from 'react';
import firstScreen from '../../assets/images/carwash.webp';
import { call, carwashIcon } from '../../assets';
import logo from '../../logo.png';
import Seo from '../../components/seo/Seo';
import './Carwash.css';

const servicesData = [
    {
        title: 'Экспресс-мойка',
        text: 'Быстро освежаем кузов и возвращаем автомобилю аккуратный вид без лишнего ожидания.',
    },
    {
        title: 'Премиальные программы',
        text: 'Деликатная мойка с более тщательной проработкой кузова, арок, дисков и декоративных элементов.',
    },
    {
        title: 'Полировка кузова и фар',
        text: 'Убираем следы эксплуатации, возвращаем глубину цвета и прозрачность оптики.',
    },
    {
        title: 'Химчистка салона',
        text: 'Комплексная очистка интерьера с вниманием к ткани, коже, пластику и труднодоступным зонам.',
    },
    {
        title: 'Защитные покрытия',
        text: 'Наносим составы для сохранения блеска, облегчения ухода и дополнительной защиты ЛКП.',
    },
    {
        title: 'Плёнки и тонировка',
        text: 'Оклейка кузова, стекол и фар защитными материалами с аккуратной подгонкой по форме.',
    },
];

const heroStats = [
    {
        title: '09:00-21:00',
        text: 'автомоечный комплекс работает ежедневно без выходных, чтобы вы могли заехать в удобное время',
    },
    {
        title: 'От 400 рублей',
        text: 'стоимость экспресс-мойки начинается с доступного входного чека',
    },
    {
        title: 'Современное оснащение',
        text: 'используем профессиональное оборудование и качественные расходные материалы',
    },
    {
        title: 'Полный цикл ухода',
        text: 'от быстрой мойки до химчистки, полировки и защитных покрытий в одном месте',
    },
];

const reasonsData = [
    {
        title: 'Аккуратная подача',
        text: 'Каждая услуга выстроена так, чтобы автомобиль выглядел ухоженно и без компромиссов по деталям.',
    },
    {
        title: 'Гибкий формат визита',
        text: 'Можно заехать на быстрый уход или выбрать расширенную программу под текущее состояние автомобиля.',
    },
    {
        title: 'Понятный результат',
        text: 'Четко объясняем, какие процедуры подойдут именно вашему авто и что дадут на практике.',
    },
    {
        title: 'Удобная локация',
        text: 'Комплекс расположен на ул. Пилотов, д. 31 с удобным подъездом и понятным маршрутом.',
    },
];

const visitSteps = [
    {
        title: 'Выберите формат ухода',
        text: 'Подскажем, достаточно ли экспресс-мойки или лучше сразу заложить время на расширенный комплекс.',
    },
    {
        title: 'Согласуйте детали',
        text: 'Перед началом уточняем пожелания по кузову, салону, полировке, защитным покрытиям и плёнкам.',
    },
    {
        title: 'Получите готовый автомобиль',
        text: 'После работ машина возвращается чистой, собранной и подготовленной к дальнейшей эксплуатации.',
    },
];

const Carwash = () => {
    const servicesSectionRef = React.useRef(null);
    const mapSectionRef = React.useRef(null);

    const handleScrollToServices = () => {
        servicesSectionRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    const handleScrollToMap = () => {
        mapSectionRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <main className="carwash-page">
            <Seo
                title="Автомойка в Пулково | ATV-Auto"
                description="Автомойка ATV-Auto в Санкт-Петербурге: экспресс-мойка, химчистка, полировка, защитные покрытия, оклейка пленками и тонировка."
                path="/carwash"
            />

            <section className="carwash-hero" style={{ backgroundImage: `url(${firstScreen})` }}>
                <div className="carwash-hero-overlay" />
                <div className="carwash-container">
                    <div className="carwash-hero-inner">
                        <div className="carwash-hero-content">
                            <div className="carwash-hero-logo-wrap">
                                <img src={logo} alt="ATV Auto" className="carwash-hero-logo"  loading="lazy" />
                            </div>

                            <p className="carwash-kicker">Автомойка</p>
                            <h1>Круглосуточный уход за автомобилем без лишней суеты</h1>
                            <p className="carwash-hero-text">
                                Партнерский комплекс Aqua Jet предлагает полный спектр услуг по уходу за автомобилем:
                                от экспресс-мойки до полировки, химчистки и защитных покрытий.
                            </p>

                            <div className="carwash-hero-actions">
                                <a
                                    href="tel:+79219003178"
                                    className="carwash-primary-btn"
                                    aria-label="Позвонить в автомойку по номеру +7 (921) 900-31-78"
                                >
                                    Позвонить в автомойку
                                </a>
                                <button
                                    type="button"
                                    className="carwash-secondary-btn"
                                    onClick={handleScrollToServices}
                                    aria-label="Прокрутить к списку услуг автомойки"
                                >
                                    Смотреть услуги
                                </button>
                            </div>

                            <button
                                type="button"
                                className="carwash-scroll-link"
                                onClick={handleScrollToMap}
                                aria-label="Прокрутить к карте проезда автомойки"
                            >
                                Открыть маршрут
                            </button>
                        </div>

                        <div className="carwash-hero-stats">
                            {heroStats.map((item) => (
                                <article key={item.title} className="carwash-stat-card">
                                    <h2>{item.title}</h2>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section ref={servicesSectionRef} className="carwash-section carwash-section-light">
                <div className="carwash-container">
                    <p className="carwash-kicker">Что доступно</p>
                    <h2 className="carwash-section-title">Услуги автомоечного комплекса</h2>

                    <div className="carwash-services-grid">
                        {servicesData.map((item) => (
                            <article key={item.title} className="carwash-service-card">
                                <div className="carwash-service-icon" aria-hidden="true">
                                    <img src={carwashIcon} alt=""  loading="lazy" />
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="carwash-section carwash-section-dark">
                <div className="carwash-container">
                    <p className="carwash-kicker carwash-kicker-dark">Почему это удобно</p>
                    <h2 className="carwash-section-title carwash-section-title-dark">Формат, в котором всё понятно</h2>

                    <div className="carwash-reasons-grid">
                        {reasonsData.map((item) => (
                            <article key={item.title} className="carwash-reason-card">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="carwash-section carwash-section-light">
                <div className="carwash-container">
                    <p className="carwash-kicker">Как проходит визит</p>
                    <h2 className="carwash-section-title">Быстро, аккуратно и по вашему запросу</h2>

                    <div className="carwash-visit-grid">
                        <div className="carwash-visit-story">
                            <p className="carwash-story-lead">
                                Если нужен быстрый внешний уход, можно заехать на экспресс-мойку. Если хотите глубже
                                освежить автомобиль, доступны полировка, химчистка, защитные покрытия и работа с
                                пленками.
                            </p>

                            <div className="carwash-steps">
                                {visitSteps.map((item, index) => (
                                    <article key={item.title} className="carwash-step-card">
                                        <span>{`0${index + 1}`}</span>
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.text}</p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>

                        <aside className="carwash-contact-card">
                            <p className="carwash-card-kicker">Контакты автомойки</p>
                            <h3>Aqua Jet на ул. Пилотов, д. 31</h3>
                            <p className="carwash-contact-text">
                                Работают круглосуточно. Можно уточнить стоимость, подобрать формат мойки и заранее
                                согласовать дополнительные процедуры.
                            </p>

                            <div className="carwash-contact-points">
                                <div className="carwash-contact-point">
                                    <strong>Телефон</strong>
                                    <a href="tel:+79219003178" aria-label="Позвонить в автомойку по номеру +7 (921) 900-31-78">
                                        +7 (921) 900-31-78
                                    </a>
                                </div>
                                <div className="carwash-contact-point">
                                    <strong>Адрес</strong>
                                    <p>Санкт-Петербург, ул. Пилотов, д. 31</p>
                                </div>
                                <div className="carwash-contact-point">
                                    <strong>Режим работы</strong>
                                    <p>Круглосуточно</p>
                                </div>
                            </div>

                            <a
                                href="tel:+79219003178"
                                className="carwash-contact-phone"
                                aria-label="Позвонить в автомойку"
                            >
                                <img src={call} alt="" aria-hidden="true"  loading="lazy" />
                                <span>Связаться сейчас</span>
                            </a>
                        </aside>
                    </div>
                </div>
            </section>

            <section ref={mapSectionRef} className="carwash-section carwash-section-light carwash-section-map">
                <div className="carwash-container">
                    <p className="carwash-kicker">Маршрут</p>
                    <h2 className="carwash-section-title">Как нас найти</h2>
                    <p className="carwash-map-description">
                        Ниже размещена интерактивная карта автомойки. Постройте маршрут до комплекса Aqua Jet и
                        выберите удобное время визита.
                    </p>

                    <div className="carwash-map-shell">
                        <iframe
                            className="carwash-map-frame"
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A68159483c204cfa4c34259d9f0f9d12361fc1ede347377879cef9f3c332119f6&amp;source=constructor"
                            title="Карта проезда к автомойке"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Carwash;

