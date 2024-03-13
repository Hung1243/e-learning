import React, { useEffect, useState } from "react";
import Hero from "./hero/Hero";
import HAbout from "./HAbout";
// import Hblog from "./home/Hblog";

import api from "../../../config/axios";


const Home = () => {
  const [arrCourse, setArrCourse] = useState([]);
  const getListCourse = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NyIsIkhldEhhblN0cmluZyI6IjI5LzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxOTYxOTIwMDAwMCIsIm5iZiI6MTY4ODkyMjAwMCwiZXhwIjoxNzE5NzY2ODAwfQ.9MKEqdjyd8nN84l6J6hg-XfkLpmaY_aBPozV_TXxusM"; // Thay 'YOUR_CYBERSOFT_TOKEN' bằng token của bạn
      const res = await api.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc", {
        params: {
          MaNhom: "GP01",
        },
        headers: {
          TokenCybersoft: token,
        },
      });
      setArrCourse(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getListCourse();
  }, []);

  return (
    <div className="mb-3">
      <Hero />
      <HAbout coursesData={arrCourse} />
    </div>
  );
};

export default Home;
