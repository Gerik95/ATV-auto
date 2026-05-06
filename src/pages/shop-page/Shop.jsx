import React from "react";
import firstScreen from "../../assets/images/shop.webp";
import marketLogo from "../../assets/images/atv-market-logo.webp";
import { call } from "../../assets";
import Form from "../../components/Form/Form";
import Seo from "../../components/seo/Seo";
import "./Shop.css";

const heroStats = [
    {
        title: "Профессиональный VIN-подбор",
        text: "Подбираем детали под конкретный автомобиль, чтобы вы не тратили время на сомнительные совпадения.",
    },
    {
        title: "Легковые и коммерческие авто",
        text: "Работаем с легковым транспортом и легким коммерческим сегментом в одном понятном процессе.",
    },
    {
        title: "Документы и гарантия",
        text: "Предлагаем сертифицированные позиции с прозрачным происхождением и гарантией от поставщика.",
    },
    {
        title: "Доставка и установка",
        text: "Помогаем не только с покупкой, но и с дальнейшей установкой деталей в сервисе ATV-Auto.",
    },
];

const directionItems = [
    "Автозапчасти для легковых автомобилей по выгодным ценам с возможностью адресной доставки.",
    "Автозапчасти для легкого коммерческого транспорта с удобным подбором и оперативным оформлением.",
    "Комплексное снабжение корпоративных клиентов с легковым и легким коммерческим транспортом.",
    "Возможность заключения контрактов с государственными бюджетными учреждениями.",
];

const advantageItems = [
    "Настоящие автозапчасти по минимальным ценам без контрафакта и сомнительных поставок.",
    "Оплата любым удобным способом и понятные условия оформления заказа.",
    "Возврат или обмен без лишних сложностей в течение семи дней при сохранении товарного вида.",
    "Прямая гарантия от производителя через наш магазин и прозрачные документы.",
    "Онлайн-заявка для подбора деталей по VIN без лишних звонков и переписки.",
    "Профессиональный подбор, который учитывает спецификацию именно вашего автомобиля.",
];

const storyParagraphs = [
    <>
        Дорогие друзья, мы рады приветствовать вас в магазине автозапчастей{" "}
        <strong className="shop-accent">«ATV-Авто "Пулково"»</strong>. Наша компания занимается ремонтом автомобилей и
        утилитарной техники с 2016 года, поэтому подбор деталей строится на реальном сервисном опыте, а не только по
        каталогу.
    </>,
    <>
        Из-за большого количества запросов от клиентов на покупку запасных частей для самостоятельного ремонта и
        обслуживания мы открыли полноценный <strong className="shop-accent">отдел продажи запасных частей</strong>,
        который помогает быстро найти нужные позиции и предложить несколько корректных вариантов.
    </>,
    <>
        Наш опыт позволяет уверенно работать с самыми разными запросами: от точного профессионального подбора деталей
        до организации последующей установки на ваш автомобиль. Мы ценим клиентов, которые не хотят переплачивать, но
        при этом ожидают понятное качество, оригинальность товара и полный комплект документов.
    </>,
];

const supportPoints = [
    "Консультация по совместимости деталей перед заказом.",
    "Подбор нескольких вариантов под бюджет и задачи.",
    "Поддержка по телефону и через форму VIN-запроса.",
];

const Shop = () => {
    const detailsSectionRef = React.useRef(null);
    const formSectionRef = React.useRef(null);

    const handleScrollToDetails = () => {
        detailsSectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const handleScrollToForm = () => {
        formSectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <main className="shop-page">
            <Seo
                title="Подбор автозапчастей по VIN | ATV-Auto Пулково"
                description="Магазин автозапчастей ATV-Auto Пулково: подбор деталей по VIN для легковых автомобилей и легкого коммерческого транспорта с консультацией и доставкой."
                path="/shop"
            />

            <section className="shop-hero" style={{ backgroundImage: `url(${firstScreen})` }}>
                <div className="shop-hero-overlay" />
                <div className="shop-container">
                    <div className="shop-hero-inner">
                        <div className="shop-hero-content">
                            <div className="shop-hero-logo-wrap">
                                <img src={marketLogo} alt="ATV Auto Магазин" className="shop-hero-logo"  loading="lazy" />
                            </div>

                            <p className="shop-kicker">VIN-подбор</p>
                            <h1>Подбор автозапчастей без ошибок и лишних переплат</h1>
                            <p className="shop-hero-text">
                                Подберем нужные детали под ваш автомобиль, предложим корректные позиции и поможем пройти
                                путь от запроса до установки в одном понятном сервисе.
                            </p>

                            <div className="shop-hero-actions">
                                <button
                                    type="button"
                                    className="shop-primary-btn"
                                    onClick={handleScrollToForm}
                                    aria-label="Прокрутить к форме VIN-подбора"
                                >
                                    Оставить VIN-запрос
                                </button>
                                <a
                                    href="tel:+78123307115"
                                    className="shop-secondary-btn"
                                    aria-label="Позвонить по номеру +7 (812) 330-71-15"
                                >
                                    Позвонить в магазин
                                </a>
                            </div>

                            <button
                                type="button"
                                className="shop-scroll-link"
                                onClick={handleScrollToDetails}
                                aria-label="Прокрутить к информации о магазине"
                            >
                                Подробнее о магазине
                            </button>
                        </div>

                        <div className="shop-hero-stats">
                            {heroStats.map((item) => (
                                <article key={item.title} className="shop-stat-card">
                                    <h2>{item.title}</h2>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section ref={detailsSectionRef} className="shop-section shop-section-light">
                <div className="shop-container">
                    <p className="shop-kicker">ATV-Auto Пулково</p>
                    <h2 className="shop-section-title">Магазин, который вырос из практики автосервиса</h2>

                    <div className="shop-story-grid">
                        <div className="shop-story-card">
                            {storyParagraphs.map((paragraph, index) => (
                                <p key={index} className="shop-story-text">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <aside className="shop-support-card">
                            <p className="shop-card-kicker">Быстрая связь</p>
                            <h3>Подскажем по запросу и поможем оформить подбор</h3>
                            <p className="shop-support-text">
                                Если нужно быстро уточнить наличие, совместимость или оставить заявку на подбор, свяжитесь
                                с нами любым удобным способом.
                            </p>

                            <ul className="shop-support-list">
                                {supportPoints.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>

                            <a
                                href="tel:+78123307115"
                                className="shop-contact-phone"
                                aria-label="Позвонить по номеру +7 (812) 330-71-15"
                            >
                                <span className="shop-contact-icon">
                                    <img src={call} alt="" aria-hidden="true"  loading="lazy" />
                                </span>
                                <span>
                                    <strong>+7 (812) 330-71-15</strong>
                                    <small>Ежедневно отвечаем на вопросы по подбору и заказу</small>
                                </span>
                            </a>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="shop-section shop-section-dark">
                <div className="shop-container">
                    <p className="shop-kicker shop-kicker-dark">Что вы получаете</p>
                    <h2 className="shop-section-title shop-section-title-dark">Понятный подбор, честные условия и надёжный сервис</h2>

                    <div className="shop-offer-grid">
                        <div className="shop-offer-stack">
                            <article className="shop-panel">
                                <p className="shop-card-kicker">Основные направления</p>
                                <h3>С чем мы работаем</h3>
                                <ul className="shop-check-list">
                                    {directionItems.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </article>

                            <article className="shop-panel">
                                <p className="shop-card-kicker">Преимущества</p>
                                <h3>Почему клиентам удобно покупать у нас</h3>
                                <ul className="shop-check-list">
                                    {advantageItems.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </article>
                        </div>

                        <aside ref={formSectionRef} className="shop-form-shell">
                            <p className="shop-card-kicker">Форма запроса</p>
                            <h3>Запрос подбора запчастей по VIN</h3>
                            <p className="shop-form-text">
                                Заполните форму ниже, и мы подготовим предложения по интересующим вас деталям с учётом
                                VIN, комплектации и особенностей вашего автомобиля.
                            </p>
                            <Form />
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Shop;