
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo.png"

const Navbar = () => {
    const [open,Setopen]=useState('true')
 
  const toggle=()=>{
    Setopen(!open)
  }

  return (
    <div>
       <div className="w-full bg-[#f5f5f5] h-[60px] flex justify-between    ">
        {/* logo section  */}
        <div className="w-[230px] xs:w-[500px] bg-[#f5f5f5] flex items-center  h-[60px]   sm:pl-[100px]">
          <div className="w-[180px] h-[50px] bg-[#f5f5f5]  flex justify-center items-center  ">
              <div className='w-[36px] h-[36px] bg-red-700 text-white rounded-full  flex items-center justify-center font-local1 font-extrabold text-2xl sm:text-3xl shadow-custom-outer1 '><h1>A</h1></div>
              <div><h1 className='font-local2 font-bold sm:text-xl text-gray-600 ml-[3px]'>jwa  products</h1></div>
          </div>
          
        </div>
        {/* nav section  */}
        <nav
          className={`h-[60px] w-[650px] flex xs:space-x-5  md:space-x-16  items-center justify-center font-local font-normal hidden xs:flex  `}
        >
          <Link className="Navbar_nav">Home</Link>
          <Link className="Navbar_nav">Contact</Link>
          <Link className="Navbar_nav">Help</Link>
          <Link className="Navbar_nav">About</Link>
        </nav>
        {/* menu button section  */}
        <div className="flex justify-center items-center w-[65px] h-[60px] bg-[#f5f5f5]  block xs:hidden  " onClick={toggle} >
        {open ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-9 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      ) : (
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
        </div>
      </div>
        <div className={` flex flex-col space-y-5 justify-center items-center w-full h-[300px] bg-white rounded-2xl bg-opacity-90 border-2  absolute   text-black font-local animate-slideDown ${open ? "hidden xs:hidden" :"block xs:hidden"}`}>
          <button className="Navbar_mobilenav">Home</button>
          <button  className="Navbar_mobilenav">Contact</button>
          <button  className="Navbar_mobilenav">About</button>
          <button  className="Navbar_mobilenav">Help</button>
        </div>
        
    </div>
  )
}

export default Navbar
