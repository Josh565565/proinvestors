import React from "react";
import SecondNav from "../businessOwners/SecondNav";
import AboutCard from "./AboutCard";

import AboutPic from "../images/about-pic.jpg";
import AboutBG from "../images/about-bg-mob.png";
import AboutPic2 from "../images/about-pic-2.jpg";
import AboutPic3 from "../images/about-pic-3.jpg";
import Profile from "../images/about-profile.png";
import Person1 from "../images/about-person1.jpg";
import Person2 from "../images/about-person2.png";
import Person3 from "../images/about-person3.png";
import Person4 from "../images/about-person4.jpg";
import Person5 from "../images/about-person5.png";
import Person6 from "../images/about-person6.png";
import Newsletter from "../Landingpage/Newsletter";
import Footer from "../Landingpage/Footer";

function AboutUs() {
  return (
    <div>
      {/* Nav start */}
      <div>
        <SecondNav />
      </div>
      {/* Nav end */}
      {/* Main start */}
      <div>
        <div className="mt-20 lg:mt-0">
          <img
            src={AboutPic}
            alt=""
            className=" hidden  object-fill w-[100%] lg:block "
          />
          <img
            src={AboutBG}
            alt=""
            className=" lg:hidden object-fill w-[100%]"
          />
        </div>
        {/*  */}
        <div className="mt-[150px] flex flex-col px-3 items-center lg:items-start lg:flex-row justify-center gap-[50px]">
          <div className="">
            <h3 className="text-[#323232] text-xl font-bold font-Roboto lg:text-[2rem]">
              Our Values
            </h3>
            <p className="text-[#717171] text-xs w-[352px] lg:text-lg font-Inter leading-6 lg:leading-7 lg:w-[520px]">
              Proinvestors offers a wide range of carefully vetted investment
              opportunities in various industries and sectors. Whether you are a
              seasoned investor looking to diversify your portfolio or a
              passionate individual seeking to support emerging businesses, our
              platform provides access to a curated selection of promising
              ventures. We assess factors such as market potential, financial
              stability, and growth prospects, ensuring that only the most
              promising opportunities are presented to our investors.
            </p>
          </div>
          <div>
            <img
              src={AboutPic2}
              alt=""
              className="w-[364px] h-[250px] lg:w-[400px] lg:h-[340px] xl:w-[100%]"
            />
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col items-center pt-20">
          <div className="flex items-center justify-center border-2 border-[#222] w-[140px] h-10 rounded-full lg:w-[295px] lg:h-[70px] lg:font-semibold">
            <p className="text-[#313131] md:text-base lg:text-3xl">
              MEET OUR TEAM
            </p>
          </div>
          <p className="text-[#717171] font-medium font-Inter text-sm mt-5 text-center w-[290px] lg:w-[100%] lg:text-xl">
            Meet our diverse team of world class creators, designers, and
            problem solvers
          </p>
        </div>
        {/* About Card start */}
        <div className="flex justify-center px-5 ">
          <div className="mt-5 grid lg:grid-cols-3 gap-12">
            <AboutCard
              pic={Person1}
              name="Micheal West"
              about="Co-found and CEO"
            />
            <AboutCard
              pic={Person2}
              name="Sophia Wilson"
              about="UI/UX Expert"
            />
            <AboutCard
              pic={Person3}
              name="Robert Daniel"
              about="Backend lead"
            />
            <AboutCard
              pic={Person4}
              name="Jessica lane"
              about="VP of costumer success"
            />
            <AboutCard
              pic={Person5}
              name="Emily Jackson"
              about="Product Manager"
            />
            <AboutCard pic={Person6} name="Daniel James" about="Backend lead" />
          </div>
        </div>
        {/* About Card end */}
        {/*  */}
        <div className="mt-[100px] flex flex-col px-3 items-center lg:items-start lg:flex-row justify-center gap-[50px]">
          <div>
            <img
              src={AboutPic3}
              alt=""
              className="w-[360px] lg:w-[400px] xl:w-[100%]"
            />
          </div>
          <div className=" flex flex-col xl:gap-6 px-3">
            <p className="text-[#717171] px-5 font-Inter text-xs leading-6 w-[368px] lg:w-[490px]  xl:w-[525px] lg:text-[0.75rem] xl:text-base lg:leading-7">
              At Proinvestors, we believe in the power of small businesses and
              their ability to drive innovation, create jobs, and contribute to
              the economy. We understand that many small business owners face
              challenges in securing the necessary capital to expand their
              ventures and turn their dreams into reality. Many investors are
              searching for promising investment opportunities that can provide
              attractive returns while making a positive impact. That's where
              Proinvestors steps in. We have created a dynamic and user-friendly
              online platform that facilitates connections between investors and
              small business owners. Our platform provides a secure and
              transparent environment for entrepreneurs to showcase their
              businesses, outline growth plans, and present investment
              opportunities.
            </p>
            <div className="flex items-center px-5 gap-1 mt-3 lg:mt-0">
              <img
                src={Profile}
                alt="Profile"
                className="w-[40px] h-[40px] md:w-[70px] md:h-[70px] rounded-full"
              />
              <div>
                <h3 className="text-base text-[#313131] font-bold font-Roboto lg:text-[1.5rem]">
                  Micheal west
                </h3>
                <p className="text-[#909090] text-xs font-medium font-Inter lg:text-lg">
                  C-found and CEO
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="mt-20 flex flex-col items-center ">
          <div className="lg:w-[90%]">
            <p className="text-[#323232] font-bold font-Satoshi text-xl lg:text-[1.5rem]">
              Contact Us
            </p>
            <p className="text-[#717171]  font-Inter text-sm w-[360px] lg:w-[100%] lg:text-xl">
              If you have any questions about this Privacy Policy, please
              contact us by visiting this page on our
            </p>
            <p className="text-[#717171] font-Inter text-sm lg:text-xl">
              website:<span>https//www.proinvestors.com</span>
            </p>
            <p className="text-[#717171] font-Inter mt-3 text-sm lg:text-xl">
              Phone (NG): <span>+2347087911466</span>
            </p>
            <p className="text-[#717171] font-Inter text-sm lg:text-xl">
              By e-mail:<span>proinvestors@gmail.com</span>
            </p>
          </div>
        </div>
        {/* Newsletter start */}
        <Newsletter />
        {/* Newsletter end */}
        {/* Footer start */}
        <Footer />
        {/* Footer end */}
      </div>
      {/* Main end */}
    </div>
  );
}

export default AboutUs;
