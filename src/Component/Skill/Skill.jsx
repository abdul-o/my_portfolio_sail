import React from 'react'
import SkillCard from "../../ReuseComponent/SkillCard"
import js from "../../assets/js.png"
import react from "../../assets/react.png"
import tailwind from "../../assets/tailwind.png"
import figma from "../../assets/figma.png"

const Skill = () => {
  return (
    <div>
        <section className='text-[#ffffff] bg-[#374151] pl-[10px] pr-[10px]  w-[100vw] h-[300px] flex flex-col justify-start '>
            {/* Skills heading */}
            <div className='  w-[100%] h-[20%] flex flex-col items-center '>
            <button>Skills</button>
            <p>The skills am really god at</p>
            </div>

            {/* skill list */}

            <div className='flex-wrap w-[100vw] h-[70%] flex justify-evenly items-start '>
              <div className='w-[30%] h-[100px]  '>  <SkillCard skillimage={js} skillname="JavaScript" /> </div>
              <div className='w-[30%] h-[100px]  '>  <SkillCard skillimage={react} skillname="JavaScript" /> </div>
              <div className='w-[30%] h-[100px]  '>  <SkillCard skillimage={tailwind} skillname="JavaScript" /> </div>
              <div className='w-[30%] h-[100px]  '>  <SkillCard skillimage={figma} skillname="JavaScript" /> </div>
              <div className='w-[30%] h-[100px]  '>  <SkillCard skillimage={js} skillname="JavaScript" /> </div>
              <div className='w-[30%] h-[100px]  '>  <SkillCard skillimage={js} skillname="JavaScript" /> </div>
              
            </div>
        </section>
        
    </div>
  )
}

export default Skill