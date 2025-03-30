import React from 'react'
import '../../Styles/Signup2factorSuccess.css'
import tickIcon from '../../../public/Tick.svg'
import infoIcon from '../../../public/info.svg'
import Logo from '../../assets/logo'

export default function Signup2factorSuccess() {
  return (
    <div className='whole-container_15'>
      <div className="card_15">
        <div className="logo_15"><Logo /></div>
        <div className="title_15">Two-Factor Authentication Enabled!</div>
        <div className="icon_15">
          <img
            src={tickIcon}
            alt="Checkmark"
          />
        </div>
        <p className="description_15">
          Your account is now protected with two-factor authentication.
        </p>
        <p className="description_15">
          You will be required to enter a verification code when signing in from a
          new device.
        </p>
        <a href="#" className="link_15">
          View setup instructions
        </a>
        <a href="#" className="button_15">
          ← Return to login
        </a>
        <div className="note_15">
          <img
            src={infoIcon}
            alt="Info Icon"
          />
          Make sure to save your backup codes in a secure location in case you lose
          access to your authentication device.
        </div>
      </div></div>
  )
}
