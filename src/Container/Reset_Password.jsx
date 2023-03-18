import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { firebase_auth } from '../firebaseConfig';
import { sendPasswordResetEmail, signOut } from "firebase/auth";

const auth = firebase_auth;
const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth,email)
      .then(() => {
        console.log('Password reset email sent');
      })
      .catch((error) => {
        console.log('Error sending password reset email:', error);
      });
  };

  return (
    <>
      <div className="row g-0 app-auth-wrapper">
        <div className="col-12 col-md-7 col-lg-4 auth-main-col text-center p-5">
          <div className="d-flex flex-column align-content-end">
            <div className="app-auth-body mx-auto">
              <div className="app-auth-branding mb-4">
                <a className="app-logo" href="index.html">
                  <img className="logo-icon me-2" src="assets/img/logo.svg" alt="logo" />
                </a>
              </div>
              <h2 className="auth-heading text-center mb-4">Password Reset</h2>

              <div className="auth-intro mb-4 text-center">Enter your email address below. We'll email you a link to a
                page where you can easily create a new password.</div>

              <div className="auth-form-container text-left">

                <form className="auth-form resetpass-form" onSubmit={handleSubmit}>
                  <div className="email mb-3">
                    <label className="sr-only" htmlFor="reg-email">Your Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}  id="reg-email" name="reg-email" type="email" className="form-control login-email"
                      placeholder="example@gmail.com" required />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn app-btn-primary btn-block theme-btn mx-auto">Reset
                      Password</button>
                  </div>
                </form>

                <div className="auth-option text-center"><a className="app-link" href="login.html">Log in</a> <span
                  className="px-2">|</span> <a className="app-link" href="signup.html">Sign up</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5 col-lg-8 h-100 auth-background-col">
          <div className="auth-background-mask">
            <img className="logo-icon" src="assets/img/signin_Illustration.svg" alt="signin" />
          </div>
        </div>

      </div>
    </>
  )
}

export default ResetPassword;