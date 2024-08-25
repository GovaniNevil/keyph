import React from 'react'
import Header from '../component/header'
import Contact from '../component/contact'
import Footer from '../component/footer'
import Aboutbanner from '../component/aboutbanner'
import Aboutintro from '../component/aboutintro'
import Whyus from '../component/whyus'
import Vision from '../component/vision'

const Aboutus = () => {
  return (
    <>  
        <Header />
        <Aboutbanner />
        <Aboutintro />
        <Whyus />
        <Vision />
        <Contact/>
        <Footer/>
    </>
  )
}

export default Aboutus
