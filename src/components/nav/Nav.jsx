import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes";
import logo from "../../logo.png";
import "./Nav.css"
import DehazeIcon from '@mui/icons-material/Dehaze';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { MobileView, isMobile } from 'react-device-detect';
import cn from "classnames";

const NavMenu = () => {
    const [navActive, setNavActive] = useState(false);
    const Menu = () => {
        return routes.map(route => (
            <NavLink className="link"
                to={route.route}
                onClick={() => setNavActive(false)}
                key={route.id}
            > {route.title} </NavLink>
        ))
    }

    const toggleHandler = () => setNavActive(prev => !prev);
    const menuIcon = navActive ?
        (<CancelPresentationIcon className="cancel-icon" />) : (<DehazeIcon className="dehaze-icon" />)
    return (
        <header className="header">
            <MobileView>
                <div className="menu-button" onClick={toggleHandler}>{menuIcon}</div>
            </MobileView>
            <div className="wrapper">
                <div className={cn("headerGrid", {
                    mobile: isMobile,
                    active: navActive
                })}>
                    <div className="logo"><img src={logo} alt="logo.atv-auto" /></div>
                    <div className={cn("nav-menu", {
                        active: navActive,
                        mobile: isMobile
                    })}>
                        <Menu />
                        <a target="_blank" className="link prolamp" href="https://www.sankt-peterburg.pro-lamp.ru/">PRO-LAMP</a>
                        <a target="_blank" className="link rusam" href="http://www.rusam.ru/">RUSAM</a>
                    </div>
                </div>
            </div>

        </header>
    )
}
export default NavMenu;