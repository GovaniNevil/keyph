import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contactbtn from '../images/contact-us-icon.png'
import Contactprofile from '../images/profile.png'
import Location from '../images/location.png'
import Call from '../images/call.png'

function Contact() {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration in milliseconds
        });
    },
        []);
    return (
        <>
            <section className="contact-from mt-10 lg:mt-36">
                <div className="container">
                    <div className="row xl:flex justify-between items-end text-center lg:text-left">
                        <div data-aos="zoom-in-right" className="calltoaction px-9 py-10  bg-white/30 backdrop-blur-lg rounded-3xl xl:w-[40%]">
                            <div className="mail-box flex items-center gap-5 mb-5">
                                <div className="profile-img">
                                    <img src={Contactprofile} alt="" srcset="" />
                                </div>
                                <div className="content text-white">
                                    <div className="title">
                                        <h3 className='text-white text-[30px]'>Keyph Solar Solution</h3>
                                    </div>
                                    <a href="mailto:contact@keyphsolar.com">contact@keyphsolar.com</a>
                                </div>
                            </div>
                            <div className="mail-box flex items-center gap-5 mb-5">
                                <div className="profile-img">
                                    <img src={Call} alt="" srcset="" />
                                </div>
                                <div className="content text-white">
                                    <a href="tel:+917304933751">+91 73049 33751</a><br></br>
                                    <a href="tel:+919892679540">+91 98926 79540</a>
                                </div>
                            </div>
                            <div className="mail-box flex items-center gap-5">
                                <div className="profile-img">
                                    <img src={Location} alt="" srcset="" />
                                </div>
                                <div className="content text-white">
                                    <a href="#">Mumbai, Maharashtra, India</a>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in-left" className="contact-form rounded-xl p-14  bg-black/30 backdrop-blur-lg mt-20 xl:w-[55%]">
                            {/* <div className="title">
                                <div className="title">
                                    <h2 className='text-white'>Inquiry Now</h2>
                                </div>
                                <p className='my-8 text-white'>Don't hesitate to leave us your phone number. We will contact you to discuss any inquiry you may have!!</p>
                            </div> */}
                            <div className="form">
                                <div className="flex items-center justify-center bg-opacity-50">
                                    <div className="rounded-lg w-full max-w-xl mx-auto">
                                        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
                                        <form className="space-y-4">
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                className="border border-gray-300 rounded-md p-2 w-full"
                                            />
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
                                            <div className="flex flex-col md:flex-row gap-4">
                                                <input
                                                    type="text"
                                                    placeholder="Zip code"
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
                                                        <input type="radio" name="electricity_bill" value="less_than_1500" className="mr-1 bg-white" />
                                                        <label for="less_than_1500">Less than ₹1500</label>
                                                    </div>
                                                    <div className="border border-gray-300 rounded-md px-4 py-2 flex items-center">
                                                        <input type="radio" name="electricity_bill" value="1500-2500" className="mr-1 bg-white" />
                                                        <label for="less_than_1500">₹1500 - ₹2500</label>
                                                    </div>
                                                    <div className="border border-gray-300 rounded-md px-4 py-2 flex items-center">
                                                        <input type="radio" name="electricity_bill" value="2500-4000" className="mr-1 bg-white" />
                                                        <label for="less_than_1500">₹2500 - ₹4000</label>
                                                    </div>
                                                    <div className="border border-gray-300 rounded-md px-4 py-2 flex items-center">
                                                        <input type="radio" name="electricity_bill" value="4000-8000" className="mr-1 bg-white" />
                                                        <label for="less_than_1500">₹4000 - ₹8000</label>
                                                    </div>
                                                    <div className="border border-gray-300 rounded-md px-4 py-2 flex items-center">
                                                        <input type="radio" name="electricity_bill" value="more_than_8000" className="mr-1 bg-white" />
                                                        <label for="less_than_1500">
                                                            More than ₹8000</label>
                                                    </div>
                                                </div>
                                            </div>
                                            

                                            {/* <div className="flex items-center">
                                                <input type="checkbox" id="agree" className="mr-2" />
                                                <label htmlFor="agree" className="text-sm">
                                                    I agree to keyph's <a href="#" className="text-blue-500">terms of service</a> & <a href="#" className="text-blue-500">privacy policy</a>
                                                </label>
                                            </div> */}
                                            <button
                                                type="submit"
                                                className="bg-blue-500 text-white rounded-md px-4 py-2 w-full"
                                            >
                                                Yes! Reduce my electricity bill
                                            </button>
                                        </form>
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

export default Contact
