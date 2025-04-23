import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Components/Logo";

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
    <div className="flex justify-center items-center w-full h-screen bg-blue-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[450px] xl:h-[600px] text-center flex flex-col justify-between custom_form">
        {/* Logo */}
        <div className="mb-4 flex justify-center">
          <Logo />
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          Choose your preferred method to receive the code
        </h2>

        {/* Authentication Methods */}
        <div className="bg-gray-100 p-3 rounded-lg mb-3">
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

        <div className="bg-gray-100 p-3 rounded-lg mb-3">
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
          <div className="flex items-center border border-gray-300 rounded-md p-2 mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 outline-none text-sm bg-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        )}

        {/* OTP Input Fields */}
        <div className="flex justify-between space-x-2 my-3">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`signup_otp-${index}`}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              className="w-12 h-12 text-center text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          ))}
        </div>

        {/* Resend Code Section */}
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>Resend code in 00:{countdown < 10 ? `0${countdown}` : countdown}</span>
          <button
            className={`font-semibold ${resendDisabled ? "text-gray-400 cursor-not-allowed" : "text-blue-600 hover:underline"}`}
            onClick={handleResendCode}
            disabled={resendDisabled}
          >
            Resend Code
          </button>
        </div>

        {/* Verify Button */}
        <Link to="/index/signup/2fa-success">
          <button className="min-w-full mt-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition transform hover:scale-105">
            Verify
          </button>
        </Link>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-3 text-xs">
          <Link to="/index/signup/step-2">
            <button className="text-blue-500 hover:underline hover:text-blue-700 transition-all duration-300">← Back</button>
          </Link>
          <Link to="">
            <button className="text-blue-500 underline hover:text-blue-700 transition-all duration-300">Need help?</button>
          </Link>
        </div>
      </div>
      <style jsx>{`
      @media (min-width: 1400px) and (min-height: 1079px) {
    .custom_form {
      width: 550px;  
      height: 65vh;  
      padding: 40px;  
    }
  }
`}</style>
    </div>
  );
};

export default SignupTwoFactorAuth;
