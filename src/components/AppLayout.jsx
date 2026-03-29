import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen relative w-screen overflow-x-hidden">
      <div className="absolute w-screen">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
