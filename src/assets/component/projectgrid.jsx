import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Project1 from '../images/project-1.png'
import Project2 from '../images/project  (2).png'
import Project3 from '../images/project  (3).png'
import Project4 from '../images/project  (4).png'
import Project5 from '../images/project  (5).png'
import Project6 from '../images/project  (6).png'
import Project7 from '../images/project  (7).png'
import Project8 from '../images/project  (8).png'
import Project9 from '../images/project  (9).png'
import Project10 from '../images/project  (10).png'
import Video1 from '../images/video-1.mp4'
import Video2 from '../images/anim-keyph.mp4'

const Projectgrid = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration in milliseconds
        });
    },
        []);
  return (
    <>
        <section className="projectgrid">
            <div className="container">
                <div className="md:grid flex flex-col md:grid-cols-6 grid-cols-1 gap-5">
                    <div className="lg:col-span-6 md:col-span-4 col-span-1 row-span-1 bg-slate-400 rounded-2xl" data-aos="zoom-in">
                        <video src={Video2} muted autoPlay loop className='rounded-2xl w-full'></video>
                    </div>
                    <div className="img-box md:col-span-2 col-span-1 bg-slate-400 rounded-2xl" data-aos="zoom-in">
                        <img src={Project1} alt="" className />
                    </div>
                    <div className="img-box md:col-span-2 col-span-1 bg-slate-400 rounded-2xl" data-aos="zoom-in">
                        <img src={Project2} alt="" />
                    </div>
                    <div className="img-box md:col-span-2 col-span-1 bg-slate-400 rounded-2xl" data-aos="zoom-in">
                        <img src={Project3} alt="" />
                    </div>
                    <div className="img-box md:col-span-2 col-span-1 row-span-2 bg-slate-400 rounded-2xl" data-aos="zoom-in">
                    <video src={Video1} muted autoPlay loop className='rounded-2xl'></video>
                    </div>
                    <div className="img-box lg:col-span-4 md:col-span-2 col-span-1 bg-slate-400 rounded-2xl" data-aos="zoom-in">
                        <img src={Project5} alt="" className='w-full h-[400px]'/>
                    </div>
                    <div className="img-box md:col-span-4 col-span-1 bg-slate-400 rounded-2xl" data-aos="zoom-in">
                        <img src={Project6} alt="" className='w-full' />
                    </div>
                    <div className="video-box col-span-4 bg-slate-400 rounded-2xl" data-aos="zoom-in">
                        video
                    </div>
                    <div className="im-box lg:col-span-2 col-span-1 hidden lg:block bg-slate-400 rounded-2xl" data-aos="zoom-in">
                        <img src={Project7} alt="" />
                    </div>
                    <div className="im-box lg:col-span-6 md:col-span-4 col-span-1 bg-slate-400 rounded-2xl" data-aos="zoom-in">
                        <img src={Project8} alt="" />
                    </div>
                    <div className="video-box md:col-span-2 col-span-1 bg-slate-400 rounded-2xl" data-aos="zoom-in">
                        video
                    </div>
                    <div className="im-box md:col-span-4 col-span-1 bg-slate-400 rounded-2xl" data-aos="zoom-in">
                        <img src={Project9} alt="" />
                    </div>
                    <div className="im-box lg:col-span-6 md:col-span-4 col-span-1 bg-slate-400 rounded-2xl" data-aos="zoom-in">
                        <img src={Project10} alt="" />
                    </div>
                    {/* <div className="im-box col-span-3 row-span-2 bg-slate-400 rounded-2xl">
                        <img src={Project1} alt="" />
                    </div>
                    <div className="im-box col-span-3 row-span-2 bg-slate-400 rounded-2xl">
                        <img src={Project1} alt="" />
                    </div> */}
                </div>
            </div>
        </section>
    </>
  )
}

export default Projectgrid
