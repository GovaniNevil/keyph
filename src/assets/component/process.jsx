import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Startup from '../images/startup.png';
import Msme from '../images/MSME.png';
import Make from '../images/makeinindia.png';

const Process = () => {
    const settings = {
        infinite: true,  // Enable infinite loop
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,  // Enable auto-scroll
        autoplaySpeed: 3000,  // Time in ms between each scroll (3 seconds)
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
        { image: Startup },
        { image: Msme },
        { image: Make },
        // Add more items if needed
    ];

    return (
        <>
            <section className="process pt-12" id="process">
                <div className="container">
                    <div className="title">
                        <div className="subtitle mb-8">
                            <h3 className='titlelight mx-auto md:text-[40px] text-[25px] font-bold relative md:w-max'>Our Certificate</h3>
                        </div>
                    </div>
                    <div className="mx-auto mt-14">
                        <Slider {...settings}>
                            {process.map((item, index) => (
                                <div key={index} className="innerbox px-10 ">
                                    <img src={item.image} alt={`Slide ${index + 1}`} className="w-full" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Process;
