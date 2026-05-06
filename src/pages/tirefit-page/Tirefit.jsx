import React from "react";
import firstScreen from "../../assets/images/tireservice.webp";
import logo from "../../logo.png";
import { call } from "../../assets";
import Seo from "../../components/seo/Seo";
import "./Tirefit.css";

const services = [
    "Сезонная смена колёс",
    "Хранение колёс",
    "Продажа шин",
    "Снятие секреток",
    "Ремонт покрышек",
    "Ремонт дисков",
    "Восстановление геометрии диска",
    "Порошковая и акриловая покраска дисков",
];

const heroStats = [
    {
        title: "От 2500 рублей",
        text: "стоимость сезонной смены резины с понятным ценообразованием",
    },
    {
        title: "Ежедневно 09:00-21:00",
        text: "принимаем автомобили без лишних пауз в течение всего дня",
    },
    {
        title: "Современное оборудование",
        text: "аккуратная работа с шинами и дисками на профильной технике",
    },
    {
        title: "Aqua Jet",
        text: "партнёрский комплекс, выполняющий полный спектр шиномонтажных работ",
    },
];

const benefitCards = [
    {
        title: "Чисто и аккуратно",
        text: "Следим за состоянием дисков, крепежа и резины, чтобы после визита машина выглядела так же опрятно, как до него.",
    },
    {
        title: "Быстро в сезон",
        text: "Организуем поток работ так, чтобы сезонная переобувка проходила без лишней суеты и долгого ожидания.",
    },
    {
        title: "Полный цикл услуг",
        text: "От базовой замены колес до восстановления геометрии и окраски дисков в одном направлении сервиса.",
    },
    {
        title: "Понятная консультация",
        text: "Подскажем по износу шин, состоянию дисков и оптимальному сценарию обслуживания без навязанных работ.",
    },
];

const visitInfo = [
    {
        title: "Адрес шиномонтажа",
        text: "Санкт-Петербург, ул. Пилотов, д. 31. Удобный ориентир для быстрого заезда на сервисную площадку.",
    },
    {
        title: "Контакт для записи",
        text: "Телефон для уточнения стоимости, времени визита и доступных услуг: +7 (921) 900-31-78.",
    },
    {
        title: "Что можно сделать",
        text: "Переобуть автомобиль, отремонтировать шину, восстановить диск или заранее организовать хранение колес.",
    },
];

const Tirefit = () => {
    const servicesSectionRef = React.useRef(null);
    const mapSectionRef = React.useRef(null);

    const handleScrollToServices = () => {
        servicesSectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const handleScrollToMap = () => {
        mapSectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <main className="tirefit-page">
            <Seo
                title="Шиномонтаж в Пулково | ATV-Auto"
                description="Шиномонтаж ATV-Auto в Пулково: сезонная смена колес, хранение шин, продажа, ремонт покрышек и дисков в Санкт-Петербурге."
                path="/tirefit"
            />

            <section className="tirefit-hero" style={{ backgroundImage: `url(${firstScreen})` }}>
                <div className="tirefit-hero-overlay" />
                <div className="tirefit-container">
                    <div className="tirefit-hero-inner">
                        <div className="tirefit-hero-content">
                            <div className="tirefit-hero-logo-wrap">
                                <img src={logo} alt="ATV Auto" className="tirefit-hero-logo"  loading="lazy" />
                            </div>

                            <p className="tirefit-kicker">Шиномонтаж</p>
                            <h1>Аккуратный сервис для колёс и дисков</h1>
                            <p className="tirefit-hero-text">
                                Полный спектр шиномонтажных работ от сезонной замены до ремонта и восстановления
                                дисков. Всё в одном понятном и аккуратно собранном сервисе.
                            </p>

                            <div className="tirefit-hero-actions">
                                <a
                                    href="tel:+79219003178"
                                    className="tirefit-primary-btn"
                                    aria-label="Позвонить в шиномонтаж по номеру +7 (921) 900-31-78"
                                >
                                    Записаться по телефону
                                </a>
                                <button
                                    type="button"
                                    className="tirefit-secondary-btn"
                                    onClick={handleScrollToServices}
                                    aria-label="Прокрутить к списку услуг шиномонтажа"
                                >
                                    Смотреть услуги
                                </button>
                            </div>

                            <button
                                type="button"
                                className="tirefit-scroll-link"
                                onClick={handleScrollToMap}
                                aria-label="Прокрутить к карте шиномонтажа"
                            >
                                Открыть карту и адрес
                            </button>
                        </div>

                        <div className="tirefit-hero-stats">
                            {heroStats.map((item) => (
                                <article key={item.title} className="tirefit-stat-card">
                                    <h2>{item.title}</h2>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section ref={servicesSectionRef} className="tirefit-section tirefit-section-light">
                <div className="tirefit-container">
                    <p className="tirefit-kicker">Услуги</p>
                    <h2 className="tirefit-section-title">Что можно сделать у нас</h2>

                    <div className="tirefit-services-grid">
                        <article className="tirefit-services-intro">
                            <p className="tirefit-card-kicker">Партнёрский шинный сервис</p>
                            <h3>Весь цикл работ по колёсам без лишней сложности</h3>
                            <p className="tirefit-info-text">
                                Наши партнёры, комплекс <span className="tirefit-accent">Aqua Jet</span>, выполняют
                                весь спектр шиномонтажных работ: от сезонной смены колёс до ремонта покрышек и
                                восстановления дисков. Приёмка ведётся ежедневно без лишнего ожидания.
                            </p>
                        </article>

                        <div className="tirefit-service-list">
                            {services.map((item) => (
                                <article key={item} className="tirefit-service-card">
                                    <h3>{item}</h3>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="tirefit-section tirefit-section-dark">
                <div className="tirefit-container">
                    <p className="tirefit-kicker tirefit-kicker-dark">Почему выбирают нас</p>
                    <h2 className="tirefit-section-title tirefit-section-title-dark">
                        Симметричный и понятный подход к шиномонтажу
                    </h2>

                    <div className="tirefit-benefits-grid">
                        {benefitCards.map((item) => (
                            <article key={item.title} className="tirefit-benefit-card">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="tirefit-section tirefit-section-light">
                <div className="tirefit-container">
                    <p className="tirefit-kicker">Перед визитом</p>
                    <h2 className="tirefit-section-title">Всё важное в одном месте</h2>

                    <div className="tirefit-visit-grid">
                        <div className="tirefit-visit-stack">
                            {visitInfo.map((item) => (
                                <article key={item.title} className="tirefit-info-card">
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>

                        <aside className="tirefit-contact-card">
                            <p className="tirefit-card-kicker">Быстрая запись</p>
                            <h3>Нужна переобувка или ремонт колеса?</h3>
                            <p className="tirefit-info-text">
                                Уточните загруженность, стоимость и удобное время визита по телефону. Базовая цена
                                сезонной смены резины начинается <span className="tirefit-accent">от 2500 рублей</span>.
                            </p>

                            <a
                                href="tel:+79219003178"
                                className="tirefit-contact-phone"
                                aria-label="Позвонить в шиномонтаж по номеру +7 (921) 900-31-78"
                            >
                                <img src={call} alt="" aria-hidden="true"  loading="lazy" />
                                <span>+7 (921) 900-31-78</span>
                            </a>

                            <div className="tirefit-mini-facts">
                                <div className="tirefit-mini-fact">
                                    <strong>09:00-22:00</strong>
                                    <span>ежедневный режим работы</span>
                                </div>
                                <div className="tirefit-mini-fact">
                                    <strong>ул. Пилотов, 31</strong>
                                    <span>удобный адрес для навигатора</span>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <section ref={mapSectionRef} className="tirefit-section tirefit-section-light tirefit-map-section">
                <div className="tirefit-container">
                    <p className="tirefit-kicker">Маршрут</p>
                    <h2 className="tirefit-section-title">Как нас найти</h2>
                    <p className="tirefit-map-description">
                        Откройте карту и быстро постройте маршрут до шиномонтажа на Пулковском направлении.
                    </p>

                    <div className="tirefit-map-shell">
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A68159483c204cfa4c34259d9f0f9d12361fc1ede347377879cef9f3c332119f6&amp;source=constructor"
                            className="tirefit-map-frame"
                            title="Карта шиномонтажа ATV-Auto"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Tirefit;
