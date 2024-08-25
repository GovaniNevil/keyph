import React, { useState, useEffect } from 'react';
import Logo from '../images/logo.svg';
import MenuIcon from '../images/hamburger.png'; 
import CloseIcon from '../images/hamburger.png';
import Contactbtn from '../images/contact-us-icon.png'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 

  return (
    <header className={`px-4 md:px-8 lg:px-32 fixed top-0 left-0 right-0 z-[99] bg-white transition-all duration-300 border-gray-200 ${isScrolled ? 'py-2' : 'py-2'} ${!isScrolled ? 'border-none' : 'border-b'}`}>
      <div className="  mx-auto flex items-center justify-between">

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
            <img src={Logo} alt="Your Logo" className="h-8 md:h-20 w-auto ml-4 md:ml-0" />
          </a> 
        </div>

        {/* Navigation Links (Large Screen) */}
        <ul className="hidden lg:flex space-x-12 lg:space-x-8 text-gray-800">
          <li>
            <a href="/" className="text-black-900 hover:text-black-900 transition duration-200">Home</a>
          </li>
           <li>
            <a href="../pages/about-us.jsx" className="text-gray-900 hover:text-black-900 transition duration-200">About Us</a>
          </li>
          <li>
            <a href="../pages/services.jsx" className="text-gray-900 hover:text-black-900 transition duration-200">Service</a>
          </li>
           {/* <li>
            <a href="/lab-product" className="text-gray-900 hover:text-black-900 transition duration-200">Blog</a>
          </li> 
          <li>
            <a href="/placement-package" className="text-gray-900 hover:text-black-900 transition duration-200">Support</a>
          </li> */}
        </ul>
        <div className="contact-btn">
          <a href="../pages/contact-us.jsx" className='flex items-center gap-2'>Contact Us<sapn><img src={Contactbtn} alt="" /></sapn></a>
        </div>
      </div>

      {/* Mobile Menu (Small Screen) */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full inset-x-0 h-[100vh] bg-white p-4 rounded-md shadow-lg z-20 transition-transform duration-300 transform origin-top">
          <ul className="space-y-6 text-center">
          <li>
            <a href="/" className="text-gray-900 hover:text-blck-900 transition duration-200">Home</a>
          </li>
          {/* <li>
            <a href="/about" className="text-gray-900 hover:text-blck-900 transition duration-200">About Us</a>
          </li>
          <li>
            <a href="/contact" className="text-gray-900 hover:text-blck-900 transition duration-200">Contact Us</a>
          </li>
          <li>
            <a href="/lab-product" className="text-gray-900 hover:text-blck-900 transition duration-200">Lab Product</a>
          </li>
          <li>
            <a href="/placement-package" className="text-gray-900 hover:text-blck-900 transition duration-200">Placement Package</a>
          </li> */}
          <li>
            <a href="https://gradwise.in/user"className='border border-[#4E489B] px-8 py-3 rounded-full bg-[white] hover:bg-[#4E489B] text-[#4E489B] hover:text-[white] transition duration-500'>Log In</a>
          </li>
          <li>
            <a href="https://forms.office.com/r/uqziAMarwM" className= 'border border-[#4E489B] px-8 py-3 rounded-full bg-[#4E489B] hover:bg-[white] text-white hover:text-[#4E489B] transition duration-500'>Request A Demo</a>
          </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;