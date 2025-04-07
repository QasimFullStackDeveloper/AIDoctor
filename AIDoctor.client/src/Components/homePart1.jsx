import React from 'react';
import image from '../assets/HomeImage.png';
import { Link } from 'react-router-dom';

const HomeSection = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center h-[80vh] justify-between px-[5%] py-[4%] w-full"
      style={{
        marginTop: 0,
        opacity: 1,
        backgroundImage: `
        linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
        linear-gradient(180deg, #BFDBFE 0%, #FFE8EF 69%, #FFFFFF 100%)
      `,
      }}>
      {/* Left Section (Text) */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left  text-gray-900 max-w-3xl space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          Your AI Doctor, Just a{' '}
          <span className="text-[#2D5EFF]">Chat Away</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-6">
          Get instant, reliable medical advice anytime with our AI-powered
          doctor chatbot. Professional healthcare guidance at your fingertips.
        </p>
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <button className="bg-[#2D5EFF] hover:bg-[#0044CC] text-white px-8 py-4 rounded-lg shadow-lg flex items-center w-full md:w-auto transition-transform transform hover:scale-105">
            💬 Chat Now
          </button>
          <Link to="/premium-plans">
            <button className="bg-white border border-[#2D5EFF] hover:bg-[#2D5EFF] text-[#2D5EFF] hover:text-white px-8 py-4 rounded-lg shadow-lg flex items-center w-full md:w-auto transition-transform transform hover:scale-105">
              🌟 Explore Features
            </button>
          </Link>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="mt-[6%] md:mt-0 w-full md:w-[45%]  flex justify-center">
        <img
          src={image}
          alt="AI Doctor Illustration"
          className="w-[90%] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default HomeSection;
