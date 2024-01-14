import React, { useEffect, useRef, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink, useLocation } from "react-router-dom";

// Images import
import Logo from "../images/logo2.svg";
import DropdownMenu from "../Landingpage/DropdownMenu";

const activeLink = "text-secondary font-bold text-xl";
const normalLink = "hover:scale-105 hover:font-bold";

function SecondNav(props) {
  const [openMenu, setOpenMenu] = useState(false);
  const [showCloseMenu, setShowCloseMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    setShowCloseMenu(!showCloseMenu);
  };

  const openMenuRef = useRef(null);
  // const menuIconRef = useRef(null);

  useEffect(() => {
    function clickOut(event) {
      if (openMenuRef.current && !openMenuRef.current.contains(event.target)) {
        setOpenMenu(false);
        setShowCloseMenu(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", clickOut);

    // Unbind the event listener on cleanup
    return () => {
      document.removeEventListener("mousedown", clickOut);
    };
  }, []);

  const location = useLocation();

  return (
    <div className={`${props.bg} mt-5 lg:pl-8 lg:mt-0`}>
      <nav className="flex justify-between items-center lg:h-40">
        <div className="flex items-center">
          <NavLink to="/">
            <img
              src={props.logo}
              alt="Logo Image"
              className="w-10 ml-4 lg:w-16"
            />
          </NavLink>
          <NavLink to="/">
            <p className={`text-xl ${props.text} lg:text-[2rem]`}>
              <span className="text-[#00FFFF] font-bold ">Pro</span>
              Investors
            </p>
          </NavLink>
        </div>

        <div className="flex items-center gap-9 mr-5 relative lg:hidden ">
          <div className="w-[30px] h-[30px] rounded-full bg-[#D9D9D9] flex items-center justify-center">
            <FontAwesomeIcon
              className="text-[#000]"
              icon="fa-solid fa-search"
              onClick={toggleMenu}
            />
          </div>
          {showCloseMenu ? (
            <FontAwesomeIcon
              className={`${props.menu} h-6`}
              icon="fa-solid fa-close"
              onClick={toggleMenu}
            />
          ) : (
            <FontAwesomeIcon
              className={`${props.menu} h-6`}
              icon="fa-solid fa-bars"
              onClick={toggleMenu}
            />
          )}
          {openMenu && (
            <div
              className="fixed z-10 top-0 left-0 w-[100%] h-[100%] bg-b opacity-70   via-transparent from-gray-100 to-gray-100"
              onClick={toggleMenu}
            />
          )}
          <div className=" absolute right-0 mt-60 z-10">
            {openMenu && <DropdownMenu />}
          </div>
        </div>

        <div
          className={`hidden lg:flex ${props.bg} h-[62px] justify-end items-center pr-16`}
        >
          <ul className={`flex gap-10 ${props.text} text-lg items-center`}>
            <li className=" flex flex-col items-center relative">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <a className="" href="">
                  Home
                </a>
              </NavLink>
            </li>
            <li className=" flex flex-col items-center relative">
              <NavLink
                to="/investors"
                className={
                  location.pathname === "/investors" ? activeLink : normalLink
                }
              >
                <a href="">Investors</a>
              </NavLink>
              {location.pathname === "/investors" && (
                <div className="w-11 h-1.5 rounded bg-secondary absolute top-8"></div>
              )}
            </li>
            <li className=" flex flex-col items-center relative">
              <NavLink
                to="/owners"
                className={
                  location.pathname === "/owners" ? activeLink : normalLink
                }
              >
                <a href="">Business Owners</a>
              </NavLink>
              {location.pathname === "/owners" && (
                <div className="w-11 h-1.5 rounded bg-secondary absolute top-8"></div>
              )}
            </li>
            <li className=" flex flex-col items-center relative">
              <NavLink
                to="/aboutus"
                className={
                  location.pathname === "/aboutus" ? activeLink : normalLink
                }
              >
                <a href="">About Us</a>
              </NavLink>
              {location.pathname === "/aboutus" && (
                <div className="w-11 h-1.5 rounded bg-secondary absolute top-8"></div>
              )}
            </li>
            <li className="px-5 py-2 bg-secondary text-white rounded-[8px] cursor-pointer hover:scale-105">
              <a className={`${props.contact} font-bold`} href="">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default SecondNav;
