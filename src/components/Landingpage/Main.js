import React from "react";

// Images import start
import MAIN1 from "./images/main1.svg";
import MAIN2 from "./images/main2.svg";
import MAIN3 from "./images/main3.svg";
import INFO1 from "./images/info1.svg";
import INFO2 from "./images/info2.svg";
import INFO3 from "./images/info3(1).svg";
import INFOBIG from "./images/info-big.svg";
import STAR1 from "./images/star1.svg";
import STAR2 from "./images/star2.svg";
import person1 from "./images/person1.png";
import person2 from "./images/person2.png";
import person3 from "./images/person3.png";
import Robert from "./images/robert.svg";

function Main() {
  return (
    <div>
      <div className="flex justify-evenly pt-5">
        <div>
          <p className="text-2xl font-bold text-secondary md:text-3xl">200+</p>
          <p className="text-[#222222] text-[0.8125rem] md:text-[1rem]">
            Investors
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold text-secondary md:text-3xl">$100M</p>
          <p className="text-[#222222] text-[0.8125rem] md:text-[1rem]">
            Funds deployed
          </p>
        </div>
        <div>
          <p className="text-2xl font-bold text-secondary md:text-3xl">500+</p>
          <p className="text-[#222222] text-[0.8125rem] md:text-[1rem]">
            Business Owners
          </p>
        </div>
      </div>
      <div className="flex justify-center pt-20">
        <div className="flex items-center justify-center border-2 border-[#222] w-[140px] h-10 rounded-full">
          <p className="text-[#313131] md:text-lg">How it Works</p>
        </div>
      </div>
      <div>
        <div className="flex gap-5 items-center justify-between mt-12">
          <img
            src={MAIN1}
            alt="Side image 1"
            className="w-[214px] sm:w-[314px] md:w-[325px]"
          />
          <div>
            <p className="flex items-center justify-center rounded-full bg-primary text-white w-10 h-10 ">
              1
            </p>
            <p className="text-xs w-[90%] capitalize md:text-sm">
              Click on find a business owner and Select A business you like to
              invest in
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse gap-5 items-center justify-between mt-12">
          <img
            src={MAIN2}
            alt="Side image 1"
            className="w-[214px] sm:w-[314px] md:w-[325px]"
          />
          <div className="pl-5">
            <p className="flex items-center justify-center rounded-full bg-primary text-white w-10 h-10 ">
              2
            </p>
            <p className="text-xs w-[90%] capitalize md:text-sm">
              Get more information about thebusiness, and know more about the
              owner before you invest
            </p>
          </div>
        </div>
        <div className=" mt-12 relative">
          <div className="flex flex-col items-end absolute right-10">
            <div className="flex flex-col">
              <p className="flex items-center justify-center rounded-full bg-primary text-white w-10 h-10 ">
                3
              </p>
              <p className="text-xs capitalize md:text-sm md:pr-32">
                Proceed with your investment.
              </p>
            </div>
          </div>
          <img src={MAIN3} alt="Side image 1" className="" />
        </div>
      </div>
      <div className="flex flex-col items-center mt-20 md:flex-row md:justify-center md:gap-2">
        <div>
          <div className="">
            <p className="text-b text-lg">Why Choose Us</p>
            <h3 className="text-b text-lg font-bold w-[320px]">
              Choose Us for Investor Connections to Unlock Growth Potential"
            </h3>
          </div>
          <div className="flex gap-4 mt-5">
            <img src={INFO1} alt="" className="w-16" />
            <div className="">
              <h3 className="text-b text-base font-bold">
                Accurate Information
              </h3>
              <p className="text-[0.6875rem] text-[#717171] w-[280px]">
                We give information on wealthy investors as well as top
                selling businesses established by small entrepreneurs.
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <img src={INFO2} alt="" className="w-16" />
            <div className="">
              <h3 className="text-b text-base font-bold">Dedicated Team</h3>
              <p className="text-[0.6875rem] text-[#717171] w-[280px]">
                They provide clear and efficient communications, assisting
                investors in educating and assisting small business owners in
                properly presenting their businesses.
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <img src={INFO3} alt="" className="w-16" />
            <div className="">
              <h3 className="text-b text-base font-bold">24/7 Hours Support</h3>
              <p className="text-[0.6875rem] text-[#717171] w-[280px]">
                Our 24-hour support team provides assistance with a wide range
                of inquiries, one of the primary roles of the support team is to
                offer technical assistance.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src={INFOBIG} alt="" className="w-[354px] mt-10" />
        </div>
      </div>
      {/* Testimonials start */}
      <div className="flex flex-col items-center">
        <div className="text-center mt-10">
          <p className="text-[#282828] text-base">Testimonials</p>
          <p className="text-[#282828] text-base font-bold">
            What our Happy Users are saying
          </p>
        </div>
        {/*  */}
        <div className="">
          <div className="bg-primary w-[314px] h-[228px] rounded-br-[60px] mt-10 relative">
            <div className="w-[50px] h-[50px] rounded-full bg-secondary absolute top-[-20px] left-4"></div>
            <div className="pt-9 ml-4">
              <img src={STAR1} alt="" className="w-[190px]" />
              <p className="text-xs text-[#F2F2F2] pr-5 mt-3">
                I’ve been using this investment website for six months now and i
                have had some great opportunities to invest in small businesses.
                the platform is easy to use and provides all the information i
                need to make informed decisions
              </p>
              <div className="flex items-center gap-2 mt-5">
                <img src={person1} alt="Man Pic" className="w-10 h-10" />
                <div className="inline">
                  <p className="text-[#F2F2F2] text-xs font-bold">
                    Richard james
                  </p>
                  <p className="text-[#D9D9D9] text-[0.6875rem] font-medium">
                    CEO of Techub
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary w-[314px] h-[228px] rounded-br-[60px] mt-10 relative">
            <div className="w-[50px] h-[50px] rounded-full bg-secondary absolute top-[-20px] left-4"></div>
            <div className="pt-9 ml-4">
              <img src={STAR1} alt="" className="w-[190px]" />
              <p className="text-xs text-[#F2F2F2] pr-5 mt-3">
                I’ve been using this investment website for six months now and i
                have had some great opportunities to invest in small businesses.
                the platform is easy to use and provides all the information i
                need to make informed decisions
              </p>
              <div className="flex items-center gap-2 mt-5">
                <img src={person1} alt="Man Pic" className="w-10 h-10" />
                <div className="inline">
                  <p className="text-[#F2F2F2] text-xs font-bold">
                    Richard james
                  </p>
                  <p className="text-[#D9D9D9] text-[0.6875rem] font-medium">
                    CEO of Techub
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary w-[314px] h-[228px] rounded-br-[60px] mt-10 relative">
            <div className="w-[50px] h-[50px] rounded-full bg-secondary absolute top-[-20px] left-4"></div>
            <div className="pt-9 ml-4">
              <img src={STAR1} alt="" className="w-[190px]" />
              <p className="text-xs text-[#F2F2F2] pr-5 mt-3">
                I’ve been using this investment website for six months now and i
                have had some great opportunities to invest in small businesses.
                the platform is easy to use and provides all the information i
                need to make informed decisions
              </p>
              <div className="flex items-center gap-2 mt-5">
                <img src={person1} alt="Man Pic" className="w-10 h-10" />
                <div className="inline">
                  <p className="text-[#F2F2F2] text-xs font-bold">
                    Richard james
                  </p>
                  <p className="text-[#D9D9D9] text-[0.6875rem] font-medium">
                    CEO of Techub
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      {/* What we do start */}
      <div className="mt-10">
        <p className="text-center text-b font-bold text-xl pb-4">What We Do</p>
        <div className="bg-primary">
          <div className="pl-5">
            <p className="text-[#DADBD8] text-xs w-80 pt-10">
              At ProInvestors, we believe in the power of collaboration and
              understand that successful ventures are built on strong
              partnerships. Whether you are a seasoned investor looking to
              diversify your portfolio or an aspiring entrepreneur seeking
              funding to turn your vision into reality, we have got you covered.
            </p>
            <p className="text-[#F2F2F2] text-base font-bold">Robert Daniel</p>
          </div>
          <div>
            <img src={Robert} alt="Robert Pic" />
          </div>
        </div>
      </div>
      {/* What we do end */}

      {/* Our Newsletter start */}
      <div className="mt-10">
        <p className="text-center text-xl text-[#282828] font-bold mb-4">
          Our Newsletter
        </p>
        <div className="bg-primary mx-[10%] flex flex-col items-center justify-center pb-10">
          <div className="mt-7 w-[290px]">
            <h1 className="text-xl font-bold text-white">
              Stay Updated with our
              <br /> weekly Newsletter
            </h1>
            <p className="text-[#F2F2F2] text-xs w-[290px]">
              Get Exclusive News, Tips, and Opportunities from ProInvestors
              Insider to Unlock Your Investment Potential with Our Exclusive
              Newsletter!"
            </p>
          </div>
          <div className="mt-7 block">
            <input
              type="email"
              placeholder="Email"
              className="w-[290px] h-[50px] rounded pl-2"
            />
            <button className="w-[290px] h-[50px] rounded bg-secondary text-b text-base mt-4 block font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* Our Newsletter end */}
    </div>
  );
}

export default Main;
