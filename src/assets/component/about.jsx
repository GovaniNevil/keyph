import React from 'react'
import About1 from '../images/Image-1.png'
import About2 from '../images/Image.png'
import powerimg from '../images/Hydro Power.png'

const About = () => {
    return (
        <>
            <section className="about py-14 lg:py-32 relative overflow-hidden text-center lg:text-left">
                <div className="container">
                    <div className="inner-box lg:flex gap-14">
                        <div className="img-box relative">
                            <img src={About1} alt="" className='mx-auto'/>
                            <img src={powerimg} alt="" className='hidden xl:block absolute -right-[20%] top-[50%] w-[220px]' />
                        </div>
                        <div className="contant lg:w-[65%]">
                            <div className="title">
                                <h2 className='lg:w-4/5'>Decarbonization is mission,
                                    critical for the planet</h2>
                                <div className="btn">
                                    <a href="#">Learn More</a>
                                </div>
                            </div>
                            <div className="contant mt-5 md:mt-20">
                                <div className="box lg:flex lg:gap-10">
                                    <div className="img-box hidden xl:block">
                                        <img src={About2} alt="" className='mx-auto' />
                                    </div>
                                    <div className="content xl:w-[60%] mt-4 lg:mt-0">
                                        <p className='mb-4'>The global energy landscape will change more in the next 10 years than in the previous hundred. As the world’s energy sector moves away from fossil fuels toward renewable energy sources, industrial companies are challenged with addressing this transition in transformative ways.</p>
                                        <p>Renewable Energy harnesses the earth’s most abundant resources – the strength of the wind, the heat of the sun, ,and the force of water; delivering green electrons to power the world’s biggest economies and the most remote communities.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
