import React from 'react'
import Typing_effect from './Typing_effect'
import sidImage from "../../assets/portfolio_pic.png";
import InfoGridSection from './About_cards';

const About_heading = () => {
  return (
    <div>
        <div>
            <h1 className='text-5xl font-bold '>About Me</h1>    
        </div>

        <div className='grid grid-cols-4  mt-10'>
            <div className='mt-10 text-lg  text-zinc-400 col-span-2 '>
                <Typing_effect text="Hey! I'm Siddhant Bhujbal from India , a passionate dev who loves to think different,
                build cool stuff, and learn like there's no finish line . I'm all about mixing creativity with code,
                from crafting sleek UIs in React.js to powering things up with Spring Boot and even exploring the spark of AI/ML .
                I follow my passion, chase ideas,   
                and keep leveling up 
                one bug fix, one feature, one breakthrough at a time."  delay="50"/>

            
            </div>
          
            <div className ="col-span-2 mt-0 md:ml-40 ">
                    <img
                      src={sidImage}
                      alt="Siddhant Bhujbal"
                      className="rounded-full w-60 h-60 object-cover border-4 border-gray-700 shadow-xl"
                    />
            </div>

        </div>
        
    </div>
  )
}

export default About_heading