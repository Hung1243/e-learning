import React, { useState } from "react";
import {
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ReadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Dropdown, Space, Avatar } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/Reducers/UserReducer";
const { Header, Sider, Content } = Layout;

const DashBoard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const account = useSelector((store) => store.user);
  console.log(account);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items = [
    {
      label: (
        <Button
          onClick={() => {
            dispatch(logout());
            localStorage.clear();
            navigate("/login");
          }}
        >
          Logout
        </Button>
      ),
      key: "0",
    },
  ];
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
                icon: <ReadOutlined />,
                label: (
                  <Link to="manage-course" className="text-decoration-none">
                    Quản lí khóa học
                  </Link>
                ),
              },
            ]}
          />
        </Sider>
        <Layout style={{ height: "100%" }}>
          <Header
            className="d-flex justify-content-between pe-3"
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              className="d-flex justify-content-center align-items-center"
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
                marginTop: "0px",
              }}
            />
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                  {account.hoTen}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 12,
              maxHeight: "100%",
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
