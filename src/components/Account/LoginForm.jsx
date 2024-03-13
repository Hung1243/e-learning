import { Button } from 'antd'
import Input from 'antd/es/input/Input'
import React from 'react'
import { NavLink } from 'react-router-dom'

const LoginForm = ({ handleSwitchClick, isActive, handleLogin }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const values = Object.fromEntries(formData.entries());
        handleLogin(values);
    };

    return (
        <div className={`login form-piece ${isActive ? 'switched' : ''}`}>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Username</label>
                    <input
                        type='text'
                        name="name"
                        id="name"
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
                    {/* <Button type="primary" htmlType="submit">
                        Submit
                    </Button> */}

                    <input type="submit" value="Login Now" id="submit" />
                    <NavLink href="#" className="switch" onClick={handleSwitchClick}>
                        I'm New
                    </NavLink>


                </div>
            </form>
        </div>
    )
}

export default LoginForm