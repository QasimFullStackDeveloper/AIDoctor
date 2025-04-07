import React from "react";
import Clock from "../assets/Clock.png";
import Clock_icon from "../assets/Clock_icon.svg";
import Shield from "../assets/Shield.png";
import Shield_icon from "../assets/Shield_icon.svg";
import Privacy from "../assets/Privacy.png";
import Privacy_icon from "../assets/Privacy_icon.svg";
import "./DoctorChatbot.css";

const features = [
  {
    image: Clock,
    icon: Clock_icon,
    title: "24/7 Instant Access",
    description: "Get medical advice anytime, anywhere. No waiting rooms, no appointments needed.",
    bgGradient: "bg-gradient-to-tr from-[#EFF6FF] to-[#FFFFFF]",
  },
  {
    image: Shield,
    icon: Shield_icon,
    title: "Medical Guidance",
    description: "All information is dependent on AI training data and may not be 100% reliable.",
    bgGradient: "bg-gradient-to-tl from-[#FAF5FF] to-[#FFFFFF]",
  },
  {
    image: Privacy,
    icon: Privacy_icon,
    title: "Privacy First",
    description: "Your health data is encrypted and protected with the highest security standards.",
    bgGradient: "bg-gradient-to-tr from-[#FDF2F8] to-[#FFFFFF]",
  },
];

const DoctorChatbotFeatures = () => {
  return (
    <section className="py-24 bg-amber-50 w-full">
      {/* Section Header */}
      <div className="max-w-screen-xl mx-auto text-center px-6">
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
          Why Choose Our Doctor Chatbot?
        </h2>
        <p className="mt-4 text-gray-600 text-lg sm:text-xl max-w-4xl mx-auto">
          Our AI chatbot is built with doctor-approved knowledge — providing quick, confidential, and reliable advice.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-screen-xl mx-auto px-6 items-stretch custom-grid">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`p-12 rounded-3xl divs text-center w-full h-full flex flex-col ${feature.bgGradient} opacity-100 border border-[#FCE7F3] bg-blue-100 shadow-lg shadow-[#FCE7F3] box-border`}
          >
            <div className="mb-6 flex justify-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="custom_image mx-auto w-28 h-28 sm:w-32 sm:h-32"
              />
            </div>
            <img
              src={feature.icon}
              alt={`${feature.title} Icon`}
              className="w-10 h-10 sm:w-8 sm:h-8 mb-4"
            />
            <h3 className="text-2xl sm:text-3xl font-semibold text-left mb-6 custom-head">
              {feature.title}
            </h3>
            <p className="mt-6 text-lg sm:text-xl flex-grow">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoctorChatbotFeatures;
