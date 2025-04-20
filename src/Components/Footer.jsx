import React from 'react'
import gipixlogo from '../assets/gipixlogo.png'
import line from '../assets/line.png'

const Footer = () => {
  return (
    <>
        <div className='bg-[#22244d] text-white pt-16'  style={{
            backgroundImage: `url(${line})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
        }}>

            <div id="info-box" className='w-[1200px] mx-auto grid grid-cols-3 gap-10 mb-16'>
                <img src={gipixlogo} alt="logo" />
                <div id="info">
                    <p className="relative inline-block text-white font-bold text-2xl after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-5/6 after:h-0.5 after:bg-[#e66249] mb-5">Information</p>
                    <div>
                        <p>Enim ad minim veniam, quis rem ipsor sit</p>
                        <p>amet ao Enim ad minim venianim veniam</p>
                        <p>dolor sit amet ao.</p>
                    </div>
                </div>
                <div id="contact">
                    <p className="relative inline-block text-white font-bold text-2xl after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-5/6 after:h-0.5 after:bg-[#e66249] mb-5">Contact Us</p>
                    <p>Phone: <span className='ml-3 hover:text-[#e66249] transition duration-300'>214-432-5905</span></p>
                    <p>Email: <span className='ml-3 hover:text-[#e66249] transition duration-300'>username@domain.com</span></p>
                </div>
            </div>

            <div id="free" className='text-center py-10'>
                <p className='text-4xl font-bold'>Start a Free Trial</p>
                <p className='font-semibold text-slate-300 my-5'>we help business innovate & growth company with 18 Years Perfessional Experience</p>
                <button className='ml-5 bg-[#e66249] hover:bg-[#22244d] hover:text-orange-400 hover:border-2 border-orange-400 hover:rounded-br-3xl text-white text-md font-medium py-3 p-10 rounded-tl-3xl rounded-tr-3xl rounded-br-none rounded-bl-3xl transition *:first-letter duration-300'>Start Free Trial</button>
            </div>

            <hr className='mt-16 mb-1 mx-auto w-[1200px] border-0.5 border-slate-500' />

            <div id='copyright' className='text-center py-5'>2024 © Gipix | Consulting Business HTML Landing Page</div>
        </div>
</>
 
  )
}

export default Footer
