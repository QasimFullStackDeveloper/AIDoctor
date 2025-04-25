import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Components/Logo";

export default function SignupPage1() {
  const [selectedAuthMethod, setSelectedAuthMethod] = useState("");
  const navigate = useNavigate();

  const handleRadioChange = (e) => {
    setSelectedAuthMethod(e.target.id);
  };

  const handleContinueClick = () => {
    if (selectedAuthMethod === "email") {
      navigate("/index/signup/two-factor");
    } else if (selectedAuthMethod === "auth-app") {
      navigate("/index/signup/step-2");
    }
  };

  return (
    <div className="min-h-screen bg-white opacity-100  flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-[620px] bg-[rgba(255,255,255,0.8)] opacity-100 rounded-lg p-6 sm:p-8 md:p-10  ">

        {/* Logo */}
        <div className="mb-4 flex justify-center">
          <div className="h-10 w-10">
            <Logo />
          </div>
        </div>

        {/* Header */}
        <h1 className="text-2xl font-bold text-center text-gray-900 mt-2 ">
          Two-Factor Authentication
        </h1>
        <p className="text-sm text-center text-gray-600 mb-5 ">
          Choose your preferred method to receive the code
        </p>

        {/* Stepper with Text Inline & Connected Lines */}
        <div
          className="flex items-center justify-between w-full overflow-x-auto mb-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          WebKit scrollbar hide
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>

          {/* Step 1 */}
          <div className="flex items-center flex-shrink-0">
            <div className="w-7 h-7 flex items-center justify-center rounded-full border-2 text-xs font-bold text-white bg-blue-500 border-blue-500">
              1
            </div>
            <span className="ml-2 text-xs text-gray-700 font-medium whitespace-nowrap">
              Choose
            </span>
          </div>

          {/* Line */}
          <div className="flex-1 h-0.5 bg-gray-300 mx-2" />

          {/* Step 2 */}
          <div className="flex items-center flex-shrink-0">
            <div className="w-7 h-7 flex items-center justify-center rounded-full border-2 text-xs font-bold text-gray-600 border-gray-300 hover:bg-blue-500 hover:text-white transition">
              2
            </div>
            <span className="ml-2 text-xs text-gray-700 font-medium whitespace-nowrap">
              Setup
            </span>
          </div>

          {/* Line */}
          <div className="flex-1 h-0.5 bg-gray-300 mx-2" />

          {/* Step 3 */}
          <div className="flex items-center flex-shrink-0">
            <div className="w-7 h-7 flex items-center justify-center rounded-full border-2 text-xs font-bold text-gray-600 border-gray-300 hover:bg-blue-500 hover:text-white transition">
              3
            </div>
            <span className="ml-2 text-xs text-gray-700 font-medium whitespace-nowrap">
              Verify
            </span>
          </div>
        </div>

        {/* Auth Options */}
        <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-blue-500 animate-fadeInScale transition-transform duration-500 hover:scale-105 hover:shadow-md">
          <h3 className="text-md font-semibold text-gray-900 mb-4">
            Select Authentication Method
          </h3>

          <div
            className="flex items-center p-4 border border-gray-300 rounded-lg mb-3 cursor-pointer transition hover:border-blue-500 hover:scale-105 hover:shadow-md"
            onClick={() => setSelectedAuthMethod("email")}
          >
            <input
              type="radio"
              id="email"
              name="auth-method"
              className="mr-3"
              checked={selectedAuthMethod === "email"}
              onChange={handleRadioChange}
            />
            <label htmlFor="email" className="flex flex-col text-sm">
              <strong className="text-sm  text-gray-900">
                Email Authentication
              </strong>
              <span className="text-xs text-gray-600">
                Receive a code via your registered email
              </span>
            </label>
          </div>

          <div
            className="flex items-center p-4 border border-gray-300 rounded-lg mb-3 cursor-pointer transition hover:border-blue-500 hover:scale-105 hover:shadow-md"
            onClick={() => setSelectedAuthMethod("auth-app")}
          >
            <input
              type="radio"
              id="auth-app"
              name="auth-method"
              className="mr-3"
              checked={selectedAuthMethod === "auth-app"}
              onChange={handleRadioChange}
            />
            <label htmlFor="auth-app" className="flex flex-col text-sm">
              <strong className="text-sm text-gray-900">
                Authenticator App
              </strong>
              <span className="text-xs text-gray-600">
                Use an app like Google Authenticator or Authy
              </span>
            </label>
          </div>

          {/* Continue Button */}
          <button
            onClick={handleContinueClick}
            disabled={!selectedAuthMethod}
            className={`w-full py-3 mt-4 font-bold rounded-lg transition-all duration-300 ${
              selectedAuthMethod
                ? "bg-blue-500 text-white hover:bg-blue-600 hover:shadow-md hover:scale-105"
                : "bg-blue-300 text-white cursor-not-allowed opacity-50"
            }`}
          >
            Continue
          </button>

          {/* Skip Option */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600 mb-3">
              Don’t want to enable 2FA now? You can skip and set it up later.
            </p>
            <button
              onClick={() => navigate("/index")}
              className="px-3 py-1 border border-blue-500 text-blue-500 rounded-md font-medium hover:bg-blue-50 transition duration-300"
            >
              Skip for now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
