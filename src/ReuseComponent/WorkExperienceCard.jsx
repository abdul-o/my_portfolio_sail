import React from 'react'

const WorkExperienceCard = (props) => {
  return (
    <div>
        <div className='w-[80vw] h-[50px] flex flex-col justify-evenly'>
        <h1> {props.organisation}  </h1>
        <h3> {props.jobrole} </h3>
        <h3>  {props.jobstatus}  </h3>
        </div>
        {/* job responsibility */}
        <div>
            <ul>
                <li>{props.jd1} </li>
                <li>{props.jd2} </li>
                <li>{props.jd3} </li>
                <li>{props.jd4} </li>
            
            </ul>
        </div>
    </div>
  )
}

export default WorkExperienceCard