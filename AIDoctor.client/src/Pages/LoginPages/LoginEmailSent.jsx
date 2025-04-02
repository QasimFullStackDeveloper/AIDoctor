import React from "react";
import Logo from "../../assets/logo";
import { Link } from "react-router-dom";

export default function LoginEmailSent() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br bg-blue-100  animate-fadeIn transition-all duration-500">
      <div className="max-w-[330px] bg-white rounded-lg w-96 border-t-4 border-blue-600 p-6 text-center shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        
        {/* Logo */}
        <div className="mb-3 flex justify-center">
          <Logo />
        </div>

        {/* Success Message */}
        <h2 className="text-xl font-bold text-gray-700 transition-opacity duration-300">
          Email Sent Successfully!
        </h2>

        {/* Success Icon with Bounce */}
        <div className="w-12 h-12 bg-green-500 rounded-full flex justify-center items-center mx-auto my-4 animate-bounce shadow-lg transition-transform duration-500">
          <span className="text-white text-2xl">✔</span>
        </div>

        {/* Info Message */}
        <p className="text-sm text-gray-600 leading-relaxed transition-opacity duration-300">
          We've sent a password reset link to your email. <br />
          Please check your inbox and follow the instructions.
        </p>

        {/* Resend Email */}
        <div className="mt-4 text-sm">
          Didn't receive the email? 
          <br />
          <span className="font-bold text-blue-500 cursor-pointer hover:text-blue-900 transition-colors duration-300 underline">
            Resend email
          </span>
        </div>

        {/* Back to Login Button with Hover Scale */}
        <Link to="/login">
        <button className="w-full py-2 bg-blue-500 text-white text-sm font-bold rounded-md mt-4 transition-transform duration-300 hover:bg-blue-700 hover:scale-105 shadow-md">
          ← Back to login
        </button>
        </Link>
        {/* Security Notice */}
        <div className="bg-blue-100 p-3 text-xs text-gray-700 rounded-md mt-4 shadow-inner transition-opacity duration-300">
          🔒 The password reset link will expire in 30 minutes for security reasons.
        </div>
      </div>
    </div>
  );
}
