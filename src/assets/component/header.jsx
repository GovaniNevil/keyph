import React, { useState, useEffect } from 'react';
import Logo from '../images/logo.svg';
import MenuIcon from '../images/hamburger.png';
import CloseIcon from '../images/close.png';
import Contactbtn from '../images/contact-us-icon.png';
import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { FaFile } from "react-icons/fa";



function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className=" fixed top-0 left-0 right-0 z-[99] transition-all duration-300">
      <div className={`mt-[-55px] topheader bg-[#068b4a] px-4 hidden lg:flex md:px-8 lg:px-32 py-3 items-center justify-between  ${isScrolled ? 'hidden' : 'block'}`}>
        <div className="call-box text-white">
          <ul>
            <li className='inline-block mr-5'><a href="tel:+919892679540" className='flex gap-2 items-center'><span className='text-xl'><IoIosCall /></span>+919892679540</a></li>
            <li className='inline-block'><a href="tel:+917304933751" className='flex gap-2 items-center'><span className='text-xl'><IoIosCall /></span> +917304933751</a></li>
          </ul>
        </div>
        <div className="mail-box text-white">
          <ul>
            <li className='inline-block mr-5'><a href="mailto:contact@keyphsolar.com" className='flex gap-2 items-center'><span className='text-xl'><CiMail /></span>contact@keyphsolar.com</a></li>
            <li className='inline-block'><a href="#" className='flex gap-2 items-center'><span className='text-xl'><FaFile />
            </span> Downlond Profile</a></li>
          </ul>
        </div>
      </div>
      <div className={` bulreffect mx-auto flex items-center justify-between border-gray-200 px-4 md:px-8 lg:px-32 ${isScrolled ? 'py-2' : 'py-2'}`}>

        {/* Logo (with Mobile Icon) */}
        <div className="flex items-center">
          <img
            src={mobileMenuOpen ? CloseIcon : MenuIcon}
            alt={mobileMenuOpen ? "Close Menu" : "Menu"}
            className="h-6 w-6 lg:hidden cursor-pointer absolute right-14"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />

          {/* Logo */}
          <a href="/"> {/* Wrap the logo in a link to the homepage */}
            <img src={Logo} alt="Your Logo" className="h-16 md:h-20 w-auto ml-4 md:ml-0" />
          </a>
        </div>

        {/* Navigation Links (Large Screen) */}
        <ul className="hidden lg:flex space-x-12 lg:space-x-8 text-white">
          <li>
            <a href="/" className="text-white transition duration-200">Home</a>
          </li>
          <li>
            <a href="../pages/about-us.jsx" className="text-white transition duration-200">About Us</a>
          </li>
          <li>
            <a href="../pages/services.jsx" className="text-white transition duration-200">Service</a>
          </li>
          <li>
            <a href="../pages/ourproduct.jsx" className="text-white transition duration-200">Our Product</a>
          </li>
          <li>
            <a href="../pages/ourproject.jsx" className="text-white transition duration-200">Our Project</a>
          </li>
          <li>

          </li>
        </ul>

        <div className="contact-box hidden lg:block">
          <a href="../pages/contact-us.jsx" className='flex items-center gap-2 text-white'>Contact Us<sapn><img src={Contactbtn} alt="" /></sapn></a>
        </div>
      </div>

      {/* Mobile Menu (Small Screen) */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full inset-x-0 h-[100vh] bg-white p-4 rounded-md shadow-lg z-20 transition-transform duration-300 transform origin-top">
          <ul className="text-black text-center">
            <li className='mb-6'>
              <a href="/" className="text-black text-center transition duration-200 ">Home</a>
            </li>
            <li className='mb-6'>
              <a href="../pages/about-us.jsx" className="text-black text-center transition duration-200 ">About Us</a>
            </li>
            <li className='mb-6'>
              <a href="../pages/services.jsx" className="text-black text-center transition duration-200 ">Service</a>
            </li>
            <li className='mb-6'>
              <a href="../pages/ourproduct.jsx" className="text-black text-center transition duration-200 ">Our Product</a>
            </li>
            <li className='mb-6'>
              <a href="../pages/ourproject.jsx" className="text-black text-center transition duration-200 ">Our Project</a>
            </li>
            <li>
              <a href="../pages/contact-us.jsx" className='flex items-center gap-2 text-black text-center w-max mx-auto'>Contact Us<sapn><img src={Contactbtn} alt="" /></sapn></a>
            </li>
          </ul>

        </div>
      )}
    </header>
  );
}

export default Header;