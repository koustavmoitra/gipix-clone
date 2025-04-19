import React from 'react';
import line from '../assets/line.png'
import google from '../assets/google.png'
import girl from '../assets/girl.webp'


const HeroSection = () => {
  return (

    <div className="relative bg-[#22244d] py-20 px-4 sm:px-6 lg:px-8 mt-12">

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">


          {/* left Content */}
          <img src={line} alt="Line" className="absolute left-0 h-full w-full md:w-1/2 bg-center cover " />

          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Great Ways to Show Your <span className='text-yellow-400'>Best Services</span>
            </h1>

            <p className="text-lg text-white">
              Enim ad minim veniam, quis nostrud exercitat ullrem ipsum dolor sit amet,
              consectetur adipiscing elit, o eiusmod tempor incididunt.
            </p>


            <div className="flex items-center space-x-4">
              <button type="button" className="flex items-center  text-white hover:text-yellow-400 font-bold text-lg">
                <svg className="w-10 h-10 mr-2" fill="currentColor" viewBox="0 0 20 20" >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
                watch video
              </button>
            </div>



            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center">
                <span> <img src={google} alt='google'></img> </span>
                <span className="ml-2 mr-3 text-white"> <span className='text-4xl font-bold'>4.9</span>  Out Of 5</span>
                <div className="bg-yellow-400 px-3 py-2 rounded-xl flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>




          {/* --- right form --- */}
          <div className="bg-white p-8 mt-10 rounded-3xl  shadow-lg">
            {/* <img src={girl} alt="Line" className="absolute left-50% top-50% h-full w-full md:w-1/2 bg-center cover " /> */}

            <h1 className='text-4xl text-black font-bold mb-2'>Request a Quote</h1>
            <h3 className=" font-bold text-gray-400 mb-6">Marketing Business campaign</h3>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Complete Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone No</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>



              <div>
                <label className="block text-lg font-medium text-gray-800 mb-2">Preferred Consult Method:</label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input type="radio" name="consultMethod" className="h-4 w-4 text-blue-600" defaultChecked />
                    <span className="ml-2 text-gray-800">VirtualIn-Office</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="consultMethod" className="h-4 w-4 text-blue-600" />
                    <span className="ml-2 text-gray-800">VirtualIn-Office</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-40  bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-tl-3xl  rounded-tr-3xl rounded-br-none   rounded-bl-3xl  font-medium transition duration-300"
              >
                Start Free Trial
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;