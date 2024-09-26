import React from 'react'
import Machine from "../assets/machine.jpg"
const Aboutbox = ({head1,paragraph1,head2,paragraph2,img}) => {
  return (
    <div>
      <div className="w-full h-[700px]  45hsize:h-[650px] xs:h-[600px] slg:h-[330px] 1tsize:h-[250px]  bg-[#f5f5f5] flex flex-col slg:flex-row justify-center items-center">
        {/* first box  */}
        <div className="w-[340px] 4hsize:w-[400px]  45hsize:w-[450px] xs:w-[545px] sm:w-[600px] lg:w-[700px] 1tsize:w-[900px] h-[480px] 45hsize:h-[400px] xs:h-[330px] 1tsize:h-[250px]  space-y-2 xs:space-y-0">
          {/* first box inside */}
          <div className="w-[340px] 4hsize:w-[400px]  45hsize:w-[450px] xs:w-[545px] sm:w-[600px] 1tsize:w-[900px] h-[230px] 45hsize:h-[200px] xs:h-[160px] lg:h-[160px] 1tsize:h-[120px]  pl-[10px] 45hsize:pl-[50px] space-y-2 text-gray-600">
            <h2 className="font-local4 font-bold">{head1}</h2>
            <div className="w-[300px] 4hsize:w-[320px]  45hsize:w-[380px] xs:w-[480px] sm:w-[500px] 1tsize:w-[800px] h-min font-local2 font-semibold">
            <p>{paragraph1}</p>
            </div>
          </div>
          {/* second box */}
          <div className="w-[340px] 4hsize:w-[400px]  45hsize:w-[450px] xs:w-[545px] sm:w-[600px] 1tsize:w-[900px] h-[230px] 45hsize:h-[200px] xs:h-[160px] lg:h-[160px] 1tsize:h-[120px]  pl-[10px] 45hsize:pl-[50px] space-y-2 text-gray-600 ">
            <h2 className="font-local4 font-bold">{head2}</h2>
            <div className="w-[300px] 4hsize:w-[320px] 45hsize:w-[380px] xs:w-[480px] sm:w-[500px] 1tsize:w-[800px] h-min font-local2 font-semibold">
            <p>{paragraph2}</p>
            </div>
          </div>
        </div>
        {/* image section  */}
        <div className="w-full slg:w-[500px] h-min flex justify-center items-center    ">
           <img src={img} alt="" className="w-[350px] 45hsize:w-[400px] h-[200px] 45hsize:h-[240px]" />
        </div>
      </div>
    </div>
  )
}

export default Aboutbox
