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
  Space,
  Table,
  Upload,
} from "antd";
import { useForm } from "antd/es/form/Form";
import api from "../../config/axios";
import { toast } from "react-toastify";
import EnrollByUser from "../../components/enrollModal/enrollByUser/EnrollByUser";
import Confirm from "../../components/enrollModal/enrollByUser/Confirm";
// import { PlusOutlined } from "@ant-design/icons";
const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};

const UserManagement = () => {
  const [open, setOpen] = useState(false);
  const [listAccount, setListAccount] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false); // Thêm state để xác định chế độ chỉnh sửa
  const [openModal, setOpenModal] = useState(false);
  const [taiKhoan, setTaiKhoan] = useState();
  const [key, setKey] = useState(0);
  const getAccount = async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NyIsIkhldEhhblN0cmluZyI6IjI5LzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxOTYxOTIwMDAwMCIsIm5iZiI6MTY4ODkyMjAwMCwiZXhwIjoxNzE5NzY2ODAwfQ.9MKEqdjyd8nN84l6J6hg-XfkLpmaY_aBPozV_TXxusM";

    const res = await api.get("QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01", {
      headers: {
        TokenCybersoft: token,
      },
    });
    setListAccount(res.data);
    console.log(res.data);
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
      matKhau: item.matKhau,
      soDt: item.soDt,
      // maNhom: item.maNhom,
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

  const handleEdit = (user) => {
    setSelectedUser(user);
    setOpen(true);
    setIsEditMode(true);
    form.setFieldsValue({
      taiKhoan: user.taiKhoan,
      matKhau: user.matKhau,
      email: user.email,
      hoTen: user.hoTen,
      maNhom: user.maNhom,
      soDT: user.soDT,
      maLoaiNguoiDung: user.maLoaiNguoiDung,
    });
  };
  const handleSave = async (values) => {
    const accessToken = localStorage.getItem("AccessToken");

    const headers = {
      TokenCybersoft:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NyIsIkhldEhhblN0cmluZyI6IjI5LzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxOTYxOTIwMDAwMCIsIm5iZiI6MTY4ODkyMjAwMCwiZXhwIjoxNzE5NzY2ODAwfQ.9MKEqdjyd8nN84l6J6hg-XfkLpmaY_aBPozV_TXxusM",
      Authorization: "Bearer " + accessToken,
    };

    try {
      // Thực hiện cập nhật thông tin người dùng với tài khoản được truyền từ form values
      await api.put(`QuanLyNguoiDung/CapNhatThongTinNguoiDung`, values, {
        headers: headers,
      });
      toast.success("Đã cập nhật thông tin thành công");
      setOpen(false);
      getAccount(); // Cập nhật lại danh sách người dùng sau khi cập nhật thành công
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Có lỗi xảy ra khi cập nhật thông tin người dùng");
    }
  };

  useEffect(() => {
    console.log("Modal state changed:", openModal);
  }, [openModal]);

  const refreshCourses = () => {
    setKey((prevKey) => prevKey + 1); // Change key to re-render child components
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
      title: "Mật khẩu",
      dataIndex: "matKhau",
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
      title: " Ghi Danh",
      fixed: "right",
      render: (text, record) => (
        <>
          <Button
            type="primary"
            style={{ background: "#0d6efd" }}
            onClick={() => {
              setOpenModal(true);
              setTaiKhoan(record);
              console.log("123");
            }}
          >
            Ghi danh
          </Button>
        </>
      ),
    },
    {
      title: " Action",
      fixed: "right",
      render: (_, record) => (
        <Space>
          {" "}
          <Button
            type="primary"
            style={{ background: "#0d6efd" }}
            onClick={() => handleEdit(record)}
          >
            Sửa
          </Button>
          <Button type="primary" danger>
            Xóa
          </Button>
        </Space>
      ),
    },
    // {
    //   title: "Delete",
    //   render: () => (

    //   ),
    // },
  ];
  return (
    <div className="p-0">
      <Flex gap="small" wrap="wrap">
        <Button
          type="primary"
          onClick={() => {
            setOpen(true);
            setIsEditMode(false);
          }}
          className="bg bg-primary mb-3"
        >
          + Thêm
        </Button>
      </Flex>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 4,
        }}
        bordered
      />
      {openModal && (
        <>
          {" "}
          <EnrollByUser
            taiKhoan={taiKhoan}
            open={openModal}
            setOpen={setOpenModal}
            refreshCourses={refreshCourses}
          />
          <Confirm taiKhoan={taiKhoan} key={key} />
        </>
      )}
      <Modal
        title={isEditMode ? "Cập nhật thông tin người dùng" : "Thêm người dùng"}
        centered
        open={open}
        onCancel={() => setOpen(false)}
        width={1000}
        footer={[
          <Button key="back" onClick={() => setOpen(false)}>
            Hủy
          </Button>,
          <Button
            style={{ background: "#0d6efd" }}
            key="submit"
            type="primary"
            onClick={() => (isEditMode ? handleSave() : form.submit())}
          >
            {isEditMode ? "Lưu" : "OK"}
          </Button>,
        ]}
      >
        <Form
          form={form}
          labelCol={{ span: 24 }}
          onFinish={isEditMode ? handleSave : createAccount}
        >
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
