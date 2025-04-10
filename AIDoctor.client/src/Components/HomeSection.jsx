import React from 'react';
import image from '../assets/Homeimage.png';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/HeroSectionImage.svg';
import search from '../assets/searchIcon.svg';
import explore from '../assets/exploreIcon.svg';

const HomeSection = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center w-full min-h-[90vh]  sm:min-h-[85vh] md:min-h-[75vh] lg:min-h-[80vh] xl:min-h-[70vh] 2xl:min-h-[65vh] px-4 sm:px-6 md:px-20 2xl:px-24 py-10 2xl:py-4 relative gap-6 2xl:gap-1"
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
      <div className="z-10 flex-1 flex flex-col items-center md:items-start text-center 2xl:ml-[100px] md:text-left text-gray-900 max-w-3xl space-y-4 sm:space-y-6 2xl:space-y-1 mx-auto px-2 sm:px-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[55px] 2xl:text-[60px] font-bold leading-tight mb-4 sm:mb-6 2xl:mb-2">
          <span className="block whitespace-nowrap">Your AI Doctor, Just a</span>
          <span className="block mt-2 sm:mt-4">Chat Away</span>
        </h1>

        <p className="text-sm 2xl:mt-[20px] sm:text-base md:text-[20px] font-['Roboto'] text-gray-700 mb-4 sm:mb-6 2xl:mb-4 max-w-md sm:max-w-xl leading-snug sm:leading-normal">
          Get instant, reliable medical advice anytime with our AI-powered doctor chatbot.
          Professional healthcare guidance at your fingertips.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
          <button className="w-full 2xl:mt-10 sm:w-auto h-14 bg-[#2563EB] border-2 border-[#2563EB] hover:bg-[#0044CC] text-white px-8 rounded-lg shadow-lg flex items-center justify-center transition-transform transform hover:scale-105">
            <img src={explore} alt="explore" className="mr-2" /> Chat Now
          </button>
          <Link to="/premium-plans" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto 2xl:mt-10 h-14 bg-white border border-[#2D5EFF] hover:bg-[#2D5EFF] text-[#2D5EFF] hover:text-white px-8 rounded-lg shadow-lg flex items-center justify-center transition-transform transform hover:scale-105">
              <img src={search} alt="search" className="mr-2" /> Explore Features
            </button>
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="z-10 flex-1  justify-center items-center mt-10 md:mt-0 mx-auto hidden md:flex 2xl:mr-[120px]">
        <img
          src={backgroundImage}
          alt="AI Doctor Illustration"
          className="object-contain w-[300px] sm:w-[380px] md:w-[440px] lg:w-[500px] xl:w-[540px] 2xl:w-[640px] max-w-none"
        />
      </div>
    </div>
  );
};

export default HomeSection;
