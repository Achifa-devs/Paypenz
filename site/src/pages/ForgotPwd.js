import React from 'react'
import Email from '../components/user/Registration/Email'
import { BtnTemp } from '../utils/JsxTemplate'
import { Link } from 'react-router-dom'

export default function ForgotPwd() {
  return (
    <>
      <div className='user-form'>
            <div className="form-title">
                Paypenz
            </div>

            <div className="form-cnt">
                

                <div className="form-intro">
                    Password Recovery Form
                </div>
                <small style={{
                    padding: '10px',
                    background: '#f9f9f9',
                    fontSize:  'small',
                    color: '#000'
                }}>
                    Use the Link that will be sent to the registered email to reset your password
                </small>

                <Email />

                <BtnTemp Title={'Request Token'} Onclick={'HandleSignup'}  />
                <br />
            </div>

        </div>
    </>
  )
}
