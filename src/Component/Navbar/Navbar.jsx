import React from 'react'
import logo from '../../assets/logo.jpeg'
import greymenu from '../../assets/greymenu.png'

const Navbar = () => {
  return (
    <nav className=' bg-[#030712] w-[100vw] h-[12vh] flex justify-between 
                         items-center  pl-[20px] pr-[20px] mt-[10px]  sm:flex
                             sm:justify-between sm:items-center 
                          sm:pr-[5px] sm:h-[18vh] sm:w-[100vw]'>

      {/* Right Navigation Side */}
      <div className=' sm:w-[20%] sm:h-[80%] sm:flex sm:justify-start sm:pl sm:items-center   '>
        <img src={logo} alt="" className='w-[40px] h-[40px] rounded-lg sm:w-[50px] sm:h-[50px]' />
      </div>

      {/*   Left Navigation Side */}

      <img src={greymenu} alt="" className='w-[40px] h-[40px] sm:hidden' />
      {/* <div className='   '> */}


      <div className=' sm:w-[65%] sm:h-[100%] sm:flex sm:justify-evenly 
                        sm:text-lg sm:font-bold sm:items-center lo:hidden sm:text-[#ffffff]
                        lg:w-[45%]'>  

      <a href=""> About</a>
        <a href="">Work</a>
        <a href="">Testimonies</a>
        <a href="">Contact</a>
        <a href=""><button className='bg-[#ffffff] text-[#000000] rounded-lg border-4 w-[150px]   '>Download Cv</button></a> 
      </div>

      {/* <div className=' sm:bg-green-600  
                               
                                sm:contents 
                               '> */}
                                {/* <div className='bg-red-600 w-[20vw] h-[20vh]'  ></div> */}
        
      {/* </div> */}

    </nav>

  )
}

export default Navbar