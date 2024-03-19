import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Flex,
  Form,
  Input,
  Modal,
  Popconfirm,
  Row,
  Select,
  Table,
  Upload,
} from "antd";
import { useForm } from "antd/es/form/Form";
import api from "../../config/axios";
import { toast } from "react-toastify";
// import { PlusOutlined } from "@ant-design/icons";
const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};
const columns = [
  {
    title: "Tài khoản",
    dataIndex: "taiKhoan",
    fixed: "left",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Tên",
    dataIndex: "hoTen",
    fixed: "left",
  },
  {
    title: "Số điện thoại",
    dataIndex: "soDt",
  },
  {
    title: "Vai trò",
    dataIndex: "tenLoaiNguoiDung",
  },
  {
    title: " Edit",
    fixed: "right",
    render: () => (
      <Button type="primary" danger>
        Sửa
      </Button>
    ),
  },
  {
    title: "Delete",
    render: () => (
      // <Popconfirm
      //   title="Are you sure you want to delete this account?"
      //   onConfirm={() => handleDelete(record.id)}
      //   onCancel={() => console.log("Cancel")}
      // >
      <Button type="primary" danger>
        Xóa
      </Button>
      // </Popconfirm>
    ),
  },
];

const UserManagement = () => {
  const [open, setOpen] = useState(false);
  const [listAccount, setListAccount] = useState([]);
  const getAccount = async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NyIsIkhldEhhblN0cmluZyI6IjI5LzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxOTYxOTIwMDAwMCIsIm5iZiI6MTY4ODkyMjAwMCwiZXhwIjoxNzE5NzY2ODAwfQ.9MKEqdjyd8nN84l6J6hg-XfkLpmaY_aBPozV_TXxusM";

    const res = await api.get("QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01", {
      headers: {
        TokenCybersoft: token,
      },
    });
    setListAccount(res.data);
  };
  useEffect(() => {
    getAccount();
  }, []);
  const data = listAccount?.map((item) => {
    return {
      key: item.id,
      email: item.email,
      // avatar: item.avatar,
      taiKhoan: item.taiKhoan,
      hoTen: item.hoTen,
      soDt: item.soDt,
      tenLoaiNguoiDung: item.tenLoaiNguoiDung,
    };
  });
  const [form] = useForm();
  const createAccount = async (values) => {
    const accessToken = localStorage.getItem("AccessToken");

    const headers = {
      TokenCybersoft:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NyIsIkhldEhhblN0cmluZyI6IjI5LzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxOTYxOTIwMDAwMCIsIm5iZiI6MTY4ODkyMjAwMCwiZXhwIjoxNzE5NzY2ODAwfQ.9MKEqdjyd8nN84l6J6hg-XfkLpmaY_aBPozV_TXxusM",
      Authorization: "Bearer " + accessToken,
    };
    const res = await api.post("QuanLyNguoiDung/ThemNguoiDung", values, {
      headers: headers,
    });
    form.resetFields();
    setOpen(false);
    toast.success("Đã thêm thành công");
    getAccount();
  };
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <div className="p-0">
      <Flex gap="small" wrap="wrap">
        <Button
          type="primary"
          onClick={() => setOpen(true)}
          className="bg bg-primary mb-3"
        >
          + Thêm
        </Button>
      </Flex>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{
          x: 1200,
        }}
        pagination={{
          pageSize: 4,
        }}
        bordered
      />
      <Modal
        title="Thêm người dùng"
        centered
        open={open}
        onOk={() => form.submit()}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <Form form={form} labelCol={{ span: 24 }} onFinish={createAccount}>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                name="taiKhoan"
                label="Tài khoản"
                rules={[{ required: true, message: "Không được để trống" }]}
              >
                <Input />
              </Form.Item>
            </Col>{" "}
            <Col span={12}>
              {" "}
              <Form.Item
                name="matKhau"
                label="Mật khẩu"
                rules={[{ required: true, message: "Không được để trống" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              {" "}
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: "Không được để trống" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              {" "}
              <Form.Item
                name="hoTen"
                label="Họ và tên"
                rules={[{ required: true, message: "Không được để trống" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              {" "}
              <Form.Item
                name="maNhom"
                label="Mã nhóm"
                rules={[{ required: true, message: "Không được để trống" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              {" "}
              <Form.Item
                name="soDT"
                label="Số điện thoại"
                rules={[{ required: true, message: "Không được để trống" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              {" "}
              <Form.Item
                name="maLoaiNguoiDung"
                label="Giáo vụ"
                rules={[{ required: true, message: "Không được để trống" }]}
              >
                <Select
                  showSearch
                  placeholder="Select a role"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={filterOption}
                  options={[
                    {
                      value: "HV",
                      label: "Học viên",
                    },
                    {
                      value: "GV",
                      label: "Giáo viên",
                    },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default UserManagement;
