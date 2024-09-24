import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './sidebar'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <nav className="bg-[#1053D4] pb-6 px-4 md:px-10 pt-10 overflow-x-hidden">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-36">
        <div className="flex justify-between items-center w-full md:w-auto">
          <div className="text-white text-xl font-bold flex items-center gap-2 md:justify-center gap-4">
            <img src={logo} alt="logo" className='w-10 h-10' />
            <span>MES Services</span>
          </div>
          <button className="md:hidden bg-[#CAEE5A] px-4 py-2 font-semibold rounded-full text-black hover:bg-[#B8D54A]" onClick={toggleSidebar}>
            Menu
          </button>
        </div>
        <div className='flex items-center justify-center gap-4'>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/" className="text-gray-300 hover:text-white">About-Us</Link>
          <Link to="/services" className="text-gray-300 hover:text-white">Services</Link>
          <Link to="/product" className="text-gray-300 hover:text-white">Product</Link>
          
        </div>
        <div className='flex items-center justify-center hidden md:flex'>
          <a href="#footer" className="bg-[#CAEE5A] px-4 py-2 font-semibold rounded-full text-black hover:bg-[#B8D54A]">
            Contact Us
          </a>
        </div>
        </div>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
    </nav>
  )
}

export default Navbar