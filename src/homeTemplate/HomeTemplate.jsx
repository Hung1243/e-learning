import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeTemplate = () => {
  return (
    <div>
      <Header />

      <div className="content" style={{ minHeight: "90vh" }}>
        <Outlet />
      </div>
      <footer className="p-3 text-center">
        <Footer />
      </footer>
    </div>
  );
};

export default HomeTemplate;
