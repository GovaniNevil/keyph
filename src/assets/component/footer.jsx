import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from '../images/logo.svg';
import Contact from '../component/contact';

function Footer() {
    return (
        <>
            <Contact />
            <footer className='bg-[#0A6ED1] mt-[150px] text-white text-center lg:text-left'>
                <div className="container my-10">
                    <div className="row lg:flex justify-between mb-6">
                        <div className="logo-box lg:w-[30%] mb-10 lg:mb-0">
                            <Link to="/" aria-label="Home Page"> {/* Link to home page */}
                                <img src={Logo} alt="Company Logo" className='w-[100px] lg:mx-0 mx-auto' />
                            </Link>
                            <p className='mt-8'>
                            Innovating solar solutions today for a sustainable tomorrow – Keyph Solar Solution.
                            </p>
                        </div>
                        <div className="link mb-10 lg:mb-0 lg:w-[20%]">
                            <h4 className='font-bold mb-5 text-[22px]'>Useful Links</h4>
                            <ul>
                                <li className='mb-4'><Link to="/">Home</Link></li>
                                <li className='mb-4'><Link to="/pages/services.jsx">Our Service</Link></li>
                                <li className='mb-4'><Link to="/pages/ourproduct.jsx">Our Product</Link></li>
                                <li className='mb-4'><Link to="/pages/ourproject.jsx">Our Project</Link></li>
                            </ul>
                        </div>
                        <div className="address mb-10 lg:mb-0 lg:w-[30%]">
                            <h4 className='font-bold mb-5 text-xl'>Address:</h4>
                            <p>
                                Second floor, Room No.1, 51/53,<br />
                                Above G. Bhagat Tarachand,<br />
                                Shaikh Memon Street, Kalbadevi,<br />
                                Mumbai - 400 002.
                            </p>
                        </div>
                    </div>
                    <div className="bottom-row py-7 border-t lg:flex justify-between items-center ">
                        <div className="left mb-4 ">
                            <p>Copyright ©2024</p>
                        </div>
                        <div className="right flex gap-4 lg:gap-7 flex-col lg:flex-row lg:items-center">
                            <Link to="/terms">Terms</Link>
                            <Link to="/privacy">Privacy</Link>
                            <Link to="/policy">Policy and Cookie Policy</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
