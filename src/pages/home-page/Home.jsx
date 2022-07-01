import React from "react";
import FirstScreen from "../../components/first-screen/FirstScreen";
import WrapLayout from "../../layouts"
import EngineRepair from "../../layouts/engine-repair/EngineRepair";
import SuspentionRepair from "../../layouts/suspention-reapir/SuspentionRepair";
import SuspentionCorner from "../../layouts/suspention-corner/SuspentionCorner";
import ElectricCar from "../../layouts/electric-car/ElectricCar";
import Tuning from "../../layouts/tuning/Tuning";
import Tires from "../../layouts/tires/Tires";
import Carwash from "../../layouts/carwash/Carwash";
const Home = () => {
    const ref1 = React.useRef(null);
    const ref2 = React.useRef(null);
    const ref3 = React.useRef(null);
    const ref4 = React.useRef(null);
    const ref5 = React.useRef(null);
    const ref6 = React.useRef(null);
    const ref7 = React.useRef(null);
    
    const reference = {
        ref1: ref1,
        ref2: ref2,
        ref3: ref3,
        ref4: ref4,
        ref5: ref5,
        ref6: ref6,
        ref7: ref7,
    }
   
    return (
        <div style={{scrollBehavior: 'smooth'}}>
            <FirstScreen componentsRef={reference} />
            <WrapLayout componentRef={ref1} title="Ремонт двигателя">
                <EngineRepair/>   
            </WrapLayout> 
            <WrapLayout componentRef={ref2} title="Ремонт ходовой части">
                <SuspentionRepair/>   
            </WrapLayout>
            <WrapLayout componentRef={ref3} title="Развал-схождение">
                <SuspentionCorner/>   
            </WrapLayout>
            <WrapLayout componentRef={ref4} title="Автоэлектрика">
                <ElectricCar/>   
            </WrapLayout>    
            <WrapLayout componentRef={ref5} title="Тюнинг">
                <Tuning/>   
            </WrapLayout>  
            <WrapLayout componentRef={ref6} title="Шиномонтаж">
                <Tires/>   
            </WrapLayout> 
            <WrapLayout componentRef={ref7} title="Автомойка">
                <Carwash/>   
            </WrapLayout> 
        </div>

    )
}
export default Home;