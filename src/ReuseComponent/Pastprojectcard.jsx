import React from 'react'

const Pastprojectcard = (props) => {
  return (
    <div className='rounded-lg bg-[#374151] text-[#ffffff]  flex flex-col m-auto w-[90vw] h-[50vh]
                    pt-[10px] sm:flex sm:flex-row '>
      <div className=' w-[100%] h-[40%] '>
        <img src={props.projectscreenshot} alt="" className='rounded-lg  h-[80%] w-[80%] m-auto' />
      </div>

      {/* Project Details */}
      <div className='bg-[#4b5563] h-[60%] w-[100%] rounded-lg'>
      <div className=' w-[90%] m-auto h-[100%] flex flex-col justify-evenly '>
        <h1> {props.projectname} </h1>
        <p> {props.projectabout} </p>
        {/* Project stack */}
        <div>
          <button className='rounded-lg style-sm    '>{props.lang1} </button>
          <button>{props.lang1}</button>
          <button>{props.lang1}</button>
          <button>{props.lang1}</button>
          <button>{props.lang1}</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Pastprojectcard