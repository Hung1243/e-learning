import { Button, Col, Row, Space, Table } from "antd";
import Search from "antd/es/input/Search";
import React, { useEffect, useState } from "react";
import api from "../../../config/axios";
import { toast } from "react-toastify";

const Accepted = ({ course }) => {
  const [user, setUser] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const lowercasedValue = searchValue.toLowerCase();
    const filteredData = user.filter(
      (user) =>
        user.hoTen.toLowerCase().includes(lowercasedValue) ||
        user.taiKhoan.toLowerCase().includes(lowercasedValue)
    );
    setFilteredUsers(filteredData);
  }, [searchValue, user]);

  const columns = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
      render: (text, record, index) => `${index + 1}`,
    },
    {
      title: "User Name",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Account",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Confirm",
      key: "action",
      render: (_, record) => (
        <Space size="middle" align="start">
          <Button
            danger
            type="primary"
            onClick={() => handleReject(record.taiKhoan)}
          >
            Reject
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    if (course && course.maKhoaHoc) {
      getListUser();
    }
  }, [course]);

  const getListUser = async () => {
    try {
      const response = await api.post(
        "QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc",
        {
          maKhoaHoc: course.maKhoaHoc,
        }
      );
      const formattedUsers = response.data.map((user, index) => ({
        ...user,
        key: user.taiKhoan,
        index,
      }));
      setUser(formattedUsers);
      setFilteredUsers(formattedUsers);
    } catch (error) {
      console.error("Failed to fetch users awaiting approval", error);
      toast.error("Failed to fetch users awaiting approval");
    }
  };

  const handleReject = async (taiKhoan) => {
    try {
      const response = await api.post("QuanLyKhoaHoc/HuyGhiDanh", {
        maKhoaHoc: course.maKhoaHoc,
        taiKhoan,
      });
      if (response.data) {
        toast.success(
          `User ${taiKhoan} enrollment request rejected successfully`
        );
        getListUser(); // Refresh the list
      }
    } catch (error) {
      console.error("Rejection failed", error);
      toast.error("Rejection failed. Please try again.");
    }
  };

  const onSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <div id="approve">
      <div className="header">
        <Row gutter={24} justify={"space-between"}>
          <Col span={12}>
            <h5>Students participated</h5>
          </Col>
          <Col span={12}>
            <Search
              placeholder="Search..."
              allowClear
              style={{ width: 200 }}
              onSearch={onSearch}
            />
          </Col>
        </Row>
      </div>
      <div className="approve-table">
        <Table
          pagination={{ pageSize: 3 }}
          columns={columns}
          dataSource={filteredUsers}
        />
      </div>
    </div>
  );
};

export default Accepted;
