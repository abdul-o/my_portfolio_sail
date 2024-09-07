import React from 'react'
import logo from '../../assets/logo.jpeg'
import menu from '../../assets/menu.png'

const Navbar = () => {
  return (
    <div>
        <nav className=' bg-[#030712] w-[100vw] h-[10%] flex justify-between  pl-[10px] pr-[10px] mt-[10px]'>
            <div>
                <img src={logo} alt="" className='w-[40px] h-[40px]'/>
            </div>
            <div>
              <img src={menu} alt="" className='w-[40px] h-[40px]'/>
            </div>
        </nav>
    </div>
  )
}

export default Navbar