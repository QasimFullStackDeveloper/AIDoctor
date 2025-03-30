import React from "react";
import image1 from "../../public/image1.png"
import icon1 from "../../public/image1_icon.svg"
import image2 from "../../public/image2.png"
import icon2 from "../../public/image2_icon.svg"
import image3 from "../../public/image3.png"
import icon3 from "../../public/image3_icon.svg"
import image4 from "../../public/image24.png"
import icon4 from "../../public/image4_icon.svg"

const FeaturesSection = () => {
    return (
      <section className="py-12 px-4 md:px-16 lg:px-24 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">How Our AI Doctor Helps You</h2>
        <p className="text-gray-600 mt-2">Fast, friendly, and reliable healthcare advice at your fingertips.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Symptom Checker */}
          <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition duration-300">
            <img src={image1} alt="Symptom Checker" className="w-full rounded-lg" />
            <div className="flex items-center mt-4">
              <img src={icon1} alt="Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-lg font-medium text-gray-900">Symptom Checker</h3>
            </div>
            <p className="text-gray-600 mt-2">Advanced AI analysis of your symptoms with instant preliminary diagnosis and recommendations.</p>
          </div>
  
          {/* Medication Guidance */}
          <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition duration-300">
            <img src={image2} alt="Medication Guidance" className="w-full rounded-lg" />
            <div className="flex items-center mt-4">
              <img src={icon2} alt="Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-lg font-medium text-gray-900">Medication Guidance</h3>
            </div>
            <p className="text-gray-600 mt-2">Comprehensive information about medications, including dosage, side effects, and interactions.</p>
          </div>
  
          {/* Mental Health Support */}
          <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition duration-300">
            <img src={image3} alt="Mental Health Support" className="w-full rounded-lg" />
            <div className="flex items-center mt-4">
              <img src={icon3} alt="Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-lg font-medium text-gray-900">Mental Health Support</h3>
            </div>
            <p className="text-gray-600 mt-2">24/7 emotional support and resources for mental health concerns.</p>
          </div>
  
          {/* Connect to a Doctor */}
          <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition duration-300">
            <img src={image4} alt="Connect to a Doctor" className="w-full rounded-lg" />
            <div className="flex items-center mt-4">
              <img src={icon4} alt="Icon" className="w-6 h-6 mr-2" />
              <h3 className="text-lg font-medium text-gray-900">Connect to a Doctor</h3>
            </div>
            <p className="text-gray-600 mt-2">Seamless referral to certified healthcare professionals when needed.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturesSection;
  