import React from "react"
import { Link } from "gatsby"
import logo from './fluid_careers_logo.png'
import { login, logout, isAuthenticated, getProfile } from "../../utils/auth"
import { navbar, checkbox, button, background, nav, list, item, loginButton } from "./navbar.module.css"

function LoginButton() {
    if(isAuthenticated()) {
        return <LoggedIn />
    }
    return <LoggedOut />
}

const LoggedIn = () => <a href="#login" className="btn" onClick={e => { logout(); e.preventDefault();}}>Logout</a>

const LoggedOut = () => <a href="#login" className="btn" onClick={e => { login(); e.preventDefault();}}>Login</a>

function NavBar() {

    return (
        <div className={navbar}>
            <div className="header__logo-box">
                { /* TODO: use absolute path here instead */ }
                <img src={logo} alt="Logo" className="header__logo"></img>
            </div>
            <div className="navigation">
                <input type="checkbox" className={checkbox} id="navi-toggle"/>
                <label htmlFor="navi-toggle" className={button}>
                    <span className="navigation__icon">&nbsp;</span>
                </label>
                <div className={background}>&nbsp;</div>

                <nav className={nav}>
                    <ul className={list}>
                        <li className={item}><Link to="/">Home</Link></li>
                        <li className={item}><Link to="/job-search/">Find a Job</Link></li>
                        <li className={item}><Link to="/post-job/">Post a Job</Link></li>
                        <li className={item}><Link to="/resources/">Resources</Link></li>
                        <li className={item}><Link to="/contact/">Contact</Link></li>
                    </ul>
                    <div className={loginButton}><LoginButton /></div>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;