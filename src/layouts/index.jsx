import React from 'react';
import './style.css';
import { Parallax } from "react-parallax";
import { isMobile } from 'react-device-detect';
import cn from "classnames";

const WrapLayout = ({ title, children, componentRef, parallax }) => {
    // const ParallaxLayout = () => 
    return (
        <>
            {parallax ? (
                <Parallax bgClassName="first-screen-image" bgImage={parallax} strength={500}>
                    <div ref={componentRef} className={cn("section section-rellax",{
                        mobile: isMobile
                    })} >
                        <div className="wrapper">
                            {title && <h2 className="section-title">{title}</h2>}
                            <div className="section-grid">
                                {children}
                            </div>
                        </div>
                    </div>
                </Parallax>
            ) : (
                <div ref={componentRef} className={cn("section", {
                    mobile: isMobile
                })}>
                    <div className="wrapper">
                        <h2 className="section-title">{title}</h2>
                        <div className="section-grid">
                            {children}
                        </div>
                    </div>
                </div>
            )}

        </>
    );
};

export default WrapLayout;