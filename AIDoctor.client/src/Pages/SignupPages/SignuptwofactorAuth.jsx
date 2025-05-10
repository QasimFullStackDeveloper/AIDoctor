import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import tick from "../../assets/anotherTick.svg";
import authIcon from "../../assets/authenticateIcon.png";
import documentIcon from "../../assets/document.svg";
import questionMark from "../../assets/questionMark.svg";
import sendIcon from "../../assets/shield.svg"; 
import Logo from "../../Components/Logo";

const SignupTwoFactorAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const initialMethod = location.state?.method || "email"; 
  const [selectedMethod, setSelectedMethod] = useState(initialMethod);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState(Array(6).fill(""));
  const [countdown, setCountdown] = useState(30);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [sentOtp, setSentOtp] = useState("");

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

  const sendOtpToEmail = async () => {
    if (!email) return alert("Please enter your email first.");
    try {
      const response = await fetch("http://localhost:7282/Api/Auth/SendOtp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });
      const result = await response.json();
      if (result?.otp) {
        setSentOtp(result.otp);
        alert("OTP sent to your email.");
        setCountdown(30);
        setResendDisabled(true);
      } else {
        alert("Failed to send OTP. Try again.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const handleVerify = () => {
    const enteredOtp = code.join("");
    if (selectedMethod === "email") {
      if (!enteredOtp) return alert("Enter the OTP.");
      if (enteredOtp !== sentOtp) return alert("Incorrect OTP.");
      navigate("/index/signup/2fa-success");
    } else {
      navigate("/index/signup/step-2");
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-white p-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-[440px] min-h-[600px] text-center flex flex-col justify-between">
        <div className="mb-4 flex justify-center">
          <div className="h-10 w-10">
            <Logo />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-2">Two-Factor Authentication</h2>
        <p className="text-sm font-medium text-gray-700 mb-4">
          Choose your preferred method to receive the code
        </p>

        <div className="bg-gray-100 p-3 rounded-lg mb-3 flex items-center justify-between opacity-100">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="authMethod"
              value="email"
              checked={selectedMethod === "email"}
              onChange={() => {}}
              disabled
              className="accent-blue-600"
            />
            <p className="font-medium text-sm">Email Authentication</p>
          </label>
          <img src={documentIcon} alt="Email Icon" className="w-5 h-5" />
        </div>

        <div className="bg-gray-100 p-3 rounded-lg mb-3 flex items-center justify-between opacity-100">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="authMethod"
              value="authenticator"
              checked={selectedMethod === "authenticator"}
              onChange={() => {}}
              disabled
              className="accent-blue-600"
            />
            <p className="font-medium text-sm">Authenticator App</p>
          </label>
          <img src={authIcon} alt="Auth Icon" className="w-5 h-5" />
        </div>

        {selectedMethod === "email" && (
          <>
            {/* Email Input with Send Icon */}
            <div className="flex items-center border border-gray-300 rounded-md p-2 mt-2 relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 outline-none text-sm bg-transparent pr-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="absolute right-2"
                onClick={sendOtpToEmail}
                title="Send OTP"
              >
                <img src={sendIcon} alt="Send OTP" className="w-5 h-5" />
              </button>
            </div>

            <h3 className="text-sm font-semibold text-gray-700 mt-4 mb-2 text-left w-full">
              Verification Code
            </h3>

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

            <div className="flex justify-between text-sm text-gray-600 mt-1">
              <span>
                Resend code in 00:{countdown < 10 ? `0${countdown}` : countdown}
              </span>
              <button
                className={`font-semibold ${
                  resendDisabled
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-blue-600 hover:underline"
                }`}
                onClick={handleResendCode}
                disabled={resendDisabled}
              >
                Resend Code
              </button>
            </div>
          </>
        )}

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          className="w-full mt-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition transform hover:scale-105 flex items-center justify-center gap-2"
        >
          <img src={tick} alt="Verify" className="w-4 h-4" />
          Verify
        </button>

        <div className="flex flex-col items-center mt-4 space-y-2">
          <Link
            to="/index/login"
            className="text-blue-500 hover:underline font-semibold hover:text-blue-700 text-[14px] transition-all duration-300 mb-2"
          >
            Back to Login
          </Link>
          <Link
            to="#"
            className="text-blue-500 hover:underline hover:text-blue-700 flex font-semibold items-center text-[14px] gap-1 transition-all duration-300 mt-2"
          >
            <img src={questionMark} alt="Help" className="w-4 h-4" />
            Need help?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupTwoFactorAuth;
