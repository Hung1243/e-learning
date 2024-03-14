import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Table,
  Tag,
} from "antd";
import api from "../../config/axios";
import { toast } from "react-toastify";
import { useForm } from "antd/es/form/Form";
const columns = [
  {
    title: "STT",
    dataIndex: "index",
    key: "index",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Tài khoản",
    dataIndex: "taiKhoan",
    key: "taiKhoan",
  },
  {
    title: "Mật khẩu",
    dataIndex: "matKhau",
    key: "matKhau",
  },
  {
    title: "Họ và tên",
    dataIndex: "hoTen",
    key: "hoTen",
  },
  {
    title: "SĐT",
    dataIndex: "soDt",
    key: "soDt",
  },
  {
    title: "Role",
    dataIndex: "tenLoaiNguoiDung",
    key: "tenLoaiNguoiDung",
  },

  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Ghi danh</a>
        <a>Hủy</a>
      </Space>
    ),
  },
];

const UserManagement = () => {
  const [listUser, setListUser] = useState([]);
  const [open, setOpen] = useState(false);
  const form = useForm();
  const [formData, setFormData] = useState({});
  const getListUserApi = async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NyIsIkhldEhhblN0cmluZyI6IjI5LzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxOTYxOTIwMDAwMCIsIm5iZiI6MTY4ODkyMjAwMCwiZXhwIjoxNzE5NzY2ODAwfQ.9MKEqdjyd8nN84l6J6hg-XfkLpmaY_aBPozV_TXxusM"; // Thay 'YOUR_CYBERSOFT_TOKEN' bằng token của bạn
    const res = await api.get("/QuanLyNguoiDung/TimKiemNguoiDung", {
      params: {
        MaNhom: "GP01",
      },
      headers: {
        TokenCybersoft: token,
      },
    });
    setListUser(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    getListUserApi();
  }, []);

  const createUser = async (values) => {
    try {
      const accessToken =
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTIzNCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkdWIiwibmJmIjoxNzEwMzUxMTE1LCJleHAiOjE3MTAzNTQ3MTV9.JwQt3TPo6JES00cB6kcM86RRJJ7cjRXjllUo7ZZHL4E";
      const cyberSoftToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NyIsIkhldEhhblN0cmluZyI6IjI5LzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxOTYxOTIwMDAwMCIsIm5iZiI6MTY4ODkyMjAwMCwiZXhwIjoxNzE5NzY2ODAwfQ.9MKEqdjyd8nN84l6J6hg-XfkLpmaY_aBPozV_TXxus";

      const response = await api.post(
        "/QuanLyNguoiDung/ThemNguoiDung",
        {
          ...formData,
        },
        {
          headers: {
            Authorization: accessToken,
            TokenCybersoft: cyberSoftToken,
          },
        }
      );
      if (response.status === 200) {
        toast.success("Tạo người dùng thành công");
      }
      return response;
    } catch (error) {
      console.error(error);
      toast.error("Tạo người dùng thất bại");
    }
  };

  const data = listUser.map((user, index) => ({
    ...user,
    key: index,
  }));

  return (
    <div>
      <Space>
        {" "}
        <Button
          onClick={() => {
            setOpen(true);
          }}
        >
          + Thêm
        </Button>
      </Space>
      <Table pagination={{ pageSize: 7 }} columns={columns} dataSource={data} />
      <Modal
        title="Tạo mới người dùng"
        centered
        visible={open}
        onOk={createUser}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <Form
          onValuesChange={(changedValues, allValues) => {
            setFormData(allValues);
          }}
        >
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label="Tài khoản"
                fieldKey="taiKhoan" // Thay name bằng fieldKey
                rules={[{ required: true, message: "Vui lòng nhập tài khoản" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Mật khẩu"
                fieldKey="matKhau" // Thay name bằng fieldKey
                rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="Họ và tên"
                fieldKey="hoTen" // Thay name bằng fieldKey
                rules={[{ required: true, message: "Vui lòng nhập họ và tên" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Số điện thoại"
                fieldKey="soDT" // Thay name bằng fieldKey
                rules={[
                  { required: true, message: "Vui lòng nhập số điện thoại" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Mã loại người dùng"
                fieldKey="maLoaiNguoiDung" // Thay name bằng fieldKey
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn mã loại người dùng",
                  },
                ]}
              >
                <Select>
                  <Select.Option value="HV">HV</Select.Option>
                  <Select.Option value="GV">GV</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Mã nhóm"
                fieldKey="maNhom" // Thay name bằng fieldKey
                rules={[{ required: true, message: "Vui lòng nhập mã nhóm" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                fieldKey="email" // Thay name bằng fieldKey
                rules={[{ required: true, message: "Vui lòng nhập email" }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default UserManagement;
