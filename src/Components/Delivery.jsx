import React from 'react'
import bike from "../assets/bike.webp"
const Delivery = () => {
  return (
    <div className='w-full h-[500px] sm:h-[330px]  flex flex-col sm:flex-row sm:justify-center bg-[#f5f5f5]   '>
        {/* left section  */}
        <div className='sm:w-[30%] h-[300px]  flex sm:justify-end  justify-center items-center'>
        <img src={bike} alt=""className='w-[240px] md:w-[260px] lg:w-[300px] h-[240px] md:h-[260px] lg:h-[300px]' />
        </div>
          {/* right section  */}
          <div className='sm:w-[60%] h-[300px]  flex flex-col  items-center justify-center space-y-6'>
              <div className='w-[340px] 45hsize:w-[440px] md:w-[500px] lg:w-[600px] h-min  font-local4 font-bold t text-xl 45hsize:text-2xl lg:text-3xl  '>
                <h1>24/7 Fast & Reliable Delivery Service</h1>
              </div>
              {/* paragraph */}
              <div className='w-[340px] 45hsize:w-[400px] md:w-[500px] lg:w-[650px] 1tsize:w-[800px] h-min  font-sans   text-base lg:text-lg'>
                <h3>We offer round-the-clock delivery, ensuring that you receive our premium coconut oil at your convenience. With our fast and reliable service, your orders will be delivered swiftly, no matter where you are. Enjoy the ease of 24/7 access to natural and high-quality coconut oil.</h3>
              </div>
          </div>
    </div>
  )
}

export default Delivery
