import React from 'react';
import introvideo from '../images/WhatsApp Video 2024-10-08 at 11.03.23 AM.mp4';

const Video = ({ onVideoLoad }) => {
  return (
    <div>
      <video 
        src={introvideo} 
        muted 
        autoPlay 
        loop 
        onLoadedData={onVideoLoad} // This will trigger the callback once the video is loaded
        className='lg:w-full  md:w-auto mt-20 sm:mt-0"
'>
      </video>
    </div>
  )
}

export default Video;
