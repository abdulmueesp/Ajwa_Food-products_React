import React from 'react'

const Button = ({to,classname,children}) => {
  return (
    <div>
      <button 
       to={to}
       className={classname}
      >
      {children}
      </button>
    </div>
  )
}

export default Button
