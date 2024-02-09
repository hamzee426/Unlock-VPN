import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle } from 'mdb-react-ui-kit';
import background from "../src/images/5420896.webp";




const Footer = () => {
     const smallTextStyle = {
    fontSize: "12px",
  };
   
  return (
    <>
     <div className=' pt-3' style={{backgroundImage: `url(${background})`,

  }}>
        <div className = "container-fluid nav_bg">
        <div className='row'>
           <div className='col-8 mx-auto '>
           <MDBFooter  className='text-center text-lg-start text-muted'>
    
<section className='d-flex justify-content-center justify-content-lg-between pb-2 border-bottom'>
        <div class="container">
  <div class="row row-cols-2">
    <div class="col-1   pt-3" ><i class="fas fa-comment-slash"></i></div>
    <div class="col-3 px-0 "> <p style = {{fontSize:"14px"}}className="my-2">Live Chat</p>
              <h6 style={smallTextStyle} className="text-muted">connect.unlockVPN </h6></div>
              <div class="col-1   pt-3" ><i class="far fa-envelope"></i></div>
    <div class="col-3 px-0 "> <p style = {{fontSize:"14px"}}className="my-2">000-0000-00</p>
              <h6 style={smallTextStyle} className="text-muted">supports@unlock.com </h6></div>
      

       <div class="col-4 text-end ">
            
   <MDBDropdown>
      <MDBDropdownToggle tag='a' className='btn btn-primary'>
       English
      </MDBDropdownToggle>
      <MDBDropdownMenu >
        <MDBDropdownItem link>Action</MDBDropdownItem>
        <MDBDropdownItem link>Another action</MDBDropdownItem>
        <MDBDropdownItem link>Something else here</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
          
        </div>
        </div>   
      </div>
      </section>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5 '>
          <MDBRow className='mt-3'>
            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 '>
             <h6 className='fw-bold mb-4'>About vpn</h6>
              <p>
                <a style={smallTextStyle} href='#!' className='text-reset'>
                  What is Vpn?
                </a>
              </p>
              <p>
                <a style={smallTextStyle} href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className=' fw-bold mb-4'>Company</h6>
              <p>
                <a style={smallTextStyle} href='#!' className='text-reset'>
                  About us
                </a>
              </p>
              <p>
                <a style={smallTextStyle} href='#!' className='text-reset'>
                  Status
                </a>
              </p>
              
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className=' fw-bold mb-4'>Unlockvpn</h6>
              <p>
                <a style={smallTextStyle} href='#!' className='text-reset'>
                 Download
                </a>
              </p>
              <p>
                <a style={smallTextStyle} href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <a style={smallTextStyle} href='#!' className='text-reset'>
                   Contact us
                </a>
              </p>
              <p>
                <a style={smallTextStyle}  href='#!' className='text-reset'>
                   Status
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className=' mb-md-0 mb-5 '>
              <h6 className=' fw-bold mb-4'>Stay Update</h6>
              <p style={smallTextStyle}>
                Reimagine interaction between
                we guest forn the first time.
              </p>
              <div className=" mb-5">
            <input type="email" id="form5Example25"  className="btn-primary form-control " placeholder="Email "/>
          </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

        <section className='d-flex justify-content-center justify-content-lg-between  pb-4 border-top pt-4 '>
        <div className=' d-none d-lg-block'>
<div className='text-center ' style={smallTextStyle} >
        Copyright © 2012_2023 : <a style={{ textDecoration: 'none' }}  href='https://mdbootstrap.com/'>
          UnlockVPN All Rights Reserved.
        </a>
      </div>   
      </div>

        <div >
          <a href='' className='me-4 text-reset ' >
            <i class="fas fa-money-check-alt" ></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i class="fas fa-money-check-alt"></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i class="fas fa-money-check-alt"></i>
          </a>
          <a href='' className='text-reset'>
            <i class="fas fa-money-check-alt"></i>
          </a>
          
        </div>
      </section>
    </MDBFooter>

           </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Footer
