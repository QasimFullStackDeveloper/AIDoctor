import React, { useState } from "react";
import shieldIcon from "../../assets/Shield.svg";
import questionMark from "../../assets/questionMark.svg";
import docIcon from "../../assets/messageICon.svg";
import arrow from "../../assets/leftArrow.svg";
import rocket from "../../assets/exploreIcon.svg";
import Logo from "../../Components/Logo";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForgetPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSendResetLink = async () => {
    if (!email) return;

    try {
      const response = await fetch("http://localhost:7282/Api/Auth/ForgotPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      const result = await response.json();

      if (response.status === 404) {
        alert("Please sign up first.");
      } else if (response.ok) {
        navigate("/login/email-sent");
      } else {
        alert(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error sending reset link:", error);
      alert("Failed to send reset link. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 px-4">
      <div className="flex-grow flex justify-center items-center">
        <div className="bg-white px-6 pt-4 pb-6 rounded-lg shadow-lg md:max-w-[380px] 2xl:max-w-[450px] min-h-[500px] border-t-4 border-blue-500 transition duration-300 hover:shadow-2xl hover:scale-[1.02] flex flex-col justify-between w-full">
          
          {/* Top Section */}
          <div>
            <div className="flex justify-center">
              <div className="mb-5 w-12 h-12">
                <Logo />
              </div>
            </div>
            <h2 className="text-2xl font-bold font-roboto text-gray-900 md:text-[30px] text-center mb-3">
              Forgot your password?
            </h2>
            <p className="text-sm text-gray-500 text-center mb-6">
              No worries! Enter your email to reset it.
            </p>
          </div>

          {/* Middle Section */}
          <div className="space-y-8 mt-2">
            {/* Email input */}
            <div className="relative flex items-center border border-gray-300 rounded-lg bg-white px-3 py-[0.4rem] focus-within:ring-2 focus-within:ring-blue-500">
              <img
                src={docIcon}
                alt="Email icon"
                className="w-4 h-4 opacity-70 mr-2"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white focus:outline-none text-gray-700 placeholder-gray-400 text-sm"
                placeholder="Enter your email address"
              />
            </div>

            {/* Links */}
            <div className="flex justify-between items-center text-xs font-bold mt-1 mb-9">
              <Link
                to="/login"
                className="flex items-center gap-1 hover:underline hover:text-blue-900"
              >
                <img src={arrow} alt="Back" className="w-3.5 h-3.5 opacity-75" />
                <p>Back to login</p>
              </Link>
              <Link
                to="#"
                className="flex items-center gap-1 hover:underline hover:text-blue-900"
              >
                Need help
                <img
                  src={questionMark}
                  alt="Help"
                  className="w-3.5 h-3.5 opacity-75"
                />
              </Link>
            </div>

            {/* Button */}
            <button
              className={`bg-[#2563EB] text-white py-2.5 rounded-lg w-full text-sm transition duration-300 flex items-center justify-center gap-2 shadow-md mt-1.5 ${
                email ? 'hover:bg-blue-700 hover:scale-105' : 'opacity-50 cursor-not-allowed'
              }`}
              onClick={handleSendResetLink}
              disabled={!email}
            >
              Send Reset Link
              <img src={rocket} alt="Send" className="w-4 h-4 animate-bounce" />
            </button>

            {/* Divider with "Security Notice" */}
            <div className="flex items-center my-4 ">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-3 text-xs text-gray-500 font-medium whitespace-nowrap">
                Security Notice
              </span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            {/* Security Box */}
            <div className="bg-blue-50 p-2.5 rounded-lg text-xs text-blue-700 flex items-start shadow-sm">
              <img
                src={shieldIcon}
                alt="Shield"
                className="w-4 h-4 mr-2 opacity-75 mt-0.5"
              />
              <span>
                For your security, a password reset link will be sent to your
                email address. The link expires in 20 minutes.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-2 text-xs text-gray-400 w-full flex justify-between items-center px-[10%]">
        <div>© 2025 Your Company. All rights reserved.</div>
        <div className="space-x-2">
          <a href="/terms" className="hover:underline">Terms of Service</a>
          <span>|</span>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}
