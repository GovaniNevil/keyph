import React from 'react'
import Solarpowerimg from '../images/pm-banner.jpg'

const Solarpower = () => {
    return (
        <>
            <section className="solar-power my-8 md:my-36">
                <div className="container">
                    <div className="box flex flex-col-reverse md:flex-row items-center gap-16 md:gap-16">
                        <div className="content-box md:w-2/4 text-center md:text-left">
                            <div className="title">
                                <h4 className='text-[35px] font-semibold'>Go Green with PM Surya Ghar: Affordable Solar Installation Solutions</h4>
                            </div>
                            <p className='mt-5'>Go green and save money with our solar energy solutions. Enjoy clean, renewable electricity while reducing your carbon footprint. Our high-efficiency panels maximize energy production. Take control of your energy future today.</p>
                        </div>
                        <div className="img-box">
                            <img src={Solarpowerimg} alt="" className='rounded-xl'/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Solarpower
