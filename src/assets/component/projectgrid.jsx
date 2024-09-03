import React from 'react'
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

const Projectgrid = () => {
  return (
    <>
        <section className="projectgrid">
            <div className="container">
                <div className="grid grid-cols-6 gap-5">
                    <div className="col-span-6 row-span-1 bg-slate-400 rounded-2xl">video</div>
                    <div className="img-box col-span-2 bg-slate-400 rounded-2xl">
                        <img src={Project1} alt="" />
                    </div>
                    <div className="img-box col-span-2 bg-slate-400 rounded-2xl">
                        <img src={Project2} alt="" />
                    </div>
                    <div className="img-box col-span-2 bg-slate-400 rounded-2xl">
                        <img src={Project3} alt="" />
                    </div>
                    <div className="img-box col-span-2 row-span-2 bg-slate-400 rounded-2xl">
                    <video src={Video1} muted autoPlay loop className='rounded-2xl'></video>
                    </div>
                    <div className="img-box col-span-4 bg-slate-400 rounded-2xl">
                        <img src={Project5} alt="" className='w-full h-[400px]'/>
                    </div>
                    <div className="img-box col-span-4 bg-slate-400 rounded-2xl">
                        <img src={Project6} alt="" className='w-full' />
                    </div>
                    <div className="video-box col-span-4 bg-slate-400 rounded-2xl">
                        video
                    </div>
                    <div className="im-box col-span-2 bg-slate-400 rounded-2xl">
                        <img src={Project7} alt="" />
                    </div>
                    <div className="im-box col-span-6 bg-slate-400 rounded-2xl">
                        <img src={Project8} alt="" />
                    </div>
                    <div className="video-box col-span-2 bg-slate-400 rounded-2xl">
                        video
                    </div>
                    <div className="im-box col-span-4 bg-slate-400 rounded-2xl">
                        <img src={Project9} alt="" />
                    </div>
                    <div className="im-box col-span-6 bg-slate-400 rounded-2xl">
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
