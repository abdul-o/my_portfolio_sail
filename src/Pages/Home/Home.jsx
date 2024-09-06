import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Hero from '../../Component/Hero/Hero'
import Skill from '../../Component/Skill/Skill'
import WorkExperience from '../../Component/WorkExperience/WorkExperience'


const Home = () => {
  return (
    <div>
        <Navbar />
         <Hero />
         <Skill />
         <WorkExperience />
    </div>
  )
}

export default Home