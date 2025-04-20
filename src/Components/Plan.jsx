import React from 'react';
import check from '../assets/check.png';
import planbg from '../assets/plan-bg.jpg';

export default function Plan() {
    return (
        <div style={{
            backgroundImage: `url(${planbg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            padding: '60px'
        }}>

            {/* --- heading --- */}
            <div className='p-10'>
                <p className='text-[#de7148] text-center font-bold'>PRICING PLANS</p>
                <p className='text-center text-5xl font-bold mt-2'>Pricing Plans Without Hidden</p>
                <p className='text-center text-5xl font-bold mb-3'>Charges</p>
            </div>

            <div id="pricing" className='flex justify-center gap-[50px]'>
                {/* --- card 1 --- */}
                <div id="pricing-1" className='w-[400px] hover:shadow-[10px_0_25px_-5px_rgba(0,0,0,0.2),-10px_0_25px_-5px_rgba(0,0,0,0.2)] transition duration-300'>
                    <div className='bg-[#22244d] rounded-t-2xl text-white p-10 pt-5'>
                        <p className='text-xl font-semibold mb-3'>Basic Plan</p>
                        <p className='text-xl font-semibold mb-5'><span className='text-6xl'>$40</span> / month</p>
                    </div>
                    <div className='bg-white rounded-b-xl p-10 pt-16 relative'>
                        <div className='absolute top-[-30px] left-15 bg-[#fdc04c] rounded-full rounded-br-none p-4'>
                            <svg enable-background="new 0 0 512 512" height="50" viewBox="0 0 512 512" width="50" xmlns="http://www.w3.org/2000/svg"><g><path d="m376.437 232.804v-130.342h30.125v-27.213l-75.249-75.249-75.25 75.25v27.213h30.125v81.052c-9.792-1.811-19.88-2.766-30.188-2.766s-20.396.955-30.188 2.766v-33.059h30.125v-27.213l-75.249-75.25-75.25 75.25v27.213h30.125v82.347c-27.998 29.674-45.187 69.65-45.187 113.57-.001 91.327 74.298 165.627 165.624 165.627s165.625-74.3 165.625-165.625c0-43.92-17.19-83.897-45.188-113.571zm-75.161-160.341 30.037-30.037 30.036 30.036h-14.912v135.228c-9.461-6.19-19.586-11.444-30.25-15.618v-119.609zm-120.588 17.957 30.037 30.037h-14.912v71.616c-10.664 4.174-20.789 9.428-30.25 15.618v-87.233h-14.912zm75.312 391.58c-74.784 0-135.625-60.841-135.625-135.625s60.841-135.625 135.625-135.625 135.625 60.841 135.625 135.625-60.842 135.625-135.625 135.625z"></path><path d="m263.88 331.376h-15.757c-7.547 0-13.687-6.14-13.687-13.687 0-7.546 6.14-13.686 13.687-13.686h15.396c7.557 0 13.704 6.147 13.704 13.704h30c0-21.546-15.677-39.488-36.222-43.049v-18.659h-30v18.595c-20.712 3.412-36.565 21.433-36.565 43.097 0 24.088 19.598 43.686 43.687 43.686h15.757c7.547 0 13.687 6.14 13.687 13.687s-6.14 13.687-13.687 13.687h-16.038c-7.267 0-13.178-5.912-13.178-13.178h-30c0 21.48 15.769 39.342 36.337 42.631v18.553h30v-18.595c20.712-3.411 36.565-21.433 36.565-43.097.001-24.091-19.597-43.689-43.686-43.689z"></path></g></svg>
                        </div>
                        <p className='flex items-center gap-2 my-5 ml-5'>
                            <img src={check} alt="check" className='bg-gray-300 p-2 rounded-full' />
                            Free Consulting
                        </p>
                        <p className='flex items-center gap-2 mb-5 ml-5'>
                            <img src={check} alt="check" className='bg-gray-300 p-2 rounded-full' />
                            Monthly Report
                        </p>
                        <p className='flex items-center gap-2 mb-5 ml-5'>
                            <img src={check} alt="check" className='bg-gray-300 p-2 rounded-full' />
                            <p>Amazing Features</p>
                        </p>
                        <p className='flex items-center gap-2 mb-10 ml-5'>
                            <img src={check} alt="check" className='bg-gray-300 p-2 rounded-full' />
                            24x7 Premium support
                        </p>
                        <button className="ml-5 bg-[#e66249] hover:bg-white hover:text-orange-400 hover:border-2 border-orange-400 hover:rounded-br-3xl text-white text-md font-medium py-3 p-10 rounded-tl-3xl rounded-tr-3xl rounded-br-none rounded-bl-3xl transition:duration-300">Start Now</button>
                    </div>
                </div>


                {/* --- card 2 --- */}
                <div id="pricing-2" className='w-[400px] hover:shadow-[10px_0_25px_-5px_rgba(0,0,0,0.2),-10px_0_25px_-5px_rgba(0,0,0,0.2)] transition duration-300'>
                    <div className='bg-[#22244d] rounded-t-2xl text-white p-10 pt-5'>
                        <p className='text-xl font-semibold mb-3'>Business Plan</p>
                        <p className='text-xl font-semibold mb-5'><span className='text-6xl'>$70</span> / month</p>
                    </div>
                    <div className='bg-white rounded-b-xl p-10 pt-16 relative'>
                        <div className='absolute top-[-30px] left-15 bg-[#fdc04c] rounded-full rounded-br-none p-4'>
                            <svg enable-background="new 0 0 512 512" height="50" viewBox="0 0 512 512" width="50" xmlns="http://www.w3.org/2000/svg"><g><path d="m376.437 232.804v-130.342h30.125v-27.213l-75.249-75.249-75.25 75.25v27.213h30.125v81.052c-9.792-1.811-19.88-2.766-30.188-2.766s-20.396.955-30.188 2.766v-33.059h30.125v-27.213l-75.249-75.25-75.25 75.25v27.213h30.125v82.347c-27.998 29.674-45.187 69.65-45.187 113.57-.001 91.327 74.298 165.627 165.624 165.627s165.625-74.3 165.625-165.625c0-43.92-17.19-83.897-45.188-113.571zm-75.161-160.341 30.037-30.037 30.036 30.036h-14.912v135.228c-9.461-6.19-19.586-11.444-30.25-15.618v-119.609zm-120.588 17.957 30.037 30.037h-14.912v71.616c-10.664 4.174-20.789 9.428-30.25 15.618v-87.233h-14.912zm75.312 391.58c-74.784 0-135.625-60.841-135.625-135.625s60.841-135.625 135.625-135.625 135.625 60.841 135.625 135.625-60.842 135.625-135.625 135.625z"></path><path d="m263.88 331.376h-15.757c-7.547 0-13.687-6.14-13.687-13.687 0-7.546 6.14-13.686 13.687-13.686h15.396c7.557 0 13.704 6.147 13.704 13.704h30c0-21.546-15.677-39.488-36.222-43.049v-18.659h-30v18.595c-20.712 3.412-36.565 21.433-36.565 43.097 0 24.088 19.598 43.686 43.687 43.686h15.757c7.547 0 13.687 6.14 13.687 13.687s-6.14 13.687-13.687 13.687h-16.038c-7.267 0-13.178-5.912-13.178-13.178h-30c0 21.48 15.769 39.342 36.337 42.631v18.553h30v-18.595c20.712-3.411 36.565-21.433 36.565-43.097.001-24.091-19.597-43.689-43.686-43.689z"></path></g></svg>
                        </div>
                        <p className='flex items-center gap-2 my-5 ml-5'>
                            <img src={check} alt="check" className='bg-gray-300 p-2 rounded-full' />
                            Free Consulting
                        </p>
                        <p className='flex items-center gap-2 mb-5 ml-5'>
                            <img src={check} alt="check" className='bg-gray-300 p-2 rounded-full' />
                            Monthly Report
                        </p>
                        <p className='flex items-center gap-2 mb-5 ml-5'>
                            <img src={check} alt="check" className='bg-gray-300 p-2 rounded-full' />
                            <p>Amazing Features</p>
                        </p>
                        <p className='flex items-center gap-2 mb-10 ml-5'>
                            <img src={check} alt="check" className='bg-gray-300 p-2 rounded-full' />
                            24x7 Premium support
                        </p>
                        <button className="ml-5 bg-[#e66249] hover:bg-white hover:text-orange-400 hover:border-2 border-orange-400 hover:rounded-br-3xl text-white text-md font-medium py-3 p-10 rounded-tl-3xl rounded-tr-3xl rounded-br-none rounded-bl-3xl transition:duration-300">Start Now</button>
                    </div>
                </div>


                {/* --- card 3 --- */}
                <div id="pricing-3" className='w-[400px] hover:shadow-[10px_0_25px_-5px_rgba(0,0,0,0.2),-10px_0_25px_-5px_rgba(0,0,0,0.2)] transition duration-300'>
                    <div className='bg-[#22244d] rounded-t-2xl text-white p-10 pt-5'>
                        <p className='text-xl font-semibold mb-3'>Premium Plan</p>
                        <p className='text-xl font-semibold mb-5'><span className='text-6xl'>$90</span> / month</p>
                    </div>
                    <div className='bg-white rounded-b-xl p-10 pt-16 relative'>
                        <div className='absolute top-[-30px] left-15 bg-[#fdc04c] rounded-full rounded-br-none p-4'>
                            <svg enable-background="new 0 0 512 512" height="50" viewBox="0 0 512 512" width="50" xmlns="http://www.w3.org/2000/svg"><g><path d="m376.437 232.804v-130.342h30.125v-27.213l-75.249-75.249-75.25 75.25v27.213h30.125v81.052c-9.792-1.811-19.88-2.766-30.188-2.766s-20.396.955-30.188 2.766v-33.059h30.125v-27.213l-75.249-75.25-75.25 75.25v27.213h30.125v82.347c-27.998 29.674-45.187 69.65-45.187 113.57-.001 91.327 74.298 165.627 165.624 165.627s165.625-74.3 165.625-165.625c0-43.92-17.19-83.897-45.188-113.571zm-75.161-160.341 30.037-30.037 30.036 30.036h-14.912v135.228c-9.461-6.19-19.586-11.444-30.25-15.618v-119.609zm-120.588 17.957 30.037 30.037h-14.912v71.616c-10.664 4.174-20.789 9.428-30.25 15.618v-87.233h-14.912zm75.312 391.58c-74.784 0-135.625-60.841-135.625-135.625s60.841-135.625 135.625-135.625 135.625 60.841 135.625 135.625-60.842 135.625-135.625 135.625z"></path><path d="m263.88 331.376h-15.757c-7.547 0-13.687-6.14-13.687-13.687 0-7.546 6.14-13.686 13.687-13.686h15.396c7.557 0 13.704 6.147 13.704 13.704h30c0-21.546-15.677-39.488-36.222-43.049v-18.659h-30v18.595c-20.712 3.412-36.565 21.433-36.565 43.097 0 24.088 19.598 43.686 43.687 43.686h15.757c7.547 0 13.687 6.14 13.687 13.687s-6.14 13.687-13.687 13.687h-16.038c-7.267 0-13.178-5.912-13.178-13.178h-30c0 21.48 15.769 39.342 36.337 42.631v18.553h30v-18.595c20.712-3.411 36.565-21.433 36.565-43.097.001-24.091-19.597-43.689-43.686-43.689z"></path></g></svg>
                        </div>
                        <p className='flex items-center gap-2 my-5 ml-5'>
                            <img src={check} alt="check" className='bg-gray-300 p-2 rounded-full' />
                            Free Consulting
                        </p>
                        <p className='flex items-center gap-2 my-5 ml-5'>
                            <img src={check} alt="check" className='bg-gray-300 p-2 rounded-full' />
                            Monthly Report
                        </p>
                        <p className='flex items-center gap-2 mb-5 ml-5'>
                            <img src={check} alt="check" className='bg-gray-300 p-2 rounded-full' />
                            <p>Amazing Features</p>
                        </p>
                        <p className='flex items-center gap-2 mb-10 ml-5'>
                            <img src={check} alt="check" className='bg-gray-300 p-2 rounded-full' />
                            24x7 Premium support
                        </p>
                        <button className="ml-5 bg-[#e66249] hover:bg-white hover:text-orange-400 hover:border-2 border-orange-400 hover:rounded-br-3xl text-white text-md font-medium py-3 p-10 rounded-tl-3xl rounded-tr-3xl rounded-br-none rounded-bl-3xl transition:duration-300">Start Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
