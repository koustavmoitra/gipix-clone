import React from 'react'
import quote from '../assets/quote.png'


const Reviews = () => {
    return (
        <>
            <div className='p-10'>
                <p className='text-[#de7148] text-lg text-center font-bold'>1M Satisfied Customers</p>
                <p className='text-center text-6xl font-bold mt-2'>What Client’s Say </p>
            </div>


            <div className="flex flex-col items-center justify-center py-10  bg-white">
                {/* --- cards --- */}
                <div className="flex flex-wrap gap-8 justify-center mb-8">
                    {[1, 2].map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#f1f2fe] rounded-3xl p-8 w-full max-w-md"
                        >
                            <p className="text-[#333] text-[18px] leading-relaxed mb-6">
                                "consultancy has been a very enjoyable and professional experience.
                                The effort that Conjunct Consulting puts in to ensure well trained
                                consulting teams lead by well trained and knowledgeable team leaders
                                is very evident.”
                            </p>
                            <div className="flex items-center">
                                <div className="w-14 h-14 bg-[#fd5d47] rounded-full rounded-br-none flex items-center justify-center text-white text-xl font-bold mr-4">
                                    <img src={quote} alt='quote' className='w-8 h-8'></img>
                                </div>
            
                                <div>
                                    <h4 className="text-black font-bold">Levent Sucuoglu</h4>
                                    <p className="text-sm text-gray-600">
                                        Director of Information Technology
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Dots */}
                <div className="flex space-x-2">
                    <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                    <span className="w-3 h-3 rounded-full bg-[#fd5d47]"></span>
                </div>
            </div>
        </>
    )
}

export default Reviews
