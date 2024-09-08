import React from 'react'
import SkillCard from "../../ReuseComponent/SkillCard"
import js from "../../assets/js.png"
import react from "../../assets/react.png"
import tailwind from "../../assets/tailwind.png"
import figma from "../../assets/figma.png"
import nextjs from "../../assets/nextjs.png"
import css from "../../assets/css.png"
import html from "../../assets/html.png"
import mongodb from "../../assets/mongodb.png"

const Skill = () => {
  return (
    <div>
        <section className='text-[#ffffff] bg-[#030712] pl-[10px] pr-[10px]  w-[100vw] h-[80vh] flex flex-col justify-start '>
            {/* Skills heading */}
            <div className='  w-[100%] h-[30%] flex flex-col items-center '>
            <button>Skills</button>
            <p>The skills am really god at</p>
            </div>

            {/* skill list */}

            <div className='flex-wrap w-[100vw] h-[70%] flex justify-evenly items-start
                            sm:flex sm:justify-evenly sm:items-start '>
              <div className='w-[30%] h-[100px] mb-[18px] sm:w-[25%]  '>  <SkillCard skillimage={css} skillname="JavaScript" /> </div>
              <div className='w-[30%] h-[100px] mb-[18px]  sm:w-[25%] '>  <SkillCard skillimage={html} skillname="JavaScript" /> </div>
              <div className='w-[30%] h-[100px] mb-[18px] sm:w-[25%] '>  <SkillCard skillimage={js} skillname="JavaScript" /> </div>
              <div className='w-[30%] h-[100px] mb-[18px] sm:w-[25%] '>  <SkillCard skillimage={react} skillname="JavaScript" /> </div>
              <div className='w-[30%] h-[100px] mb-[18px] sm:w-[25%]'>  <SkillCard skillimage={tailwind} skillname="JavaScript" /> </div>
              <div className='w-[30%] h-[100px] mb-[18px] sm:w-[25%]. '>  <SkillCard skillimage={nextjs} skillname="JavaScript" /> </div>
              <div className='w-[30%] h-[100px] mb-[18px] sm:w-[25%]. '>  <SkillCard skillimage={figma} skillname="JavaScript" /> </div>
              <div className='w-[30%] h-[100px] mb-[18px] sm:w-[25%]. '>  <SkillCard skillimage={mongodb} skillname="JavaScript" /> </div>
              
            </div>
        </section>
        
    </div>
  )
}

export default Skill