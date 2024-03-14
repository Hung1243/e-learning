import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <h1>ACADEMIA</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>

          <div className="social">
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
          </div>
        </div>
      </section>

      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB fs-5"}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/course">All Courses</Link>
            </li>
            {/* <li>
              <Link to="/my-profile">My Profile</Link>
            </li> */}
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/journal">Journal</Link>
            </li>
            <li>
              <Link to="/login">Account</Link>
            </li>
          </ul>
          <div className="start">
            <div className="button">GET CERTIFICATE</div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
