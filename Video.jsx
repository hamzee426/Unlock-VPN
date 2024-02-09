import React from 'react'
import myVideo from '../src/images/video.mp4';

const Video = () => {
  
  return (
    <>
    <div>
     <video controls width="1270" height="700">
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div> 
    </>
  )
}

export default Video
