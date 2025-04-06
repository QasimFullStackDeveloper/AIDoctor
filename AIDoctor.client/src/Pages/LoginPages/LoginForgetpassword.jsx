import React from "react";
import shieldIcon from "../../assets/shield.svg";
import questionMark from "../../assets/questionMark.svg";
import Logo from "../../Components/Logo";
import { Link } from "react-router-dom";

export default function LoginForgetPassword() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-gradient-to-br bg-blue-100 px-4">
      <div className="bg-white px-6 py-6 rounded-lg shadow-lg w-full max-w-[330px] sm:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] min-h-[550px] border-t-4 border-blue-500 transition duration-300 hover:shadow-2xl hover:scale-[1.02] flex flex-col justify-between">

        {/* Top - Logo and Heading */}
        <div>
          <div className="flex justify-center mb-4">
            <Logo className="w-14 h-14" />
          </div>

          <h2 className="text-xl font-bold text-gray-900 text-center mb-1">
            Forgot your password?
          </h2>
          <p className="text-sm text-gray-600 text-center mb-5">
            No worries! Enter your email to reset it.
          </p>
        </div>

        {/* Middle - Input and Actions */}
        <div className="space-y-4">
          <div className="relative flex items-center border border-gray-300 rounded-lg bg-gray-100 p-2 focus-within:ring-2 focus-within:ring-blue-500">
            <img
              src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
              alt="Email icon"
              className="w-5 h-5 opacity-75 mr-2"
            />
            <input
              type="email"
              className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400 text-sm"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex justify-between text-sm text-gray-700 font-medium">
            <Link
              to="/login"
              className="hover:underline text-blue-700 transition-all hover:text-blue-900"
            >
              ← Back to login
            </Link>
            <a
              href="#"
              className="hover:underline transition-all hover:text-blue-900 flex items-center"
            >
              Need help?
              <img src={questionMark} alt="Help" className="w-4 h-4 ml-1 opacity-75" />
            </a>
          </div>

          <button className="bg-blue-600 text-white py-3 rounded-lg w-full font-semibold text-sm transition duration-300 hover:bg-blue-700 hover:scale-105 flex items-center justify-center gap-2 shadow-md">
            Send Reset Link <span className="text-sm animate-bounce">🚀</span>
          </button>
        </div>

        {/* Bottom - Security Info */}
        <div className="mt-6">
          <hr className="border-t border-gray-300 my-3" />
          <div className="text-center text-xs text-gray-500 mb-2">
            Security Notice
          </div>
          <div className="bg-blue-100 p-3 rounded-lg text-xs text-blue-700 flex items-start shadow-sm">
            <img src={shieldIcon} alt="Info icon" className="w-4 h-4 mr-2 opacity-75" />
            <span>
              For your security, a password reset link will be sent to your email. The link expires in 30 minutes.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
