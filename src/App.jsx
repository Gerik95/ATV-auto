import Layout from './components/Layout';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home-page/Home';
import About from './pages/about-page/About';
import Contacts from './pages/contacts/Contacts';
import Cooperation from './pages/cooperation/Cooperation';
import Carwash from './pages/carwash-page/Carwash';
import Service from './pages/service-page/Service';
import Tirefit from './pages/tirefit-page/Tirefit';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="cooperation" element={<Cooperation />} />
          <Route path="carwash" element={<Carwash />} />
          <Route path="service" element={<Service />} />
          <Route path="tirefit" element={<Tirefit />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
