import React from "react";

function DropdownMenu() {
  return (
    <div className=" flex flex-col uppercase text-xs bg-primary w-[180px] text-white px-5 pt-5 pb-6 gap-5 rounded font-bold ">
      <p className="cursor-pointer bg-secondary text-[#222] w-20 p-2 pl-2 rounded-full">
        Home
      </p>
      <p className="cursor-pointer">Investors</p>
      <p className="cursor-pointer">Business Owners</p>
      <p className="cursor-pointer">About Us</p>
    </div>
  );
}

export default DropdownMenu;
