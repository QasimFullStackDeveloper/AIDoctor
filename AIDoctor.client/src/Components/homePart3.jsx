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
    <section className="py-12 px-4 md:px-16 lg:px-24 bg-blue-50 text-center opacity-100">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
        How Our AI Doctor Helps You
      </h2>
      <p className="text-gray-600 mt-2 text-lg">
        Fast, friendly, and reliable healthcare advice at your fingertips.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
        {/* Symptom Checker */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl shadow-lg p-6 hover:scale-105 transform transition duration-300 ease-in-out">
          <img
            src={image1}
            alt="Symptom Checker"
            className="w-full rounded-lg" // No hover effect on the image
          />
          <div className="flex items-center mt-4 justify-center gap-3">
            <img
              src={icon1}
              alt="Icon"
              className="w-8 h-8"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              Symptom Checker
            </h3>
          </div>
          <p className="text-gray-600 mt-2 text-sm">
            Advanced AI analysis of your symptoms with instant preliminary diagnosis and recommendations.
          </p>
        </div>

        {/* Medication Guidance */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl shadow-lg p-6 hover:scale-105 transform transition duration-300 ease-in-out">
          <img
            src={image2}
            alt="Medication Guidance"
            className="w-full rounded-lg" // No hover effect on the image
          />
          <div className="flex items-center mt-4 justify-center gap-3">
            <img
              src={icon2}
              alt="Icon"
              className="w-8 h-8"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              Medication Guidance
            </h3>
          </div>
          <p className="text-gray-600 mt-2 text-sm">
            Comprehensive information about medications, including dosage, side effects, and interactions.
          </p>
        </div>

        {/* Mental Health Support */}
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl shadow-lg p-6 hover:scale-105 transform transition duration-300 ease-in-out">
          <img
            src={image3}
            alt="Mental Health Support"
            className="w-full rounded-lg" // No hover effect on the image
          />
          <div className="flex items-center mt-4 justify-center gap-3">
            <img
              src={icon3}
              alt="Icon"
              className="w-8 h-8"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              Mental Health Support
            </h3>
          </div>
          <p className="text-gray-600 mt-2 text-sm">
            24/7 emotional support and resources for mental health concerns.
          </p>
        </div>

        {/* Connect to a Doctor */}
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl shadow-lg p-6 hover:scale-105 transform transition duration-300 ease-in-out">
          <img
            src={image4}
            alt="Connect to a Doctor"
            className="w-full rounded-lg" // No hover effect on the image
          />
          <div className="flex items-center mt-4 justify-center gap-3">
            <img
              src={icon4}
              alt="Icon"
              className="w-8 h-8"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              Connect to a Doctor
            </h3>
          </div>
          <p className="text-gray-600 mt-2 text-sm">
            Seamless referral to certified healthcare professionals when needed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
