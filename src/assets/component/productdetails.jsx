import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Productimg1 from '../images/product-details- (2).png'
import Productimg2 from '../images/product-details-(3).jpg'
import Productimg3 from '../images/product-details-(4).jpg'
import Productimg4 from '../images/product-details-(5).jpg'
import Productimg5 from '../images/product-details- (1).png'


const Productdetails = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration in milliseconds
        });
    },
        []);
    return (
        <>
            <section className="product-details overflow-x-hidden" id='center-line'>
                <div className="container">
                    <div className="title mb-11">
                        <div className="subtitle">
                            <h3 className='titlelight mx-auto text-3xl font-bold text-[#0A6ED1] relative w-max'>OUR PRODUCTS</h3>
                        </div>
                    </div>
                    <div className="porduct-box rounded-[30px] md:py-14 py-7 md:px-24 px-6 bg-[#0A6ED1] mb-12" data-aos="fade-right">
                        <div className="grid xl:grid-cols-3 gap-y-5 md:gap-7">
                            <div className="content-box text-center md:text-left text-white">
                                <div className="title">
                                    <h2>01</h2>
                                </div>
                                <div className="title">
                                    <h2>Solar Water heaters</h2>
                                </div>
                                <p>Solar water heaters utilize the sun’s energy to heat water, providing an efficient and environmentally friendly solution for residential and commercial use. These systems reduce dependency on conventional energy sources, lowering energy bills and minimizing carbon footprints.
                                </p>
                            </div>
                            <div className="col-span-2">
                                <img src={Productimg1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="porduct-box rounded-[30px] md:py-14 py-7 md:px-24 px-12 bg-[#068B4A] mb-12" data-aos="fade-left">
                        <div className="grid xl:grid-cols-3 gap-y-5 md:gap-7">
                            <div className="content-box text-center md:text-left text-white">
                                <div className="title">
                                    <h2>02</h2>
                                </div>
                                <div className="title">
                                    <h2>Solar Street Lights</h2>
                                </div>
                                <p>Our solar street lights are designed to provide bright and reliable illumination for streets, pathways, and public spaces. Powered entirely by solar energy, these lights offer an energy-efficient and sustainable alternative to traditional street lighting, enhancing safety and visibility while reducing energy costs.
                                </p>
                            </div>
                            <div className="col-span-2">
                                <img src={Productimg2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="porduct-box rounded-[30px] md:py-14 py-7 md:px-24 px-12 bg-[#0A6ED1] mb-12" data-aos="fade-right">
                        <div className="grid xl:grid-cols-3 gap-y-5 md:gap-7">
                            <div className="content-box text-center md:text-left text-white">
                                <div className="title">
                                    <h2>03</h2>
                                </div>
                                <div className="title">
                                    <h2>Solar Water Pumps</h2>
                                </div>
                                <p>Our solar water pumps are designed to provide a reliable and sustainable solution for water extraction. They are perfect for agricultural use, offering an eco-friendly alternative to traditional pumps by harnessing solar energy to power the water flow, ensuring efficient and cost-effective irrigation.
                                </p>
                            </div>
                            <div className="col-span-2">
                                <img src={Productimg3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="porduct-box rounded-[30px] md:py-14 py-7 md:px-24 px-12 bg-[#068B4A] mb-12" data-aos="fade-left">
                        <div className="grid xl:grid-cols-3 gap-y-5 md:gap-7">
                            <div className="content-box text-center md:text-left text-white">
                                <div className="title">
                                    <h2>04</h2>
                                </div>
                                <div className="title">
                                    <h2>Solar Rock Lights</h2>
                                </div>
                                <p>Solar rock lights are an innovative and aesthetic lighting solution for gardens and landscapes. These lights blend seamlessly with the natural environment while providing powerful illumination using solar energy. They are easy to install and require minimal maintenance, making them an ideal choice for outdoor lighting.
                                </p>
                            </div>
                            <div className="col-span-2">
                                <img src={Productimg4} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="porduct-box rounded-[30px] md:py-14 py-7 md:px-24 px-12 bg-[#0A6ED1] mb-12" data-aos="fade-right">
                        <div className="grid xl:grid-cols-3 gap-y-5 md:gap-7">
                            <div className="content-box text-center md:text-left text-white">
                                <div className="title">
                                    <h2>05</h2>
                                </div>
                                <div className="title">
                                    <h2>EV Charger</h2>
                                </div>
                                <p>Our EV chargers are designed to support the growing demand for electric vehicles, offering convenient and efficient charging solutions for both residential and commercial use. Powered by solar energy, these chargers provide a sustainable option for electric vehicle owners, promoting the adoption of clean energy transportation.
                                </p>
                            </div>
                            <div className="col-span-2">
                                <img src={Productimg5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Productdetails
