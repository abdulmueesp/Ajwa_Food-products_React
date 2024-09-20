import React from "react";
import Button from "./Button";
import adgirl from "../assets/adgirls.png";
import square from "../assets/square.png"
import hunpure from "../assets/hunpure.png"
const Banner = () => {
  return (
    <div className="w-full h-[525px] sm:h-[300px] lg:h-[400px] bg-[#f5f5f5]   flex  flex-col sm:flex-row justify-center  items-center ">
      {/* left section  */}
      <div className="w-min sm:w-[50%] h-[250px] sm:h-[300px] lg:h-[400px] bg-[#f5f5f5]  ">
         {/* main title section  */}
        <div className=" h-[280px] lg:h-[320px]   flex items-center  justify-center sm:justify-end bg-[#f5f5f5] ">
          <div className="w-[300px] 34hsize:w-[340px] 4hsize:w-[400px] xs:w-[500px] sm:w-[450px] h-[270px] bg-[#f5f5f5]   flex flex-col justify-center items-start xs:items-center sm:items-start space-y-4 ">
            <div> <h1 className="  text-2xl slg:text-3xl font-extrabold font-local4 xs:font-sans  ">Made with <b className="text-green-700 ">Pure</b> and <b className="text-green-600">Natural</b> Coconut oil</h1></div>
         
          <div className="w-[300px] xs:w-[370px] font-local2 font-semibold text-base md:text-lg"><h3>Our company delivers premium coconut oil crafted with care to maintain its natural goodness.</h3></div>
            <div className="w-[300px] xs:w-[350px] h-[50px]  flex justify-start xs:justify-center sm:justify-start items-center "><Button classname={'w-[240px] h-[40px] shadow-custom-outer3 font-local2 font-bold text-lg rounded-3xl bg-green-700 text-white'}>Learn more</Button></div>
          </div>
               
        </div>
        {/* design box section  */}
        <div className="w-full h-[80px] bg-[#f5f5f5]  flex justify-between  hidden lg:flex ">
             <img src={square} alt="" className="w-[75px] h-[75px]" />
             
        </div>
      </div>
      {/* right section  */}
      <div className="w-full sm:w-[30%] lg:w-[50%] h-[270px] sm:h-[300px]  lg:h-[400px]  flex ">
             {/* response div  */}
         <div className="w-[370px] h-[270px]  block sm:hidden flex flex-col justify-center items-center  ">
          <div className="w-full h-[70%]  p-1 flex justify-center items-center"><img src={hunpure} alt="" className="w-[50px] 34hsize:w-[90px] 4hsize:w-[130px] h-[60px] 34hsize:h-[100px] 4hsize:h-[140px]"/></div>
          <div className="w-full h-[30%]  flex items-end justify-start"><img src={square} alt=""className="w-[40px] 34hsize:w-[60px] 4hsize:w-[60px] h-[40px] 34hsize:h-[60px] 4hsize:h-[60px]" /></div>
          
         </div>
         <div className=" w-[600px] h-[270px] sm:h-[300px] lg:h-[400px] pr-[5px] sm:pr-0  flex justify-end sm:justify-center items-center    ">
          <div className="h-[200px] md:h-[250px] lg:h-[350px] w-[250px] md:w-[300px] lg:w-[400px]    bg-green-700 rounded-tl-[100px] rounded-br-[100px] flex justify-center items-end shadow-custom-outer1 ">
            <img src={adgirl} alt="" className=" w-[200px] md:w-[250px] lg:w-[320px] h-[150px] md:h-[200px] lg:h-[250px] mb-[1px] mr-[32px] md:mr-0 md:mb-0" />
          </div>
         </div>
         <div className="w-[160px] h-[400px] flex justify-end  hidden lg:flex"><img src={square} alt="" className="w-[75px] h-[75px] " /></div>
      </div>
   
       
      </div>





      
    
  );
};
// bg-[rgb(252, 235, 21)]
export default Banner;
