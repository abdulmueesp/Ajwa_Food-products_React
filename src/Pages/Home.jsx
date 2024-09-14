import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo1.jpg";
import Banner from "../assets/banner.jpg"
const Home = () => {
  const [open, Setopen] = useState(false);
   const toglle =()=>{
      Setopen(!open)
   }
  return (
    <div>
      {/* navbar */}
      <div className="w-full bg-customGreen h-[60px] flex justify-between">
        {/* logo section  */}
        <div className="w-[250px] xs:w-[500px] bg-customGreen h-[60px] flex justify-center items-end pl-[15px] sm:pl-0">
          <div className="w-[100px] h-[60px] bg-customGreen flex justify-center items-center ">
            <img src={Logo} alt="" className="w-[100px] h-[45px]" />
          </div>
          <div className="font-local3  text-white text-sm md:text-base ">
            <h2>Food products</h2>
          </div>
        </div>
        {/* nav section  */}
        <nav
          className={`h-[60px] w-[650px] bg-customGreen flex xs:space-x-5  md:space-x-16  items-center justify-center font-local font-normal hidden xs:flex text-white `}
        >
          <Link>HOME</Link>
          <Link>CONTACT</Link>
          <Link>HELP</Link>
          <Link>ABOUT</Link>
        </nav>
        {/* menu button section  */}
        <div className="flex justify-center items-center w-[65px] h-[60px] bg-customGreen block xs:hidden " onClick={toglle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-9 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
        <div className={` flex flex-col space-y-3 justify-center items-center w-full h-[300px] bg-customGreen absolute  xs:hidden text-white font-local ${open ? "hidden xs:hidden" : "block animate-slideDown"} `}>
          <button className="w-[300px] h-[40px] border-2 border-white rounded-3xl">Home</button>
          <button className="w-[300px] h-[40px] border-2 border-white rounded-3xl">Contact</button>
          <button className="w-[300px] h-[40px] border-2 border-white rounded-3xl">About</button>
          <button className="w-[300px] h-[40px] border-2 border-white rounded-3xl">Help</button>
        </div>
       
    </div>
  );
};

export default Home;
