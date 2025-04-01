import React from 'react';
import Logo from '../../assets/logo';

export default function SignupSuccess() {
  return (
    <div className="whole-container_12 flex items-center justify-center h-screen bg-blue-100 animate-fadeIn">
      <div className="container_12 flex items-center justify-center w-full animate-slideUp">
        <div className="card_12 bg-white p-6 rounded-lg shadow-lg text-center w-80 border-t-4 border-blue-500 animate-bounceIn transition-transform duration-[500ms] transform hover:scale-105 hover:shadow-2xl">
          <div className="logo_12 ml-[105px] text-blue-500 text-lg font-bold uppercase mb-3 animate-fadeIn">
            <Logo />
          </div>
          <h2 className="title_12 text-xl text-gray-900 mb-2 font-semibold animate-slideIn transition-colors duration-[500ms] hover:text-gray-700">
            Email Verified!
          </h2>
          <div className="success-icon_12 flex justify-center my-4 animate-zoomIn">
            <div className="circle_12 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold transition-transform duration-[500ms] transform hover:scale-110 hover:rotate-12">
              ✔
            </div>
          </div>
          <p className="text_12 text-gray-600 text-sm animate-fadeIn transition-colors duration-[500ms] hover:text-gray-800">
            Your email has been successfully verified
          </p>
          <p className="subtext_12 text-gray-600 text-sm mb-4 animate-fadeIn transition-colors duration-[500ms] hover:text-gray-800">
            You can now access all features of your account
          </p>
          <button className="login-btn_12 bg-blue-500 text-white py-2 px-4 rounded-md text-sm font-bold w-full mt-2 transition-transform duration-[500ms] transform hover:scale-105 hover:bg-blue-600 animate-slideUp">
            ← Back to login
          </button>
          <div className="confirmation-msg_12 bg-green-100 text-green-700 rounded-md text-xs p-3 flex items-center mt-5 animate-fadeIn transition-shadow duration-[500ms] hover:shadow-md hover:ring-2 hover:ring-green-400">
            <span className="icon_12 text-lg mr-2">🛡️</span>
            <p>Your account is now secure and ready to use. You'll receive a confirmation email shortly.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
