import React, { useState } from "react";

import SignUp from "../Auth/SignUp";
import SignIn from "../Auth/SignIn";
import { motion } from "framer-motion"

// Images import
import BG from "./images/bg-img.svg";
import BGM from "./images/bg-img-m.svg";
import Nav from "./Nav";

function Hero() {
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);

  const toggleSignUp = () => {
    setSignUpOpen(!signUpOpen);
  };
  const toggleSignIn = () => {
    setSignInOpen(!signInOpen);
  };
  return (
    <div className="overflow-hidden">
      {signUpOpen && (
        <div
          className="fixed top-0 left-0 w-[100%] h-[100%] bg-gradient-to-b from-opacity-90 to-opacity-90 via-transparent from-gray-200 to-gray-200"
          onClick={toggleSignUp}
        />
      )}
      {signInOpen && (
        <div
          className="fixed top-0 left-0 w-[100%] h-[100%] bg-white opacity-80   via-transparent from-gray-100 to-gray-100"
          onClick={toggleSignIn}
        />
      )}
      <div className="flex flex-col items-center">
        {signUpOpen && <SignUp close={toggleSignUp} open={toggleSignIn} />}
      </div>
      <div className="flex flex-col items-center">
        {signInOpen && <SignIn close={toggleSignIn} open={toggleSignUp} />}
      </div>
      {/* <Nav /> */}
      <div className="bg-hero-bg bg-primary bg-[length:400px] lg:h-[500px] md:h-[420px] bg-no-repeat bg-right-bottom px-[6%] md:bg-[length:400px] lg:bg-[length:500px]">
        <div className="md:flex gap-16 justify-between items-center pt-6">
          <div className="w-[320px] md:w-[450px] lg:w-[640px] xl:w-[700px]">
            <motion.h3 className="leading-normal text-white text-[1.2rem] font-bold md:text-[1.4rem] lg:text-[2rem] xl:text-[2.49rem] md:leading-snug"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-secondary">Unlock Growth Potential: </span>
              Connect with Small-Budget Investors to Fuel Your Business's
              Success.
            </motion.h3>
            <p className="text-xs text-[#D9D9D9] w-[90%] md:w-[90%] md:text-[0.7rem] lg:text-[1rem] font-Roboto">
              Our website promotes growth potential by connecting small business
              owners with low-cost investors. Promote cooperation and investment
              opportunities, Build connections and promote success.
            </p>
            <div className="flex gap-5 mt-10">
              <motion.button
                onClick={toggleSignUp}
                className=" bg-secondary font-bold w-[170px] h-[40px] rounded md:hidden font-Roboto"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                  }
                }}
              >
                Get started
              </motion.button>
              <motion.button
                onClick={toggleSignUp}
                className="hidden bg-secondary font-bold md:w-[160px] md:h-[55px] lg:w-[250px] lg:h-[57px] lg:text-xl rounded md:block lg:hover:scale-105 font-Roboto"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                  }
                }}
              >
                Sign up
              </motion.button>
              <button
                onClick={toggleSignIn}
                className="hidden text-xl rounded font-bold text=[#D9D9D9] border-2 border-[#737373] text-[#D9D9D9] md:w-[160px] md:h-[55px] lg:w-[250px] lg:h-[57px] md:block lg:hover:scale-105 font-Roboto"
              >
                Login
              </button>
            </div>
          </div>
          <div className="py-[70px]  md:py-0 w-[500px]">
            <motion.div className="">
              <motion.img
                src={BG}
                alt="man image"
                className="hidden w-[250px] md:block md:w-[320px] lg:w-[400px]"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                  }
                }}

              />
              <div className="">
                <motion.img
                  src={BGM}
                  alt="man image"
                  className="block pl-6 md:hidden"
                  initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                  }
                }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
