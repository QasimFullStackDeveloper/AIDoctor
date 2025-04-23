import React from 'react';
import Logo from '../../Components/Logo';
import { Link } from 'react-router-dom';

export default function EmailSuccess() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 px-4">
      <div className="w-full max-w-[330px] sm:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] min-h-[550px] bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-blue-500 transition duration-300 hover:shadow-2xl hover:scale-[1.02] flex flex-col justify-between custom_form">

        {/* Logo */}
        <div className="flex justify-center mb-2">
          <Logo />
        </div>

        {/* Heading */}
        <h2 className="text-xl text-gray-900 font-semibold mb-2 transition-colors duration-300 hover:text-gray-700">
          Email Verified!
        </h2>

        {/* Checkmark */}
        <div className="flex justify-center my-4">
          <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold transition-transform duration-300 hover:scale-110 hover:rotate-12">
            ✔
          </div>
        </div>

        {/* Message */}
        <p className="text-gray-600 text-sm transition-colors duration-300 hover:text-gray-800">
          Your email has been successfully verified
        </p>
        <p className="text-gray-600 text-sm mb-4 transition-colors duration-300 hover:text-gray-800">
          You can now access all features of your account
        </p>

        {/* Button */}
        <Link to="/index/login">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md text-sm font-bold w-full mt-2 transition duration-300 hover:scale-105 hover:bg-blue-600">
            ← Back to login
          </button>
        </Link>

        {/* Success Box */}
        <div className="bg-green-100 text-green-700 rounded-md text-xs p-3 flex items-center mt-5 transition-shadow duration-300 hover:shadow-md hover:ring-2 hover:ring-green-400">
          <span className="text-lg mr-2">🛡️</span>
          <p>Your account is now secure and ready to use. You'll receive a confirmation email shortly.</p>
        </div>
      </div>
      <style jsx>{`
      @media (min-width: 1400px) and (min-height: 1079px) {
    .custom_form {
      width: 450px;  
      height: 55vh;  
      padding: 40px;  
    }
  }
`}</style>
    </div>
  );
}
