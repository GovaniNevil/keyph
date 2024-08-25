import React from 'react'
import banefitsimg from '../images/banefits.png'

const Banefits = () => {
    return (
        <>
            <section className="banefits">
                <div className="container-fluid">
                    <div className="row flex items-center justify-between">
                        <div className="img-box ">
                            <img src={banefitsimg} alt="" />
                        </div>
                        <div className="content-box w-2/4">
                            <div className="title">
                                <div className="subtitle">
                                    <h3 className='text-3xl font-bold text-[#0A6ED1] relative w-max'>OUR SOLUTION</h3>
                                </div>
                                <div className="title">
                                    <h2>Go solar, go green! </h2>
                                </div>
                                
                                {/* <div className="btn">
                                    <a href="#">Learn More</a>
                                </div> */}
                            </div>
                            <div className="info w-[70%] mt-10 border-t  pt-6">

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
