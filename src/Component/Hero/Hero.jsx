import React from 'react'
import profilepic from "../../assets/profilepic.png"
import twitter from "../../assets/twitter.png"
import github from "../../assets/github.png"
import available from "../../assets/available.png"
import location from "../../assets/location.png"
import me from "../../assets/me.png"

const Hero = () => {
    return (
        <div>
            <section className=" bg-[#030712] text-[#ffffff] pl-[10px] pr-[10px] justify-evenly 
                                pt-[15px] w-[100vw] h-[80vh] flex flex-col
                                sm:flex sm:flex-row-reverse sm:h-[50vh] sm:pl-[25px] sm:pr-[25px]">
                {/* PROFILE IMAGE */}
                <div className='   sm:h-[100%] flex justify-center items-center h-[40%] 
                                  mb-[15px] w-[100%] sm:w-[50%]'>
                    <img src={me} alt="" className='rounded-[20px] w-[80%] h-[100%] ' />
                </div>

                {/* ABOUT ME DETAILS */}
                <div className='   sm:h-[100%] flex w-[100%] h-[60%] flex-col 
                                justify-evenly sm:w-[50%] sm:justify-evenly'>
                    <div className='sm:h-[42%] w-[100%] h-[52%]  '>
                        <h2 className='text-[20px]'>Hi, I am Abdullateef</h2>
                        <p>I am a full-stack developer Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Qui suscipit
                            quae, pariatur et esse quod ex dolore inventore velit exercitationem commodi expedita laboriosam
                            vitae recusandae sit quidem magnam aperiam iure?</p>
                    </div>
                    {/* LOCATION AND AVAILABILITY */}
                    <div className='  flex-col w-[100%] h-[25%] flex justify-evenly'>
                        <div className='flex h-[30%] w-[100%] '>
                             <img src={location} alt="" className='mr-[10px] h-[15px] w-[15px]' /> 
                            <span>Lagos Nigeria</span>
                        </div>
                        <div className='flex h-[30%] w-[100%] '>
                             <img src={available} alt="" className='mr-[10px] w-[15px] h-[15px]' />
                            <span>Available for new project</span>
                        </div>
                    </div>

                    {/* SOCIAL MEDIA */}
                    <div className=' flex justify-start items-center w-[100%] h-[10%]'>
                        <img src={github} alt="" className='mr-[20px]' />
                        <img src={twitter} alt="" className='mr-[20px]' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero