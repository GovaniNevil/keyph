import React, { useState } from 'react';
import Header from '../component/header';
import Video from '../component/video';
import Solution from '../component/solution';
import Aboutintro from '../component/aboutintro';
import Whyus from '../component/whyus';
import Vision from '../component/vision';
import Process from '../component/process';
import Partner from '../component/partner';
import Banefits from '../component/banefits';
import Freedom from '../component/freedom';
import Footer from '../component/footer';
import Company from './company';
import TeamSection from '../component/director'
const Home = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Callback function that will be triggered when the video is loaded
  const handleVideoLoad = () => {
    setIsVideoLoaded(true); // Set the state to true after the video is loaded
  };

  return (
    <div>
      <Header />
      <Video onVideoLoad={handleVideoLoad} /> {/* Pass the callback function */}
      
      {/* Conditionally render the other components only when the video is loaded */}
      {isVideoLoaded && (
        <>
          <Aboutintro />
          <Company/>
          <Whyus />
          <Partner />
          <Vision />
          <TeamSection/>
          <Process />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;
