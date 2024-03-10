import React from "react";
import "./courses.css";
import Heading from "../common/heading/Heading";
// import { online } from "../../dummydata";

const OnlineCourses = ({ coursesData }) => {
  return (
    <>
      <section className="online">
        <div className="container">
          <Heading subtitle="Categories" title="Browse Our Categories" />
          <div className="content grid3">
            {coursesData.slice(0, 6).map((val) => {
              return (
                <div className="box">
                  <div className="img">
                    <i class="fa fa-code text-center p-4" style={{}}></i>
                  </div>
                  <h1>{val.danhMucKhoaHoc.maDanhMucKhoahoc}</h1>
                  <span>{val.danhMucKhoaHoc.tenDanhMucKhoaHoc}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
