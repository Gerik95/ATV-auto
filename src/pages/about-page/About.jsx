import React from "react";
import FirstScreen from "../../components/first-screen/FirstScreen";
import firstScreen from "../../assets/images/about-us.JPG";
import './About.css';
import logo from "../../logo.png";
import { call } from "../../assets";
import { isMobile } from 'react-device-detect';
import cn from "classnames";


const About = () => {
    return (
        <div className={cn("", {
            mobile: isMobile
        })}>
            <FirstScreen itemScrollToggle={false} image={firstScreen} title='О НАС' />
            <div className="about">
                <div className="wrapper">
                    <div className="about_best block_wrap">
                        <div className="about_best_text">
                            <h4><span className='span-item-right'>Надёжные</span></h4>
                            <p>
                                Мы гарантируем, что автомобиль после обслуживания будет работать надёжно.
                                Мы хотим, чтобы вы и ваши близкие чувствовали себя в безопасности.
                            </p>
                            <h4><span className='span-item-right'>Оперативные</span></h4>
                            <p>
                                Выполняем все поставленные задачи быстро и в заявленные сроки.
                            </p>
                            <h4><span className='span-item-right'>Современные</span></h4>
                            <p>
                                Используем актуальные технологии и ставим интересы клиента на первое место.
                            </p>
                            <h4><span className='span-item-right'>Всегда готовы</span></h4>
                            <p>
                                Работаем без праздников, выходных, перерывов на обед.
                            </p>
                            <h4><span className='span-item-right'>Сертифицированная СТО</span></h4>
                            <p>
                                Наша станция прошла необходимые проверки, и имеет сертификат на техническое обслуживание
                                и ремонт автотранспортных средств, включая гарантийные автомобили.
                            </p>
                        </div>
                        <div className="about_best_logo">
                            <img src={logo} alt="ATV" />
                        </div>
                    </div>
                    <div className="about_company block_wrap">
                        <h2>О КОМПАНИИ</h2>
                        {/* <h4>Компания <span className='span-item-right'>«ATV-Aвто "Пулково"»</span> кроме автосервиса имеет шиномонтаж и авто-мойку
                        "Aqua Jet"
                        </h4> */}
                            <p className="cooperation_info_text">Дорогие друзья, <span className='span-item-right'>«ATV-Aвто "Пулково"»</span> на рынке
                            оказания услуг по ремонту легкового автотранспорта,коммерческого транспорта,мото и квадро техники с 2016 года.
                            Мы постоянно работаем над контролем качества. В нашем автосервисе используется
                            самое современное оборудование и инструменты. У нас работают лучшие профессионалы своего дела. 
                            
                            Также мы являемся официальным дилером, на территории г.Санкт-Петербурга и Ленинградской области, компании  
                            <span className='span-item-right'> ProLAMP</span> -
                            диодное освещение для авто-мото техники, и компании <span className='span-item-right'>Rusam</span> - Русские амортизаторы 
                            для грузовой, легковой и утилитарной техники.
                            В 2021 году мы сменили дислокацию и обустроили наш новый дом - мастерскую по адресу:
                            <br /> 📍СПБ, ул. Пилотов, д. 18, к. 5.</p>


                        <p className="cooperation_info_text">
                            Как все знают автомобиль - это сложный механизм, он может выходить их строя при длительной эксплуатации
                            и отсутствии должного ухода. Наши мастера окажут ему необходимое внимание и приведут вашу
                            машину в надлежащее состояние.
                            Специалисты <span className='span-item-right'>«ATV-Aвто "Пулково"»</span> уже ждут вас во всеоружии.
                            Мы хотим, чтобы каждый автомобиль радовал владельца четкой работой, а затраты на ремонт не оставляли дыры в кошельках клиентов.
                            <br /> Квалифицированный персонал СТО <span className='span-item-right'>«ATV-Aвто "Пулково"» </span> выполняют работы по устранению неисправностей транспорта, стараясь в кратчайшие сроки выявить причину и устранить неисправность.</p>

                        <p className="cooperation_info_text"></p>

                        <p className="cooperation_info_text">Рассчитать стоимость ремонта, записаться на диагностику
                            или задать любой интересующий Вас вопрос можно в Direct или по телефону: ⠀
                            <div className="contact_phone">
                                <img src={call} alt="call" />
                                <a href="tel:+78123307115">+7 (812) 330-71-15</a>
                            </div></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;