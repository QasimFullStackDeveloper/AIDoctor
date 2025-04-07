import React from "react";
import image1 from "../assets/image1.png";
import icon1 from "../assets/image1_icon.svg";
import image2 from "../assets/image2.png";
import icon2 from "../assets/image2_icon.svg";
import image3 from "../assets/image3.png";
import icon3 from "../assets/image3_icon.svg";
import image4 from "../assets/image24.png";
import icon4 from "../assets/image4_icon.svg";

const FeaturesSection = () => {
  return (
    <section className="py-12 px-4 md:px-16 lg:px-24 bg-blue-50 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
        How Our AI Doctor Helps You
      </h2>
      <p className="text-gray-600 mt-2 text-lg">
        Fast, friendly, and reliable healthcare advice at your fingertips.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
        {/* Feature Card */}
        {[ 
          {
            img: image1,
            icon: icon1,
            title: "Symptom Checker",
            desc: "Advanced AI analysis of your symptoms with instant preliminary diagnosis and recommendations.",
            bg: "from-blue-50 to-blue-100",
            hoverBg: "from-blue-100 to-blue-200", 
          },
          {
            img: image2,
            icon: icon2,
            title: "Medication Guidance",
            desc: "Comprehensive information about medications, including dosage, side effects, and interactions.",
            bg: "from-green-50 to-green-100",
            hoverBg: "from-green-100 to-green-200", 
          },
          {
            img: image3,
            icon: icon3,
            title: "Mental Health Support",
            desc: "24/7 emotional support and resources for mental health concerns.",
            bg: "from-purple-50 to-purple-100",
            hoverBg: "from-purple-100 to-purple-200", 
          },
          {
            img: image4,
            icon: icon4,
            title: "Connect to a Doctor",
            desc: "Seamless referral to certified healthcare professionals when needed.",
            bg: "from-yellow-50 to-yellow-100",
            hoverBg: "from-yellow-100 to-yellow-200",
          }
        ].map((feature, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${feature.bg} rounded-2xl shadow-lg p-6 hover:bg-gradient-to-r ${feature.hoverBg} transform hover:scale-105 transition duration-300 ease-in-out`}
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="w-full rounded-lg"
            />
            <div className="flex items-center mt-4 justify-center gap-3">
              <img src={feature.icon} alt="Icon" className="w-8 h-8" />
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
            </div>
            <p className="text-gray-600 mt-2 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
