import React from 'react'
import profilepic from "../../assets/profilepic.png"
import twitter from "../../assets/twitter.png"
import location from "../../assets/location.png"




const Aboutme = () => {
  return (
    
    <div>
            <section className=" bg-[#374151] text-[#ffffff] pl-[10px] pr-[10px] justify-evenly 
                                pt-[15px] w-[100vw] h-[80vh] flex flex-col
                                sm:flex sm:flex-row sm:h-[50vh]">
                {/* PROFILE IMAGE */}
                <div className='sm:h-[90%] flex justify-center items-center h-[40%] mb-[15px] w-[100%] sm:w-[50%]'>
                    <img src={profilepic} alt="" className='rounded-[20px] w-[80%] h-[100%] sm: h-[80%] ' />
                </div>

                {/* ABOUT ME DETAILS */}
                <div className=' sm:h-[100%] flex w-[100%] h-[60%] flex-col 
                                justify-evenly sm:w-[50%] sm:justify-evenly
                                sm:flex sm:flex-col sm:items'>
                    <div className='sm:h-[35%] w-[100%] h-[52%]  '>
                        <h2 className='text-[20px] mb-[10px]'>Hi, I am Abdullateef</h2>
                        <p>I am a full-stack developer Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Qui suscipit
                            quae, pariatur et esse quod ex dolore inventore velit exercitationem commodi expedita laboriosam
                            vitae recusandae sit quidem magnam aperiam iure?</p>
                    </div>
                    {/* LOCATION AND AVAILABILITY */}
                    <div className=' flex-col w-[100%] h-[25%] flex justify-evenly'>
                    
                        
                    </div>

                    
                </div>
            </section>
        </div>
  )
}

export default Aboutme