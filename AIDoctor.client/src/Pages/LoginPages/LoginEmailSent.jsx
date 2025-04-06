import React from "react";
import Logo from "../../assets/Logo.jsx";
import { Link } from "react-router-dom";

export default function LoginEmailSent() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-100 to-blue-200">
        <div className="max-w-[330px] sm:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] min-h-[550px] w-full bg-white rounded-lg border-t-4 border-blue-600 px-6 py-8 text-center shadow-xl transition duration-300 hover:shadow-2xl hover:scale-[1.02]">
          
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <Logo />
          </div>

          {/* Success Message */}
          <h2 className="text-2xl font-bold text-gray-700 mb-4 transition-colors duration-300">
            Email Sent Successfully!
          </h2>

          {/* Success Icon */}
          <div className="w-14 h-14 bg-green-500 rounded-full flex justify-center items-center mx-auto mb-6 shadow-lg transition-transform duration-300">
            <span className="text-white text-3xl">✔</span>
          </div>

          {/* Info Message */}
          <p className="text-sm text-gray-600 leading-relaxed mb-6 transition-colors duration-300">
            We've sent a password reset link to your email.<br />
            Please check your inbox and follow the instructions.
          </p>

          {/* Resend Email */}
          <div className="text-sm mb-6">
            Didn't receive the email?
            <br />
            <span className="font-bold text-blue-500 cursor-pointer hover:text-blue-700 underline transition-colors duration-300">
              Resend email
            </span>
          </div>

          {/* Back to Login Button */}
          <Link to="/login">
            <button className="w-full py-2 bg-blue-500 text-white text-sm font-bold rounded-md transition duration-300 hover:bg-blue-700 hover:scale-105 shadow-md">
              ← Back to login
            </button>
          </Link>

          {/* Security Notice */}
          <div className="bg-blue-100 p-4 text-xs text-gray-700 rounded-md mt-6 shadow-inner transition duration-300">
            🔒 The password reset link will expire in 30 minutes for security reasons.
          </div>
        </div>
      </div>
    </>
  );
}
