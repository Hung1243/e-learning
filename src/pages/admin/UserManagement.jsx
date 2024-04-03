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
  Skeleton,
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
  const [openModal, setOpenModal] = useState(false);
  const [taiKhoan, setTaiKhoan] = useState();
  const [loading, setLoading] = useState(true);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const getAccount = async () => {
    setLoading(true);

    const res = await api.get("QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01");
    setListAccount(res.data);
    console.log(res.data);
    setLoading(false);
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
    const res = await api.post("QuanLyNguoiDung/ThemNguoiDung", values);
    form.resetFields();
    setOpen(false);
    toast.success("Đã thêm thành công");
    getAccount();
  };
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const handleOpenModal = () => {
    setOpen(true);
    form.setFieldsValue({ maNhom: "GP01" }); // Set giá trị mặc định cho maNhom
  };

  const handleEditClick = (record) => {
    setCurrentUser(record);
    setIsUpdateModalOpen(true);
    form.setFieldsValue({
      taiKhoan: record.taiKhoan,
      email: record.email,
      hoTen: record.hoTen,
      soDT: record.soDt,
      maLoaiNguoiDung: record.maLoaiNguoiDung,
      matKhau: record.matKhau,
      maNhom: record.maNhom || "GP01",
    });
  };

  const handleUpdate = async () => {
    try {
      const fieldsValue = form.getFieldsValue();

      const updateData = {
        ...currentUser,
        ...fieldsValue,
        // maNhom: currentUser.maNhom,
      };
      const { data } = await api.put(
        "QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        updateData
      );
      toast.success("Cập nhật thành công!");
      setIsUpdateModalOpen(false);
      getAccount(); // Làm mới danh sách người dùng
    } catch (error) {
      toast.error("Có lỗi xảy ra khi cập nhật!");
      console.error(error);
    }
  };

  const handleDelete = async (taiKhoan) => {
    try {
      await api.delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);
      toast.success("Xóa người dùng thành công");
      getAccount();
    } catch (error) {
      if (error.response && error.response.data) {
        const errorMessage = error.response.data;
        toast.error(errorMessage);
      } else {
        toast.error("Có lỗi xảy ra khi xóa khóa học!");
      }
      console.error(error);
    }
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
            onClick={() => handleEditClick(record)}
          >
            Sửa
          </Button>
          <Popconfirm
            title="Bạn có chắc chắn muốn xóa người dùng này?"
            onConfirm={() => handleDelete(record.taiKhoan)}
            okText="Có"
            cancelText="Không"
          >
            <Button type="primary" danger>
              Xóa
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <div className="p-0">
      <Flex gap="small" wrap="wrap">
        <Button
          type="primary"
          onClick={handleOpenModal}
          className="bg bg-primary mb-3"
        >
          + Add new
        </Button>
      </Flex>
      {loading ? (
        <Skeleton active />
      ) : (
        <Table
          columns={columns}
          dataSource={data}
          pagination={{
            pageSize: 4,
          }}
          bordered
        />
      )}
      {openModal && (
        <>
          {" "}
          <EnrollByUser
            taiKhoan={taiKhoan}
            open={openModal}
            setOpen={setOpenModal}
          />
        </>
      )}
      <Modal
        title={isUpdateModalOpen ? "Update user" : "Add new user"}
        open={open || isUpdateModalOpen}
        onCancel={() => {
          setOpen(false);
          setIsUpdateModalOpen(false);
          form.resetFields(); // Đảm bảo form được reset khi đóng modal
        }}
        onOk={() => {
          isUpdateModalOpen ? handleUpdate() : form.submit();
        }}
      >
        <Form form={form} labelCol={{ span: 24 }} onFinish={createAccount}>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                name="taiKhoan"
                label="UserName"
                rules={[{ required: true, message: "Cannot be empty" }]}
              >
                <Input disabled={isUpdateModalOpen} />
              </Form.Item>
            </Col>{" "}
            <Col span={12}>
              {" "}
              <Form.Item
                name="matKhau"
                label="Password"
                rules={[{ required: true, message: "Cannot be empty" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              {" "}
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: "Cannot be empty" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              {" "}
              <Form.Item
                name="hoTen"
                label="Full name"
                rules={[{ required: true, message: "Cannot be empty" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              {" "}
              <Form.Item name="maNhom" label="Group">
                <Input disabled value={"GP01"} />
              </Form.Item>
            </Col>
            <Col span={12}>
              {" "}
              <Form.Item
                name="soDT"
                label="Phone number"
                rules={[{ required: true, message: "Cannot be empty" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              {" "}
              <Form.Item
                name="maLoaiNguoiDung"
                label="Role"
                rules={[{ required: true, message: "Cannot be empty" }]}
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
