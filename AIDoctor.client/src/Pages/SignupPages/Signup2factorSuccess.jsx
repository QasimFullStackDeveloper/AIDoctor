import React from 'react';
import tickIcon from '../../../public/Tick.svg';
import infoIcon from '../../../public/info.svg';
import Logo from '../../assets/logo';
import { Link } from 'react-router-dom';
export default function Signup2factorSuccess() {
  return (
    <div className="whole-container_15 flex justify-center items-center min-h-screen bg-blue-100 animate-fadeIn">
      <div className="card_15 bg-white p-6 rounded-lg shadow-lg text-center w-[350px] border-t-4 border-blue-500 animate-slideUp scale-100 hover:scale-[1.02] transition-transform duration-300">
        {/* Logo */}
        <div className="logo_15 ml-[125px] mb-2 animate-fadeIn">
          <Logo />
        </div>

        {/* Title */}
        <div className="title_15 text-xl font-semibold text-gray-900 animate-fadeIn">
          Two-Factor Authentication Enabled!
        </div>

        {/* Success Icon */}
        <div className="icon_15 flex justify-center items-center bg-green-100 w-[60px] h-[60px] rounded-full mx-auto mt-3 animate-bounceIn">
          <img src={tickIcon} alt="Checkmark" className="w-[30px]" />
        </div>

        {/* Description */}
        <p className="description_15 text-sm text-gray-700 mt-3 leading-relaxed animate-fadeIn">
          Your account is now protected with two-factor authentication.
        </p>
        <p className="description_15 text-sm text-gray-700 mt-1 leading-relaxed animate-fadeIn">
          You will need to enter a verification code when signing in from a new device.
        </p>

        {/* Setup Instructions Link */}
        <a href="#" className="link_15 text-black font-semibold mt-3 block hover:underline animate-fadeIn">
          View setup instructions
        </a>

        {/* Return to Login Button */}
        <Link to="/login" className="button_15 bg-blue-600 text-white py-2 px-5 rounded-md inline-block mt-3 font-medium hover:bg-blue-700 transition-transform transform hover:scale-105 animate-fadeIn">
          ← Return to login
        </Link>

        {/* Information Note */}
        <div className="note_15 flex items-center bg-blue-100 p-3 rounded-md mt-3 text-sm text-blue-600 animate-fadeIn">
          <img src={infoIcon} alt="Info Icon" className="w-[18px] mr-2" />
          Save your backup codes in a secure location in case you lose access to your authentication device.
        </div>
      </div>
    </div>
  );
}
