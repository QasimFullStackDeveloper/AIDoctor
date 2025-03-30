import React from 'react'
import '../../Styles/SignupPAge1.css'
import Logo from '../../assets/logo'
export default function SignupPAge1() {
  return (
    <div className="whole-container_10">
    <div className="container_10">
    <div className="logo_10"><Logo/></div>
    <h1>Two-Factor Authentication</h1>
    <p className="subtext_10">
      Choose your preferred method to receive the code
    </p>
    <div className="steps_10">
      <div className="step_10 active_10">1</div>
      <span className="step-text_10 active_10">Choose Method</span>
      <div className="line_10" />
      <div className="step_10">2</div>
      <span className="step-text_10">Setup</span>
      <div className="line_10" />
      <div className="step_10">3</div>
      <span className="step-text_10">Verify</span>
    </div>
    <div className="auth-box_10">
      <h3>Select Authentication Method</h3>
      <div className="option_10">
        <input type="radio" id="email" name="auth-method" />
        <label htmlFor="email">
          <strong>Email Authentication</strong>
          <span>Receive a code via your registered email</span>
        </label>
      </div>
      <div className="option_10">
        <input type="radio" id="auth-app" name="auth-method" />
        <label htmlFor="auth-app">
          <strong>Authenticator App</strong>
          <span>
            Use an authentication app like Google Authenticator or Authy
          </span>
        </label>
      </div>
      <button className="continue-btn_10">Continue</button>
    </div>
  </div>
  <footer className="footer_10">
    <span className="footer-link_10">Help</span>
    <span className="footer-link_10">Privacy Policy</span>
    <span className="footer-link_10">Terms of Service</span>
  </footer>
  </div>  )
}
