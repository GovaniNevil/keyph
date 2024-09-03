import React from 'react'
import Icon1 from '../images/icon1.png'
import Icon2 from '../images/icon2.png'
import Icon3 from '../images/icon3.png'
import Icon4 from '../images/icon4.png'
import Icon5 from '../images/icon5.png'
import Icon6 from '../images/icon6.png'
import Icon7 from '../images/icon7.png'

const Serviceoption = () => {
  return (
    <>
        <section className="service-option">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="box p-8">
                        <div className="icon">
                            <img src={Icon1} alt="" />
                        </div>
                        <div className="title">
                            <h3 className='font-bold text-[24px] my-4'>On Grid</h3>
                        </div>
                        <p>Harness sunlight to generate electricity, feeding excess power back to the grid for credits while drawing power from the grid when needed.</p>
                    </div>
                    <div className="box p-8">
                        <div className="icon">
                            <img src={Icon2} alt="" />
                        </div>
                        <div className="title">
                            <h3 className='font-bold text-[24px] my-4'>Off Grid</h3>
                        </div>
                        <p>Sunlight, store energy in batteries, and provide independent power supply without relying on the grid.</p>
                    </div>
                    <div className="box p-8">
                        <div className="icon">
                            <img src={Icon3} alt="" />
                        </div>
                        <div className="title">
                            <h3 className='font-bold text-[24px] my-4'>Hybrid Solar</h3>
                        </div>
                        <p>Solar services optimize energy consumption by combining solar panels, battery storage, and grid connection for maximum self-sufficiency and cost savings.</p>
                    </div>
                    <div className="box p-8">
                        <div className="icon">
                            <img src={Icon4} alt="" />
                        </div>
                        <div className="title">
                            <h3 className='font-bold text-[24px] my-4'>Panel cleaning</h3>
                        </div>
                        <p>Restore solar panel efficiency and maximize energy output with our professional cleaning services.</p>
                    </div>
                    <div className="box p-8">
                        <div className="icon">
                            <img src={Icon5} alt="" />
                        </div>
                        <div className="title">
                            <h3 className='font-bold text-[24px] my-4'>Mechanical & electrical health check</h3>
                        </div>
                        <p>Comprehensive assessment of solar system components for optimal performance and longevity.</p>
                    </div>
                    <div className="box p-8">
                        <div className="icon">
                            <img src={Icon6} alt="" />
                        </div>
                        <div className="title">
                            <h3 className='font-bold text-[24px] my-4'>Monitoring performance</h3>
                        </div>
                        <p>Track, analyze, and optimize solar system performance for maximum energy yield and cost savings.</p>
                    </div>
                    <div className="box p-8">
                        <div className="icon">
                            <img src={Icon7} alt="" />
                        </div>
                        <div className="title">
                            <h3 className='font-bold text-[24px] my-4'>Quick, Easy & Affordable Financing Options</h3>
                        </div>
                        <p>Access hassle-free, budget-friendly financing for your solar system installation</p>
                    </div>
                    <div className="box p-8 bg-[#0A6ED1] rounded-3xl text-center text-white">
                        <div className="title mt-14">
                            <h3 className='font-bold text-3xl'>More service?</h3>
                        </div>
                        <p className='mb-4'>You can tell us what you need and we can help! </p>
                        <div className="btn">
                            <a href="#" className='rounded-[30px] text-[20px] fomt-bold inlineblock px-10 py-3 text-[#0A6ED1] bg-white'>Call Us Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Serviceoption
