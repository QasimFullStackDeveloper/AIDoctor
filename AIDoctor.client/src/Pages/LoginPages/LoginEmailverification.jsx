import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Components/Logo";
import emailIcon from "../../assets/document.svg";
import DocIcon from "../../assets/whiteDoc.svg"; 
import infoIcon from "../../assets/info.svg"; 

export default function EmailVerification() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F9FAFB] px-4">
      <div className="w-full max-w-[400px] bg-white rounded-lg border-t-4 border-blue-600 shadow-md px-8 py-10 text-center">
        
        {/* Logo */}
        <div className="flex justify-center mb-3">
          <div className="h-11 w-11"> 
            <Logo />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-4">Check Your Email</h2>

        {/* Email Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#DBEAFE] rounded-full p-4">
            <img src={emailIcon} alt="Email Icon" className="w-10 h-10" />
          </div>
        </div>

        {/* Text */}
        <p className="text-gray-600 text-sm mb-6">
          We've sent a verification link to your email <br />
          Please check your inbox and click on the verification link to verify your email address
        </p>

        {/* Button */}
        <Link to="/open-email" className="block mb-6">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition flex items-center justify-center">
            {/* DocIcon aligned with the text */}
            <img src={DocIcon} alt="Open Email App" className="w-5 h-5 mr-2" />
            Open Email App
          </button>
        </Link>

        {/* Info Box */}
        <div className="bg-gray-100 p-3 rounded-lg flex items-start text-gray-600 text-sm">
          <img src={infoIcon} alt="Info" className="w-5 h-5 mr-2 mt-0.5" />
          <span>
            The verification link will expire in 24 hours for security reasons. If you don’t see the email, please check your spam folder.
          </span>
        </div>
      </div>
    </div>
  );
}
