import React, { useState, useEffect } from "react";
import SecondNav from "../businessOwners/SecondNav";
import Top from "../businessOwners/Top";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { investor1, investor2, Popularinvestor2, investor3 } from "./data";

// Imapges import start
import Logo from "../images/logo2.svg";
import Arrow from "../images/arrow.svg";
import Right from "../images/right.svg";
import Line from "../images/line(1).svg";
import Line2 from "../images/line-mob.svg";
import Robert from "../images/robert.jpg";
import Footer from "../Landingpage/Footer";

function Investors() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [selectedInvestorIndex, setSelectedInvestorIndex] = useState(null);
  const [investorPosition, setInvestorPosition] = useState({ left: 0, top: 0 });
  const [selectedInvestor, setSelectedInvestor] = useState(null);
  // 2nd start
  const [selectedInvestorIndex2, setSelectedInvestorIndex2] = useState(null);
  const [investorPosition2, setInvestorPosition2] = useState({
    left: 0,
    top: 0,
  });
  const [selectedInvestor2, setSelectedInvestor2] = useState(null);
  // 3rd start
  const [selectedInvestorIndex3, setSelectedInvestorIndex3] = useState(null);
  const [investorPosition3, setInvestorPosition3] = useState({
    left: 0,
    top: 0,
  });
  const [selectedInvestor3, setSelectedInvestor3] = useState(null);

  const selectInvestor = (index, position, investor) => {
    setSelectedInvestorIndex(index);
    setInvestorPosition(position);
    setSelectedInvestor(investor);
    setSelectedInvestorDetails(index);
    // If the clicked investor is already selected, reset the states to hide the details
    if (selectedInvestorIndex === index) {
      setSelectedInvestorIndex(null);
      setInvestorPosition({ left: 0, top: 0 });
      setSelectedInvestor(null);
    } else {
      setSelectedInvestorIndex(index);
      setInvestorPosition(position);
      setSelectedInvestor(investor);
      setSelectedInvestorDetails(index);
    }
  };

  // Function to set selected investor2 details
  const setSelectedInvestorDetails = (index) => {
    const selectedInvestorDetails = investor1[index];
    setSelectedInvestor(selectedInvestorDetails);
  };
  // 2nd start
  const selectInvestor2 = (index2, position2, investor2) => {
    setSelectedInvestorIndex2(index2);
    setInvestorPosition2(position2);
    setSelectedInvestor2(investor2);
    setSelectedInvestorDetails2(index2);

    // If the clicked investor is already selected, reset the states to hide the details
    if (selectedInvestorIndex2 === index2) {
      setSelectedInvestorIndex2(null);
      setInvestorPosition2({ left: 0, top: 0 });
      setSelectedInvestor2(null);
    } else {
      setSelectedInvestorIndex2(index2);
      setInvestorPosition2(position2);
      setSelectedInvestor2(investor2);
      setSelectedInvestorDetails2(index2);
    }
  };

  // Function to set selected investor2 details
  const setSelectedInvestorDetails2 = (index2) => {
    const selectedInvestorDetails2 = Popularinvestor2[index2];
    setSelectedInvestor2(selectedInvestorDetails2);
  };

  // 3rd srart
  const selectInvestor3 = (index3, position3, investor3) => {
    setSelectedInvestorIndex3(index3);
    setInvestorPosition3(position3);
    setSelectedInvestor3(investor3);
    setSelectedInvestorDetails3(index3);

    // If the clicked investor is already selected, reset the states to hide the details
    if (selectedInvestorIndex3 === index3) {
      setSelectedInvestorIndex3(null);
      setInvestorPosition3({ left: 0, top: 0 });
      setSelectedInvestor3(null);
    } else {
      setSelectedInvestorIndex3(index3);
      setInvestorPosition3(position3);
      setSelectedInvestor3(investor3);
      setSelectedInvestorDetails3(index3);
    }
  };

  // Function to set selected investor3 details
  const setSelectedInvestorDetails3 = (index3) => {
    const selectedInvestorDetails3 = investor2[index3];
    setSelectedInvestor3(selectedInvestorDetails3);
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };
  const slideRight1 = () => {
    var slider = document.getElementById("slider1");
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

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsSmallScreen(window.innerWidth <= 768); // Update state based on window width
  //   };

  //   // Event listener for window resize
  //   window.addEventListener("resize", handleResize);

  //   // Initial check for screen size when component mounts
  //   setIsSmallScreen(window.innerWidth <= 768);

  //   // Cleanup function for the event listener
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  function truncateWithDots(text, limit) {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    }
    return text;
  }
  return (
    <div className="">
      <SecondNav
        bg="bg-white"
        text="text-[#717171]"
        contact="text-b"
        logo={Logo}
        contact1="bg-secondary"
      />
      <Top
        head="Search For Your An Investor"
        body1="Discover top investors from different parts of the world"
        body2="Discover top investors from different parts of the world"
        search="Search"
      />

      <div className="my-10">
        {/* Popular Investors start */}
        <div className="">
          <div className="flex justify-between items-center pl-5">
            <p className="text-[#313131] text-base font-bold font-Roboto lg:text-2xl">
              Popular Investors
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
              {chunkArray(investor1, 9).map((chunk, chunkIndex) => (
                <div className="flex gap-5" key={chunkIndex}>
                  {chunk.map((item, index) => (
                    <div
                      className="mt-3 flex"
                      key={index}
                      style={{ flexBasis: "calc(25% - 1rem)" }}
                    >
                      <div>
                        <div className=" w-[156px] h-[199px] rounded-[15px] overflow-hidden lg:w-[260px] lg:h-[330px]">
                          <img
                            src={item.pic}
                            alt={item.name}
                            onClick={(event) =>
                              selectInvestor(
                                index,
                                event.target.getBoundingClientRect()
                              )
                            }
                            className="w-[156px] h-[199px] lg:w-[260px] lg:h-[330px] hover:scale-105 cursor-pointer"
                          />
                        </div>
                        <div className=" bg-white pr-1 py-2 w-[156px]  lg:w-[260px]">
                          <p className="text-b text-sm font-bold font-Roboto lg:text-lg cursor-pointer">
                            {item.name}
                          </p>
                          <p className="text-[#717171] text-[0.6875rem] font-Inter pt-2 lg:text-sm">
                            {truncateWithDots(item.description, 24)}
                          </p>
                        </div>
                      </div>
                      {/*  */}
                      {/* Investor1 details start */}
                      {selectedInvestorIndex === index && (
                        <div className="bg-[#415993] w-[333px] h-[194px] ml-5 flex justify-between gap-1 items-center py-[15px]  rounded-[5px] lg:w-[550px] lg:h-[330px] lg:px-10 lg:pr-20">
                          <div className="flex flex-col items-center">
                            <div className="w-[60px] h-[60px] rounded-full lg:w-[110px] lg:h-[110px]">
                              <img
                                src={selectedInvestor.pic}
                                alt={selectedInvestor.name}
                                className="w-[60px] h-[60px] rounded-full lg:w-[110px] lg:h-[110px]"
                              />
                            </div>
                            <div>
                              <h4 className="text-[0.8125rem] text-[#F2F2F2] font-bold font-Roboto text-center lg:text-lg">
                                {selectedInvestor.name}
                              </h4>
                              <p className="text-[0.6875rem] text-[#C1C1C1] font-medium text-center lg:text-sm w-[150px] lg:w-[200px]">
                                {selectedInvestor.description}
                              </p>
                            </div>
                            <div className="flex gap-5 mt-7">
                              <FontAwesomeIcon
                                icon="fa-brands fa-linkedin"
                                className="bg-[#415993] text-white h-[26px]"
                              />
                              <FontAwesomeIcon
                                icon="fa-solid fa-user"
                                className="text-[#DADBD8] h-[26px]"
                              />
                              <FontAwesomeIcon
                                icon="fa-brands fa-square-whatsapp"
                                className="bg-white text-[#415993] h-[26px]"
                              />
                            </div>
                          </div>
                          {/* Line start */}
                          <div>
                            <img
                              src={Line}
                              alt=""
                              className="hidden lg:block"
                            />
                            <img src={Line2} alt="" className=" lg:hidden" />
                          </div>
                          {/* Line end */}
                          <div>
                            <div>
                              <h3 className="text-sm text-[#F2F2F2] font-medium font-Roboto lg:text-base">
                                Investment Products
                              </h3>
                              <p className="text-[0.625rem] text-[#D9D9D9] font-Inter lg:text-sm">
                                Stocks:
                              </p>
                              <p className="text-[0.625rem] text-[#D9D9D9] font-Inter lg:text-sm">
                                Exchange-Traded Funds (ETFs):
                              </p>
                            </div>
                            <div>
                              <h3 className="text-sm text-[#F2F2F2] font-medium font-Roboto pt-1 lg:text-base">
                                Speciality
                              </h3>
                              <p className="text-[0.625rem] text-[#D9D9D9] font-Inter lg:text-sm">
                                Trading
                              </p>
                              <p className="text-[0.625rem] text-[#D9D9D9] font-Inter lg:text-sm">
                                Online Advertisement
                              </p>
                            </div>
                            <div>
                              <h3 className="text-sm text-[#F2F2F2] font-medium font-Roboto pt-1 lg:text-base">
                                Pantnerships
                              </h3>
                              <p className=" text-[0.625rem] text-[#D9D9D9] font-Inter lg:text-sm lg:w-[175px]">
                                google ads, LinkedIn ads, Twitter ads, Amazon
                                Ads.
                              </p>
                            </div>
                            <div className="flex gap-5 items-center pt-1">
                              <img src={Right} alt="" />
                              <p className="text-[0.6875rem] text-[#F2F2F2] border rounded-full px-1 cursor-pointer lg:text-base">
                                Chat Now
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      {/* Investor1 details end */}
                    </div>
                  ))}
                </div>
              ))}
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
          {/* New Item start  */}
          <div className="relative">
            <div
              className="overflow-x-scroll no-scrollbar scroll scroll-smooth flex flex-wrap  gap-5 pl-5 pr-1"
              id="slider1"
            >
              {/* Item1 start */}
              {chunkArray(Popularinvestor2, 9).map((chunk, chunkIndex) => (
                <div className="flex gap-5" key={chunkIndex}>
                  {chunk.map((item, index) => (
                    <div
                      className="mt-3 flex"
                      key={index}
                      style={{ flexBasis: "calc(25% - 1rem)" }}
                    >
                      <div>
                        <div className=" w-[156px] h-[199px] rounded-[15px] overflow-hidden lg:w-[260px] lg:h-[330px]">
                          <img
                            src={item.pic}
                            alt={item.name}
                            onClick={(event) =>
                              selectInvestor2(
                                index,
                                event.target.getBoundingClientRect()
                              )
                            }
                            className="w-[156px] h-[199px] lg:w-[260px] lg:h-[330px] hover:scale-105 cursor-pointer"
                          />
                        </div>
                        <div className=" bg-white pr-1 py-2 w-[156px]  lg:w-[260px]">
                          <p className="text-b text-sm font-bold font-Roboto lg:text-lg cursor-pointer">
                            {item.name}
                          </p>
                          <p className="text-[#717171] text-[0.6875rem] font-Inter pt-2 lg:text-sm">
                            {truncateWithDots(item.description, 24)}
                          </p>
                        </div>
                      </div>
                      {/*  */}
                      {/* Investor2 details start */}
                      {selectedInvestorIndex2 === index && (
                        <div className="bg-[#415993] w-[333px] h-[194px] ml-5 flex justify-between gap-1 items-center py-[15px]  rounded-[5px] lg:w-[550px] lg:h-[330px] lg:px-10 lg:pr-20">
                          <div className="flex flex-col items-center">
                            <div className="w-[60px] h-[60px] rounded-full lg:w-[110px] lg:h-[110px]">
                              <img
                                src={selectedInvestor2.pic}
                                alt={selectedInvestor2.name}
                                className="w-[60px] h-[60px] rounded-full lg:w-[110px] lg:h-[110px]"
                              />
                            </div>
                            <div>
                              <h4 className="text-[0.8125rem] text-[#F2F2F2] font-bold font-Roboto text-center lg:text-lg">
                                {selectedInvestor2.name}
                              </h4>
                              <p className="text-[0.6875rem] text-[#C1C1C1] font-medium text-center lg:text-sm w-[150px] lg:w-[200px]">
                                {selectedInvestor2.description}
                              </p>
                            </div>
                            <div className="flex gap-5 mt-7">
                              <FontAwesomeIcon
                                icon="fa-brands fa-linkedin"
                                className="bg-[#415993] text-white h-[26px]"
                              />
                              <FontAwesomeIcon
                                icon="fa-solid fa-user"
                                className="text-[#DADBD8] h-[26px]"
                              />
                              <FontAwesomeIcon
                                icon="fa-brands fa-square-whatsapp"
                                className="bg-white text-[#415993] h-[26px]"
                              />
                            </div>
                          </div>
                          {/* Line start */}
                          <div>
                            <img
                              src={Line}
                              alt=""
                              className="hidden lg:block"
                            />
                            <img src={Line2} alt="" className=" lg:hidden" />
                          </div>
                          {/* Line end */}
                          <div>
                            <div>
                              <h3 className="text-sm text-[#F2F2F2] font-medium font-Roboto lg:text-base">
                                Investment Products
                              </h3>
                              <p className="text-[0.625rem] text-[#D9D9D9] font-Inter lg:text-sm">
                                Stocks:
                              </p>
                              <p className="text-[0.625rem] text-[#D9D9D9] font-Inter lg:text-sm">
                                Exchange-Traded Funds (ETFs):
                              </p>
                            </div>
                            <div>
                              <h3 className="text-sm text-[#F2F2F2] font-medium font-Roboto pt-1 lg:text-base">
                                Speciality
                              </h3>
                              <p className="text-[0.625rem] text-[#D9D9D9] font-Inter lg:text-sm">
                                Trading
                              </p>
                              <p className="text-[0.625rem] text-[#D9D9D9] font-Inter lg:text-sm">
                                Online Advertisement
                              </p>
                            </div>
                            <div>
                              <h3 className="text-sm text-[#F2F2F2] font-medium font-Roboto pt-1 lg:text-base">
                                Pantnerships
                              </h3>
                              <p className=" text-[0.625rem] text-[#D9D9D9] font-Inter lg:text-sm lg:w-[175px]">
                                google ads, LinkedIn ads, Twitter ads, Amazon
                                Ads.
                              </p>
                            </div>
                            <div className="flex gap-5 items-center pt-1">
                              <img src={Right} alt="" />
                              <p className="text-[0.6875rem] text-[#F2F2F2] border rounded-full px-1 cursor-pointer lg:text-base">
                                Chat Now
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      {/* Investor2 details end */}
                    </div>
                  ))}
                </div>
              ))}
              {/* Item1 end */}
            </div>
            <button
              onClick={slideRight1}
              className=" flex absolute right-0 top-0 mt-[100px] items-center justify-center w-[40px] h-[40px] rounded-full bg-[#415993] opacity-90 hover:opacity-100 lg:mt-[150px]"
            >
              <img src={Arrow} alt="" className="" />
            </button>
          </div>
          {/* New items end */}
        </div>
        {/* Popular Investors end */}
        {/* Top Investors start */}
        <div className="mt-10">
          <div className="flex justify-between items-center pl-5">
            <p className="text-[#313131] text-base font-bold font-Roboto lg:text-2xl">
              Top Investors
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
              {(isSmallScreen ? chunkArray(investor2, 6) : [investor2]).map(
                (chunk, chunkIndex) => (
                  <div className="flex gap-5" key={chunkIndex}>
                    {chunk.map((item, index) => (
                      <div
                        className="mt-3 flex"
                        key={index}
                        style={{ flexBasis: "calc(25% - 1rem)" }}
                      >
                        <div>
                          <div className=" w-[156px] h-[199px] rounded-[15px] overflow-hidden lg:w-[260px] lg:h-[330px]">
                            <img
                              src={item.pic}
                              alt={item.name}
                              onClick={(event) =>
                                selectInvestor3(
                                  index,
                                  event.target.getBoundingClientRect()
                                )
                              }
                              className="w-[156px] h-[199px] lg:w-[260px] lg:h-[330px] hover:scale-105 cursor-pointer"
                            />
                          </div>
                          <div className=" bg-white pr-1 py-2 w-[156px]  lg:w-[260px]">
                            <p className="text-b text-sm font-bold font-Roboto lg:text-lg cursor-pointer">
                              {item.name}
                            </p>
                            <p className="text-[#717171] text-[0.6875rem] font-Inter pt-2 lg:text-sm">
                              {truncateWithDots(item.description, 24)}
                            </p>
                          </div>
                        </div>
                        {/*  */}
                        {/* Investor3 details start */}
                        {selectedInvestorIndex3 === index && (
                          <div className="bg-[#415993] w-[333px] h-[194px] ml-5 flex justify-between gap-1 items-center py-[15px]  rounded-[5px] lg:w-[550px] lg:h-[330px] lg:px-10 lg:pr-20">
                            <div className="flex flex-col items-center">
                              <div className="w-[60px] h-[60px] rounded-full lg:w-[110px] lg:h-[110px]">
                                <img
                                  src={selectedInvestor3.pic}
                                  alt={selectedInvestor3.name}
                                  className="w-[60px] h-[60px] rounded-full lg:w-[110px] lg:h-[110px]"
                                />
                              </div>
                              <div>
                                <h4 className="text-[0.8125rem] text-[#F2F2F2] font-bold font-Roboto text-center lg:text-lg">
                                  {selectedInvestor3.name}
                                </h4>
                                <p className="text-[0.6875rem] text-[#C1C1C1] font-medium text-center lg:text-sm w-[150px] lg:w-[200px]">
                                  {selectedInvestor3.description}
                                </p>
                              </div>
                              <div className="flex gap-5 mt-7">
                                <FontAwesomeIcon
                                  icon="fa-brands fa-linkedin"
                                  className="bg-[#415993] text-white h-[26px]"
                                />
                                <FontAwesomeIcon
                                  icon="fa-solid fa-user"
                                  className="text-[#DADBD8] h-[26px]"
                                />
                                <FontAwesomeIcon
                                  icon="fa-brands fa-square-whatsapp"
                                  className="bg-white text-[#415993] h-[26px]"
                                />
                              </div>
                            </div>
                            {/* Line start */}
                            <div>
                              <img
                                src={Line}
                                alt=""
                                className="hidden lg:block"
                              />
                              <img src={Line2} alt="" className=" lg:hidden" />
                            </div>
                            {/* Line end */}
                            <div>
                              <div>
                                <h3 className="text-sm text-[#F2F2F2] font-medium font-Roboto lg:text-base">
                                  Investment Products
                                </h3>
                                <p className="text-[0.625rem] text-[#D9D9D9] font-Inter lg:text-sm">
                                  Stocks:
                                </p>
                                <p className="text-[0.625rem] text-[#D9D9D9] font-Inter lg:text-sm">
                                  Exchange-Traded Funds (ETFs):
                                </p>
                              </div>
                              <div>
                                <h3 className="text-sm text-[#F2F2F2] font-medium font-Roboto pt-1 lg:text-base">
                                  Speciality
                                </h3>
                                <p className="text-[0.625rem] text-[#D9D9D9] font-Inter lg:text-sm">
                                  Trading
                                </p>
                                <p className="text-[0.625rem] text-[#D9D9D9] font-Inter lg:text-sm">
                                  Online Advertisement
                                </p>
                              </div>
                              <div>
                                <h3 className="text-sm text-[#F2F2F2] font-medium font-Roboto pt-1 lg:text-base">
                                  Pantnerships
                                </h3>
                                <p className=" text-[0.625rem] text-[#D9D9D9] font-Inter lg:text-sm lg:w-[175px]">
                                  google ads, LinkedIn ads, Twitter ads, Amazon
                                  Ads.
                                </p>
                              </div>
                              <div className="flex gap-5 items-center pt-1">
                                <img src={Right} alt="" />
                                <p className="text-[0.6875rem] text-[#F2F2F2] border rounded-full px-1 cursor-pointer lg:text-base">
                                  Chat Now
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                        {/* Investor3 details end */}
                      </div>
                    ))}
                  </div>
                )
              )}
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
          {/* New Item start  */}
          <div className="relative lg:hidden">
            <div
              className="overflow-x-scroll no-scrollbar scroll scroll-smooth flex flex-wrap  gap-5 pl-5 pr-1"
              id="slider3"
            >
              {/* Item1 start */}
              {chunkArray(investor3, 9).map((chunk, chunkIndex) => (
                <div className="flex gap-5" key={chunkIndex}>
                  {chunk.map((item, index) => (
                    <div
                      className="mt-3 flex"
                      key={index}
                      style={{ flexBasis: "calc(25% - 1rem)" }}
                    >
                      <div>
                        <div className=" w-[156px] h-[199px] rounded-[15px] overflow-hidden lg:w-[260px] lg:h-[330px]">
                          <img
                            src={item.pic}
                            alt={item.name}
                            className="w-[156px] h-[199px] lg:w-[260px] lg:h-[330px] hover:scale-105 cursor-pointer"
                          />
                        </div>
                        <div className=" bg-white pr-1 py-2 w-[156px]  lg:w-[260px]">
                          <p className="text-b text-sm font-bold font-Roboto lg:text-lg cursor-pointer">
                            {item.name}
                          </p>
                          <p className="text-[#717171] text-[0.6875rem] font-Inter pt-2 lg:text-sm">
                            {truncateWithDots(item.description, 24)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
              {/* Item1 end */}
            </div>
            <button
              onClick={slideRight3}
              className=" flex absolute right-0 top-0 mt-[100px] items-center justify-center w-[40px] h-[40px] rounded-full bg-[#415993] opacity-90 hover:opacity-100 lg:mt-[150px]"
            >
              <img src={Arrow} alt="" className="" />
            </button>
          </div>
          {/* New items end */}
        </div>
        {/* Top Investors end */}
      </div>
      {/* Footer start */}
      <div>
        <Footer />
      </div>
      {/* Footer end */}
    </div>
  );
}

export default Investors;
