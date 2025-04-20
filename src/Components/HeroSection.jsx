import React from 'react';
import line from '../assets/line.png'
import google from '../assets/google.png'
import girl from '../assets/girl.webp'


const HeroSection = () => {
  return (
    <div className='bg-[#22244d] text-white py-24 pt-32 '
      style={{
        backgroundImage: `url(${line}), url(${girl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover, 25%',
        backgroundPosition: 'center, right 40% bottom 0%',
      }}
    >


      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">


          {/* --- left contetnt --- */}
          <div className="space-y-8"  >
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Great Ways to Show Your <span className='text-yellow-400'>Best Services</span>
            </h1>
            <p className="text-lg text-white">
              Enim ad minim veniam, quis nostrud exercitat ullrem ipsum dolor sit amet,
              consectetur adipiscing elit, o eiusmod tempor incididunt.
            </p>

            <div className="flex items-center space-x-4 ">
              <button
                type="button"
                className="flex items-center text-white hover:text-yellow-400 font-bold text-lg"
              >
                {/* --- bg for the icon --- */}
                <div className="w-14 h-14 mr-3 bg-yellow-400 rounded-full flex items-center justify-center animate-shadow-pulse">
                  <svg
                    className="w-6 h-6 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                watch video
              </button>
            </div>



            {/* --- ratings --- */}
            <div className="flex flex-col sm:flex-row">
              <div className="flex items-center gap-x-6">
                {/* --- google icon --- */}
                <span>
                  <img src={google} alt="google" />
                </span>

                {/* --- rating text --- */}
                <span className="text-white">
                  <span className="text-4xl font-bold">4.9</span> Out Of 5
                </span>

                {/* --- stars ---  */}
                <div className="bg-yellow-500 px-4 py-2 rounded-full flex items-center">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>


          {/* --- right side form --- */}
          <div className="bg-white px-16 py-12 mt-10 rounded-3xl shadow-lg w-[450px] ml-auto">

            <h1 className='text-4xl text-black font-bold mb-2'>Request a Quote</h1>
            <h3 className="  text-gray-500 mb-6">Marketing Business campaign</h3>

            <form className="space-y-4">
              <div className="relative flex items-center">
                <input
                  type="text"
                  id="name" placeholder='Complete Name'
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-yellow-500 focus:outline-none"
                />
                <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M 15.364 11.636 C 14.3837 10.6558 13.217 9.93013 11.9439 9.49085 C 13.3074 8.55179 14.2031 6.9802 14.2031 5.20312 C 14.2031 2.33413 11.869 0 9 0 C 6.131 0 3.79688 2.33413 3.79688 5.20312 C 3.79688 6.9802 4.69262 8.55179 6.05609 9.49085 C 4.78308 9.93013 3.61631 10.6558 2.63605 11.636 C 0.936176 13.3359 0 15.596 0 18 H 1.40625 C 1.40625 13.8128 4.81279 10.4062 9 10.4062 C 13.1872 10.4062 16.5938 13.8128 16.5938 18 H 18 C 18 15.596 17.0638 13.3359 15.364 11.636 Z M 9 9 C 6.90641 9 5.20312 7.29675 5.20312 5.20312 C 5.20312 3.1095 6.90641 1.40625 9 1.40625 C 11.0936 1.40625 12.7969 3.1095 12.7969 5.20312 C 12.7969 7.29675 11.0936 9 9 9 Z" fill='#555555'></path>;
                </svg>
              </div>


              <div className="relative flex items-center">
                <input
                  type="email"
                  id="email" placeholder='Email Address'
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-yellow-500 focus:outline-none"
                />
                <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M15.8649 18H6.13513C2.58377 18 0.540527 15.9568 0.540527 12.4054V5.5946C0.540527 2.04324 2.58377 0 6.13513 0H15.8649C19.4162 0 21.4595 2.04324 21.4595 5.5946V12.4054C21.4595 15.9568 19.4162 18 15.8649 18ZM6.13513 1.45946C3.35242 1.45946 1.99999 2.81189 1.99999 5.5946V12.4054C1.99999 15.1881 3.35242 16.5406 6.13513 16.5406H15.8649C18.6476 16.5406 20 15.1881 20 12.4054V5.5946C20 2.81189 18.6476 1.45946 15.8649 1.45946H6.13513Z" fill='#555555'></path>;
                  <path d="M10.9988 9.8465C10.1815 9.8465 9.35452 9.59352 8.72208 9.07785L5.67668 6.64539C5.36532 6.39241 5.30696 5.93511 5.55992 5.62376C5.8129 5.31241 6.2702 5.25403 6.58155 5.50701L9.62695 7.93947C10.3664 8.53298 11.6215 8.53298 12.361 7.93947L15.4064 5.50701C15.7178 5.25403 16.1848 5.30268 16.428 5.62376C16.681 5.93511 16.6324 6.40214 16.3113 6.64539L13.2659 9.07785C12.6432 9.59352 11.8161 9.8465 10.9988 9.8465Z" fill='#555555'></path>;
                </svg>
              </div>


              <div className="relative flex items-center">
                <input
                  type="tel"
                  id="phone" placeholder='Phone No'
                  className="w-full px-4 py-3 border-b-2 border-gray-300 focus:border-yellow-500 focus:outline-none"
                />
                <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                  <path d="m7 2.75c-.41421 0-.75.33579-.75.75v17c0 .4142.33579.75.75.75h10c.4142 0 .75-.3358.75-.75v-17c0-.41421-.3358-.75-.75-.75zm-2.25.75c0-1.24264 1.00736-2.25 2.25-2.25h10c1.2426 0 2.25 1.00736 2.25 2.25v17c0 1.2426-1.0074 2.25-2.25 2.25h-10c-1.24264 0-2.25-1.0074-2.25-2.25z" fill='#555555'></path>;
                  <path d="m10.25 5c0-.41421.3358-.75.75-.75h2c.4142 0 .75.33579.75.75s-.3358.75-.75.75h-2c-.4142 0-.75-.33579-.75-.75z" fill='#555555'></path>;
                  <path d="m9.25 19c0-.4142.33579-.75.75-.75h4c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-4c-.41421 0-.75-.3358-.75-.75z" fill='#555555'></path>;
                </svg>
              </div>



              <div >
                <label className="block text-lg font-medium text-gray-800 mb-2">Preferred Consult Method:</label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input type="radio" name="consultMethod" className="h-4 w-4 text-blue-600" defaultChecked />
                    <span className="ml-2 text-gray-800 font-medium">VirtualIn-Office</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="consultMethod" className="h-4 w-4 text-blue-600" />
                    <span className="ml-2 text-gray-800 font-medium">VirtualIn-Office</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-40 bg-[#e66249] hover:bg-white hover:text-orange-400 hover:border-2 border-orange-400 hover:rounded-br-3xl  text-white text-lg font-medium py-3 px-4   rounded-tl-3xl  rounded-tr-3xl rounded-br-none  rounded-bl-3xl   transition duration-300"
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