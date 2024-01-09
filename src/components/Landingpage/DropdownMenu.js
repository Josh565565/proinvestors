import React from "react";

import { Link, NavLink } from "react-router-dom";

function DropdownMenu() {

  const activeLink = 'cursor-pointer bg-secondary text-[#222] p-2 pl-2 rounded-full';
  const normalLink = '';
  return (
    <div className=" flex flex-col uppercase text-xs bg-primary w-[180px] text-white px-5 pt-5 pb-6 gap-5 rounded font-bold ">
       <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
      <p className="">
        Home
      </p>
      </NavLink>
      <NavLink to="/investors" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
        <p className="cursor-pointer">Investors</p>
      </NavLink>
      <NavLink to="/owners" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
        <p className="cursor-pointer">Business Owners</p>
      </NavLink>
      <NavLink to="/aboutus" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
        <p className="cursor-pointer">About Us</p>
      </NavLink>
    </div>
  );
}

export default DropdownMenu;
