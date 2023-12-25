import React from "react";

function Newsletter() {
  return (
    <div>
      {/* Our Newsletter start */}
      <div className="mt-10 xl:mt-[60px]">
        <p className="text-center text-xl text-[#282828] font-bold mb-4 xl:text-3xl">
          Our Newsletter
        </p>
        <div className="bg-primary mx-[10%] flex flex-col items-center justify-center pb-10 mb-10 md:mx-[5%] md:flex-row md:gap-24 md:pt-5 lg:gap-[200px] xl:py-14 xl:gap-[150px]">
          <div className="mt-7">
            <h1 className="text-xl font-bold text-white xl:text-3xl w-[290px] xl:w-[320px]">
              Stay Updated with our
              <br /> weekly Newsletter
            </h1>
            <p className="text-[#F2F2F2] text-xs w-[290px] lg:w-[340px] xl:text-base xl:w-[450px]">
              Get Exclusive News, Tips, and Opportunities from ProInvestors
              Insider to Unlock Your Investment Potential with Our Exclusive
              Newsletter!"
            </p>
          </div>
          <div className="mt-7 block">
            <input
              type="email"
              placeholder="Email"
              className="w-[290px] h-[50px] rounded pl-2 xl:w-[400px] xl:h-[70px]"
            />
            <button className="w-[290px] h-[50px] rounded bg-secondary text-b text-base mt-4 block font-bold xl:w-[400px] xl:h-[70px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* Our Newsletter end */}
    </div>
  );
}

export default Newsletter;
