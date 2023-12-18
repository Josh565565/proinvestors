import React from "react";

// Images import
import BG from "./images/bg-img.svg";
import BGM from "./images/bg-img-m.svg";
import Nav from "./Nav";

function Hero() {
  return (
    <div className="overflow-hidden">
      {/* <Nav /> */}
      <div className="bg-hero-bg bg-primary bg-[length:400px] lg:h-[500px] md:h-[420px] bg-no-repeat bg-right-bottom px-[6%] md:bg-[length:400px] lg:bg-[length:500px]">
        <div className="md:flex gap-16 justify-between items-center pt-6">
          <div className="w-[320px] md:w-[450px] lg:w-[640px] xl:w-[700px]">
            <h3 className="leading-normal text-white text-[1.2rem] font-bold md:text-[1.4rem] lg:text-[2rem] xl:text-[2.49rem] md:leading-snug">
              <span className="text-secondary">Unlock Growth Potential: </span>
              Connect with Small-Budget Investors to Fuel Your Business's
              Success.
            </h3>
            <p className="text-xs text-[#D9D9D9] w-[90%] md:w-[90%] md:text-[0.7rem] lg:text-[1rem]">
              Our website promotes growth potential by connecting small business
              owners with low-cost investors. Promote cooperation and investment
              opportunities, Build connections and promote success.
            </p>
            <div className="flex gap-5 mt-10">
              <button className=" bg-secondary w-[170px] h-[40px] rounded md:hidden">
                Get started
              </button>
              <button className="hidden bg-secondary md:w-[160px] md:h-[55px] lg:w-[250px] lg:h-[57px] lg:text-xl rounded md:block">
                Sign up
              </button>
              <button className="hidden text-xl rounded text=[#D9D9D9] border-2 border-[#737373] text-[#D9D9D9] md:w-[160px] md:h-[55px] lg:w-[250px] lg:h-[57px] md:block">
                Login
              </button>
            </div>
          </div>
          <div className="py-[70px]  md:py-0 w-[500px]">
            <div className="">
              <img
                src={BG}
                alt="man image"
                className="hidden w-[250px] md:block md:w-[320px] lg:w-[400px]"
              />
              <div className="">
                <img
                  src={BGM}
                  alt="man image"
                  className="block pl-6 md:hidden "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
