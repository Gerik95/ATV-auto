import React from 'react';
import { telegram, instagram, whatsapp, vk, call } from '../../assets';
import { SOCIAL_CONTACTS, PHONE_NUMBERS } from '../../data/contacts.data';

const ICON_MAP = {
    telegram,
    instagram,
    whatsapp,
    vk,
};

const socialDescriptions = {
    Telegram: 'Быстрая переписка',
    Instagram: 'Новости и работы',
    WhatsApp: 'Удобный чат',
    VK: 'Обновления и связь',
};

const phoneDescriptions = [
    'Основная линия сервиса',
    'Мобильный номер для связи',
    'Запись и уточнение деталей',
];

const supportTopics = [
    'Запись на диагностику и обслуживание',
    'Уточнение стоимости и сроков работ',
    'Консультация по маршруту и времени визита',
];

const formatPhoneNumber = (phone) => {
    const digits = phone.replace(/\D/g, '');

    if (digits.length === 11 && digits.startsWith('7')) {
        return `+7 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
    }

    return phone;
};

export const SocialLinks = () => (
    <article className="contacts-info-card">
        <p className="contacts-card-kicker">Соцсети и мессенджеры</p>
        <h3>Напишите нам онлайн</h3>
        <div className="contacts-social-grid">
            {SOCIAL_CONTACTS.map(({ name, url, label }) => (
                <a
                    key={name}
                    className="contacts-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={url}
                    title={label}
                    aria-label={label}
                >
                    <span className="contacts-social-icon-wrap">
                        <img src={ICON_MAP[name]} alt="" aria-hidden="true"  loading="lazy" />
                    </span>
                    <span className="contacts-social-copy">
                        <strong>{label}</strong>
                        <small>{socialDescriptions[label] || 'Онлайн-связь'}</small>
                    </span>
                </a>
            ))}
        </div>
    </article>
);

export const PhoneContacts = () => (
    <article className="contacts-info-card">
        <p className="contacts-card-kicker">Телефоны</p>
        <h3>Позвоните напрямую</h3>
        <div className="contacts-phone-list">
            {PHONE_NUMBERS.map((phone, index) => (
                <a
                    key={phone}
                    className="contacts-phone-card"
                    href={`tel:${phone}`}
                    aria-label={`Позвонить по номеру ${formatPhoneNumber(phone)}`}
                >
                    <span className="contacts-phone-icon">
                        <img src={call} alt="" aria-hidden="true"  loading="lazy" />
                    </span>
                    <span className="contacts-phone-copy">
                        <strong>{formatPhoneNumber(phone)}</strong>
                        <small>{phoneDescriptions[index] || 'Контактный номер'}</small>
                    </span>
                </a>
            ))}
        </div>
    </article>
);

export const ContactsHeader = () => (
    <article className="contacts-info-card contacts-info-card-large">
        <p className="contacts-card-kicker">Поддержка ATV-Auto</p>
        <h3>Ответим быстро и по делу</h3>
        <p className="contacts-info-text">
            Если хотите записаться на сервис, уточнить стоимость работ, рассказать о проблеме или заранее проложить
            маршрут до мастерской, мы подскажем удобный следующий шаг без лишней путаницы.
        </p>
        <ul className="contacts-purpose-list">
            {supportTopics.map((topic) => (
                <li key={topic}>{topic}</li>
            ))}
        </ul>
    </article>
);

export const ContactsMap = ({ src }) => (
    <div className="contacts-map-shell">
        <iframe
            src={src}
            className="contacts-map-frame"
            frameBorder="0"
            title="Карта местоположения ATV-Auto"
            loading="lazy"
        />
    </div>
);

