import React from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import atvLogo from '../../logo.png'
import atvBoardLogo from '../../assets/images/atv-snowboards-logo.webp'
import logo from '../../assets/images/atv-market-logo.webp'
import Seo from '../../components/seo/Seo'
import {
    conditionerIcon,
    electricCarIcon,
    engineIcon,
    quadIcon,
    headlightsIcon,
    suspensionCornerIcon,
    suspensionIcon,
    toningIcon,
    windshieldIcon,
    engineRepair,
    saleEnginesIcon,
    suspentionCorner,
    engineForSale1,
    engineForSale2,
    windshield, windshield2, windshield3, windshield4,
    conditioner1, conditioner2, conditioner3,
    headlightsPolish1, headlightsPolish2, headlightsPolish3, headlightsPolish4,
    toning, toning1, toning2, protect1, protect2, protect3,
    quadRepair1, quadRepair2, quadRepair3,
} from '../../assets'
import styles from './Home.module.css'

const firstScreen = '/first-screen.webp'

const servicesData = [
    { id: 'tuning', title: 'Продажа новых ДВС', desc: 'Продажа и профессиональная замена новых двигателей с гарантией качества.', icon: saleEnginesIcon },
    { id: 'repair', title: 'Ремонт двигателя', desc: 'Капитальный и регламентный ремонт бензиновых и дизельных двигателей.', icon: engineIcon },
    { id: 'quadRepair', title: 'Ремонт квадроциклов', desc: 'Профессиональный ремонт, обслуживание и тюнинг утилитарной техники.', icon: quadIcon },
    { id: 'corner', title: 'Развал-схождение', desc: 'Точная настройка геометрии подвески на современном стенде.', icon: suspensionCornerIcon },
    { id: 'electric', title: 'Электрика', desc: 'Поиск и устранение неисправностей электронных систем.', icon: electricCarIcon },
    { id: 'service', title: 'Техническое обслуживание', desc: 'Плановые работы по подвеске и замена расходных материалов.', icon: suspensionIcon },
    { id: 'glass', title: 'Ремонт стекол', desc: 'Ремонт сколов и трещин, замена лобового стекла.', icon: windshieldIcon },
    { id: 'climate', title: 'Обслуживание климат-систем', desc: 'Диагностика, заправка и профилактика системы кондиционирования.', icon: conditionerIcon },
    { id: 'headlights', title: 'Полировка фар', desc: 'Химическая полировка и восстановление прозрачности оптики.', icon: headlightsIcon },
    { id: 'toning', title: 'Тонировка и плёнка', desc: 'Нанесение тонировочных и защитных пленок для сохранения внешнего вида кузова.', icon: toningIcon },
]

const advantagesData = [
    { id: 1, title: 'Качество без компромиссов', text: 'Используем проверенные технологии и профессиональное оборудование.' },
    { id: 2, title: 'Опытные специалисты', text: 'Мастера с большим практическим опытом ремонта автомобилей.' },
    { id: 3, title: 'Соблюдение сроков', text: 'Ценим ваше время и выдаем автомобиль в согласованные сроки.' },
    { id: 4, title: 'Гарантия на работы', text: 'Предоставляем гарантию на выполненные работы и запчасти.' },
]

const processData = [
    { id: '01', title: 'Свяжитесь с нами', text: 'Позвоните или оставьте заявку на удобное время.' },
    { id: '02', title: 'Диагностика', text: 'Проводим детальный осмотр и согласовываем смету.' },
    { id: '03', title: 'Ремонт', text: 'Выполняем все работы по регламенту с контролем качества.' },
    { id: '04', title: 'Выдача автомобиля', text: 'Передаем авто с рекомендациями и гарантией.' },
]

const REVIEWS_PER_PAGE = 6
const EXIT_MS = 300
const STAGGER_MS = 60

const fallbackReviews = [
    { id: 1, text: 'Отличный сервис! Делал диагностику и ремонт подвески. Быстро, четко и по делу.', author: 'Алексей С.' },
    { id: 2, text: 'Нравится прозрачный подход к работам и аккуратная выдача машины после сервиса.', author: 'Марина К.' },
    { id: 3, text: 'Постоянно обслуживаю здесь свой автомобиль. Всегда без задержек и лишних услуг.', author: 'Игорь П.' },
]

const formatReviewText = (text) => {
    if (!text) return ''
    const normalizedText = text.replace(/\s+/g, ' ').trim()
    if (normalizedText.length <= 190) return normalizedText
    return `${normalizedText.slice(0, 187).trim()}...`
}

const servicesModalData = {
    repair: {
        title: 'Ремонт двигателя',
        intro: 'ATV-Авто «Пулково» предлагает услуги квалифицированных механиков с опытом работы в области диагностики и ремонта авто и мото техники по следующим видам работ:',
        list: [
            'Регламентное ТО',
            'Классическая замена масла и фильтров ДВС',
            'Экспресс замена масла ДВС',
            'Ремонт, замена и обслуживание ДВС',
            'Ремонт, замена и обслуживание МКПП, АКПП, РКПП, вариаторов и редукторов',
            'Ремонт, замена и обслуживание турбонагнетателей',
        ],
        note: 'Все работы выполняются с учётом рекомендаций и регламентов завода изготовителя, на современном оборудовании с использованием качественных расходных материалов.',
        images: [{ src: engineRepair, alt: 'Ремонт двигателя' }],
    },
    corner: {
        title: 'Развал-схождение',
        intro: 'ATV-Авто «Пулково» предлагает услуги квалифицированного мастера стенда регулировки углов развал-схождения. Мы рекомендуем пройти диагностику в следующих случаях:',
        list: [
            'Произведена сезонная замена резины',
            'Покупка нового комплекта резины',
            'После ДТП или сильных ударных нагрузок',
            'В случае некомфортного управления (тянет в сторону, руль не центрован)',
            'В случае неравномерного износа резины',
        ],
        price: [
            'Диагностика развала: 1 800 ₽',
            'Развал-схождение легкового автомобиля: 2 500 ₽',
            'Развал-схождение кроссовера: 2 800 ₽',
        ],
        note: 'Все работы выполняются с использованием современного 3D оборудования.',
        images: [{ src: suspentionCorner, alt: 'Развал-схождение' }],
    },
    electric: {
        title: 'Электрика',
        intro: 'ATV-Авто «Пулково» предлагает услуги квалифицированного электрика-диагноста по следующим видам работ:',
        list: [
            'Установка и замена сигнализаций, видеорегистраторов, головных устройств',
            'Диагностика и промывка форсунок',
            'Диагностика аккумуляторных батарей и их замена',
            'Компьютерная диагностика электрооборудования и всех систем автомобиля',
            'Удаление ошибок ЭБУ',
            'Прошивки, кодировки, настройки компьютерных систем ТС',
            'Восстановление работоспособности датчиков, узлов и агрегатов',
            'Заправка, диагностика и ремонт системы кондиционирования',
            'Настройка аудио, видео и других систем автомобиля',
        ],
        price: ['Диагностика ЭБУ: 1 500 ₽'],
        note: 'Все работы выполняются с использованием современного диагностического дилерского оборудования и мульти-брендовых сканеров.',
        images: [],
        icon: electricCarIcon,
    },
    service: {
        title: 'Техническое обслуживание',
        intro: 'ATV-Авто «Пулково» предлагает услуги квалифицированных мастеров в области ремонта и обслуживания ходовой части по следующим видам работ:',
        list: [
            'Комплексная диагностика ходовой части',
            'Замена пружин',
            'Замена шаровых опор',
            'Замена ступичных подшипников',
            'Замена пыльников',
            'Замена сайлентблоков и втулок',
            'Диагностика, обслуживание и замена амортизаторов',
            'Замена опор, подшипников и отбойников',
            'Ремонт, замена и обслуживание рулевых реек',
            'Комплексное обслуживание, ремонт и замена тормозной системы',
            'Проточка тормозных дисков без снятия',
        ],
        price: ['Диагностика ходовой: 1 000 ₽'],
        note: 'Все работы выполняются с использованием современного оборудования.',
        images: [],
        icon: suspensionIcon,
    },
    glass: {
        title: 'Ремонт стёкол',
        intro: 'Появился скол или трещина на лобовом стекле? ATV-Авто «Пулково» устранит дефект качественно и в короткие сроки.',
        body: 'Наши мастера отремонтируют повреждение или проведут замену лобового стекла — по окончании работ ваша машина вновь приобретёт презентабельный вид. Более 7 лет компания предоставляет услуги по ремонту и замене лобовых стёкол. Специалисты быстро ликвидируют как мелкие сколы, так и глубокие трещины, используя современные технологии и материалы. Замена и ремонт стёкол проводится в тёплом и чистом помещении — это гарантирует соблюдение температурного режима и долговечность результата.',
        images: [
            { src: windshield, alt: 'Ремонт стекла' },
            { src: windshield2, alt: 'Ремонт стекла' },
            { src: windshield3, alt: 'Ремонт стекла' },
            { src: windshield4, alt: 'Ремонт стекла' },
        ],
    },
    tuning: {
        title: 'Продажа новых ДВС',
        intro: 'ATV-Авто «Пулково» предлагает профессиональную продажу и замену новых двигателей. В наличии и под заказ доступны проверенные агрегаты для автомобилей из Азии, Европы и Кореи.',
        list: [
            'Подбор нового ДВС под ваш VIN и технические требования',
            'Двигатели в наличии и быстрая поставка под заказ',
            'Профессиональная замена ДВС с соблюдением регламентов',
            'Проверка, запуск и финальный контроль качества после установки',
        ],
        note: 'Работаем быстро, аккуратно и надёжно: предоставляем прозрачные условия, подтверждённое качество и гарантию на выполненные работы.',
        phone: '+79119566857',
        images: [
            { src: engineForSale1, alt: 'Новый двигатель в наличии' },
            { src: engineForSale2, alt: 'Двигатель для продажи и установки' },
        ],
    },
    climate: {
        title: 'Обслуживание климат-систем',
        body: 'Предлагаем ряд услуг по уходу за климатической системой вашего автомобиля: заправка кондиционера, диагностика системы и устранение выявленных неполадок. Кондиционеры заправляются фреоном — при заправке проводится комплексный осмотр системы на целостность, проверяется герметичность патрубков и мест соединений. При обнаружении проблем осуществляется ремонт с заменой повреждённых узлов. Наши специалисты менее чем за час обновят хладагент климатической установки любого авто.',
        price: ['Заправка кондиционера: от 3 300 ₽'],
        note: 'Все работы выполняются с использованием современного оборудования.',
        images: [
            { src: conditioner1, alt: 'Обслуживание кондиционера' },
            { src: conditioner2, alt: 'Обслуживание кондиционера' },
            { src: conditioner3, alt: 'Обслуживание кондиционера' },
        ],
    },
    headlights: {
        title: 'Полировка фар',
        intro: 'ATV-Авто «Пулково» предлагает услуги по восстановлению и уходу за головной оптикой вашего автомобиля.',
        body: 'Восстановление прозрачности оптики — химическая полировка фар — крайне востребованная услуга. Помутнение, мелкие трещины и пескоструй от дорожного гравия приводят к плохому, рассеянному свету. В процессе химической полировки на поверхность фары наносится разогретый полимер, который вступает в реакцию с пластиком и превращается в защитное покрытие, полностью повторяющее заводское. Результат — практически новая фара с отличной светопропускной способностью и сохранённой фокусировкой.',
        images: [
            { src: headlightsPolish1, alt: 'Фары до полировки' },
            { src: headlightsPolish2, alt: 'Фары после полировки' },
            { src: headlightsPolish3, alt: 'Полировка фар: результат 1' },
            { src: headlightsPolish4, alt: 'Полировка фар: результат 2' },
        ],
    },
    toning: {
        title: 'Тонировка и плёнка',
        intro: 'ATV-Авто «Пулково» предлагает услуги по нанесению защитных и тонировочных плёнок на ваш автомобиль.',
        body: 'Сколы и царапины от гравия, весенняя пыль, постоянная грязь с дорог — всё это портит внешний вид автомобиля. Обезопасить кузов поможет наиболее эффективная технология антигравийной защиты — оклейка защитной плёнкой. При мелких ДТП вы не тратите время на обновление лакокрасочного покрытия. Антигравийное пленочное покрытие сохранит исходную глубину цвета краски и защитит её от воздействия окружающей среды.',
        images: [
            { src: toning, alt: 'Тонировка' },
            { src: toning1, alt: 'Защитная плёнка' },
            { src: toning2, alt: 'Защитная плёнка' },
            { src: protect1, alt: 'Антигравийная защита' },
            { src: protect2, alt: 'Антигравийная защита' },
            { src: protect3, alt: 'Антигравийная защита' },
        ],
    },
    quadRepair: {
        title: 'Ремонт квадроциклов',
        intro: 'ATV-Авто «Пулково» выполняет профессиональный ремонт, обслуживание и тюнинг утилитарной техники с учетом реальных условий эксплуатации.',
        body: 'Проводим комплексную диагностику узлов и агрегатов, устраняем неисправности двигателя, трансмиссии и ходовой части, обслуживаем тормозную систему и электрооборудование. Выполняем сезонное техническое обслуживание, установку и настройку дополнительного оборудования, а также практичный тюнинг под задачи владельца. Работаем аккуратно, используем качественные расходные материалы и контролируем результат на каждом этапе.',
        images: [
            { src: quadRepair1, alt: 'Ремонт и обслуживание квадроцикла' },
            { src: quadRepair2, alt: 'Квадроцикл после сервисных работ' },
            { src: quadRepair3, alt: 'Профессиональный ремонт квадроциклов' },
        ],
    },
}

const ModalSlider = ({ images }) => {
    const [idx, setIdx] = React.useState(0)
    const [enterDir, setEnterDir] = React.useState(null)

    const navigate = (newIdx, dir) => {
        setEnterDir(dir)
        setIdx(newIdx)
    }

    const handlePrev = () => navigate((idx - 1 + images.length) % images.length, 'left')
    const handleNext = () => navigate((idx + 1) % images.length, 'right')

    React.useEffect(() => {
        if (!images || images.length <= 1) return undefined

        const autoplayTimer = setInterval(() => {
            setEnterDir('right')
            setIdx((prevIdx) => (prevIdx + 1) % images.length)
        }, 10000)

        return () => clearInterval(autoplayTimer)
    }, [images])

    return (
        <div className={styles.modalSlider}>
            <div className={styles.sliderImgWrap} key={idx}>
                <img
                    src={images[idx].src}
                    alt={images[idx].alt}
                    className={`${styles.sliderImg} ${
                        enterDir === 'right' ? styles.sliderFromRight
                        : enterDir === 'left' ? styles.sliderFromLeft
                        : ''
                    }`}
                    loading="lazy"
                />
            </div>
            {images.length > 1 && (
                <>
                    <button
                        type="button"
                        className={`${styles.sliderArrow} ${styles.sliderArrowPrev}`}
                        onClick={handlePrev}
                        aria-label="Предыдущее фото"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        className={`${styles.sliderArrow} ${styles.sliderArrowNext}`}
                        onClick={handleNext}
                        aria-label="Следующее фото"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>
                    <div className={styles.sliderDots} role="tablist">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                role="tab"
                                aria-selected={i === idx}
                                className={`${styles.sliderDot} ${i === idx ? styles.sliderDotActive : ''}`}
                                onClick={() => navigate(i, i > idx ? 'right' : 'left')}
                                aria-label={`Фото ${i + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

const ServiceModal = ({ service, onClose }) => {
    const [isClosing, setIsClosing] = React.useState(false)

    const handleClose = React.useCallback(() => {
        setIsClosing(true)
        setTimeout(onClose, 300)
    }, [onClose])

    React.useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') handleClose()
        }
        document.addEventListener('keydown', handleEsc)

        const scrollY = window.scrollY
        document.body.style.position = 'fixed'
        document.body.style.top = `-${scrollY}px`
        document.body.style.left = '0'
        document.body.style.right = '0'
        document.body.classList.add('modal-open')

        return () => {
            document.removeEventListener('keydown', handleEsc)
            document.body.style.position = ''
            document.body.style.top = ''
            document.body.style.left = ''
            document.body.style.right = ''
            document.body.classList.remove('modal-open')
            window.scrollTo({ top: scrollY, behavior: 'instant' })
        }
    }, [handleClose])

    const hasImages = service.images && service.images.length > 0

    return createPortal(
        <div
            className={`${styles.modalBackdrop} ${isClosing ? styles.modalBackdropExit : ''}`}
            onClick={handleClose}
            role="dialog"
            aria-modal="true"
            aria-label={service.title}
        >
            <div
                className={`${styles.modalPanel} ${isClosing ? styles.modalPanelExit : ''} ${!hasImages ? styles.modalPanelNarrow : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    className={styles.modalClose}
                    onClick={handleClose}
                    aria-label="Закрыть"
                />

                <div className={`${styles.modalInner} ${hasImages ? styles.modalInnerWithGallery : ''}`}>
                    {hasImages && <ModalSlider images={service.images} />}

                    <div className={styles.modalContent}>
                        {!hasImages && service.icon && (
                            <img src={service.icon} alt="" aria-hidden="true" className={styles.modalContentIcon} />
                        )}
                        <span className={styles.modalKicker}>Наши услуги</span>
                        <h2 className={styles.modalTitle}>{service.title}</h2>

                        {service.intro && <p className={styles.modalIntro}>{service.intro}</p>}
                        {service.body && <p className={styles.modalBody}>{service.body}</p>}

                        {service.list && service.list.length > 0 && (
                            <ul className={styles.modalList}>
                                {service.list.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        )}

                        {service.price && service.price.length > 0 && (
                            <div className={styles.modalPrices}>
                                {service.price.map((p, i) => (
                                    <span key={i} className={styles.modalPriceTag}>{p}</span>
                                ))}
                            </div>
                        )}

                        {service.note && <p className={styles.modalNote}>{service.note}</p>}

                        <a
                            href={`tel:${service.phone || '+78123307115'}`}
                            className={styles.modalCallBtn}
                        >
                            Позвонить нам
                        </a>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    )
}

const Home = () => {
    const processSectionRef = React.useRef(null)
    const servicesSectionRef = React.useRef(null)
    const [allReviews, setAllReviews] = React.useState([])
    const [pageIdx, setPageIdx] = React.useState(0)
    const [phase, setPhase] = React.useState('idle')
    const [activeServiceId, setActiveServiceId] = React.useState(null)

    const totalPages = Math.max(1, Math.ceil(allReviews.length / REVIEWS_PER_PAGE))

    const visibleReviews = React.useMemo(() => {
        if (!allReviews.length) return fallbackReviews
        const start = pageIdx * REVIEWS_PER_PAGE
        return allReviews.slice(start, start + REVIEWS_PER_PAGE)
    }, [allReviews, pageIdx])

    const handleScrollToProcess = () => {
        processSectionRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    const handleOpenEngineSales = () => {
        servicesSectionRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })

        setTimeout(() => {
            setActiveServiceId('tuning')
        }, 450)
    }

    React.useEffect(() => {
        let isMounted = true

        const loadReviews = async () => {
            try {
                const response = await fetch('/yandex-reviews.json')
                if (!response.ok) return
                const data = await response.json()
                const preparedReviews = data.map((review) => ({
                    id: review.id,
                    author: review.author,
                    text: formatReviewText(review.text),
                }))
                if (isMounted && preparedReviews.length) {
                    setAllReviews(preparedReviews)
                }
            } catch {
                // Keep fallback reviews when source is unavailable.
            }
        }

        loadReviews()
        return () => { isMounted = false }
    }, [])

    React.useEffect(() => {
        if (totalPages <= 1) return

        let switchTimer = null
        let idleTimer = null

        const SWITCH_DELAY = EXIT_MS + STAGGER_MS * (REVIEWS_PER_PAGE - 1) + 60
        const IDLE_DELAY = EXIT_MS + STAGGER_MS * (REVIEWS_PER_PAGE - 1) + 100

        const runTransition = () => {
            setPhase('out')
            switchTimer = setTimeout(() => {
                setPageIdx((prev) => (prev + 1) % totalPages)
                setPhase('in')
                idleTimer = setTimeout(() => { setPhase('idle') }, IDLE_DELAY)
            }, SWITCH_DELAY)
        }

        const interval = setInterval(runTransition, 10000)
        return () => {
            clearInterval(interval)
            clearTimeout(switchTimer)
            clearTimeout(idleTimer)
        }
    }, [totalPages])

    return (
        <main className={styles.page}>
            <Seo
                title="Автосервис в Санкт-Петербурге | ATV-Auto Пулково"
                description="ATV-Auto Пулково: автосервис в Санкт-Петербурге, ремонт двигателя и КПП, развал-схождение, тюнинг, обслуживание квадроциклов и снегоходов."
                path="/"
            />

            <section className={styles.hero} style={{ backgroundImage: `url(${firstScreen})` }}>
                <div className={styles.heroOverlay} />
                <div className={styles.container}>
                    <div className={styles.heroInner}>
                        <div className={styles.heroInfo}>
                            <div className={styles.heroLogoWrap}>
                                <img src={atvLogo} alt="ATV Auto" className={styles.heroLogo} />
                            </div>
                            <h1>Профессиональный автосервис</h1>
                            <p>Комплексная диагностика и качественный ремонт любых марок автомобилей с гарантией.</p>
                            <div className={styles.heroButtons}>
                                <a href="tel:+78123307115" className={styles.primaryBtn}>Записаться на сервис</a>
                                <button type="button" className={styles.secondaryBtn} onClick={handleScrollToProcess}>Смотреть этапы</button>
                            </div>
                            <div className={styles.heroInlineCards}>
                                <Link to="/motoboard" className={styles.heroInlineCard}>
                                    <img src={atvBoardLogo} alt="Магазин мототехники" loading="lazy" />
                                    <span>МАГАЗИН МОТОТЕХНИКИ</span>
                                </Link>
                                <Link to="/shop" className={styles.heroInlineCard}>
                                    <img src={logo} alt="Запчасти" loading="lazy" />
                                    <span>ЗАПЧАСТИ</span>
                                </Link>
                                <button
                                    type="button"
                                    className={`${styles.heroInlineCard} ${styles.heroInlineCardNew}`}
                                    onClick={handleOpenEngineSales}
                                    aria-label="Продажа новых ДВС"
                                >
                                    <img src={saleEnginesIcon} alt="Продажа новых ДВС" loading="lazy" />
                                    <span>ПРОДАЖА НОВЫХ ДВС</span>
                                    <span className={styles.heroInlineRibbon} aria-hidden="true">NEW</span>
                                </button>
                            </div>
                        </div>

                        <div className={styles.heroStats}>
                            <article className={styles.statCard}><h3>10+ лет</h3><p>на рынке автосервисных услуг</p></article>
                            <article className={styles.statCard}><h3>2 000+</h3><p>довольных клиентов и их автомобилей</p></article>
                            <article className={styles.statCard}><h3>Гарантия</h3><p>на все виды работ и запчасти</p></article>
                            <article className={styles.statCard}><h3>Современное оборудование</h3><p>опытные сертифицированные мастера</p></article>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={servicesSectionRef} className={styles.sectionLight}>
                <div className={styles.container}>
                    <p className={styles.kicker}>Наши услуги</p>
                    <h2 className={styles.sectionTitle}>Что мы делаем</h2>
                    <div className={styles.servicesGrid}>
                        {servicesData.map((item) => (
                            <article key={item.id} className={styles.serviceCard}>
                                <img src={item.icon} alt="" aria-hidden="true" loading="lazy" />
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                <button
                                    type="button"
                                    className={styles.detailBtn}
                                    onClick={() => setActiveServiceId(item.id)}
                                    aria-label={`Подробнее об услуге: ${item.title}`}
                                >
                                    <span>
                                        Подробнее
                                        <span className={styles.detailBtnArrow} aria-hidden="true">→</span>
                                    </span>
                                </button>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.sectionDark}>
                <div className={styles.container}>
                    <p className={`${styles.kicker} ${styles.kickerDark}`}>Почему выбирают нас</p>
                    <h2 className={`${styles.sectionTitle} ${styles.sectionTitleDark}`}>Наши преимущества</h2>
                    <div className={styles.advantagesGrid}>
                        {advantagesData.map((item) => (
                            <article key={item.id} className={styles.advantageCard}>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="process" ref={processSectionRef} className={styles.sectionLight}>
                <div className={styles.container}>
                    <p className={styles.kicker}>Как мы работаем</p>
                    <h2 className={styles.sectionTitle}>Простой и понятный процесс</h2>
                    <div className={styles.processGrid}>
                        {processData.map((item) => (
                            <article key={item.id} className={styles.processCard}>
                                <span>{item.id}</span>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.sectionDark}>
                <div className={styles.container}>
                    <p className={`${styles.kicker} ${styles.kickerDark}`}>Отзывы клиентов</p>
                    <h2 className={`${styles.sectionTitle} ${styles.sectionTitleDark}`}>Что о нас говорят</h2>
                    <div className={styles.reviewsGrid}>
                        {visibleReviews.map((item, idx) => {
                            const cardClass = [
                                styles.reviewCard,
                                phase === 'out' ? styles.reviewCardExit : '',
                                phase === 'in' ? styles.reviewCardEnter : '',
                            ]
                                .filter(Boolean)
                                .join(' ')

                            return (
                                <article
                                    key={`${pageIdx}-${item.id}`}
                                    className={cardClass}
                                    style={{ animationDelay: `${idx * STAGGER_MS}ms` }}
                                >
                                    <span className={styles.reviewStars}>★★★★★</span>
                                    <p>{item.text}</p>
                                    <h3>{item.author}</h3>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </section>

            {activeServiceId && servicesModalData[activeServiceId] && (
                <ServiceModal
                    key={activeServiceId}
                    service={servicesModalData[activeServiceId]}
                    onClose={() => setActiveServiceId(null)}
                />
            )}
        </main>
    )
}

export default Home
