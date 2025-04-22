import React from "react";
import tick from "../../assets/Tic.svg";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const PremiumPlans = () => {
  return (
    <>
      <Navbar colour={"bg-gray-100"} />
      <div
        className="bg-gray-100 px-4 py-10 md:px-12 lg:px-24 xl:px-32 flex bigScr:mb-[-50px] bigScr:mt-[-150px] items-center justify-center"
        style={{ minHeight: "90vh" }}
      >
        <div className="w-full max-w-[1440px] text-center">
          <h2 className="text-2xl sm:text-2xl md:text-3xl bigScr:text-5xl font-bold text-gray-900">
            Premium Features
          </h2>
          <p className="text-gray-600 mt-2 mb-10 text-base md:text-lg xl:text-xl">
            Unlock these exclusive features with our premium plans
          </p>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 IpadPro:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-10">
            {/* Basic Plan */}
            <div className="bg-gradient-to-r from-[#EEF2FF] to-[#FFFFFF] shadow-lg rounded-xl p-6 h-full">
              <div className="flex flex-col items-start gap-1">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Basic</h3>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">Free</p>
              </div>
              <ul className="mt-4 space-y-3 text-gray-700 text-left">
                <li className="flex items-center gap-2"><img src={tick} alt="tick" /> Basic symptom checker</li>
                <li className="flex items-center gap-2"><img src={tick} alt="tick" /> General health advice</li>
                <li className="flex items-center gap-2"><img src={tick} alt="tick" /> Limited consultations</li>
              </ul>
              <button className="mt-6 w-full bg-[#6B7280] text-gray-100 py-2.5 rounded-lg cursor-not-allowed">
                Current Plan
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-blue-100 border-2 border-blue-500 shadow-lg rounded-xl p-6 relative h-full">
              <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                Popular
              </span>
              <div className="flex flex-col items-start gap-1">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-700">Professional</h3>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                  ¥99 <span className="text-base sm:text-lg font-medium">/month</span>
                </p>
              </div>
              <ul className="mt-4 space-y-3 text-gray-700 text-left">
                <li className="flex items-center gap-2"><img src={tick} alt="tick" /> Advanced symptom analysis</li>
                <li className="flex items-center gap-2"><img src={tick} alt="tick" /> Priority response</li>
                <li className="flex items-center gap-2"><img src={tick} alt="tick" /> Unlimited consultations</li>
                <li className="flex items-center gap-2"><img src={tick} alt="tick" /> Health tracking</li>
              </ul>
              <button className="mt-6 w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700">
                Choose Plan
              </button>
            </div>

            {/* Family Plan */}
            <div className="bg-purple-100 shadow-lg rounded-xl p-6 h-full">
              <div className="flex flex-col items-start gap-1">
                <h3 className="text-lg sm:text-xl font-semibold text-purple-700 mb-2">Family</h3>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                  ¥199 <span className="text-base sm:text-lg font-medium">/month</span>
                </p>
              </div>
              <ul className="mt-4 space-y-3 text-gray-700 text-left">
                <li className="flex items-center gap-2"><img src={tick} alt="tick" /> Up to 5 family members</li>
                <li className="flex items-center gap-2"><img src={tick} alt="tick" /> Family health tracking</li>
                <li className="flex items-center gap-2"><img src={tick} alt="tick" /> Premium features</li>
                <li className="flex items-center gap-2"><img src={tick} alt="tick" /> 24/7 priority support</li>
              </ul>
              <button className="mt-6 w-full bg-purple-600 text-white py-2.5 rounded-lg hover:bg-purple-700">
                Choose Plan
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gray-50 shadow-lg rounded-xl p-6 h-full">
              <div className="flex flex-col items-start gap-1">
                <h3 className="text-lg sm:text-xl font-semibold text-[#4F46E5] mb-2">Enterprise</h3>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">Custom Pricing</p>
              </div>
              <ul className="mt-4 space-y-3 text-gray-700 text-left">
                <li className="flex items-center gap-2"><img src={tick} alt="tick" /> Custom integration</li>
                <li className="flex items-center gap-2"><img src={tick} alt="tick" /> Dedicated support</li>
                <li className="flex items-center gap-2"><img src={tick} alt="tick" /> Employee healthcare</li>
                <li className="flex items-center gap-2"><img src={tick} alt="tick" /> Analytics dashboard</li>
              </ul>
              <button className="mt-6 w-full bg-indigo-600 text-white py-2.5 rounded-lg hover:bg-indigo-700">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PremiumPlans;
