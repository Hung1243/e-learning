import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Pagination } from "antd";
import CourseHome from "../../components/allcourses/CourseHome";

const ViewCourse = () => {
  const [arrCourse, setArrCourse] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 8;

  const getCourseApi = async (page = 1) => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NyIsIkhldEhhblN0cmluZyI6IjE1LzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxODQwOTYwMDAwMCIsIm5iZiI6MTY4ODkyMjAwMCwiZXhwIjoxNzE4NTU3MjAwfQ.vY7VplGBpsG599RYLEeMeajQNALOV5QUJ2dGV6Ow_q4";
      const res = await axios.get(
        "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc",
        {
          // params: {
          //   MaNhom: "GPO1",
          // },
          headers: {
            TokenCybersoft: token,
          },
        }
      );

      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const slicedData = res.data.slice(startIndex, endIndex);

      setArrCourse(slicedData);
      setTotalItems(res.data.length);
      console.log(slicedData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getCourseApi();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    getCourseApi(page);
  };

  return (
    <>
      <CourseHome />
      <section className="courses bg-[#F3F4F8] py-16 ">
        <div className="w-4/5 m-auto">
          <div className="heading mb-16">
            <h1 className="text-3xl font-semibold text-black">
              Find The Right <br />
              Online Course For You
            </h1>
            <span className="text-sm mt-2 block text-capitalize">
              you don't have to struggle alone, you've got our assistance and
              help.
            </span>
          </div>
          <div className="grid grid-cols-3 gap-8 md:grid-cols-1">
            {arrCourse.map((item) => (
              <div className="box rounded-lg shadow-shadow1 bg-white">
                <div className="images rounded-t-lg relative overflow-hidden h-40 w-ful">
                  <img
                    src={item.hinhAnh}
                    alt=""
                    className="rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300"
                  />
                  <div className="categ flex gap-4 absolute top-0 m-3">
                    {/* <span className="text-[14px] bg-blue-700 p-1 px-3 text-white rounded-[5px] shadow-md">
                    {item.danhMucKhoaHoc.maDanhMucKhoahoc}
                  </span> */}
                    <span className="text-[14px] bg-pink-700 p-1 px-3 text-white rounded-[5px] shadow-md">
                      {item.danhMucKhoaHoc.tenDanhMucKhoaHoc}
                    </span>
                  </div>
                </div>
                <div className="text p-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <FaBook />
                      <span className="text-[14px] ml-2"> 10 lessons</span>
                    </div>
                    <div className="flex items-center">
                      <AiFillStar className="text-orange-500" />
                      <span className="text-[14px] ml-2"> 4.50(1k+)</span>
                    </div>
                  </div>
                  <h3 className="text-black mt-4 font-medium h-8">
                    {item.tenKhoaHoc}
                  </h3>
                  <p className="mb-4 line-clamp-1">{item.moTa}</p>
                  <div className="user flex items-center">
                    <img
                      className="rounded-full w-[50px]"
                      src={`https://api.multiavatar.com/${item.luotXem}.png`}
                      alt={item.nguoiTao.hoTen}
                    />
                    <span className="text-[14px] ml-2">
                      {" "}
                      {item.nguoiTao.hoTen}
                    </span>
                  </div>
                </div>
                <div
                  to="/"
                  className="flex items-center justify-between border-t border-gray-200 p-3"
                >
                  <span className="text-sm text-primary">400,000</span>
                  <NavLink to={`/course/${item.maKhoaHoc}`} className="text-[14px] ml-2 flex items-center">
                    Know Details <HiOutlineArrowNarrowRight />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
          <div className="pagination-container mt-8 flex justify-center">
            <Pagination
              current={currentPage}
              pageSize={itemsPerPage}
              total={totalItems}
              onChange={handlePageChange}

            />
          </div>
        </div>

      </section>
    </>
  );
};

export default ViewCourse;
