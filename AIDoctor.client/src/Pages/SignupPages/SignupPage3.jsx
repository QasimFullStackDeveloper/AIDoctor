import React from 'react'
import '../../Styles/SignupPage3.css'
export default function SignupPage3() {
  return (
    <div className="wholecontainer_2">
<div className="container_2">
    <h2 className="title_2">Two-Factor Authentication Setup</h2>
    <div className="progress-bar_2">
      <div className="step_2 completed_2">1</div>
      <div className="bar_2 completed_2" />
      <div className="step_2 completed_2">2</div>
      <div className="bar_2 active_2" />
      <div className="step_2 active_2">3</div>
    </div>
    <div className="card_2">
      <h3>Set Up Your Authenticator App</h3>
      <p>
        Scan the QR code below with your preferred authenticator app to link
        your account.
      </p>
      <div className="qr-container_2">
        <img src="../../../public/DIV.svg" alt="QR Code" />
      </div>
      <div className="manual-setup_2">
        <label>Can't scan? Manual Setup</label>
        <label>Secret Key</label>
        <div className="input-group_2">
          <input type="text" defaultValue="ABCD EFGH IJKL MNOP" readOnly="" />
          <button>Copy</button>
        </div>
        <label>Token Type</label>
        <select className="select_2">
          <option>Time-based (TOTP)</option>
        </select>
        <label>Verification Code</label>
        <input
          type="text"
          placeholder="Enter 6-digit code"
          className="input-field_2"
        />
      </div>
      <button className="verify-btn_2">🔵 Verify Setup</button>
      <div className="buttons_2">
        <button className="back_2">← Back</button>
        <a href="#" className="help_2">
          Need help?
        </a>
      </div>
    </div>
    <footer className="footer_2">
      © 2024 Your Company. All rights reserved.
    </footer>
  </div> 
  </div> )
}
