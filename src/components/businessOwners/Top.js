import React from "react";

function Top(props) {
  return (
    <div className="flex flex-col items-center mt-10 px-3">
      <h2 className="text-center text-[#313131] text-xl font-semibold font-Roboto md:text-3xl lg:text-5xl">
        {props.head}
      </h2>
      <p className="hidden text-[0.8125rem] text-center md:w-[495px] md:block text-[#737373] md:text-sm md:pt-2 lg:text-xl lg:w-[695px]">
        {props.body1}
      </p>
      <p className="text-center w-[236px] text-[0.8125rem] text-[#717171] pt-3 md:hidden">
        {props.body2}
      </p>

      <div className="mt-5">
        <input
          type="text"
          placeholder={props.search}
          className="hidden lg:block w-[400px] h-[50px] border md:border-[#717171] outline-none rounded pl-4"
        />
      </div>
    </div>
  );
}

export default Top;
