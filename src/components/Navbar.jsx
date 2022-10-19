import React from "react";
import { useState } from "react";
import logo from "../assets/image 1.png";
import { navLinks } from "../constant";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <div className="w-full flex justify-between items-center mx-6 py-6">
      <img src={logo} alt="logo" className="h-[40px] w-[169px]" />
      <ul className="list-none sm:flex hidden justify-between items-center">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`cursor-pointer leading-[18.23px] text-[14px] text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <button className="hidden sm:inline-block bg-[#3480F1] w-[150px] h-[50px] rounded-[23.3333px] px-[39.3333px] py-[13.3333px] text-[14px] capitalize leading-[18px] font-normal text-white">
        Sign Up
      </button>
      <button className="hidden sm:inline-block w-[150px] h-[50px] rounded-[23.3333px] px-[39.3333px] py-[13.3333px] text-[14px] capitalize leading-[18px] font-normal text-white border-[#e7e7e7] border-2">
        Sign In
      </button>
      <div
        className="sm:hidden flex justify-between items-center mx-2"
        onClick={handleClick}
      >
        {toggle ? <AiOutlineClose /> : <FaBars />}

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 absolute top-20 right-0 my-2 flex-col`}
        >
          <ul className="list-none flex justify-between items-center flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`cursor-pointer leading-[18.23px] text-[14px] text-white ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-8"
                }`}
              >
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <button className="bg-[#3480F1] w-[150px] h-[50px] rounded-[23.3333px] px-[39.3333px] py-[13.3333px] text-[14px] capitalize leading-[18px] font-normal text-white mt-2">
            Sign Up
          </button>
          <button className="w-[150px] h-[50px] rounded-[23.3333px] px-[39.3333px] py-[13.3333px] text-[14px] capitalize leading-[18px] font-normal text-white border-[#e7e7e7] border-2 mt-2">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
