import React from "react";
import Heading from "../common/heading/Heading";
import "./About.css";
// import { homeAbout } from "../../dummydata"

const AboutCard = () => {
    return (
        <>
            <section className="aboutHome pt-lg-5">
                <div className="container flexSB">
                    <div className="left row">
                        <img src="./images/about.webp" alt="" />
                    </div>
                    <div className="right row">
                        <Heading
                            subtitle="LEARN ANYTHING"
                            title="Benefits About Online Learning Expertise"
                        />
                        <div className="items">
                            <div className="item flexSB">
                                <div className="img">
                                    <img
                                        src="https://img.icons8.com/dotty/80/000000/storytelling.png"
                                        alt=""
                                    />
                                </div>
                                <div className="text">
                                    <h2>Online Course</h2>
                                    <p>
                                        Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind
                                        texts.
                                    </p>
                                </div>
                            </div>
                            <div className="item flexSB">
                                <div className="img">
                                    <img
                                        src="https://img.icons8.com/ios/80/000000/diploma.png"
                                        alt=""
                                    />
                                </div>
                                <div className="text">
                                    <h2>Earn A Certificates</h2>
                                    <p>
                                        Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind
                                        texts.
                                    </p>
                                </div>
                            </div>
                            <div className="item flexSB">
                                <div className="img">
                                    <img
                                        src="https://img.icons8.com/ios/80/000000/athlete.png"
                                        alt=""
                                    />
                                </div>
                                <div className="text">
                                    <h2>Learn with Expert</h2>
                                    <p>
                                        Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind
                                        texts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutCard;