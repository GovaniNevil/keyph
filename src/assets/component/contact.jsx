import React from 'react'
import Contactbtn from '../images/contact-us-icon.png'
import Contactprofile from '../images/profile.png'
import Location from '../images/location.png'
import Call from '../images/call.png'

function Contact() {
    return (
        <>
            <section className="contact-from mt-36">
                <div className="container">
                    <div className="row flex justify-between items-end">
                        <div className="calltoaction px-9 py-10  bg-[#00000090] rounded-3xl w-[40%]">
                            <div className="mail-box flex items-center gap-5 mb-5">
                                <div className="profile-img">
                                    <img src={Contactprofile} alt="" srcset="" />
                                </div>
                                <div className="content text-white">
                                    <div className="title">
                                        <h3 className='text-white text-[30px]'>Keyph Solar Solution</h3>
                                    </div>
                                    <a href="mailto:kpsolarsolution@gmail.com">kpsolarsolution@gmail.com</a>
                                </div>
                            </div>
                            <div className="mail-box flex items-center gap-5 mb-5">
                                <div className="profile-img">
                                    <img src={Call} alt="" srcset="" />
                                </div>
                                <div className="content text-white">
                                    <a href="tel:+917304933751">+91 73049 33751</a>
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
                        <div className="contact-form rounded-xl p-14 bg-[#00000090] mt-20 w-[55%]">
                            <div className="title">
                                <div className="title">
                                    <h2 className='text-white'>Inquiry Now</h2>
                                </div>
                                <p className='my-8 text-white'>Don't hesitate to leave us your phone number. We will contact you to discuss any inquiry you may have!!</p>
                            </div>
                            <div className="form">
                                <div className="flex items-center justify-between gap-10">
                                    <div className="name">
                                        <input type="text" name="name" id="name" placeholder='Your Name' className='bg-white px-8 py-4 rounded-md' />
                                    </div>
                                    <div className="email">
                                        <input type="email" name="email" id="email" placeholder='YOur Mail Address' className='bg-white px-8 py-4 rounded-md' />
                                    </div>
                                </div>

                                <div className="inquiry mt-10 ">
                                    <textarea name="inquiry" placeholder='Inquiry' id="inquiry" rows="5" className='bg-white px-8 py-4 rounded-md w-full'></textarea>
                                </div>
                                <div className="contact-btn">
                                    <a href="#" className='flex items-center gap-2 bg-[#0052B4] text-white px-6 py-2 mt-4 rounded-[30px] w-max'>Know More<sapn><img src={Contactbtn} alt="" /></sapn></a>
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
