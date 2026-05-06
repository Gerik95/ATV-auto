import React from "react";
import firstScreen from "../../assets/images/about-us.webp";
import logo from "../../logo.png";
import { call } from "../../assets";
import Seo from "../../components/seo/Seo";
import "./About.css";

const featureCards = [
    {
        title: "Надёжные",
        text: "Мы гарантируем, что автомобиль после обслуживания будет работать надёжно. Мы хотим, чтобы вы и ваши близкие чувствовали себя в безопасности.",
    },
    {
        title: "Оперативные",
        text: "Выполняем все поставленные задачи быстро и в заявленные сроки.",
    },
    {
        title: "Современные",
        text: "Используем актуальные технологии и ставим интересы клиента на первое место.",
    },
    {
        title: "Всегда готовы",
        text: "Работаем без праздников, выходных, перерывов на обед.",
    },
    {
        title: "Сертифицированная СТО",
        text: "Наша станция прошла необходимые проверки, и имеет сертификат на техническое обслуживание и ремонт автотранспортных средств, включая гарантийные автомобили.",
    },
];

const heroStats = [
    { title: "С 2016 года", text: "ремонт легкового, коммерческого, мото- и квадро-транспорта" },
    { title: "Сертифицированная СТО", text: "обслуживаем и ремонтируем в том числе гарантийные автомобили" },
    { title: "Официальный дилер", text: "ProLAMP и Rusam в Санкт-Петербурге и Ленинградской области" },
    { title: "Без выходных", text: "работаем без праздников, выходных и перерывов на обед" },
];

const companyParagraphs = [
    <>
        Дорогие друзья, <span className="span-item-right">«ATV-Aвто "Пулково"»</span> на рынке оказания услуг по ремонту
        легкового автотранспорта, коммерческого транспорта, мото и квадро техники с 2016 года. Мы постоянно работаем
        над контролем качества. В нашем автосервисе используется самое современное оборудование и инструменты. У нас
        работают лучшие профессионалы своего дела.
    </>,
    <>
        Также мы являемся официальным дилером, на территории г. Санкт-Петербурга и Ленинградской области, компании
        <span className="span-item-right"> ProLAMP</span> - диодное освещение для авто-мото техники, и компании
        <span className="span-item-right"> Rusam</span> - Русские амортизаторы для грузовой, легковой и утилитарной
        техники. В 2021 году мы сменили дислокацию и обустроили наш новый дом - мастерскую по адресу:
        <br />
        📍СПБ, ул. Пилотов, д. 18, к. 5.
    </>,
    <>
        Как все знают автомобиль - это сложный механизм, он может выходить их строя при длительной эксплуатации и
        отсутствии должного ухода. Наши мастера окажут ему необходимое внимание и приведут вашу машину в надлежащее
        состояние. Специалисты <span className="span-item-right">«ATV-Aвто "Пулково"»</span> уже ждут вас во всеоружии.
        Мы хотим, чтобы каждый автомобиль радовал владельца четкой работой, а затраты на ремонт не оставляли дыры в
        кошельках клиентов.
    </>,
    <>
        Квалифицированный персонал СТО <span className="span-item-right">«ATV-Aвто "Пулково"»</span> выполняют работы
        по устранению неисправностей транспорта, стараясь в кратчайшие сроки выявить причину и устранить неисправность.
    </>,
];

const About = () => {
    const companySectionRef = React.useRef(null);

    const handleScrollToCompany = () => {
        companySectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <main className="about-page">
            <Seo
                title="О компании | ATV-Auto Пулково"
                description="Узнайте больше об ATV-Auto Пулково: команда, опыт, подход к ремонту автомобилей и стандарты качества автосервиса в Санкт-Петербурге."
                path="/about"
            />

            <section className="about-hero" style={{ backgroundImage: `url(${firstScreen})` }}>
                <div className="about-hero-overlay" />
                <div className="about-container">
                    <div className="about-hero-inner">
                        <div className="about-hero-content">
                            <div className="about-hero-logo-wrap">
                                <img src={logo} alt="ATV Auto" className="about-hero-logo"  loading="lazy" />
                            </div>

                            <p className="about-kicker">О компании</p>
                            <h1>О нас</h1>
                            <p className="about-hero-text">
                                Мы гарантируем, что автомобиль после обслуживания будет работать надёжно. Мы хотим,
                                чтобы вы и ваши близкие чувствовали себя в безопасности.
                            </p>

                            <div className="about-hero-actions">
                                <a href="tel:+78123307115" className="about-primary-btn">
                                    Связаться с нами
                                </a>
                                <button type="button" className="about-secondary-btn" onClick={handleScrollToCompany}>
                                    Подробнее о компании
                                </button>
                            </div>
                        </div>

                        <div className="about-hero-stats">
                            {heroStats.map((item) => (
                                <article key={item.title} className="about-stat-card">
                                    <h2>{item.title}</h2>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section about-section-dark">
                <div className="about-container">
                    <p className="about-kicker about-kicker-dark">Почему выбирают нас</p>
                    <h2 className="about-section-title about-section-title-dark">Подход, на который можно положиться</h2>

                    <div className="about-best-layout">
                        <div className="about-best-text">
                            {featureCards.map((item) => (
                                <article key={item.title} className="about-feature">
                                    <h3>
                                        <span className="span-item-right">{item.title}</span>
                                    </h3>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>

                        <aside className="about-best-logo">
                            <div className="about-logo-card">
                                <img src={logo} alt="ATV"  loading="lazy" />
                                <p>
                                    Современный автосервис с понятным сервисом, профессиональной командой и вниманием к
                                    деталям на каждом этапе работы.
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <section ref={companySectionRef} className="about-section about-section-light">
                <div className="about-container">
                    <p className="about-kicker">ATV-Auto Пулково</p>
                    <h2 className="about-section-title">О компании</h2>

                    <div className="about-company-grid">
                        <div className="about-company-story">
                            {companyParagraphs.map((paragraph, index) => (
                                <p key={index} className="cooperation_info_text">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <aside className="about-company-sidebar">
                            <div className="about-contact-block">
                                <p className="about-contact-title">Связаться с нами</p>
                                <p className="cooperation_info_text">
                                    Рассчитать стоимость ремонта, записаться на диагностику или задать любой
                                    интересующий Вас вопрос можно в Direct или по телефону:
                                </p>
                                <a href="tel:+78123307115" className="about-contact-phone" aria-label="Позвонить по номеру +7 (812) 330-71-15">
                                    <img src={call} alt="call"  loading="lazy" />
                                    <span>+7 (812) 330-71-15</span>
                                </a>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;