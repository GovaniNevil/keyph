import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Partner1 from '../images/partner-logo.png'
import Partner2 from '../images/partner-logo-2.png'
import Partner3 from '../images/partner-logo-3.png'
import Partner4 from '../images/partner-logo-4.png'
import Partner5 from '../images/partner-logo-5.png'
import Partner6 from '../images/partner-logo-6.png'
import Partner7 from '../images/partner-logo-7.png'
import Partner8 from '../images/partner-logo-8.png'
import Partner9 from '../images/partner-logo-9.png'
import Partner10 from '../images/partner-logo-10.png'
import Partner11 from '../images/partner-logo-11.png'
import Partner12 from '../images/partner-logo-12.png'
import Partner13 from '../images/partner-logo-13.png'
import Partner14 from '../images/partner-logo-14.png'
import Partner15 from '../images/partner-logo-15.png'
import Partner16 from '../images/partner-logo-16.png'
import Partner17 from '../images/partner-logo-17.png'


function Partner() {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration in milliseconds
        });
    },
        []);
  return (
    <>
        <section className="Partner mb-10" id='center-line'>
            <div className="subtitle center">
                <h3 className='md:text-[45px] text-[25px] font-semibold text-[#0A6ED1] relative w-max mx-auto mb-10'>Our proud Associates</h3>
            </div>
            <div className="gird-box md:py-32 py-10 md:px-40 px-10 bg-[#000000] items-center" >
                <div className="grid md:grid-cols-4 grid-cols-2 gap-10">
                    <div className="md:col-span-4 col-span-2" data-aos="">
                        <img src={Partner1} alt="" className='mx-auto w-96'/>
                    </div>
                    <div className="img-box flex items-center">
                        <img src={Partner2} alt="" />
                    </div>
                    <div className="img-box flex items-center">
                        <img src={Partner3} alt="" />
                    </div>
                    <div className="img-box flex items-center">
                        <img src={Partner4} alt="" />
                    </div>
                    <div className="img-box flex items-center">
                        <img src={Partner5} alt="" />
                    </div>
                    <div className="img-box flex items-center">
                        <img src={Partner6} alt="" />
                    </div>
                    <div className="img-box flex items-center">
                        <img src={Partner7} alt="" />
                    </div>
                    <div className="img-box flex items-center">
                        <img src={Partner8} alt="" />
                    </div>
                    <div className="img-box flex items-center">
                        <img src={Partner9} alt="" />
                    </div>
                    <div className="img-box flex items-center">
                        <img src={Partner10} alt="" />
                    </div>
                    <div className="img-box flex items-center">
                        <img src={Partner11} alt="" />
                    </div>
                    <div className="img-box flex items-center">
                        <img src={Partner12} alt="" />
                    </div>
                    <div className="img-box flex items-center">
                        <img src={Partner13} alt="" />
                    </div>
                    <div className="img-box flex items-center">
                        <img src={Partner14} alt="" />
                    </div>
                    <div className="img-box flex items-center">
                        <img src={Partner15} alt="" />
                    </div>
                    <div className="img-box flex items-center">
                        <img src={Partner16} alt="" />
                    </div>
                    <div className="img-box flex items-center">
                        <img src={Partner17} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Partner
