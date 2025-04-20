import React, { useState, useEffect } from 'react';
import gipixelogo from '../assets/gipixlogo.png';
import line from '../assets/line.png';

const Header = () => {
  const [showBgImage, setShowBgImage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowBgImage(false);
      } else {
        setShowBgImage(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const menuItems = [
    { name: 'About', link: '#about' },
    { name: 'Team', link: '#team' },
    { name: 'Services', link: '#services' },
    { name: 'Pricing', link: '#pricing' },
    { name: 'FAQ’s', link: '#faq' },
  ];

  const phoneNumber = '+1234 450 2086';

  return (
    <nav
      className="bg-[#22244d] fixed top-0 w-full z-50 p-8 transition-all duration-300"
      style={{
        backgroundImage: showBgImage ? `url(${line})` : 'none',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >


      <div className="flex justify-between items-center h-16 px-16">
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
                className="text-white text-lg hover:text-yellow-600 px-3 py-2 rounded-md text-18px font-medium transition duration-300"
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
            {/* rounded yellow background wrapper */}
            <div className="w-14 h-14 mr-3 bg-yellow-400 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-black"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="m7 2.75c-.41421 0-.75.33579-.75.75v17c0 .4142.33579.75.75.75h10c.4142 0 .75-.3358.75-.75v-17c0-.41421-.3358-.75-.75-.75zm-2.25.75c0-1.24264 1.00736-2.25 2.25-2.25h10c1.2426 0 2.25 1.00736 2.25 2.25v17c0 1.2426-1.0074 2.25-2.25 2.25h-10c-1.24264 0-2.25-1.0074-2.25-2.25z" />
                <path d="m10.25 5c0-.41421.3358-.75.75-.75h2c.4142 0 .75.33579.75.75s-.3358.75-.75.75h-2c-.4142 0-.75-.33579-.75-.75z" />
                <path d="m9.25 19c0-.4142.33579-.75.75-.75h4c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-4c-.41421 0-.75-.3358-.75-.75z" />
              </svg>
            </div>
            <span className="font-medium">{phoneNumber}</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
