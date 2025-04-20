import React, { useEffect, useState } from 'react';
import person1 from '../assets/person-1.png';
import person2 from '../assets/person-2.png';
import person3 from '../assets/person-3.png';
import share from '../assets/share.png';

const Team = () => {

    const [one, setOne] = useState(0);
    const [two, setTwo] = useState(0);
    const [three, setThree] = useState(0);
    const [four, setFour] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setOne((prev) => prev < 1 ? prev + 1 : prev);
            setTwo((prev) => prev < 15 ? prev + 1 : prev);
            setThree((prev) => prev < 43 ? prev + 1 : prev);
            setFour((prev) => prev < 12 ? prev + 1 : prev);
        }, 100);


        return () => clearInterval(interval);
    }, [one, two, three, four]);



    return (

        <div className='bg-[#f6f6f6] z-[-10] py-[50px] pb-[100px]'>
            <div className='p-10'>
                <p className='text-[#de7148] text-center font-bold'>DEDICATED TO THE PEOPLE</p>
                <p className='text-center text-5xl font-bold my-2 mb-10'>Meet Our Expert Team</p>

                <div id='profiles' className='flex justify-center gap-10 relative mt-10 h-100 mb-5'>
                    <div id="profile-1" className='relative z-10 grayscale hover:grayscale-0 transition duration-300'>
                        <div className='relative z-20 left-10'>
                            <img src={person1} alt='person-1' />
                        </div>
                        <div className='bg-white w-[400px] h-[350px] mt-[-100px] p-12 pt-0 rounded-full rounded-bl-none flex flex-col justify-end'>
                            <p className='text-[#de7148] font-semibold mb-2'>EXPERT CONSULTANT</p>
                            <p className='text-3xl font-semibold mb-2'>Thomas Willimes</p>
                            <p className='font-medium mb-2'>📞 ‪+1234 450 2086‬</p>
                            <img src={share} alt="share" className='mt-8 w-[40px] border-1 border-gray-500 p-2 rounded-full' />
                        </div>
                    </div>

                    <div id="profile-2" className='relative z-10 grayscale hover:grayscale-0 transition duration-300'>
                        <div className='relative z-20 left-10'>
                            <img src={person2} alt='person-2' />
                        </div>
                        <div className='bg-white w-[400px] h-[350px] mt-[-100px] p-12 pt-0 rounded-full rounded-bl-none flex flex-col justify-end'>
                            <p className='text-[#de7148] font-semibold mb-1'>EXPERT CONSULTANT</p>
                            <p className='text-3xl font-semibold mb-1'>Willimes Domson</p>
                            <p className='font-medium mb-1'>📞 ‪+1234 450 2086‬</p>
                            <img src={share} alt="share" className='mt-8 w-[40px] border-1 border-gray-500 p-2 rounded-full' />
                        </div>
                    </div>

                    <div id="profile-3" className='relative z-10 grayscale hover:grayscale-0 transition duration-300'>
                        <div className='relative z-20 left-10'>
                            <img src={person3} alt='person-3' />
                        </div>
                        <div className='bg-white w-[400px] h-[350px] mt-[-100px] p-12 pt-0 rounded-full rounded-bl-none flex flex-col justify-end'>
                            <p className='text-[#de7148] font-semibold mb-1'>EXPERT CONSULTANT</p>
                            <p className='text-3xl font-semibold mb-1'>Maikal Qlark</p>
                            <p className='font-medium mb-1'>📞 ‪+1234 450 2086‬</p>
                            <img src={share} alt="share" className='mt-8 w-[40px] border-1 border-gray-500 p-2 rounded-full' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='max-w-[1200px] mx-auto'>
                <div className='flex justify-evenly mt-5'>
                    <div>
                        <p className='text-[#de7148] text-center font-bold text-7xl'>{one}<sup className='text-4xl'>k</sup></p>
                        <p className='text-xl'>completed projects</p>
                    </div>
                    <div>
                        <p className='text-[#de7148] text-center font-bold text-7xl'>{two}<sup className='text-4xl'>m</sup></p>
                        <p className='text-xl'>Customer Satisfaction</p>
                    </div>
                    <div>
                        <p className='text-[#de7148] text-center font-bold text-7xl'>{three}<sup className='text-4xl'>+</sup></p>
                        <p className='text-xl'>Team members</p>
                    </div>
                    <div>
                        <p className='text-[#de7148] text-center font-bold text-7xl'>{four}<sup className='text-4xl'>m</sup></p>
                        <p className='text-xl'>Customer Satisfaction</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team