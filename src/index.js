import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserManagement from "./pages/admin/UserManagement";
import CourseManagement from "./pages/admin/CourseManagement";
import HomeTemplate from "./homeTemplate/HomeTemplate";
import Home from "./pages/user/home/Home";
import ViewCourse from "./pages/user/ViewCourse";
import ViewCourseDetail from "./pages/user/ViewCourseDetail";
import MyProfile from "./pages/user/MyProfile";
import Blog from "./components/BlogPost/Blog.jsx";
import EnrollManagement from "./pages/admin/EnrollManagement";
import { ToastContainer } from "react-toastify";
import { persistor, store } from "./redux/store.jsx";
import { createBrowserHistory } from "history";
import About from "./components/AboutUs/About.jsx";
export const history = createBrowserHistory();




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="dashboard">
            <Route path="manage-user" element={<UserManagement />}></Route>
            <Route path="manage-course" element={<CourseManagement />}></Route>
            <Route path="manage-enroll" element={<EnrollManagement />}></Route>
          </Route>
          <Route path="" element={<HomeTemplate />}>
            <Route index element={<Home />}></Route>
            <Route path="course">
              <Route path="" element={<ViewCourse />}></Route>
              <Route path=":maKhoaHoc" element={<ViewCourseDetail />}></Route>
            </Route>
            
              <Route path="my-profile" element={<MyProfile />}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="journal" element={<Blog />}></Route>

           
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </PersistGate>
  </Provider>
);
