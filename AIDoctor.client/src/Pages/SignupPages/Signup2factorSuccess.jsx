import React from 'react';
import { Link } from 'react-router-dom';
import tickIcon from '../../assets/Tick.svg';
import infoIcon from '../../assets/info.svg';
import back from "../../assets/whiteArrow.svg";
import Logo from '../../Components/Logo';

export default function Signup2factorSuccess() {
  const verifyEmail = async () => {
    try {
      const response = await fetch("http://localhost:7282/Api/Auth/Account/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify()
      });

      const result = await response.json();
      console.log(" successful:", result);
    } catch (error) {
      console.error(" failed:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white px-4">
      {/* Main Card */}
      <div className="flex flex-1 justify-center items-center py-8">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full md:max-w-[360px] 2xl:max-w-[400px] border-t-4 border-blue-500 flex flex-col justify-between sm:min-h-[520px] 2xl:min-h-[736px]">

          {/* Logo */}
          <div className="mb-4 flex justify-center">
            <Logo />
          </div>

          {/* Title */}
          <div className="text-xl font-semibold text-gray-900 mb-3">
            Two-Factor Authentication Enabled!
          </div>

          {/* Success Icon */}
          <div className="flex justify-center items-center bg-green-100 w-[60px] h-[60px] rounded-full mx-auto mt-3 mb-4">
            <img src={tickIcon} alt="Checkmark" className="w-[30px]" />
          </div>

          {/* Description */}
          <div className="text-sm text-gray-500 font-semibold mb-1">
            Your account is now protected with two-factor authentication.
          </div>
          <div className="text-sm text-gray-700 mb-4">
            You will need to enter a verification code when signing in from a new device.
          </div>

          {/* Setup help */}
          <div className="text-sm text-gray-500 font-semibold mb-1">
            Need to set up your authenticator app?
          </div>
          <Link
            to="#"
            className="text-sm font-semibold text-blue-700 hover:underline mb-7"
          >
            View setup instructions
          </Link>

          {/* Return Button */}
          <Link
            to="/login"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-5 rounded-md font-medium hover:bg-blue-700 transition-transform transform hover:scale-105 mb-4"
          >
            <img src={back} alt="Back" className="w-4 h-4" />
            Return to login
          </Link>

          {/* Info Note */}
          <div className="flex items-center bg-blue-100 p-3 rounded-md text-sm text-blue-600 mt-2">
            <img src={infoIcon} alt="Info Icon" className="w-[18px] mb-10" />
            Save your backup codes in a secure location in case you lose access to your authentication device.
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-xs text-gray-400 py-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-[10%]">
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
