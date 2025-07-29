import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Project_card = ({image,title,description,github}) => {
  return (
    <div className='bg-gray-800 rounded-xl flex flex-col hover:scale-[1.02] transition-transform duration-500 shadow-lg'>
        <div className='h-60 w-full '>
            <img src=''
                alt='Aim Trainer App'
                className='text-center' items-center  />

        </div>
        <div className='p-4 flex-col bg-zinc-400 justify-between h-30  gap-4'>
            <div>
                <h2 className='text-xl text-white text-sans text-left font-bold  '>{title}</h2>
                <p className='text-sm text-white  text-sans '>{description}</p>
            </div>
            <div className='mt-2'>
            < a href={github}
                target="_blank"
                className='inline-flex items-left text-sm gap-2 text-gray-900 bg-gradient-to-r from-zinc to-white hover:scale-110 transition-all duration-500 mt-auto p-2 bg-zinc-500 rounded  mb-2 '>View On Github<span ><GoArrowUpRight  className='size-4 mt-0.5 '/></span></a>
            </div>

        </div>
        
    </div>
  )
}

export default Project_card