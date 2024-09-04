import React from 'react';
import introvideo from '../images/KEYPH_SOLAR_SOLUTIONN.mp4'

const Video = () => {
  return (
    <div>
        <video src={introvideo} muted autoPlay loop className='mt-20 sm:mt-0'></video>
    </div>
  )
}

export default Video
