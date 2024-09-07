import React from 'react'
import WorkExperienceCard from "../../ReuseComponent/WorkExperienceCard"

const WorkExperience = () => {
  return (
    <section className=' pt-[5px] pr-[5px] pl-[5px] bg-[#374151] text-[#ffffff] w-[100vw] h-[100vh]  '>

      {/* EXPERIENCE TOP SECTION */}
        <div className='flex flex-col justify-around items-center w-[100%] h-[15%] mb-[20px] '>
            <button className=' w-[20%] rounded[10px] '>Experience</button>
            <div className=" flex flex-col justify-center
                          items-center w-[80%]" >
                            <p className="  " >Here is a quick Summary of my  </p> 
                            <p> work experience</p>
                            </div>
        </div>

        {/* Experience Card */}
        <div className='  w-[100%] h-[80%]  flex flex-col justify-evenly items-center  '>
            <WorkExperienceCard className=""    organisation="upwork" jobrole="Sofware Developer" jobstatus="2020-2021"  
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