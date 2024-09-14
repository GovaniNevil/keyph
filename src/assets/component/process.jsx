import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Process = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1030, // Breakpoint for smaller screens (tablets)
                settings: {
                    slidesToShow: 2, // Show 2 slides on tablets
                },
            },
            {
                breakpoint: 770, // Breakpoint for even smaller screens (phones)
                settings: {
                    slidesToShow: 1, // Show only 1 slide on phones
                },
            },
        ],
    };

    const process = [
        {
            name: "Affordable Energy",
            number: "1",
            quote: "Our solar panels and systems are designed to provide reliable and clean energy at a competitive cost."
        },
        {
            name: "Energy Independence",
            number: "2",
            quote: "With our solar systems, you'll have control over your own energy production, reducing your reliance on the grid and providing peace of mind."
        },
        {
            name: "Sustainable energy source",
            number: "3",
            quote: "Our solar energy solutions harness the power of the sun, reducing our reliance on finite fossil fuels and minimizing our carbon footprint."
        }
        // Add more testimonials here
    ];

    return (
        <>
            <section className="process py-12 md:py-24" id="process">
                <div className="container">
                    <div className="title">
                        <div className="subtitle mb-8">
                            <h3 className='titlelight mx-auto md:text-[40px] text-[25px] font-bold text-white relative md:w-max'>process and the solutions we can provide</h3>
                        </div>
                        <div className="title md:w-2/4 mx-auto text-center ">
                            <h3 className='text-[30px] font-semibold'>what you can expect from our sustainability consultants</h3>
                        </div>
                    </div>
                    <div className=" mx-auto mt-14" >
                        <Slider {...settings}>
                            {process.map((process, index) => (
                                <div className="innerbox">
                                    <div key={index} className="p-10 rounded-xl border-2 mr-3 ml-3 border-[#FBB92B]">
                                        <div className="title flex justify-between items-center">
                                            <h2 className='text-[#FBB92B]'>{process.name}</h2>
                                            <span className='number py-7 px-6 text-white bg-[#FBB92B] font-bold text-[30px] rounded-[40px]'>{process.number}</span>
                                        </div>
                                        <div className="content">
                                            <p className='text-[16px]'>{process.quote}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Process
