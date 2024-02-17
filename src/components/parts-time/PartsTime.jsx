import React from 'react';
import './PartsTime.css';
import logo from "../../logo.png";
import cn from "classnames";
import { useLocation } from 'react-router-dom';
import { isMobile } from 'react-device-detect';


const PartsTime = ({title}) => {
    const {pathname} = useLocation()
    const pathnameClass = pathname === "/" ? "parts_time" : "parts_time_card";
    return (
        <div className= {cn(pathnameClass, {
            mobile: isMobile
        })}>
            <div className="parts_time_title">
                {title}
            </div>

            <div className="parts_time_logo">
                <img src={logo} alt="Logo" />
            </div>

            <div className="parts_time_text">
                <div className="source">
                    РЕЖИМ РАБОТЫ
                </div>
                <div className="source_time">
                    10.00-21.00
                </div>
                <div className="source_brake">
                    Без обеда и выходных
                </div>
                <div className="source_phone">
                    Тел.: <a className="phone_parts" href="tel:+78123307115">330-71-15</a>
                </div>
            </div>
        </div>
    );
};

export default PartsTime;