import React from 'react';
// import '../Styles/LoginEmailSent.css';
import Logo from '../assets/logo';

export default function LoginEmailSent() {
  return (
    <div className="whole-contaienr_18 flex justify-center items-center h-screen bg-blue-100">
      <div className="container_18 bg-white rounded-lg w-96 border-t-4 border-blue-500 p-6 text-center shadow-lg animate-fadeIn_18">
        <div className="logo_18 mr-[30px]"><Logo/></div>
        <br />
        <div className="message_18 text-lg font-bold mb-2">Email Sent Successfully!</div>
        <div className="success-icon_18 w-11 h-11 bg-green-500 rounded-full flex justify-center items-center mx-auto my-4 animate-bounce_18">
          <span className="text-white text-xl">✔</span>
        </div>
        <p className="info_18 text-sm text-gray-600">
          We've sent a password reset link to your email. Please check your inbox
          and follow the instructions.
        </p>
        <div className="resend-container_18 mt-5 text-sm">
          Didn't receive the email? <br /><br />
          <span className="resend_18 font-bold text-blue-500 cursor-pointer hover:text-blue-900 transition-colors">Resend email</span>
        </div>
        <button className="btn_18 w-full py-2 bg-blue-500 text-white text-sm font-bold rounded-md mt-3 transition hover:bg-blue-900">
          ← Back to login
        </button>
        <div className="security-box_18 bg-blue-100 p-3 text-xs text-gray-700 rounded-md mt-3 animate-fadeIn_18">
          🔒 The password reset link will expire in 30 minutes for security reasons.
        </div>
      </div>
    </div>
  );
}
