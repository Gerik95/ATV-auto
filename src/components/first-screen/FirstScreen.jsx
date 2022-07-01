import React from "react";
import { Parallax } from "react-parallax";
import firstScreen from "../../assets/images/first-screen.jpg";
import ItemScroll from "../item-scroll/ItemScroll";
import "./FirstScreen.css";
import { itemScrollData } from "../../data/item-scroll.data";

const insideStyles = {
    padding: 20,
    position: "absolute",
    top: "10px",
    left: "-240px",
    transform: "translate(-50%,-50%)",
    zIndex: 2,
};
const FirstScreen = ({componentsRef}) => {
    // console.log(componentsRef);
    return (
        <Parallax bgClassName="first-screen-image" bgImage={firstScreen} strength={500}>
            <div style={{ height: "90vh" }}>
                <div style={insideStyles}>
                    {itemScrollData.map((el, index) => {
                        return (
                            <ItemScroll
                                componentRef={componentsRef[el.ref]}
                                text={el.name}
                                img={el.icon}
                                key={el.id}
                                index={index}
                            />
                        )
                    })}
                </div>
            </div>
        </Parallax>
    )
}
export default FirstScreen;