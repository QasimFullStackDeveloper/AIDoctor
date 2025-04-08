import React from "react";
import image from "../assets/Homeimage.png";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/HeroSectionImage.svg";

const HomeSection = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between w-full min-h-[90vh] px-4 md:px-20 py-10 relative"
      style={{
        marginTop: 0,
        opacity: 1,
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), 
        linear-gradient(180deg, #BFDBFE 0%, #FFE8EF 69%, #FFFFFF 100%)`,
      }}
    >
      {/* Mobile Background Image */}
      <div className="absolute inset-0 bg-cover bg-center md:hidden" style={{ backgroundImage: `url(${image})`, opacity: 0.5 }}></div>

      {/* Left Section  */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left text-gray-900 max-w-3xl space-y-6 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 md:whitespace-normal whitespace-nowrap">
          Your AI Doctor, Just a{" "} <br />
          <span className="mt-6 text-[#2D5EFF]">Chat Away</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6">
          Get instant, reliable medical advice anytime with our AI-powered
          doctor chatbot. <br /> Professional healthcare guidance at your fingertips.
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

      {/* Right Section */}
      <div className="z-10 flex-1 flex justify-center items-center mt-10 md:mt-0 max-w-[600px]">
        <img
          src={backgroundImage}
          alt="AI Doctor Illustration"
          className="w-full max-w-[480px] object-contain"
        />
      </div>

      <style jsx>{`
        @media (min-width: 1400px) {
          .flex {
            align-items: flex-start; /
            flex-wrap: wrap;
          }

          .md\:h-[90vh] {
            height: 60vh; 
          }

          .md\:mt-0 {
            margin-bottom: -50px; 
          }

          .relative {
            position: relative !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeSection;
