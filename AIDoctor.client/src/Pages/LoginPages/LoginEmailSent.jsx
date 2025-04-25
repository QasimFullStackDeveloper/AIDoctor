import React from "react";
import Logo from "../../Components/Logo";
import info from "../../assets/info.svg";
import tickmark from "../../assets/properTickmark.svg";
import { Link } from "react-router-dom";

export default function LoginEmailSent() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f9fafb] px-4">
      <div className="w-[350px] bg-white rounded-xl border-t-4 border-blue-600 shadow-lg p-8 sm:p-10 text-center">
        
        {/* Logo */}
        <div className="mb-4 flex justify-center">
          <Logo />
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          Email Sent Successfully!
        </h2>

        {/* Checkmark */}
        <div className="w-14 h-14 rounded-full bg-green-100 mx-auto flex items-center justify-center mb-4 shadow-sm">
          <img src={tickmark} alt="Success" className="w-6 h-6" />
        </div>

        {/* Message */}
        <p className="text-sm text-gray-600 mb-2">
          We've sent a password reset link to your email.
        </p>
        <p className="text-xs text-gray-500 mb-6">
          Please check your inbox and follow the instructions to reset your password.
        </p>

        {/* Resend */}
        <p className="text-sm text-gray-700 mb-6">
          Didn’t receive the email?
          <br />
          <span className="font-bold  hover:text-blue-800 cursor-pointer ">
            Resend email
          </span>
        </p>

        {/* Back to login */}
        <Link to="/index/login">
          <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-md shadow transition duration-200">
            ← Back to login
          </button>
        </Link>

        {/* Info box */}
        <div className="flex items-start gap-2 bg-blue-50 text-xs text-blue-800 mt-6 px-4 py-3 rounded-md shadow-inner">
          <img src={info} alt="Info" className="w-4 h-4 mt-0.5" />
          <span>The password reset link will expire in 30 minutes for security reasons.</span>
        </div>
      </div>
    </div>
  );
}
