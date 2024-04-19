import { Button, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import Approve from "./Approve";
import Accepted from "./Accepted";
import api from "../../../config/axios";
import { toast } from "react-toastify";

const EnrollByCourse = ({ course, open, setOpen }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState();

  const fetchUsers = async () => {
    try {
      const response = await api.post(
        "QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh",
        {
          maKhoaHoc: course.maKhoaHoc,
        }
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Failed to fetch users", error);
      toast.error("Failed to fetch users");
    }
  };

  useEffect(() => {
    if (course && open) {
      fetchUsers();
    }
  }, [course, open]);

  const handleChange = (value) => {
    setSelectedUser(value);
  };

  const handleEnroll = async () => {
    if (!selectedUser || !course) return;
    try {
      const response = await api.post("QuanLyKhoaHoc/GhiDanhKhoaHoc", {
        maKhoaHoc: course.maKhoaHoc,
        taiKhoan: selectedUser,
      });
      if (response.data) {
        toast.success("Enrollment successful");
        fetchUsers();
        setSelectedUser(null);
      }
    } catch (error) {
      console.error("Enrollment failed", error);
      toast.error("Enrollment failed");
    }
  };

  return (
    <>
      <Button
        type="primary"
        style={{ background: "#0d6efd" }}
        onClick={() => setOpen(true)}
      >
        Ghi danh
      </Button>
      <Modal
        title="Chọn khóa học"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={900}
      >
        <div className="select">
          <Select
            style={{ width: "80%" }}
            showSearch
            placeholder="Select a user"
            optionFilterProp="children"
            onChange={handleChange}
            value={selectedUser}
            allowClear
          >
            {users.map((user) => (
              <Select.Option key={user.taiKhoan} value={user.taiKhoan}>
                {user.hoTen} - {user.taiKhoan}
              </Select.Option>
            ))}
          </Select>
          <Button
            type="primary"
            style={{ marginLeft: "10px" }}
            onClick={handleEnroll}
            disabled={!selectedUser}
          >
            Ghi danh
          </Button>
          <hr className="mt-2" />
        </div>
        <div className="confirm mt-2">
          <Approve course={course} />
        </div>
        <hr />
        <div className="enrolled mt-2">
          <Accepted course={course} />
        </div>
      </Modal>
    </>
  );
};

export default EnrollByCourse;
