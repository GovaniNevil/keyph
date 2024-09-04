import React from 'react'
import Solutionimg from '../images/Our-solution.png'

const Solution = () => {
    return (
        <>
            <section className='our-solution text-center lg:text-left'>
                <div className="container">
                    <div className="inner-box flex flex-col xl:flex-row gap-10 xl:gap-0 text-center xl:text-left">
                        <div className="title xl:w-[80%]">
                            <div className="subtitle">
                                <h3 className='md:text-3xl text-[18px] font-bold text-[#0A6ED1] relative mx-auto xl:mx-0 w-max'>OUR SOLUTION</h3>
                            </div>
                            <div className="title">
                                <h2>Digital Solutions for a Sustainable and Profitable Energy Transition.</h2>
                            </div>
                            {/* <div className="btn">
                                <a href="#">Learn More</a>
                            </div> */}
                        </div>
                        <div className="img">
                            <img src={Solutionimg} alt="" className=''/>
                        </div>
                    </div>
                    <div className="banner py-5 lg:py-[74px] px-8 lg:px-32 w-[100%] lg:-mt-[120px] hidden xl:block">
                        <p className='xl:w-[45%] text-white'>Decarbonization requires balance between legacy systems and emerging technologies. Between the environment and business economies.</p>
                    </div>
                    <p className='xl:hidden mt-10 text-center text-black'>Decarbonization requires balance between legacy systems and emerging technologies. Between the environment and business economies.</p>
                </div>
            </section>
        </>
    )
}

export default Solution
