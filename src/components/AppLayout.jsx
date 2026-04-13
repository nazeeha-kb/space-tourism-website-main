import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen relative w-screen overflow-hidden">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded z-50">Skip to main content</a>
      <div className="absolute w-screen">
        <Navbar />
      </div>
      <Outlet className="overflow-hidden" id="main-content" />
    </div>
  );
};

export default AppLayout;
