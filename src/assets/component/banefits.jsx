import React from 'react'
import banefitsimg from '../images/banefits.png'

const Banefits = () => {
    return (
        <>
            <section className="banefits mb-8">
                <div className="lg:container-fluid container text-center lg:text-left ">
                    <div className="row flex flex-col-reverse lg:flex-row items-center justify-between">
                        <div className="img-box ">
                            <img src={banefitsimg} alt="" />
                        </div>
                        <div className="content-box lg:w-2/4">
                            <div className="title">
                                <div className="subtitle">
                                    <h3 className='text-3xl mx-auto lg:mx-0 font-bold text-[#0A6ED1] relative w-max'>OUR SOLUTION</h3>
                                </div>
                                <div className="title">
                                    <h2>Go solar, go green! </h2>
                                </div>
                                
                                {/* <div className="btn">
                                    <a href="#">Learn More</a>
                                </div> */}
                            </div>
                            <div className="info lg:w-[70%] mt-4 lg:mt-10 border-t  pt-6">

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
