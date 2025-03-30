import React from "react";
import image from "../../public/Homeimage.png"
import { Link } from "react-router-dom";
const HomeSection = () => {
  return (
    <section className="h-screen flex items-center justify-center text-white bg-gradient-to-b from-gray-900 via-blue-900 to-black">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Your AI Doctor, Just a <span className="text-blue-400">Chat Away</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Get instant, reliable medical advice anytime with our AI-powered doctor chatbot. Professional healthcare guidance at your fingertips.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center">
              💬 Chat Now
            </button>
            <Link to="/premium-plans">
            <button className="bg-transparent border border-blue-400 hover:bg-blue-600 text-blue-400 hover:text-white px-6 py-3 rounded-lg shadow-lg flex items-center">
              🌟 Explore Features
            </button>
            </Link>
          </div>
        </div>
        <div className="max-w-lg">
          <img src={image} alt="AI Doctor Illustration" className="w-full rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
