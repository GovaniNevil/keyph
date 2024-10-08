import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About1 from '../images/about-us-1.png'
import About2 from '../images/about-us-2.png'
import About3 from '../images/about-us-3.png'
import About4 from '../images/DALL·E 2024-10-08 12.45.12 - An image representing cost savings with solar energy. It shows a bright,.webp'
import About5 from '../images/about-us-5.png'


function Whyus() {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration in milliseconds
        });
    },
        []);
    return (
        <>
            <section data-aos="zoom-in" className="why-chooes-us bg-[#EAF4FF] py-7 md:py-24">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                        <div className="title">
                            <div className="">
                                <h3 className='xl:text-[60px] md:text-[50px] text-[35px] font-bold text-[#0A6ED1] relative w-[80%] '>Why Choose Us?</h3>
                                <p className='mb-6'>Whether you're looking to switch to solar energy or upgrade your services, our sales and marketing company is here to help.</p>
                                <Link to="/pages/company.jsx" className='px-6 py-3 bg-[#0A6ED1] rounded-md text-white'>Learn More</Link>
                            </div>
                        </div>
                        <div data-aos="flip-left" data-aos-delay="200" className="box p-9 rounded-2xl bg-white">
                            <img src={About1} alt="" className='mb-4' />
                            <div className="title">
                                <h2>Expertise and Experience.</h2>
                            </div>
                            <p>Our team comprises of experienced professionals who are experts in renewable energy solutions.
                            </p>
                        </div>
                        <div data-aos="flip-left" data-aos-delay="200" className="box p-9 rounded-2xl bg-white">
                            <img src={About2} alt="" className='mb-4' />
                            <div className="title">
                                <h2>Customer-Centric Approach</h2>
                            </div>
                            <p>We prioritize our clients' needs, working diligently to provide solutions that exceed expectations.

                            </p>
                        </div>
                        <div data-aos="flip-left" data-aos-delay="200" className="box p-9 rounded-2xl bg-white">
                            <img src={About3} alt="" className='mb-4' />
                            <div className="title">
                                <h2>Personalized Approach</h2>
                            </div>
                            <p>We believe that every customer is unique, and their needs should be addressed accordingly
                            </p>
                        </div>
                        <div data-aos="flip-left" data-aos-delay="200" className="box p-9 rounded-2xl bg-white">
                            <img src={About4} alt="" className='mb-4 w-full h-[180px] rounded-[20px] '  />
                            <div className="title">
                                <h2>Cost
                                    Saving</h2>
                            </div>
                            <p>By leveraging our industry knowledge and network, we can help you save money on your solar and cable purchases
                            </p>
                        </div>
                        <div data-aos="flip-left" data-aos-delay="200" className="box p-9 rounded-2xl bg-white">
                            <img src={About5} alt="" className='mb-4' />
                            <div className="title">
                                <h2>Advanced Technology</h2>
                            </div>
                            <p>Our partnerships with leading manufacturers ensure access to cutting-edge technology in solar and EV charging solutions
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Whyus
