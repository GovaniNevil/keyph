import React, { useEffect } from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import Protect from '../images/Protect.webp';
import Carben from '../images/karben-foot.webp';
import Energy from '../images/energy-indi.webp';
import Subcidy from '../images/subcidy.png';
import SolarCostChart from '../component/chart';

const Company = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <section className="why-switching-solar mt-[150px]">
                <div className="container mx-auto">
                    <div className="title">
                        <h3 className='xl:text-[60px] md:text-[50px] text-[35px] font-bold text-[#0A6ED1] relative text-center'>Why should I consider switching to solar?</h3>
                    </div>
                    <div className="box flex justify-center gap-10">
                        <div className="box mt-4 border border-[#0A6ED1] rounded-xl px-10 py-4 w-1/2">
                            <h4 className='text-[30px] font-semibold text-center'>Save Over 90% Electricity Bills with Solar!</h4>
                            <div className="content text-[18px]">
                                <ul className='list-disc mt-4'>
                                    <li>Let’s break down the savings with a real-world example:</li>
                                    <li>Suppose the electricity tariff in your state is ₹9.5 per unit, and your monthly electricity bill is ₹3,000.</li>
                                    <li>In a year, this adds up to ₹36,000 in electricity costs.</li>
                                    <li>Now, electricity tariffs typically increase by 3-10% each year. Over the next 25 years, this means you’ll end up paying around ₹13-14 lakh in electricity bills.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="box mt-4 border border-[#0A6ED1] rounded-xl px-10 py-4 w-1/2">
                            <h4 className='text-[30px] font-semibold text-center'>How Solar Saves You Money</h4>
                            <div className="content text-[18px]">
                                <ul className='list-disc mt-4'>
                                    <li>A 3 kW solar system that costs around ₹2,10,000 can generate enough power to cover your electricity needs. With the government’s subsidy of ₹78,000 for installing an on-grid rooftop solar system, your net cost will be just ₹1,32,000.</li>
                                    <li>So, instead of spending ₹13-14 lakh over 25 years, you can switch to solar for ₹1,32,000—saving over 90% of your electricity expenses for life.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SolarCostChart />
            <section className="why-switching-now mt-[150px]">
                <div className="container mx-auto">
                    <div className="title">
                        <h3 className='xl:text-[60px] md:text-[50px] text-[35px] font-bold text-[#0A6ED1] relative text-center'>Why Switch to Solar Now?</h3>
                    </div>
                    <div className="box grid grid-cols-2 justify-center gap-10">
                        <div className="box mt-4 border border-[#0A6ED1] rounded-xl p-10">
                            <img src={Protect} alt="" className='w-[300px] rounded-xl mx-auto mb-6' />
                            <h4 className='text-[28px] mb-4 font-semibold text-center'>Protect Yourself Against Rising Electricity Costs</h4>
                            <div className="content text-[18px] text-justify">
                                Electricity rates in many Indian states are rising each year, making it more expensive to stay connected to the grid. By installing a solar system, you can protect yourself against these rising costs. Your solar system will provide a stable and predictable source of electricity, shielding you from price fluctuations for decades.
                            </div>
                        </div>
                        <div className="box mt-4 border border-[#0A6ED1] rounded-xl p-10">
                            <img src={Energy} alt="" className='w-[300px] rounded-xl mx-auto mb-6' />
                            <h4 className='text-[28px] mb-4 font-semibold text-center'>Achieve Energy Independence</h4>
                            <div className="content text-[18px] text-justify">
                                Installing a solar system means you’ll generate your own electricity. This reduces your reliance on the power grid, making you more energy independent. In times of grid outages or energy shortages, you’ll still have power, which offers peace of mind and greater control over your energy needs.
                            </div>
                        </div>
                        <div className="box mt-4 border border-[#0A6ED1] rounded-xl p-10">
                            <img src={Carben} alt="" className='w-[300px] rounded-xl mx-auto mb-6' />
                            <h4 className='text-[28px] mb-4 font-semibold text-center'>Reduce Your Carbon Footprint</h4>
                            <div className="content text-[18px] text-justify">
                                Solar energy is a clean, renewable energy source. By switching to solar, you’re not just saving money, but also contributing to a greener planet. Solar helps reduce greenhouse gas emissions and combats climate change by cutting down reliance on fossil fuels. Every kilowatt-hour of solar energy reduces your carbon footprint and creates a healthier environment.
                            </div>
                        </div>
                        <div className="box mt-4 border border-[#0A6ED1] rounded-xl p-10">
                            <img src={Subcidy} alt="" className='w-[300px] rounded-xl mx-auto mb-6' />
                            <h4 className='text-[28px] mb-4 font-semibold text-center'>Government Subsidy on Solar Installation</h4>
                            <div className="content text-[18px] text-justify">
                                The Indian government is currently offering financial assistance in the form of subsidies for homeowners installing on-grid rooftop solar systems. For a 3 kW system, the subsidy can be as high as ₹78,000, significantly reducing the cost of installation.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Company;
