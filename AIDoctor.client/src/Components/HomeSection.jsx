import React from "react";
import image from "../assets/Homeimage.png";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/HeroSectionImage.svg";

const HomeSection = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center h-auto md:h-[90vh] justify-between px-6 py-8 md:px-[5%] md:py-[4%] w-full relative"
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
        <p className="text-base sm:text-lg md:text-x2 text-gray-700 mb-6">
          Get instant, reliable medical advice anytime with our AI-powered
          doctor chatbot. <br /> Professional healthcare guidance at your fingertips.
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
      <div className="mt-6 md:mt-0 w-full md:w-[50%] justify-center md:block hidden">
        <img
          src={backgroundImage}
          alt="AI Doctor Illustration"
          className="w-full max-w-[500px] h-auto object-contain"
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
