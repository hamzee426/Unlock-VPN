import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion ,faGlobe ,faKey} from '@fortawesome/free-solid-svg-icons';
import web from "../src/images/8.PNG";
import {NavLink} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./index.css";


const Home5 = () => {
     const smallTextStyle = {
    fontSize: "12px",
  }
    const smallText = {
    fontSize: "15px",
  };
  
  return (
    <>
        <div className = "container-fluid nav_bg pt-3">
        <div className='row pt-5'>
           <div className='col-10 mx-auto'>
            <div class="container text-center">
  <div class="row">
    <div class="col-md-7 offset-md-3">
      <h2 className='text-center'><b>Private Network</b></h2>
       <p className='text-center text-muted pt-3' style={smallTextStyle} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, deserunt dignissimos tempora similique  </p>
    </div>
    </div>
    </div>
            <div className = "row">
                <div className='col-lg-5 order-2 order-lg-1 ps-5 mx-5'>
<div class="container">
  <div class="row pt-4">
<h4 style={smallText} className="my-2" > <FontAwesomeIcon className="me-2" icon={ faQuestion } style={{color: "#478bff"}} /><b> Frequently Asked Questions</b></h4>
<p style={smallTextStyle} className=" text-muted pt-2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates pariatur qui quod maiores culpa quasi odit numquam rerum, quaerat </p>
  </div>
  <div class="row pt-4">
<h4 style={smallText} className="my-2" ><FontAwesomeIcon className="me-2" icon={ faGlobe } style={{color: "#478bff"}} /><b> Frequently Asked Questions</b></h4>
<p style={smallTextStyle} className=" text-muted pt-2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates pariatur qui quod maiores culpa quasi odit numquam rerum, quaerat </p>
  </div>
  <div class="row pt-4">
<h4 style={smallText} className="my-2" ><FontAwesomeIcon className="me-2" icon={ faKey } style={{color: "#478bff"}} /><b> Frequently Asked Questions</b></h4>
<p style={smallTextStyle} className=" text-muted pt-2" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates pariatur qui quod maiores culpa quasi odit numquam rerum, quaerat </p>
  </div>
  </div>
                </div>
                <div className="col-md-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column">
                  <div class="container ">
  <div class="row pt-3">
    <h2 class="row "style={smallText} className="my-2"><b>Global Layouts</b></h2>
    <p style={smallTextStyle} className=" text-muted pt-4" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nihil quo aliquam, doloribus rem velit optio magni cupiditate soluta sunt quas quaerat ad asperiores tempore dolores eum dicta maiores sed! <br></br>
    <p className="pt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus officiis dolore unde voluptatum labore, quibusdam minima totam inventore! </p></p>
     <img src={web} className="img-fluid " alt="home img" />
      <div className='button mt-5'  >
                <NavLink to={"https://www.google.com/search?q=network+error&oq=NETWOR&aqs=chrome.1.69i57j0i67l4j0i67i131i433j0i67j0i67i131i433j0i67j0i433i512.3853j0j15&sourceid=chrome&ie=UTF-8" } className="btn btn-outline-primary">READ MORE <i class="fas fa-arrow-right"></i></NavLink>
              </div>
    </div>
  </div>
                </div>
            </div>
            
           </div>
        </div>
    </div>
    </>
  )
}

export default Home5
