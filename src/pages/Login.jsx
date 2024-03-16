import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { loginApiAction } from "../redux/Reducers/UserReducer";
import { updateOnOkayAction } from "../redux/Reducers/LogReducer";
import { useFormik } from "formik";
import * as Yup from 'yup';

const Login = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const frmLogin = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("Username is required"),
      matKhau: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        await dispatch(loginApiAction(values));
        navigate("/");
      } catch (error) {
        console.error("Login failed:", error);
        // Handle login error here, e.g., display error message to the user
      }
    },
  });

  useEffect(() => {
    const action = updateOnOkayAction(frmLogin.handleSubmit);
    dispatch(action);
  }, [dispatch, frmLogin.handleSubmit]);

  //------------------ End login------------


  // const frmRegis = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //     name: "",
  //     gender: true,
  //     phone: "",
  //   },
  //   onSubmit: async (values) => {
  //     try {
  //       const res = await http.post(
  //         "https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
  //         values
  //       );

  //       console.log("Registration successful:", res.data);

  //       const action = updateOnOkayAction();
  //       dispatch(action);

  //       // Hiển thị thông báo và chuyển hướng đến trang đăng nhập
  //       alert("Bạn đã đăng ký thành công!");
  //       navigate("/login");
  //     } catch (error) {
  //       console.error("Registration failed:", error);
  //     }
  //   },
  // });



  const handleSwitchClick = (e) => {
    e.preventDefault(); // Prevent default behavior
    setIsActive(!isActive);

  };

  return <div className="container">
    <section id="formHolder">
      <div className="row w-75 mx-auto">
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
            <NavLink to="#" className="profile">
              Your Profile
            </NavLink>
          </div>
        </div>
        <div className="col-sm-6 form">
          <div className={`login form-piece ${isActive ? 'switched' : ''}`}>
            <form className="login-form" onSubmit={frmLogin.handleSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  name="taiKhoan"
                  value={frmLogin.values.taiKhoan}
                  onChange={frmLogin.handleChange}
                  onBlur={frmLogin.handleBlur}
                />
                {frmLogin.touched.taiKhoan && frmLogin.errors.taiKhoan ? (
                  <div className="error">{frmLogin.errors.taiKhoan}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="matKhau"
                  value={frmLogin.values.matKhau}
                  onChange={frmLogin.handleChange}
                  onBlur={frmLogin.handleBlur}
                />
                {frmLogin.touched.matKhau && frmLogin.errors.matKhau ? (
                  <div className="error">{frmLogin.errors.matKhau}</div>
                ) : null}
              </div>
              <div className="CTA">
                <input type="submit" value="Login" />
                <NavLink to="#" className="switch" onClick={handleSwitchClick}>
                  I'm New
                </NavLink>



              </div>
            </form>
          </div>
          {/* <!-- End Login Form --> */}

          {/* <!-- Signup Form --> */}
          <div className={`signup form-piece ${isActive ? '' : 'switched'}`}>
            <form className="signup-form" >
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" name="username" className="name" />
                <span className="error"></span>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="emailAdress"
                  className="email"
                />
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
                <input
                  type="password"
                  name="password"
                  className="pass"
                />
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
                <NavLink href="#" className="switch" onClick={handleSwitchClick}>
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
};

export default Login;




// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import LoginForm from "../components/Account/LoginForm";
// import RegisterForm from "../components/Account/RegisterForm";
// import { toast } from "react-toastify";
// import { useDispatch } from "react-redux";
// import { login } from "../redux/feature/accountSlice";
// // import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// // import { provider } from "../config/firebase";
// import { useNavigate } from "react-router-dom";
// import api from "../config/axios";


// const Login = () => {
//   const [isActive, setIsActive] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSwitchClick = () => {
//     setIsActive(!isActive);
//   };

//   const handleLogin = async (values) => {
//     try {
//       const response = await api.post("/authentication/login", values);
//       localStorage.setItem("token", response.data.token);
//       console.log(response.data);
//       if (response.data.role === "STUDENT") {
//         navigate("/");
//       } else if (response.data.role === "TEACHER") {
//         navigate("/dashboard/teacher");
//       } else {
//         navigate("/dashboard/admin");
//       }
//       dispatch(login(response.data));
//     } catch (e) {
//       console.log(e);
//       toast.error(e.response.data);
//     }
//   };


//   // const handleLoginGoogle = async () => {
//   //   const auth = getAuth();
//   //   signInWithPopup(auth, provider)
//   //     .then(async (result) => {
//   //       console.log(result.user.accessToken);
//   //       const response = await api.post("/authentication/loginGoogle", {
//   //         token: result.user.accessToken,
//   //       });
//   //       localStorage.setItem("token", response.data.token);
//   //       console.log(response.data);
//   //       if (response.data.role === "TEACHER") {
//   //         navigate("/dashboard/teacher");
//   //       } else if (response.data.role === "STUDENT") {
//   //         navigate("/");
//   //       } else {
//   //         navigate("/dashboard/admin");
//   //       }
//   //       dispatch(login(response.data));
//   //     })
//   //     .catch((error) => {
//   //       // Handle Errors here.
//   //       const errorCode = error.code;
//   //       const errorMessage = error.message;
//   //       // The email of the user's account used.
//   //       const email = error.customData.email;
//   //       // The AuthCredential type that was used.
//   //       const credential = GoogleAuthProvider.credentialFromError(error);
//   //       // ...
//   //     });
//   // };

//   return (
//     <div className="container">
//       <section id="formHolder">
//         <div className="row w-75 mx-auto">
//           {/* <!-- Brand Box --> */}
//           <div className="col-sm-6 brand">
//             <NavLink href="#" className="logo">
//               MR <span>.</span>
//             </NavLink>

//             <div className="heading">
//               <h2>CYBERSOFT</h2>
//               <p>Your Right Choice</p>
//             </div>

//             <div className="success-msg">
//               <p>Great! You are one of our members now</p>
//               <NavLink href="#" className="profile">
//                 Your Profile
//               </NavLink>
//             </div>
//           </div>

//           {/* <!-- Form Box --> */}
//           <div className="col-sm-6 form">
//             <LoginForm
//               handleSwitchClick={handleSwitchClick}
//               isActive={isActive}
//               handleLogin={handleLogin}
//             />

//             <RegisterForm handleSwitchClick={handleSwitchClick} isActive={isActive} />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Login;





// import React from "react";
// import { Form, Input, Button, Checkbox } from "antd";
// import { UserOutlined, LockOutlined } from "@ant-design/icons";
// import api from "../config/axios";
// import { toast } from "react-toastify";
// import { useDispatch } from "react-redux";
// import { login } from "../redux/feature/accountSlice";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { provider } from "../config/firebase";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const onFinish = async (values) => {
//     console.log("Received values:", values);
//     try {
//       const response = await api.post("/authentication/login", values);
//       localStorage.setItem("token", response.data.token);
//       console.log(response.data);
//       if (response.data.role == "STUDENT") {
//         navigate("/");
//       } else if (response.data.role == "TEACHER") {
//         navigate("/dashboard/teacher");
//       } else {
//         navigate("/dashboard/admin");
//       }
//       dispatch(login(response.data));
//     } catch (e) {
//       console.log(e);
//       toast.error(e.response.data);
//     }
//   };
//   const handleLoginGoogle = () => {
//     const auth = getAuth();
//     signInWithPopup(auth, provider)
//       .then(async (result) => {
//         console.log(result.user.accessToken);
//         const response = await api.post("/authentication/loginGoogle", {
//           token: result.user.accessToken,
//         });
//         localStorage.setItem("token", response.data.token);
//         console.log(response.data);
//         if (response.data.role == "TEACHER") {
//           navigate("/dashboard/teacher");
//         } else if (response.data.role == "STUDENT") {
//           navigate("/");
//         } else {
//           navigate("/dashboard/admin");
//         }
//         dispatch(login(response.data));
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//       });
//   };
//   return (
//     <section>
//       <div className="container">
//         <div className="row d-flex justify-content-center align-items-center">
//           <div className="col-md-9 col-lg-6 col-xl-5">
//             <img
//               src=""
//               className="img-fluid "
//               alt="Sample image"
//             />
//           </div>
//           <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-2">
//             <Form
//               name="loginForm"
//               initialValues={{ remember: true }}
//               onFinish={onFinish}
//             >
//               <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
//                 <p className="lead fw-normal mb-0 me-3">Sign in with</p>
//                 <Button type="primary" className="btn-floating mx-1">
//                   <i className="fab fa-facebook-f" />
//                 </Button>
//                 <Button type="primary" className="btn-floating mx-1">
//                   <i className="fab fa-twitter" />
//                 </Button>
//                 <Button
//                   type="primary"
//                   className="btn-floating mx-1"
//                   onClick={handleLoginGoogle}
//                 >
//                   <i class="fab fa-google"></i>
//                 </Button>
//               </div>
//               <div className="divider d-flex align-items-center my-4">
//                 <p className="text-center fw-bold mx-3 mb-0">Or</p>
//               </div>
//               <Form.Item
//                 name="username"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please enter your username!",
//                   },
//                 ]}
//               >
//                 <Input
//                   type="text"
//                   placeholder="Enter a valid username"
//                   size="large"
//                 />
//               </Form.Item>
//               <Form.Item
//                 name="password"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please enter your password!",
//                   },
//                 ]}
//               >
//                 <Input
//                   type="password"
//                   placeholder="Enter password"
//                   size="large"
//                 />
//               </Form.Item>
//               <div className="d-flex justify-content-between align-items-center">
//                 <Form.Item name="remember" valuePropName="checked" noStyle>
//                   <Checkbox>Remember me</Checkbox>
//                 </Form.Item>
//                 <a href="#!" className="text-body">
//                   Forgot password?
//                 </a>
//               </div>
//               <div className="text-center text-lg-start mt-4 pt-2">
//                 <Button
//                   type="primary"
//                   size="large"
//                   htmlType="submit"
//                   style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
//                 >
//                   Login
//                 </Button>
//                 <p className="small fw-bold mt-2 pt-1 mb-0">
//                   Don't have an account?{" "}
//                   <a href="./register" className="link-danger">
//                     Register
//                   </a>
//                 </p>
//               </div>
//             </Form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login;