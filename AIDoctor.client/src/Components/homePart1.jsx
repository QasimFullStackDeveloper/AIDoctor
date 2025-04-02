import React from "react";
import image from "../../public/Homeimage.png";
import { Link } from "react-router-dom";

const HomeSection = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center text-white bg-gradient-to-b from-gray-900 via-blue-900 to-black px-6 md:px-12">
      <div className="flex flex-col items-center md:items-start max-w-2xl text-center md:text-left opacity-0 animate-fadeIn">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 transition-all duration-500 ease-in-out transform hover:scale-105">
          Your AI Doctor, Just a <span className="text-blue-400">Chat Away</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-6 transition-all duration-500 ease-in-out transform hover:scale-105">
          Get instant, reliable medical advice anytime with our AI-powered doctor chatbot. Professional healthcare guidance at your fingertips.
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center w-full md:w-auto transition-all duration-300 ease-in-out transform hover:scale-105">
            💬 Chat Now
          </button>
          <Link to="/premium-plans">
            <button className="bg-transparent border border-blue-400 hover:bg-blue-600 text-blue-400 hover:text-white px-6 py-3 rounded-lg shadow-lg flex items-center w-full md:w-auto transition-all duration-300 ease-in-out transform hover:scale-105">
              🌟 Explore Features
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-8 md:mt-0 max-w-lg opacity-0 animate-fadeIn delay-300">
        <img src={image} alt="AI Doctor Illustration" className="w-full rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105" />
      </div>
    </section>
  );
};

export default HomeSection;
