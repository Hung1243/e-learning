import React from "react";
import "./Hero.css";
import Heading from "../../../../components/common/heading/Heading";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row w-50">
            <Heading
              subtitle="WELCOME TO ACADEMIA"
              title="Best Online Education Expertise"
            />
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                <NavLink to={'/course'}> VIEW COURSE</NavLink>
                <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
