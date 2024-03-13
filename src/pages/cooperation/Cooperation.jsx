import React from "react";
import FirstScreen from "../../components/first-screen/FirstScreen";
import firstScreen from "../../assets/images/cooperation.JPG";
import './Cooperation.css';
import logo from "../../logo.png";
import { isMobile } from 'react-device-detect';
import cn from "classnames";
import {Helmet} from "react-helmet";


const Cooperation = () => {
    return (
        <div className={cn("", {
            mobile: isMobile
        })}>
            <Helmet>
                <title>ATV-Auto - Сотрудничество </title>
                <meta name="description"
                      content="Автосервис Санкт-Петербург Пулково Коммерческое предложение Легковых автомобилей российских и зарубежных марок"/>
            </Helmet>
            <FirstScreen itemScrollToggle={false} image={firstScreen} title='СОТРУДНИЧЕСТВО' logo={logo}/>
            <div className="cooperation">
                <div className="wrapper">
                    <div className="cooperation_info block_wrap">
                        <h2 className="cooperation_info_title">Коммерческое предложение</h2>
                        <ul className="cooperation_info_list"> <h4>Компания <span className='span-item-right'>«ATV-Aвто "Пулково"»</span> приглашает к сотрудничеству организации и предлагает широкий спектр
                            услуг современного автотехсервиса. В нашем сервисном центре вы можете воспользоваться услугами технического
                            осмотра, диагностики и ремонта:</h4>
                            <li className="cooperation_info_items">Легковых автомобилей российских и зарубежных марок;</li>
                            <li className="cooperation_info_items">Внедорожников;</li>
                            <li className="cooperation_info_items">Микроавтобусов;</li>
                            <li className="cooperation_info_items">Грузовиков-малотоннажников массой до 3,5 тонн.</li>
                            <li className="cooperation_info_items">Мотоциклов</li>
                            <li className="cooperation_info_items">Квадроциклов</li>
                            <li className="cooperation_info_items">Снегоходов</li>
                            <li className="cooperation_info_items">Прицепов для легковых автомобилей</li>
                        </ul>




                        <p className="cooperation_info_text"> Приглашаем Вас, посетить нашу станцию для <span className='span-item-right'>заключения Договора</span> на комплексное облуживание автомобиля на самых выгодных условиях.
                            Исключительно индивидуальный подход к каждому клиенту и гибкая система скидок!
                            <br /><span className='span-item-right'>Для корпоративных клиентов имеются специальные предложения.</span></p>

                        <p className="cooperation_info_text"><span className='span-item-right'>«ATV-Aвто "Пулково"»</span> — это профессиональный подход к ремонту на протяжении {new Date().getFullYear() - 2016} лет!</p>

                        <ul className="cooperation_info_list"> <h4>Общество с ограниченной ответственностью <span className='span-item-right'>"Лидер"</span> готово:</h4>
                            <li className="cooperation_info_items">1. Оказывать услуги по ремонту и техническому обслуживанию автомобилей, с использованием собственного оборудования, расходных материалов и запасных частей, рекомендованных к использованию заводом – изготовителем. </li>
                            <li className="cooperation_info_items">2. Осуществлять все виды ремонтных работ в соответствии с техническими условиями, установленными для соответствующих марок автомобилей. </li>
                            <li className="cooperation_info_items">3. Осуществлять предварительное диагностирование объемов работ, а также количество и номенклатуру запасных частей при внешнем осмотре без разборки, с применением диагностического оборудования, без дополнительной оплаты. </li>
                            <li className="cooperation_info_items">4. Бесплатно предоставить хранение автомобилей на охраняемой территории на время ожидания ремонта. </li>
                            <li className="cooperation_info_items">5. Предоставить возможность осуществления контроля, за выполняемыми работами по ремонту и техническому обслуживанию автотранспорта.</li>
                            <li className="cooperation_info_items">6. Предоставить квалифицированный персонал для выполнения в полном объеме всех работ по ТО и ремонту автотранспорта. </li>
                            <li className="cooperation_info_items">7. По требованию предоставить сертификаты соответствия на техническое обслуживание и ремонт транспортных средств.</li>
                        </ul>

                        <ul className="cooperation_info_list"> <h4> Для проведения технического обслуживания и ремонта автомобилей <span className='span-item-right'>ООО «Лидер»</span>  имеет следующую материально-техническую базу:</h4>
                            <li className="cooperation_info_items">- 4 двухстоечных подъемника (для ремонта любого легкового и коммерческого автотранспорта, с удлиненной колесной базой и высокой крышей);</li>
                            <li className="cooperation_info_items">- 1 четырех стоечный подъемник (для коммерческого автотранспорта); </li>
                            <li className="cooperation_info_items">- 3D стенд для измерения и регулировки углов развала/схождения колес автомобилей; </li>
                            <li className="cooperation_info_items">- Аппарат для классической и экспресс замены масла в двигателе;</li>
                            <li className="cooperation_info_items">- Оборудование для ремонта и замены двигателей автомобилей; </li>
                            <li className="cooperation_info_items">- Оборудование для ремонта КПП и АКПП автомобилей; </li>
                            <li className="cooperation_info_items">- Стенд для измерения внутреннего давления в рабочих системах автомобиля;</li>
                            <li className="cooperation_info_items">- Аппарат для замены любых трансмиссионных жидкостей в автомобилях; </li>
                            <li className="cooperation_info_items">- Аппарат для проведения сварочных работ любой сложности; </li>
                            <li className="cooperation_info_items">- Аппарат для проведения аргонной сварки любой сложности; </li>
                            <li className="cooperation_info_items">- Компьютерный стенд для проведения диагностики и выявления неисправностей рабочих  систем автомобилей; </li>
                            <li className="cooperation_info_items">- Стенд для проверки электрических систем автомобилей; </li>
                            <li className="cooperation_info_items">- Различные виды специального инструмента для проведения ТО и ремонта автомобилей;</li>
                            <li className="cooperation_info_items">- Стенд для проточки тормозных дисков автомобилей; </li>
                            <li className="cooperation_info_items">- Станок для правки и ремонта всех видов колесных дисков автомобилей; </li>
                            <li className="cooperation_info_items">- Стенд для проведения диагностики, выявления неисправностей и заправки системы кондиционирования автомобиля;</li>
                            <li className="cooperation_info_items">- Эвакуатор для доставки автомобилей к месту ремонта; </li>
                        </ul>
                    </div>

                    <div className="requisites block_wrap">
                        <ul className="requisites_list"> <h4>Наши реквизиты :</h4>
                            <li className="requisites_items"> <span className='span-item-right'>ООО "Лидер"</span></li>

                            <li className="requisites_items">ИНН 7810637217 </li>

                            <li className="requisites_items">КПП: 781001001  ОГРН 1167847495232</li>

                            <li className="requisites_items">196210, Россия, г.Санкт-Петербург, вн. тер. г. муниципальный </li>

                            <li className="requisites_items">округ Пулковский меридиан, ул.Пилотов 18, корпус 5, стр.2, пом.1</li>

                            <li className="requisites_items">Тел. 88123307115, <span className='span-item-right'>e-mail: </span>ATV_Servis@mail.ru</li>

                            <li className="requisites_items">Р/сч. № 40702810890450001199</li>

                            <li className="requisites_items">в Доп. офис "Нарвский" ПАО Банк "Санкт-Петербург"</li>

                            <li className="requisites_items">К/с: 30101 810 9 0000 0000 790, БИК: 044030790</li>

                        </ul>
                        <img className="cooperation-image" src={logo} alt="ATV" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cooperation;