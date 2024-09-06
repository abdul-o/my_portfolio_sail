import React from 'react'
import WorkExperienceCard from "../WorkExperience/WorkExperience"

const WorkExperience = () => {
  return (
    <section className='text-[#ffffff] w-[100vw] h-[60vh]  '>
        <div className='flex justify-center items-center w-[100%] h-[20vh]  '>
            <button className=' w-[20%]  '>Experience</button>
            <p>Here is a quick Summary of my work experience</p>
        </div>

        {/* Experience Card */}
        <div className='w-[100%] h-[20vh]  flex flex-col justify-evenly items-center  '>
            <WorkExperienceCard organisation="upwork" jobrole="Sofware Developer" jobstatus="2020-2021"  
                           jd1="Creation of software" jd2="Creation of software" jd3="Creation of software"/>
            <WorkExperienceCard organisation="upwork" jobrole="Sofware Developer" jobstatus="2020-2021"  
                           jd1="Creation of software" jd2="Creation of software" jd3="Creation of software"/>
            <WorkExperienceCard organisation="upwork" jobrole="Sofware Developer" jobstatus="2020-2021"  
                           jd1="Creation of software" jd2="Creation of software" jd3="Creation of software"/>
        </div>
    </section>
  )
}

export default WorkExperience