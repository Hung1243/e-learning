import React, { useEffect, useState } from 'react';
import SideBar from '../../components/ViewCourseDetails/SideBar';
import CourseDetailsTab from '../../components/ViewCourseDetails/CourseDetailsTab';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import { TOKEN } from '../../redux/token';
import api from '../../config/axios';
import CourseDetailsHeader from '../../components/ViewCourseDetails/CourseDetailsHeader';

const ViewCourseDetail = () => {
    const [courseDetail, setCourseDetail] = useState({});
    const { maKhoaHoc } = useParams();
    const [relatedCourses, setRelatedCourses] = useState([]);

    const fetchCourseDetail = async () => {
        console.log('maKhoaHoc:', maKhoaHoc);
        try {
            const res = await api.get(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`, {
                headers: {
                    TokenCybersoft: TOKEN,
                },
            });

            // Kiểm tra dữ liệu nhận được từ API
            console.log('Data from API:', res.data);

            // Cập nhật lại state courseDetail với dữ liệu mới từ API
            setCourseDetail(res.data); // Đảm bảo rằng res.data.content chứa dữ liệu bạn muốn cập nhật

            if (res.data && res.data.danhMucKhoaHoc && res.data.danhMucKhoaHoc.maDanhMucKhoahoc) {
                const resRelated = await api.get(
                    `QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${res.data.danhMucKhoaHoc.maDanhMucKhoahoc}&MaNhom=GP01`,
                    {
                        headers: {
                            TokenCybersoft: TOKEN,
                        },
                    }
                );
                if (resRelated && resRelated.status === 200 && resRelated.data) {
                    setRelatedCourses(resRelated.data);
                    console.log(relatedCourses);
                }
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchCourseDetail();
    }, [maKhoaHoc]);

    return (
        <>
            <CourseDetailsHeader />
            <div className="course container pt-5">
                <div className="container">
                    <div className="row">
                        {/* <!-- Course --> */}
                        <div className="col-lg-8">
                            <div className="course_container">
                                <div className="course_title">
                                    {courseDetail !== undefined ? <>{courseDetail.tenKhoaHoc}</> : <></>}
                                </div>
                                <div className="course_info d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
                                    {/* <!-- Course Info Item --> */}
                                    <div className="course_info_item">
                                        <div className="course_info_title">Teacher:</div>
                                        <div className="course_info_text">
                                            <NavLink to="#">{courseDetail?.nguoiTao?.hoTen}</NavLink>
                                        </div>
                                    </div>

                                    {/* <!-- Course Info Item --> */}
                                    <div className="course_info_item">
                                        <div className="course_info_title">Reviews:</div>
                                        <div className="rating_r rating_r_4">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-alt"></i>
                                        </div>
                                    </div>

                                    {/* <!-- Course Info Item --> */}
                                    <div className="course_info_item">
                                        <div className="course_info_title">Categories:</div>
                                        <div className="course_info_text">
                                            <NavLink href="#">{courseDetail?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}</NavLink>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Course Image --> */}
                                <div className="course_image">
                                    <img src={courseDetail.hinhAnh} alt="" />
                                </div>

                                <CourseDetailsTab courseDetail={courseDetail} />
                            </div>
                        </div>

                        <SideBar courseDetail={courseDetail} relatedCourses={relatedCourses} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewCourseDetail;