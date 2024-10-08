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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = '../images/keyph company profile.pdf';
    link.setAttribute('download', 'keyph_company_profile.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[99] transition-all duration-300">
      <div className={`topheader bg-[#068b4a] px-4 hidden lg:flex md:px-8 lg:px-32 py-3 items-center justify-between ${isScrolled ? 'hidden' : 'block'} ${isScrolled ? 'mt-[-55px]' : 'mt-0'}`}>
        <div className="call-box text-white">
          <ul>
            <li className="inline-block mr-5">
              <a href="tel:+919892679540" className="flex gap-2 items-center">
                <span className="text-2xl"><IoIosCall /></span>Poonam:- +919892679540
              </a>
            </li>
            <li className="inline-block">
              <a href="tel:+917304933751" className="flex gap-2 items-center">
                <span className="text-2xl"><IoIosCall /></span>Karn:- +917304933751
              </a>
            </li>
          </ul>
        </div>
        <div className="mail-box text-white">
          <ul>
            <li className="inline-block mr-5">
              <a href="mailto:contact@keyphsolar.com" className="flex gap-2 items-center">
                <span className="text-2xl"><CiMail /></span>info@keyphsolar.com
              </a>
            </li>
         

            <li className="inline-block">
              <button
                onClick={downloadFile}
                className="flex gap-2 items-center"
              >
                <span className="text-2xl"><FaFile /></span>
                Download Profile
              </button>
            </li>

          </ul>
        </div>
      </div>

      <div className={`bulreffect mx-auto flex items-center justify-between border-gray-200 px-4 md:px-8 lg:px-32 ${isScrolled ? 'py-2' : 'py-2'}`}>
        {/* Logo (with Mobile Icon) */}
        <div className="flex items-center">
          <img
            src={mobileMenuOpen ? CloseIcon : MenuIcon}
            alt={mobileMenuOpen ? "Close Menu" : "Menu"}
            className="h-6 w-6 lg:hidden cursor-pointer absolute right-14"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
          {/* Logo */}
          <a href="/">
            <img src={Logo} alt="Your Logo" className="h-16 md:h-28 w-auto ml-4 md:ml-0" />
          </a>
        </div>

        {/* Navigation Links (Large Screen) */}
        <ul className="hidden lg:flex space-x-12 lg:space-x-8 text-[24px] font-bold text-white">
          <li>
            <a href="/" className="text-white transition duration-200">Home</a>
          </li>
          {/* <li>
            <a href="../pages/about-us.jsx" className="text-white transition duration-200">About Us</a>
          </li> */}
          <li>
            <a href="../pages/services.jsx" className="text-white transition duration-200">Service</a>
          </li>
          <li>
            <a href="../pages/ourproduct.jsx" className="text-white transition duration-200">Our Product</a>
          </li>
          <li>
            <a href="../pages/ourproject.jsx" className="text-white transition duration-200">Our Project</a>
          </li>
        </ul>

        {/* Contact Us Button */}
        <div className="contact-box hidden lg:block">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 text-[24px] font-bold text-white"
          >
            Sign up For Free Quote <img src={Contactbtn} alt="Contact Us" />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Small Screen) */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full inset-x-0 h-[100vh] bg-white p-4 rounded-md shadow-lg z-20 transition-transform duration-300 transform origin-top">
          <ul className="text-black text-center">
            <li className="mb-6">
              <a href="/" className="text-black transition duration-200">Home</a>
            </li>
            <li className="mb-6">
              <a href="../pages/about-us.jsx" className="text-black transition duration-200">About Us</a>
            </li>
            <li className="mb-6">
              <a href="../pages/services.jsx" className="text-black transition duration-200">Service</a>
            </li>
            <li className="mb-6">
              <a href="../pages/ourproduct.jsx" className="text-black transition duration-200">Our Product</a>
            </li>
            <li className="mb-6">
              <a href="../pages/ourproject.jsx" className="text-black transition duration-200">Our Project</a>
            </li>
            <li>
              <a href="../pages/contact-us.jsx" className="flex items-center gap-2 text-black text-center w-max mx-auto">Contact Us <img src={Contactbtn} alt="" /></a>
            </li>
          </ul>
        </div>
      )}

      {/* Contact Us Modal */}
      {/* Contact Us Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-lg p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-xl mx-auto relative">
            <h2 className="text-2xl font-bold mb-4 text-center">Contact Now </h2>
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
                <input
                  type="text"
                  placeholder="WhatsApp number"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  maxLength={10} // Add character limit
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-md p-2 w-full"
              />
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Pin code"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <div>
                <h3>Monthly Electricity Bill *</h3>
                <div class="flex flex-wrap gap-2">
                  <div className="border border-gray-300 rounded-md px-4 py-2 flex items-center">
                    <input type="radio" name="electricity_bill" value="less_than_1500" className="mr-1" />
                    <label for="less_than_1500">Less than ₹1500</label>
                  </div>
                  <div className="border border-gray-300 rounded-md px-4 py-2 flex items-center">
                    <input type="radio" name="electricity_bill" value="1500-2500" className="mr-1" />
                    <label for="less_than_1500">₹1500 - ₹2500</label>
                  </div>
                  <div className="border border-gray-300 rounded-md px-4 py-2 flex items-center">
                    <input type="radio" name="electricity_bill" value="2500-4000" className="mr-1" />
                    <label for="less_than_1500">₹2500 - ₹4000</label>
                  </div>
                  <div className="border border-gray-300 rounded-md px-4 py-2 flex items-center">
                    <input type="radio" name="electricity_bill" value="4000-8000" className="mr-1" />
                    <label for="less_than_1500">₹4000 - ₹8000</label>
                  </div>
                  <div className="border border-gray-300 rounded-md px-4 py-2 flex items-center">
                    <input type="radio" name="electricity_bill" value="more_than_8000" className="mr-1" />
                    <label for="less_than_1500">
                    More than ₹8000</label>
                  </div>
                </div>
              </div>
             
              
              {/* <div className="flex items-center">
                <input type="checkbox" id="agree" className="mr-2" />
                <label htmlFor="agree" className="text-sm">
                  I agree to SolarSquare's <a href="#" className="text-blue-500">terms of service</a> & <a href="#" className="text-blue-500">privacy policy</a>
                </label>
              </div> */}
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md px-4 py-2 w-full"
              >
                Yes! Reduce my electricity bill
              </button>
            </form>
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setIsModalOpen(false)}
            >
              <img src={CloseIcon} alt="Close Modal" className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}

    </header>
  );
}

export default Header;
