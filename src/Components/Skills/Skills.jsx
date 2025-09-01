import React from 'react'
import Skills_Data from '../../assets/skills_data.js'
import SkillsCard from './SkillsCard.jsx'

const Skills = () => {
  return (
    <div id="skills" className=" min-h-screen flex flex-col  px-20  py-20 text-white" style={{backgroundColor: '#121212'}}>
        <div className=' mb-4 border-b border-gray-800 pb-5'>
            <h1 className='text-5xl font-bold text-white text-sans '
            >Skills </h1>

            <p className='text-gray-400 text-lg md:text-xl  mt-4  leading-relaxed '>A collection of powerful tools and spells I wield to build magical solutions.</p>

        </div>
        <div>
           <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1  items-stretch ' >
                 {Skills_Data.map((skill)=>(<SkillsCard key={skill.name} icon={skill.icon} name={skill.name} desc={skill.desc} />)
                )}
           </div>

        </div>
    </div>
  )
}

export default Skills