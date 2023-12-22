import React, { useState, useEffect } from "react";
import SecondNav from "./SecondNav";
import Top from "./Top";
import Footer from "../Landingpage/Footer";

import { item1, item2, tran } from "./data";

// Imapges import start
import Arrow from "../images/arrow.svg";
import Tran from "../images/transaction-arrow.svg";

function Owners() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };
  const slideRight2 = () => {
    var slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft + 300;
  };
  const slideRight3 = () => {
    var slider = document.getElementById("slider3");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  // Helper function to chunk the array into sets of four items
  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, index * size + size)
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Update state based on window width
    };

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check for screen size when component mounts
    setIsSmallScreen(window.innerWidth <= 768);

    // Cleanup function for the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <SecondNav />
      <Top
        head="Investment opportunities on Proinvestor."
        body1="On Proinvestor, you can look at current investment options. All
        companies have been reviewed and have passed a thorough investigation."
        body2="Top Business Opportunities to Boost Your Investment Portfolio"
        search="Search for business"
      />

      <div>
        <div className="">
          <div className="flex justify-between items-center pl-5">
            <p className="text-[#313131] text-base font-bold font-Roboto lg:text-2xl">
              Newly listed businesses
            </p>
            <p className="cursor-pointer text-b text-sm font-bold pr-5 hover:text-primary lg:text-2xl">
              See All
            </p>
          </div>
          {/* Item start  */}
          <div className="relative">
            <div
              className="overflow-x-scroll no-scrollbar scroll scroll-smooth flex flex-wrap  gap-5 pl-5 pr-1"
              id="slider"
            >
              {/* Item1 start */}
              {(isSmallScreen ? chunkArray(item1, 6) : [item1]).map(
                (chunk, chunkIndex) => (
                  <div className="flex gap-5" key={chunkIndex}>
                    {chunk.map((item, index) => (
                      <div
                        className="mt-3"
                        key={index}
                        style={{ flexBasis: "calc(25% - 1rem)" }}
                      >
                        <div className="w-[233px] h-[150px] rounded-t-xl overflow-hidden lg:w-[400px] lg:h-[197px]">
                          <img
                            src={item.img}
                            alt=""
                            className="lg:w-[400px] lg:h-[197px]"
                          />
                        </div>
                        <div className="px-2 py-2 bg-primary w-[233px] h-[96px] rounded-b-xl lg:w-[400px] lg:h-[145px]">
                          <p className="text-[#F8F8F8] text-sm font-bold font-Roboto lg:text-xl">
                            {item.name}
                          </p>
                          <p className="text-[#D9D9D9] text-xs font-Inter pt-2 lg:text-sm">
                            {item.description}
                          </p>
                          <div className="pt-2">
                            <div className="flex justify-between pr-[25px]">
                              <p className="text-[#F8F8F8] text-[0.75rem] font-bold font-Roboto lg:text-xl">
                                {item.amountRaised}
                              </p>
                              <p className="text-[#F8F8F8] text-[0.75rem] font-semibold font-Roboto mr-[50px] lg:text-xl lg:mr-[72px]">
                                {item.numberOfInvestor}
                              </p>
                              <p className="text-[#F8F8F8] text-[0.75rem] font-semibold font-Roboto lg:text-xl lg:pr-5">
                                {item.minInvest}
                              </p>
                            </div>
                            <div className="flex justify-between">
                              <p className="text-[#D9D9D9] text-[0.625rem] font-Inter lg:text-base">
                                {item.Raised}
                              </p>
                              <p className="text-[#D9D9D9] text-[0.625rem] font-Inter lg:text-base">
                                {item.Investors}
                              </p>
                              <p className="text-[#D9D9D9] text-[0.625rem] font-Inter lg:text-base">
                                {item.MinInvestment}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              )}
              {/* Item1 end */}
            </div>
            <button
              onClick={slideRight}
              className=" flex absolute right-0 top-0 mt-[100px] items-center justify-center w-[40px] h-[40px] rounded-full bg-[#415993] opacity-90 hover:opacity-100 lg:mt-[150px]"
            >
              <img src={Arrow} alt="" className="" />
            </button>
          </div>

          {/* items end */}
        </div>
        {/* Top Business start */}
        <div className="mt-10">
          <div className="flex justify-between items-center pl-5">
            <p className="text-[#313131] text-base font-bold font-Roboto lg:text-2xl">
              Top businesses
            </p>
            <p className="cursor-pointer text-b text-sm font-bold pr-5 hover:text-primary lg:text-2xl">
              See All
            </p>
          </div>
          {/* Item start  */}
          <div className="relative">
            <div
              className="overflow-x-scroll no-scrollbar scroll scroll-smooth flex flex-wrap  gap-5 pl-5 pr-1"
              id="slider2"
            >
              {/* Item1 start */}
              {chunkArray(item2, 10).map((chunk, chunkIndex) => (
                <div className="flex gap-5" key={chunkIndex}>
                  {chunk.map((item, index) => (
                    <div
                      className="mt-3"
                      key={index}
                      style={{ flexBasis: "calc(25% - 1rem)" }}
                    >
                      <div className="w-[233px] h-[150px] rounded-t-xl overflow-hidden lg:w-[400px] lg:h-[197px]">
                        <img
                          src={item.img}
                          alt=""
                          className="lg:w-[400px] lg:h-[197px]"
                        />
                      </div>
                      <div className="px-2 py-2 bg-primary w-[233px] h-[96px] rounded-b-xl lg:w-[400px] lg:h-[145px]">
                        <p className="text-[#F8F8F8] text-sm font-bold font-Roboto lg:text-xl">
                          {item.name}
                        </p>
                        <p className="text-[#D9D9D9] text-xs font-Inter pt-2 lg:text-sm">
                          {item.description}
                        </p>
                        <div className="pt-2">
                          <div className="flex justify-between pr-[25px]">
                            <p className="text-[#F8F8F8] text-[0.75rem] font-bold font-Roboto lg:text-xl">
                              {item.amountRaised}
                            </p>
                            <p className="text-[#F8F8F8] text-[0.75rem] font-semibold font-Roboto mr-[50px] lg:text-xl lg:mr-[72px]">
                              {item.numberOfInvestor}
                            </p>
                            <p className="text-[#F8F8F8] text-[0.75rem] font-semibold font-Roboto lg:text-xl lg:pr-5">
                              {item.minInvest}
                            </p>
                          </div>
                          <div className="flex justify-between">
                            <p className="text-[#D9D9D9] text-[0.625rem] font-Inter lg:text-base">
                              {item.Raised}
                            </p>
                            <p className="text-[#D9D9D9] text-[0.625rem] font-Inter lg:text-base">
                              {item.Investors}
                            </p>
                            <p className="text-[#D9D9D9] text-[0.625rem] font-Inter lg:text-base">
                              {item.MinInvestment}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
              {/* Item1 end */}
            </div>
            <button
              onClick={slideRight2}
              className=" flex absolute right-0 top-0 mt-[100px] items-center justify-center w-[40px] h-[40px] rounded-full bg-[#415993] opacity-90 hover:opacity-100 lg:mt-[150px]"
            >
              <img src={Arrow} alt="" className="" />
            </button>
          </div>

          {/* items end */}
        </div>
        {/* Top Business end */}
        {/* Funded Business start */}
        <div className="mt-10">
          <div className="flex justify-between items-center pl-5">
            <p className="text-[#313131] text-base font-bold font-Roboto lg:text-2xl">
              Funded businesses
            </p>
            <p className="cursor-pointer text-b text-sm font-bold pr-5 hover:text-primary lg:text-2xl">
              See All
            </p>
          </div>
          {/* Item start  */}
          <div className="relative">
            <div
              className="overflow-x-scroll no-scrollbar scroll scroll-smooth flex flex-wrap  gap-5 pl-5 pr-1"
              id="slider3"
            >
              {/* Item1 start */}
              {(isSmallScreen ? chunkArray(item1, item1.length) : [item1]).map(
                (chunk, chunkIndex) => (
                  <div className="flex gap-5" key={chunkIndex}>
                    {chunk.map((item, index) => (
                      <div
                        className="mt-3"
                        key={index}
                        style={{ flexBasis: "calc(25% - 1rem)" }}
                      >
                        <div className="w-[233px] h-[150px] rounded-t-xl overflow-hidden lg:w-[400px] lg:h-[197px]">
                          <img
                            src={item.img}
                            alt=""
                            className="lg:w-[400px] lg:h-[197px]"
                          />
                        </div>
                        <div className="px-2 py-2 bg-primary w-[233px] h-[96px] rounded-b-xl lg:w-[400px] lg:h-[145px]">
                          <p className="text-[#F8F8F8] text-sm font-bold font-Roboto lg:text-xl">
                            {item.name}
                          </p>
                          <p className="text-[#D9D9D9] text-xs font-Inter pt-2 lg:text-sm">
                            {item.description}
                          </p>
                          <div className="pt-2">
                            <div className="flex justify-between pr-[25px]">
                              <p className="text-[#F8F8F8] text-[0.75rem] font-bold font-Roboto lg:text-xl">
                                {item.amountRaised}
                              </p>
                              <p className="text-[#F8F8F8] text-[0.75rem] font-semibold font-Roboto mr-[50px] lg:text-xl lg:mr-[72px]">
                                {item.numberOfInvestor}
                              </p>
                              <p className="text-[#F8F8F8] text-[0.75rem] font-semibold font-Roboto lg:text-xl lg:pr-5">
                                {item.minInvest}
                              </p>
                            </div>
                            <div className="flex justify-between">
                              <p className="text-[#D9D9D9] text-[0.625rem] font-Inter lg:text-base">
                                {item.Raised}
                              </p>
                              <p className="text-[#D9D9D9] text-[0.625rem] font-Inter lg:text-base">
                                {item.Investors}
                              </p>
                              <p className="text-[#D9D9D9] text-[0.625rem] font-Inter lg:text-base">
                                {item.MinInvestment}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )
              )}
              {/* Item1 end */}
            </div>
            <button
              onClick={slideRight3}
              className=" flex absolute right-0 top-0 mt-[100px] items-center justify-center w-[40px] h-[40px] rounded-full bg-[#415993] opacity-90 hover:opacity-100 lg:mt-[150px]"
            >
              <img src={Arrow} alt="" className="" />
            </button>
          </div>

          {/* items end */}
        </div>
        {/* Funded Business end */}
      </div>
      {/* Transactions start */}
      <div className="mt-10 flex flex-col mx-5 mb-10">
        <div className="flex justify-between items-center ">
          <p className="text-[#313131] text-base font-bold font-Roboto lg:text-2xl">
            Transactions
          </p>
          <p className="cursor-pointer text-b text-sm font-bold hover:text-primary lg:text-2xl">
            See All
          </p>
        </div>
        {tran.map((item, index) => (
          <div
            key={index}
            className="bg-primary flex justify-between px-2 items-center h-[60px] rounded-[5px] lg:h-[80px] lg:pl-5 lg:pr-20 mb-4"
          >
            <div className="flex items-center gap-2 lg:gap-7">
              <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#F2F2F2] lg:h-[60px] lg:w-[60px]">
                <img src={Tran} alt="" className="w-[15px] lg:w-[24px]" />
              </div>
              <div className="lg:flex lg:gap-1 w-[110px] lg:w-[220px]">
                <p className="text-[#F8F8F8] text-xs font-medium font-Inter lg:text-lg">
                  Invest In
                </p>
                <p className="text-[#F8F8F8] text-xs font-medium font-Inter lg:text-lg">
                  {item.name}
                </p>
              </div>
            </div>
            <div className="w-[150px]">
              <p className="text-[#D9D9D9] text-[0.6875rem] font-Inter lg:text-lg">
                Interest rate{" "}
                <span className="text-[#F8F8F8] font-bold">{item.percent}</span>
              </p>
            </div>
            <div className="w-[100px]">
              <p className="text-[#F8F8F8] text-sm font-bold font-Inter lg:text-xl">
                {item.amount}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Transactions end */}
      {/* Footer start */}
      <div>
        <Footer />
      </div>

      {/* Footer end */}
    </div>
  );
}

export default Owners;
