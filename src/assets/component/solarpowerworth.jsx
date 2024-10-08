import React from 'react'
import Homesolar from '../images/home-solar.png'
import Commercialsolar from '../images/commercial-solar.png'
import Industrialsolar from '../images/industrial-solar.png'
import Bluecheck from '../images/bule-checkbox.png'
import Whitecheck from '../images/white-checkbox.png'

const Solarpowerworth = () => {
    return (
        <>
            <section className="solarpowerworth py-20 bg-[#EAF4FF]" id='center-line'>
                <div className="container">
                    <div className="title mb-11">
                        <div className="subtitle">
                            <h3 className='titlelight mx-auto text-3xl font-bold text-[#0A6ED1] relative w-max'>SOLAR POWER WORTH</h3>
                        </div>
                    </div>
                    <div className="row grid lg:grid-cols-3 gap-11 text-center md:text-left">
                        <div className="box bg-white rounded-[20px] p-14">
                            <div className="img-box">
                                <img src={Homesolar} alt="" className='mx-auto md:mx-0'/>
                            </div>
                            <div className="title">
                                <h3 className='my-5 text-[30px] font-bold'>Home Solar Energy</h3>
                            </div>
                            <div className="list">
                                <ul>
                                    <li className='flex justify-center md:justify-normal gap-4 mb-2'><img src={Bluecheck} alt="" /><span className='text-[#666666]'>Cut Down on Utility Bills</span></li>
                                    <li className='flex justify-center md:justify-normal gap-4 mb-2'><img src={Bluecheck} alt="" /><span className='text-[#666666]'>Effortless Maintenance</span></li>
                                    <li className='flex justify-center md:justify-normal gap-4'><img src={Bluecheck} alt="" /><span className='text-[#666666]'>25 Year Panel Warranty</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="box bg-[#0A6ED1] rounded-[20px] p-14">
                            <div className="img-box">
                                <img src={Commercialsolar} alt="" className='mx-auto md:mx-0'/>
                            </div>
                            <div className="title">
                                <h3 className='my-5 text-[30px] text-white font-bold'>Commercial solar energy</h3>
                            </div>
                            <div className="list">
                                <ul>
                                    <li className='flex justify-center md:justify-normal gap-4 mb-2'><img src={Whitecheck} alt="" /><span className='text-white'>Slash Business Overheads</span></li>
                                    <li className='flex justify-center md:justify-normal gap-4 mb-2'><img src={Whitecheck} alt="" /><span className='text-white'>Reliable & Efficient</span></li>
                                    <li className='flex justify-center md:justify-normal gap-4'><img src={Whitecheck} alt="" /><span className='text-white'>25 Year Panel Warranty</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="box bg-white rounded-[20px] p-14">
                            <div className="img-box">
                                <img src={Industrialsolar} alt="" className='mx-auto md:mx-0'/>
                            </div>
                            <div className="title">
                                <h3 className='my-5 text-[30px] font-bold'>Industrial Solar Energy</h3>
                            </div>
                            <div className="list">
                                <ul>
                                    <li className='flex justify-center md:justify-normal gap-4 mb-2'><img src={Bluecheck} alt="" /><span className='text-[#666666]'>Reduce Operating Costs</span></li>
                                    <li className='flex justify-center md:justify-normal gap-4 mb-2'><img src={Bluecheck} alt="" /><span className='text-[#666666]'>Durable & Low Maintenance</span></li>
                                    <li className='flex justify-center md:justify-normal gap-4'><img src={Bluecheck} alt="" /><span className='text-[#666666]'>25 Year Panel Warranty</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Solarpowerworth
