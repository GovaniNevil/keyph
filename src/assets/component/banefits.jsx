import React from 'react'
import banefitsimg from '../images/banefits.png'

const Banefits = () => {
    return (
        <>
            <section className="banefits mb-8">
                <div className="lg:container-fluid container text-center lg:text-left ">
                    <div className="row flex flex-col xl:flex-row items-center justify-between">
                        <div className="img-box ">
                            <img src={banefitsimg} alt="" />
                        </div>
                        <div className="content-box xl:w-2/4 text-center">
                            <div className="title">
                                <div className="subtitle">
                                    <h3 className='md:text-3xl text-[18px] mx-auto xl:mx-0 font-bold text-[#0A6ED1] relative w-max '>OUR SOLUTION</h3>
                                </div>
                                <div className="title">
                                    <h2>Go solar, go green! </h2>
                                </div>
                                
                                {/* <div className="btn">
                                    <a href="#">Learn More</a>
                                </div> */}
                            </div>
                            <div className="info xl:w-[70%] mt-4 xl:mt-10 border-t  pt-6">

                                    <p>Enjoy endless, clean energy from the sun. Lower your electricity bills while reducing
                                    your carbon footprint. Solar power is reliable, affordable, and a sustainable choice for a brighter future.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banefits
