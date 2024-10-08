import React from 'react';
import Director1 from '../images/Director1.jpeg';
import Director2 from '../images/director2.jpeg';

const TeamSection = () => {
    const teamMembers = [
        { name: 'Karn Bhaidasna', title: 'Director', image: Director1 },
        { name: 'Poonam Parmar', title: 'Director', image: Director2 },
    ];

    return (
        <section className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-semibold text-gray-800">Meet our directors!</h2>
            </div>
            <div data-aos="flip-left" data-aos-delay="200" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className={`bg-white shadow-lg p-6 text-center rounded-lg transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 opacity-0 animate-fadeIn`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-[13rem] h-[13rem] rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-700">{member.name}</h3>
                        <p className="text-gray-500">{member.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;
