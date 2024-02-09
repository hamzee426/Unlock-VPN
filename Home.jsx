import React from 'react'
import "./index.css";
import {NavLink} from "react-router-dom";
import web from "../src/images/Capture3.PNG";
import web2 from "../src/images/3.PNG";
import web3 from "../src/images/4.PNG";

import '@fortawesome/fontawesome-free/css/all.min.css';
import Common from "./Common";
import Common2 from './Common2';
import Browse from './Browse';
import Video from './Video';
import Home5 from './Home5';
import Home6 from './Home6';
import Home7 from './Home7';

const Home = () => {
  return (
    <>
    <Common name ="Your" 
    name1 = "simple"
    name2 = "solution online privacy."
     imgsrc = {web}
     visit="./contact"
     btname="GET START NOW "/>

     <Common2 
     imgsrc = {web2}
     name="Get fasts secure access best internet"
     />

     <Browse
          imgsrc = {web3}
     name="Browse with the fastest verify expert"
     />
     <Common2
       imgsrc = {web}
     name="Stop our personal information"
     />

     <Video/>
     <Home5/>
     <Home6/>
     <Home7/>
     
     
    </>
    
  )
}

export default Home
