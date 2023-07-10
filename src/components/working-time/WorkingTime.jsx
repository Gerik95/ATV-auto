import React from 'react';
import './WorkingTime.css';
import logo from "../../logo.png";  
import cn from "classnames";
import { useLocation } from 'react-router-dom';
import { isMobile } from 'react-device-detect';


const WorkingTime = ({title}) => {
    const {pathname} = useLocation()
    const pathnameClass = pathname === "/" ? "working_time" : "working_time_card";
    return (
        // <div className= {pathname === "/" ? "working_time" : "working_time_card"}>
        <div className= {cn(pathnameClass, {
            mobile: isMobile
        })}>
            <div className="working_time_title">
                {title}
            </div>
           
            <div className="working_time_logo">
                <img src={logo} alt="Logo" />
            </div>
            
            <div className="working_time_text">
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
                    Тел.: <a className="phone_working" href="tel:+78123307115">330-71-15</a>
                </div>
            </div>
        </div>
    );
};

export default WorkingTime;