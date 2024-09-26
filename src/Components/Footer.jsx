import React from "react";
import whatsappicon from "../assets/whatsappicon.png"
import instagram from "../assets/instagram.png"
import facebook from "../assets/facebook.png"
import Footerbox from "./Footerbox";
const Footer = () => {
  return (
   <div className="w-full h-[880px] 4hsize:h-[850px] xs:h-[800px] md:h-[350px] slg:h-[300px] bg-green-700 flex flex-col items-center md:items-start md:flex-row justify-evenly p-5 4hsize:p-8">
         {/* box 1  */}
       <div className="xs:w-[350px] 45hsize:w-[440px] h-[180px] md:h-[250px]   border-white text-white">
         <h2 className="font-local2 text-xl font-semibold">Ajwa Products</h2>
      {/* paragraph */}
      <h3 className="font-local2 text-base lg:text-lg">
        Our Company offers premium oils and essential kitchen powders like
        chili, sambar, and chicken powder. Our products are known for their
        purity and freshness. Trust Ajwa for authentic and high-quality
        ingredients.
      </h3>
      {/* icons */}
      <div className="w-[200px] h-min flex space-x-3 pt-3">
        <img src={whatsappicon} alt="" className="w-[25px] 45hsize:w-[30px] h-[25px] 45hsize:h-[30px]" />
        <img src={instagram} alt="" className="w-[25px] 45hsize:w-[30px] h-[25px] 45hsize:h-[30px]" />
        <img src={facebook} alt="" className="w-[27px] 45hsize:w-[30px] h-[27px] 45hsize:h-[30px]" />
      </div>
       </div>
        {/* box2 */}
       
        <Footerbox
          heading={"Services"}
          p1={"Sell products"}
          p2={"Delivery services"}
          p3={"24x7"}
        />
        <Footerbox
          heading={"Help"}
          p1={"Contact"}
          p2={"Instagram"}
          p3={"Whatsapp"}
        />
        <Footerbox
          heading={"Legal"}
          p1={"Accessibility"}
          p2={"No Returns Policy"}
          p3={"No Refund Policy"}
        />
   </div> 
   
  );
};

export default Footer;
