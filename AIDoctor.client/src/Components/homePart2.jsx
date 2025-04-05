import React from "react";
import Clock from "../../public/Clock.png";
import Clock_icon from "../../public/Clock_icon.svg";
import Shield from "../../public/Shield.png";
import Shield_icon from "../../public/Shield_icon.svg";
import Privacy from "../../public/Privacy.png";
import Privacy_icon from "../../public/Privacy_icon.svg";

const DoctorChatbotFeatures = () => {
  return (
    <section className="py-24 bg-blue-50 w-full">
      {/* Section Header */}
      <div className="max-w-screen-xl mx-auto text-center px-6">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 mb-6">
          Why Choose Our Doctor Chatbot?
        </h2>
        <p className="mt-4 text-gray-600 text-lg sm:text-xl max-w-4xl mx-auto">
          Our AI chatbot is built with doctor-approved knowledge — providing
          quick, confidential, and reliable advice.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-screen-xl mx-auto px-6 items-stretch">
        {/* 24/7 Instant Access */}
        <div className="p-12 rounded-3xl text-center w-full h-full flex flex-col opacity-100 bg-gradient-to-tl from-[#FDF2F8] via-[#FCE7F3] to-[#FFFFFF] border border-[#FCE7F3] shadow-lg shadow-[#FCE7F3] box-border">
          <div className="mb-6 flex justify-center">
            <img
              src={Clock}
              alt="Clock"
              className="mx-auto w-28 h-28 sm:w-32 sm:h-32"
            />
          </div>
          <img
            src={Clock_icon}
            alt="Clock Icon"
            className="w-10 h-10 sm:w-10 sm:h-10 mb-4"
          />
          <h3 className="text-2xl sm:text-3xl font-semibold text-left mb-6">
            24/7 Instant Access
          </h3>
          <p className="mt-6 text-lg sm:text-xl flex-grow">
            Get medical advice anytime, anywhere. No waiting rooms, no appointments needed.
          </p>
        </div>

        {/* Medical Guidance */}
        <div className="p-12 rounded-3xl text-center w-full h-full flex flex-col opacity-100 bg-gradient-to-tl from-[#FDF2F8] via-[#FCE7F3] to-[#FFFFFF] border border-[#FCE7F3] shadow-lg shadow-[#FCE7F3] box-border">
          <div className="mb-6 flex justify-center">
            <img
              src={Shield}
              alt="Shield"
              className="mx-auto w-28 h-28 sm:w-32 sm:h-32"
            />
          </div>
          <img
            src={Shield_icon}
            alt="Shield Icon"
            className="w-10 h-10 sm:w-10 sm:h-10 mb-4"
          />
          <h3 className="text-2xl sm:text-3xl font-semibold text-left mb-6">
            Medical Guidance
          </h3>
          <p className="mt-6 text-lg sm:text-xl flex-grow">
            All information is dependent on AI training data and may not be 100% reliable.
          </p>
        </div>

        {/* Privacy First */}
        <div className="p-12 rounded-3xl text-center w-full h-full flex flex-col opacity-100 bg-gradient-to-tl from-[#FDF2F8] via-[#FCE7F3] to-[#FFFFFF] border border-[#FCE7F3] shadow-lg shadow-[#FCE7F3] box-border">
          <div className="mb-6 flex justify-center">
            <img
              src={Privacy}
              alt="Lock"
              className="mx-auto w-28 h-28 sm:w-32 sm:h-32"
            />
          </div>
          <img
            src={Privacy_icon}
            alt="Lock Icon"
            className="w-10 h-10 sm:w-10 sm:h-10 mb-4"
          />
          <h3 className="text-2xl sm:text-3xl font-semibold text-left mb-6">
            Privacy First
          </h3>
          <p className="mt-6 text-lg sm:text-xl flex-grow">
            Your health data is encrypted and protected with the highest security standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DoctorChatbotFeatures;
