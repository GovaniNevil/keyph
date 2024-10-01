import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FullService from '../images/service-detail-1.png'
import HalfService from '../images/service-detail-2.png'
import Ongrid from '../images/on-grid.png'
import Offgrid from '../images/off-grid.png'
import Hybridsolution from '../images/hybrid-solution.png'
import Panelcleaning from '../images/pannel-cleaning.png'
import Mechanical from '../images/electrical-menegment.png'
import Monitering from '../images/monitaring.png'
import Easy from '../images/easy-solution.png'
import AMC from '../images/amc-service.png'

 
function Servicedetail() {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration in milliseconds
        });
    },
        []);
    return (
        <>
            <section className="service-detail my-16">
                <div className="container">
                    <div className="box flex lg:flex-row flex-col items-center md:mt-20 mt-10 md:gap-11 gap-4">
                        <div className="img lg:w-1/2">
                            <img src={Ongrid} alt="" className='mx-auto' data-aos="flip-down" data-aos-delay="100"/>
                        </div>
                        <div className="content lg:w-1/2 text-center lg:text-left">
                            <div className="title md:mt-9 mt-4 md:mb-4 mb-2">
                                <h2 className='text-[#0A6ED1] font-bold'>On Grid</h2>
                            </div>
                            <p className='mb-4'>An on-grid solar system, also known as a	grid-tied solar system, is the most widely deployed form of rooftop solar across the world. These systems do not need any batteries and are connected to the utility grid power.</p>
                            <p className='mb-4'>It is best suited for customers with stable grid power and minimal power cuts. Other than homes, even educational institutions, industrial units, commercial establishments use these systems as their primary source of power.
                            </p>
                            <p className='mb-4'>An on-grid system is designed to first allow solar energy to be consumed by the customer. Beyond this, if the customer needs any excess power, it is drawn from the grid. If the customer’s energy requirement is lower than power generated from the solar system, excess solar units are exported to the grid. This is possible through a “Net-meter”. The Net meter is provided by the electricity board, Net meter calculates how many units has your solar system generated and transmitted to the electricity board and  also how many units have been consumed from the electricity board. Mandatory requirements are the  need to check the sanction load mentioned on the electricity bill , get feasibility certificate & net Metering permission from the electricity board.</p>
                        </div>
                    </div>
                    <div className="box flex flex-col-reverse lg:flex-row items-center md:mt-20 mt-10 md:gap-11 gap-4"> 
                        <div className="content lg:w-1/2 text-center lg:text-left">
                            <div className="title md:mt-9 mt-4 md:mb-4 mb-2">
                                <h2 className='text-[#0A6ED1] font-bold'>Off Grid</h2>
                            </div>
                            <p className='mb-4'>In an off-grid solar system the electricity generated from the panels is transmitted from the Solar Inverter to the appliances at your home and also towards the battery . The energy stored in the battery is used during night. This runs independently from/off the power grid and hence does not  require any permission from the electricity board.
                            </p>
                            <p className='mb-4'>The cost of an off-grid solar system has an even wider range because there are a variety of sizes, applications, and components that impact the price.
                            </p>
                            <p className='mb-4'>An alternative to off-grid solar systems is a hybrid system, which remains tied to the grid but includes a solar battery bank to store excess energy.
                            </p>
                        </div>
                        <div className="img lg:w-1/2">
                            <img src={Offgrid} alt="" className='mx-auto' data-aos="flip-down" data-aos-delay="100"/>
                        </div>
                    </div>
                    <div className="box flex lg:flex-row flex-col items-center md:mt-20 mt-10 md:gap-11 gap-4">
                        <div className="lg:w-1/2 img">
                            <img src={Hybridsolution} alt="" className=' mx-auto' data-aos="flip-down" data-aos-delay="100"/>
                        </div>
                        <div className="content lg:w-1/2">
                            <div className="title md:mt-9 mt-4 md:mb-4 mb-2">
                                <h2 className='text-[#0A6ED1] font-bold'>Hybrid Solar</h2>
                            </div>
                            <p className='mb-4'>A Hybrid Solar System contains solar panels, a Solar	hybrid inverter, and battery storage to create an uninterrupted energy solution. </p>
                            <p className='mb-4'>The functionality of this system starts from a  Solar Hybrid Panel that helps to capture the sunlight and then convert it into DC (Direct Current) electricity. The DC electricity from the Solar Hybrid Panel is converted into AC (Alternating Current) with the help of an Solar  Hybrid  Inverter. Solar Hybrid Inverter is connected with Net-Meter as well as with Batteries or Diesel Engine .Then the excess solar energy produced during the day is stored in a Battery Storage for use at night or on cloudy days for a continuous electricity supply. These systems combine the best features of grid-tied and off-grid solar systems, ensuring continuous solar power operation. When solar and battery energy are insufficient, then Grid Connection draws power from the grid and also exports excess energy to the grid. This way Hybrid Solar Systems gives you double benefit ie. Reduction of electricity bill and 24 hours power connectivity.
                            </p>
                        </div>
                    </div>
                    <div className="box flex flex-col-reverse lg:flex-row items-center md:mt-20 mt-10 md:gap-11 gap-4">
                        <div className="content lg:w-2/4 text-center lg:text-left">
                            <div className="title mb-4">
                                <h2 className='text-[#0A6ED1] font-bold'>Panel Cleaning
                                </h2>
                            </div>
                            <p className='mb-4'>Regular cleaning of solar panels is essential to ensure they operate at peak efficiency. Dust, dirt, and debris can accumulate on the panels, reducing their ability to absorb sunlight and generate energy. With our free AMC (Annual Maintenance Contract) for the first year, we provide thorough cleaning services to keep your panels spotless and functioning optimally
                            </p>
                        </div>
                        <div className="img ">
                            <img src={Panelcleaning} alt="" data-aos="flip-down" data-aos-delay="100"/>
                        </div>
                    </div>
                    <div className="box flex lg:flex-row flex-col items-center md:mt-20 mt-10 md:gap-11 gap-4">
                        <div className="img ">
                            <img src={Mechanical} alt="" data-aos="flip-down" data-aos-delay="100"/>
                        </div>
                        <div className="content lg:w-2/4 text-center lg:text-left">
                            <div className="title mb-4">
                                <h2 className='text-[#0A6ED1] font-bold'>Mechanical & electrical health check
                                </h2>
                            </div>
                            <p className='mb-4'>To ensure the longevity and reliability of your solar system, it’s crucial to perform regular mechanical and electrical health checks. Our team of experts will inspect all components of your solar setup, including wiring, connections, and mechanical parts, to identify and address any issues before they become significant problems. This proactive approach helps maintain the system's efficiency and safety
                            </p>
                        </div>
                    </div>
                    <div className="box flex flex-col-reverse lg:flex-row items-center md:mt-20 mt-10 md:gap-11 gap-4">
                        <div className="content lg:w-2/4 text-center lg:text-left">
                            <div className="title mb-4">
                                <h2 className='text-[#0A6ED1] font-bold'>Monitoring performance
                                </h2>
                            </div>
                            <p className='mb-4'>Monitoring the performance of your solar system allows us to track its energy output and identify any discrepancies or declines in performance. With our performance monitoring service, we use advanced tools and technologies to continually assess the efficiency of your solar panels, ensuring they deliver the expected energy savings
                            </p>
                        </div>
                        <div className="img ">
                            <img src={Monitering} alt="" data-aos="flip-down" data-aos-delay="100"/>
                        </div>
                    </div>
                    <div className="box flex lg:flex-row flex-col items-center md:mt-20 mt-10 md:gap-11 gap-4">
                        <div className="img ">
                            <img src={Easy} alt="" data-aos="flip-down" data-aos-delay="100"/>
                        </div>
                        <div className="content lg:w-2/4 text-center lg:text-left">
                            <div className="title mb-4">
                                <h2 className='text-[#0A6ED1] font-bold'>Quick, Easy & Affordable Financing Options</h2>
                            </div>
                            <p className='mb-4'>Switching to solar energy is a significant investment, but it shouldn’t be a financial burden. We offer various financing options that are quick, easy, and affordable to suit different budgets and needs. Our financing solutions are designed to make solar energy accessible to everyone, allowing you to enjoy the benefits of renewable energy without the stress of upfront costs. These options include flexible payment plans and competitive interest rates, ensuring that transitioning to solar power is both convenient and financially feasible.
                            </p>
                        </div>
                    </div>
                    <div className="box flex flex-col-reverse lg:flex-row items-center md:mt-20 mt-10 md:gap-11 gap-4">
                        <div className="content lg:w-2/4 text-center lg:text-left">
                            <div className="title mb-4">
                                <h2 className='text-[#0A6ED1] font-bold'>First Year Free AMC which includes
                                </h2>
                            </div>
                            <p className='mb-4'>
                                <ul>
                                    <li className='mb-3 lg:mb-5'>Yearly 4 Visit every 3 months.</li>
                                    <li className='mb-3 lg:mb-5'>Inverter Checkup</li>
                                    <li className='mb-3 lg:mb-5'>Wiring & Installation Checkup</li>
                                    <li className='mb-3 lg:mb-5'>Performance verification</li>
                                    <li className='mb-3 lg:mb-5'>Panel replacement if required</li>
                                </ul>
                            </p>
                        </div>
                        <div className="img ">
                            <img src={AMC} alt="" data-aos="flip-down" data-aos-delay="100"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Servicedetail
