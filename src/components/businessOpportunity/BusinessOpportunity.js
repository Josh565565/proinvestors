import React from "react";
import ThirdNav from "./ThirdNav";

import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Images import start
import Profile from "../images/profile.jpg";
import LoadingLine from "../images/loading-line.svg";
import Footer from "../Landingpage/Footer";
import { useImage } from "../ImageContext";

function BusinessOpportunity(props) {
  const { selectedImage } = useImage();

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div>
        <ThirdNav />
      </div>
      {/* Main start */}
      <div className="flex lg:gap-5">
        <div className="bg-white lg:bg-primary lg:hidden xl:block relative lg:w-[200px] lg:h-[550px] xl:w-[290px] xl:h-[550px] ">
          <div
            onClick={goBack}
            className="hidden lg:flex items-center justify-center gap-3 w-[105px] h-[40px] border rounded-[6px] border-[#909090] mt-2 ml-20 cursor-pointer hover:scale-105"
          >
            <FontAwesomeIcon
              icon="fa-solid fa-arrow-left"
              className="text-[#F8F8F8]"
            />
            <p className="text-[#F8F8F8]">Back</p>
          </div>
        </div>
        <div className="flex flex-col w-[100%] items-center px-2 lg:w-[980px] xl:items-start">
          <div className="mt-5 lg:mt-0">
            <div className="flex items-center gap-1">
              <img
                src={Profile}
                alt="Profile"
                className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full"
              />
              <div>
                <h3 className="text-base text-[#323232] font-bold font-Roboto lg:text-[1.75rem]">
                  Blissful Bakes
                </h3>
                <p className="text-[#717171] text-xs font-medium font-Inter lg:hidden">
                  Sweet Haven Bakery
                </p>
              </div>
            </div>
            <p className="text-base text-[#444444] font-medium font-Roboto w-[360px] md:w-[430px] lg:text-sm lg:w-[582px] mb-3">
              Blissful Bakes - where every treat is a symphony of flavors
              crafted with love, from decadent cakes to delicate pastries, each
              confection is a masterpiece that promises to elevate your taste
              buds to new heights of delight.
            </p>
            <div className="flex items-center gap-6 relative lg:gap-10 xl:gap-6">
              <img
                src={selectedImage}
                alt=""
                className="w-[195px] h-[200px] md:w-[405px] md:h-[300px] lg:w-[510px] lg:h-[374px] xl:w-[610px] xl:h-[374px]"
              />
              <div className="flex flex-col md:gap-[15px] lg:gap-4">
                <div>
                  <p className="text-base text-[#313131] font-bold font-Roboto lg:text-[1.5rem]">
                    $80,500
                  </p>
                  <p className="text[0.8125rem] text-[#909090] font-Inter lg:text-xl">
                    Raised
                  </p>
                  <img
                    src={LoadingLine}
                    alt=""
                    className="w-[155px] md:w-[315px]"
                  />
                </div>
                <div>
                  <p className="text-base text-[#313131] font-bold font-Roboto lg:text-[1.5rem]">
                    5
                  </p>
                  <p className="text[0.8125rem] text-[#909090] font-Inter lg:text-xl">
                    Investors
                  </p>
                </div>
                <div>
                  <p className="text-base text-[#313131] font-bold font-Roboto lg:text-[1.5rem]">
                    $10,000
                  </p>
                  <p className="text[0.8125rem] text-[#909090] font-Inter lg:text-xl">
                    Minimum Investment
                  </p>
                </div>
                <div>
                  <p className="text-base text-[#313131] font-bold font-Roboto lg:text-[1.5rem]">
                    120 days
                  </p>
                  <p className="text[0.8125rem] text-[#909090] font-Inter lg:text-xl">
                    Left to invest
                  </p>
                </div>
                <div>
                  <button className=" bg-secondary text-[#313131] font-bold font-Inter rounded-[5px] w-[350px] h-[40px] absolute bottom-[-50px] left-2 md:static md:w-[315px] md:h-[48px] lg:text-lg lg:w-[315px] lg:h-[48px] hover:scale-105">
                    Invest Now
                  </button>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex justify-between text-[#313131] font_inter mt-16 border-b border-b-[#909090]  md:mt-5 w-[350px] text-base md:text-xl md:w-[405px] lg:w-[510px] xl:w-[610px]">
              <p className="text-[#B3B3B3] lg:text-xl font-Roboto">Overview</p>
              <div className="flex flex-col items-center mt-1">
                <p className="text-[#313131] font-bold font-Roboto">About</p>
                <div className="bg-b w-[90px] h-[3px] md:w-[122px] md:h-[4px]"></div>
              </div>
              <p className="text-[#B3B3B3] lg:text-xl font-Roboto">Terms</p>
              <p className="text-[#B3B3B3] lg:text-xl font-Roboto">Documents</p>
            </div>
            <div className=" mt-5 w-[350px] text-[#717171] font-Inter text-xs md:text-sm md:w-[405px] lg:w-[510px] xl:w-[610px]">
              <p className="pb-20 font-Roboto">
                Welcome to Bliss Bakes, where indulgence meets pure bliss! We
                are a boutique bakery dedicated to creating mouthwatering treats
                that delight the senses and leave you craving for more. With a
                passion for baking and a commitment to quality, we strive to
                deliver unforgettable culinary experiences to our valued
                customers.
                <br /> At Bliss Bakes, we believe that every bite should be a
                moment of pure bliss, our talented team of bakers and pastry
                chefs meticulously craft every treat using only the finest
                ingredients. From decadent cakes to delicate pastries, our
                creations perfectly combine flavors, textures, and artistic
                flair. We take pride in offering a diverse range of options to
                cater to various tastes and dietary preferences. Whether you're
                a chocolate lover, a fan of fruity delights, or have special
                dietary requirements such as vegan or gluten-free, we have
                something to satisfy your cravings. Our commitment to excellence
                extends beyond our delectable treats. We prioritize exceptional
                customer service, ensuring that every interaction with our team
                is friendly, personalized, and memorable. From helping you
                choose the perfect cake for a special occasion to accommodate
                custom orders, we go the extra mile to make your experience with
                us genuinely delightful. Bliss Bakes isn't just a bakery; it's a
                place where celebrations come to life. We take joy in being a
                part of your most cherished moments, whether a birthday,
                wedding, anniversary or any other milestone. Our cakes and
                pastries are designed to add a touch of magic to your
                celebrations and create memories that last a lifetime. Join us
                on a journey of sweet indulgence and discover the pure bliss
                that awaits you at Bliss Bakes. Visit our bakery, explore our
                tempting menu, and treat yourself to a little slice of heaven.
                We look forward to serving you and making your taste buds dance
                with joy!
              </p>
            </div>
            {/*  */}
            <p></p>
          </div>
        </div>
      </div>
      {/* Main end */}
      {/* Footer start */}
      <div>
        <Footer />
      </div>
      {/* Footer end */}
    </div>
  );
}

export default BusinessOpportunity;
