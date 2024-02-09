import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import web from "../src/images/Capture.PNG";
const Navbar = () => {
  return (
    <>
    <div className = "container-fluid nav_bg">
        <div className="row">
           <div className="col-10 mx-auto">

      
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid">
    <img src={web} className="logo" alt="home img" />
    <NavLink className="navbar-brand text-primary" to ="/">UnlockVPN</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact className="nav-link active" aria-current="page" to="/">HOME</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Features">FEATURES</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Coverage">COVERAGE</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Packages">PACKAGES</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" to ="/contact" >CONTACT</NavLink>
        </li> 
        <li>
           <NavLink to="/Coverage" className="btn btn-outline-primary ">GET PRO VPN <i class="fas fa-arrow-right"></i></NavLink>
        </li>
       
        <li className="nav-item1">
                    <NavLink className="nav-link" to ="/contact" ><i class="fas fa-user"></i> Login </NavLink>

        </li>
      </ul>
      
    </div>
  </div>
</nav>
     </div>
        </div>
    </div>
    </>
  );
};

export default Navbar;
