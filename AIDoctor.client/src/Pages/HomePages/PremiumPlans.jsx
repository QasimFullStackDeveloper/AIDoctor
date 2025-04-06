import React from "react";
import tick from "../../assets/Tic.svg";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

const PremiumPlans = () => {
  return (
    <>
      <Navbar colour={"bg-gray-100"} />
      <div className="bg-gray-100 mb-8 py-16 px-4 md:px-12 lg:px-24 xl:px-48 flex items-center justify-center" style={{ height: '73vh' }}>
        <div className="text-center w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Price Features
          </h2>
          <p className="text-gray-600 text-center mt-2 mb-10 md:text-lg xl:text-xl">
            Unlock these exclusive features with our premium plans
          </p>

          {/* Grid for Plans */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12">
            {/* Free Plan */}
            <div className="bg-white h-[25rem] shadow-lg rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900">Basic</h3>
              <p className="text-3xl font-bold text-gray-900">Free</p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center justify-center gap-2">
                  <img src={tick} alt="tick" /> Basic symptom checker
                </li>
                <li className="flex items-center justify-center gap-2">
                  <img src={tick} alt="tick" /> General health advice
                </li>
                <li className="flex items-center justify-center gap-2">
                  <img src={tick} alt="tick" /> Limited consultations
                </li>
              </ul>
              <button className="mt-6 w-full bg-gray-300 text-gray-700 py-2 rounded-lg cursor-not-allowed">
                Current Plan
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-blue-100 shadow-lg rounded-xl p-8 text-center border-2 border-blue-500 relative">
              <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                Popular
              </span>
              <h3 className="text-xl font-semibold text-blue-700">Professional</h3>
              <p className="text-3xl font-bold text-gray-900">
                ¥99<span className="text-lg">/month</span>
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center justify-center gap-2">
                  <img src={tick} alt="tick" /> Advanced symptom analysis
                </li>
                <li className="flex items-center justify-center gap-2">
                  <img src={tick} alt="tick" /> Priority response
                </li>
                <li className="flex items-center justify-center gap-2">
                  <img src={tick} alt="tick" /> Unlimited consultations
                </li>
                <li className="flex items-center justify-center gap-2">
                  <img src={tick} alt="tick" /> Health tracking
                </li>
              </ul>
              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Choose Plan
              </button>
            </div>

            {/* Family Plan */}
            <div className="bg-purple-100 shadow-lg rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-purple-700">Family</h3>
              <p className="text-3xl font-bold text-gray-900">
                ¥199<span className="text-lg">/month</span>
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center justify-center gap-2">
                  <img src={tick} alt="tick" /> Up to 5 family members
                </li>
                <li className="flex items-center justify-center gap-2">
                  <img src={tick} alt="tick" /> Family health tracking
                </li>
                <li className="flex items-center justify-center gap-2">
                  <img src={tick} alt="tick" /> Premium features
                </li>
                <li className="flex items-center justify-center gap-2">
                  <img src={tick} alt="tick" /> 24/7 priority support
                </li>
              </ul>
              <button className="mt-6 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
                Choose Plan
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gray-50 shadow-lg rounded-xl p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900">Enterprise</h3>
              <p className="text-3xl font-bold text-gray-900">Custom Pricing</p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center justify-center gap-2">
                  <img src={tick} alt="tick" /> Custom integration
                </li>
                <li className="flex items-center justify-center gap-2">
                  <img src={tick} alt="tick" /> Dedicated support
                </li>
                <li className="flex items-center justify-center gap-2">
                  <img src={tick} alt="tick" /> Employee healthcare
                </li>
                <li className="flex items-center justify-center gap-2">
                  <img src={tick} alt="tick" /> Analytics dashboard
                </li>
              </ul>
              <button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
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
