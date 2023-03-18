import * as React from 'react'
import { useLogin, useNotify } from 'react-admin';
import { NavLink } from 'react-router-dom';
export default () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const login = useLogin();
    const notify = useNotify();

    const handleSubmit = e => {
        e.preventDefault();
        login({ email, password }).catch(() =>
            notify('Invalid email or password')
        );
    };
    return (<>
        <div className="app app-login p-0">
            <div className="row g-0 app-auth-wrapper">
                <div className="col-12 col-md-7 col-lg-4 auth-main-col text-center p-5">
                    <div className="d-flex flex-column align-content-end">
                        <div className="app-auth-body mx-auto">
                            <div className="app-auth-branding mb-4">
                                <a className="app-logo" href="index.html">
                                    <img className="logo-icon me-2" src="assets/img/logo.svg" alt="logo" />
                                </a>
                            </div>
                            <h2 className="auth-heading text-center">Log in</h2>
                            <div className="auth-form-container text-start">
                                <form className="auth-form login-form" onSubmit={handleSubmit}>
                                    <div className="email mb-3">
                                        <label className="sr-only" htmlFor="signin-email">Email</label>
                                        <input required onChange={e => setEmail(e.target.value)} value={email} id="signin-email" name="signin-email" type="email"
                                            className="form-control signin-email" placeholder="example@gmail.com" />
                                    </div>
                                    <div className="password mb-3">
                                        <label className="sr-only" htmlFor="signin-password">Password</label>
                                        <input required value={password}
                                            onChange={e => setPassword(e.target.value)} id="signin-password" name="signin-password" type="password"
                                            className="form-control signin-password" placeholder="*******" />
                                        <div className="extra mt-3 row justify-content-between">
                                            <div className="col-6">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                        id="RememberPassword" />
                                                    <label className="form-check-label" htmlFor="RememberPassword">
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="forgot-password text-end">
                                                    {/* <NavLink as="a" to="/about" className="btn app-btn-primary btn-block theme-btn mx-auto">
                                                    Forgot password?
                                                    </NavLink> */}
                                                    <a href="#/reset">Forgot password?</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="btn app-btn-primary w-100 theme-btn mx-auto">Log
                                            In</button>
                                    </div>
                                </form>

                                <div className="auth-option text-center">Don't have account yet?  <a className="text-link"
                                    href="signup.html">New Account</a>.</div>
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
        </div>
    </>);
}
