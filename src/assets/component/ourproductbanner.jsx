import React from 'react'

const Ourproductbanner = () => {
  return (
    <>
        <section className="abutbanner relative md:h-[100vh] h-[50vh] bg-[#0A6ED1] rounded-[90px]">
            <div className="banner-box absolute top-[60%] left-2/4 w-full md:w-max">
                <div className="outline-text">
                    <p className='font-outline-2'>OUR PRODUCT</p>
                </div>
                <div className="banner-title">
                    <h3 className='font-bold md:text-[100px] text-[40px] text-center text-white '>OUR PRODUCT</h3>
                </div>
                <div className="content">
                    <h5 className='md:w-2/4 text-xl text-center mx-auto text-white'>Explore Our Range of Solar and Renewable Energy Services</h5>
                </div>
            </div>
        </section>
    </>
  )
}

export default Ourproductbanner
