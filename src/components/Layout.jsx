import React from "react";
import { Outlet } from "react-router-dom";
import NavMenu from "./nav/Nav";
import ScrollButtonUp from "../UI/scroll-button-up/ScrollButtonUp";
import Footer from "./footer/Footer";


const Layout = () => {
    return (
        <div className="layout">
            <NavMenu />
            <div className="container">
                <Outlet />
            </div>
            <ScrollButtonUp />
            <Footer />
        </div>
    )
}
export default Layout;