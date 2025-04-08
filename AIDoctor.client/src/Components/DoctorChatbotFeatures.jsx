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
    description:
      "Get medical advice anytime, anywhere. No waiting rooms, no appointments needed.",
    customStyle: {
      background:
        "linear-gradient(0deg, rgba(0, 0, 0, 0.001), rgba(0, 0, 0, 0.001)), rgba(0, 0, 0, 0), linear-gradient(135deg, #EFF6FF -3%, #FFFFFF 100%)",
    },
  },
  {
    image: Shield,
    icon: Shield_icon,
    title: "Medical Guidance",
    description:
      "All information is dependent on AI training data and may not be 100% reliable.",
    customStyle: {
      background:
        "linear-gradient(0deg, rgba(0, 0, 0, 0.001), rgba(0, 0, 0, 0.001)), rgba(0, 0, 0, 0), linear-gradient(135deg, #FAF5FF 1%, #FFFFFF 99%)",
    },
  },
  {
    image: Privacy,
    icon: Privacy_icon,
    title: "Privacy First",
    description:
      "Your health data is encrypted and protected with the highest security standards.",
    customStyle: {
      background:
        "linear-gradient(0deg, rgba(0, 0, 0, 0.001), rgba(0, 0, 0, 0.001)), rgba(0, 0, 0, 0), linear-gradient(135deg, #FDF2F8 -3%, #FFFFFF 100%)",
    },
  },
];

const DoctorChatbotFeatures = () => {
  return (
    <section className="py-24 bg-white w-full">
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
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-screen-xl mx-auto px-6 md:px-12 xl:px-0">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-[8px] opacity-100 border border-[#DBEAFE] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] p-10 text-left w-full h-full flex flex-col justify-start"
            style={feature.customStyle}
          >
            <div className="mb-4 flex justify-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="custom_image mx-auto w-28 h-28 sm:w-32 sm:h-32"
              />
            </div>

            {/* Icon Above Title */}
            <img
              src={feature.icon}
              alt={`${feature.title} Icon`}
              className="w-8 h-8 sm:w-10 sm:h-10 mb-4"
            />

            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
              {feature.title}
            </h3>

            <p className="text-md sm:text-lg text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoctorChatbotFeatures;
