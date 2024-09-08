import React from 'react'
import logo from '../../assets/logo.jpeg'
import greymenu from '../../assets/greymenu.png'

const Navbar = () => {
  return (
        <nav className=' bg-[#030712] w-[100vw] h-[12vh] flex justify-between items-center  pl-[12px] pr-[12px] mt-[10px]'>
            <div>
                <img src={logo} alt="" className='w-[40px] h-[40px] rounded-lg'/>
            </div>
            <div>
              <img src={greymenu} alt="" className='w-[40px] h-[40px]'/>
            </div>
        </nav>
  
  )
}

export default Navbar