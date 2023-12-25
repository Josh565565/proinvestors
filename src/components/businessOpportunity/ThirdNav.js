import React, { useEffect, useRef, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DropdownMenu from "../Landingpage/DropdownMenu";

// Images import
import Logo from "../Landingpage/images/logo.svg";
import Logo2 from "../images/logo2.svg";

function ThirdNav() {
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
  return (
    <div className="bg-white mt-5 flex justify-between lg:pl-0 lg:mt-0">
      <div className="flex bg-white xl:bg-primary relative lg:w-[290px]  lg:pt-20">
        <img
          src={Logo}
          alt="Logo"
          className=" hidden w-10 ml-4 lg:w-14 lg:absolute lg:mt-[-54px] lg:ml-7 cursor-pointer xl:block"
        />
        <img
          src={Logo2}
          alt="Logo"
          className="block w-10 ml-4 lg:w-14 lg:absolute lg:mt-[-27px] lg:ml-5 cursor-pointer xl:hidden"
        />
        <p className="text-xl text-b mt-1 lg:mt-[-15px] xl:text-white lg:text-[1.625rem] lg:w-10 lg:h-3 lg:ml-20 cursor-pointer">
          <span className="text-[#00FFFF] font-bold ">Pro</span>
          Investors
        </p>
      </div>
      <div>
        <nav className="flex justify-between items-center lg:h-40">
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
                className="text-[#000] h-6"
                icon="fa-solid fa-close"
                onClick={toggleMenu}
              />
            ) : (
              <FontAwesomeIcon
                className="text-[#000] h-6"
                icon="fa-solid fa-bars"
                onClick={toggleMenu}
              />
            )}
            <div className=" absolute right-0 mt-60 z-10">
              {openMenu && <DropdownMenu />}
            </div>
          </div>

          <div className="hidden lg:flex bg-white  h-[62px] justify-end items-center pr-16 ">
            <ul className="flex gap-10 text-[#717171] text-lg items-center">
              <li className=" flex flex-col items-center relative">
                <a className=" text-primary font-bold text-xl " href="">
                  Home
                </a>
                <div className="w-11 h-1.5 rounded bg-primary absolute top-10"></div>
              </li>
              <li>
                <a href="">Investors</a>
              </li>
              <li>
                <a href="">Business Owners</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li className="px-5 py-2 bg-secondary text-white rounded-[8px]">
                <a className="text-b font-bold" href="">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default ThirdNav;
