import React from "react";
import image1 from "../assets/image1.png";
import icon1 from "../assets/image1_icon.svg";
import image2 from "../assets/image2.png";
import icon2 from "../assets/image2_icon.svg";
import image3 from "../assets/image3.png";
import icon3 from "../assets/image3_icon.svg";
import image4 from "../assets/image24.png";
import icon4 from "../assets/image4_icon.svg";

const features = [
  {
    img: image1,
    icon: icon1,
    title: "Symptom Checker",
    desc: "Advanced AI analysis of your symptoms with instant preliminary diagnosis and recommendations.",
    bg: "linear-gradient(0deg, rgba(0, 0, 0, 0.001), rgba(0, 0, 0, 0.001)), rgba(0, 0, 0, 0), linear-gradient(135deg, #ECFEFF -1%, #FFFFFF 99%)",
  },
  {
    img: image2,
    icon: icon2,
    title: "Medication Guidance",
    desc: "Comprehensive information about medications, including dosage, side effects, and interactions.",
    bg: "linear-gradient(0deg, rgba(0, 0, 0, 0.001), rgba(0, 0, 0, 0.001)), rgba(0, 0, 0, 0), linear-gradient(135deg, #F0FDF4 -1%, #FFFFFF 99%)",
  },
  {
    img: image3,
    icon: icon3,
    title: "Mental Health Support",
    desc: "24/7 emotional support and resources for mental health concerns.",
    bg: "linear-gradient(0deg, rgba(0, 0, 0, 0.001), rgba(0, 0, 0, 0.001)), rgba(0, 0, 0, 0), linear-gradient(135deg, #F5F3FF -1%, #FFFFFF 99%)",
  },
  {
    img: image4,
    icon: icon4,
    title: "Connect to a Doctor",
    desc: "Seamless referral to certified healthcare professionals when needed.",
    bg: "linear-gradient(0deg, rgba(0, 0, 0, 0.001), rgba(0, 0, 0, 0.001)), rgba(0, 0, 0, 0), linear-gradient(135deg, #FEFCE8 -1%, #FFFFFF 99%)",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-12 px-4 md:px-16 lg:px-24 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
        How Our AI Doctor Helps You
      </h2>
      <p className="text-gray-600 mt-2 text-lg">
        Fast, friendly, and reliable healthcare advice at your fingertips.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              background: feature.bg,
              borderRadius: "8px",
              opacity: 1,
              boxShadow:
                "0px 4px 6px -4px rgba(0, 0, 0, 0.1), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
            }}
            className="p-6 text-left"
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="w-full rounded-lg mb-4"
            />
            <div className="mb-2">
              <img src={feature.icon} alt="Icon" className="w-8 h-8 mb-2" />
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-600 mt-2 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
