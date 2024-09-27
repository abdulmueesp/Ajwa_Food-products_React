import React from 'react'
import whatsapp from "../assets/whatsapp.png"
const Whatsapp = () => {
  return (
    
      <a 
      href="https://wa.me/+919207537988"
      className="fixed right-4 bottom-20 z-50"
      >
        <img src={whatsapp} alt="" className='w-[70px] h-[70px] rounded-full animate-bounce' />
      </a>
    
  )
}

export default Whatsapp
