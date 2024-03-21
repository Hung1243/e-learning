import { Button, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import Confirm from "./Confirm";
import Enrolled from "./Enrolled";
import api from "../../../config/axios";

const EnrollByUser = ({ taiKhoan }) => {
  const [open, setOpen] = useState(false);
  const [selectCourse, setSelectCourse] = useState([]);

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const getCourseApi = async (values) => {
    const accessToken = localStorage.getItem("AccessToken");

    const headers = {
      TokenCybersoft:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NyIsIkhldEhhblN0cmluZyI6IjI5LzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxOTYxOTIwMDAwMCIsIm5iZiI6MTY4ODkyMjAwMCwiZXhwIjoxNzE5NzY2ODAwfQ.9MKEqdjyd8nN84l6J6hg-XfkLpmaY_aBPozV_TXxusM",
      Authorization: "Bearer " + accessToken,
    };
    const res = await api.post(
      `QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${taiKhoan}`,
      {
        ...values,
        taiKhoan: taiKhoan,
      },
      {
        headers: headers,
      }
    );
    setSelectCourse(
      res.data.map((course) => ({
        value: course.maKhoaHoc,
        label: course.tenKhoaHoc,
      }))
    );
  };

  useEffect(() => {
    if (taiKhoan) {
      getCourseApi();
    }
  }, [taiKhoan]);
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
        width={1000}
      >
        <div className="select">
          <Select
            style={{ width: "80%" }}
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={filterOption}
            options={selectCourse}
          />
          <Button type="primary" style={{ background: "#0d6efd" }}>
            ghi danh
          </Button>
          <hr className="mt-3" />
        </div>
        <div className="confirm mt-3">
          <Confirm />
        </div>
        <hr />
        <div className="enrolled mt-3">
          <Enrolled />
        </div>
      </Modal>
    </>
  );
};

export default EnrollByUser;
