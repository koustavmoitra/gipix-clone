import React from 'react'
import server from '../assets/server.png'
import server2 from '../assets/server2.png'
import server3 from '../assets/server3.png'
import shaps from '../assets/shaps.png'
import shaps2 from '../assets/shaps2.png'
import shaps3 from '../assets/shaps3.png'
import customize2 from '../assets/customize2.png'
import { useEffect, useRef } from "react";
import sponsor1 from '../assets/sponsor1.png'
import sponsor2 from '../assets/sponsor2.png'
import sponsor3 from '../assets/sponsor3.png'
import sponsor4 from '../assets/sponsor4.png'
import sponsor5 from '../assets/sponsor5.png'


const Service = () => {
    const services = [
        {
            title: "Web Hosting",
            description: "Enim ad minim veniam, quis rem ipsum dolor sit amet, ao eiusmod tempor incididun ther chancer",
            image: server,
            bgColor: "#344557",
        },
        {
            title: "Innovative Idea",
            description: "Enim ad minim veniam, quis rem ipsum dolor sit amet, ao eiusmod tempor incididun ther chancer",
            image: server2,
            bgColor: "#fec76f"
        },
        {
            title: "Dedicated Server",
            description: "Enim ad minim veniam, quis rem ipsum dolor sit amet, ao eiusmod tempor incididun ther chancer",
            image: server3,
            bgColor: "#de7148",
        }
    ]



    const steps = [
        {
            number: 1,
            image: shaps,
            title: "Analyze your market needs and pain points.",
            description:
                "Enim ad minim veniam, quis rem ipsum nim veniam dolor sit amet ao.",
        },
        {
            number: 2,
            image: shaps2,
            title: "Develop your brand, and service offerings.",
            description:
                "Enim ad minim veniam, quis rem ipsum nim veniam dolor sit amet ao.",
        },
        {
            number: 3,
            image: shaps3,
            title: "Market your business to attract new clients.",
            description:
                "Enim ad minim veniam, quis rem ipsum nim veniam dolor sit amet ao.",
        },
    ];


    // --- image slider ---
    const images = [
        sponsor1,
        sponsor2,
        sponsor3,
        sponsor4,
        sponsor5,
    ];

    const containerRef = useRef(null);
    useEffect(() => {
        const interval = setInterval(() => {
            if (containerRef.current) {
                containerRef.current.scrollBy({
                    left: 220, // Adjust based on your image size + spacing
                    behavior: "smooth",
                });

                const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
                if (scrollLeft + clientWidth >= scrollWidth - 5) {
                    containerRef.current.scrollTo({ left: 0, behavior: "smooth" });
                }
            }
        }, 2000);

        return () => clearInterval(interval);
    }, []);





    return (
        <>

            <div className="max-w-7xl mx-auto mt-10">
                <h2 className="text-lg text-red-500 text-left font-bold mb-4">Key Featured For Landing Page
                </h2>
                {/* --- heading --- */}
                <h1 className="text-5xl  font-bold text-gray-900 mb-6 text-left">
                    Create a Landing Page In a
                </h1>
                <h1 className="text-5xl  font-bold text-gray-900 mb-6 text-left">
                    Minute Not Weeks
                </h1>
            </div>



            <div className="max-w-7xl mx-auto mb-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center"
                            style={{ backgroundColor: service.bgColor }}
                        >
                            {/* --- rounded image container --- */}
                            <div className="w-24 m-5">

                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="p-2 rounded-full bg-white"
                                />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 text-left">{service.title}</h3>
                            <p className="text-white font-bold px-2 text-left mb-5">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>




            <div className="max-w-5xl mx-auto mb-5">
                {/* --- two column section --- */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="flex-1">
                        <p className="mt-4 text-xl font-bold text-black max-w-2xl">
                            Got questions? We’ve got answers. send us email to
                        </p>
                    </div>

                    {/* --- button --- */}
                    <div className="flex-shrink-0">
                        <button className="bg-[#e66249] hover:bg-white hover:text-orange-400 hover:border-2 border-orange-400 hover:rounded-full  text-white text-lg font-medium py-4 p-16  rounded-tl-full  rounded-tr-full rounded-br-none  rounded-bl-full   transition duration-400">
                            username@Domain.com
                        </button>
                    </div>
                </div>
            </div>




            { /* --- new Section --- */}
            <section className="py-10 px-4 sm:px-6 lg:px-8 bg-white mt-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className='text-lg text-red-500 text-center font-bold mb-4 mt-6'>How It Works?</h2>
                    {/* Main Heading */}
                    <h1 className="text-5xl  font-bold text-gray-900 mb-6 text-center">
                        Starting a Consulting Business With
                    </h1>
                    <h1 className="text-5xl font-bold text-gray-900 text-center">
                        No Experience
                    </h1>
                </div>
            </section>


            <div className="max-w-7xl mx-auto px-4 py-1 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* --- left steps --- */}
                <div className="space-y-8">
                    {steps.map((step) => (
                        <div key={step.number} className="flex items-start gap-4 group">
                            {/* --- number badge --- */}
                            <div className="relative">
                                <div id="big-c" className="bg-[#FF5E3A] rounded-full rounded-tr-xl p-6 w-24 h-24 flex items-center justify-center text-3xl group-hover:bg-yellow-400 group-hover:rounded-full group-hover:text-black transition duration-300 ">
                                    <img src={step.image} alt={`Step ${step.number}`} className="w-10 h-10" />
                                </div>
                                <span div-small-c className="absolute -top-1 -left bg-yellow-400 text-black text-sm w-6 h-6 rounded-full flex items-center justify-center font-bold group-hover:bg-[#FF5E3A] group-hover:rounded-full group-hover:text-white transition duration-300">
                                    {step.number}
                                </span>
                            </div>

                            {/* --- text --- */}
                            <div>
                                <h3 className="text-2xl font-bold text-black mb-1">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-xl m-2">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- right side image --- */}
                <div className="flex justify-center md:justify-end relative">
                    <div class="absolute left-[40px] w-[550px] h-[550px] bg-gray-100 rounded-full -z-10"></div>
                    <img
                        src={customize2}
                        alt="Steps Illustration"
                        className="max-w-full h-auto object-contain rounded-full animate-float"
                    />
                </div>
            </div>



            {/* --- image slider --- */}
            <div className="mx-auto mb-10 mt-10 flex justify-center">
                <div
                    ref={containerRef}
                    className="flex space-x-24 transition-all duration-500 overflow-x-auto  "
                >
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Slide ${index}`}
                            className="w-28 h-22 object-cover rounded-lg flex-shrink-0"
                        />
                    ))}
                </div>
            </div>


        </>
    )
}

export default Service
