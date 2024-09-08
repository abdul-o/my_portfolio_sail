import React from 'react'

const Pastprojectcard = (props) => {
  return (
    <div className='rounded-lg bg-[#374151] text-[#ffffff]  flex flex-col m-auto w-[90vw] h-[75vh]
                      mb-[20px] pt-[10px] sm:flex sm:flex-row '>
      <div className=' w-[100%] h-[35%] '>
        <img src={props.projectscreenshot} alt="" className='rounded-lg  h-[90%] w-[85%] m-auto' />
      </div>

      {/* Project Details bg-[#4b5563] */}
      <div className='bg-[#4b5563] h-[65%] w-[100%] rounded-lg'>
      <div className='  w-[85%] m-auto h-[100%] flex flex-col justify-evenly '>
        <h1> {props.projectname} </h1>
        <p> {props.projectabout} </p>
        {/* Project stack */}
        <div>
          <button className=' mr-[5px] mb-[5px] w-[20%] h-[30px] rounded-lg border-1 bg-[#374151] '>{props.lang1}</button>
          <button className=' mr-[5px] mb-[5px]  w-[30%] h-[30px] rounded-lg border-1 bg-[#374151] '>{props.lang2}</button>
          <button className='mr-[5px] mb-[5px] w-[40%] h-[30px] rounded-lg border-1 bg-[#374151] '>{props.lang3}</button>
          <button className=' mr-[5px] mb-[5px] w-[20%] h-[30px] rounded-lg border-1 bg-[#374151] '>{props.lang4}</button>
          
        </div>
        </div>
      </div>
    </div>
  )
}

export default Pastprojectcard