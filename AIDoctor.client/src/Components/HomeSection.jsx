import React from 'react';
import image from '../assets/Homeimage.png';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/HeroSectionImage.svg';
import search from '../assets/searchIcon.svg';
import explore from '../assets/exploreIcon.svg';

const HomeSection = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between w-full min-h-[90vh] px-4 md:px-20 py-10 relative"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0), rgba(0,0,0,0)), 
                          linear-gradient(180deg, #BFDBFE 0%, #FFE8EF 69%, #FFFFFF 100%)`,
      }}
    >
      {/* Mobile background image (semi-transparent) */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${image})`, opacity: 0.4 }}
      ></div>

      {/* Left Section */}
      <div className="z-10 flex-1 flex flex-col justify-center text-left text-gray-900 max-w-[600px]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          Your AI Doctor, Just a <br />
          Chat Away
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6">
          Get instant, reliable medical advice anytime with our AI-powered
          doctor chatbot. <br />
          Professional healthcare guidance at your fingertips.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
          <button className="h-14 bg-[#2563EB] border-2 border-[#2563EB] hover:bg-[#0044CC] text-white px-8 rounded-lg shadow-lg flex items-center justify-center transition-transform transform hover:scale-105">
            <img src={explore} alt="explore" className="mr-2" /> Chat Now
          </button>
          <Link to="/premium-plans">
            <button className="h-14 bg-white border border-[#2D5EFF] hover:bg-[#2D5EFF] text-[#2D5EFF] hover:text-white px-8 rounded-lg shadow-lg flex items-center justify-center transition-transform transform hover:scale-105">
              <img src={search} alt="search" className="mr-2" /> Explore Features
            </button>
          </Link>
        </div>
      </div>

      {/* Right Section (hidden on mobile) */}
      <div className="z-10 flex-1 justify-center items-center mt-10 md:mt-0 max-w-[600px] hidden md:flex">
        <img
          src={backgroundImage}
          alt="AI Doctor Illustration"
          className="w-full max-w-[480px] object-contain"
        />
      </div>
    </div>
  );
};

export default HomeSection;
