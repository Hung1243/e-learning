import React from "react";

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='row'>
          <div className='left col-sm-12 col-lg-6'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right col-sm-12 col-lg-6 '>
            <input type="text" placeholder="Enter email address" />
            <i className="fa fa-paper-plane"></i>
          </div>
        </div>
      </section>
      <footer>
        <div className="pt-5 pb-3 row">
          <div className="box logo col-sm-12 col-lg-3">
            <h1>E-LEARNING</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>

            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-instagram icon"></i>
          </div>
          <div className="box link col-sm-12 col-lg-3">
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="box link col-sm-12 col-lg-3 ">
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>

          <div className="box last col-sm-12 col-lg-3 ">
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>2 Bis Nguyen Thi Minh Khai, Distric
                1, Ho Chi Minh City
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                +2 392 3929 210
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                elearning@cybersoft.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyright ©2024 All rights reserved | This website made by An and Hung
        </p>
      </div>
    </>
  );
};

export default Footer;
