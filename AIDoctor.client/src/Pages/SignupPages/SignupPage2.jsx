import React from 'react'
import '../../Styles/SignupPage2.css'
export default function SignupPage2() {
  return (
    <div className="whole-container_11">
    <div className="container_11">
    <div className="progress-bar_11">
      <div className="step_11 completed_11">1</div>
      <div className="arrow-bar_11 completed_11" />
      <div className="step_11 active_11">2</div>
      <div className="arrow-bar_11" />
      <div className="step_11">3</div>
    </div>
    <div className="card_11">
      <h2>Set Up Your Authenticator App</h2>
      <p>
        Scan the QR code below with your preferred authenticator app to link
        your account.
      </p>
      <div id="qr-code-container_11">
        <img src="../../public/DIV.svg" alt="QR Code" />
      </div>
      <div className="manual-setup_11">
        <label>Can't scan? Manual Setup</label>
        <div className="input-group_11">
          <input type="text" defaultValue="ABCD EFGH IJKL MNOP" readOnly="" />
          <button>Copy</button>
        </div>
        <label>Token Type</label>
        <div className="custom-select_11">
          <select>
            <option>Time-based (TOTP)</option>
          </select>
        </div>
      </div>
      <div className="buttons_11">
        <button className="back_11">← Back</button>
        <button className="continue_11">Continue →</button>
      </div>
    </div>
    <footer className="footer_11">
      Need help? <a href="#">Contact Support</a>
    </footer>
  </div> </div> )
}
