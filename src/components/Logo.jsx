import React from 'react'
import logo from '../assets/images/logo.png'

const Logo = () => {
  return (
    <div className="absolute top-[30px] left-[105px] flex items-center gap-[8px]">
    <img 
      src={logo}
      alt="Logo" 
      className="w-[154.49px] h-[24px] hover:cursor-pointer"
    />
  </div>
  
  )
}

export default Logo
