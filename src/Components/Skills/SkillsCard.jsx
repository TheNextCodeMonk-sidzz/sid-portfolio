import React from 'react'

const SkillsCard = ({icon,name,desc}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2
                backdrop-blur-sm
                 
               border border-black rounded-xl p-4 sm:p-6
               hover:border-white hover:shadow-white transition-all duration-300 cursor-pointer">
        <img className='invert w-8 h-8 sm:w-10 sm:h-10 object-contain' src={icon} alt={name} />
        <h1 className="text-white font-semibold text-sm sm:text-base lg:text-lg text-center">{name}</h1>
        <p className="text-center text-gray-400 font-medium text-xs sm:text-sm lg:text-sm">{desc}</p>
    </div>
  )
}

export default SkillsCard