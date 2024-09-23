import React from 'react'
import ads from "../assets/ads.png"
import square from "../assets/circle1.png"
const Card = () => {
  return (
    <div>
     
      <div className='w-full h-[250px] sm:h-[210px] md:h-[320px] slg:h-[380px] bg-[#f5f5f5] flex flex-row  justify-center items-center   '>
        {/* 1st box  */}
        <div className='w-[310px] h-[380px] slg:flex items-center hidden'>
        <img src={square} alt="" className="w-[35px] h-[35px]  " />
        </div>
         {/* 2st box  */}
         <div className='w-[600px] md:w-[700px] slg:w-[900px] h-[210] md:h-[280px] slg:h-[330px]  flex justify-center items-center pl-2 pr-2'>
            <img src={ads} alt="" className='w-[190] md:w-[250px] slg:w-[280px] h-[210px] md:h-[280px] slg:h-[300px]' />
            <div className='w-[330px] 5hsize:w-[380px] md:w-[430px] slg:w-[600px] h-[210px] md:h-[280px] slg:h-[300px]  bg-white   flex flex-col space-y-2 items-center justify-center shadow-custom-outer1 ' >
                {/* main quote  */}
              <div className='slg:w-[500px] slg:h-[100px] pr-1  flex justify-center items-center'>
                <h1 className='font-local2 font-bold  text-green-700 text-lg 5hsize:text-xl sm:text-2xl slg:text-3xl'>Cook with love and keep your family healthy with our pure coconut oil</h1>
                </div>
                  {/* second word  */}
                  <div className='font-local2  font-bold text-sm 5hsize:text-base sm:text-xl '><h2>healthy and tasty!</h2></div>
            </div>
         </div>
         {/* 3rd box  */}
         <div className='w-[310px] h-[380px] flex justify-end slg:flex slg:block hidden'>

         <img src={square} alt="" className="w-[35px] h-[35px] " />
         </div>
      </div>
    </div>
  )
}

export default Card
