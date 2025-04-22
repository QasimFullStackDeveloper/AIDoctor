import React from 'react';
import image from '../assets/Homeimage.png';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/HeroSectionImage.svg';
import search from '../assets/searchIcon.svg';
import explore from '../assets/exploreIcon.svg';

const HomeSection = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center w-full h-auto px-4 sm:px-6 md:px-14 xl:px-20 2xl:px-24 py-10 2xl:py-16 2xl:min-h-[65vh] relative gap-6 "
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0), rgba(0,0,0,0)), 
                          linear-gradient(180deg, #BFDBFE 0%, #FFE8EF 69%, #FFFFFF 100%)`,
      }}
    >
      {/* Mobile background image */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${image})`, opacity: 0.4 }}
      ></div>

      {/* Left Section */}
      <div className="z-10 flex-1 flex flex-col items-center md:items-start text-center md:text-left text-gray-900 space-y-4 sm:space-y-5 md:space-y-6 mx-auto px-2 sm:px-0 max-w-2xl">
        <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[48px] 2xl:text-[55px] font-bold leading-tight mb-4 sm:mb-6">
          <span className="block whitespace-nowrap">Your AI Doctor, Just a</span>
          <span className="block mt-2 sm:mt-4 md:mt-2 lg:mt-3">Chat Away</span>
        </h1>

        <p className="text-sm sm:text-base md:text-[16px] lg:text-[17px] 2xl:text-[18px] font-['Roboto'] text-gray-700 mb-4 sm:mb-6 max-w-md sm:max-w-xl mx-3 leading-snug sm:leading-normal md:leading-relaxed">
          Get instant, reliable medical advice anytime with our AI-powered doctor chatbot. Professional healthcare guidance at your fingertips.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 w-full sm:w-auto ml-3 sm:ml-0">
          <button className="w-full sm:w-auto h-12 md:h-14 bg-[#2563EB] border-2 border-[#2563EB] hover:bg-[#0044CC] text-white px-6 md:px-8 rounded-lg shadow-lg flex items-center justify-center transition-transform transform hover:scale-105 text-sm sm:text-base md:text-lg truncate">
            <img src={explore} alt="explore" className="mr-2 w-5 h-5" /> Chat Now
          </button>
          <Link to="/index/premium-plans" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto h-12 md:h-14 bg-white border border-[#2D5EFF] hover:bg-[#2D5EFF] text-[#2D5EFF] hover:text-white px-6 md:px-8 rounded-lg shadow-lg flex items-center justify-center transition-transform transform hover:scale-105 text-sm sm:text-base md:text-lg truncate">
              <img src={search} alt="search" className="mr-2 w-5 h-5" /> Explore Features
            </button>
          </Link>

        </div>
      </div>

      {/* Right Section */}
      <div className="z-10 flex-1  justify-center items-center mt-10 md:mt-0 hidden md:flex">
        <img
          src={backgroundImage}
          alt="AI Doctor Illustration"
          className="object-contain w-full max-w-[500px] md:max-w-[420px] lg:max-w-[480px] xl:max-w-[550px] 2xl:max-w-[600px] aspect-[4/3]"
        />
      </div>
    </div>
  );
};

export default HomeSection;
