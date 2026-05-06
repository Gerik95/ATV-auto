import React from 'react';
import firstScreen from '../../assets/images/contacts.webp';
import logo from '../../logo.png';
import { SocialLinks, PhoneContacts, ContactsHeader, ContactsMap } from './ContactsSection';
import { META_DESCRIPTION, PHONE_NUMBERS, SOCIAL_CONTACTS, YANDEX_MAP_URL } from '../../data/contacts.data';
import Seo from '../../components/seo/Seo';
import './Contacts.css';

const heroStats = [
    {
        title: 'Санкт-Петербург',
        text: 'основной сервис ATV-Aвто находится на ул. Пилотов, д. 18, к. 5',
    },
    {
        title: 'Ежедневно 10:00-20:00',
        text: 'принимаем обращения и записываем на сервис без выходных',
    },
    {
        title: `${PHONE_NUMBERS.length} телефонные линии`,
        text: 'для быстрой записи, консультации и уточнения деталей ремонта',
    },
    {
        title: `${SOCIAL_CONTACTS.length} онлайн-канала`,
        text: 'можно написать в мессенджеры и соцсети в удобном формате',
    },
];

const visitCards = [
    {
        title: 'Адрес сервиса',
        text: 'Санкт-Петербург, ул. Пилотов, д. 18, к. 5. Удобный ориентир для навигатора и быстрый подъезд к сервисной зоне.',
    },
    {
        title: 'График работы',
        text: 'Ежедневно с 10:00 до 20:00. Если планируете визит, лучше заранее согласовать время по телефону.',
    },
    {
        title: 'С чем поможем',
        text: 'Подскажем по записи, диагностике, стоимости работ, статусу ремонта и маршруту до сервиса.',
    },
];

const Contacts = () => {
    const contactsSectionRef = React.useRef(null);
    const mapSectionRef = React.useRef(null);

    const handleScrollToContacts = () => {
        contactsSectionRef.current?.scrollIntoView({
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
        <main className="contacts-page">
            <Seo
                title="Контакты автосервиса | ATV-Auto Пулково"
                description={META_DESCRIPTION}
                path="/contacts"
            />

            <section className="contacts-hero" style={{ backgroundImage: `url(${firstScreen})` }}>
                <div className="contacts-hero-overlay" />
                <div className="contacts-container">
                    <div className="contacts-hero-inner">
                        <div className="contacts-hero-content">
                            <div className="contacts-hero-logo-wrap">
                                <img src={logo} alt="ATV Auto" className="contacts-hero-logo"  loading="lazy" />
                            </div>

                            <p className="contacts-kicker">Контакты</p>
                            <h1>Всегда на связи и готовы помочь</h1>
                            <p className="contacts-hero-text">
                                Записаться на сервис, уточнить стоимость работ, получить консультацию или быстро
                                построить маршрут до мастерской можно в один клик.
                            </p>

                            <div className="contacts-hero-actions">
                                <a
                                    href={`tel:${PHONE_NUMBERS[0]}`}
                                    className="contacts-primary-btn"
                                    aria-label="Позвонить в ATV-Auto"
                                >
                                    Позвонить сейчас
                                </a>
                                <button
                                    type="button"
                                    className="contacts-secondary-btn"
                                    onClick={handleScrollToMap}
                                    aria-label="Прокрутить к карте проезда"
                                >
                                    Смотреть маршрут
                                </button>
                            </div>

                            <button
                                type="button"
                                className="contacts-scroll-link"
                                onClick={handleScrollToContacts}
                                aria-label="Прокрутить к контактной информации"
                            >
                                Открыть все контакты
                            </button>
                        </div>

                        <div className="contacts-hero-stats">
                            {heroStats.map((item) => (
                                <article key={item.title} className="contacts-stat-card">
                                    <h2>{item.title}</h2>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section ref={contactsSectionRef} className="contacts-section contacts-section-light">
                <div className="contacts-container">
                    <p className="contacts-kicker">Каналы связи</p>
                    <h2 className="contacts-section-title">Свяжитесь с нами удобным способом</h2>

                    <div className="contacts-hub-grid">
                        <ContactsHeader />
                        <div className="contacts-hub-stack">
                            <SocialLinks />
                            <PhoneContacts />
                        </div>
                    </div>
                </div>
            </section>

            <section className="contacts-section contacts-section-dark">
                <div className="contacts-container">
                    <p className="contacts-kicker contacts-kicker-dark">Перед визитом</p>
                    <h2 className="contacts-section-title contacts-section-title-dark">Всё, что важно знать заранее</h2>

                    <div className="contacts-details-grid">
                        {visitCards.map((item) => (
                            <article key={item.title} className="contacts-detail-card">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section ref={mapSectionRef} className="contacts-section contacts-section-light">
                <div className="contacts-container">
                    <p className="contacts-kicker">Маршрут</p>
                    <h2 className="contacts-section-title">Как нас найти</h2>
                    <p className="contacts-map-description">
                        Ниже размещена интерактивная карта. Откройте маршрут, чтобы быстро добраться до сервиса
                        ATV-Auto на Пулковском направлении.
                    </p>

                    <ContactsMap src={YANDEX_MAP_URL} />
                </div>
            </section>
        </main>
    );
};

export default Contacts;