import React, { useState } from "react";
import Logo from "../../assets/Logo.jsx";
import { Link, useNavigate } from "react-router-dom";

export default function SignupPage1() {
  const [selectedAuthMethod, setSelectedAuthMethod] = useState("");
  const navigate = useNavigate();

  const handleRadioChange = (e) => {
    setSelectedAuthMethod(e.target.id);
  };

  const handleContinueClick = () => {
    if (selectedAuthMethod === "email") {
      navigate("/signup/two-factor");
    } else if (selectedAuthMethod === "auth-app") {
      navigate("/signup/step-2");
    }
  };

  return (
    <div className="bg-gradient-to-br overflow-hidden bg-blue-100 flex flex-col items-center justify-center min-h-screen w-full p-4">
      <div className="container_10 text-center w-full sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-[590px] p-10 rounded-lg animate-fadeInScale">
        <div className="logo_10 flex justify-center text-blue-500 font-bold animate-fadeIn">
          <Logo />
        </div>
        <h1 className="text-xl font-bold text-gray-900 mt-2 animate-slideIn">Two-Factor Authentication</h1>
        <p className="subtext_10 text-sm text-gray-600 mb-5 animate-fadeIn">
          Choose your preferred method to receive the code
        </p>

        {/* Steps Navigation */}
        <div className="steps_10 flex items-center justify-center mb-5">
          <div className="step_10 w-10 h-10 flex items-center justify-center rounded-full border-2 text-sm font-bold text-white border-gray-300 transition-all duration-500 transform hover:scale-110 bg-blue-500  hover:bg-blue-700 hover:text-white">
            1
          </div>
          <span className="step-text_10 text-sm text-gray-600 mx-2 font-semibold transition-all duration-500 hover:text-blue-500">
            Choose Method
          </span>
          <div className="line_10 w-12 h-1 bg-gray-300 transition-all duration-500 hover:bg-blue-500"></div>

          <div className="step_10 w-10 h-10 flex items-center justify-center rounded-full border-2 text-sm font-bold text-gray-600 border-gray-300 transition-all duration-500 transform hover:scale-110 hover:bg-blue-500 hover:text-white">
            2
          </div>
          <span className="step-text_10 text-sm text-gray-600 mx-2 transition-all duration-500 hover:text-blue-500">
            Setup
          </span>
          <div className="line_10 w-12 h-1 bg-gray-300 transition-all duration-500 hover:bg-blue-500"></div>

          <div className="step_10 w-10 h-10 flex items-center justify-center rounded-full border-2 text-sm font-bold text-gray-600 border-gray-300 transition-all duration-500 transform hover:scale-110 hover:bg-blue-500 hover:text-white">
            3
          </div>
          <span className="step-text_10 text-sm text-gray-600 mx-2 transition-all duration-500 hover:text-blue-500">
            Verify
          </span>
        </div>

        {/* Authentication Options */}
        <div className="auth-box_10 bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-500 text-left animate-fadeInScale transition-transform duration-500 hover:scale-105 hover:shadow-xl">
          <h3 className="text-lg font-semibold text-gray-900">Select Authentication Method</h3>

          <div className="option_10 flex items-center p-4 border border-gray-300 rounded-lg my-3 cursor-pointer bg-white transition-all duration-500 hover:border-blue-500 hover:scale-105 hover:shadow-md">
            <input
              type="radio"
              id="email"
              name="auth-method"
              className="mr-3"
              onChange={handleRadioChange}
            />
            <label htmlFor="email" className="flex flex-col text-sm">
              <strong className="text-base text-gray-900">Email Authentication</strong>
              <span className="text-xs text-gray-600">Receive a code via your registered email</span>
            </label>
          </div>

          <div className="option_10 flex items-center p-4 border border-gray-300 rounded-lg my-3 cursor-pointer bg-white transition-all duration-500 hover:border-blue-500 hover:scale-105 hover:shadow-md">
            <input
              type="radio"
              id="auth-app"
              name="auth-method"
              className="mr-3"
              onChange={handleRadioChange}
            />
            <label htmlFor="auth-app" className="flex flex-col text-sm">
              <strong className="text-base text-gray-900">Authenticator App</strong>
              <span className="text-xs text-gray-600">Use an authentication app like Google Authenticator or Authy</span>
            </label>
          </div>

          <button
            onClick={handleContinueClick}
            className={`continue-btn_10 w-full py-3 bg-blue-500 text-white font-bold rounded-lg mt-4 transition-all duration-500 transform hover:scale-110 hover:bg-blue-600 hover:shadow-md ${!selectedAuthMethod ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={!selectedAuthMethod}
          >
            Continue
          </button>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="footer_10 text-xs text-gray-600 flex justify-center gap-5 mt-auto w-full p-2 bg-gray-200">
        <span className="footer-link_10 cursor-pointer hover:underline hover:text-blue-500 transition-all duration-500">Help</span>
        <span className="footer-link_10 cursor-pointer hover:underline hover:text-blue-500 transition-all duration-500">Privacy Policy</span>
        <span className="footer-link_10 cursor-pointer hover:underline hover:text-blue-500 transition-all duration-500">Terms of Service</span>
      </footer> */}
    </div>
  );
}
