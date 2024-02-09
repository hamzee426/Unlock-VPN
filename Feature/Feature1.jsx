import React from 'react'
import web from "../images/11.PNG";

const Feature1 = (props) => {
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
                About UnlockVPN
              </h6>
              <h2 className="">
                <b>{props.name}</b>
              </h2>
              <h6 style={smallTextStyle} className="my-3 text-muted lh-base" >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A voluptatibus illo excepturi cum reiciendis delectus, ad tempora, blanditiis quod quibusdam, eveniet 
              </h6>
              
             <div class="container px-0">
  <div class="row row-cols-2">
     <div class="col-12">
              <h6 style={smallTextStyle} className="text-muted lh-base ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia dolore quaerat exercitationem veritatis incidunt </h6></div>
    <div class="col-12">
               <img src={web} className="img-fluid " alt="home img" /></div>
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

export default Feature1
