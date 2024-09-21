import React from 'react'

const Button = ({to,classname,children,aos, aosDelay}) => {
  return (
    <div>
      <button 
       to={to}
       className={classname}
       data-aos={aos}
      data-aos-delay={aosDelay}
      >
      {children}
      </button>
    </div>
  )
}

export default Button
