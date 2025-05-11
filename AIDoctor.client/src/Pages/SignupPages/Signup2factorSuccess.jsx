import React from 'react';
import tickIcon from '../../assets/Tick.svg';
import infoIcon from '../../assets/info.svg';
import { Link } from 'react-router-dom';
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
    <div className="flex justify-center items-center min-h-screen bg-blue-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-[360px]  border-t-4 border-blue-500 flex flex-col justify-between min-h-[520px] xl:min-h-[500px] 2xl:min-h-[480px]">

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
        <p className="text-sm text-gray-500 opacity-100 mb-1 font-semibold">
          Your account is now protected with two-factor authentication.
        </p>
        <p className="text-sm text-gray-700 mb-4">
          You will need to enter a verification code when signing in from a new device.
        </p>

        {/* Setup Message + Instructions Link */}
        <p className="text-sm text-gray-500 opacity-100 mb-1 font-semibold">
          Need to set up your authenticator app?
        </p>
        <Link
          to="#"
          className="text-sm font-semibold -700 hover:underline mb-7"
        >
          View setup instructions
        </Link>

        {/* Return to Login Button */}
        <Link
          to="/login"
          className="bg-blue-600 text-white py-2 px-5 rounded-md inline-block font-medium hover:bg-blue-700 transition-transform transform hover:scale-105 mb-4"
        >
          ← Return to login
        </Link>

        {/* Information Note */}
        <div className="flex items-center bg-blue-100 p-3 rounded-md text-sm text-blue-600 mt-2">
          <img src={infoIcon} alt="Info Icon" className="w-[18px] mr-2" />
          Save your backup codes in a secure location in case you lose access to your authentication device.
        </div>
      </div>
    </div>
  );
}
