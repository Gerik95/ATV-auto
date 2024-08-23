import React from 'react'
import './WorkingTime.css'
import cn from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import TimeBlock from './TimeBlock'


const WorkingTime = ({ title, doubleCard, logo, addClass }) => {

    const { pathname } = useLocation()
    const pathnameClass = pathname === '/' ? 'working_time' : 'working_time_card'
    console.log('console.log(itemLogo)', logo)
    return (
        <div style={{ maxWidth: doubleCard ? '900px' : '450px' }} className={cn(pathnameClass, {
            mobile: isMobile
        })}>
            <div className="working-time-top-wrapper">
                <TimeBlock title={title} addClass={addClass} logo={logo}/>
                {doubleCard?.length && (
                    doubleCard.map((item) => {
                        return item?.isLink ? (
                                <Link to="/motoboard" className="working-time-top">
                                    <TimeBlock title={item.title} addClass={item.addClass} logo={item.logo}/>
                                </Link>
                            ) :
                            (
                                <div className="working-time-top">
                                    <TimeBlock title={item.title} addClass={item.addClass} logo={item.logo}/>
                                </div>
                            )
                    })
                )}
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
    )
}

export default WorkingTime