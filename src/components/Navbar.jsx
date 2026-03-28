import { useState } from "react";
import Logo from "../assets/shared/logo.svg?react";
import Hamburger from "../assets/shared/icon-hamburger.svg?react";
import Close from "../assets/shared/icon-close.svg?react";

const Navbar = () => {
  const [menuCollapsed, setMenuCollapsed] = useState(true);
  const [selected, setSelected] = useState("home");

  const toggleMenu = () => {
    if (menuCollapsed) {
      // expand the menu
      setMenuCollapsed(false);
    } else {
      // collapse the menu
      setMenuCollapsed(true);
    }
  };

  return (
    <header className="relative z-10 md:flex md:justify-between xl:pt-10">
      {/* Logo and Menu toggle Button */}
      <div className="py-6 pl-6 md:pl-10 xl:pl-16 md:flex-1 md:w-auto w-screen flex justify-between xl:items-center xl:gap-16">
        <div className="">
          <Logo />
        </div>
        {/* line */}
        <div className="xl:block hidden bg-white/25 h-px md:flex-1 xl:-mr-20 z-20"></div>
        <button
          className="mr-6 z-20 md:hidden block"
          aria-expanded="false"
          aria-label="menu"
          onClick={toggleMenu}
        >
          {menuCollapsed ? <Hamburger /> : <Close />}
        </button>
      </div>
      <div
        className={
          "md:w-auto w-screen transition-transform duration-500 ease-in md:translate-x-0 " +
          (menuCollapsed ? "translate-x-150" : "translate-x-0")
        }
      >
        {/* MENU DIALOG */}
        <div className="uppercase numbered-title md:h-full h-screen md:static absolute md:bg-white/5 bg-cust-dark/15 right-0 top-0 md:translate-0 -translate-y-24 backdrop-blur-2xl xl:pl-20 md:p-0 pl-8 flex flex-col md:justify-center gap-12 md:w-full w-[75%]">
          {/* Navbar */}
          <nav className="md:h-full">
            <ul className="md:flex-row flex flex-col md:gap-12 gap-8 md:text-cust-300 md:px-16 md:pt-0 pt-30 px-10 underline-indicators md:h-full">
              <li
                onClick={() => {
                  setSelected("home");
                }}
                aria-selected={selected == "home"}
              >
                <a href="#">
                  <span>00</span>Home
                </a>
              </li>
              <li
                onClick={() => {
                  setSelected("destination");
                }}
                aria-selected={selected == "destination"}
              >
                <a href="#">
                  <span>01</span>Destination
                </a>
              </li>
              <li
                onClick={() => {
                  setSelected("crew");
                }}
                aria-selected={selected == "crew"}
              >
                <a href="#">
                  <span>02</span>Crew
                </a>
              </li>
              <li
                onClick={() => {
                  setSelected("technology");
                }}
                aria-selected={selected == "technology"}
              >
                <a href="#">
                  <span>03</span>Technology
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
