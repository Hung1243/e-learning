import React from "react";

import { Button, Space, Table, Tag } from "antd";
const columns = [
  {
    title: "STT",
    dataIndex: "index",
    key: "index",
    render: (text, record, index) => `${index + 1}`,
  },
  {
    title: "Course",
    dataIndex: "maKhoaHoc",
    key: "maKhoaHoc",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button type="primary" style={{ background: "#0d6efd" }}>
          Ghi danh
        </Button>
        <Button danger type="primary">
          Hủy
        </Button>
      </Space>
    ),
  },
];
const data = [
  {
    key: "",
    maKhoaHoc: "John Brown",
  },
];

const Enrolled = () => {
  return (
    <div>
      <h3>Khóa học đã ghi danh </h3>
      <Table
        pagination={{
          pageSize: 4,
        }}
        columns={columns}
        dataSource={data}
        rowKey={(record) => record.key}
      />
    </div>
  );
};

export default Enrolled;
