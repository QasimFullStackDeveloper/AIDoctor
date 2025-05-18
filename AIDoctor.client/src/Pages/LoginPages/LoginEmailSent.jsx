import React from "react";
import Logo from "../../Components/Logo";
import info from "../../assets/info.svg";
import tickmark from "../../assets/properTickmark.svg";
import { Link } from "react-router-dom";
import arrow from "../../assets/whiteArrow.svg";

export default function LoginEmailSent() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f9fafb] px-4">
      <div className="flex-grow flex justify-center items-center">
        <div className="w-[350px] bg-white rounded-xl border-t-4 border-blue-600 shadow-lg p-6 sm:p-10 text-center">
          
          {/* Logo */}
          <div className="flex justify-center">
          <div className="mb-4 mt-[-13px] flex w-9 h-9 justify-center">
            <Logo />
          </div>
          </div>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Email Sent Successfully!
          </h2>

          {/* Tick Icon */}
          <div className="w-14 h-14 rounded-full bg-green-100 mx-auto flex items-center justify-center mb-4 shadow-sm">
            <img src={tickmark} alt="Success" className="w-6 h-6" />
          </div>

          {/* Message */}
          <p className="text-xs text-gray-600 mb-2">
            We've sent a password reset link to your email.
          </p>
          <p className="text-[9px] text-gray-500 mb-6">
            Please check your inbox and follow the instructions to reset your password.
          </p>

          {/* Resend */}
          <p className="text-xs text-gray-700 mb-6">
            Didn’t receive the email?
            <br />
            <button
              type="button"
              className="font-bold text-black hover:text-blue-800 text-sm mt-1"
              onClick={() => alert("Resend functionality here")}
            >
              Resend email
            </button>
          </p>

          {/* Back to login button */}
          <Link to="/login">
            <button className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-md shadow transition duration-200 flex justify-center items-center gap-2">
              <img src={arrow} alt="Back Arrow" className="w-4 h-4" />
              Back to login
            </button>
          </Link>

          {/* Info Box */}
          <div className="flex items-start gap-2 bg-blue-50 text-xs text-blue-800 mt-6 px-4 py-3 rounded-md shadow-inner">
            <img src={info} alt="Info" className="w-4 h-4 mt-0.5" />
            <span>
              The password reset link will expire in 30 minutes for security reasons.
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-xs text-gray-400 py-2 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-[10%]">
        <div className="mb-2 sm:mb-0">© 2025 Your Company. All rights reserved.</div>
        <div className="space-x-2">
          <a href="/terms" className="hover:underline">Terms of Service</a>
          <span>|</span>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}
