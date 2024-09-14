import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Introabout from '../images/about-intro.png'

function Aboutintro() {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration in milliseconds
        });
    },
        []);
    return (
        <>
            <section className='aboutintro my-8 md:my-20 xl:mt-28'>
                <div className="container">
                    <div className="inner-box flex flex-col-reverse xl:flex-row justify-between items-center">
                        <div className="contant-box xl:w-2/4">
                            <div className="title ">
                                <div className="subtitle ">
                                    <h3 className='md:text-[45px] text-[25px] font-semibold text-[#0A6ED1] relative '>Welcome to Keyph Solar solution</h3>
                                </div>
                                <div className="title">
                                    <h2>We exist to empower individuals and business to embrace solar energy.</h2>
                                </div>
                            </div>
                            <div className="content">
                                
                                <p className='mb-2'>KeyPh Solar Solutions Pvt Ltd is incorporated with the idea of providing non-polluting renewable energy to all. We strongly believe that every responsible and committed individual, as well as corporate body who strives to minimize their carbon footprint should have access to cost-effective, high quality and high performance renewable solutions.</p>
                                <p className='mb-2'>KPSS is an energy consultant and Engineering, Procurement and Construction (EPC) solutions provider for residential, commercial and industrial power. We understand our customers' energy consumption patterns and work out economically viable options to switch to renewable energy solutions. Our team of experts bring together years of experience with renewable energy technologies and are passionately dedicated to providing sustainable energy solutions.</p>
                                <p className='mb-2'>kpSolarSolution also deals in alternative solar products like solar water pumps, solar street lights, solar torch, lanterns, bldc fan, solar home lightening system, solar floor lights, ev chargers for 2 and 4 wheeler vehicles. kpSolarSolution is an end to end solution for all your solar queries, product, installation and maintenance.
                                </p>
                                
                            </div>
                        </div>
                        <div className="img-box xl:w-[40%] mx-auto xl:mx-0" data-aos="flip-right">
                            <img src={Introabout} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutintro
