import React from 'react'

const WorkExperienceCard = (props) => {
  return (
    <div className='bg-[#4b5563]    mb-[20px]   w-[90vw] h-[30vh] pl-[30px] rounded-lg pr-[10px] pt-[10px] pb-[10px] '>
        <div className='w-[80vw] h-[45%] flex flex-col justify-between'>
        <h1 className='text-[#10b981] font-bold  font-lg'    > {props.organisation}  </h1>
        
        <h3>  {props.jobstatus}  </h3>
        <h3 className=' font-bold'> {props.jobrole} </h3>
        </div>
        {/* job responsibility */}
        <div className='w-[80vw] h-[55%] pl-[10px] '>
            <ul className='list-disc list-inside   '>
                <li>{props.jd1} </li>
                <li>{props.jd2} </li>
                <li>{props.jd3} </li>
                
            
            </ul>
        </div>
    </div>
  )
}

export default WorkExperienceCard