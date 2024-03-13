import React from "react";
import FirstScreen from "../../components/first-screen/FirstScreen";
import firstScreen from "../../assets/images/contacts.JPG";
import './Contacts.css';
import { telegram, instagram, whatsapp, vk, call } from "../../assets";
import { isMobile } from 'react-device-detect';
import cn from "classnames";
import logo from "../../logo.png";


const Contacts = () => {
    return (
        <div className={cn("", {
            mobile: isMobile
        })}>
            <FirstScreen itemScrollToggle={false} image={firstScreen} title='КОНТАКТЫ' logo={logo} />
            <div className="contact_us">
                <div className="wrapper">
                    <div className="contact_grid">
                        <div className="contact_grid_text">
                            <h2>Свяжитесь с нами!</h2>
                            <p> Есть вопросы или хотите сообщить о проблеме - мы всегда рады помочь!
                                Подписывайтесь и следите за нашими соц.сетями!</p>
                        </div>
                        <div className="contact_grid_right">
                            <div className="contact_grid_icon">
                                <a target="_blank" href="https://t.me/wZnxUo3yftNhNTNi"><img src={telegram} alt="telegram" /></a>
                                <a target="_blank" href="https://instagram.com/atv.auto.service?igshid=NmZiMzY2Mjc="><img src={instagram} alt="instagram" /></a>
                                <a target="_blank" href="https://api.whatsapp.com/send/?phone=79219007115&text&type=phone_number&app_absent=0"><img src={whatsapp} alt="whatsapp" /></a>
                                <a target="_blank" href="https://vk.com/atv.avto"><img src={vk} alt="vk" /></a>
                            </div>
                            <div className="contact_phone">
                                <img src={call} alt="call" />
                                <a href="tel:+78123307115">+7 (812) 330-71-15</a>
                            </div>
                            <div className="contact_phone">
                                <img src={call} alt="call" />
                                <a href="tel:+79119247115">+7 (911) 924-71-15</a>
                            </div>
                            <div className="contact_phone">
                                <img src={call} alt="call" />
                                <a href="tel:+78129007115">+7 (812) 900-71-15</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="contacts_grid">
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab03694e081a36526b8b8b1b9bfacbed845eb624e0d776e5399deb7adfb3eaeab&amp;source=constructor" width="100%" height="500" frameborder="1"></iframe>
            </section>
        </div>
    )
}
export default Contacts;