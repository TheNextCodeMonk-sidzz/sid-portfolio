import React from 'react'
import Typing_effect from './Typing_effect'
import sidImage from "../../assets/portfolio_pic.png";
import InfoGridSection from './About_cards';

const About_heading = () => {
  return (
    <div>
        <div>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold lg:mx-8 text-white'>About Me ...</h1>    
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-0 mt-8 lg:mt-20 lg:mx-8'>
            <div className='text-base sm:text-lg lg:text-lg text-zinc-400 lg:col-span-2 order-2 lg:order-1'>
                <Typing_effect text="Hey! I'm Siddhant Bhujbal from India , a passionate dev who loves to think different,
                build cool stuff, and learn like there's no finish line . I'm all about mixing creativity with code,
                from crafting sleek UIs in React.js to powering things up with Spring Boot and even exploring the spark of AI/ML .
                I follow my passion, chase ideas,   
                and keep leveling up 
                one bug fix, one feature, one breakthrough at a time."  delay="50"/>
            </div>
          
            <div className="lg:col-span-2 order-1 lg:order-2 flex justify-center lg:justify-end">
                <img
                  src={sidImage}
                  alt="Siddhant Bhujbal"
                  className="rounded-full w-48 h-48 sm:w-56 sm:h-56 lg:w-60 lg:h-60 object-cover border-4 border-gray-700 shadow-xl"
                />
            </div>
        </div>
    </div>
  )
}

export default About_heading