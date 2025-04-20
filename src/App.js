import './App.css';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import LandingPage from './Components/LandingPage';
import Service from './Components/Service';
import Team from './Components/Team';
import Plan from './Components/Plan';
import Newsletter from './Components/Newsletter';
import Faqs from './Components/Faqs';
import Reviews from './Components/Reviews';
import Footer from './Components/Footer';
import Loader from './Components/Loader';

import React, { useState } from 'react';

import { FaArrowUp } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";

function App() {

  const [showLoader, setShowLoader] = useState(true);

  return (
    <div>
      {showLoader && <Loader onFinish={() => setShowLoader(false)} />}

      {!showLoader && (
        <div>
          <Header />
          <ScrollToTop
            smooth
            className="!bg-transparent"
            component={<FaArrowUp className="w-[70px] h-[70px] text-black bg-white rounded-full p-5 border-orange-400 border-4" />}
            style={{ zIndex: 999 }} />
          <HeroSection />
          <LandingPage />
          <Team />
          <Service />
          <Plan />
          <Newsletter />
          <Faqs />
          <Reviews />
          <Footer />
        </div>
      )}


    </div>
  );
}

export default App;
