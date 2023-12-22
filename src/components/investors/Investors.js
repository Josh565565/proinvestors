import React, { useState, useEffect } from "react";
import SecondNav from "../businessOwners/SecondNav";
import Top from "../businessOwners/Top";

import { item1, item2, tran } from "../businessOwners/data";

// Imapges import start
import Arrow from "../images/arrow.svg";
import Mike from "../images/mike.jpg";
import Mary from "../images/mary.jpg";
import Olatorera from "../images/olatorera.png";

const investor = [
  {
    pic: Mike,
    name: "Mike Adenuga",
    description: "Founder and Chairman of Globacom",
  },
  {
    pic: Mary,
    name: "Mary davis",
    description: "Staff of Berkshire Hathaway",
  },
  {
    pic: Olatorera,
    name: "Mary davis",
    description: "Staff of Berkshire Hathaway",
  },
];

function Investors() {
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

  function removeWordsAfterLimit(text, limit) {
    let words = text.split(" ");
    let truncatedWords = [];

    let currentLength = 0;
    for (let i = 0; i < words.length; i++) {
      if (currentLength + words[i].length <= limit) {
        truncatedWords.push(words[i]);
        currentLength += words[i].length + 1; // Adding 1 for space between words
      } else {
        break;
      }
    }

    return truncatedWords.join(" ");
  }

  function truncateWithDots(text, limit) {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    }
    return text;
  }
  return (
    <div>
      <SecondNav />
      <Top
        head="Search For Your An Investor"
        body1="Discover top investors from different parts of the world"
        body2="Discover top investors from different parts of the world"
        search="Search"
      />

      <div className="mt-10">
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
              {(isSmallScreen ? chunkArray(investor, 6) : [investor]).map(
                (chunk, chunkIndex) => (
                  <div className="flex gap-5" key={chunkIndex}>
                    {chunk.map((item, index) => (
                      <div
                        className="mt-3"
                        key={index}
                        style={{ flexBasis: "calc(25% - 1rem)" }}
                      >
                        <div className="w-[156px] h-[199px] rounded-[15px] overflow-hidden lg:w-[260px] lg:h-[330px]">
                          <img
                            src={item.pic}
                            alt={item.name}
                            className="w-[156px] h-[199px] lg:w-[260px] lg:h-[330px]"
                          />
                        </div>
                        <div className=" bg-white pr-1 py-2 w-[156px]  lg:w-[260px]">
                          <p className="text-b text-sm font-bold font-Roboto lg:text-lg">
                            {item.name}
                          </p>
                          <p className="text-[#717171] text-[0.6875rem] font-Inter pt-2 lg:text-sm">
                            {truncateWithDots(item.description, 24)}
                          </p>
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
      </div>
    </div>
  );
}

export default Investors;
