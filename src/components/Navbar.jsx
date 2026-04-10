import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../assets/shared/logo.svg?react";
import Hamburger from "../assets/shared/icon-hamburger.svg?react";
import Close from "../assets/shared/icon-close.svg?react";

const Navbar = () => {
  const [menuCollapsed, setMenuCollapsed] = useState(true);
  const location = useLocation(); // Hook call
  const currentPath = location.pathname;
  const menuRef = useRef(null);
  const menuBtnRef = useRef(null);
  const menuCollapsedRef = useRef(true);

  const toggleMenu = (e) => {
    e.stopPropagation();
    if (menuCollapsed) {
      // expand the menu
      setMenuCollapsed(false);
    } else {
      // collapse the menu
      setMenuCollapsed(true);
    }
  };

  useEffect(() => {
    menuCollapsedRef.current = menuCollapsed;
  }, [menuCollapsed]);

  useEffect(() => {
    const handleClick = (e) => {
      const isClickOnMenuBtn = menuBtnRef.current?.contains(e.target);
      const isClickOnMenu = menuRef.current?.contains(e.target);
      if (!menuCollapsedRef.current && !isClickOnMenu && !isClickOnMenuBtn) {
        setMenuCollapsed(true);
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <header className="relative z-10 md:flex md:justify-between xl:pt-10">
      {/* Logo and Menu toggle Button */}
      <div className="py-6 pl-6 md:pl-10 xl:pl-16 md:flex-1 md:w-auto w-screen flex justify-between xl:items-center xl:gap-16">
        <Link to={"/"} aria-label="home">
          <Logo />
        </Link>
        {/* line */}
        <div className="xl:block hidden bg-white/25 h-px md:flex-1 xl:-mr-20 z-20"></div>
        <button
          ref={menuBtnRef}
          className="mr-6 z-20 md:hidden block"
          aria-expanded="false"
          aria-label="menu"
          onClick={toggleMenu}
          id="menu-btn"
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
        <div
          id="menu"
          ref={menuRef}
          className="uppercase numbered-title md:h-full h-screen md:static absolute md:bg-white/5 bg-cust-dark/15 right-0 top-0 md:translate-0 -translate-y-24 backdrop-blur-2xl xl:pl-20 md:p-0 pl-8 flex flex-col md:justify-center gap-12 md:w-full w-[75%]"
        >
          {/* Navbar */}
          <nav className="md:h-full">
            <ul className="md:flex-row flex flex-col md:gap-12 gap-8 md:text-cust-300 md:px-16 md:pt-0 pt-30 px-10 underline-indicators main-nav md:h-full">
              <li>
                <Link
                  className={`${currentPath === "/" ? "active" : ""}`}
                  {...(currentPath === "/" ? { "aria-current": "page" } : {})}
                  to={"/"}
                >
                  <span className="text-white">00</span>Home
                </Link>
              </li>
              <li>
                <Link
                  className={`${currentPath === "/destination" ? "active" : ""}`}
                  {...(currentPath === "/destination"
                    ? { "aria-current": "page" }
                    : {})}
                  to={"/destination"}
                >
                  <span className="text-white">01</span>Destination
                </Link>
              </li>
              <li>
                <Link
                  className={`${currentPath === "/crew" ? "active" : ""}`}
                  {...(currentPath === "/crew"
                    ? { "aria-current": "page" }
                    : {})}
                  to={"/crew"}
                >
                  <span className="text-white">02</span>Crew
                </Link>
              </li>
              <li>
                <Link
                  className={`${currentPath === "/technology" ? "active" : ""}`}
                  {...(currentPath === "/technology"
                    ? { "aria-current": "page" }
                    : {})}
                  to={"/technology"}
                >
                  <span className="text-white">03</span>Technology
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
