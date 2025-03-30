import { useState } from "react";
// import "../Styles/PasswordReset.css";
import Logo from "../assets/logo";

export default function SetNewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const evaluateStrength = (pass) => {
    let strength = 0;
    if (pass.length >= 8) strength++;
    if (/\d/.test(pass)) strength++;
    if (/[A-Z]/.test(pass)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(pass)) strength++;

    if (strength === 0) return { text: "Weak", color: "red", width: "25%" };
    if (strength === 1) return { text: "Weak", color: "red", width: "25%" };
    if (strength === 2) return { text: "Medium", color: "orange", width: "50%" };
    if (strength === 3) return { text: "Strong", color: "blue", width: "75%" };
    return { text: "Very Strong", color: "green", width: "100%" };
  };

  const strengthInfo = evaluateStrength(password);

  return (
    <div className="whole-container_19 flex items-center justify-center min-h-screen bg-blue-100 px-4">
      <div className="container_19 bg-white rounded-lg shadow-lg p-6 w-full max-w-md border-t-4 border-blue-500 animate-fadeIn">
        <div className="logo_19 flex justify-center mb-2">
          <Logo />
        </div>
        <div className="title_19 text-lg font-semibold text-center">Set a New Password</div>
        <div className="success-icon_19 mx-auto my-3 flex items-center justify-center w-12 h-12 bg-green-500 rounded-full text-white text-2xl">
          ✔
        </div>
        <p className="info_19 text-gray-600 text-sm text-center">
          Create a secure new password for your account.
        </p>

        {/* New Password Input */}
        <div className="input-container_19 mt-4">
          <label className="input-label_19 text-xs font-bold block">New Password</label>
          <div className="input-wrapper_19 relative">
            <input
              type={showPassword ? "text" : "password"}
              className="input_19 w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="eye-icon_19 absolute right-3 top-2 cursor-pointer text-gray-500"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "👁️" : "🙈"}
            </span>
          </div>
        </div>

        {/* Confirm Password Input */}
        <div className="input-container_19 mt-3">
          <label className="input-label_19 text-xs font-bold block">Confirm Password</label>
          <div className="input-wrapper_19 relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="input_19 w-full p-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span
              className="eye-icon_19 absolute right-3 top-2 cursor-pointer text-gray-500"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? "👁️" : "🙈"}
            </span>
          </div>
        </div>

        {/* Password Strength Indicator */}
        {password.length > 0 && (
          <>
            <div className="password-strength_19 mt-3 flex items-center justify-between text-xs">
              <div
                className="strength-bar_19 h-1 rounded bg-gray-300"
                style={{ width: strengthInfo.width, backgroundColor: strengthInfo.color }}
              ></div>
              <span className="strength-text_19 font-semibold" style={{ color: strengthInfo.color }}>
                {strengthInfo.text}
              </span>
            </div>

            <div className="strength-criteria_19 text-xs text-gray-600 mt-2">
              <p>{password.length >= 8 ? "✔" : "✖"} At least 8 characters</p>
              <p>{/\d/.test(password) ? "✔" : "✖"} Contains numbers</p>
              <p>{/[A-Z]/.test(password) ? "✔" : "✖"} Includes uppercase letters</p>
              <p>{/[!@#$%^&*(),.?":{}|<>]/.test(password) ? "✔" : "✖"} Includes special characters</p>
            </div>
          </>
        )}

        {/* Reset Password Button */}
        <button className="btn_19 w-full mt-4 py-2 text-white bg-blue-500 font-semibold rounded-md hover:bg-blue-700 transition-all">
          🔑 Reset Password
        </button>
      </div>
    </div>
  );
}
