import React from "react";

// Images import start
import Twitter from "../images/Twitter.png";
import LinkedIn from "../images/LinkedIn.png";
import Instagram from "../images/Instagram.png";
import Facebook from "../images/Facebook.png";

function AboutCard(props) {
  return (
    <div>
      {/* Card start */}
      <div className="flex flex-col  p-5 bg-primary rounded-[20px] w-[250px] h-[350px] lg:w-[320px] lg:h-[385px]">
        <div className=" overflow-hidden rounded-[5px] w-[212px] h-[166px] lg:w-[280px] lg:h-[210px]">
          <img
            src={props.pic}
            alt="Twitter"
            className=" w-[212px] h-[166px] lg:w-[280px] lg:h-[210px]"
          />
        </div>
        <div>
          <p className="text-[#F2F2F2] mt-7 font-bold text-lg font-Roboto lg:text-xl">
            {props.name}
          </p>
          <p className="text-[#D9D9D9] mt-2 font-medium text-sm font-Satoshi lg:text-base">
            {props.about}
          </p>
          <div className="flex justify-around mt-8">
            <img
              src={Twitter}
              alt="Twitter"
              className="cursor-pointer w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]"
            />
            <img
              src={LinkedIn}
              alt="LinkedIn"
              className="cursor-pointer w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]"
            />
            <img
              src={Instagram}
              alt="Instagram"
              className="cursor-pointer w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]"
            />
            <img
              src={Facebook}
              alt="Facebook"
              className="cursor-pointer w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]"
            />
          </div>
        </div>
      </div>
      {/* Card end */}
    </div>
  );
}

export default AboutCard;
