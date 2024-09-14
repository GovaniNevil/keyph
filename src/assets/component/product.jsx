import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Boximg from '../images/product-img-1.png'
import Product1 from '../images/product-square (1).png'
import Product2 from '../images/product-square (2).png'
import Product3 from '../images/product-square (3).png'
import Product4 from '../images/product-square (4).png'
import Product5 from '../images/product-square (5).png'
import Contactbtn from '../images/contact-us-icon.png'

function Products() {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration in milliseconds
        });
    },
        []);
    return (
        <>
            <section className='products py-12 lg:py-24 px-20 text-center lg:text-left lg:px-40' id='products'>
                <div className="title">
                    <div className="subtitle">
                        <h3 className='titlelight mx-auto md:text-3xl text-[18px] font-bold text-white relative w-max'>OUR PRODUCTS</h3>
                    </div>
                    <p className='text-white text-center mt-5'>Explore Our Range of Solar and Renewable Energy Services</p>
                </div>
                <div className="product-row mt-24">
                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-24 justify-center">
                        <div data-aos="zoom-in" className="box">
                            <div className="img">
                                <img src={Product1} alt="" className='mx-auto lg:mx-0' />
                            </div>
                            <div className="info-box text-white  text-center lg:text-left mt-5">
                                <div className="title">
                                    <h3 className='text-[25px]'>SOLAR WATER PUMP </h3>
                                </div>
                                <p className='my-5 font-light text-[16px] leading-7'>Our team of experienced technicians will install high-quality solar panels on your property to provide clean, renewable energy.</p>
                                {/* <div className="btn">
                                    <div className="contact-btn">
                                        <a href="#" className='flex items-center gap-2 w-max mx-auto lg:mx-0'>Know More<sapn><img src={Contactbtn} alt="" /></sapn></a>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div data-aos="zoom-in" className="box">
                            <div className="img">
                                <img src={Product2} alt="" className='mx-auto lg:mx-0' />
                            </div>
                            <div className="info-box text-white text-center lg:text-left mt-5">
                                <div className="title">
                                    <h3 className='text-[25px]'>Street Lights </h3>
                                </div>
                                <p className='my-5 font-light text-[16px]  leading-7'>We offer installation services for wind turbines to help you generate energy from the wind. Our turbines are designed to be efficient.</p>
                                {/* <div className="btn">
                                    <div className="contact-btn">
                                        <a href="#" className='flex items-center gap-2 w-max mx-auto lg:mx-0'>Know More<sapn><img src={Contactbtn} alt="" /></sapn></a>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="box">
                            <div className="img">
                                <img src={Product3} alt="" className='mx-auto lg:mx-0' />
                            </div>
                            <div className="info-box text-white  text-center lg:text-left mt-5">
                                <div className="title">
                                    <h3 className='text-[25px]'>Solar Water Heater</h3>
                                </div>
                                <p className='my-5 font-light text-[16px]  leading-7'>To keep your solar panels functioning at peak efficiency, we offer cleaning and maintenance services to keep them free of dirt and debris.</p>
                                {/* <div className="btn">
                                    <div className="contact-btn">
                                        <a href="#" className='flex items-center gap-2 w-max mx-auto lg:mx-0'>Know More<sapn><img src={Contactbtn} alt="" /></sapn></a>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="box">
                            <div className="img">
                                <img src={Product4} alt="" className='mx-auto lg:mx-0' />
                            </div>
                            <div className="info-box text-white  text-center lg:text-left mt-5">
                                <div className="title">
                                    <h3 className='text-[25px]'>Solar Rocket Lights </h3>
                                </div>
                                <p className='my-5 font-light text-[16px]  leading-7'>Our team of experienced technicians will install high-quality solar panels on your property to provide clean, renewable energy.</p>
                                {/* <div className="btn">
                                    <div className="contact-btn">
                                        <a href="#" className='flex items-center gap-2 w-max mx-auto lg:mx-0'>Know More<sapn><img src={Contactbtn} alt="" /></sapn></a>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="box">
                            <div className="img">
                                <img src={Product5} alt="" className='mx-auto lg:mx-0' />
                            </div>
                            <div className="info-box text-white  text-center lg:text-left mt-5">
                                <div className="title">
                                    <h3 className='text-[25px]'>EV Charger </h3>
                                </div>
                                <p className='my-5 font-light text-[16px]  leading-7'>We offer installation services for wind turbines to help you generate energy from the wind. Our turbines are designed to be efficient.</p>
                                {/* <div className="btn">
                                    <div className="contact-btn">
                                        <a href="#" className='flex items-center gap-2 w-max mx-auto lg:mx-0'>Know More<sapn><img src={Contactbtn} alt="" /></sapn></a>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="btn mt-6">
                        <div className="contact-btn w-max mx-auto text-white">
                            <a href="#" className='flex items-center gap-2 w-max mx-auto lg:mx-0'>Know More<sapn><img src={Contactbtn} alt="" /></sapn></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products
