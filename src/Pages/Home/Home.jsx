import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Hero from '../../Component/Hero/Hero'
import Skill from '../../Component/Skill/Skill'
import WorkExperience from '../../Component/WorkExperience/WorkExperience'
import Aboutme from '../../Component/Aboutme/Aboutme'
import Pastproject from '../../Component/Pastproject/Pastproject'


const Home = () => {
  return (
    <div>
        <Navbar />
         <Hero />
         <Aboutme />
         <Skill />
          <WorkExperience />
          <Pastproject />
    </div>
  )
}

export default Home