import React from 'react'
import { Link } from 'react-router-dom';
const Button = ({to,classname,children,aos, aosDelay}) => {
  return (
    <div>
      <Link
      to={to}>
      <button 
       className={classname}
       data-aos={aos}
      data-aos-delay={aosDelay}
      >
      {children}
      </button>
      </Link>
    </div>
  )
}

export default Button
