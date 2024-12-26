import React from 'react';
// import logo from './logo1.png';
import { NavLink } from "react-router-dom";

const Navigation = () => {
  
  // setTimeout(()=>{
  //   document.getElementById("linkid").click();
  // },1000)
    return (
        <div id="home-header" className='sticky-top'>
            <header>
        <div className="navdiv1">
        <ul className="first-ul">
            <li><i class="bi bi-person-circle"></i>&nbsp;<NavLink to="/login"> Employee Login</NavLink></li>
            <li><i class="bi bi-envelope"></i>&nbsp;<a href="mailto:info@perksys.com"> info@perksys.com</a></li>
            <li><i class="bi bi-phone-fill"></i> &nbsp; 214-842-6969</li>
        </ul>
        </div>
      <div className="navdiv2">
      {/* <img src={logo} alt="Perk Systems Inc" id="logo1" /> */}
      <h1>Perk Systems Inc</h1>
      <ul className="second-ul">
        <li>
          <NavLink to="/"  id="linkid">Home</NavLink>
        </li>
        <li>
          <NavLink to="/aboutus" >About Us</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/clients" >Clients</NavLink>
        </li>
        <li>
          <NavLink to="/careers">Careers</NavLink>
        </li>
        <li>
          <NavLink to="/contactus">Contact Us</NavLink>
        </li>
      </ul>
      </div>
      </header>
            
        </div>
    );
};

export default Navigation;