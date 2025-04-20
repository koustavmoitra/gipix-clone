import React from 'react'
import customize3 from '../assets/customize3.png'
import paperPlane from '../assets/paperPlane.png'

const Newsletter = () => {
    return (
        <>


            <div className=" px-16 py-16 bg-[rgb(253,192,76)] w-full">
                <div className="flex items-center justify-between">
                    <div className="flex justify-evenly ml-10">
                        {/* --- left image --- */}
                        <div className="flex mr-10">
                            <img
                                src={paperPlane}
                                alt="paper plane"
                                className="w-40 h-40 object-contain"
                            />
                        </div>


                        {/* --- middle text ---t */}
                        <div className="text-left space-y-4">
                            <h2 className="text-6xl font-bold text-black mb-4">
                                Newsletter
                            </h2>
                            <h4 className="text-black text-2xl ">
                                Subscribe and get the special Offer
                            </h4>
                            <h4 className="text-white text-3xl mb-6">
                                <span className='bg-[#22244d] px-2'>40% Discount</span>
                            </h4>


                            <p className="text-black text-lg py-6 ">
                                let your users know a little more about your product or service.
                            </p>
                            <button
                                type="submit"
                                className="w-40  bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-tl-3xl  rounded-tr-3xl rounded-br-none   rounded-bl-3xl  font-medium transition duration-300"
                            >
                                Subscribe Email
                            </button>
                        </div>

                    </div>



                    {/* --- right side image --- */}
                    <div className="flex justify-left mr-16 pr-6">
                        <img
                            src={customize3}
                            alt="Big Right"
                            className="w-full max-w-md object-cover"
                        />
                    </div>
                </div>
            </div>


        </>

    )
}

export default Newsletter
