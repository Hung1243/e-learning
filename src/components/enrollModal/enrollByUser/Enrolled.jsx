import React, { useEffect, useState } from "react";

import { Button, Space, Table, Tag } from "antd";
import api from "../../../config/axios";
import { toast } from "react-toastify";

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

  const unenrollCourse = async (maKhoaHoc) => {
    try {
      const response = await api.post("QuanLyKhoaHoc/HuyGhiDanh", {
        taiKhoan: taiKhoan.taiKhoan,
        maKhoaHoc: maKhoaHoc,
      });
      console.log("Unenrollment successful", response.data);
      toast.success("Hủy ghi danh thành công!");
      fetchApprovedCourses();
    } catch (error) {
      console.error("Unenrollment failed", error);
      toast.error("Hủy ghi danh thất bại, vui lòng thử lại!");
    }
  };

  useEffect(() => {
    if (taiKhoan) {
      fetchApprovedCourses();
    }
  }, [taiKhoan]);

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
          <Button
            danger
            type="primary"
            onClick={() => unenrollCourse(record.maKhoaHoc)}
          >
            Hủy
          </Button>
        </Space>
      ),
    },
  ];
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
