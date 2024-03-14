import React, { useEffect, useState } from "react";
import SideBar from "../../components/ViewCourseDetails/SideBar";
import CourseDetailsTab from "../../components/ViewCourseDetails/CourseDetailsTab";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const ViewCourseDetail = () => {
  const [courseDetail, setCourseDetail] = useState({});
  const params = useParams();

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NyIsIkhldEhhblN0cmluZyI6IjI5LzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxOTYxOTIwMDAwMCIsIm5iZiI6MTY4ODkyMjAwMCwiZXhwIjoxNzE5NzY2ODAwfQ.9MKEqdjyd8nN84l6J6hg-XfkLpmaY_aBPozV_TXxusM";

  const fetchCourseDetail = async () => {
    console.log("maKhoaHoc:", params.maKhoaHoc);
    try {
      const res = await axios.get(`https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${params.maKhoaHoc}`, {
        headers: {
          TokenCybersoft: token,
        },
      });

      setCourseDetail(res.data.content);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchCourseDetail();
  }, [params.maKhoaHoc]);


  return (
    <div className="course container">
      <div className="container">
        <div className="row">
          {/* <!-- Course --> */}
          <div className="col-lg-8">
            {courseDetail && (
              <div className="course_container">
                <div className="course_title">LẬP TRÌNH NODEJS {courseDetail.tenKhoaHoc}</div>
                <div className="course_info d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
                  {/* <!-- Course Info Item --> */}
                  <div className="course_info_item">
                    <div className="course_info_title">Teacher:</div>
                    <div className="course_info_text">
                      <NavLink to="#">DuyNguyen {courseDetail.nguoiTao?.hoTen}</NavLink>
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
                      <NavLink href="#">LẬP TRÌNH BACKEND</NavLink>
                    </div>
                  </div>
                </div>

                {/* <!-- Course Image --> */}
                <div className="course_image">
                  <img src='https://elearningnew.cybersoft.edu.vn/hinhanh/lap-trinh-nodejs.png' alt="..." />
                  <img src={courseDetail.hinhAnh} alt="" />
                </div>

                <CourseDetailsTab />

              </div>
            )}
          </div>

          <SideBar />

        </div>
      </div>
    </div>
  );
};

export default ViewCourseDetail;
