import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <div
            className="col-lg-4 border border-5 "
            style={{ background: "#1eb2a6" }}
        >
            <div className="sidebar px-2">
                <div className="sidebar_section  shadow p-3 mb-5 bg-body-gray rounded mt-4 p-4">
                    <div className="sidebar_section_title fw-bolder fs-3 text-bg-dark p-3 rounded">
                        Course Feature
                    </div>
                    <hr />
                    <div className="sidebar_feature   ">
                        <div className="course_price text-black-50 fw-bolder fs-10">
                            $180
                        </div>

                        <div className="feature_list ">
                            {/* <!-- Feature --> */}
                            <div className="feature  d-flex flex-row align-items-center justify-content-start">
                                <div className="feature_title " style={{ color: "yellow" }}>
                                    <i className="fa fa-clock mx-1"></i>
                                    <span>Duration:</span>
                                </div>
                                <div className="feature_text ml-auto">2 weeks</div>
                            </div>

                            {/* <!-- Feature --> */}
                            <div className="feature d-flex flex-row align-items-center justify-content-start">
                                <div className="feature_title" style={{ color: "red" }}>
                                    <i class="fa fa-file mx-1"></i>
                                    <span>Lectures:</span>
                                </div>
                                <div className="feature_text ml-auto">10</div>
                            </div>

                            {/* <!-- Feature --> */}
                            <div className="feature d-flex flex-row align-items-center justify-content-start">
                                <div className="feature_title" style={{ color: "blue" }}>
                                    <i class="fa fa-question-circle mx-1"></i>
                                    <span>Questions:</span>
                                </div>
                                <div className="feature_text ml-auto">6</div>
                            </div>

                            {/* <!-- Feature --> */}
                            <div className="feature d-flex flex-row align-items-center justify-content-start">
                                <div className="feature_title" style={{ color: "brown" }}>
                                    <i className="fa fa-list-alt mx-1" aria-hidden="true"></i>
                                    <span>Lectures:</span>
                                </div>
                                <div className="feature_text ml-auto">Yes</div>
                            </div>

                            {/* <!-- Feature --> */}
                            <div className="feature d-flex flex-row align-items-center justify-content-start">
                                <div className="feature_title" style={{ color: "purple" }}>
                                    <i className="fa fa-users mx-1" aria-hidden="true"></i>
                                    <span>Students:</span>
                                </div>
                                <div className="feature_text ml-auto">35</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="sidebar_section shadow p-3 mb-5 bg-body-gray rounded mt-4 p-4">
                    <div
                        className="sidebar_section_title fw-bolder fs-5 text-bg-dark p-3 rounded"
                        style={{ color: "#FFF" }}
                    >
                        <NavLink to={'/login'}>  ENROLL  NOW </NavLink>
                    </div>
                </div>

                {/* <!-- Feature --> */}
                <div className="sidebar_section shadow p-3 mb-5 bg-body-gray rounded mt-4 p-4">
                    <div
                        className="sidebar_section_title fw-bolder fs-3 text-bg-dark p-3 rounded"
                        style={{ color: "#FFF" }}
                    >
                        Teacher
                    </div>
                    <div className="sidebar_teacher">
                        <div className="teacher_title_container d-flex flex-row align-items-center justify-content-start">
                            <div className="teacher_image">
                                <img src="images/teacher.jpg" alt="" />
                            </div>
                            <div className="teacher_title">
                                <div
                                    className="teacher_name fw-bolder "
                                    style={{ textTransform: "uppercase" }}
                                >
                                    <NavLink to={'#'}>Jacke Masito</NavLink>
                                </div>
                                <div className="teacher_position fst-italic">
                                    Marketing & Management
                                </div>
                            </div>
                        </div>
                        <div className="teacher_meta_container">
                            {/* <!-- Teacher Rating --> */}
                            <div className="teacher_meta d-flex flex-row align-items-center justify-content-start">
                                <div className="teacher_meta_title text-danger">
                                    Average Rating:
                                </div>
                                <div className="teacher_meta_text ml-auto fw-bold">
                                    <span>4.7</span>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                </div>
                            </div>
                            {/* <!-- Teacher Review --> */}
                            <div className="teacher_meta d-flex flex-row align-items-center justify-content-start">
                                <div className="teacher_meta_title text-danger">Review:</div>
                                <div className="teacher_meta_text ml-auto fw-bold">
                                    <span>12k</span>
                                    <i className="fa fa-comment" aria-hidden="true"></i>
                                </div>
                            </div>
                            {/* <!-- Teacher Quizzes --> */}
                            <div className="teacher_meta d-flex flex-row align-items-center justify-content-start">
                                <div className="teacher_meta_title text-danger ">Quizzes:</div>
                                <div className="teacher_meta_text ml-auto fw-bold">
                                    <span>600</span>
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                        <div className="teacher_info">
                            <p>
                                Hi! I am Masion, I’m a marketing & management eros pulvinar
                                velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum
                                tellus, sit amet viverra felis. Cras sagittis sem sit amet urna
                                feugiat rutrum nam nulla ipsum.
                            </p>
                        </div>
                    </div>
                </div>

                {/* <!-- Latest Course --> */}
                <div className="sidebar_section shadow p-3 mb-5 bg-body-gray rounded mt-4 p-4">
                    <div className="sidebar_section_title fw-bolder fs-3 text-bg-dark p-3 rounded">
                        Latest Courses
                    </div>
                    <div className="sidebar_latest">
                        {/* <!-- Latest Course --> */}
                        <div className="latest d-flex flex-row align-items-start justify-content-start">
                            <div className="latest_image">
                                <div>
                                    <img src="images/latest_1.jpg" alt="" />
                                </div>
                            </div>
                            <div className="latest_content">
                                <div className="latest_title">
                                    <a href="course.html">
                                        How to Design a Logo a Beginners Course
                                    </a>
                                </div>
                                <div className="latest_price">Free</div>
                            </div>
                        </div>

                        {/* <!-- Latest Course --> */}
                        <div className="latest d-flex flex-row align-items-start justify-content-start">
                            <div className="latest_image">
                                <div>
                                    <img src="images/latest_2.jpg" alt="" />
                                </div>
                            </div>
                            <div className="latest_content">
                                <div className="latest_title">
                                    <a href="course.html">
                                        Photography for Beginners MasterclassName
                                    </a>
                                </div>
                                <div className="latest_price">$170</div>
                            </div>
                        </div>

                        {/* <!-- Latest Course --> */}
                        <div className="latest d-flex flex-row align-items-start justify-content-start">
                            <div className="latest_image">
                                <div>
                                    <img src="images/latest_3.jpg" alt="" />
                                </div>
                            </div>
                            <div className="latest_content">
                                <div className="latest_title">
                                    <a href="course.html">The Secrets of Body Language</a>
                                </div>
                                <div className="latest_price">$220</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;