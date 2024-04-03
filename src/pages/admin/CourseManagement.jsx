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
import EnrollByCourse from "../../components/enrollModal/enrollByCourse/EnrollByCourse";

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
  const [course, setCourse] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const userInfo = useSelector((store) => store.user);

  const getCourse = async () => {
    setLoading(true);
    const res = await api.get("QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01");
    setListCourse(res.data);
    setLoading(false);
  };
  useEffect(() => {
    getCourse();
  }, []);
  const getCategories = async () => {
    const res = await api.get("QuanLyKhoaHoc/LayDanhMucKhoaHoc", {});
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
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src =
              "https://www.ntc.edu/sites/default/files/styles/full_width_16_9/public/2021-06/software-development-specialist.jpg?";
          }}
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
      title: " Enroll",
      fixed: "right",
      render: (text, record) => (
        <>
          <Button
            type="primary"
            style={{ background: "#0d6efd" }}
            onClick={() => {
              setOpenModal(true);
              setCourse(record);
              console.log("123");
            }}
          >
            Enroll
          </Button>
        </>
      ),
    },
    {
      title: "Edit",
      render: (_, record) => (
        <>
          <Button
            type="primary"
            style={{ background: "#1677ff" }}
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this course?"
            onConfirm={() => handleDelete(record.maKhoaHoc)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </>
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
    try {
      const res = await api.delete(
        `QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`
      );
      toast.success("Xóa khóa học thành công!");
      getCourse();
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

  const handleSubmitCourse = async (values) => {
    const accessToken = localStorage.getItem("AccessToken");

    if (editingCourse) {
      // Logic cập nhật khóa học
      const updateValues = {
        ...values,
        maKhoaHoc: editingCourse.maKhoaHoc,
      };
      try {
        const res = await api.put(`QuanLyKhoaHoc/CapNhatKhoaHoc`, updateValues);
        toast.success("Cập nhật khóa học thành công!");
        getCourse();
        setOpen(false);
      } catch (error) {
        if (error.response && error.response.data) {
          const errorMessage = error.response.data;
          toast.error(errorMessage);
        } else {
          toast.error("Có lỗi xảy ra khi xóa khóa học!");
        }
        console.error(error);
      }
    } else {
      try {
        const res = await api.post("QuanLyKhoaHoc/ThemKhoaHoc", values);
        form.resetFields();
        setOpen(false);
        toast.success("Đã thêm thành công");
        getCourse();
      } catch (error) {
        if (error.response && error.response.data) {
          const errorMessage = error.response.data;
          toast.error(errorMessage);
        } else {
          toast.error("Có lỗi xảy ra khi xóa khóa học!");
        }
        console.error(error);
      }
    }
  };

  const handleOpenModal = () => {
    setOpen(true);
    form.setFieldsValue({
      taiKhoanNguoiTao: userInfo?.taiKhoan,
    });
  };

  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  return (
    <div className="p-0">
      <Flex gap="small" wrap="wrap">
        <Button
          type="primary"
          onClick={handleOpenModal}
          className="bg bg-primary mb-3"
        >
          + Thêm
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
      <Modal
        title={editingCourse ? "Update course" : "Create new course"}
        centered
        open={open}
        onOk={() => form.submit()}
        onCancel={() => {
          setOpen(false);
          setEditingCourse(null);
          form.resetFields();
        }}
        okText={editingCourse ? "Save" : "Create"}
        cancelText="Hủy"
        width={1000}
      >
        <Form form={form} labelCol={{ span: 24 }} onFinish={handleSubmitCourse}>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                name="maKhoaHoc"
                label="Course CODE"
                rules={[{ required: true, message: "Cannot be empty" }]}
              >
                <Input disabled={editingCourse ? true : false} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="tenKhoaHoc"
                label="Course Name"
                rules={[{ required: true, message: "Cannot be empty" }]}
              >
                <Input />
              </Form.Item>
            </Col>{" "}
            <Col span={12}>
              <Form.Item name="maNhom" label="CODE (default GP01)">
                <Input disabled value={"GP01"} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="hinhAnh"
                label="Image (Url)"
                rules={[{ required: true, message: "Cannot be empty" }]}
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
                    message: "Cannot be empty ",
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
                rules={[{ required: true, message: "Cannot be empty" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              {" "}
              <Form.Item
                name="luotXem"
                label="View"
                rules={[{ required: true, message: "Cannot be empty" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              {" "}
              <Form.Item
                name="taiKhoanNguoiTao"
                label="Create By (your userName)"
                // rules={[{ required: true, message: "Cannot be empty" }]}
              >
                <Input disabled value={userInfo?.taiKhoan} />
              </Form.Item>
            </Col>
            <Col span={12}>
              {" "}
              <Form.Item
                name="ngayTao"
                label="CreateDay"
                rules={[{ required: true, message: "Cannot be empty" }]}
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
                    message: "Cannot be empty ",
                  },
                ]}
              >
                <TextArea />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
      {openModal && (
        <>
          {" "}
          <EnrollByCourse
            course={course}
            open={openModal}
            setOpen={setOpenModal}
          />
          {/* <Confirm taiKhoan={taiKhoan} key={key} /> */}
        </>
      )}
    </div>
  );
};

export default CourseManagement;
