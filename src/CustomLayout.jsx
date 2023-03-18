import React from 'react';
import { Empty, Layout, useLogout } from 'react-admin';

const CustomLayout = (props) => {
    const {children,
        dashboard,
        title} = props;

        const logout=useLogout();
    return <>
        <header className="app-header fixed-top">
            <div className="app-header-inner">
                <div className="container-fluid py-2">
                    <div className="app-header-content">
                        <div className="row justify-content-between align-items-center">
                            <div className="app-branding col d-none d-xl-block">
                                <a className="app-logo" href="index.html">
                                    <img className="logo-icon me-2" src="/assets/img/logo.svg"
                                        alt="logo" /><span className="logo-text" >Ko Dwell</span></a>

                            </div>

                            <div className="col-auto">
                                <a id="sidepanel-toggler" className="sidepanel-toggler d-inline-block d-xl-none" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                        role="img">
                                        <title>Menu</title>
                                        <path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10"
                                            stroke-width="2" d="M4 7h22M4 15h22M4 23h22"></path>
                                    </svg>
                                </a>
                            </div>

                            <div className="app-utilities col-auto">
                                <div className="app-utility-item">
                                    <a href="#">Easin Arafat</a>
                                    <a onClick={()=>logout()} href="#">
                                        <img src="assets/img/Logout.svg" alt="user profile" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="app-sidepanel" className="app-sidepanel">
                <div id="sidepanel-drop" className="sidepanel-drop"></div>
                <div className="sidepanel-inner d-flex flex-column">
                    <a href="#" id="sidepanel-close" className="sidepanel-close d-xl-none">&times;</a>
                    <div className="app-branding col d-xl-none">
                        <a className="app-logo" href="index.html"><img className="logo-icon me-2" src="/assets/img/logo.svg"
                            alt="logo" /><span className="logo-text">Ko Dwell </span></a>
                    </div>
                    <nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
                        <ul className="app-menu list-unstyled accordion" id="menu-accordion">
                            <li className="nav-item">
                                <a className="nav-link active" href="dashboard.html">
                                    <span className="nav-icon">
                                        <img src="assets/img/Category.svg" alt="Dashboard" />
                                    </span>
                                    <span className="nav-link-text">Dashboard</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="audioBroadcast.html">
                                    <span className="nav-icon">
                                        <img src="assets/img/Category.svg" alt="Menu" />
                                    </span>
                                    <span className="nav-link-text">Audio Broadcast</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="disasterAlert.html">
                                    <span className="nav-icon">
                                        <img src="assets/img/Category.svg" alt="Menu" />
                                    </span>
                                    <span className="nav-link-text">Disaster Alerts</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="emergencyAlert.html">
                                    <span className="nav-icon">
                                        <img src="assets/img/Category.svg" alt="Menu" />
                                    </span>
                                    <span className="nav-link-text">Emergency Alerts</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="embassyReport.html">
                                    <span className="nav-icon">
                                        <img src="assets/img/Category.svg" alt="Menu" />
                                    </span>
                                    <span className="nav-link-text">Embassy Reports</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="generalReport.html">
                                    <span className="nav-icon">
                                        <img src="assets/img/Category.svg" alt="Menu" />
                                    </span>
                                    <span className="nav-link-text">General Reports</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="sensors.html">
                                    <span className="nav-icon">
                                        <img src="assets/img/Category.svg" alt="Menu" />
                                    </span>
                                    <span className="nav-link-text">Sensors</span>
                                </a>
                            </li>
                            <li className="nav-item has-submenu">
                                <a className="nav-link submenu-toggle" href="#" data-bs-toggle="collapse"
                                    data-bs-target="#submenu-2" aria-expanded="false" aria-controls="submenu-2">
                                    <span className="nav-icon">
                                        <img src="assets/img/Category.svg" alt="Menu" />
                                    </span>
                                    <span className="nav-link-text">Other Pages</span>
                                </a>
                                <div id="submenu-2" className="collapse submenu submenu-2" data-bs-parent="#menu-accordion">
                                    <ul className="submenu-list list-unstyled">
                                        <li className="submenu-item"><a className="submenu-link" href="login.html">Login</a></li>
                                        <li className="submenu-item"><a className="submenu-link" href="signup.html">Signup</a></li>
                                        <li className="submenu-item"><a className="submenu-link" href="reset-password.html">Reset
                                            password</a></li>
                                        <li className="submenu-item"><a className="submenu-link" href="404.html">404 page</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        <div className="app-wrapper">
        <div className="app-content pt-3 p-md-3 p-lg-4">
            <div className="container-xl">
            <h1 className="app-page-title">{title}</h1>
            {children}
            </div>
            </div>
        </div>
    </>
}

export default CustomLayout;
