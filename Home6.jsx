import React from 'react'
import background from "../src/images/5420896.webp";
import "./index.css";
import {NavLink} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faMobileAndroid ,faCompass ,faWindowRestore} from '@fortawesome/free-solid-svg-icons';

const Home6 = () => {
      const smallTextStyle = {
    fontSize: "12px",
  }
  return (
    <>
       <div className='pb-5 pt-5' style={{backgroundImage: `url(${background})`,

  }}>
<div class="container text-center pt-5 ">
  <div class="row">
    <div class="col-md-7 offset-md-3">
      <h2 className='text-center'><b>Ready to get UnlockVPN?</b></h2>
       <p className='text-center text-muted pt-3' style={smallTextStyle} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, deserunt dignissimos tempora similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur optio architecto exercitationem dolores odio excepturi ipsa, at, debitis vitae rerum porro, nam quo error quasi dolore. Suscipit mollitia placeat obcaecati?  </p>
       <h6>Avaliable on :  <FontAwesomeIcon className="mx-2" icon={ faAppleAlt } style={{color: "#478bff"}} />
       <FontAwesomeIcon className=" mx-2 " icon= { faMobileAndroid } style={{color: "#478bff"}} />
       <FontAwesomeIcon className="mx-2" icon={ faCompass } style={{color: "#478bff"}} />
       <FontAwesomeIcon className="mx-2 " icon={ faWindowRestore } style={{color: "#478bff"}} />
       <FontAwesomeIcon className="mx-2" icon={ faAppleAlt } style={{color: "#478bff"}} /></h6>
        <div  className='button mt-4'>
                <NavLink to={"https://www.google.com/search?q=network+error&oq=NETWOR&aqs=chrome.1.69i57j0i67l4j0i67i131i433j0i67j0i67i131i433j0i67j0i433i512.3853j0j15&sourceid=chrome&ie=UTF-8" } className="btn btn-outline-primary">GET START NOW <i class="fas fa-arrow-right"></i></NavLink>
              </div>
    </div>
    </div>
    </div>

  </div>
    </>
  )
}

export default Home6
