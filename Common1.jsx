import React from 'react'
import background from "../src/images/5420896.webp";
import "./index.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight} from '@fortawesome/free-solid-svg-icons';

<FontAwesomeIcon icon="fa-solid fa-chevrons-right" style={{color: "#2474ff",}} />
const Common1 = (props) => {
    const smallTextStyle = {
    fontSize: "12px",
  };
  return (
    <>
      <div  style={{backgroundImage: `url(${background})`,height: "300px", 
  width: "1263px" }}>
       <div className = "container-fluid nav_bg">
        <div className='row'>
           <div className="col-10 m-auto ps-5">
                    <div className='row'>
            <div className="col-md-6  ps-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column " style={{color: "black" }} >
              <h1 className='word  pt-5 mt-5'>
                <b>{props.name} </b> 
              </h1>
              <p className='text-primary  pt-3' style={smallTextStyle}>Home <FontAwesomeIcon icon= {faAnglesRight} style={{color: "#2474ff",}} /> {props.section}</p>
            </div>
            
            </div>
           </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Common1
