import React from 'react';
// import '../Styles/LogintwoFactor.css';

export default function LogintwoFactor() {
  return (
    <div className="whole-container_17 flex justify-center items-center h-screen bg-blue-100">
      <div className="card_17 bg-white p-9 rounded-xl shadow-lg text-center w-[380px]">
        <div className="logo_17 font-bold text-xl text-[#3f51b5] uppercase mb-4">LOGO</div>
        <div className="title_17 text-lg font-semibold text-gray-800 mb-2">Two-Factor Authentication</div>
        <p className="subtitle_17 text-sm text-gray-600 mb-5">
          Choose your preferred method to receive the code
        </p>

        <div className="option_17 flex items-center p-3 border border-[#3f51b5] rounded-lg mb-3 cursor-pointer transition hover:bg-[#eef2ff]">
          <div className="icon_17 bg-[#e8f5e9] w-10 h-10 flex justify-center items-center rounded-full mr-3">
            <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Email Icon" className="w-5" />
          </div>
          <div className="option-text_17 text-left text-sm">
            <strong>Email Verification</strong>
            <br />
            <span>Receive a code at your registered email address</span>
          </div>
        </div>

        <div className="option_17 flex items-center p-3 border border-[#3f51b5] rounded-lg mb-3 cursor-pointer transition hover:bg-[#eef2ff]">
          <div className="icon_17 bg-[#e8f5e9] w-10 h-10 flex justify-center items-center rounded-full mr-3">
            <img src="https://cdn-icons-png.flaticon.com/512/705/705062.png" alt="Authenticator Icon" className="w-5" />
          </div>
          <div className="option-text_17 text-left text-sm">
            <strong>Authenticator App</strong>
            <br />
            <span>Enter the code from your preferred authenticator app</span>
          </div>
        </div>

        <input type="text" className="input_17 w-full p-3 my-3 border border-gray-300 rounded-lg text-center" placeholder="Enter 6-digit code" />
        
        <p className="resend_17 text-xs text-[#3f51b5] cursor-pointer flex justify-between">
          Resend code in 00:30 <span className="cursor-pointer">Resend Code</span>
        </p>
        
        <a href="#" className="button_17 bg-[#3f51b5] text-white py-3 rounded-lg block text-center mt-4 transition hover:bg-[#303f9f]">
          Verify
        </a>
        
        <a href="#" className="button_17 bg-[#3f51b5] text-white py-3 rounded-lg block text-center mt-3">
          Back to Login
        </a>
      </div>
    </div>
  );
}
