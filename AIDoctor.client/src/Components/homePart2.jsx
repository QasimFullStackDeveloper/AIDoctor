import React from "react";
import Clock from "../../public/Clock.png";
import Clock_icon from "../../public/Clock_icon.svg";
import Shield from "../../public/Shield.png";
import Shield_icon from "../../public/Shield_icon.svg";
import Privacy from "../../public/Privacy.png";
import Privacy_icon from "../../public/Privacy_icon.svg";

const DoctorChatbotFeatures = () => {
  return (
    <section className="py-16 bg-gray-50 opacity-0 animate-fadeIn">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl font-semibold text-gray-900 transition-all duration-500 ease-in-out transform hover:scale-105">
          Why Choose Our Doctor Chatbot?
        </h2>
        <p className="mt-2 text-gray-600 transition-all duration-500 ease-in-out transform hover:scale-105">
          Our AI chatbot is built with doctor-approved knowledge — providing quick, confidential, and reliable advice.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {/* 24/7 Instant Access */}
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <img
            src={Clock}
            alt="Clock"
            className="mx-auto w-16 h-16 sm:w-20 sm:h-20 transition-all duration-300 ease-in-out transform hover:scale-110"
          />
          <div className="mt-4 flex items-center justify-center gap-2">
            <img
              src={Clock_icon}
              alt="Clock Icon"
              className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ease-in-out transform hover:scale-110"
            />
            <h3 className="text-lg font-semibold text-gray-900 transition-all duration-300 ease-in-out transform hover:scale-110">
              24/7 Instant Access
            </h3>
          </div>
          <p className="mt-2 text-gray-600 text-sm transition-all duration-300 ease-in-out transform hover:scale-105">
            Get medical advice anytime, anywhere. No waiting rooms, no appointments needed.
          </p>
        </div>

        {/* Medical Guidance */}
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <img
            src={Shield}
            alt="Shield"
            className="mx-auto w-16 h-16 sm:w-20 sm:h-20 transition-all duration-300 ease-in-out transform hover:scale-110"
          />
          <div className="mt-4 flex items-center justify-center gap-2">
            <img
              src={Shield_icon}
              alt="Shield Icon"
              className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ease-in-out transform hover:scale-110"
            />
            <h3 className="text-lg font-semibold text-gray-900 transition-all duration-300 ease-in-out transform hover:scale-110">
              Medical Guidance
            </h3>
          </div>
          <p className="mt-2 text-gray-600 text-sm transition-all duration-300 ease-in-out transform hover:scale-105">
            All information is dependent on AI training data and may not be 100% reliable.
          </p>
        </div>

        {/* Privacy First */}
        <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <img
            src={Privacy}
            alt="Lock"
            className="mx-auto w-16 h-16 sm:w-20 sm:h-20 transition-all duration-300 ease-in-out transform hover:scale-110"
          />
          <div className="mt-4 flex items-center justify-center gap-2">
            <img
              src={Privacy_icon}
              alt="Lock Icon"
              className="w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ease-in-out transform hover:scale-110"
            />
            <h3 className="text-lg font-semibold text-gray-900 transition-all duration-300 ease-in-out transform hover:scale-110">
              Privacy First
            </h3>
          </div>
          <p className="mt-2 text-gray-600 text-sm transition-all duration-300 ease-in-out transform hover:scale-105">
            Your health data is encrypted and protected with the highest security standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DoctorChatbotFeatures;
