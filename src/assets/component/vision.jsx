import React from 'react'
import Mission from '../images/target.png'
import Visionimg from '../images/vision.png'

const Vision = () => {
    return (
        <>
            <section className="vision">
                <div className="container">
                    <div className="mission-box border border-[#0A6ED1] rounded-2xl px-20 py-6 flex items-center gap-5 mb-24">
                        <div className="content-box">
                            <div className="title font-bold">
                                <h2>OUR MISSION</h2>
                            </div>
                            <p>
                                OUR MISSION  To become a leading global solar company, delivering state-of-the-art  sustainable energy solutions, recognized for innovation,  excellence, and commitment to creating a greener future, pushing solar technology boundaries
                            </p>
                        </div>
                        <div className="img">
                            <img src={Mission} alt="" />
                        </div>
                    </div>
                    <div className="mission-box border border-[#0A6ED1] rounded-2xl px-20 py-6 flex items-center gap-5">
                        <div className="img">
                            <img src={Visionimg} alt="" />
                        </div>
                        <div className="content-box">
                            <div className="title font-bold">
                                <h2>OUR VISION</h2>
                            </div>
                            <p>
                            To build strong relationships based on trust, integrity, and mutual respect, delivering exceptional value to customers, driving solar energy transformation, and reducing reliance on fossil fuels to create
                            a sustainable future.                            </p>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Vision
