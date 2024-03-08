import React from 'react'

const SideBar = () => {
    return (

        <div className="col-lg-4">
            <div className="sidebar">

                <div className="sidebar_section">
                    <div className="sidebar_section_title">Course Feature</div>
                    <div className="sidebar_feature">
                        <div className="course_price">$180</div>

                        <div className="feature_list">

                            {/* <!-- Feature --> */}
                            <div className="feature d-flex flex-row align-items-center justify-content-start">
                                <div className="feature_title"><i class="fa fa-clock"></i><span>Duration:</span></div>
                                <div className="feature_text ml-auto">2 weeks</div>
                            </div>

                            {/* <!-- Feature --> */}
                            <div className="feature d-flex flex-row align-items-center justify-content-start">
                                <div className="feature_title"><i class="fa fa-file"></i><span>Lectures:</span></div>
                                <div className="feature_text ml-auto">10</div>
                            </div>

                            {/* <!-- Feature --> */}
                            <div className="feature d-flex flex-row align-items-center justify-content-start">
                                <div className="feature_title"><i class="fa fa-question-circle"></i><span>Lectures:</span></div>
                                <div className="feature_text ml-auto">6</div>
                            </div>

                            {/* <!-- Feature --> */}
                            <div className="feature d-flex flex-row align-items-center justify-content-start">
                                <div className="feature_title"><i className="fa fa-list-alt" aria-hidden="true"></i><span>Lectures:</span></div>
                                <div className="feature_text ml-auto">Yes</div>
                            </div>

                            {/* <!-- Feature --> */}
                            <div className="feature d-flex flex-row align-items-center justify-content-start">
                                <div className="feature_title"><i className="fa fa-users" aria-hidden="true"></i><span>Lectures:</span></div>
                                <div className="feature_text ml-auto">35</div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* <!-- Feature --> */}
                <div className="sidebar_section">
                    <div className="sidebar_section_title">Teacher</div>
                    <div className="sidebar_teacher">
                        <div className="teacher_title_container d-flex flex-row align-items-center justify-content-start">
                            <div className="teacher_image"><img src="images/teacher.jpg" alt="" /></div>
                            <div className="teacher_title">
                                <div className="teacher_name"><a href="#">Jacke Masito</a></div>
                                <div className="teacher_position">Marketing & Management</div>
                            </div>
                        </div>
                        <div className="teacher_meta_container">
                            {/* <!-- Teacher Rating --> */}
                            <div className="teacher_meta d-flex flex-row align-items-center justify-content-start">
                                <div className="teacher_meta_title">Average Rating:</div>
                                <div className="teacher_meta_text ml-auto"><span>4.7</span><i className="fa fa-star" aria-hidden="true"></i></div>
                            </div>
                            {/* <!-- Teacher Review --> */}
                            <div className="teacher_meta d-flex flex-row align-items-center justify-content-start">
                                <div className="teacher_meta_title">Review:</div>
                                <div className="teacher_meta_text ml-auto"><span>12k</span><i className="fa fa-comment" aria-hidden="true"></i></div>
                            </div>
                            {/* <!-- Teacher Quizzes --> */}
                            <div className="teacher_meta d-flex flex-row align-items-center justify-content-start">
                                <div className="teacher_meta_title">Quizzes:</div>
                                <div className="teacher_meta_text ml-auto"><span>600</span><i className="fa fa-user" aria-hidden="true"></i></div>
                            </div>
                        </div>
                        <div className="teacher_info">
                            <p>Hi! I am Masion, I’m a marketing & management  eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum nam nulla ipsum.</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Latest Course --> */}
                <div className="sidebar_section">
                    <div className="sidebar_section_title">Latest Courses</div>
                    <div className="sidebar_latest">

                        {/* <!-- Latest Course --> */}
                        <div className="latest d-flex flex-row align-items-start justify-content-start">
                            <div className="latest_image"><div><img src="images/latest_1.jpg" alt="" /></div></div>
                            <div className="latest_content">
                                <div className="latest_title"><a href="course.html">How to Design a Logo a Beginners Course</a></div>
                                <div className="latest_price">Free</div>
                            </div>
                        </div>

                        {/* <!-- Latest Course --> */}
                        <div className="latest d-flex flex-row align-items-start justify-content-start">
                            <div className="latest_image"><div><img src="images/latest_2.jpg" alt="" /></div></div>
                            <div className="latest_content">
                                <div className="latest_title"><a href="course.html">Photography for Beginners MasterclassName</a></div>
                                <div className="latest_price">$170</div>
                            </div>
                        </div>

                        {/* <!-- Latest Course --> */}
                        <div className="latest d-flex flex-row align-items-start justify-content-start">
                            <div className="latest_image"><div><img src="images/latest_3.jpg" alt="" /></div></div>
                            <div className="latest_content">
                                <div className="latest_title"><a href="course.html">The Secrets of Body Language</a></div>
                                <div className="latest_price">$220</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default SideBar