import React from 'react'
import { Parallax } from 'react-parallax'
import ItemScroll from '../item-scroll/ItemScroll'
import './FirstScreen.css'
import { itemScrollData } from '../../data/item-scroll.data'
import WorkingTime from '../working-time/WorkingTime'
import { BrowserView } from 'react-device-detect'

const insideStyles = {
    padding: 20,
    position: "absolute",
    top: "10px",
    left: "-240px",
    transform: "translate(-50%,-50%)",
    zIndex: 2,
};
const FirstScreen = ({ componentsRef, itemScrollToggle, image, title, doubleCard, logo, className = '' }) => {
    return (
        <Parallax bgClassName="first-screen-image" bgImage={image} strength={500}>
            <div className={`first-screen-wrapper ${className}`} style={{ height: "100vh" }}>
                <WorkingTime title={title} doubleCard={doubleCard} logo={logo} addClass="size-36"/>
                <BrowserView>
                    <div style={insideStyles}>
                        {itemScrollToggle && itemScrollData.map((el, index) => {
                            return (
                                <ItemScroll
                                    componentRef={componentsRef && componentsRef[el.ref]}
                                    text={el.name}
                                    img={el.icon}
                                    key={el.id}
                                    index={index}
                                />
                            )
                        })}
                    </div>
                </BrowserView>
            </div>
        </Parallax>
    )
}
export default FirstScreen;