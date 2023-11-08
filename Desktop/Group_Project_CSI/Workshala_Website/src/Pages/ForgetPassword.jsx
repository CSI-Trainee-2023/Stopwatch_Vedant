import React from 'react'
import SignInPageImage from '../assets/SignInPageImage.png'
import RegisterPageImage from '../assets/RegisterPageImage.png'
import ResetPasswordImage from '../assets/ResetPasswordImage.png'
import './RegisterPage.css'

const ForgetPassword=() =>{
  return (
    <div className="loginPage">
        <div className="loginPageImage">
    <img src={ResetPasswordImage} height="500rem" width="500rem"  alt='' />
    </div>
    {/* <div className="loginPageContentHeading"> */}
    <div className="loginContentContainer">
        <h1>Reset Password</h1>
        <div className="loginPageContent">
         New Password
        <div className="inputForLogin">
        <input type='password' placeholder='Enter your New Password'/>
        </div><br />
        Confirm Password
        <div className="inputForLogin">
        <input type='password' placeholder='Re-write your New Password'/>
        </div><br />
        <br />
     


        <div className="inputForLogin">
        <input type='email' placeholder='Enter your email' />
        </div><br />
        OTP
        <div className="inputForLogin">
        <input type='password' placeholder='Enter your password'/>
        </div><br />
        <button id="SignInButton">Send OTP</button>
        </div><br />
        
        </div>
    </div>
    
  )
}
export default ForgetPassword
