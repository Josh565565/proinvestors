import React, { useEffect, useRef, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// Images import
import Logo from "./images/logo.svg";
import DropdownMenu from "./DropdownMenu";

function Nav() {
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
    <div className="bg-primary lg:pl-8">
      <nav className="flex justify-between items-center lg:h-40">
        <div className="flex items-center ">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo Image"
              className="w-10 ml-4 lg:w-16 cursor-pointer"
            />
          </Link>
          <Link to="/">
            <p className=" text-xl text-white lg:text-[2rem] cursor-pointer">
              <span className="text-[#00FFFF] font-bold ">Pro</span>
              Investors
            </p>
          </Link>
        </div>

        <div className=" mr-5 relative lg:hidden ">
          {showCloseMenu ? (
            <FontAwesomeIcon
              className="text-[#fff] h-6"
              icon="fa-solid fa-close"
              onClick={toggleMenu}
            />
          ) : (
            <FontAwesomeIcon
              className="text-[#fff] h-6"
              icon="fa-solid fa-bars"
              onClick={toggleMenu}
            />
          )}
          {openMenu && (
            <div
              className="fixed top-0 left-0 w-[100%] h-[100%] bg-b opacity-70   via-transparent from-gray-100 to-gray-100"
              onClick={toggleMenu}
            />
          )}
          <div className=" absolute right-0">
            {openMenu && <DropdownMenu />}
          </div>
        </div>

        <div className="hidden lg:flex bg-white w-[50%] h-[62px] rounded-s-[50px] justify-evenly items-center pr-5 ">
          <ul className="flex gap-7 text-[#717171] text-lg">
            <li className=" flex flex-col items-center relative">
              <Link to="/">
                <a className=" text-primary font-bold text-xl " href="">
                  Home
                </a>
              </Link>
              <div className="w-11 h-1.5 rounded bg-primary absolute top-10"></div>
            </li>
            <li>
              <Link to="/investors">
                <a href="">Investors</a>
              </Link>
            </li>
            <li>
              <Link to="/owners">
                <a href="">Business Owners</a>
              </Link>
            </li>
            <li>
              <Link to="/aboutus">
                <a href="">About Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
