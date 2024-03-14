import React from "react";
import "./About.css";

import AboutCard from "./AboutCard";
import Back from "../common/back/Back";

const About = () => {
    return (
        <>
            <Back title="About Us" />
            <AboutCard />
        </>
    );
};

export default About;