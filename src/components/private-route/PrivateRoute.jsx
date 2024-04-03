import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const user = useSelector((state) => state.user);
  const isAuthenticated = user && user.accessToken;
  const isTeacher = user.maLoaiNguoiDung === "GV";

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (!isTeacher) {
    return <Navigate to="/" />;
  }

  return children;
};
export default PrivateRoute;
