import React, { useEffect, useState } from "react";
import Hero from "./hero/Hero";
import HAbout from "./HAbout";
// import Hblog from "./home/Hblog";

import api from "../../../config/axios";
import { TOKEN } from "../../../redux/token";

const Home = () => {
  const [arrCourse, setArrCourse] = useState([]);
  const getListCourse = async () => {
    try { // Thay 'YOUR_CYBERSOFT_TOKEN' bằng token của bạn
      const res = await api.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc", {
        params: {
          MaNhom: "GP01",
        },
        headers: {
          TokenCybersoft: TOKEN,
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
