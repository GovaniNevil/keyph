import React from 'react'
import Solarpowerimg from '../images/solarpower.png'

const Solarpower = () => {
    return (
        <>
            <section className="solar-power my-8 md:my-36">
                <div className="container">
                    <div className="box flex flex-col-reverse md:flex-row items-center gap-16 md:gap-32">
                        <div className="content-box md:w-2/4 text-center md:text-left">
                            <div className="title">
                                <h2>Solar Power: Your Path to
                                Energy Independence</h2>
                            </div>
                            <p className='mt-5'>Go green and save money with our solar energy solutions. Enjoy clean, renewable electricity while reducing your carbon footprint. Our high-efficiency panels maximize energy production. Take control of your energy future today.</p>
                        </div>
                        <div className="img-box">
                            <img src={Solarpowerimg} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Solarpower
