import React from 'react';
import introvideo from '../images/KEYPH_SOLAR_SOLUTIONN.mp4'

const Video = () => {
  return (
    <div>
        <video src={introvideo} muted autoPlay loop></video>
    </div>
  )
}

export default Video
