import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
// import { loginApiAction } from "../redux/Reducers/UserReducer";
// import { updateOnOkayAction } from "../redux/Reducers/LogReducer";
import api from "../config/axios";
import { login } from "../redux/Reducers/UserReducer";
import { toast } from "react-toastify";
import { Button, Checkbox, Form, Input } from "antd";

const Login = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const frmLogin = useFormik({
  //   initialValues: {
  //     taiKhoan: "",
  //     matKhau: "",
  //   },
  //   onSubmit: async (values) => {
  //     await dispatch(loginApiAction(values));
  //     navigate("/");
  //   },
  // });

  // useEffect(() => {
  //   const action = updateOnOkayAction(frmLogin.handleSubmit);
  //   dispatch(action);
  // }, []);

  // const handleSwitchClick = (e) => {
  //   e.preventDefault(); // Prevent default behavior
  //   setIsActive(!isActive);

  // };
  const onFinish = async (values) => {
    console.log("Received values:", values);
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NyIsIkhldEhhblN0cmluZyI6IjI5LzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxOTYxOTIwMDAwMCIsIm5iZiI6MTY4ODkyMjAwMCwiZXhwIjoxNzE5NzY2ODAwfQ.9MKEqdjyd8nN84l6J6hg-XfkLpmaY_aBPozV_TXxusM";
      const response = await api.post("QuanLyNguoiDung/DangNhap", values, {
        headers: {
          TokenCybersoft: token,
        },
      });
      localStorage.setItem("AccessToken", response.data.accessToken);
      console.log(response.data);
      if (response.data.maLoaiNguoiDung == "HV") {
        navigate("/");
      } else {
        navigate("/dashboard");
      }
      dispatch(login(response.data));
    } catch (e) {
      console.log(e);
      toast.error(e.response.data);
    }
  };

  return (
    <div className="container">
      <section id="formHolder">
        <div className="row w-75 mx-auto">
          {/* <!-- Brand Box --> */}
          <div className="col-sm-6 brand">
            <NavLink to="/" className="logo">
              AH <span>.</span>
            </NavLink>

            <div className="heading">
              <h2 className=" fs-1">E-LEARNING</h2>
              <p>Your Right Choice</p>
            </div>

            <div className="success-msg">
              <p>Great! You are one of our members now</p>
              <NavLink href="#" className="profile">
                Your Profile
              </NavLink>
            </div>
          </div>

          {/* <!-- Form Box --> */}
          <div className="col-sm-6 form">
            {/* <!-- Login Form --> */}
            <div className={`login form-piece ${isActive ? "switched" : ""}`}>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-2">
                <Form
                  name="loginForm"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                >
                  <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p className="lead fw-bold mb-0 me-3">Sign in</p>
                  </div>
                  <Form.Item
                    name="taiKhoan"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your username!",
                      },
                    ]}
                  >
                    <Input
                      type="text"
                      placeholder="Enter a valid username"
                      size="large"
                    />
                  </Form.Item>
                  <Form.Item
                    name="matKhau"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your password!",
                      },
                    ]}
                  >
                    <Input
                      type="password"
                      placeholder="Enter password"
                      size="large"
                    />
                  </Form.Item>
                  <div className="d-flex justify-content-between align-items-center">
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <a href="#!" className="text-body">
                      Forgot password?
                    </a>
                  </div>
                  <div className="text-center text-lg-start mt-4 pt-2">
                    <Button
                      type="primary"
                      size="large"
                      htmlType="submit"
                      style={{
                        background: "#f95959",
                        paddingLeft: "2.5rem",
                        paddingRight: "2.5rem",
                      }}
                    >
                      Login
                    </Button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account?{" "}
                      <a href="./register" className="link-danger">
                        Register
                      </a>
                    </p>
                  </div>
                </Form>
              </div>
            </div>
            {/* <!-- End Login Form --> */}

            {/* <!-- Signup Form --> */}
            <div className={`signup form-piece ${isActive ? "" : "switched"}`}>
              {/* <form className="signup-form" onSubmit={frmLogin.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" name="username" className="name" />
                  <span className="error"></span>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" name="emailAdress" className="email" />
                  <span className="error"></span>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    Phone Number - <small>Optional</small>
                  </label>
                  <input type="text" name="phone" />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" className="pass" />
                  <span className="error"></span>
                </div>

                <div className="form-group">
                  <label htmlFor="passwordCon">Confirm Password</label>
                  <input
                    type="password"
                    name="passwordCon"
                    className="passConfirm"
                  />
                  <span className="error"></span>
                </div>

                <div className="CTA">
                  <input type="submit" value="Signup Now" id="submit" />
                  <NavLink
                    href="#"
                    className="switch"
                    onClick={handleSwitchClick}
                  >
                    I have an account
                  </NavLink>
                </div>
              </form> */}
            </div>
            {/* <!-- End Signup Form --> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
