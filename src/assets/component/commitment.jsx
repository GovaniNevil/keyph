import React from 'react'
import Commitmentimg from '../images/Commitment.png'

function Commitment() {
    return (
        <>
            <section className="commitment text-center lg:text-left">
                <div className="container">
                    <div className="lg:flex items-center justify-between">
                        <div className="img-box lg:w-2/4 mb-6 lg:mb-0">
                            <img src={Commitmentimg} alt="" />
                        </div>
                        <div className="content lg:w-2/5">
                            <div className="title">
                                <div className="title">
                                    <h2>Your Solar System,
                                    Our Commitment</h2>
                                </div>
                            </div>
                            <div className="info lg:w-[70%] mt-4 lg:mt-10 border-t  pt-6">

                                <p>Enjoy peace of mind with our 5-year comprehensive maintenance promise. We've got your solar system covered.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Commitment
