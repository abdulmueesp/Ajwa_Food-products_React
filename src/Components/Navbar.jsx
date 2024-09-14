
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo1.jpg"

const Navbar = () => {
    const [open,Setopen]=useState('true')
 
  const toggle=()=>{
    Setopen(!open)
  }

  return (
    <div>
       <div className="w-full bg-customGreen h-[60px] flex justify-between">
        {/* logo section  */}
        <div className="w-[250px] xs:w-[500px] bg-customGreen h-[60px] flex justify-center items-end pl-[15px] sm:pl-0">
          <div className="w-[100px] h-[60px] bg-customGreen flex justify-center items-center ">
            <img src={Logo} alt="" className="w-[100px] h-[45px]" />
          </div>
          <div className="font-local3  text-white text-sm  mb-2 ">
            <h2>Food products</h2>
          </div>
        </div>
        {/* nav section  */}
        <nav
          className={`h-[60px] w-[650px] bg-customGreen flex xs:space-x-5  md:space-x-16  items-center justify-center font-local font-normal hidden xs:flex text-white `}
        >
          <Link className="Navbar_nav">HOME</Link>
          <Link className="Navbar_nav">CONTACT</Link>
          <Link className="Navbar_nav">HELP</Link>
          <Link className="Navbar_nav">ABOUT</Link>
        </nav>
        {/* menu button section  */}
        <div className="flex justify-center items-center w-[65px] h-[60px] bg-customGreen block xs:hidden  " onClick={toggle} >
        {open ? (
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
