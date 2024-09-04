import React from 'react'
import Freedomimg from '../images/freedom-solar.png'

const Freedom = () => {
    return (
        <>
            <section className="freedom text-center xl:text-left">
                <div className="container">
                    <div className="box relative">
                        <div className="img">
                            <img src={Freedomimg} alt="" />
                        </div>
                        <div className="content xl:absolute top-[10%] left-[15%] rounded-3xl xl:w-[50%] w-full bg-[#00133760] xl:p-8 p-5">
                            <div className="title ">
                                <h5 className='text-[40px] font-bold text-white'>Experience the freedom of solar energy. </h5>
                            </div>
                            <p className='my-5 font-light text-[16px] leading-7 text-white'>Discover how our expert team can design and install a solar system that perfectly suits your needs and budget. From residential homes to commercial buildings, we offer tailored solutions for every customer.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Freedom
