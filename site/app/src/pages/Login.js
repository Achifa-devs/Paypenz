import React from 'react'
import Phone from '../components/user/Registration/Phone'
import Pwd from '../components/user/Registration/Pwd'
import { BtnTemp } from '../utils/JsxTemplate'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
      <div className='user-form'>
            <div className="form-title">
                Paypenz
            </div>

            <div className="form-cnt">
                

                <div className="form-intro">
                    Login Form
                </div>

                <Phone />
                <Pwd />

                <BtnTemp Title={'Login'} Onclick={'HandleSignup'}  />
                <br />
                <small style={{color: 'blue'}}>Don't Have An Account? <Link to={'/signup'}>Signup Here</Link></small>
                <br />
                <small style={{color: 'blue'}}>Forgot Password? <Link to={'/forgot-pwd'}>Recover Password Here</Link></small>
            </div>

        </div>
    </>
  )
}
