import React from 'react'
import { NavLink } from 'react-router-dom'

const LoginForm = ({ handleSwitchClick, isActive }) => {

    return (
        <div className={`login form-piece ${isActive ? 'switched' : ''}`}>
            <form className="login-form" >
                <div className="form-group">
                    <label htmlFor="loginemail">Email Address</label>
                    <input
                        type="email"
                        name="loginemail"
                        id="loginemail"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="loginPassword">Password</label>
                    <input
                        type="password"
                        name="loginPassword"
                        id="loginPassword"
                        required
                    />
                </div>

                <div className="CTA">
                    <input type="submit" value="Login" />
                    <NavLink href="#" className="switch" onClick={handleSwitchClick}>
                        I'm New
                    </NavLink>


                </div>
            </form>
        </div>
    )
}

export default LoginForm