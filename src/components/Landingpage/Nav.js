import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Images import
import Logo from "./images/logo.svg";

function Nav() {
  return (
    <div className="bg-primary pl-24">
      <nav className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="Logo Image" />
          <p className="text-[2rem] text-white">
            <span className="text-[#00FFFF] font-bold ">Pro</span>
            Investors
          </p>
        </div>

        <div className="lg:hidden">
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </div>

        <div className="hidden lg:flex bg-white w-[46%] h-[62px] rounded-s-[50px] justify-evenly items-center ">
          <ul className="flex gap-12 text-[#717171] text-lg">
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
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
