import React from 'react'

const SkillCard = (props) => {
  return (
    <div className='w-[100px] h-[80px]  flex flex-col justify-evely '>
        <img src={props.skillimage} alt="" className='w-[100%] h-[80%] ' />
        <span className='w-[100%] h-[20%] '> {props.skillname} </span>
    </div>
  )
}

export default SkillCard