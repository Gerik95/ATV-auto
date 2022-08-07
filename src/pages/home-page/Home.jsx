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
import firstScreen from "../../assets/images/first-screen.jpg";
import { suspentionRepair, electricCar } from "../../assets";
import tire from '../../assets/images/tire.jpg';

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
        <div style={{ scrollBehavior: 'smooth' }}>
            <FirstScreen itemScrollToggle componentsRef={reference} image={firstScreen} title='АВТОСЕРВИС' />
            <WrapLayout componentRef={ref1} title="Ремонт двигателя и КПП">
                <EngineRepair />
            </WrapLayout>
            <WrapLayout parallax={suspentionRepair} componentRef={ref2}>
                <SuspentionRepair />
            </WrapLayout>
            <WrapLayout componentRef={ref3} title="Развал-схождение">
                <SuspentionCorner />
            </WrapLayout>
            <WrapLayout parallax={electricCar} componentRef={ref4} >
                <ElectricCar />
            </WrapLayout>
            <WrapLayout componentRef={ref5} title="Тюнинг">
                <Tuning />
            </WrapLayout>
            <WrapLayout parallax={tire} componentRef={ref6} title="Шиномонтаж">
                <Tires />
            </WrapLayout>
            <WrapLayout componentRef={ref7} title="Автомойка">
                <Carwash />
            </WrapLayout>
        </div>

    )
}
export default Home;