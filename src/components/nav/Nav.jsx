import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../routes";
import logo from "../../logo.png";
import "./Nav.css"
const NavMenu = () => {
    // console.log(routes);
    const Menu = () => {
        return routes.map(route => (
            <NavLink className="link"
                to={route.route}
                key={route.id}
            //  style={({isActive}) => ({color: isActive ? "#fc8b06" : "#000"})}
            > {route.title} </NavLink>
        ))
    }
    return (
        <header className="header">
            <div className="wrapper">
                <div className="headerGrid">
                    <div className="logo"><img src={logo} alt="logo.atv-auto" /></div>
                    <div className="nav-menu"><Menu /></div>
                </div>
            </div>

        </header>
    )
}
export default NavMenu;