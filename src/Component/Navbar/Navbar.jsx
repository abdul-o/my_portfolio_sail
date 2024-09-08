import React from 'react'
import logo from '../../assets/logo.jpeg'
import greymenu from '../../assets/greymenu.png'

const Navbar = () => {
  return (
        <nav className=' bg-[#030712] w-[100vw] h-[12vh] flex justify-between 
                         items-center  pl-[20px] pr-[20px] mt-[10px]  sm:flex
                             sm:justify-between sm:items-start 
                          sm:pr-[5px] sm:h-[18vh] '>

                          {/* Right Navigation Side */}
            <div className=' sm:w-[20%] sm:h-[80%] sm:flex sm:justify-start sm:pl sm:items-center   '>
                <img src={logo} alt="" className='w-[40px] h-[40px] rounded-lg sm:w-[50px] sm:h-[50px]'/>
            </div>

            {/* Left Navigation Side */}
            <img src={greymenu} alt="" className='w-[40px] h-[40px] sm:hidden'/>
            <div className='lo:hidden sm:contents sm:text-xl sm:font-bold  sm:w-[70%] sm:h-[80%]   '>
      
              <div className='sm:item sm:w-[100%] sm:h-[80%]  sm: text-[#ffffff] 
                               sm:flex sm:justify-evenly sm:items-center'>
                <a href=""> About</a>
                <a href="">Work</a>
                <a href="">Testimonies</a>
                <a href="">Contact</a>
                <a href=""><button className='bg-[#ffffff] text-[#000000] rounded-lg border-4 w-[150px]   '>Download Cv</button></a>
              </div>
            </div>
        </nav>
  
  )
}

export default Navbar