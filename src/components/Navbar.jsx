import { useState } from "react";
import logo from "../assets/shared/logo.svg";

const Navbar = () => {
  const [menuCollapsed, setMenuCollapsed] = useState(true);

  const toggleMenu = () => {
    if (menuCollapsed) {
      setMenuCollapsed(false);
      console.log("opened menu", "is it collapsed?", menuCollapsed);
    } else {
      setMenuCollapsed(true);
      console.log("collapsed menu", "is it collapsed?", menuCollapsed);
    }
  };

  return (
    <header className="relative">
      <div className="w-screen flex justify-between">
        {/* Logo and Menu toggle Button */}
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <button
          className="mr-6"
          aria-expanded="false"
          aria-label="menu"
          onClick={toggleMenu}
        >
          <span>X</span>
        </button>
      </div>
      <div
        className={
          "w-screen " + (menuCollapsed ? "translate-x-0" : "translate-x-100")
        }
      >
        {/* MENU DIALOG */}
        <div className="uppercase numbered-title h-screen z-10 absolute bg-cust-dark/15 right-0 top-0 backdrop-blur-lg pl-8 flex flex-col gap-12 w-[70%]">
          <div className="py-8 w-full flex justify-end">
            <button
              className="mr-4"
              aria-expanded="false"
              aria-label="menu"
              onClick={toggleMenu}
            >
              <span>X</span>
            </button>
          </div>
          <nav className="">
            <ul className="flex flex-col gap-8">
              <li>
                <a href="#">
                  <span>00</span>Home
                </a>
              </li>
              <li>
                <a href="#">
                  <span>01</span>Destination
                </a>
              </li>
              <li>
                <a href="#">
                  <span>02</span>Crew
                </a>
              </li>
              <li>
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
