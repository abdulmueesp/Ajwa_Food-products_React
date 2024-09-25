import React from 'react'

const Boxes = () => {
  return (
    <div className='w-full h-[240px] sm:h-[180px] bg-[#f5f5f5]  flex justify-center items-center '>
      <div className='w-[300px] xs:w-[400px] sm:w-[630px] md:w-[750px] slg:w-[900px] lg:w-[1000px] h-[240px] sm:h-[180px]  grid grid-cols-2 sm:grid-cols-4 pt-[27px] lg:pt-[35px]'>
         {/* box 1  */}
         <div className='Boxes  '>
            <div className='w-full h-[17px]  rounded-xl flex justify-center items-center font-thin font-local5 text-gray-700 text-xs md:text-sm '>
                <h2>Trusted by</h2>
            </div>

            <div className='w-full h-[35px] rounded-xl font-extrabold flex justify-center items-center text-xl font-local '><h1>2k</h1></div>
            <div className='w-full h-[18px]  rounded-xl flex justify-center items-center font-local5 text-gray-700  font-thin text-xs md:text-sm'>
                 <h2>Homes</h2>
            </div>
         </div>
         {/* box2  */}
         <div className='Boxes'>
         <div className='w-full h-[17px]  rounded-xl flex justify-center items-center font-thin font-local5 text-gray-700 text-xs md:text-sm'>
                <h2>Preferred by</h2>
            </div>
            <div className='w-full h-[35px] rounded-xl font-extrabold flex justify-center items-center text-xl font-local '><h1>800+</h1></div>
            <div className='w-full h-[18px]  rounded-xl flex justify-center items-center font-local5 text-gray-700  font-thin text-xs md:text-sm'>
                 <h2>Restaurants</h2>
            </div>
         </div>
         {/* box 3  */}
         <div className='Boxes'>
         <div className='w-full h-[17px]  rounded-xl flex justify-center items-center font-thin font-local5 text-gray-700 text-xs md:text-sm '>
                <h2>Sincerely by</h2>
            </div>
            <div className='w-full h-[35px] rounded-xl font-extrabold flex justify-center items-center text-xl font-local '><h1>25</h1></div>
            <div className='w-full h-[18px]  rounded-xl flex justify-center items-center font-local5 text-gray-700  font-thin text-xs md:text-sm'>
                 <h2>Hardworkers</h2>
            </div>
         </div>
         {/* 4th box  */}
         <div className='w-[130px] h-[70px]  rounded-b-[20px] rounded-tl-[20px] shadow-custom-outer4 bg-green-700 flex flex-col text-white border-2 border-green-700'>
         <div className='w-full h-[17px]  rounded-xl flex justify-center items-center  font-local5 text-white text-xs md:text-sm '>
                <h2>Over </h2>
            </div>
            <div className='w-full h-[35px] rounded-xl font-extrabold flex justify-center items-center text-xl font-local '><h1>3k+</h1></div>
            <div className='w-full h-[18px]  rounded-xl flex justify-center items-center font-local5 text-white  text-xs md:text-sm'>
                 <h2>Happy Faces</h2>
            </div>
         </div>
         
      </div>
    </div>
  )
}

export default Boxes
