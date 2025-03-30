import React, { useState,useEffect } from "react";
import "../../Styles/SignupTwoFactorAuth.css";
import Logo from "../../assets/logo";

const SignupTwoFactorAuth = () => {
    const [selectedMethod, setSelectedMethod] = useState("email");
    const [email, setEmail] = useState("");
    const [code, setCode] = useState(["", "", "", "", "", ""]);
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
      <div className="signup_auth-container">
        <div className="signup_auth-box">
          <div className="signup_logo"><Logo /></div>
          <div className="signup_subtext">
            Choose your preferred method to receive the code
          </div>
  
          <div className="signup_auth-method">
            <label>
              <input
                type="radio"
                name="authMethod"
                value="email"
                checked={selectedMethod === "email"}
                onChange={() => setSelectedMethod("email")}
              />
              <span className="signup_icon-space">📧</span><p> Email Authentication</p>
            </label>
            <div className="signup_small-text">
              Receive a code at your registered email
            </div>
          </div>
  
          <div className="signup_auth-method">
            <label>
              <input
                type="radio"
                name="authMethod"
                value="authenticator"
                checked={selectedMethod === "authenticator"}
                onChange={() => setSelectedMethod("authenticator")}
              />
              <span className="signup_icon-space">🔑</span> <p>Authenticator App</p>
            </label>
            <div className="signup_small-text">
              Enter the code from your preferred authenticator app
            </div>
          </div>
  
          {selectedMethod === "email" && (
            <div className="signup_input-wrapper">
              <span className="signup_icon-space">
                <img src="../../public/SVG.svg" alt="Email Icon" />
              </span>
              <input
                type="email"
                placeholder="Enter your email"
                className="signup_email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          )}
  
          <div className="signup_code-container">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`signup_otp-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleCodeChange(index, e.target.value)}
              />
            ))}
          </div>
  
          <div className="signup_resend-container">
            <span>Resend code in 00:{countdown < 10 ? `0${countdown}` : countdown}</span>
            <button
              className="signup_resend-link"
              onClick={handleResendCode}
              disabled={resendDisabled}
              style={{
                cursor: resendDisabled ? "not-allowed" : "pointer",
                color: resendDisabled ? "gray" : "#007bff",
              }}
            >
              Resend Code
            </button>
          </div>
  
          <button className="signup_verify-btn">Verify</button>
  
          <div className="signup_footer-links">
            <a href="#">Back to Login</a>
            <br /><br />
            <a href="#">Need help?</a>
          </div>
        </div>
      </div>
    );
  };
  
  export default SignupTwoFactorAuth;
