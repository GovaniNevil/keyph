import React from "react";
import slider1 from '../images/MSME-removebg-preview (1).png';
import slider2 from '../images/makeinindia2.png';
import slider3 from '../images/startup-removebg-preview.png';

const Slider = () => {
    const slides = [
        {
            id: 1,
            image: slider1,
            alt: "MSME slide"
        },
        {
            id: 2,
            image: slider2,
            alt: "Make in India slide"
        },
        {
            id: 3,
            image: slider3,
            alt: "Startup India slide"
        },
    ];

    // Duplicate the slides for seamless infinite scroll
    const extendedSlides = [...slides, ...slides];

    return (
        <div className="relative w-full h-full  justify-center items-center overflow-hidden">
            <div><h1 className="text-black text-center text-[55px] pb-[55px] font-bold">Our certificate</h1></div>
            {/* Slider Images */}
            <div className="slider-container w-full h-[250px] flex items-center">
                <div className="slider flex gap-[72px]">
                    {extendedSlides.map((slide, index) => (
                        <div key={index} className="w-[450px] h-[250px] flex-shrink-0 flex justify-center items-center">
                            <img src={slide.image} alt={slide.alt} className=" object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;
