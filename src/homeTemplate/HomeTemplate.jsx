import React from "react";
import ViewCourse from "../pages/user/ViewCourse";
import { Outlet } from "react-router-dom";

const HomeTemplate = () => {
  return (
    <div>
      HomeTemplate
      <Outlet />
    </div>
  );
};

export default HomeTemplate;
