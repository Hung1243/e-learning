import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TOKEN } from '../../redux/token';
import api from '../../config/axios';
import { toast } from 'react-toastify';

const SideBar = ({ courseDetail, relatedCourses }) => {
    async function handleEnroll() {
        try {
            const res = await api.post(
                'QuanLyKhoaHoc/DangKyKhoaHoc',
                {
                    maKhoaHoc: courseDetail.maKhoaHoc,
                    taiKhoan: 'ang',
                },
                {
                    headers: {
                        TokenCybersoft: TOKEN,
                    },
                }
            );

            if (res.status === 200) {
                console.log(res);
                toast.success(res.data);
            } else {
                console.error('Lỗi:', res.status);
            }
        } catch (error) {
            toast.error(error.response.data);
        }
    }

    return (
        <div className="col-lg-4 border border-5 " style={{ background: '#1eb2a6' }}>
            <div className="sidebar px-2">
                <div className="sidebar_section  shadow p-3 mb-5 bg-body-gray rounded mt-4 p-4">
                    <div className="sidebar_section_title fw-bolder fs-3 text-bg-dark p-3 rounded">Course Feature</div>
                    <hr />
                    <div className="sidebar_feature   ">
                        <div className="course_price text-black-50 fw-bolder fs-10">$180</div>

                        <div className="feature_list ">
                            {/* <!-- Feature --> */}
                            <div className="feature  d-flex flex-row align-items-center justify-content-start">
                                <div className="feature_title " style={{ color: '#7f6200' }}>
                                    <i className="fa fa-clock mx-1"></i>
                                    <span>Duration:</span>
                                </div>
                                <div className="feature_text ml-auto">2 weeks</div>
                            </div>

                            {/* <!-- Feature --> */}
                            <div className="feature d-flex flex-row align-items-center justify-content-start">
                                <div className="feature_title" style={{ color: 'red' }}>
                                    <i class="fa fa-file mx-1"></i>
                                    <span>Lectures:</span>
                                </div>
                                <div className="feature_text ml-auto">10</div>
                            </div>

                            {/* <!-- Feature --> */}
                            <div className="feature d-flex flex-row align-items-center justify-content-start">
                                <div className="feature_title" style={{ color: 'blue' }}>
                                    <i class="fa fa-question-circle mx-1"></i>
                                    <span>Questions:</span>
                                </div>
                                <div className="feature_text ml-auto">6</div>
                            </div>

                            {/* <!-- Feature --> */}
                            <div className="feature d-flex flex-row align-items-center justify-content-start">
                                <div className="feature_title" style={{ color: 'brown' }}>
                                    <i className="fa fa-list-alt mx-1" aria-hidden="true"></i>
                                    <span>Lectures:</span>
                                </div>
                                <div className="feature_text ml-auto">Yes</div>
                            </div>

                            {/* <!-- Feature --> */}
                            <div className="feature d-flex flex-row align-items-center justify-content-start">
                                <div className="feature_title" style={{ color: 'purple' }}>
                                    <i className="fa fa-users mx-1" aria-hidden="true"></i>
                                    <span>Students:</span>
                                </div>
                                <div className="feature_text ml-auto">{courseDetail.soLuongHocVien}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sidebar_section shadow p-3 mb-5 bg-body-gray rounded mt-4 p-4">
                    <div
                        className="sidebar_section_title fw-bolder fs-5 text-bg-dark p-3 rounded"
                        style={{ color: '#FFF' }}
                        onClick={handleEnroll}>
                        <button style={{ padding: 8, margin: 0, background: 'transparent', color: 'white' }}>
                            {' '}
                            ENROLL NOW{' '}
                        </button>
                    </div>
                </div>

                {/* <!-- Feature --> */}
                <div className="sidebar_section shadow p-3 mb-5 bg-body-gray rounded mt-4 p-4">
                    <div
                        className="sidebar_section_title fw-bolder fs-3 text-bg-dark p-3 rounded"
                        style={{ color: '#FFF' }}>
                        Teacher
                    </div>
                    <div className="sidebar_teacher">
                        <div className="teacher_title_container d-flex flex-row align-items-center justify-content-start">
                            <div className="teacher_image">
                                <img
                                    src="images/teacher.jpg"
                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null; // prevents looping
                                        currentTarget.src =
                                            'https://i.pinimg.com/236x/cd/cb/0c/cdcb0cb30bc700c53f12eff840156b29.jpg';
                                    }}
                                    alt=""
                                />
                            </div>
                            <div className="teacher_title">
                                <div className="teacher_name fw-bolder " style={{ textTransform: 'uppercase' }}>
                                    <NavLink to={'#'}>Jacke Masito</NavLink>
                                </div>
                                <div className="teacher_position fst-italic">Marketing & Management</div>
                            </div>
                        </div>
                        <div className="teacher_meta_container">
                            {/* <!-- Teacher Rating --> */}
                            <div className="teacher_meta d-flex flex-row align-items-center justify-content-start">
                                <div className="teacher_meta_title text-danger">Average Rating:</div>
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
                                Hi! I am Masion, I’m a marketing & management eros pulvinar velit laoreet, sit amet
                                egestas erat dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras sagittis
                                sem sit amet urna feugiat rutrum nam nulla ipsum.
                            </p>
                        </div>
                    </div>
                </div>

                {/* <!-- Latest Course --> */}
                <div className="sidebar_section shadow p-3 mb-5 bg-body-gray rounded mt-4 p-4">
                    <div className="sidebar_section_title fw-bolder fs-3 text-bg-dark p-3 rounded">Related Courses</div>
                    <div className="sidebar_latest">
                        {relatedCourses.slice(1, 5).map((e, i) => {
                            return (
                                <>
                                    <div className="latest d-flex flex-row align-items-start justify-content-start">
                                        <div className="latest_image">
                                            <div>
                                                <img
                                                    src={e.hinhAnh}
                                                    alt=""
                                                    onError={({ currentTarget }) => {
                                                        currentTarget.onerror = null; // prevents looping
                                                        currentTarget.src =
                                                            'https://www.ntc.edu/sites/default/files/styles/full_width_16_9/public/2021-06/software-development-specialist.jpg?';
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="latest_content">
                                            <div className="latest_title">
                                                <Link to={`/course/${e.maKhoaHoc}`}>{e.tenKhoaHoc}</Link>
                                            </div>
                                            <div className="latest_price">$180.00</div>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
