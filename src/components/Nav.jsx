import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav className="absolute top-[30px] left-[450px] w-[620px] h-[24px] flex items-center justify-between">
      <ul className="flex gap-[30px] font-bold text-gray-700">
        <li><a href="#" className="hover:text-blue-500">Home</a></li>
        <li><a href="#" className="hover:text-blue-500">Service</a></li>
        <li><a href="#" className="hover:text-blue-500">Features</a></li>
        <li><a href="#" className="hover:text-blue-500">Product</a></li>
        <li><a href="#" className="hover:text-blue-500">Testimonial</a></li>
        <li><a href="#" className="hover:text-blue-500">FAQ</a></li>
      </ul>
    </nav>
    </div>
  )
}

export default Nav
