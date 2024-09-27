import React from 'react'
import screenimg from "../assets/screen.png"
import  screen2 from "../assets/screen2.png"
const Help = () => {
  return (
    <div>
    <div className='w-full h-[650px] lg:h-[350px]   flex flex-col lg:flex-row items-center lg:items-start pt-[30px] sm:pt-[60px] pl-2 sm:pl-[20px] md:pl-[50px]  '>
        {/* first box  */}
       <div className='w-[330px] 4hsize:w-[380px] 45hsize:w-[420x] xs:w-[500px] sm:w-[540px] md:w-[600px] slg:w-[800px] lg:w-[600px] xl:w-[800px] h-[390px] 4hsize:h-[350px] 45hsize:h-[310px] sm:h-[280px] md:h-[250px]  '>
        {/* heading */}
        <div className='w-[330px] 4hsize:w-[370px] 45hsize:w-[420px] xs:w-[500px] sm:w-[540px] md:w-[600px] slg:w-[750px] lg:w-[600px] xl:w-[750px] h-[130px] 45hsize:h-[100px] md:h-[100px] lg:h-[120px] xl:h-[100px]   text-xl sm:text-2xl font-bold  '>
          <h1>ഈ വെബ്സൈറ്റിലൂടെ  ശുദ്ധമായ അജ്‌വ വെളിച്ചെണ്ണ എങ്ങനെ നിങ്ങൾക്ക് ലഭ്യമാക്കാം
          </h1>
        </div>
        {/* paragraph */}
        <div className='w-[320px] 4hsize:w-[370px] 45hsize::w-[420px] xs:w-[500px] sm:w-[540px] md:w-[600px] h-[240px] 4hsize:h-[195px] 45hsize:h-[150px]   text-lg pl-2 45hsize:pl-0'>
            <h3>ഈ വെബ്സൈറ്റ് ഓൺലൈനായി ഞങ്ങളുടെ ശുദ്ധമായ വെളിച്ചെണ്ണ നിങ്ങളിലേക്ക് എത്തിക്കുവാൻ ആണ്. നിങ്ങളുടെ വീട്ടിൽ ഇരുന്നുകൊണ്ട് തന്നെ ബുക്ക് ചെയ്യാൻ ഈ നടപടികൾ പിന്തുടരുക.

            </h3>
        </div>
       </div>
       {/* second box left  */}
       <div className='w-[300px] 4hsize:w-[360px] 45hsize:w-[400px] xs:w-[450px] sm:w-[540px] md:w-[600px] lg:w-[400px] xl:w-[600px] h-[180px] 4hsize:h-[200px] 45hsize:h-[250px]  '>
          <img src={screenimg} alt="" className='w-[300px] 4hsize:w-[360px] 45hsize:w-[400px] xs:w-[450px] sm:w-[540px] md:w-[600px] lg:w-[400px] xl:w-[600px] h-[180px] 4hsize:h-[200px] 45hsize:h-[250px] ' />
       </div>
    </div>
    {/* second layer */}
    <div className='w-full h-[250px]  flex flex-col lg:flex-row items-center lg:justify-center sm:pt-[20px]  '>
        {/* first box  */}
        <div className='w-[300px] xs:w-[400px] h-min  flex justify-center items-center'>
              <img src={screen2} alt="" className='w-[200px] xs:w-[300px] h-[80px] xs:h-[120px]' />
        </div>
        {/* second box  */}
        <div className='w-[340px] xs:w-[500px] h-[100px] flex justify-center items-center  xs:text-xl'>
           <h1>"whatsapp" ബട്ടണിൽ ക്ലിക്ക് ചെയ്യുക,ശേഷം നിങ്ങളുടെ ഓർഡർ അറിയിക്കുക
           </h1>
        </div>
    </div>
    </div>
  )
}

export default Help
