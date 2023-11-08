import React from 'react'
import SignInPageImage from '../assets/SignInPageImage.png'
import RegisterPageImage from '../assets/RegisterPageImage.png'
import ResetPasswordImage from '../assets/ResetPasswordImage.png'
import './RegisterPage.css'

const RegisterPage=() =>{
  return (
    <div className="loginPage">
        <div className="loginPageImage">
    <img src={RegisterPageImage} height="500rem" width="500rem"  alt='' />
    </div>
    {/* <div className="loginPageContentHeading"> */}
    <div className="loginContentContainer">
        <h1>Register</h1>
        <div className="loginPageContent">
        Name<br />
        <div className="inputForLogin">
        <input type='text' placeholder='Enter your Name' />
        </div>
        Phone Number
        <div className="inputForLogin">
        <input type="tel" placeholder='Enter your phone number'/>
        </div>
        Email<br />
        <div className="inputForLogin">
        <input type='email' placeholder='Enter your email' />
        </div>
        Password
        <div className="inputForLogin">
        <input type='password' placeholder='Enter your password'/>
        </div><br /><br />
        <button id="SignInButton">Sign In</button>
        </div><br />
        <center>Already Registered! <a href="">Login</a></center>
        </div>
    </div>
    
  )
}
export default RegisterPage
