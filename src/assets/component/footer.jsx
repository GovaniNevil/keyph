import React from 'react'
import Logo from '../images/logo.svg';
import Startup from '../images/startup.png'
import Make from '../images/makeinindia.png'
import Msme from '../images/MSME.png'
import Contact from '../component/contact';

function Footer() {
    return (
        <>
            <Contact/>
            <footer className='bg-[#0A6ED1] mt-[150px] text-white text-center lg:text-left'> 
                <div className="container my-10">
                    <div className="row lg:flex justify-between mb-6">
                        <div className="logo-box lg:w-[30%] mb-10 lg:mb-0">
                            <a href="#"><img src={Logo} alt="" srcset="" className='lg:mx-0 mx-auto'/></a>
                            <p className=' mt-8'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo </p>
                        </div>
                        <div className="certificate lg:w-[20%] mb-10 lg:mb-0">
                            <ul>
                            <h4 className='font-bold mb-5 text-xl'>Our Certificate</h4>
                                <li>
                                    <img src={Startup} alt="" className='w-[120px] mb-4'/>
                                </li>
                                <li>
                                    <img src={Make} alt="" className='w-[120px] mb-4'/>
                                </li>
                                <li>
                                    <img src={Msme} alt="" className='w-[120px] mb-4'/>
                                </li>
                            </ul>
                        </div>
                        <div className="link mb-10 lg:mb-0 lg:w-[20%]">
                            <ul>
                                <h4 className='font-bold mb-5 text-xl'>Usefful Links</h4>
                                <li className='mb-4'><a href="#">Home</a></li>
                                <li className='mb-4'><a href="#">About us</a></li>
                                <li className='mb-4'><a href="#">Our Service</a></li>
                                <li className='mb-4'><a href="#">Our Product</a></li>
                                <li className='mb-4'><a href="#">Our Project</a></li>
                            </ul>
                        </div>
                        <div className="address mb-10 lg:mb-0 lg:w-[20%]">
                            <h4 className='font-bold mb-5 text-xl'>Address:</h4>
                            <p>Second floor, Room No.1, 51/53,<br />
                                Above G. Bhagat Tarachand,<br />
                                Shaikh Memon Street, Kalbadevi,<br />
                                Mumbai - 400 002.</p>
                        </div>
                    </div>
                    <div className="bottom-row py-7 border-t lg:flex justify-between items-center ">
                        <div className="left mb-4 ">
                            <p> Copyright ©2024</p>
                        </div>
                        <div className="right flex gap-4 lg:gap-7 flex-col lg:flex-row lg:items-center">
                            <a href="#">Terms</a>
                            <a href="#">Privacy</a>
                            <a href="#">Policy and Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
