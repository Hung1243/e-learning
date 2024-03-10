import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [isActive, setIsActive] = useState(false);

  const handleSwitchClick = () => {
    setIsActive(!isActive);
  };

  return <div className="container">
    <section id="formHolder">
      <div className="row w-75 mx-auto">
        {/* <!-- Brand Box --> */}
        <div className="col-sm-6 brand">
          <NavLink href="#" className="logo">
            MR <span>.</span>
          </NavLink>

          <div className="heading">
            <h2>CYBERSOFT</h2>
            <p>Your Right Choice</p>
          </div>

          <div className="success-msg">
            <p>Great! You are one of our members now</p>
            <NavLink href="#" className="profile">
              Your Profile
            </NavLink>
          </div>
        </div>

        {/* <!-- Form Box --> */}
        <div className="col-sm-6 form">
          {/* <!-- Login Form --> */}
          <div className={`login form-piece ${isActive ? 'switched' : ''}`}>
            <form className="login-form" action="#" method="post">
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
          {/* <!-- End Login Form --> */}

          {/* <!-- Signup Form --> */}
          <div className={`signup form-piece ${isActive ? '' : 'switched'}`}>
            <form className="signup-form" action="#" method="post">
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
          {/* <!-- End Signup Form --> */}
        </div>
      </div>
    </section>
  </div>
};

export default Login;
