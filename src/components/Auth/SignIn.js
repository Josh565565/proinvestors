import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Images Import start
// import Logo from "../Landingpage/images/logo.svg";
import Logo from "../images/logo2.svg";
import BG from "../images/signin.png";
import Google from "../images/google.svg";

function SignIn(props) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="flex flex-col items-center mx-5 absolute top-0 mt-10">
      <div className="flex flex-row">
        <div>
          <img
            src={BG}
            alt=""
            className="hidden lg:block lg:w-[455px] lg:h-[900px] xl:w-[704px] xl:h-[1072px]"
          />
        </div>
        <div className="bg-white rounded lg:rounded-none p-5 mx-5 lg:mx-0 flex flex-col items-center lg:w-[455px] lg:h-[900px] xl:w-[704px] xl:h-[1072px] relative pt-10">
          <div
            onClick={props.close}
            className="flex items-center justify-center w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] rounded-full bg-secondary absolute right-0 mt-[-30px] mr-2 cursor-pointer"
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
          <div className="flex flex-col items-center mt-10 lg:mt-20">
            <p className="text-b text-xl lg:text-[1.75rem] font-bold font-Roboto">
              Login
            </p>
          </div>
          {/*  */}
          <div>
            <form className="flex flex-col items-center">
              <div className="mt-5">
                <p className="text-[#737373] text-sm lg:text-lg font-Roboto pb-1">
                  Email Address
                </p>
                <input
                  type="text"
                  className="w-[300px] h-[54px] lg:w-[390px] lg:h-[54px] xl:w-[548px] xl:h-[73px] rounded-[8px] outline outline-1 pl-3"
                />
              </div>

              {/*  */}
              <div className="lg:mt-5 xl:mt-12">
                <p className="text-[#737373] text-sm lg:text-lg font-Roboto pb-1">
                  Password
                </p>
                <input
                  type="password"
                  className="w-[300px] h-[54px] lg:w-[390px] lg:h-[54px] xl:w-[548px] xl:h-[73px] rounded-[8px] outline outline-1 pl-3"
                />
              </div>
              {/*  */}
              <div className="ml-[170px] lg:ml-[200px] xl:ml-[360px] mt-3">
                <p className=" text-right text-primary text-base lg:text-[1.5rem] font-Inter cursor-pointer">
                  Forgot password?
                </p>
              </div>
              {/*  */}

              <div className="mt-10 lg:mt-20">
                <input
                  type="button"
                  value="LogIn"
                  className="w-[300px] h-[54px] lg:w-[390px] lg:h-[54px] xl:w-[536px] xl:h-[73px] rounded-[8px] font-semibold text-white text-xl lg:text-[1.375rem] bg-primary cursor-pointer"
                />
              </div>
              <div className="mt-5 xl:mt-10">
                <button className="w-[300px] h-[54px] lg:w-[390px] lg:h-[54px] xl:w-[536px] xl:h-[73px]  text-base rounded-[8px] font-Roboto font-semibold lg:text-lg outline outline-1 bg-white flex items-center gap-3 justify-center">
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
                Sign Up
              </span>
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <input
                type="checkbox"
                className="w-[20px] h-[20px] lg:w-[28px] lg:h-[28px] bg-secondary"
              />{" "}
              <p className="text-[#000] text-xs lg:text-lg font-Roboto">
                I agree to{" "}
                <span className="text-primary cursor-pointer">
                  {" "}
                  Terms of use{" "}
                </span>{" "}
                and{" "}
                <span className="text-primary cursor-pointer">
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

export default SignIn;
