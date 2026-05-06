import React from 'react';
import { Helmet } from 'react-helmet';
import { PHONE_NUMBERS, SOCIAL_CONTACTS, YANDEX_MAP_URL } from '../../data/contacts.data';

const SITE_NAME = 'ATV-Auto Пулково';
const SITE_URL = 'https://atv-auto.ru';
const DEFAULT_DESCRIPTION =
    'ATV-Auto Пулково: автосервис, магазин автозапчастей, шиномонтаж, автомойка и обслуживание транспорта в Санкт-Петербурге.';
const DEFAULT_IMAGE = `${SITE_URL}/logo512.png`;

const buildUrl = (path = '/') => {
    if (!path || path === '/') {
        return SITE_URL;
    }

    return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
};

const formatPhoneForSchema = (phone) => {
    const digits = String(phone).replace(/\D/g, '')
    // +7XXXXXXXXXX (11 digits)
    if (digits.length === 11 && digits.startsWith('7')) {
        const area = digits.slice(1, 4)
        const mid = digits.slice(4, 7)
        const end1 = digits.slice(7, 9)
        const end2 = digits.slice(9, 11)
        return `+7-${area}-${mid}-${end1}-${end2}`
    }
    return phone
}

const Seo = ({
    title = SITE_NAME,
    description = DEFAULT_DESCRIPTION,
    path = '/',
    image = DEFAULT_IMAGE,
    robots = 'index,follow',
    type = 'website',
}) => {
    const canonicalUrl = buildUrl(path);
    const resolvedImage = image.startsWith('http') ? image : buildUrl(image);

    const primaryPhone = PHONE_NUMBERS[0] || '+78123307115'
    const primaryTelephone = formatPhoneForSchema(primaryPhone)
    const contactPhones = PHONE_NUMBERS.slice(1)

    const sameAs = SOCIAL_CONTACTS.map((c) => c.url)

    // JSON-LD LocalBusiness/AutoRepair для сниппетов и машинного понимания контактов.
    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'AutoRepair',
        name: SITE_NAME,
        url: SITE_URL + '/',
        image: DEFAULT_IMAGE,
        telephone: primaryTelephone,
        contactPoint: contactPhones.map((p) => ({
            '@type': 'ContactPoint',
            telephone: formatPhoneForSchema(p),
            contactType: 'запись на сервис',
            areaServed: 'Санкт-Петербург',
            availableLanguage: ['ru'],
        })),
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'ул. Пилотов, д. 18, к. 5',
            addressLocality: 'Санкт-Петербург',
            postalCode: '196210',
            addressCountry: 'RU',
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '10:00',
                closes: '21:00',
            },
        ],
        areaServed: 'Санкт-Петербург',
        priceRange: '$$',
        serviceType: ['Автосервис', 'Шиномонтаж', 'Автомойка', 'Автозапчасти'],
        hasMap: YANDEX_MAP_URL,
        sameAs,
        potentialAction: {
            '@type': 'CallAction',
            target: `tel:${primaryPhone}`,
        },
    }

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="robots" content={robots} />
            <link rel="canonical" href={canonicalUrl} />

            <meta property="og:locale" content="ru_RU" />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={SITE_NAME} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={resolvedImage} />
            <meta property="og:image:alt" content={`${SITE_NAME} логотип`} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={resolvedImage} />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
        </Helmet>
    );
};

export default Seo;
