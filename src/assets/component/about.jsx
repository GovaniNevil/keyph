import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About1 from '../images/Image-1.png'
import About2 from '../images/Image.png'
import powerimg from '../images/Hydro Power.png'

function About() {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration in milliseconds
        });
    },
        []);

    return (
        <>
            <section data-aos="zoom-in" className="about py-14 lg:py-32 relative overflow-hidden text-center lg:text-left">
                <div className="container">
                    <div className="inner-box lg:flex gap-14">
                        <div className="img-box relative" data-aos="fade-right">
                            <img src={About1} alt="" className='mx-auto' />
                            {/* <div class="absolute top-2/4 right-[-10px] bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center max-w-xs mx-auto">
                                <div class="flex items-center justify-center h-16 w-16 mx-auto mb-4">
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 10a8 8 0 118 8A8 8 0 012 10zm8 4a4 4 0 100-8 4 4 0 000 8z" />
                                    </svg>
                                </div>
                                <h2 class="text-white text-xl font-semibold">Solar Panel</h2>
                            </div> */}

                            <img src={powerimg} alt="" className='hidden xl:block absolute -right-[20%] top-[50%] w-[220px]' />
                        </div>
                        <div className="contant lg:w-[65%]">
                            <div className="title">
                                <h2 className='lg:w-4/5'>Say Goodbye to High Electricity Costs. Switch To Solar and Enjoy Free, Renewable Energy with Keyph Solar</h2>
                                {/* <div className="btn">
                                    <a href="#">Learn More</a>
                                </div> */}
                            </div>
                            <div className="contant mt-5 md:mt-20">
                                <div className="box lg:flex lg:gap-10">
                                    <div className="img-box hidden xl:block">
                                        <img src={About2} alt="" className='mx-auto' />
                                    </div>
                                    <div className="content xl:w-[60%] mt-4 lg:mt-0">
                                        <p className='mb-4'>KP Solar Solution also deals
                                            in alternative Solar products like Solar Water pumps, Solar Street Lights,
                                            Solar torch, Lanterns, BLDC Fan, Solar Home Lightening System, Solar Floor
                                            Lights, EV CHARGERS FOR 2 and 4 wheeler Vehicles. KP Solar Solution is and
                                            start to End solution For all your Solar Queries, Product, Installation and
                                            Maintenance.
                                        </p>
                                        <p>Renewable Energy harnesses the earth’s most abundant resources – the strength of the wind, the heat of the sun, ,and the force of water; delivering green electrons to power the world’s biggest economies and the most remote communities.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
