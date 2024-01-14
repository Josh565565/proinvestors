import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
// Images Import start
// import Logo from "../Landingpage/images/logo.svg";
import Logo from "../images/logo2.svg";
import BG from "../images/signup.png";
import Google from "../images/google.svg";

function SignUp(props) {
  return (
    <div className="flex flex-col items-center justify-center absolute top-0 mt-10">
      <div className=" flex flex-row">
        <div>
          <img
            src={BG}
            alt=""
            className="hidden lg:block lg:w-[455px] lg:h-[1110px] xl:w-[545px] xl:h-[1110px]"
          />
        </div>
        <div className="bg-white p-5 mx-5 lg:mx-0 flex flex-col items-center lg:w-[455px] lg:h-[1110px] xl:w-[545px] xl:h-[1110px] relative">
          <div
            onClick={props.close}
            className=" flex items-center justify-center w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] rounded-full bg-secondary absolute right-0 mt-[-10px] mr-2 cursor-pointer"
          >
            <FontAwesomeIcon
              className="text-[#000] h-6"
              icon="fa-solid fa-close"
              onClick={props.close}
            />
          </div>
          <div className="flex items-center">
            <img src={Logo} alt="Logo Image" className="w-[45px]" />
            <p className=" text-xl text-b lg:text-[1.5rem]">
              <span className="text-[#00FFFF] font-bold ">Pro</span>
              Investors
            </p>
          </div>
          {/*  */}
          <div className="flex flex-col items-center mt-3">
            <p className="text-b text-xl lg:text-[1.75rem] font-bold font-Roboto">
              Register with us
            </p>
            <p className="text-[#737373] text-base lg:text-lg font-Roboto">
              Kindly fill the form below
            </p>
          </div>
          {/*  */}
          <div>
            <form className="flex flex-col items-center">
              <div className="flex flex-row gap-3 md:gap-7 mt-10">
                <div className="">
                  <p className="text-[#737373] text-sm lg:text-lg font-Roboto pb-1">
                    First Name
                  </p>
                  <input
                    type="text"
                    className="w-[150px] h-[45px] lg:w-[204px] lg:h-[54px] xl:w-[224px] xl:h-[54px] rounded-[8px] outline outline-1 pl-3"
                  />
                </div>
                <div className="">
                  <p className="text-[#737373] text-sm lg:text-lg font-Roboto pb-1">
                    Last Name
                  </p>
                  <input
                    type="text"
                    className="w-[150px] h-[45px] lg:w-[204px] lg:h-[54px] xl:w-[224px] xl:h-[54px] rounded-[8px] outline outline-1 pl-3"
                  />
                </div>
              </div>
              <div className="mt-5">
                <p className="text-[#737373] text-sm lg:text-lg font-Roboto pb-1">
                  Email Address
                </p>
                <input
                  type="text"
                  className="w-[310px] h-[45px] lg:w-[435px] lg:h-[54px] xl:w-[470px] xl:h-[54px] rounded-[8px] outline outline-1 pl-3"
                />
              </div>

              <div className="mt-5">
                <p className="text-[#737373] text-sm lg:text-lg font-Roboto pb-1">
                  Phone Number
                </p>
                <input
                  type="text"
                  className="w-[310px] h-[45px] lg:w-[435px] lg:h-[54px] xl:w-[470px] xl:h-[54px] rounded-[8px] outline outline-1 pl-3"
                />
              </div>
              {/*  */}
              <div className="mt-5">
                <p className="text-[#737373] text-sm lg:text-lg font-Roboto pb-1">
                  Category
                </p>
                <select className="w-[310px] h-[45px] lg:w-[435px] lg:h-[54px] xl:w-[470px] xl:h-[54px] rounded-[8px] px-2 outline outline-1">
                  <option value="">Select one</option>
                  <option value="option1">Investor</option>
                  <option value="option2">Business owner</option>
                </select>
              </div>
              {/*  */}
              <div className="mt-5">
                <p className="text-[#737373] text-sm lg:text-lg font-Roboto pb-1">
                  Password
                </p>
                <input
                  type="password"
                  className="w-[310px] h-[45px] lg:w-[435px] lg:h-[54px] xl:w-[470px] xl:h-[54px] rounded-[8px] outline outline-1 pl-3"
                />
              </div>
              <div className="mt-5">
                <p className="text-[#737373] text-sm lg:text-lg font-Roboto pb-1">
                  Comfirm Password
                </p>
                <input
                  type="password"
                  className="w-[310px] h-[45px] lg:w-[435px] lg:h-[54px] xl:w-[470px] xl:h-[54px] rounded-[8px] outline outline-1 pl-3"
                />
              </div>
              <div className="mt-10">
                <input
                  type="button"
                  value="Register"
                  className="w-[310px] h-[45px] lg:w-[435px] lg:h-[54px] xl:w-[470px] xl:h-[54px] rounded-[8px] font-semibold text-xl lg:text-[1.375rem] bg-secondary cursor-pointer hover:scale-105"
                />
              </div>
              <div className="mt-5">
                <button className="w-[310px] h-[45px] lg:w-[435px] lg:h-[54px] xl:w-[470px] xl:h-[54px]  text-base rounded-[8px] font-Roboto font-semibold lg:text-lg outline outline-1 bg-white flex items-center gap-3 justify-center hover:scale-105">
                  <img src={Google} alt="" /> <p>Register with Google</p>
                </button>
              </div>
            </form>
            <p className="text-base text-center mt-5 text-[#000] lg:text-lg font-Roboto">
              Already have an account
              <span
                onClick={() => {
                  props.close();
                  props.open();
                }}
                className="text-base lg:text-[1.375rem] text-secondary font-semibold font-Roboto ml-1 cursor-pointer"
              >
                LogIn
              </span>
            </p>
            <div className="flex items-center gap-2 justify-center mt-4">
              <input
                type="checkbox"
                className="w-[20px] h-[20px] lg:w-[28px] lg:h-[28px] bg-secondary"
              />{" "}
              <p className="text-[#000] text-xs lg:text-lg font-Roboto">
                I agree to{" "}
                <span className="text-secondary cursor-pointer">
                  {" "}
                  Terms of use{" "}
                </span>{" "}
                and{" "}
                <span className="text-secondary cursor-pointer">
                  Privacy Policy
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
