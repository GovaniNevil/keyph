import React from 'react'
import Introabout from '../images/about-intro.png'

const Aboutintro = () => {
    return (
        <>
            <section className='aboutintro my-20 xl:mt-28'>
                <div className="container">
                    <div className="inner-box flex flex-col-reverse xl:flex-row justify-between items-start">
                        <div className="contant-box xl:w-2/4">
                            <div className="title ">
                                <div className="subtitle  xl:w-[60%] ">
                                    <h3 className='md:text-[45px] text-[25px] font-semibold text-[#0A6ED1] relative '>Welcome to Keyph Solar solution</h3>
                                </div>
                                <div className="title">
                                    <h2>We exist to empower individuals and business to embrace solar energy.</h2>
                                </div>
                            </div>
                            <div className="content">
                                <p>At KeyPh Solar Solutions, we are a leading partner in the solar industry, committed to providing sustainable energy solutions for  residential and commercial properties. With our unique partnerships with leading manufacturers and technology partners, we offer  cutting-edge solar products and solutions.</p>
                            </div>
                        </div>
                        <div className="img-box xl:w-[40%] mx-auto xl:mx-0">
                            <img src={Introabout} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutintro
