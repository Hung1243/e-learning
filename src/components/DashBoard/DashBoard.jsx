import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { Link, Outlet } from "react-router-dom";
const { Header, Sider, Content } = Layout;

const DashBoard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      {" "}
      <Layout style={{ height: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,

                label: (
                  <Link to="manage-user" className="text-decoration-none">
                    Quản lí người dùng
                  </Link>
                ),
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: (
                  <Link to="manage-course" className="text-decoration-none">
                    Quản lí khóa học
                  </Link>
                ),
              },
              {
                key: "3",
                icon: <VideoCameraOutlined />,
                label: (
                  <Link to="manage-enroll" className="text-decoration-none">
                    Ghi danh
                  </Link>
                ),
              },
            ]}
          />
        </Sider>
        <Layout style={{ height: "100%", overflow: "auto" }}>
         
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default DashBoard;
