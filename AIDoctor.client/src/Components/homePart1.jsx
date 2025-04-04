import React from "react";
import image from "../../public/Homeimage.png";
import { Link } from "react-router-dom";

const HomeSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-b from-blue-100 via-blue-400 to-green-600 mt-0 px-6 md:px-12 py-24 min-h-screen">
      {/* Left Section (Text) */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left text-gray-900 max-w-3xl space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          Your AI Doctor, Just a{" "}
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
      <div className="mt-8 md:mt-0 w-full md:w-1/2 flex justify-center animate-fadeIn delay-300">
        <img
          src={image}
          alt="AI Doctor Illustration"
          className="w-full max-w-xl h-auto object-contain rounded-lg shadow-lg transition-transform transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default HomeSection;
