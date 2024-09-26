import React from 'react'

const Footerbox = ({heading,p1,p2,p3}) => {
  return (
    <div>
       <div className="w-[170px] slg:w-[200px] h-[170px] md:h-[230px]    border-white flex flex-col items-center text-white ">
          <h2 className="font-local2 font-semibold text-xl underline">{heading}</h2>
          <div className="w-[150px] h-[170px]  border-white flex flex-col items-center space-y-4 pt-5 font-local2 text-lg">
             <h3>{p1}</h3>
             <h3>{p2}</h3>
             <h3>{p3}</h3>
          </div>
       </div>
    </div>
  )
}

export default Footerbox
