import React from 'react'
import web from "../src/images/55.PNG";

const Home7 = () => {
      const smallTextStyle = {
    fontSize: "12px",
  }
  return (
    <>
        <div className = "container-fluid nav_bg p-5 m-5">
        <div className='row'>
           <div className='col-10 mx-auto'>
                <div className='row'>
            <div className="col-md-3 mx-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
            <h6 className='text-primary'>Testimonials</h6>
            <h3 className='mb-4'><b>What Clints say</b></h3>
            <p className='text-muted ' style={smallTextStyle}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, cumque laudantium sit unde quam consequatur cupiditate mollitia aperiam impedit sequi porro </p>
            </div>
                        <div className='col-lg-7 order-1 order-lg-2 ps-5 '>
                            <img src={web} style={{ }} className="img-fluid " alt="home img" />
                            </div>

            </div>

           </div>
        </div>
    </div>
    </>
  )
}

export default Home7
