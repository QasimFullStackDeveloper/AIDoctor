import React from 'react'
import '../../Styles/SignupSuccess.css'
import Logo from '../../assets/logo'
export default function SignupSuccess() {
  return (
    <div className='whole-container_12'>
          <div className="container_12">
    <div className="card_12">
      <div className="logo_12"><Logo/></div>
      <h2 className="title_12">Email Verified!</h2>
      <div className="success-icon_12">
        <div className="circle_12">✔</div>
      </div>
      <p className="text_12">Your email has been successfully verified</p>
      <p className="subtext_12">
        You can now access all features of your account
      </p>
      <button className="login-btn_12">← Back to login</button>
      <div className="confirmation-msg_12">
        <span className="icon_12">🛡️</span>
        <p>
          Your account is now secure and ready to use. You'll receive a
          confirmation email shortly.
        </p>
      </div>
    </div>
  </div>
    </div>
  )
}
