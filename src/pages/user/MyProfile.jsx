import { AntDesignOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Row } from "antd";
import React from "react";

const MyProfile = () => {
  return (
    <>
      <div className="user-info">
        <div className="container">
          <div className="bg-secondary" style={{ height: "300px" }}>
            <Row gutter={24} justify="center" align="middle">
              <Col
                span={8}
                className=" d-flex align-items-center justify-content-center mt-5"
              >
                <Avatar
                  size={{
                    xs: 24,
                    sm: 32,
                    md: 40,
                    lg: 64,
                    xl: 180,
                    xxl: 200,
                  }}
                  icon={<AntDesignOutlined />}
                />
              </Col>
              <Col span={16}>
                <h4>Information</h4>
                <Row gutter={24}>
                  <Col span={12}>
                    {" "}
                    <h5>Name: BC</h5>
                    <h5>Email: 123@123</h5>
                    <h5> Phone: 01234556768</h5>{" "}
                  </Col>
                  <Col span={12}>
                    <h5>User Name:</h5>
                    <h5>Group:</h5>
                    <h5>Role: </h5>
                  </Col>
                  <Button type="primary">Edit Profile</Button>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
