import React from "react";

import { Link } from "react-router-dom";

function DropdownMenu() {
  return (
    <div className=" flex flex-col uppercase text-xs bg-primary w-[180px] text-white px-5 pt-5 pb-6 gap-5 rounded font-bold ">
      <p className="cursor-pointer bg-secondary text-[#222] w-20 p-2 pl-2 rounded-full">
        Home
      </p>
      <Link to="/investors">
        <p className="cursor-pointer">Investors</p>
      </Link>
      <Link to="/owners">
        <p className="cursor-pointer">Business Owners</p>
      </Link>
      <Link to="/aboutus">
        <p className="cursor-pointer">About Us</p>
      </Link>
    </div>
  );
}

export default DropdownMenu;
