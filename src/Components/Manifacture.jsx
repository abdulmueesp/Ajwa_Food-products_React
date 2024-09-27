import React from "react";
import machine from "../assets/machine.jpg";
import "aos/dist/aos.css";
const Manifacture = () => {
  return (
    <div className="w-full h-[720px] 45hsize:h-[660px] sm:h-[510px]  flex flex-col-reverse sm:flex-row justify-center items-center   bg-[#f5f5f5] pt-12 sm:pt-0  ">
      {/* first box /left side */}
      <div className=" w-[320px] 4hsize:w-[400px] xs:w-[500px] sm:w-[720px] xl:w-[800px] h-[480px] 45hsize:h-[400px]  flex flex-col justify-center items-center sm:justify-normal sm:items-start  pl-3 xl:pl-[100px] space-y-5 pt-4 sm:pt-0 ">
        {/* heading  */}
        <div className=" w-[320px] 45hsize:w-[400px] slg:w-[500px] h-min  font-semibold text-xl 45hsize:text-2xl font-local4 flex " data-aos="zoom-in-up"  data-aos-delay="200">
          <h1>How is Coconut Oil Manufactured?</h1>
        </div>
        {/* paragraph  */}
        <div className="w-[320px] 45hsize:w-[400px] slg:w-[500px] lg:w-[600px] h-min  font-local2 font-bold text-base slg:text-xl text-gray-600"data-aos="zoom-in-up"  data-aos-delay="400">
          <p>
            we specialize in crafting pure and natural coconut oil. Our
            manufacturing process ensures that only the finest coconuts are
            selected and cold-pressed to preserve their rich nutrients and
            natural flavor.
          </p>
        </div>
        {/* points  */}
        {/* first box  */}
        <div className="w-[320px] 45hsize:w-[400px] slg:w-[500px] lg:w-[600px] h-[90px] slg:h-[65px] border-b border-gray-300 flex space-x-2 sm:space-x-0" data-aos="zoom-in-up"  data-aos-delay="500">
          {/* icon box  */}
          <div className="w-[70px] h-[55px]  flex justify-center items-center">
            <div className="w-[45px] h-[45px] bg-green-700 text-white flex items-center justify-center text-lg rounded-full shadow-custom-outer2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </div>
          </div>
          {/* text-box  */}
          <div className="w-[500px] h-[77px] slg:h-[60px] ">
            <h2 className="text-lg font-local4">Drying the Coconut Meat</h2>
            <h3 className="text-gray-600 text-base  ">
              The coconut meat is dried to retain its nutrients and flavor.
            </h3>
          </div>
        </div>
        {/* second box  */}
        <div className="w-[320px] 45hsize:w-[400px] slg:w-[500px] lg:w-[600px] h-[90px] slg:h-[65px] border-b border-gray-300 flex space-x-2 sm:space-x-0" data-aos="zoom-in-up"  data-aos-delay="600">
          {/* icon box  */}
          <div className="w-[70px] h-[55px]  flex justify-center items-center">
            <div className="w-[45px] h-[45px] bg-green-700 text-white flex items-center justify-center text-lg rounded-full shadow-custom-outer2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </div>
          </div>
          {/* text-box  */}
          <div className="w-[500px] h-[77px] slg:h-[60px] ">
            <h2 className="text-lg  font-local4">Cold Press Extraction</h2>
            <h3 className="text-gray-600 text-base ">
            The cold-press method retains the oil's purity and nutrients.
            </h3>
          </div>
        </div>
        <div className="w-[320px] 45hsize:w-[400px] h-min flex  underline underline-offset-1 text-green-700"><a href="/about"><h3>Read more</h3></a> </div>
      </div>
      {/* second box / right side  */}
        <div className="w-[320px] 45hsize:w-[400px] xs:w-[500px] xl:w-[600px] h-[220px] 45hsize:h-[250px] xl:h-[350px] border-black flex justify-center sm:justify-normal ">
           <img src={machine} alt="" className="w-[400px] slg:w-[500px] xl:w-[600px] h-[200px] slg:h-[250px] xl:h-[350px]" data-aos="zoom-in-up"  data-aos-delay="700"/>
        </div>
    </div>
  );
};

export default Manifacture;
