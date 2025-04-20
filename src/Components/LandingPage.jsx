import React from 'react';
import customize from '../assets/customize.png'
import check from '../assets/check.png'

const LandingPage = () => {
    const features = [
        {
            icon: check,
            text: "Get high conversion rates"
        },
        {
            icon: check,
            text: "Engage more users"
        },
        {
            icon: check,
            text: "Bring it to life again with us"
        },
        {
            icon: check,
            text: "Virtual Private Server (VPS)"
        }
    ];


    return (
        <>
            <section className="py-16 pb-5 mt-3 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">

                    <h2 className='text-lg text-red-500 text-center font-bold mb-4'>WELCOME TO GIPIX LANDING PAGE</h2>
                    {/* Main Heading */}
                    <h1 className="text-5xl  font-bold text-gray-900 mb-6 text-center">
                        Build and Customize Your Perfect
                    </h1>
                    <h1 className="text-5xl font-bold text-gray-900 text-center">
                        Landing Page
                    </h1>
                </div>
            </section>



            <section className="py-5 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                        {/* --- left image --- */}
                        <div className=" animate-float ">
                            <div class="absolute left-[80px] w-[500px] h-[500px] bg-gray-100 rounded-full -z-10"></div>
                            <img
                                src={customize}
                                alt="Main visual"
                            />
                        </div>



                        {/* --- right para with features --- */}
                        <div className="space-y-10 ">
                            <p className="text-lg text-black justify-content">
                                Enim ad minim veniam, quis nostrud exercitat ullrem ipsum dolor sit amet, consece adipising elit, o eiusmod tempor incididunt ut labore bit of how ther chancer flat bogeo viele marioa.
                            </p>

                            {/* Features Grid */}
                            <div className="grid grid-cols-1  gap-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="flex-shrink-0">
                                            <img
                                                src={feature.icon}
                                                alt={`Feature ${index + 1}`}
                                                className="p-2  bg-slate-300 rounded-full"
                                            />
                                        </div>
                                        <p className="text-black">{feature.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LandingPage;