import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { routes } from '../../routes'
import './Nav.css'
import DehazeIcon from '@mui/icons-material/Dehaze'
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation'
import { isMobile, MobileView, TabletView, isTablet, deviceType } from 'react-device-detect'
import cn from 'classnames'

const NavMenu = () => {
    const [navActive, setNavActive] = useState(false);
    const Menu = () => {

        return routes.map(route => {
            return route.img ? <div className="logo"><img src={route.img} alt="logo.atv-auto"/></div> : (
                <NavLink className={`link ${route.class}`}
                         to={route.route}
                         onClick={() => setNavActive(false)}
                         key={route.id}
                > {route.title} </NavLink>
            )
        })
    }

    const toggleHandler = () => setNavActive(prev => !prev);
    const menuIcon = navActive ?
        (<CancelPresentationIcon className="cancel-icon" />) : (<DehazeIcon className="dehaze-icon" />)

    return (
        <header className="header">
            {(isMobile || isTablet) && <div className="menu-button" onClick={toggleHandler}>{menuIcon}</div>}
            <div className="wrapper">
                <div className={cn("headerGrid", {
                    mobile: isMobile || isTablet,
                    active: navActive
                })}>
                    <div className={cn("nav-menu", {
                        active: navActive,
                        mobile: isMobile || isTablet,
                    })}>
                        <Menu />
                        <a target="_blank" className="link prolamp" href="https://www.sankt-peterburg.pro-lamp.ru/">PRO-LAMP</a>
                        <a target="_blank" className="link rusam" href="https://www.rusam.ru/">RUSAM</a>
                    </div>
                </div>
            </div>

        </header>
    )
}
export default NavMenu;