import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen relative w-screen overflow-hidden">
      <div className="absolute w-screen">
        <Navbar />
      </div>
      <Outlet className="overflow-hidden" />
    </div>
  );
};

export default AppLayout;
