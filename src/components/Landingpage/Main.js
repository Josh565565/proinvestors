import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
import person2 from "./images/person2(1).png";
import person3 from "./images/person3(1).png";
import Robert from "./images/robert.svg";
import Newsletter from "./Newsletter";



function AnimatedImage({ src, alt }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // To trigger multiple times
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    exit: { opacity: 0, scale: 0.5 },
  };

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      variants={imageVariants}
      initial="hidden"
      animate={controls}
      exit="exit"
    />
  );
}



function Main() {
  return (
    <div className="overflow-hidden">
      <div className="flex justify-evenly pt-20 overflow-hidden">
        <div className="xl:flex xl:flex-col xl:items-center">
          <p className="text-2xl font-bold text-secondary md:text-3xl xl:text-6xl">
            200+
          </p>
          <p className="text-[#222222] text-[0.8125rem] md:text-[1rem] xl:text-[1.5rem]">
            Investors
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold text-secondary md:text-3xl xl:text-6xl">
            $100M
          </p>
          <p className="text-[#222222] text-[0.8125rem] md:text-[1rem] xl:text-[1.5rem]">
            Funds deployed
          </p>
        </div>
        <div className="xl:flex xl:flex-col xl:items-center">
          <p className="text-2xl font-bold text-secondary md:text-3xl xl:text-6xl">
            500+
          </p>
          <p className="text-[#222222] text-[0.8125rem] md:text-[1rem] xl:text-[1.5rem]">
            Business Owners
          </p>
        </div>
      </div>
      <div className="flex justify-center pt-20">
        <div className="flex items-center justify-center border-2 border-[#222] w-[140px] h-10 rounded-full xl:w-[250px] xl:h-[80px] xl:font-semibold">
          <p className="text-[#313131] md:text-lg xl:text-3xl">How it Works</p>
        </div>
      </div>
      <div>
        <div className="flex gap-5 items-center justify-between mt-12 overflow-hidden lg:mr-[250px]">
          <div>
          <AnimatedImage
            src={MAIN1}
            alt="Side image 1"
            className="w-[214px] sm:w-[314px] md:w-[325px] overflow-hidden lg:w-[425px] xl:w-[696px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          </div>
          
          <div>
            <p className="flex items-center justify-center rounded-full bg-primary text-white w-10 h-10 overflow-hidden font-bold xl:text-2xl xl:w-[64px] xl:h-[64px]">
              1
            </p>
            <p className="text-xs w-[90%] capitalize md:text-sm lg:w-[320px] lg:text-base xl:text-lg xl:w-[350px]">
              Click on find a business owner and Select A business you like to
              invest in
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse gap-5 items-center justify-between mt-12 lg:ml-[250px]">
          <div>
          <AnimatedImage
            src={MAIN2}
            alt="Side image 1"
            className="w-[214px] sm:w-[314px] md:w-[325px] overflow-hidden lg:w-[425px] xl:w-[696px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
          </div>
          
          <div className="pl-5">
            <p className="flex items-center justify-center rounded-full bg-primary text-white w-10 h-10 font-bold xl:text-2xl xl:w-[64px] xl:h-[64px] ">
              2
            </p>
            <p className="text-xs w-[90%] capitalize md:text-sm lg:w-[300px] lg:text-base xl:text-lg xl:w-[350px]">
              Get more information about the business, and know more about the
              owner before you invest
            </p>
          </div>
        </div>
        <div className=" mt-12 relative">
          <div className="flex flex-col items-end absolute right-10">
            <div className="flex flex-col">
              <p className="flex items-center justify-center rounded-full bg-primary text-white w-10 h-10 overflow-hidden font-bold xl:text-2xl xl:w-[64px] xl:h-[64px]">
                3
              </p>
              <p className="text-xs capitalize md:text-sm md:pr-32 lg:pr-[230px] xl:text-lg xl:pr-[350px]">
                Proceed with your investment.
              </p>
            </div>
          </div>
          <AnimatedImage src={MAIN3} alt="Side image 1" className="overflow-hidden" />
        </div>
      </div>
      <div className="flex flex-col items-center mt-20 md:flex-row md:justify-center md:gap-2 overflow-hidden lg:gap-[170px] lg:pl-10 xl:gap-[100px] xl:pl-20">
        <div>
          <div className="">
            <p className="text-b text-lg lg:text-xl font-medium xl:text-2xl">
              Why Choose Us
            </p>
            <h3 className="text-b text-lg font-bold w-[320px] lg:w-[430px] lg:text-2xl xl:text-3xl xl:w-[530px]">
              Choose Us for Investor Connections to Unlock Growth Potential"
            </h3>
          </div>
          <div className="flex gap-4 mt-5">
            <img
              src={INFO1}
              alt=""
              className="w-16 overflow-hidden lg:w-20 xl:w-[110px]"
            />
            <div className="">
              <h3 className="text-b text-base font-bold xl:text-[1.375rem]">
                Accurate Information
              </h3>
              <p className="text-[0.7875rem] text-[#717171] w-[290px] xl:text-[0.8125rem] xl:w-[370px]">
                We give information on wealthy investors as well as top-selling
                <br className="hidden xl:block" />
                businesses established by small entrepreneurs.
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <img src={INFO2} alt="" className="w-16 lg:w-20 xl:w-[110px]" />
            <div className="">
              <h3 className="text-b text-base font-bold xl:text-[1.375rem]">
                Dedicated Team
              </h3>
              <p className="text-[0.7875rem] text-[#717171] w-[290px] xl:text-[0.8125rem] xl:w-[370px]">
                They provide clear and efficient communications, assisting
                investors in educating and assisting small business owners in
                properly presenting their businesses.
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <img src={INFO3} alt="" className="w-16 lg:w-20 xl:w-[110px]" />
            <div className="">
              <h3 className="text-b text-base font-bold xl:text-[1.375rem]">
                24/7 Hours Support
              </h3>
              <p className="text-[0.7875rem] text-[#717171] w-[290px] xl:text-[0.8125rem] xl:w-[290px]">
                Our 24-hour support team provides assistance with a wide range
                of inquiries, one of the primary roles of the support team is to
                offer technical assistance.
              </p>
            </div>
          </div>
        </div>
        <div>
          <AnimatedImage
            src={INFOBIG}
            alt=""
            className="w-[354px] mt-10 lg:w-[454px] xl:w-[650px]"
          />
        </div>
      </div>
      {/* Testimonials start */}
      <div className="flex flex-col items-center">
        <div className="text-center mt-40">
          <p className="text-[#282828] text-base font-medium xl:text-2xl">
            Testimonials
          </p>
          <p className="text-[#282828] text-base font-bold xl:text-3xl xl:pb-12">
            What our Happy Users are saying
          </p>
        </div>
        {/*  */}
        <div className="lg:flex lg:gap-10">
          <div className="bg-primary w-[314px] h-[228px] rounded-br-[60px] mt-10 relative xl:w-[384px] xl:h-[340px]">
            <div className="w-[50px] h-[50px] rounded-full bg-secondary absolute top-[-20px] left-4 xl:w-[90px] xl:h-[90px] xl:top-[-40px]"></div>
            <div className="pt-9 ml-4 xl:pt-16">
              <img src={STAR1} alt="" className="w-[190px] xl:w-[240px]" />
              <motion.p className="text-xs text-[#F2F2F2] pr-5 mt-3 xl:text-base"
               initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}>
                I've been using this investment website for six months now and i
                have had some great opportunities to invest in small businesses.
                the platform is easy to use and provides all the information i
                need to make informed decisions
              </motion.p>
              <div className="flex items-center gap-2 mt-5">
                <img
                  src={person1}
                  alt="Richard"
                  className="w-10 h-10 xl:w-[55px] xl:h-[55px]"
                />
                <div className="inline">
                  <p className="text-[#F2F2F2] text-xs font-bold xl:text-base">
                    Richard james
                  </p>
                  <p className="text-[#D9D9D9] text-[0.6875rem] font-medium xl:text-xs">
                    CEO of Techub
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary w-[314px] h-[228px] rounded-br-[60px] mt-10 relative xl:w-[384px] xl:h-[340px]">
            <div className="w-[50px] h-[50px] rounded-full bg-secondary absolute top-[-20px] left-4 xl:w-[90px] xl:h-[90px] xl:top-[-40px]"></div>
            <div className="pt-9 ml-4 xl:pt-16">
              <img src={STAR2} alt="" className="w-[190px] xl:w-[240px]" />
              <p className="text-xs text-[#F2F2F2] pr-5 mt-3 xl:text-base">
                I've been using this investment website for six months now and i
                have had some great opportunities to invest in small businesses.
                the platform is easy to use and provides all the information i
                need to make informed decisions
              </p>
              <div className="flex items-center gap-2 mt-5">
                <img
                  src={person2}
                  alt="Richard"
                  className="w-10 h-10 xl:w-[55px] xl:h-[55px]"
                />
                <div className="inline">
                  <p className="text-[#F2F2F2] text-xs font-bold xl:text-base">
                    Richard james
                  </p>
                  <p className="text-[#D9D9D9] text-[0.6875rem] font-medium xl:text-xs">
                    CEO of Techub
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary w-[314px] h-[228px] rounded-br-[60px] mt-10 relative xl:w-[384px] xl:h-[340px]">
            <div className="w-[50px] h-[50px] rounded-full bg-secondary absolute top-[-20px] left-4 xl:w-[90px] xl:h-[90px] xl:top-[-40px]"></div>
            <div className="pt-9 ml-4 xl:pt-16">
              <img src={STAR2} alt="" className="w-[190px] xl:w-[240px]" />
              <p className="text-xs text-[#F2F2F2] pr-5 mt-3 xl:text-base">
                I’ve been using this investment website for six months now and i
                have had some great opportunities to invest in small businesses.
                the platform is easy to use and provides all the information i
                need to make informed decisions
              </p>
              <div className="flex items-center gap-2 mt-5">
                <img
                  src={person3}
                  alt="Richard"
                  className="w-10 h-10 xl:w-[55px] xl:h-[55px]"
                />
                <div className="inline">
                  <p className="text-[#F2F2F2] text-xs font-bold xl:text-base">
                    Richard james
                  </p>
                  <p className="text-[#D9D9D9] text-[0.6875rem] font-medium xl:text-xs">
                    CEO of Techub
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        {/*  */}
      </div>
      {/* What we do start */}
      <div className="mt-10 xl:pt-32">
        <p className="text-center text-b font-bold text-xl pb-4 xl:text-3xl xl:pb-10">
          What We Do
        </p>
        <div className="bg-primary md:flex justify-center items-center lg:gap-[200px]">
          <div className="pl-5">
            <p className="text-[#DADBD8] text-xs w-80 pt-10 md:text-base lg:w-[400px] xl:text-lg xl:w-[450px]">
              At ProInvestors, we believe in the power of collaboration and
              understand that successful ventures are built on strong
              partnerships. Whether you are a seasoned investor looking to
              diversify your portfolio or an aspiring entrepreneur seeking
              funding to turn your vision into reality, we have got you covered.
            </p>
            <p className="text-[#F2F2F2] text-lg font-bold xl:text-xl xl:mt-2">
              Robert Daniel
            </p>
          </div>
          <div>
            <img
              src={Robert}
              alt="Robert"
              className="md:w-[400px] xl:w-[470px]"
            />
          </div>
        </div>
      </div>
      {/* What we do end */}
      {/* Newsletter start */}
      <Newsletter />
      {/* Newsletter end */}
    </div>
  );
}

export default Main;
