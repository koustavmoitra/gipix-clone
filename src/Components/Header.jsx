import React from 'react';
import gipixelogo from '../assets/gipixlogo.png'
const Header = () => {
  const menuItems = [
    { name: 'About', link: '#about' },
    { name: 'Team', link: '#team' },
    { name: 'Services', link: '#services' },
    { name: 'Pricing', link: '#pricing' },
    { name: 'FAQ’s', link: '#faq' },
  ];

  const phoneNumber = '+1234 450 2086';

  return (
    <nav className="bg-[#22244d] shadow-md fixed top-0 w-full z-50 ">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center h-16">


          {/* --- logo --- */}
          <div className="flex-shrink-0 ml-10">
            <img src={gipixelogo} alt="Logo" className="h-15" />
          </div>



          {/* --- menu items ---  */}
          <div className="hidden md:flex flex-grow justify-center">
            <div className="flex space-x-8">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-white hover:text-yellow-600 px-3 py-2 rounded-md text-18px font-medium transition duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>



          {/* --- phone number --- */}
          <div className="flex items-center mr-14 pr-2">
            <a
              href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`}
              className="flex items-center text-white text-xl hover:text-yellow-600 transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="font-medium">{phoneNumber}</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;