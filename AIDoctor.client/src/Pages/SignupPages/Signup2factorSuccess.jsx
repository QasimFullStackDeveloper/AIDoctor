import React from 'react';
import tickIcon from '../../assets/Tick.svg';
import infoIcon from '../../assets/info.svg';
import Logo from '../../assets/logo';
import { Link } from 'react-router-dom';

export default function Signup2factorSuccess() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-[550px] xl:h-[550px] border-t-4 border-blue-500 flex flex-col justify-between">
        
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
        <p className="text-sm text-gray-700 mb-2">
          Your account is now protected with two-factor authentication.
        </p>
        <p className="text-sm text-gray-700 mb-4">
          You will need to enter a verification code when signing in from a new device.
        </p>

        {/* Setup Instructions Link */}
        <a
          href="#"
          className="text-black font-semibold mt-3 block hover:underline mb-4"
        >
          View setup instructions
        </a>

        {/* Return to Login Button */}
        <Link
          to="/login"
          className="bg-blue-600 text-white py-2 px-5 rounded-md inline-block mt-3 font-medium hover:bg-blue-700 transition-transform transform hover:scale-105 mb-4"
        >
          ← Return to login
        </Link>

        {/* Information Note */}
        <div className="flex items-center bg-blue-100 p-3 rounded-md text-sm text-blue-600">
          <img src={infoIcon} alt="Info Icon" className="w-[18px] mr-2" />
          Save your backup codes in a secure location in case you lose access to your authentication device.
        </div>
      </div>
    </div>
  );
}
