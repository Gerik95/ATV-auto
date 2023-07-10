import React, { useRef } from 'react';
import "./ItemScroll.css";


const ItemScroll = ({ text, img, index, componentRef }) => {
   const buttonHandler = (ref) => () => {
        console.log(ref);
        ref?.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "center",
        });
    };
    
    return (
        <div onClick={buttonHandler(componentRef)} className="item-scroll" style={{ top: (index * 60) + 165 }}> {/*previosly = 240*/}
            <div className="item-scroll-text">
                {text}
            </div>
            <img className="item-scroll-image" src={img} alt={text} />
        </div>
    );
};

export default ItemScroll;
