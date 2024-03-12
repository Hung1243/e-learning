import React, { useEffect, useState } from "react";

// import { coursesCard } from "../../dummydata";
import OnlineCourses from "../../../components/allcourses/OnlineCourses";

import { Space } from "antd";
import Heading from "../../../components/common/heading/Heading";

const HAbout = ({ coursesData }) => {
  const [validCourses, setValidCourses] = useState(coursesData);

  const handleError = (errorCourseId) => {
    setValidCourses(
      validCourses.filter((course) => course.id !== errorCourseId)
    );
  };

  return (
    <>
      <section className="homeAbout">
        <OnlineCourses coursesData={coursesData} />
        <div className="container">
          <Heading
            subtitle="our courses"
            title="explore our popular online courses"
          />

          <div className="coursesCard">
            {/* copy code form  coursesCard */}
            <div className="grid2">
              {coursesData.slice(65, 71).map((val) => {
                return (
                  <div className="items" key={val.id}>
                    <div className="content flex">
                      <div className="left">
                        <img
                          src={val.hinhAnh}
                          // onerror={(this.onerror = null)}
                          alt=""
                          style={{
                            width: "80px",
                            height: "80px",
                            borderRadius: "50%",
                          }}
                        />
                      </div>
                      <div className="text">
                        <h1>{val.tenKhoaHoc}</h1>
                        <div className="rate">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <label htmlFor="">(5.0)</label>
                        </div>
                        <div className="details">
                          <div className="box">
                            <Space align="baseline">
                              {/* <div className="para d-flex "> */}

                              <h5>Lecture: {val.nguoiTao.hoTen}</h5>
                              {/* </div> */}
                            </Space>
                          </div>
                          <span>
                            {" "}
                            <i class="fa fa-users "></i> {val.luotXem}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button className="outline-btn">ENROLL NOW !</button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HAbout;
