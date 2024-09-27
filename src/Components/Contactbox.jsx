import React from 'react'

const Contactbox = ({icon,heading,text}) => {
  return (
    <div>
       <div className="w-[300px] h-[80px]  flex shadow-custom-outer1">
              {/* icon  */}
              <div className="w-[70px] h-[80px]  flex justify-center items-center bg-green-700">
                {icon}
              </div>
              <div className="w-[280px] h-[80px] flex flex-col py-3 text-white bg-green-700 ">
                  <h2 className="font-local2 font-bold text-xl">{heading}</h2>
                  <h4  className='text-sm'>{text}</h4>
              </div>
            </div>
    </div>
  )
}

export default Contactbox
