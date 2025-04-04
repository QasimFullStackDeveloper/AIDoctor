import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import image from "../assets/left-image.png";

export default function Signup1() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Left side - Image */}
      <div className="w-1/2 hidden md:block">
       <img
          src={image}
          alt="Signup Illustration"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
          {/* Logo */}
          <div className="flex justify-center mb-4">
              </div>

          <h2 className="text-2xl font-semibold text-center mb-2">
            Create Your Account
          </h2>
          <p className="text-gray-500 text-center mb-6">
            Get personalized healthcare support
          </p>

          <form>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full p-2 border rounded"
              />
            </div>

            <input
              type="email"
              placeholder="Email address"
              className="w-full p-2 border rounded mt-4"
            />

            <div className="relative mt-4">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-2 border rounded"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="relative mt-4">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                className="w-full p-2 border rounded"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2.5 text-gray-500"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="mt-4">
              <label className="block text-gray-600">Security Check</label>
              <div className="flex items-center gap-2">
                <span className="p-2 bg-gray-200 rounded">A 7 x 9 @</span>
                <input
                  type="text"
                  placeholder="Enter code shown"
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <div className="mt-4 flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-600">
                I agree to the{" "}
                <a href="#" className="text-blue-500">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-500">
                  Privacy Policy
                </a>
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded mt-4 hover:bg-blue-700"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="#" className="text-blue-500">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
