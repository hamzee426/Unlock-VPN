import React from 'react'
import web from "../src/images/1.PNG";
import web2 from "../src/images/2.PNG";


const Common2 = (props) => {
    const smallTextStyle = {
    fontSize: "12px",
  };
  
  return (
    <>
    
        <div className = "container-fluid nav_bg pt-2 ">
        <div className='row'>
           <div className='col-10 mx-auto pt-4 pb-5'>
              <div className='row'>
                <div className='col-lg-6 order-2 order-lg-1  header-img'>
              <img src={props.imgsrc} className="img-fluid " alt="home img" />
          </div>
            <div className="col-md-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h6  className='text-primary'>
                customer Service
              </h6>
              <h2 className="my-3">
                <b>{props.name}</b>
              </h2>
              <h6 style={smallTextStyle} className="my-3 text-muted" >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A voluptatibus illo excepturi cum reiciendis delectus, ad tempora, blanditiis quod quibusdam, eveniet 
              </h6>
              
             <div class="container">
  <div class="row row-cols-2">
    <div class="col-2 pt-4" ><img src={web} className="img-fluid " alt="home img" /></div>
    <div class="col-10"> <h5 className="my-2"><b>Secure Access</b></h5>
              <h6 style={smallTextStyle} className="my-2 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dolore quaerat exercitationem veritatis incidunt odit facilis soluta nihil animi </h6></div>
    <div class="col-2 pt-4"><img src={web2} className="img-fluid " alt="home img" /></div>
    <div class="col-10"><h5 className="my-2"><b>Fast Internet</b></h5>
              <h6 style={smallTextStyle} className="my-2 text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dolore quaerat exercitationem veritatis incidunt odit facilis soluta nihil animi </h6></div>
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

export default Common2
