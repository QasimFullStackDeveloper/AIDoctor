import React from 'react'
import image from "../../assets/left-image.png"
import '../../Styles/Signup.css'
import Logo from '../../assets/logo'
export default function Signup() {
  return (
    <div className="signup-container_1">
    <div className="signup-left_1">
      <img src={image} alt="Background Image" />
    </div>
    <div className="signup-right_1">
      <div className="signup-form-container_1">
        <div className="signup-logo_1"><Logo/></div>
        <h2 className="signup-title_1">Create Your Account</h2>
        <p className="signup-subtitle_1">Get personalized healthcare support</p>
        <form>
          <div className="signup-form-group_1 signup-input-group_1">
            <div className="signup-input-field_1">
              <img src="../../public/SVG.svg" alt="User Icon" />
              <input type="text" placeholder="First name" />
            </div>
            <div className="signup-input-field_1">
              <img src="../../public/SVG.svg" alt="User Icon" />
              <input type="text" placeholder="Last name" />
            </div>
          </div>
          <div className="signup-form-group_1">
            <div className="signup-input-field_1">
              <img src="../../public/SVG.svg" alt="Email Icon" />
              <input type="email" placeholder="Email address" />
            </div>
          </div>
          <div className="signup-form-group_1">
            <div className="signup-input-field_1">
              <img src="../../public/SVG.svg" alt="Lock Icon" />
              <input type="password" placeholder="Password" />
            </div>
          </div>
          <div className="signup-form-group_1">
            <div className="signup-input-field_1">
              <img src="../../public/SVG.svg" alt="Lock Icon" />
              <input type="password" placeholder="Confirm password" />
            </div>
          </div>
          <div className="signup-security-check_1">A 7 X 9 @</div>
          <div className="signup-form-group_1">
            <div className="signup-input-field_1">
              <img src="../../public/SVG.svg" alt="Key Icon" />
              <input type="text" placeholder="Enter the code shown" />
            </div>
          </div>
          <div className="signup-terms_1">
            <input type="checkbox" />
            <label>
              I agree to the <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>
            </label>
          </div>
          <button type="submit" className="signup-button_1">
            Create Account
          </button>
          <p className="signup-bottom-text_1">
            Already have an account? <a href="#">Sign in</a>
          </p>
          <p className="signup-secure-text_1">
            Your data is encrypted and secured.
          </p>
          <p className="signup-support-text_1">
            For help or support, contact at{" "}
            <a href="mailto:support@gmail.com">support@gmail.com</a>
          </p>
        </form>
      </div>
    </div>
  </div>  )
}
