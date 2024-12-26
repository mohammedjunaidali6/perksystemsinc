import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';

import Aboutus from "./aboutus";
import Services from "./services";
import Clients from "./clients";
import Careers from "./careers";
import Contactus from "./contactus";
import Home from "./home";
import Navigation from "./navigation";
import Footer from "./footer";
import Login from "./login";
import Applicationdevop from "./applicationdevop";
import Consultingservices from "./consultingservices";
import Training from "./training";

function App() {
  
  return (
    <div>
      <BrowserRouter basename="perksystemsinc">
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="services" element={<Services />} />
          <Route path="clients" element={<Clients/>} />
          <Route path="careers" element={<Careers/>} />
          <Route path="contactus" element={<Contactus/>} />
          <Route path="login" element={<Login/>} />
          <Route path="applicationdevelopment" element={<Applicationdevop/>} />
          <Route path="consultingservices" element={<Consultingservices/>} />
          <Route path="training" element={<Training/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
