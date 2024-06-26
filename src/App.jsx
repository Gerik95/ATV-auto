import Layout from './components/Layout';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home-page/Home';
import About from './pages/about-page/About';
import Contacts from './pages/contacts/Contacts';
import Cooperation from './pages/cooperation/Cooperation';
import Carwash from './pages/carwash-page/Carwash';
import ProLamp from './pages/service-page/ProLamp';
import Tirefit from './pages/tirefit-page/Tirefit';
import Shop from './pages/shop-page/Shop';
import Motoboard from './pages/motoboard-page/Motoboard';

import '@elastic/eui/dist/eui_theme_light.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="motoboard" element={<Motoboard />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="cooperation" element={<Cooperation />} />
          <Route path="carwash" element={<Carwash />} />
          <Route path="pro-lamp" element={<ProLamp />} />
          <Route path="tirefit" element={<Tirefit />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
