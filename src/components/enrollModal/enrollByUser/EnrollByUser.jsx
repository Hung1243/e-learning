import { Button, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import Confirm from "./Confirm";
import Enrolled from "./Enrolled";
import api from "../../../config/axios";
import { TOKEN } from "../../../redux/token";
import { toast } from "react-toastify";

const EnrollByUser = ({ taiKhoan, open, setOpen }) => {
  // const [open, setOpen] = useState(false);
  const [selectCourse, setSelectCourse] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const onChange = (value) => {
    setSelectedCourse(value);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const getCourseApi = async (values) => {
    const accessToken = localStorage.getItem("AccessToken");

    const res = await api.post(
      `QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${taiKhoan.taiKhoan}`
    );
    setSelectCourse(
      res.data.map((course) => ({
        value: course.maKhoaHoc,
        label: course.tenKhoaHoc,
      }))
    );
  };
  useEffect(() => {
    if (open) {
      getCourseApi();
    }
  }, [taiKhoan, open]);

  const handleEnroll = async () => {
    if (!selectedCourse) {
      toast.warning("Please select a course to enroll!");
      return;
    }

    const accessToken = localStorage.getItem("AccessToken");
    try {
      await api.post(
        `QuanLyKhoaHoc/GhiDanhKhoaHoc`,
        {
          maKhoaHoc: selectedCourse,
          taiKhoan: taiKhoan.taiKhoan,
        }
        // {
        //   headers: {
        //     Authorization: `Bearer ${accessToken}`,
        //     ...TOKEN.headers,
        //   },
        // }
      );
      toast.success("Successfully enrolled in the course!");
      setSelectedCourse(null); // Reset selected course
      // getCourseApi(); // Refresh the course list
      this.props.refreshCourses();
    } catch (error) {
      console.error("Enrollment failed", error);
      toast.error("Enrollment failed. Please try again.");
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
            placeholder="Select a course"
            optionFilterProp="children"
            onChange={onChange}
            value={selectedCourse}
            allowClear
          >
            {selectCourse.map((course) => (
              <Select.Option key={course.value} value={course.value}>
                {course.label}
              </Select.Option>
            ))}
          </Select>
          <Button
            type="primary"
            style={{ background: "#0d6efd", marginLeft: "10px" }}
            onClick={handleEnroll}
            disabled={!selectedCourse}
          >
            Ghi danh
          </Button>
          <hr className="mt-2" />
        </div>
        <div className="confirm mt-2">
          <Confirm taiKhoan={taiKhoan} />
        </div>
        <hr />
        <div className="enrolled mt-2">
          <Enrolled taiKhoan={taiKhoan} />
        </div>
      </Modal>
    </>
  );
};

export default EnrollByUser;
