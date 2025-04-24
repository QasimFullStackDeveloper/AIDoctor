import { useState } from "react";
import Logo from "../Components/Logo";
import key from "../assets/key.svg";
import eye from "../assets/eye.svg";
import tickmark from "../assets/properTickmark.svg";
import eyeoff from "../assets/eye-off.svg";

export default function SetNewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const evaluateStrength = (pass) => {
    let strength = 0;
    if (pass.length >= 8) strength++;
    if (/\d/.test(pass)) strength++;
    if (/[A-Z]/.test(pass)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(pass)) strength++;

    if (strength <= 1) return { text: "Weak", color: "red", width: "25%" };
    if (strength === 2) return { text: "Medium", color: "orange", width: "50%" };
    if (strength === 3) return { text: "Strong", color: "blue", width: "75%" };
    return { text: "Very Strong", color: "green", width: "100%" };
  };

  const strengthInfo = evaluateStrength(password);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-[350px]  border-t-4 border-blue-600">

        {/* Logo */}
        <div className="flex justify-center ">
        <div className="mb-2 h-12 w-12">
          <Logo />
        </div>
        </div>


        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 text-center">Set a New Password</h2>

        {/* Success Icon */}
        <div className="w-14 h-14 rounded-full bg-green-100 mx-auto flex items-center justify-center mb-4 shadow-sm mt-3">
          <img src={tickmark} alt="Success" className="w-10 h-10" />
        </div>

        <p className="text-gray-600 text-sm text-center">Create a secure new password for your account.</p>

        {/* New Password */}
        <div className="mt-4">
          <label className="text-xs font-bold block mb-1">New Password</label>
          <div className="relative flex items-center border border-gray-300 rounded-lg bg-gray-100 p-2 focus-within:ring-2 focus-within:ring-blue-500">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400 text-sm"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src={showPassword ? eyeoff : eye}
              alt="Toggle visibility"
              onClick={togglePasswordVisibility}
              className="w-5 h-5 cursor-pointer absolute right-3"
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mt-3">
          <label className="text-xs font-bold block mb-1">Confirm Password</label>
          <div className="relative flex items-center border border-gray-300 rounded-lg bg-gray-100 p-2 focus-within:ring-2 focus-within:ring-blue-500">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="w-full bg-transparent focus:outline-none text-gray-700 placeholder-gray-400 text-sm"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <img
              src={showConfirmPassword ? eyeoff : eye}
              alt="Toggle visibility"
              onClick={toggleConfirmPasswordVisibility}
              className="w-5 h-5 cursor-pointer absolute right-3"
            />
          </div>
        </div>

        {/* Strength Indicator */}
        {password.length > 0 && (
          <div className="mt-3">
            <div className="flex items-center justify-between text-xs mb-1">
              <div
                className="h-1 rounded bg-gray-300"
                style={{ width: strengthInfo.width, backgroundColor: strengthInfo.color }}
              ></div>
              <span className="font-semibold" style={{ color: strengthInfo.color }}>
                {strengthInfo.text}
              </span>
            </div>

            <div className="text-xs text-gray-600 mt-2 space-y-1">
              <p>{password.length >= 8 ? "✔" : "✖"} At least 8 characters</p>
              <p>{/\d/.test(password) ? "✔" : "✖"} Contains numbers</p>
              <p>{/[A-Z]/.test(password) ? "✔" : "✖"} Includes uppercase letters</p>
              <p>{/[!@#$%^&*(),.?":{}|<>]/.test(password) ? "✔" : "✖"} Includes special characters</p>
            </div>
          </div>
        )}

        {/* Reset Password Button */}
        <button className="w-full mt-4 py-3 text-white bg-blue-600 font-semibold rounded-lg hover:bg-blue-700 hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-md">
          <img src={key} alt="Key" className="w-5 h-5" /> Reset Password
        </button>
      </div>
    </div>
  );
}
