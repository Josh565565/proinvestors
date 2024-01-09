import React from "react";

// Images import
import FootLogo from "./images/footer-logo.svg";
import Instagram from "./images/insta(1).svg";
import YouTube from "./images/youtube.svg";
import Facebook from "./images/facebook.svg";

function Footer() {
  return (
    <div>
      <div className="bg-[#000D2C] pt-[113px] pb-[55px] md:flex md:justify-between md:relative lg:px-12">
        <div className="flex justify-between px-5 ">
          <div>
            <div className="flex items-center cursor-pointer">
              <img src={FootLogo} alt="Logo" className="md:w-12" />
              <p className=" text-xl text-[#D9D9D9] ml-1 lg:text-[2rem] md:text-[1.5rem]">
                <span className="font-bold text-secondary">Pro</span>
                Investors
              </p>
            </div>
            <p className="text-[#F2F2F2] text-xs w-[200px] mt-2 md:text-sm md:w-[240px]">
              Promote cooperation and investment
              opportunities, Build connections and promote success.
            </p>
            <div className="flex gap-5 mt-7">
              <img
                src={Instagram}
                alt="Instagram Logo"
                className="md:w-7 cursor-pointer lg:hover:scale-110"
              />
              <img
                src={YouTube}
                alt="YouTube Logo"
                className="md:w-7 cursor-pointer lg:hover:scale-110"
              />
              <img
                src={Facebook}
                alt="Facebook Logo"
                className="md:w-5 cursor-pointer lg:hover:scale-110"
              />
            </div>
          </div>
          {/*  */}
          <div className=" md:absolute md:right-[395px] lg:right-[500px] xl:right-[640px]">
            <h3 className="uppercase text-[#717171] text-base font-Roboto font-bold md:text-[1.0625rem] xl:text-xl">
              For Investor
            </h3>
            <p className="text-[#DADADA] text-[0.875rem] font-Inter md:text-[0.975rem] xl:text-lg cursor-pointer lg:hover:scale-105">
              Why Invest
            </p>
            <p className="text-[#DADADA] text-[0.875rem] font-Inter md:text-[0.975rem] xl:text-lg cursor-pointer lg:hover:scale-105">
              How it Works
            </p>
            <p className="text-[#DADADA] text-[0.875rem] font-Inter md:text-[0.975rem] xl:text-lg cursor-pointer lg:hover:scale-105">
              Risk
            </p>
            <p className="text-[#DADADA] text-[0.875rem] font-Inter md:text-[0.975rem] xl:text-lg cursor-pointer lg:hover:scale-105">
              FAQ
            </p>
          </div>
        </div>
        {/*  */}
        <div className="flex justify-between px-5 mt-20 md:mt-0 md:gap-5 lg:gap-10 xl:gap-20">
          <div>
            <h3 className="uppercase text-[#717171] text-base font-Roboto font-bold md:text-[1.0625rem] xl:text-xl">
              For Business Owner
            </h3>
            <p className="text-[#DADADA] text-[0.875rem] font-Inter md:text-[0.975rem] xl:text-lg cursor-pointer lg:hover:scale-105">
              Why Raise
            </p>
            <p className="text-[#DADADA] text-[0.875rem] font-Inter md:text-[0.975rem] xl:text-lg cursor-pointer lg:hover:scale-105">
              Learn
            </p>
            <p className="text-[#DADADA] text-[0.875rem] font-Inter md:text-[0.975rem] xl:text-lg cursor-pointer lg:hover:scale-105">
              FAQ
            </p>
          </div>
          <div>
            <h3 className="uppercase text-[#717171] text-base font-Roboto font-bold md:text-[1.0625rem] xl:text-xl">
              Links
            </h3>
            <p className="text-[#DADADA] text-[0.875rem] font-Inter md:text-[0.975rem] xl:text-lg cursor-pointer lg:hover:scale-105">
              About Us
            </p>
            <p className="text-[#DADADA] text-[0.875rem] font-Inter md:text-[0.975rem] xl:text-lg cursor-pointer lg:hover:scale-105">
              Privacy Policy
            </p>
            <p className="text-[#DADADA] text-[0.875rem] font-Inter md:text-[0.975rem] xl:text-lg cursor-pointer lg:hover:scale-105">
              Help and Support
            </p>
            <p className="text-[#DADADA] text-[0.875rem] font-Inter md:text-[0.975rem] xl:text-lg cursor-pointer lg:hover:scale-105">
              Terms and Conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
