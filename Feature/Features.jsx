import React from 'react'
import "../index.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import myImage from '../images/10.PNG';
import Common1 from "../Common1";
import Home5 from '../Home5';
import Feature1 from './Feature1';
import Home6 from '../Home6';

const Features = () => {

  return (
    <>
     <Common1 name ="Feature Details"
     section ="Feature Details"/>
     <Feature1
     imgsrc = {myImage}
     name="Your Simple Solution online Privacy"
     />
    <Home6/>
     <Home5/>
    </>
  )
}
export default Features
