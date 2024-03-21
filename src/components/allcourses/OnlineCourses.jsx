import React, { useEffect, useState } from "react";
import "./courses.css";
import Heading from "../common/heading/Heading";
import { TOKEN } from "../../redux/token";
// import { online } from "../../dummydata";
import api from '../../config/axios'
import { Link, NavLink } from "react-router-dom";

const OnlineCourses = ({ coursesData }) => {
  const [category, setCategory] = useState([])
  const getListCategory = async () => {
    try {
      const res = await api.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc", {
        headers: {
          TokenCybersoft: TOKEN,
        },
      });
      setCategory(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    getListCategory()
  }, [])
  return (
    <>
      <section className="online">
        <div className="container">
          <Heading subtitle="Categories" title="Browse Our Categories" />
          <div className="content grid3">
            {category.map((val) => {
              return (
                <NavLink to={`course/category/${val.maDanhMuc}`}>
                  <div className="box">
                    <div className="img">
                      <i class="fa fa-code text-center p-4" style={{}}></i>
                    </div>
                    <Link to={`course/category/${val.maDanhMuc}`}>

                      <h1>{val.maDanhMuc}</h1>
                      <span>{val.tenDanhMuc}</span>
                    </Link>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;
