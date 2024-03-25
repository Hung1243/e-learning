import React, { useEffect, useState } from "react";

import { Button, Space, Table, Tag } from "antd";
import api from "../../../config/axios";

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
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button danger type="primary">
          Hủy
        </Button>
      </Space>
    ),
  },
];

const Enrolled = ({ taiKhoan }) => {
  const [courses, setCourses] = useState([]);

  const fetchApprovedCourses = async () => {
    try {
      const accessToken = localStorage.getItem("AccessToken");
      const response = await api.post(
        "QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet",
        { TaiKhoan: taiKhoan.taiKhoan }
      );
      setCourses(
        response.data.map((course, index) => ({
          key: index.toString(),
          maKhoaHoc: course.maKhoaHoc,
          tenKhoaHoc: course.tenKhoaHoc,
        }))
      );
    } catch (error) {
      console.error("Failed to fetch approved courses", error);
    }
  };

  useEffect(() => {
    if (taiKhoan) {
      fetchApprovedCourses();
    }
  }, [taiKhoan]);

  return (
    <div>
      <h3 className="mb-2">Khóa học đã ghi danh </h3>
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

export default Enrolled;
