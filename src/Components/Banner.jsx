import React from "react";
import Button from "./Button";
import adgirl from "../assets/adgirls.png";
import square from "../assets/square.png"
const Banner = () => {
  return (
    <div className="w-full h-[525px] sm:h-[300px] lg:h-[400px] bg-[#f5f5f5]  border-2 border-violet-700 flex  flex-col sm:flex-row justify-center  items-center ">
      {/* left section  */}
      <div className="w-min sm:w-[50%] h-[250px] sm:h-[300px] lg:h-[400px] bg-[#f5f5f5] border-2 border-red-500 ">
         {/* main title section  */}
        <div className=" h-[280px] lg:h-[320px]   flex items-center  justify-center sm:justify-end bg-[#f5f5f5] ">
          <div className="w-[300px] 34hsize:w-[340px] 4hsize:w-[400px] xs:w-[500px] sm:w-[450px] h-[270px] bg-[#f5f5f5]   flex flex-col justify-center items-start xs:items-center sm:items-start space-y-4 ">
            <div> <h1 className=" font-extrabold text-2xl slg:text-3xl  ">Made with <b className="text-green-600">Pure</b> and <b className="text-green-600">Natural</b> Coconut oil</h1></div>
         
          <div className="w-[300px] xs:w-[370px] font-local2 font-semibold text-base md:text-lg"><h3>Our company delivers premium coconut oil crafted with care to maintain its natural goodness.</h3></div>
            <div className="w-[300px] xs:w-[350px] h-[50px]  flex justify-start xs:justify-center sm:justify-start items-center "><Button classname={'w-[240px] h-[40px] border-2 rounded-3xl bg-green-600 text-white'}>BUY NOW</Button></div>
          </div>
               
        </div>
        {/* design box section  */}
        <div className="w-full h-[80px] bg-[#f5f5f5]  flex justify-between  hidden lg:flex ">
             <img src={square} alt="" className="w-[75px] h-[75px]" />
             
        </div>
      </div>
      {/* right section  */}
      <div className="w-full sm:w-[30%] lg:w-[50%] h-[270px] sm:h-[300px]  lg:h-[400px]  flex border-2 border-red-500">
         <div className="w-[100px] h-[150px] bg-green-600 block sm:hidden"></div>
         <div className=" w-[600px] h-[270px] sm:h-[300px] lg:h-[400px] pr-[5px] sm:pr-0  flex justify-end sm:justify-center items-center border-2  bg-red-500  ">
          <div className="h-[200px] md:h-[250px] lg:h-[350px] w-[250px] md:w-[300px] lg:w-[400px]    bg-green-600 rounded-tl-[100px] rounded-br-[100px] flex justify-center items-end ">
            <img src={adgirl} alt="" className=" w-[200px] md:w-[250px] lg:w-[300px] h-[150px] md:h-[200px] lg:h-[250px] mb-[1px] mr-[32px] md:mr-0 md:mb-0" />
          </div>
         </div>
         <div className="w-[160px] h-[400px] flex justify-end  hidden lg:flex"><img src={square} alt="" className="w-[75px] h-[75px] " /></div>
      </div>
   
       
      </div>





      
    
  );
};
// bg-[rgb(252, 235, 21)]
export default Banner;
