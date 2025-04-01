import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo";

const SignupTwoFactorAuth = () => {
  const [selectedMethod, setSelectedMethod] = useState("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState(Array(6).fill(""));
  const [countdown, setCountdown] = useState(30);
  const [resendDisabled, setResendDisabled] = useState(true);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setResendDisabled(false);
    }
  }, [countdown]);

  const handleCodeChange = (index, value) => {
    if (/^[0-9]?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 5) {
        document.getElementById(`signup_otp-${index + 1}`).focus();
      }
    }
  };

  const handleResendCode = () => {
    setCountdown(30);
    setResendDisabled(true);
  };

  return (
    <div className="signup_auth-container flex justify-center items-center w-full h-screen bg-blue-100 animate-fadeIn">
      <div className="signup_auth-box bg-white p-6 rounded-lg shadow-lg w-[350px] text-center hover:scale-[1.02] transition-transform">
        <div className="signup_logo mb-4 ml-[120px] animate-fadeIn"><Logo /></div>
        <h2 className="signup_subtext text-lg font-semibold text-gray-700 animate-slideUp">
          Choose your preferred method to receive the code
        </h2>

        {/* Authentication Methods */}
        <div className="signup_auth-method bg-gray-100 p-3 rounded-lg mb-3 animate-fadeIn">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="authMethod"
              value="email"
              checked={selectedMethod === "email"}
              onChange={() => setSelectedMethod("email")}
              className="accent-blue-600"
            />
            📧 <p className="font-medium">Email Authentication</p>
          </label>
        </div>

        <div className="signup_auth-method bg-gray-100 p-3 rounded-lg mb-3 animate-fadeIn">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="authMethod"
              value="authenticator"
              checked={selectedMethod === "authenticator"}
              onChange={() => setSelectedMethod("authenticator")}
              className="accent-blue-600"
            />
            🔑 <p className="font-medium">Authenticator App</p>
          </label>
        </div>

        {/* Email Input */}
        {selectedMethod === "email" && (
          <div className="signup_input-wrapper flex items-center border border-gray-300 rounded-md p-2 mt-4 animate-fadeIn">
            <input
              type="email"
              placeholder="Enter your email"
              className="signup_email-input flex-1 outline-none text-sm bg-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        )}

        {/* OTP Input Fields */}
        <div className="signup_code-container flex justify-between space-x-2 my-3 animate-slideUp">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`signup_otp-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              className="signup_code-input w-10 h-10 text-center text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          ))}
        </div>

        {/* Resend Code Section */}
        <div className="signup_resend-container flex justify-between text-sm text-gray-600 mt-2 animate-fadeIn">
          <span>Resend code in 00:{countdown < 10 ? `0${countdown}` : countdown}</span>
          <button
            className={`signup_resend-link font-semibold ${resendDisabled ? "text-gray-400 cursor-not-allowed" : "text-blue-600 hover:underline"}`}
            onClick={handleResendCode}
            disabled={resendDisabled}
          >
            Resend Code
          </button>
        </div>

        {/* Verify Button */}
        <button className="signup_verify-btn w-full mt-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition transform hover:scale-105 animate-bounceIn">
          Verify
        </button>
      </div>
    </div>
  );
};

export default SignupTwoFactorAuth;