import React, { useEffect, useState } from "react";

import { Button, Space, Table, Tag } from "antd";
import api from "../../../config/axios";

const Confirm = ({ taiKhoan }) => {
  const [courses, setCourses] = useState([]);
  const columns = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
      render: (text, record, index) => `${index + 1}`,
    },
    {
      title: "Course",
      dataIndex: "maKhoaHoc",
      key: "maKhoaHoc",
    },
    {
      title: "Confirm",
      key: "action",

      render: (_, record) => (
        <Space size="middle" align="start">
          <Button type="primary" style={{ background: "#0d6efd" }}>
            Ghi danh
          </Button>
          <Button danger type="primary">
            Hủy
          </Button>
        </Space>
      ),
    },
  ];

  const fetchCourses = async () => {
    try {
      const accessToken = localStorage.getItem("AccessToken");
      const response = await api.post(
        "QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet",
        { TaiKhoan: taiKhoan.taiKhoan }
      );
      setCourses(
        response.data.map((course, index) => ({
          key: index,
          maKhoaHoc: course.maKhoaHoc,
          tenKhoaHoc: course.tenKhoaHoc,
        }))
      );
    } catch (error) {
      console.error("Failed to fetch courses", error);
    }
  };

  useEffect(() => {
    if (taiKhoan) {
      fetchCourses();
    }
  }, [taiKhoan]);


  return (
    <div>
      <h3>Khóa học chờ xác thực </h3>
      <Table
        pagination={{
          pageSize: 2,
        }}
        columns={columns}
        dataSource={courses}
        rowKey={(record) => record.key}
      />
    </div>
  );
};

export default Confirm;
