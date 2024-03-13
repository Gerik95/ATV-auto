import React from 'react'
import FirstScreen from '../../components/first-screen/FirstScreen'
import WrapLayout from '../../layouts'
import EngineRepair from '../../layouts/engine-repair/EngineRepair'
import SuspentionRepair from '../../layouts/suspention-reapir/SuspentionRepair'
import SuspentionCorner from '../../layouts/suspention-corner/SuspentionCorner'
import ElectricCar from '../../layouts/electric-car/ElectricCar'
import Tuning from '../../layouts/tuning/Tuning'
import firstScreen from '../../assets/images/first-screen.jpg'
import { conditionerbg, electricCar, suspentionRepair } from '../../assets'
import brokeWindshield from '../../assets/images/broke-windshield.jpg'
import Conditioner from '../../layouts/tires/Conditioner'
import Headlights from '../../layouts/carwash/Headlights'
import Windshield from '../../layouts/windshield/Windshield'
import Toning from '../../layouts/toning/Toning'
import Quads from '../../layouts/quads/Quads'
import Snow from '../../layouts/snow/Snow'
import logo from '../../assets/images/atv-market-logo.png'
import atvLogo from "../../logo.png";


const Home = () => {
    const ref1 = React.useRef(null);
    const ref2 = React.useRef(null);
    const ref3 = React.useRef(null);
    const ref4 = React.useRef(null);
    const ref5 = React.useRef(null);
    const ref6 = React.useRef(null);
    const ref7 = React.useRef(null);
    const ref8 = React.useRef(null);
    const ref9 = React.useRef(null);
    const ref10 = React.useRef(null);
    const ref11 = React.useRef(null);

    const reference = {
        ref1: ref1,
        ref2: ref2,
        ref3: ref3,
        ref4: ref4,
        ref5: ref5,
        ref6: ref6,
        ref7: ref7,
        ref8: ref8,
        ref9: ref9,
        ref10: ref10,
        ref11: ref11,
    }

    return (
        <div style={{ scrollBehavior: 'smooth' }}>
            <FirstScreen
                itemScrollToggle
                componentsRef={reference}
                image={firstScreen}
                title='АВТОСЕРВИС'
                logo={atvLogo}
                doubleCard={{ title: 'ЗАПЧАСТИ', logo }}
            />
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
            <WrapLayout parallax={conditionerbg} componentRef={ref6} title="Заправка кондиционера">
                <Conditioner />
            </WrapLayout>
            <WrapLayout componentRef={ref7} title="Химическая полировка фар">
                <Headlights />
            </WrapLayout>
            <WrapLayout parallax={brokeWindshield} componentRef={ref8} title="Замена и ремонт лобовых стёкол">
                <Windshield />
            </WrapLayout>
            <WrapLayout componentRef={ref9} title="Защитная пленка/тонировка">
                <Toning />
            </WrapLayout>
            <WrapLayout parallax={brokeWindshield} componentRef={ref10} title="Ремонт квадроциклов">
                <Quads />
            </WrapLayout>
            <WrapLayout componentRef={ref11} title="Ремонт снегоходов">
                <Snow />
            </WrapLayout>
        </div>

    )
}
export default Home;