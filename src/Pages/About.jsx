import React from "react";
import Bottle from "../assets/bottle.png";
import Machine from "../assets/machine.jpg"
import Aboutbox from "../Components/Aboutbox";
import Roastingimg from "../assets/Roastingimg.jpg"
import machine2 from "../assets/machine2.jpg"
const About = () => {
  return (
    <div>
      <div className="w-full h-[600px] slg:h-[350px] border-2  flex flex-col slg:flex-row pt-4 xs:pt-0 bg-[#f5f5f5]">
        {/* first box  */}
        <div className="w-full slg:w-[900px] h-[310px] 4hsize:h-[270px] xs:h-[350px]  flex flex-col items-center justify-center space-y-3">
          {/* heading */}
          <h1 className="font-local4 font-semibold text-xl slg:text-2xl text-gray-600">
            Our Story
          </h1>
          {/* paragraph */}
          <div className="w-[330px] 34hsize:w-[340px] 4hsize:w-[400px] xs:w-[500px] sm:w-[600px] lg:w-[700px] h-min  font-local2 font-semibold text-base xs:text-lg lg:text-xl text-gray-600">
            <p>
              Born out of a passion for natural and authentic ingredients, Ajwa
              Products started its journey with a commitment to promoting
              healthier alternatives for cooking. Our flagship product, Ajwa
              Coconut Oil, is extracted from the freshest coconuts, preserving
              its rich flavor and nutrients. Alongside coconut oil, our range of
              kitchen powders, including chili, sambar, and chicken powders, are
              prepared with the highest standards, offering both taste and
              purity.
            </p>
          </div>
        </div>
        {/* second box  */}
        <div className="w-full slg:w-[400px] h-[300px] xs:h-[350px]  flex justify-center items-center">
          <img
            src={Bottle}
            alt=""
            className="w-[220px] 4hsize:w-[240px] xs:w-[270px] h-[220px] 4hsize:h-[240px] xs:h-[270px] shadow-custom-outer3"
          />
        </div>
      </div>
      <Aboutbox
        head1={"Copra Purchase and Sorting"}
        paragraph1={"Milling grade copra is sourced for coconut oil production, mainly from coastal regions and Kangeyam, Tamil Nadu. The sun-dried, cup-shaped copra has a white inner surface and brown outer. It is inspected for quality, and impurities like coconut shell, low-quality copra, and jute threads are removed."}
        head2={"Copra Drying Process"}
        paragraph2={"Copra is loaded into a 9-ton hopper, where hot air at 75-80°C is pumped for 10 hours, reducing moisture from 5% to 2.5%. This drying process makes the copra hard and brittle, improving the shelf life of the oil by preventing rancidity. Moisture-free copra also allows for finer filtration during oil extraction."}
        img={Machine}
    
      />
      <Aboutbox
        head1={"Copra Cutting"}
        paragraph1={"Milling copra, in irregular shapes, is cut into 1-inch pieces using a motorized cutter. The beaters reduce the size, and smaller pieces escape through a mesh. Uniform cutting ensures even roasting, and the pieces are transported via a screw conveyor."}
        head2={"Copra Roasting/Cooking"}
        paragraph2={"Copra pieces are roasted in a steam jacketed vessel for about an hour with continuous agitation. Steam is sprayed for better cooking, improving oil recovery and aroma. The process sterilizes the copra, enhancing the shelf life of the coconut oil."}
        img={Roastingimg}
    
      />
      <Aboutbox
        head1={"Copra Crushing/Oil Extraction"}
        paragraph1={"Dried and roasted copra is crushed in an expeller to extract oil, leaving behind oil cake with about 8% oil. Crushing is done in two stages to maximize oil recovery. About 63% of copra is oil, and the remaining is oil cake, which is sold for cattle feed or further extraction."}
        head2={"Coconut Oil Filtering"}
        paragraph2={"Oil extracted through expeller will has about 8% sediments/foots. They are separated from oil through a 3 stage filtering process i.e. Coarse filtering by Vibrating Screen, Main filtering through Filter Press and Fine filtering through Filter Press."}
        img={machine2}
    
      />
      
    </div>
  );
};

export default About;
