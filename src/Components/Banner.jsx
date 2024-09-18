import React from "react";
import Button from "./Button";
const Banner = () => {
  return (
    <div className="w-full h-[400px] bg-[#f5f5f5] flex justify-center items-start border-2 border-red-500">
      {/* left section  */}
      <div className="w-[50%] h-[400px] border-2 border-black">
         {/* main title section  */}
        <div className="w-full h-[320px] bg-green-300  flex items-center justify-end">
          <div className="w-[450px] h-[270px] bg-pink-300  flex flex-col justify-center items-start space-y-4">
            <div> <h1 className="text-3xl font-extrabold">Made with <b>Pure</b> and <b>Natural</b> Coconut oil</h1></div>
         
          <div className="w-[370px] font-local2 font-semibold text-lg"><h3>Our company delivers premium coconut oil crafted with care to maintain its natural goodness.</h3></div>
            <div><Button/></div>
          </div>
               
        </div>
        {/* design box section  */}
        <div className="w-full h-[80px] bg-yellow-300 "></div>
      </div>
      {/* right section  */}
      <div className="w-[50%] h-[400px] border-2 border-black"></div>
   
       
      </div>





      
    
  );
};
// bg-[rgb(252, 235, 21)]
export default Banner;
