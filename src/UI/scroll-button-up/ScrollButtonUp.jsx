import React, { useEffect, useState } from "react";
import cn from "classnames";

import buttonUp from "../../assets/images/upload.svg";
import { isMobile } from 'react-device-detect';
import "./ScrollButtonUp.css";

const ScrollButtonUp = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [classes, setClasses] = useState(false);
    const handleVisibleButton = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        if (scrollPosition > 250) setClasses(true);
        if (scrollPosition < 250) setClasses(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleVisibleButton);
        return () => {
            window.removeEventListener("scroll", handleVisibleButton);
        };
    }, [scrollPosition]);

    const onTopButton = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // for smoothly scrolling
        });
    };

    return (
        <div
            onClick={onTopButton}
            className={cn("button_top", {
                show: classes,
                hide: !classes,
                mobile: isMobile
            })}
        >
            <img src={buttonUp} alt="Button Up" />
        </div>
    );
};

export default ScrollButtonUp;