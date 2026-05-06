import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavMenu from "./nav/Nav";
import ScrollButtonUp from "../UI/scroll-button-up/ScrollButtonUp";
import Footer from "./footer/Footer";
import CursorGlow from "./cursor-glow/CursorGlow";
import ScrollReveal from "./scroll-reveal/ScrollReveal";


const Layout = () => {
    const location = useLocation();

    return (
        <div className="layout">
            <CursorGlow />
            <ScrollReveal />
            <NavMenu />
            <div className="container">
                <div key={location.pathname} className="page-transition">
                    <Outlet />
                </div>
            </div>
            <ScrollButtonUp />
            <Footer />
        </div>
    )
}
export default Layout;