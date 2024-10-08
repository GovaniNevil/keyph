import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Mission from '../images/Mission.webp'
import Visionimg from '../images/Vision.webp'

function Vision() {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration in milliseconds
        });
    },
        []);
    return (
        <>
            <section className="vision my-36 bg-gradient-to-b from-blue-50 to-white py-20">
                <div className="container mx-auto px-8 lg:px-16">
                    <div className="flex gap-16 md:gap-20">
                        {/* Mission Section */}
                        <div className="mission-box relative bg-white rounded-3xl shadow-lg border-t-4 border-[#0A6ED1] px-10 py-12 hover:scale-105 transform transition-all duration-300 group" data-aos="fade-up">
                            <div className="flex flex-col items-center gap-6">
                                <div className="img-container lg:w-full lg:h-[310px] md:w-32 md:h-32 rounded-[30px] overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105">
                                    <img src={Mission} alt="Mission" className="w-full h-full object-cover" />
                                </div>
                                <div className="content-box text-center">
                                    <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4 flex items-center justify-center gap-2">
                                        <span className="text-2xl transform group-hover:rotate-12 transition-transform duration-300">🌞</span> OUR MISSION
                                    </h2>
                                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                                        We strive to be a leader in the global solar industry, pioneering sustainable energy innovations and pushing the boundaries of solar technology to build a greener, brighter future.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Vision Section */}
                        <div className="vision-box relative bg-white rounded-3xl shadow-lg border-t-4 border-[#0A6ED1] px-10 py-12 hover:scale-105 transform transition-all duration-300 group" data-aos="fade-up" data-aos-delay="100">
                            <div className="flex flex-col items-center gap-6">
                                <div className="img-container  lg:w-full lg:h-[310px] md:w-32 md:h-32 rounded-[30px] overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105">
                                    <img src={Visionimg} alt="Vision" className="w-full h-full object-cover" />
                                </div>
                                <div className="content-box text-center">
                                    <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4 flex items-center justify-center gap-2">
                                        <span className="text-2xl transform group-hover:rotate-12 transition-transform duration-300">🌍</span> OUR VISION
                                    </h2>
                                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                                        Our vision is to create sustainable change by building trust and transforming the energy landscape, advancing the shift to clean solar power, and reducing fossil fuel dependence for a sustainable future.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>







        </>
    )
}

export default Vision
