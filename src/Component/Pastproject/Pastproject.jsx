import React from 'react'
import Pastprojectcard from "../../ReuseComponent/Pastprojectcard"
import pr2 from "../../assets/pr2.png"

const Pastproject = () => {
  return (
    <section className=' pt-[5px] pb-[5px] pr-[10px] pl-[10px] bg-[#030712] text-[#ffffff] w-[100vw] h-[250vh]  '>

      {/* Project TOP SECTION */}
        <div className='flex flex-col justify-around items-center w-[100%] h-[100px] mb-[20px] '>
            <button className=' w-[40%] h-[30px] rounded-lg border-1 bg-[#374151]  '>PROJECTS</button>
            <div className=" flex flex-col justify-center
                          items-center w-[80%]" >
                            <p className="  " >Some of noteworthy Project I have  </p> 
                            <p> built</p>
                            </div>
        </div>

        {/* Project Card */}

        <div className='w-[100%] h-[80%]  '>
        <Pastprojectcard lang1="HTML"  lang2="CSS" lang3="JavaScript" lang4="React"   projectscreenshot={pr2} projectname="Timbu App"  projectabout="Lorem ipsum dolor 
        sit amet consectetur adipisicing elit. Laboriouatur, consequuntur, tempore at repellendus 
         voluptate ea quam atque similique accusantium illum possimus"/> 

        <Pastprojectcard lang1="HTML"  lang2="CSS" lang3="JavaScript" lang4="React"   projectscreenshot={pr2} projectname="Timbu App"  projectabout="Lorem ipsum dolor 
        sit amet consectetur adipisicing elit. Laboriouatur, consequuntur, tempore at repellendus 
         voluptate ea quam atque similique accusantium illum possimus"/> 
        <Pastprojectcard lang1="HTML"  lang2="CSS" lang3="JavaScript" lang4="React"   projectscreenshot={pr2} projectname="Timbu App"  projectabout="Lorem ipsum dolor 
        sit amet consectetur adipisicing elit. Laboriouatur, consequuntur, tempore at repellendus 
         voluptate ea quam atque similique accusantium illum possimus"/> 
        
        </div>
        
    </section>
  )
}

export default Pastproject