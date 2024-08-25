import React from 'react'
import Solutionimg from '../images/Our-solution.png'

const Solution = () => {
    return (
        <>
            <section className='our-solution'>
                <div className="container">
                    <div className="inner-box flex">
                        <div className="title w-[80%]">
                            <div className="subtitle">
                                <h3 className='text-3xl font-bold text-[#0A6ED1] relative w-max'>OUR SOLUTION</h3>
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
                    <div className="banner py-[74px] px-32 w-[100%] -mt-[120px]">
                        <p className='w-[45%] text-white'>Decarbonization requires balance between legacy systems and emerging technologies. Between the environment and business economies.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Solution
