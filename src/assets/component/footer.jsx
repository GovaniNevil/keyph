import React from 'react'
import Logo from '../images/logo.svg';

function Footer() {
    return (
        <>
            <footer className='bg-[#0A6ED1] mt-[150px] text-white text-center lg:text-left'> 
                <div className="container my-10">
                    <div className="row lg:flex justify-between mb-6">
                        <div className="logo-box lg:w-[50%] mb-10 lg:mb-0">
                            <a href="#"><img src={Logo} alt="" srcset="" className='mx-auto'/></a>
                            <p className='lg:w-2/4 mt-8'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo </p>
                        </div>
                        <div className="link mb-10 lg:mb-0">
                            <ul>
                                <h4 className='font-bold mb-5 text-xl'>Usefful Links</h4>
                                <li className='mb-4'><a href="#">Home</a></li>
                                <li className='mb-4'><a href="#">About us</a></li>
                                <li className='mb-4'><a href="#">Our Service</a></li>
                                <li className='mb-4'><a href="#">Our Product</a></li>
                                <li className='mb-4'><a href="#">Contact us</a></li>
                            </ul>
                        </div>
                        <div className="address mb-10 lg:mb-0">
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
                        <div className="right flex gap-4 lg:gap-7 flex-col lg:items-center">
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
