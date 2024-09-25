import React from 'react'
import powders from "../assets/powders.png"
const Feature = () => {
  return (
    <div>
       <div className='w-full h-[565px] 45hsize:h-[485px] md:h-[585px] lg:h-[655px]   bg-[#f5f5f5] flex flex-col items-center space-y-4 pt-11 '>
          {/* heading  */}
           <div className='w-[300px] h-min  font-local4 text-xl 45hsize:text-2xl lg:text-3xl font-extrabold flex flex-col items-center justify-center underline underline-offset-1'>
              <h1>Featured Products</h1>
              
           </div>
           {/* img section  */}
           <div>
             <img src={powders} alt="" className='w-[450px] md:w-[620px] slg:w-[660px] lg:w-[700px] h-[200px] md:h-[300px] slg:h-[340px] lg:h-[380px] ' />
           </div>
            {/* description  */}
           <div className='w-[340px] 45hsize:w-[440px] xs:w-[540px] md:w-[700px] slg:w-[800px] lg:w-[1000px] h-min font-local2 font-bold  text-base lg:text-xl text-gray-600 '>
              <h3>Discover the rich flavors of Ajwa with our finest selection of powders. From spicy chili powder to traditional sambar powder and savory chicken powder, our products bring authentic taste to your dishes. Perfect for enhancing your everyday cooking! Crafted with care, our powders are made from high-quality ingredients to ensure freshness and rich flavors. Trust Ajwa to add a touch of tradition to every meal.</h3>
           </div>
       </div>
    </div>
  )
}

export default Feature
