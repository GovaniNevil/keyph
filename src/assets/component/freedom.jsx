import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Freedomimg from '../images/freedom-solar.png'

function Freedom() {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration in milliseconds
        });
    },
        []);
    return (
        <>
            <section className="freedom text-center xl:text-left">
                <div className="container">
                    <div className="box relative">
                        <div className="img">
                            <img src={Freedomimg} alt="" />
                        </div>
                        <div data-aos="fade-up" className="content xl:absolute top-[10%] left-[15%] rounded-3xl xl:w-[50%] w-full bg-black/30 backdrop-blur-lg xl:p-8 p-5">
                            <div className="title ">
                                <h5 className='text-[40px] font-bold text-white'>Experience the freedom of solar energy. </h5>
                            </div>
                            <p className='my-5 font-light text-[16px] leading-7 text-white'>Discover how our expert team can design and install a solar system that perfectly suits your needs and budget. From residential homes to commercial buildings, we offer tailored solutions for every customer.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Freedom
