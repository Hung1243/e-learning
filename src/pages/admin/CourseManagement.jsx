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
  message,
} from "antd";
import { useForm } from "antd/es/form/Form";
import api from "../../config/axios";
import { toast } from "react-toastify";
import TextArea from "antd/es/input/TextArea";
import { DatePicker, Space } from "antd";
import { useSelector } from "react-redux";
import moment from "moment";
import { UploadOutlined } from "@ant-design/icons";

const onChangeDate = (date, dateString) => {
  console.log(date, dateString);
};
const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};

const props = {
  name: "file",
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const CourseManagement = () => {
  const [open, setOpen] = useState(false);
  const [form] = useForm();
  const [listCourse, setListCourse] = useState([]);
  const [listCategories, setListCategories] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);

  const getCourse = async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NyIsIkhldEhhblN0cmluZyI6IjI5LzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxOTYxOTIwMDAwMCIsIm5iZiI6MTY4ODkyMjAwMCwiZXhwIjoxNzE5NzY2ODAwfQ.9MKEqdjyd8nN84l6J6hg-XfkLpmaY_aBPozV_TXxusM";

    const res = await api.get("QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01", {
      headers: {
        TokenCybersoft: token,
      },
    });
    setListCourse(res.data);
  };
  useEffect(() => {
    getCourse();
  }, []);
  const getCategories = async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NyIsIkhldEhhblN0cmluZyI6IjI5LzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxOTYxOTIwMDAwMCIsIm5iZiI6MTY4ODkyMjAwMCwiZXhwIjoxNzE5NzY2ODAwfQ.9MKEqdjyd8nN84l6J6hg-XfkLpmaY_aBPozV_TXxusM";

    const res = await api.get("QuanLyKhoaHoc/LayDanhMucKhoaHoc", {
      headers: {
        TokenCybersoft: token,
      },
    });
    setListCategories(res.data);
  };
  useEffect(() => {
    getCategories();
  }, []);
  const data = listCourse?.map((item) => {
    return {
      maKhoaHoc: item.maKhoaHoc,
      tenKhoaHoc: item.tenKhoaHoc,
      hinhAnh: item.hinhAnh,
      luotXem: item.luotXem,
      nguoiTao: item.nguoiTao.hoTen,
      danhMucKhoaHoc: item.danhMucKhoaHoc.tenDanhMucKhoaHoc,
    };
  });

  const columns = [
    {
      title: "Course code",
      dataIndex: "maKhoaHoc",
      fixed: "left",
    },
    {
      title: "Name",
      dataIndex: "tenKhoaHoc",
    },
    {
      title: "Image",
      dataIndex: "hinhAnh",
      render: (hinhAnh) => (
        <img
          src={hinhAnh}
          alt="Hình ảnh"
          style={{ width: "70px", height: "70px", borderRadius: "50%" }}
        />
      ),
    },
    {
      title: "View",
      dataIndex: "luotXem",
      fixed: "left",
    },
    {
      title: "Create by",
      dataIndex: "nguoiTao",
    },

    {
      title: "Category",
      dataIndex: "danhMucKhoaHoc",
    },
    {
      title: "Edit",
      render: (_, record) => (
        <Button
          type="primary"
          style={{ background: "#1677ff" }}
          onClick={() => handleEdit(record)}
        >
          Sửa
        </Button>
      ),
    },
    {
      title: "Delete",
      render: (_, record) => (
        <Popconfirm
          title="Are you sure you want to delete this course?"
          onConfirm={() => handleDelete(record.maKhoaHoc)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary" danger>
            Xóa
          </Button>
        </Popconfirm>
      ),
    },
  ];

  const handleEdit = (record) => {
    setOpen(true);
    setEditingCourse(record); // Lưu khóa học hiện tại vào state
    form.setFieldsValue({
      ...record,
      ngayTao: moment(record.ngayTao), // Đảm bảo ngày tạo được định dạng phù hợp
    });
  };

  // Function xử lý sự kiện delete
  const handleDelete = async (maKhoaHoc) => {
    const accessToken = localStorage.getItem("AccessToken");

    const headers = {
      TokenCybersoft:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NyIsIkhldEhhblN0cmluZyI6IjI5LzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxOTYxOTIwMDAwMCIsIm5iZiI6MTY4ODkyMjAwMCwiZXhwIjoxNzE5NzY2ODAwfQ.9MKEqdjyd8nN84l6J6hg-XfkLpmaY_aBPozV_TXxusM",
      Authorization: "Bearer " + accessToken,
    };
    try {
      const res = await api.delete(
        `QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`,
        {
          headers: headers,
        }
      );
      toast.success("Xóa khóa học thành công!");
      getCourse(); // Gọi lại hàm lấy danh sách khóa học để cập nhật dữ liệu trên bảng
    } catch (error) {
      if (error.response && error.response.data) {
        // Nếu có phản hồi từ máy chủ và dữ liệu phản hồi có chứa thông báo lỗi
        const errorMessage = error.response.data;
        toast.error(errorMessage);
      } else {
        // Nếu không có phản hồi hoặc không có dữ liệu phản hồi, hiển thị thông báo lỗi mặc định
        toast.error("Có lỗi xảy ra khi xóa khóa học!");
      }
      console.error(error);
    }
  };

  // Điều chỉnh hàm createCourse thành universal function để handle cả tạo mới và cập nhật
  const handleSubmitCourse = async (values) => {
    const accessToken = localStorage.getItem("AccessToken");

    const headers = {
      TokenCybersoft:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NyIsIkhldEhhblN0cmluZyI6IjI5LzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxOTYxOTIwMDAwMCIsIm5iZiI6MTY4ODkyMjAwMCwiZXhwIjoxNzE5NzY2ODAwfQ.9MKEqdjyd8nN84l6J6hg-XfkLpmaY_aBPozV_TXxusM",
      Authorization: "Bearer " + accessToken,
    };
    if (editingCourse) {
      // Logic cập nhật khóa học
      const updateValues = {
        ...values,
        maKhoaHoc: editingCourse.maKhoaHoc, // Giữ nguyên mã khóa học
      };
      try {
        const res = await api.put(
          `QuanLyKhoaHoc/CapNhatKhoaHoc`,
          updateValues,
          {
            headers: headers,
          }
        );
        toast.success("Cập nhật khóa học thành công!");
        getCourse(); // Cập nhật lại danh sách khóa học
        setOpen(false);
      } catch (error) {
        if (error.response && error.response.data) {
          // Nếu có phản hồi từ máy chủ và dữ liệu phản hồi có chứa thông báo lỗi
          const errorMessage = error.response.data;
          toast.error(errorMessage);
        } else {
          // Nếu không có phản hồi hoặc không có dữ liệu phản hồi, hiển thị thông báo lỗi mặc định
          toast.error("Có lỗi xảy ra khi xóa khóa học!");
        }
        console.error(error);
      }
    } else {
      try {
        const res = await api.post("QuanLyKhoaHoc/ThemKhoaHoc", values, {
          headers: headers,
        });
        form.resetFields();
        setOpen(false);
        toast.success("Đã thêm thành công");
        getCourse();
      } catch (error) {
        if (error.response && error.response.data) {
          // Nếu có phản hồi từ máy chủ và dữ liệu phản hồi có chứa thông báo lỗi
          const errorMessage = error.response.data;
          toast.error(errorMessage);
        } else {
          // Nếu không có phản hồi hoặc không có dữ liệu phản hồi, hiển thị thông báo lỗi mặc định
          toast.error("Có lỗi xảy ra khi xóa khóa học!");
        }
        console.error(error);
      }
    }
  };
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  return (
    <div className="p-0">
      <Flex gap="small" wrap="wrap">
        <Button
          type="primary"
          onClick={() => {
            setOpen(true);
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
      <Modal
        title={editingCourse ? "Cập nhật khóa học" : "Tạo khóa học mới"}
        centered
        open={open}
        onOk={() => form.submit()}
        onCancel={() => {
          setOpen(false);
          setEditingCourse(null); // Reset khi đóng Modal
          form.resetFields(); // Reset form fields khi đóng Modal
        }}
        okText={editingCourse ? "Lưu" : "Tạo"}
        cancelText="Hủy"
        width={1000}
      >
        <Form form={form} labelCol={{ span: 24 }} onFinish={handleSubmitCourse}>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                name="maKhoaHoc"
                label="Mã khóa học"
                rules={[{ required: true, message: "Không được để trống" }]}
              >
                <Input disabled={editingCourse ? true : false} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="tenKhoaHoc"
                label="Course Name"
                rules={[{ required: true, message: "Không được để trống" }]}
              >
                <Input />
              </Form.Item>
            </Col>{" "}
            <Col span={12}>
              <Form.Item
                name="maNhom"
                label="CODE (default GP01)"
                rules={[{ required: true, message: "Không được để trống" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="hinhAnh"
                label="Image (Url)"
                rules={[{ required: true, message: "Không được để trống" }]}
              >
                <Input />
              </Form.Item>
            </Col>{" "}
            <Col span={12}>
              <Form.Item
                name="maDanhMucKhoaHoc"
                label="Categories"
                rules={[
                  {
                    required: true,
                    message: "Không được để trống ",
                  },
                ]}
              >
                <Select
                  showSearch
                  placeholder="Choose category"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={filterOption}
                  options={listCategories.map((item) => {
                    return {
                      label: item.tenDanhMuc,
                      value: item.maDanhMuc,
                    };
                  })}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="danhGia"
                label="Feedback "
                rules={[{ required: true, message: "Không được để trống" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              {" "}
              <Form.Item
                name="luotXem"
                label="View"
                rules={[{ required: true, message: "Không được để trống" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              {" "}
              <Form.Item
                name="taiKhoanNguoiTao"
                label="Create By (your userName)"
                rules={[{ required: true, message: "Không được để trống" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              {" "}
              <Form.Item
                name="ngayTao"
                label="CreateDay"
                rules={[{ required: true, message: "Không được để trống" }]}
              >
                <DatePicker onChange={onChangeDate} />
              </Form.Item>
            </Col>{" "}
            <Col span={24}>
              <Form.Item
                name="moTa"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: "Không được để trống ",
                  },
                ]}
              >
                <TextArea />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default CourseManagement;
