import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../config/axios";
import { login } from "../redux/Reducers/UserReducer";
import { useForm } from "antd/es/form/Form";

const Login = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useForm();

  const onFinish = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NyIsIkhldEhhblN0cmluZyI6IjI5LzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxOTYxOTIwMDAwMCIsIm5iZiI6MTY4ODkyMjAwMCwiZXhwIjoxNzE5NzY2ODAwfQ.9MKEqdjyd8nN84l6J6hg-XfkLpmaY_aBPozV_TXxusM";
      const response = await api.post("QuanLyNguoiDung/DangNhap", values, {
        headers: {
          TokenCybersoft: token,
        },
      });
      localStorage.setItem("AccessToken", response.data.accessToken);
      if (response.data.maLoaiNguoiDung === "HV") {
        navigate("/my-profile");
      } else {
        navigate("/dashboard");
      }
      dispatch(login(response.data));
      toast.success(`Đăng nhập thành công`);
    } catch (error) {
      console.log(error);
      toast.error(error.response ? error.response.data : "Error occurred");
    }
  };

  const createAccount = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = Object.fromEntries(formData.entries());
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NyIsIkhldEhhblN0cmluZyI6IjI5LzA2LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxOTYxOTIwMDAwMCIsIm5iZiI6MTY4ODkyMjAwMCwiZXhwIjoxNzE5NzY2ODAwfQ.9MKEqdjyd8nN84l6J6hg-XfkLpmaY_aBPozV_TXxusM";

    const res = await api.post("QuanLyNguoiDung/DangKy", values, {
      headers: {
        TokenCybersoft: token,
      },
    });

    if (res.status === 200) {
      toast.success("Tạo tài khoản thành công");
    } else {
      toast.error("Có lỗi xảy ra");
    }
  };

  const handleSwitchClick = () => {
    setIsActive(!isActive);
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
              <form className="login-form" onSubmit={onFinish}>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" name="taiKhoan" required />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input type="password" name="matKhau" required />
                </div>

                <div className="CTA">
                  <input type="submit" value="Login" />

                  <NavLink
                    href="#"
                    className="switch"
                    onClick={handleSwitchClick}
                  >
                    I'm New
                  </NavLink>
                </div>
              </form>
            </div>
            {/* <!-- End Login Form --> */}

            {/* <!-- Signup Form --> */}
            <div className={`signup form-piece ${isActive ? "" : "switched"} `}>
              <form className="signup-form " onSubmit={createAccount}>
                <div className="form-group">
                  <label htmlFor="taiKhoan">User Name</label>
                  <input type="text" name="taiKhoan" className="name" />
                  <span className="error"></span>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" name="email" className="email" />
                  <span className="error"></span>
                </div>
                <div className="form-group">
                  <label htmlFor="hoTen">Full Name</label>
                  <input type="text" name="hoTen" className="name" />
                  <span className="error"></span>
                </div>
                <div className="form-group">
                  <label htmlFor="maNhom">
                    Group Code <strong>(default: GP01)</strong>
                  </label>
                  <input type="text" name="maNhom" className="maNhom" />
                  <span className="error"></span>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    Phone Number - <small>Optional</small>
                  </label>
                  <input type="text" name="soDT" />
                </div>
                <div className="form-group">
                  <label htmlFor="matKhau">Password</label>
                  <input type="password" name="matKhau" className="pass" />
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
              </form>
            </div>
            {/* <!-- End Signup Form --> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
