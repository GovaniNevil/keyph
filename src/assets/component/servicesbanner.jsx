import React from 'react'

const Servicebanner = () => {
  return (
    <>
        <section className="abutbanner relative h-[100vh] bg-[#0A6ED1] rounded-[90px]">
            <div className="banner-box absolute top-[60%] left-2/4 w-max">
                <div className="outline-text">
                    <p className='font-outline-2'>SERVICES</p>
                </div>
                <div className="banner-title">
                    <h3 className='font-bold text-[100px] text-center text-white '>SERVICES</h3>
                </div>
                <div className="content">
                    <h5 className='w-2/4 text-xl text-center mx-auto text-white'>Explore Our Range of Solar and Renewable Energy Services</h5>
                </div>
            </div>
        </section>
    </>
  )
}

export default Servicebanner
