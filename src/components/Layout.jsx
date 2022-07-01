import React from "react";
import {Outlet}from "react-router-dom";
import NavMenu from "./nav/Nav";
const Layout = () => {
    return (
        <>
            <NavMenu/>
            <div className="container">
                <Outlet/>
            </div>
            <footer className="footer">Footer 2022 by DimaS</footer>
        </>
    )
}
export default Layout;