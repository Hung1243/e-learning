import React from 'react'
import { NavLink } from 'react-router-dom'

const RegisterForm = ({ handleSwitchClick, isActive }) => {
    return (
        <div className={`signup form-piece ${isActive ? '' : 'switched'}`}>
            <form className="signup-form">
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name="username" id="name" className="name" />
                    <span className="error"></span>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        name="emailAdress"
                        id="email"
                        className="email"
                        required
                    />
                    <span className="error"></span>
                </div>

                <div className="form-group">
                    <label htmlFor="phone">
                        Phone Number - <small>Optional</small>
                    </label>
                    <input type="text" name="phone" id="phone" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="pass"
                        required
                    />
                    <span className="error"></span>
                </div>

                <div className="form-group">
                    <label htmlFor="passwordCon">Confirm Password</label>
                    <input
                        type="password"
                        name="passwordCon"
                        id="passwordCon"
                        className="passConfirm"
                    />
                    <span className="error"></span>
                </div>

                <div className="CTA">
                    <input type="submit" value="Signup Now" id="submit" />
                    <NavLink href="#" className="switch" onClick={handleSwitchClick}>
                        I have an account
                    </NavLink>

                </div>
            </form>
        </div>
    )
}

export default RegisterForm