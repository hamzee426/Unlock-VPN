import React from 'react'
import "./index.css";
import {NavLink} from "react-router-dom";
import background from "../src/images/5420896.webp";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Common = (props) => {
   const smallTextStyle = {
    fontSize: "12px",
  };
  
  return (
    <>
    <div className='pb-5' style={{backgroundImage: `url(${background})`,

  }}>
      <section id ="header" className='d-flex align-items-center'>
       <div className = "container-fluid nav_bg">
        <div className='row'>
           <div className="col-10 m-auto pt-5 ps-5">
                    <div className='row'>
            <div className="col-md-6 pt-5 ps-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1 className='word'>
                <b>{props.name} <strong className='orange'> {props.name1} </strong> {props.name2}</b> 
              </h1>
              <h7 style={smallTextStyle} className="my-3 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid corrupti 
              </h7>
             
              <div className='GET mt-3'>
                <NavLink to={props.visit} className="btn btn-outline-primary">{props.btname}<i class="fas fa-arrow-right"></i></NavLink>
              </div>
            </div>
            <div className='col-lg-6 order-1 order-lg-2 ps-5 header-img'>
              <img src={props.imgsrc} className="img-fluid " alt="home img" />

            </div>
            </div>
           </div>
        </div>
    </div>
    </section>
    </div>
    </>
  )
}

export default Common
