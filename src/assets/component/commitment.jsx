import React from 'react'
import Commitmentimg from '../images/Commitment.png'

function Commitment() {
    return (
        <>
            <section className="commitment">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="img-box w-2/4">
                            <img src={Commitmentimg} alt="" />
                        </div>
                        <div className="content w-2/5">
                            <div className="title">
                                <div className="title">
                                    <h2>Your Solar System,
                                    Our Commitment</h2>
                                </div>
                            </div>
                            <div className="info w-[70%] mt-10 border-t  pt-6">

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
