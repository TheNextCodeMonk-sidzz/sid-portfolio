import React, { useState } from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa";

const Project_card = ({image, title, description, github, tech, index}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className='group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl '
      style={{backgroundColor: '#1C1C1C'}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <div className='relative h-48 sm:h-56 lg:h-64 overflow-hidden'>
        <img 
          src={image}
          alt={`${title} Project`}
          className='w-full h-full transition-transform duration-500 group-hover:scale-110'
        />
        
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
        
        <div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0'>
          <a 
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className='flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors'
          >
            <FaGithub className='text-white text-lg' />
          </a>
        </div>
      </div>

      <div className='p-4 sm:p-6'>
        <div className='mb-4'>
          <h3 className='text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-zinc-400 transition-colors'>
            {title}
          </h3>
          <p className='text-gray-300 leading-relaxed text-sm sm:text-base lg:text-sm'>
            {description}
          </p>
        </div>

        <a 
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className='inline-flex items-center gap-2 px-4 py-3 sm:py-2 lg:py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center text-sm sm:text-base lg:text-base'
          style={{
            backgroundColor: isHovered ? '#181818' : '#2A2A2A',
            color: '#FFFFFF'
          }}
        >
          <FaGithub className='text-sm sm:text-base' />
          <span>View Code</span>
          <GoArrowUpRight className='text-sm sm:text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
        </a>
      </div>

      <div className='absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/10 transition-colors duration-300 pointer-events-none' />
    </div>
  )
}

export default Project_card