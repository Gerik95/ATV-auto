import React from 'react';
import './Motoboard.css';
import {Helmet} from "react-helmet";
import firstScreen from "../../assets/images/motoboard-first-screen.webp";
import logo from "../../logo.png";
import sibmaster3 from "../../assets/images/sibmaster3.png"
import sibmasterPro from "../../assets/images/sibmasterPro.png"
import FirstScreen from "../../components/first-screen/FirstScreen";
import Card from "./Card";
import simbaster3 from "./json/sibmaster3.json"
import simbasterPro from "./json/sibmasterPro.json"


const Motoboard = () => {
    return (
        <>
            <Helmet>
                <title>ATV-Auto - Мото-Сноуборды </title>
                <meta name="description"
                      content="Автосервис Санкт-Петербург Пулково Мото-Сноуборды дилер Сибмастер мотосноуборд мотособака Sibmaster"/>
            </Helmet>
            <FirstScreen itemScrollToggle={false} image={firstScreen} title='МОТО-СНОУБОРДЫ' logo={logo}/>
            <div className="contact_us">
                <div className="wrapper">
                    <div className="contact_grid">
                        <div className="description">
                            <h3 className="title-text">Мы продаем новые средства передвижения для активных
                                людей, <br/> чтобы их впечатления измерялись эмоциями, а не расстоянием.</h3>
                            <div className="motoboard-block">
                                <div className="about_best_text small-text">
                                    <h4><span className='span-item-right'>Ведущее производство</span></h4>
                                    <p className='small-text'>
                                        Мы являемся дилером ведущего производства профессиональных мотосноубордов в
                                        России.
                                        Данный завод оборудован промышленной линией сборки полного цикла и контроля
                                        качества.
                                    </p>
                                    <h4><span className='span-item-right'>Преданные фанаты</span></h4>
                                    <p className='small-text'>
                                        Мы полюбили мотосноубординг и хотим объединять спортивных людей и
                                        единомышленников,
                                        вокруг этого продукта, прежде всего, для настоящих профессионалов и экспертов
                                        этого направления.
                                    </p>
                                    <h4><span className='span-item-right'>Профессиональный мотосноуборд</span></h4>
                                    <p className='small-text'>
                                        Представленный у нас профессиональный мотосноуборд Sibmaster NEW 2022 перенял
                                        все самое лучшее от двух устройств: от снегохода — независимость в передвижении,
                                        от сноуборда — спортивную направленность и развлечения.
                                    </p>
                                    <h4><span className='span-item-right'>Преимущества</span></h4>
                                    <p className='small-text'>
                                        Компактный размер, легкость в управлении, а также отсутствие регистрации делает
                                        его доступным каждому.
                                        Именно поэтому большинство покупателей выбирает мотосноуборды нашего
                                        производства.
                                    </p>
                                </div>
                                <div className="about_best_logo">
                                    <img src={sibmaster3} alt="Moto snowboard"/>
                                </div>
                            </div>
                        </div>
                        <video className='responsive-video' autoPlay loop muted>
                            <source src="https://motosnoubord.ru/wp-content/themes/sibmaster/video/promo-video.mp4"/>
                        </video>
                        <div className="catalog">
                            <h1 className="title-text">Каталог</h1>
                            <div className="catalog-cards">
                                <Card title='SIBMASTER 3 (2024)' subtitle='Двигатель: 9 л.с.' boardImage={sibmaster3} technicalData={simbaster3} />
                                <Card title='SIBMASTER PRO' subtitle='Двигатель: 8 л.с.' boardImage={sibmasterPro} technicalData={simbasterPro}/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Motoboard;