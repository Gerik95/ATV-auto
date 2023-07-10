import React from 'react';
import CustomCarousel from '../../components/custom-carousel/CustomCarousel';
import {windshieldCarouselData} from '../../data/windshield-carousel.data';
import {call} from '../../assets';

const Windshield = () => {
    return (
        <div className="tires section-item">
            <div className="section-item-left">
                <CustomCarousel items={windshieldCarouselData}/>
            </div>
            <div className="section-item-right">
                <div className="section-item-left-header">
                    <p className="item-right-h">
                        Появился скол или трещина на лобовом стекле вашего автомобиля?<br/> <span className="span-item-right">ATV-Авто "Пулково"</span><br/>
                        предлагают Вам устранить дефект качественно и в короткие сроки :
                    </p>
                    <p>
                        Не расстраивайтесь! Наши мастера отремонтируют повреждение или проведут замену лобового
                        стекла,по окончании ремонтных работы ваша машина вновь приобретет презентабельный вид.
                        Наша компания свыше 7 лет предоставляет услуги по ремонту и замене лобовых стёкол. У нас
                        доступные цены. Специалисты быстро ликвидируют как мелкие сколы, так глубокие трещины, используя
                        собственные разработки, современные технологии и материалы.Замена и ремонт стёкол автомобиля
                        проводится в тёплом и чистом помещении, что гарантирует соблюдение температурного режима и
                        долговечность полученного результата.
                    </p>
                    <div className="contact_phone alternative">
                        <img src={call} alt="call"/>
                        <a href="tel:3307115">Нажмите чтобы позвонить нам</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Windshield;