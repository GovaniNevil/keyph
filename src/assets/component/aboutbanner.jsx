import React from 'react'

const Aboutbanner = () => {
  return (
    <>
        <section className="abutbanner relative h-[100vh] bg-[#0A6ED1] rounded-[90px]">
            <div className="banner-box absolute top-[60%] left-2/4 md:w-max">
                <div className="outline-text">
                    <p className='font-outline-2 w-max'>ABOUT US</p>
                </div>
                <div className="banner-title">
                    <h3 className='font-bold md:text-[100px] text-[50px] text-center text-white '>ABOUT US</h3>
                </div>
                <div className="content">
                    <h5 className='md:w-2/4 text-xl text-center mx-auto text-white'>Practical renewable energy technology that reduces costs and helps the environment</h5>
                </div>
            </div>
        </section>
    </>
  )
}

export default Aboutbanner
