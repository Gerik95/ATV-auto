import React from "react";
import firstScreen from "../../assets/images/cooperation.webp";
import logo from "../../logo.png";
import { call } from "../../assets";
import Seo from "../../components/seo/Seo";
import "./Cooperation.css";

const vehicleCards = [
    {
        title: "Легковые автомобили",
        text: "Обслуживаем российские и зарубежные марки: диагностика, регламентное ТО и ремонт любой сложности.",
    },
    {
        title: "Внедорожники и микроавтобусы",
        text: "Работаем с транспортом повышенной проходимости и семейными/коммерческими микроавтобусами.",
    },
    {
        title: "Коммерческий транспорт до 3,5 тонн",
        text: "Принимаем малотоннажные грузовики и коммерческие автомобили с удлиненной базой и высокой крышей.",
    },
    {
        title: "Мототехника и прицепы",
        text: "Ремонтируем мотоциклы, квадроциклы, снегоходы и прицепы для легковых автомобилей.",
    },
];

const partnershipBenefits = [
    {
        title: "Работы по регламенту",
        text: "Проводим ремонт и техническое обслуживание с использованием собственного оборудования, расходников и рекомендованных запасных частей.",
    },
    {
        title: "Бесплатная предварительная диагностика",
        text: "На этапе внешнего осмотра предварительно оцениваем объем работ и необходимую номенклатуру запасных частей без дополнительной оплаты.",
    },
    {
        title: "Прозрачный контроль и хранение",
        text: "Предоставляем возможность контролировать ход ремонта и бесплатно размещаем автомобили на охраняемой территории в ожидании работ.",
    },
    {
        title: "Документы и квалификация",
        text: "Предоставляем квалифицированный персонал, подтверждающие сертификаты и соблюдаем технические условия для соответствующих марок автомобилей.",
    },
];

const capabilityStats = [
    {
        title: "5 подъемников",
        text: "4 двухстоечных и 1 четырехстоечный для легкового и коммерческого транспорта.",
    },
    {
        title: "3D развал-схождение",
        text: "Современный стенд для точного измерения и регулировки углов установки колес.",
    },
    {
        title: "Диагностика и агрегатный ремонт",
        text: "Оборудование для ремонта двигателей, КПП, АКПП и проверки рабочих систем автомобиля.",
    },
    {
        title: "Полный цикл работ",
        text: "От замены масла и кондиционера до сварочных работ, правки дисков и эвакуации.",
    },
];

const equipmentItems = [
    "4 двухстоечных подъемника для ремонта легкового и коммерческого автотранспорта с удлиненной базой и высокой крышей.",
    "1 четырехстоечный подъемник для коммерческого автотранспорта.",
    "3D стенд для измерения и регулировки углов развала/схождения колес.",
    "Аппарат для классической и экспресс-замены масла в двигателе.",
    "Оборудование для ремонта и замены двигателей, КПП и АКПП.",
    "Стенд для измерения внутреннего давления в рабочих системах автомобиля.",
    "Аппарат для замены трансмиссионных жидкостей.",
    "Оборудование для сварочных и аргонных работ любой сложности.",
    "Компьютерный стенд для диагностики и выявления неисправностей рабочих систем автомобилей.",
    "Стенд для проверки электрических систем автомобилей.",
    "Различные виды специального инструмента для проведения ТО и ремонта.",
    "Стенд для проточки тормозных дисков автомобилей.",
    "Станок для правки и ремонта всех видов колесных дисков.",
    "Стенд для диагностики, выявления неисправностей и заправки кондиционеров.",
    "Эвакуатор для доставки автомобилей к месту ремонта.",
];

const requisites = [
    'ООО "Лидер"',
    "ИНН 7810637217",
    "КПП 781001001",
    "ОГРН 1167847495232",
    "196210, Россия, г. Санкт-Петербург, вн. тер. г. муниципальный округ Пулковский меридиан, ул. Пилотов 18, корпус 5, стр. 2, пом. 1",
    "Тел.: 8 (812) 330-71-15",
    "E-mail: ATV_Servis@mail.ru",
    'Р/сч. № 40702810890450001199 в Доп. офис "Нарвский" ПАО Банк "Санкт-Петербург"',
    "К/с: 30101 810 9 0000 0000 790, БИК: 044030790",
];

const heroStats = [
    { title: "С 2016 года", text: "выстраиваем долгосрочное сервисное сотрудничество с компаниями и частными автопарками" },
    { title: "Индивидуальные условия", text: "подбираем договор, график обслуживания и гибкую систему скидок под формат партнера" },
    { title: "Корпоративный формат", text: "специальные предложения для организаций, которым важны сроки, прозрачность и контроль" },
    { title: "Широкий профиль", text: "легковой, коммерческий, мото- и квадро-транспорт в одном сервисном контуре" },
];

const Cooperation = () => {
    const overviewSectionRef = React.useRef(null);
    const requisitesSectionRef = React.useRef(null);
    const yearsInService = new Date().getFullYear() - 2016;

    const handleScrollToOverview = () => {
        overviewSectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const handleScrollToRequisites = () => {
        requisitesSectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <main className="cooperation-page">
            <Seo
                title="Сотрудничество для организаций | ATV-Auto Пулково"
                description="Коммерческое предложение ATV-Auto Пулково: обслуживание корпоративного транспорта, гибкие условия сотрудничества и современная техническая база."
                path="/cooperation"
            />

            <section className="cooperation-hero" style={{ backgroundImage: `url(${firstScreen})` }}>
                <div className="cooperation-hero-overlay" />
                <div className="cooperation-container">
                    <div className="cooperation-hero-inner">
                        <div className="cooperation-hero-stats">
                            {heroStats.map((item) => (
                                <article key={item.title} className="cooperation-stat-card">
                                    <h2>{item.title}</h2>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>

                        <div className="cooperation-hero-content">
                            <div className="cooperation-hero-logo-wrap">
                                <img src={logo} alt="ATV Auto" className="cooperation-hero-logo"  loading="lazy" />
                            </div>

                            <p className="cooperation-kicker">Сотрудничество</p>
                            <h1>Коммерческое предложение для компаний и автопарков</h1>
                            <p className="cooperation-hero-text">
                                <span className="span-item-right">«ATV-Aвто "Пулково"»</span> приглашает к
                                сотрудничеству организации и предлагает удобный формат комплексного обслуживания
                                транспорта с понятными условиями, современным оборудованием и индивидуальным подходом.
                            </p>

                            <div className="cooperation-hero-actions">
                                <a
                                    href="tel:+78123307115"
                                    className="cooperation-primary-btn"
                                    aria-label="Позвонить для обсуждения сотрудничества"
                                >
                                    Обсудить сотрудничество
                                </a>
                                <button
                                    type="button"
                                    className="cooperation-secondary-btn"
                                    onClick={handleScrollToOverview}
                                    aria-label="Прокрутить к условиям сотрудничества"
                                >
                                    Смотреть условия
                                </button>
                            </div>

                            <button
                                type="button"
                                className="cooperation-scroll-link"
                                onClick={handleScrollToRequisites}
                                aria-label="Прокрутить к реквизитам и контактам"
                            >
                                Реквизиты и контакты
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={overviewSectionRef} className="cooperation-section cooperation-section-light">
                <div className="cooperation-container">
                    <p className="cooperation-kicker">Формат сотрудничества</p>
                    <h2 className="cooperation-section-title">Что мы предлагаем партнерам</h2>

                    <div className="cooperation-offer-grid">
                        <article className="cooperation-story-card">
                            <p className="cooperation-card-kicker">Коммерческое предложение</p>
                            <h3>
                                Комплексное обслуживание транспорта на выгодных условиях и с понятной организацией
                                процесса
                            </h3>
                            <div className="cooperation-story-copy">
                                <p>
                                    Приглашаем посетить нашу станцию для{" "}
                                    <span className="span-item-right">заключения договора</span> на комплексное
                                    обслуживание автомобиля на самых выгодных условиях. Для каждого партнера подбираем
                                    удобный формат взаимодействия, прозрачную коммуникацию и гибкую систему скидок.
                                </p>
                                <p>
                                    <span className="span-item-right">Для корпоративных клиентов</span> действуют
                                    специальные предложения по сервисному сопровождению, а профессиональный подход
                                    команды ATV-Auto подтверждается уже {yearsInService} годами практики.
                                </p>
                            </div>
                        </article>

                        <div className="cooperation-categories-grid">
                            {vehicleCards.map((item) => (
                                <article key={item.title} className="cooperation-category-card">
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="cooperation-section cooperation-section-dark">
                <div className="cooperation-container">
                    <p className="cooperation-kicker cooperation-kicker-dark">Условия для организаций</p>
                    <h2 className="cooperation-section-title cooperation-section-title-dark">
                        Почему с нами удобно работать на постоянной основе
                    </h2>

                    <div className="cooperation-benefits-grid">
                        {partnershipBenefits.map((item) => (
                            <article key={item.title} className="cooperation-benefit-card">
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cooperation-section cooperation-section-light">
                <div className="cooperation-container">
                    <p className="cooperation-kicker">Материально-техническая база</p>
                    <h2 className="cooperation-section-title">Оснащение, на которое можно опереться</h2>

                    <div className="cooperation-capability-grid">
                        <div className="cooperation-capability-copy">
                            <p className="cooperation-card-kicker">ООО «Лидер»</p>
                            <h3>Современное оборудование для диагностики, ремонта и сопровождения транспорта</h3>
                            <p className="cooperation-capability-text">
                                Для технического обслуживания и ремонта автомобилей у нас подготовлена сильная
                                материально-техническая база. Это позволяет обслуживать разные категории транспорта в
                                одном месте и держать стабильное качество на каждом этапе работ.
                            </p>

                            <div className="cooperation-capability-stats">
                                {capabilityStats.map((item) => (
                                    <article key={item.title} className="cooperation-capability-stat">
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                    </article>
                                ))}
                            </div>
                        </div>

                        <article className="cooperation-equipment-card">
                            <p className="cooperation-card-kicker">Оснащение сервиса</p>
                            <ul className="cooperation-equipment-list">
                                {equipmentItems.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            <section
                ref={requisitesSectionRef}
                className="cooperation-section cooperation-section-light cooperation-section-final"
            >
                <div className="cooperation-container">
                    <p className="cooperation-kicker">Реквизиты</p>
                    <h2 className="cooperation-section-title">Контакты и юридическая информация</h2>

                    <div className="cooperation-final-grid">
                        <article className="cooperation-requisites-card">
                            <p className="cooperation-card-kicker">Наши реквизиты</p>
                            <ul className="cooperation-requisites-list">
                                {requisites.map((item, index) => (
                                    <li key={`${item}-${index}`}>{item}</li>
                                ))}
                            </ul>
                        </article>

                        <aside className="cooperation-brand-card">
                            <img src={logo} alt="ATV Auto" className="cooperation-brand-logo"  loading="lazy" />
                            <h3>Готовы обсудить формат работы под Ваши задачи</h3>
                            <p>
                                Рассчитаем удобный сценарий сервисного сопровождения, поможем с договором и ответим на
                                вопросы по условиям обслуживания корпоративного транспорта.
                            </p>

                            <div className="cooperation-contact-actions">
                                <a
                                    href="tel:+78123307115"
                                    className="cooperation-contact-link"
                                    aria-label="Позвонить по номеру +7 (812) 330-71-15"
                                >
                                    <img src={call} alt="" aria-hidden="true"  loading="lazy" />
                                    <span>+7 (812) 330-71-15</span>
                                </a>
                                <a
                                    href="mailto:ATV_Servis@mail.ru"
                                    className="cooperation-contact-link cooperation-contact-link-secondary"
                                    aria-label="Написать на электронную почту ATV Servis"
                                >
                                    <span>ATV_Servis@mail.ru</span>
                                </a>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Cooperation;